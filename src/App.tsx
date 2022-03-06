import React from "react"
import Centralcards from "./components/Centralcards"
import Header from "./components/Header"
import Introcards from "./components/Introcards"
import { CovidProvider } from "./components/hooks/useCovid"
import { GlobalStyle } from "./styles/global"

function App() {
  return (
    <CovidProvider>
      <Header />
      <Introcards />
      <Centralcards />
      <GlobalStyle />
    </CovidProvider>
  )
}

export default App
