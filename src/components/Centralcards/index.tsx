import React, { useEffect, useState } from "react"
import { api } from "../../services/api"
import { useCovid } from "../hooks/useCovid"
import { Card, Container } from "./styles"

const Centralcards = () => {

  api.get("countries/br/confirmed")
 
  return (
    <Container>
      <Card>
        <h1>Situação no Brasil</h1>
        <p>
          Casos:<strong> 0 </strong>
        </p>
        <p>
          Casos confirmados:<span>28.846.495</span>
        </p>
        <p>
          Casos recuperados:<span>0</span>
        </p>
        <p>
          Óbitos confirmados:<span> 650.254</span>
        </p>
      </Card>
      <Card>
        <h1>Situação no Brasil</h1>
        <p>
          Casos:<strong> 0 </strong>
        </p>
        <p>
          Casos confirmados:<span>28.846.495</span>
        </p>
        <p>
          Casos recuperados:<span>0</span>
        </p>
        <p>
          Óbitos confirmados:<span> 650.254</span>
        </p>
      </Card>
      <Card>
        <h1>Situação no Brasil</h1>
        <p>
          Casos:<strong> 0 </strong>
        </p>
        <p>
          Casos confirmados:<span>28.846.495</span>
        </p>
        <p>
          Casos recuperados:<span>0</span>
        </p>
        <p>
          Óbitos confirmados:<span>650.254</span>
        </p>
      </Card>
      <Card>
        <h1>Situação no Brasil</h1>
        <p>
          Casos:<strong> 0 </strong>
        </p>
        <p>
          Casos confirmados:<span>28.846.495</span>
        </p>
        <p>
          Casos recuperados:<span>0</span>
        </p>
        <p>
          Óbitos confirmados:<span>650.254</span>
        </p>
      </Card>
    </Container>
  )
}

export default Centralcards
