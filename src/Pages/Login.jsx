import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getUser } from "../utils";
const bcrypt = require("bcryptjs");

export const Login = ({ setAccount }) => {
  const [user, setUser] = useState();
  const [pass, setPass] = useState();

  let navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    try {
      const account = await getUser(user, login);
      if (await bcrypt.compare(pass, account.pass)) {
        setAccount(account);
        setUser("");
        setPass("");
        navigate("/");
      } else {
        console.log("No match");
      }
    } catch (error) {}
  };

  return (
    <div>
      <Flex>
        <h1>Instagram</h1>
        <input
          placeholder="Username"
          onChange={(e) => setUser(e.target.value)}
        />
        <input
          placeholder="Password"
          onChange={(e) => setPass(e.target.value)}
        />
        <button onClick={(e) => login(e)}>Login</button>
      </Flex>
      <Flex>
        <p>
          Don't have an account?{" "}
          <span onClick={() => navigate("/register")}>Sign up</span>
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
  span {
    color: blue;
    cursor: pointer;
  }
  button {
    cursor: pointer;
  }
`;
