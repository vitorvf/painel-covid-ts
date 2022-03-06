import React, { useContext } from "react"
import { useCovid } from "../hooks/useCovid"
import { Container } from "./style"

const Introcards = () => {
  const covid = useCovid()
  console.log(covid?.confirmed)
  return (
    <Container>
      <div>
        <header>
          <h6>Casos Confirmados</h6>
        </header>
        <h5>
          {covid && typeof covid.confirmed.value === "number"
            ? covid.confirmed.value
            : ""}
        </h5>
      </div>

      <div>
        <header>
          <h6>Casos Recuperados</h6>
        </header>
        <h5>
          {covid && typeof covid.recovered.value === "number"
            ? covid.recovered.value
            : ""}
        </h5>
      </div>

      <div>
        <header>
          <h6>Casos Mortos</h6>
        </header>
        <h5>
          {covid && typeof covid.deaths.value === "number"
            ? covid.deaths.value
            : ""}
        </h5>
      </div>
    </Container>
  )
}

export default Introcards
