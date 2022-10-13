import styled from 'styled-components';

export const Button = styled.button`
  margin-top: 20px;
  border-radius: 4px;
  background: #f7b32b;
  padding: 10px 22px;
  color: #fff; //honey yellow
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #ffe2a9;
    color: #808080;
  }
`;
