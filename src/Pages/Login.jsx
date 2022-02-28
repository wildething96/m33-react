import React from "react";
import { useState } from "react";
import styled from "styled-components";

export const Login = () => {
  const [user, setUser] = useState();

  return (
    <div>
      <Flex>
        <h1>Instagram</h1>
        <input placeholder="Phone number, username or email address" />
        <input placeholder="Password" />
      </Flex>
    </div>
  );
};

const Flex = styled.div`
  margin: 2rem auto;
  width: 300px;
  border: 1px solid lightgrey;
  padding: 2rem;
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  input {
    width: 250px;
    font-size: 0.7em;
    margin: 0.5rem 0;
    border: 1px solid lightgrey;
    border-radius: 3px;
    padding: 0.8rem 0.5rem;
    background: #f5f7fa;
  }
`;
