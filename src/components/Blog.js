import React, { useEffect, useState } from 'react'
import Loading from './Loading';
import { useNavigate } from 'react-router-dom';

const Blog = () => {
    const [blogs, setBlog] = useState([]);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    
    useEffect(() => {
        fetch('/Blog.json')
        .then(response => response.json())
        .then(data => {            
            setLoading(false)
            setBlog(data)
        }) .catch((error) => {
            console.error("Error fetching data:", error);
            setLoading(false);
        });
    }, []);

    if(loading) {
        return <Loading/>
    }


    const readMore = (e) => {   
        navigate(`/blog/${e.id}`);
      };
    
    return (
        <div className='blog-container scale-in'>
            <h1>Blog Post</h1>
            <div className='blogs'>
                {
                    (blogs.map((e) => {
                        return (
                            <div className='blog' key={e.id}>
                                <img src={e.image} alt={e.title}/>
                                <h3>{e.title}</h3>
                                <p><span>Author:</span> {e.author}</p>
                                <p><span>Date:</span> {e.date}</p>
                                <p>{e.summary}</p>
                                <button onClick={() => readMore(e)}>Read More</button>
                            </div>
                        )
                    }))
                }
            </div>
        </div>
  )
}

export default Blog