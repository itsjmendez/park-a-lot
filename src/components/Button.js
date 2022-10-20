import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  margin-top: 10px;
  border-radius: 4px;
  background: blue;
  color: white;
  outline: none;
  border: none;
  cursor: pointer;
  justify-content: center;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  transition: all 0.2s ease-in-out;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: blue;
    color: orange;
  }
`;

