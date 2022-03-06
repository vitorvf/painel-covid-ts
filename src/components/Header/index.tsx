import React from "react"
import { Container, Content } from "./style"
import Logoimg from "../../assets/logo.svg"

const Header = () => {
  return (
    <Container>
      <Content>
        <img src={Logoimg} alt="dt money" />
        <button type="button">Codigo de Fonte</button>
      </Content>
    </Container>
  )
}

export default Header
