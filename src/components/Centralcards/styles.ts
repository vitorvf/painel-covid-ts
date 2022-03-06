import styled from "styled-components"

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 0fr);
  gap: 3rem;
  margin-top: 3rem;
  /* margin-left: 15rem; */
  justify-content: center;
`

export const Card = styled.div`
  width: 445px;
  height: 220px;
  background-color: #262626;
  color: #fff;
  padding: 20px;
  border-radius: 7px;
  transition: all 0.3s ease;
  -webkit-animation-name: cards;
  animation-name: cards;
  -webkit-animation-delay: 2s;
  animation-delay: 2s;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.05);
`

export const Content = styled.div``
