import React from "react";
import styled from "styled-components";
import { PostCreator } from "../components/postCreator";
import { useState, useEffect } from "react";

export const Home = () => {
  const [list, setList] = useState([]);
  const [postContent, setPostContent] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
    if (postContent) {
      setList([...list, postContent]);
    }
  };

  const getData = async () => {
    const response = await fetch(
      "https://picsum.photos/v2/list?page=2&limit=5"
    );
    const data = await response.json();
    console.log(data[0]);
    setList(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {/* <PostCreator
        setPostContent={setPostContent}
        list={list}
        submitHandler={submitHandler}
      /> */}
      <Flex>
        {list.map((item, index) => (
          //   <h2 key={index}>{item}</h2>
          <Image key={index} src={item.download_url} />
        ))}
      </Flex>
    </div>
  );
};

const Image = styled.img`
  width: 600px;
  min-width: 200px;
  margin-top: 80px;
`;

const Flex = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
