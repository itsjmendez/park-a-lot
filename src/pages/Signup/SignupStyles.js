import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const Box = styled.div`
  width: 250px;
  height: auto;
  display: flex;
  justify-content: center;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
`;

export const Container = styled.div`
  justify-content: center;
  border-radius: 12px;
  margin-top: 100px;
`;

export const Header = styled.h1`
  display: flex;
  font-size: 38px;
  font-family: Apple Chancery, cursive;
  font-weight: bold;
  justify-content: center;
  margin-top: -80px;
  margin-bottom: -15px;
`;

export const FormContainer = styled.div`
  padding: 24px 16px;
  // background: #f2f2f2;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
`;

export const Form = styled.form`
  margin-top: -15px;
`;

export const Span = styled.span`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px;
  color: red;
`;

export const Message = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  text-align: center;
  background-color: green;
  padding: 8px;
  color: white;
  line-height: 15px;
  border-radius: 2px;
`;

export const Paragraph = styled.p`
  color: black;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  text-align: center;
  margin-top: 10px;
`;

export const LinkTo = styled(Link)`
  color: blue;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
  justify-content: center;
`;

export const FormItemContainer = styled.div`
  justify-content: space-between;
  padding: 12px 0 0 0;
  margin-top: 0px;
`;

export const Input = styled.input`
  width: 100%;
  background: #f2f2f2;
  font-size: 16px;
  line-height: 30px;
  border: none;
  border-radius: 4px;
`;
