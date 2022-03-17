import styled from "styled-components";
import { useState } from "react";
import { updatePost, deletePost } from "../utils";

export const EditPost = ({ id }) => {
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  const [url, setUrl] = useState();
  const [message, setMessage] = useState();
  //   const [open, setOpen] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            updatePost(id ,url, message)
        } catch (error) {
            
        }
    }
  return (
    <div>
      <button onClick={() => setOpen(!open)}>...</button>
      {open && (
        <Container>
          <div>
            {edit ? (
              <form onSubmit={handleSubmit}>
                <label htmlFor="url">URL:</label> <br />
                <input id="url" type="text" onChange={(e) => setUrl(e.target.value)}/>
                <br />
                <label htmlFor="message">Message: </label>
                <br />
                <input id="message" type="text" onChange={(e) => setMessage(e.target.value)}/>
                <br />
                <button onClick={handleSubmit}>Change</button>
              </form>
            ) : (
              <div>
                {" "}
                <button onClick={() => setEdit(true)}>edit</button>
                <button onClick={() => deletePost(id)}>delete</button>
              </div>
            )}
          </div>
        </Container>
      )}
    </div>
  );
};

const Container = styled.div`
  position: absolute;
  height: 200px;
  background: white;
  border: 1px solid lightgrey;
  margin-left: -75px;
`;
