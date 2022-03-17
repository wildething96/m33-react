import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { PostCreator } from "../components/postCreator";
import { getPost } from "../utils";
import { EditPost } from "../components/editPost";

export const Home = ({ account }) => {
  const [list, setList] = useState([]);
  let navigate = useNavigate();

  const getData = async () => {
    const postContent = await getPost();
    const postNumber = postContent.length;

    const response = await fetch(
      `https://picsum.photos/v2/list?page=2&limit=${postNumber}`
    );

    const data = await response.json();
    console.log(data[0]);

    const postArray = [];

    postContent.forEach((e) => {
      postArray.push({
        id: e._id,
        author: e.author,
        url: e.url,
        message: e.message,
        likes: e.likes,
      });
    });

    setList(postArray);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <button onClick={() => navigate("/login")}>Login</button>
      <button onClick={() => navigate("/register")}>Home</button>
      <PostCreator author={account.username}></PostCreator>
      <Container>
        <Flex>
          {list.map((item) => (
            <Post key={item.id}>
              {console.log(item)}
              {/* <h2 key={index}>{item}</h2> */}
              <Title>
                <div>{item.author}</div>
                <EditPost id={item.id} />
              </Title>
              <Image src={item.url} />
              <div>
                <Reaction>
                  <div>like</div>
                  <div>comment</div>
                  <div>tag</div>
                </Reaction>
                <Comments>
                  <div>
                    <div></div>
                    <p>
                      Liked by <span>Name</span> and <span>5</span> others
                    </p>
                    <p>{item.message}</p>
                  </div>
                  <div></div>
                </Comments>
              </div>
            </Post>
          ))}
        </Flex>
        <Profile>
          <div></div>
          <div>
            <div>{account.username}</div>
            <div>{account.firstName}</div>
          </div>
        </Profile>
      </Container>
    </div>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  width: 600px;
  min-width: 200px;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Post = styled.div`
  margin-top: 80px;
  border: 1px solid lightgrey;
  border-radius: 3px;
`;

const Title = styled.div`
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
`;

const Reaction = styled.div`
  display: flex;

  div {
    padding: 0.8rem;
  }
`;

const Comments = styled.div`
  div {
    display: flex;
    align-items: center;
    div: nth-child(1) {
      text-align: center;
      margin: 1rem;
      background: darkgray;
      width: 20px;
      height: 20px;
      border-radius: 100%;
      border: 1px solid lightgrey;
    }
  }
`;

const Profile = styled.div`
  width: 15%;
  text-align: center;
  display: flex;
  margin: 5rem 1rem;

  >div: first-child {
    width: 55px;
    height: 55px;
    margin: 1rem;
    background: gray;
    border-radius: 100%;
    border: 1px solid lightgrey;
  }

  >div: nth-child(2) {
    margin-top: 1.5rem;
    div: nth-child(2) {
      color: rgba(199, 188, 194, 0.8);
    }
  }
`;
