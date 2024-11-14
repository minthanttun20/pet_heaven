import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { ImCross } from "react-icons/im";
import { useNavigate } from 'react-router-dom';
import Loading from './Loading';

const BlogPost = () => {
    const {id} = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        fetch('/Blog.json')
        .then(response => response.json())
        .then(data => {
            const post = data.find((blog) => blog.id === parseInt(id));
            setBlog(post);
            setLoading(false);
        });
    }, [id]);

    const close = () => {
        navigate('/blogs')
    }

    if(loading) {
        return <Loading/>
    }

    return (
        blog ? (
            <div className='blogPost scale-in'>
                <button className='close' onClick={close}><ImCross /></button>
                <img src={blog.image} alt={blog.title} />
                <h1>{blog.title}</h1>
                <p><strong>Author:</strong> {blog.author}</p>
                <p><strong>Date:</strong> {blog.date}</p>
                <hr/>
                <p>{blog.content}</p>

                {blog.video && (
                    <iframe
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${blog.video.split('/').pop()}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    ></iframe>
                )}
            </div>
        ) : (
            <p>No Blog Found</p>
        )
    );
    
};

export default BlogPost;
