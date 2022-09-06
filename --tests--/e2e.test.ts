var request = require('supertest');
var { app } = require('..');

let user1_accesstoken = '';
let user2_accesstoken = '';
let admin_accesstoken = '';
let article1_id = '';
let tests1_id = '';
let user1_id = '';
let user2_id = '';
let comment1_id = '';

test('should sign up as user 1', async () => {
    let res = await request(app)
                    .post('/api/users/signUp')
                    .send({
                        userName : 'userName1',
                        password : 'user1password',
                        email    : 'user1@gmail.com'
                    }).expect(200);
                    user1_accesstoken = res.text;
});

test('should log in as user 1', async () => {
        await request(app)
            .post('/api/users/LogIn')
            .send({
                password : 'user1password',
                email    : 'user1@gmail.com'
            }).expect(200);
});


test('should sign up as user 2', async () => {
    let res = await request(app)
                    .post('/api/users/signUp')
                    .send({
                        userName : 'userName2',
                        password : 'user2password',
                        email    : 'user2@gmail.com'
                    }).expect(200);
                    user2_accesstoken = res.text;
});

test('user 1 should publish an article', async () => {
        await request(app)
            .post('/api/articles/userName1')
            .set('accesstoken', user1_accesstoken)
            .send({
                title : 'article 1',
                desc : 'article 1 desc',
                catagory    : 'article 1 desc'
            }).expect(200);
});

test('user 1 should publish a test', async () => {
        await request(app)
            .post('/api/tests/userName1')
            .set('accesstoken', user1_accesstoken)
            .send({
                title : 'test 1',
                desc : 'test 1 desc',
                questions : [{
                    title : 'question 1 title',
                    desc : 'question 1 desc',
                    answers : [{
                        desc : 'answer 1 desc'
                    },{
                        desc : 'answer 2 desc'
                    }],
                    correct : 1
                }]
            }).expect(200);
});

test('should get article 1 id', async () => {
    let res = await request(app)
                .get('/api/articles/')
                .send()
                .expect(200);
        article1_id = res.body[0]._id;
});

test('should get test 1 id', async () => {
    let res = await request(app)
                .get('/api/tests/')
                .send()
                .expect(200);
        tests1_id = res.body[0]._id;
});

test('user 2 should comment on article 1', async () => {
            await request(app)
                .post(`/api/articles/${article1_id}/comment/userName2`)
                .set('accesstoken', user2_accesstoken)
                .send({
                    desc : 'user 2 comment'
                })
                .expect(200);
});

test('get user 2 id', async () => {
    let res = await request(app)
        .get('/api/users/getId/userName2')
        .set('accesstoken', user2_accesstoken)
        .send()
        .expect(200);
    user2_id = res.body;
});

test('get public user 2 for comment view ', async () => {
    await request(app)
        .get(`/api/users/public/${user2_id}`)
        .send()
        .expect(200);
});

 test('get article 1 and check if article 1 have 1 comment ', async () => {
    let res = await request(app)
        .get(`/api/articles/${article1_id}`)
        .send();
    expect(res.body.comments.length).toBe(1);
});

test('get user 2 and check if user 2 commented on article 1', async () => {
    let res = await request(app)
        .get(`/api/users/userName2`)
        .set('accesstoken', user2_accesstoken)
        .send();
    expect(res.body.comments.length).toBe(1);
});

test('user 2 should solve test 1', async () => {
        await request(app)
            .post(`/api/users/userName2/solveTest/${tests1_id}/`)
            .set('accesstoken', user2_accesstoken)
            .send({
                degree : 50
            })
            .expect(200);
});


test('get user 2 and check if he had solved test 1', async () => {
    let res = await request(app)
        .get('/api/users/userName2')
        .set('accesstoken', user2_accesstoken)
        .send();
    expect(res.body.solvedTests.length).toBe(1);
});


test('get test 1 and check if it is solved by user 2', async () => {
    let res = await request(app)
            .get(`/api/tests/${tests1_id}/`)
            .send();
    expect(res.body.solvedBy[0]).toBe(user2_id);
});

test('update article 1', async () => {
    await request(app)
    .put(`/api/articles/${article1_id}/userName1`)
    .set('accesstoken', user1_accesstoken)
    .send({
        title : 'article 1 after update',
        desc : 'article 1 desc after update',
        catagory    : 'article 1 desc after update'
    })
    .expect(200);
});

test('update test 1', async () => {
    await request(app)
    .put(`/api/tests/${tests1_id}/userName1`)
    .set('accesstoken', user1_accesstoken)
    .send({
        title : 'test 1 after update',
        desc : 'test 1 desc after update',
        questions : [{
            title : 'question 1 title after update',
            desc : 'question 1 desc after update',
            answers : [{
                desc : 'answer 1 desc after update'
            },{
                desc : 'answer 2 desc after update'
            }],
            correct : 2
        }]
    })
    .expect(200);
});

test('get article 1 and check if it is updated', async () => {
    let res = await request(app)
            .get(`/api/articles/${article1_id}/`)
            .send();
    expect(res.body.title).toBe('article 1 after update');
});

test('get test 1 and check if it is updated', async () => {
    let res = await request(app)
            .get(`/api/tests/${tests1_id}/`)
            .send();
    expect(res.body.title).toBe('test 1 after update');
});

