import React,{useState,useEffect} from 'react'
import './details.css'
function Details(props) {
    const [details,setDetails]=useState([]);
    const [relatedposts,setRelatedposts]=useState([]);
    useEffect(()=>{
        let url = `http://localhost:8000/posts/${props.match.params.id}`
        fetch(url)
        .then((data)=>data.json())
        .then((data)=>{
            setDetails(data);
            let tag=`http://localhost:8000/related/${data.tags}`
            fetch(tag)
            .then((res)=>{
                return res.json()
            })
            .then((res)=>{
                setRelatedposts(res);
                console.log(relatedposts)
            })
            .catch((err)=>console.log(err))
        })
        .catch((err)=>{
            console.log(err)
        })
    }, [])

    return (
        <div className="details">
            <h1>{details.title}</h1>
            <div className="details__image">
            <img src={details.image} alt={details.title}/>
            </div>
            <div className="details__info" dangerouslySetInnerHTML={{
                __html: details.details
            }}>
            </div>
            <div className="relatedcontent">
                <h3>Related Posts</h3>
                <div className="posts">
                        {
                             relatedposts.map((blog,index)=>{
                                 return (
                                     <a className="links" href={blog._id}>{blog.title}</a>
                                 )
                             })
                        }
                </div>
            </div>
        </div>
    )
}

export default Details
