import React, {useEffect,useState} from 'react'
import './Post.css'
import { useParams } from "react-router-dom"

function Post(props){
    const params = useParams();
    const id=params.postId;
    //console.log(id);
    useEffect(()=> {
        fetchPost();
      },[]);

    const [post,setPost] = useState([]);
      const fetchPost = async () => {
        const myRequest = new Request('http://localhost:9000/posts/' + params.postId);
        //console.log(myRequest);
        const data = await fetch(myRequest);
        //console.log(data);
        const post = await data.json();
        setPost(post);
      };

    return (
        <div className='container'>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
        </div>
    )
}

export default Post