test('update comment 1', async () => {
    let res = await request(app)
        .get(`/api/users/userName2`)
        .set('accesstoken', user2_accesstoken)
        .send();
    comment1_id = res.body.comments[0];
            await request(app)
            .put(`/api/articles/${comment1_id}/updateComment/userName2`)
            .set('accesstoken', user2_accesstoken)
            .send({
                desc : 'comment 1 after update'
            })
            .expect(200);
});

test('check if comment 1 is updated', async () => {
    let res = await request(app)
            .get(`/api/articles/${article1_id}`)
            .send();
        expect(res.body.comments[0].desc).toBe('comment 1 after update')
});

test('delete comment 1', async () => {
        await request(app)
        .delete(`/api/articles/${comment1_id}/deleteComment/userName2`)
        .set('accesstoken', user2_accesstoken)
        .send()
        .expect(200);
});

test('delete article 1', async () => {
            await request(app)
            .delete(`/api/articles/${article1_id}/userName1`)
            .set('accesstoken', user1_accesstoken)
            .send()
            .expect(200);
});

test('delete test 1', async () => {
    await request(app)
    .delete(`/api/tests/${tests1_id}/userName1`)
    .set('accesstoken', user1_accesstoken)
    .send()
    .expect(200);
});

test('user 1 should republish an article', async () => {
    await request(app)
        .post('/api/articles/userName1')
        .set('accesstoken', user1_accesstoken)
        .send({
            title : 'article 1',
            desc : 'article 1 desc',
            catagory    : 'article 1 desc'
        }).expect(200);
});

test('user 1 should republish a test', async () => {
    await request(app)
        .post('/api/tests/userName1')
        .set('accesstoken', user1_accesstoken)
        .send({
            title : 'test 1',
            desc : 'test 1 desc',
            questions : [{
                title : 'question 1 title',
                desc : 'question 1 desc',
                answers : [{
                    desc : 'answer 1 desc'
                },{
                    desc : 'answer 2 desc'
                }],
                correct : 1
            }]
        }).expect(200);
});

test('login as admin', async () => {
    let res = await request(app)
                    .post('/admin/login')
                    .send({
                        userName : 'abdo20033110',
                        password : 'AdminPassword.com'
                    })
                    .expect(200);
    admin_accesstoken = res.body.token;
});

test('verfiy admin', async () => {
    await request(app)
        .get('/admin/verfiyAdmin')
        .set('accesstoken', admin_accesstoken)
        .send()
        .expect(200);
});

test('admin should get articles and select article 1 id', async () => {
    let res = await request(app)
                    .get('/admin/articles')
                    .set('accesstoken', admin_accesstoken)
                    .send()
                    .expect(200);
    article1_id = res.body[0]._id;
});

test('user 2 should recomment on article 1', async () => {
            await request(app)
            .post(`/api/articles/${article1_id}/comment/userName2`)
            .set('accesstoken', user2_accesstoken)
            .send({
                desc : 'user 2 comment'
            })
            .expect(200);
});

test('admin should get tests and select test 1 id', async () => {
    let res = await request(app)
                    .get('/admin/tests')
                    .set('accesstoken', admin_accesstoken)
                    .send()
                    .expect(200);
    tests1_id = res.body[0]._id;
});


test('admin should get comments and select comment 1 id', async () => {
    let res = await request(app)
                    .get('/admin/comments')
                    .set('accesstoken', admin_accesstoken)
                    .send()
                    .expect(200);
    comment1_id = res.body[0]._id;
});


test('admin should get users and set user 1 and 2 ids', async () => {
    let res = await request(app)
                    .get('/admin/users')
                    .set('accesstoken', admin_accesstoken)
                    .send()
                    .expect(200);
    user1_id = res.body[0]._id;
    user2_id = res.body[1]._id;
});

test('admin should delete comment 1', async () => {
    await request(app)
            .delete(`/admin/comments/${comment1_id}`)
            .set('accesstoken', admin_accesstoken)
            .send()
            .expect(200);
});

test('admin should delete article 1', async () => {
            await request(app)
                    .delete(`/admin/articles/${article1_id}`)
                    .set('accesstoken', admin_accesstoken)
                    .send()
                    .expect(200);
});

test('admin should delete test 1', async () => {
    await request(app)
            .delete(`/admin/tests/${tests1_id}`)
            .set('accesstoken', admin_accesstoken)
            .send()
            .expect(200);
});

test('should update user 1', async () => {
    let res = await request(app)
                    .put('/api/users/userName1')
                    .set('accesstoken', user1_accesstoken)
                    .send({
                        newUserName : 'userName1updated',
                        newPassword : 'user1password',
                        newEmail    : 'user1updated@gmail.com'
                    }).expect(200);
});

test('check if user 1 is updated', async () => {
    let res = await request(app)
                    .get(`/api/users/userName1updated`)
                    .set('accesstoken', user1_accesstoken)
                    .send();
        expect(res.body.userName).toBe('userName1updated');
});


test('user 1 should delete his account', async () => {
    await request(app)
            .delete('/api/users/userName1updated')
            .set('accesstoken', user1_accesstoken)
            .send()
            .expect(200);
});

test('admin should delete user 2', async () => {
    await request(app)
            .delete(`/admin/users/${user2_id}`)
            .set('accesstoken', admin_accesstoken)
            .send()
            .expect(200);
});