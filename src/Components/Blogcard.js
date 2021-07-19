import React from 'react'
import './blogcard.css';
function Blogcard(props) {
    const url=`/blogs/${props.blog._id}`
    return (
        <div className="band">
            <div>
                <a href={url} className="card">
                    <div className="thumb"><img src={props.blog.image} alt={props.blog.title}/></div>
                    <article>
                        <h1>{props.blog.title}</h1>
                        <p>{props.blog.description}</p>
                        <span>banoth srikanth</span>
                    </article>
                </a>
            </div>
        </div>
    )
}

export default Blogcard
