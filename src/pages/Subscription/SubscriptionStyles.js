import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  position: relative;
`;

export const Span = styled.span`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px;
  color: black;
`;

export const Subscriptions = styled.div`
  & {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;
  }
  &>:nth-child(2)>button{
    color: orange;
  }
`;

export const Subscription = styled.div`
  & {
    display: flex;
    flex-direction: column;
    background: #3c3f45;
    color: white;
    gap: 2rem;
    padding: 1.5rem;
    width: 19rem;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
  }
  &:nth-child(2) {
    background: linear-gradient(210.41deg, #fa5042 1.14%, #ffa739 100.75%);
    transform: scale(1.1);
  }
  & > :nth-child(1) {
    font-size: 2rem;
  }
  & > :nth-child(2) {
    font-size: 3rem;
  }
`;

export const Features = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Feature = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Images = styled.img`
  width: 1rem;
`;
