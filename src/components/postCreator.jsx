import { useState } from "react";
import { postPost } from "../utils";

export const PostCreator = ({ author }) => {
  const [message, setMessage] = useState();
  const [url, setUrl] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
    try {
      postPost(author, url, message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Please Login before creating a post!</h2>
      <form onSubmit={submitHandler}>
        <input
          placeholder="Image URL"
          onChange={(e) => setUrl(e.target.value)}
        />
        <input
          placeholder="Post content"
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Post</button>
      </form>
    </div>
  );
};
