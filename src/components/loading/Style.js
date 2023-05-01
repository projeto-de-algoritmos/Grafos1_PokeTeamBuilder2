import styled, { keyframes } from "styled-components";

const dotAnimation = keyframes`
  0%, 80%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
`;

const pokeballAnimation = keyframes`

50% {
  transform: rotate(180deg);
}
100% {
  transform: rotate(360deg);
}
`;

export const Container = styled.div`
    justify-self: center;
    align-self: center;
    position: absolute;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
`;

export const Pokeball = styled.img`
width: 150px;
height: 150px;
object-fit: cover;
animation: ${pokeballAnimation} 3s linear infinite;
transform-origin: center center;
position: relative;
`;



export const TextContainer = styled.div`
    display: flex;
    flex-flow: row;
    align-items: center;
`;

export const LoadingText = styled.p`
    font-size: 32px;
    font-weight: bolder;
    color: black;
    margin-right: 10px;
`



export const Dot = styled.div`
  display: inline-block;
  margin-right: 5px;
  margin-top: 11px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  animation: ${dotAnimation} 1s ease-in-out infinite;
  background-color: black;
  
  &:nth-child(2) {
    animation-delay: 0.2s;
  }
  
  &:nth-child(3) {
    animation-delay: 0.4s;
  }
`;