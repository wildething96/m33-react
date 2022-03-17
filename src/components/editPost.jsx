import styled from "styled-components";
import { useState } from "react";
import { updatePost, deletePost } from "../utils";

export const EditPost = ({ id, index, setList, list }) => {
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  const [url, setUrl] = useState();
  const [message, setMessage] = useState();
  //   const [open, setOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const temp = [...list];
      if (message === undefined && url === undefined) {
        console.log("No change");
      } else if (url === undefined && message !== undefined) {
        temp[index].message = message;
        updatePost(id, url, message);
      } else if (url !== undefined && message === undefined) {
        updatePost(id, url, message);
        temp[index].url = url;
      } else {
        updatePost(id, url, message);
        temp[index].url = url;
        temp[index] = message;
      }

      if (temp !== [...list]) {
        setList(temp);
      }
    } catch (error) {}
  };
  return (
    <div>
      <button onClick={() => setOpen(!open)}>...</button>
      {open && (
        <Container>
          <div>
            {edit ? (
              <form onSubmit={handleSubmit}>
                <label htmlFor="url">URL:</label> <br />
                <input
                  id="url"
                  type="text"
                  onChange={(e) => setUrl(e.target.value)}
                />
                <br />
                <label htmlFor="message">Message: </label>
                <br />
                <input
                  id="message"
                  type="text"
                  onChange={(e) => setMessage(e.target.value)}
                />
                <br />
                <button>Change</button>
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
