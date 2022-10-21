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

export const HeaderTwo = styled.h2`
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  margin-top: 20px;
`;

export const HeaderThree = styled.p`
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 0;
  text-align: center;
  margin-top: 20px;
`;

export const FormContainer = styled.div`
  padding: 24px 16px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
`;

export const Form = styled.form`
  margin-top: -30px;
`;

export const Span = styled.span`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px;
  color: red;
`;

export const HrLine = styled.p`
  & {
    position: relative;
    max-width: 500px;
    margin: 100px auto;
    text-align: center;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  &:before {
    content: " ";
    height: 1px;
    width: 40%;
    background: #4542425e;
    display: block;
    position: absolute;
    top: 50%;
    left: 0%;
  }
  &:after {
    content: " ";
    height: 1px;
    width: 40%;
    background: #4542425e;
    display: block;
    position: absolute;
    top: 50%;
    right: 0%;
  }
`;

export const Paragraph = styled.p`
  color: black;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  text-align: center;
  margin-top: -10px;
`;

export const Div = styled.div`
  padding: 6px;
  border: 1px solid gray;
  margin: 0;
  text-align: center;
  margin-top: 40px;
  background: #f2f2f2;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: orange;
  }
`;

export const LinkTo = styled(Link)`
  color: black;
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

export const Message = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-weight: none;
  text-align: center;
  background-color: green;
  padding: 8px;
  color: white;
  border-radius: 2px;
  margin-top: 5px;
`;
