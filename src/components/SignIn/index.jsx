import React, { useState } from "react";
import { Content } from "./style";

import { useNavigate } from "react-router-dom";
import Input from "../Generic/Input";
import Button from "../Generic/Button";
import useRequest from "../../hooks/useRequest";
import { message } from "antd";

export const SignIn = () => {
  const [body, setBody] = useState({
    email: "",
    password: "",
  });
  const request = useRequest();
  const navigate = useNavigate();

  const info = () => {
    message.info("Successfully Logged In");
  };
  const warning = () => {
    message.error("Incorrect Login or Password");
  };

  const onChangeValue = ({ target: { value, placeholder } }) => {
    setBody({
      ...body,
      [placeholder]: value,
    });
  };

  const onSubmit = async () => {
    request({ url: `/public/auth/login`, body, method: "POST", me: true }).then(
      (res) => {
        if (res?.authenticationToken) {
          navigate("/home");
          localStorage.setItem("token", res?.authenticationToken);
          info();
        } else warning();
      }
    );
  };

  return (
    <Content>
      <div className="subTitle">Sign In</div>
      <Input
        onChange={onChangeValue}
        name="email"
        placeholder="email"
        type="email"
      />
      <Input
        onChange={onChangeValue}
        name="password"
        placeholder="password"
        type="password"
      />
      <Button onClick={onSubmit} width="%">
        Login
      </Button>
    </Content>
  );
};
