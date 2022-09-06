
let ArticleView = (props: 
    { 
        title: string; 
        desc: string; 
        catagory: string; 
        createdAt: string;
        id : string;
        image : {
            src : string
        }
    }) : JSX.Element => {

    let { title, desc, catagory, createdAt, id, image } = props;

    return (
        <div className="article">
            <h2>{title}</h2>
            <img src={image.src} alt="nothing"/>
            <span className="createdAt">{createdAt}</span>
            <p>{desc.slice(0, 99)}.......</p>
            <footer>
                <span>catagory : {catagory}</span>
                <a href={`http://localhost:3000/articles/${id}`}>read</a>
            </footer>
        </div>
    ) 
    
}

export default ArticleView;
