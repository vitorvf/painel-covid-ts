import styled from "styled-components"

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 0fr);
  gap: 1rem;
  margin-top: 3rem;
  justify-content: center;
  /* margin-top: -10rem; */

  div {
    width: 250px;
    height: 100px;
    background-color: var(--background-second);
    text-align: center;
    border-radius: 7px;
    padding: 5px;
    box-shadow: 0 5px 30px rgb(0 0 0 / 5%);
    transition: background 0.3s ease;
    -webkit-animation-name: cards;
    animation-name: cards;
    -webkit-animation-delay: 1s;
    animation-delay: 1s;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 20px 0px 0px;

    h6 {
      font-weight: 400;
      font-size: 1rem;
      color: var(--shape);
    }

    h5 {
      font-weight: 400;
      font-size: 1rem;
      color: var(--shape);
    }

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }

    &.highlight-background {
      background: var(--green);
      color: #fff;
    }

    /* &::before {
      content: "";
      border-radius: 100px;
      position: relative;
      display: block;
      width: 5px;
      height: 30px;
      left: -46px;
      background-color: #fa0;
    } */
  }
`
