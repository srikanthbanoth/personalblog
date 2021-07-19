import React,{useEffect,useState} from 'react'
import Blogcard from './Blogcard'
import './home.css'
function Home() {
    const [blogs,setBlogs]=useState([]); 
    useEffect(()=>{
        fetch("http://localhost:8000/posts")
        .then((data)=>{
            return data.json()
        })
        .then((data)=>{
            setBlogs(data);
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])
    return (
        <div className="grid">
            {
                blogs.map((blog,index)=>{
                    return <Blogcard blog={blog} key={index}/>
                })
            }
        </div>
    )
}

export default Home