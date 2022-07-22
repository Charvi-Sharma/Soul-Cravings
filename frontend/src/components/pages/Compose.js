import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../App.css';

function Compose() {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [isPending, setPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const recipe = { title, content };
        // console.log(recipe);
        setPending(true);
        fetch('http://localhost:9000/compose', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(recipe)
            }).then((response) => response.json())
                .then((data) => {
                    console.log('Success:');
                    setPending(false);
                    navigate('/');
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
    }

    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <div class="">
                    <label>Title</label> <br/>
                    <input type="text" class="" name="postTitle" autocomplete="off" required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div class="form-group">
                    <label>Recipe</label> <br />
                    <textarea class="" name="postContent" rows="5" autocomplete="off" required
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    ></textarea>
                </div>
                <div class="form-group">
                    {!isPending && <button type="submit" class="" name="button">Publish</button>}
                    {isPending && <button disabled type="submit" class="" name="button">Publishing Recipe ...</button>}
                </div>
            </form>
        </div>
    )
}

export default Compose