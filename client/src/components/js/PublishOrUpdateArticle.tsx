import axios from 'axios';
import { useState } from 'react';
import getAndSetArticle from '../../functions/getAndSetArticle';
import headers from '../../interfaces/headers';

let PublishOrUpdateArticle = (props: 
    { 
        upadte: boolean; 
        headers: headers; 
        id?: string;
        userName : string
    }) : JSX.Element => {

    let { upadte , headers, id, userName } = props;

    let [article, setArticle] = useState({
        title : '',
        desc : '',
        catagory : ''
    })

    let [image, setImage] = useState({});

    let handleFile = (e : any) => {

        setImage(e.target.files[0]);

    }

    if (upadte === true) {

        getAndSetArticle(article, setArticle, id);

    }

    let handleSubmit = async (e: { preventDefault: () => void; }) => {

        e.preventDefault();

        let articleTitle    : string = (document.getElementById('articleTitle') as HTMLInputElement).value;
        let articleDesc     : string = (document.getElementById('articleDesc') as HTMLInputElement).value;
        let articleCatagory : string = (document.getElementById('articleCatagory') as HTMLInputElement).value;
        
        let i : any = image;
        let formData = new FormData();
  
        //Adding files to the formdata

        formData.append("image", i);

        let imageName = await axios.post('http://localhost:8080/uploadImage', formData, {
                headers : {
                    'Content-Type': 'multipart/form-data'
                }
            });

        if (articleTitle.length && articleDesc.length && articleCatagory.length) {
            
            if (upadte === true) {
            
                axios.put(`http://localhost:8080/api/articles/${id}/${userName}`, {
                    title : articleTitle,
                    desc : articleDesc,
                    catagory : articleCatagory,
                    imageName : imageName.data
                }, headers);
    
            } else {
                
                axios.post(`http://localhost:8080/api/articles/${userName}`, {
                    title : articleTitle,
                    desc : articleDesc,
                    catagory : articleCatagory,
                    imageName : imageName.data
                }, headers);
    
            }

        } else {

            alert('article title, desc and catagory required');

        }


    }
    
    return (
        <div className="publishOrUpdateArticle">
            <h2>{(upadte === true) ? 'edit article' : 'new article'}</h2>
            <form onSubmit={handleSubmit}>
                <label>title</label>
                <input type='text' id='articleTitle'defaultValue={article.title} required/>
                <label>description</label>
                <textarea id='articleDesc' defaultValue={article.desc} required rows={4}></textarea>
                <label>catagory</label>
                <input type='text' id='articleCatagory' defaultValue={article.catagory} required/>
                <label>image</label>
                <input type='file' id="img" onChange={handleFile}/>
                <button>submit</button>
            </form>
        </div>
    )
}

export default PublishOrUpdateArticle;