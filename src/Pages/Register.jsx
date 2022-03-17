import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { postUser } from "../utils";

export const Register = () => {
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [user, setUser] = useState();
  const [pass, setPass] = useState();

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      postUser(name, user, email, pass);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Flex onSubmit={handleSubmit}>
        <h1>Instagram</h1>
        <input
          placeholder="Email addres"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Full Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Username"
          onChange={(e) => setUser(e.target.value)}
        />
        <input
          placeholder="Password"
          onChange={(e) => setPass(e.target.value)}
        />
        <button>Register</button>
      </Flex>
      <Flex>
        <p>
          Have an account?{" "}
          <span onClick={() => navigate("/login")}>Sign In</span>
        </p>
      </Flex>
    </div>
  );
};

const Flex = styled.form`
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
  button {
    cursor: pointer;
  }
  span {
    color: blue;
    cursor: pointer;
  }
`;
