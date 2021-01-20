import React from 'react';

const Article = (props) => {
    const {title,author,text} = props.article;
    const styles = {
        marginTop:"40px",
    }
    return (  
        <article style = {styles}>
            <h2 style={{
                marginBottom: "5px",
                textTransform: "uppercase",
            }}>{title}</h2>
            <span style={{
                display:"block",
                color:"gray",
                fontSize:"13px",
            }}>{author}</span>
            <p>{text}</p>
        </article>
    );
}
 
export default Article;