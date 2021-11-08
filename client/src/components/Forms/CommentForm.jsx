import React from 'react'
import { useHistory } from 'react-router';
import { useState } from 'react'

const CommentForm = (props) => {
    const [comment, setComment] = useState("");
    const history = useHistory();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const newComment = {
        comment
      }
      await setComment(newComment);
      history.push("/post");
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
      <label htmlFor="name">comment:</label>
      <textarea
        id="comment"
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        required
      />
        <button type="submit">Share</button>
    </form>
        </div>
    )
}

// commentForm.propTypes = {

// }

export default CommentForm

