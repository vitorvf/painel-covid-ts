import {
  createContext,
  useEffect,
  useState,
  ReactNode,
  useContext,
} from "react"
import { api } from "../../services/api"

interface Covid {
  confirmed: {
    value: number
  }

  recovered: {
    value: number
  }

  deaths: {
    value: number
  }
}


type covid = Covid | null

interface CovidProviderProps {
  children: ReactNode
}

const CovidContext = createContext<covid>(null)

export function CovidProvider({ children }: CovidProviderProps) {
  const [covid, setCovid] = useState<covid>(null)

  useEffect(() => {
    api.get("").then((response) => setCovid(response.data))
  }, [])

  return <CovidContext.Provider value={covid}>{children}</CovidContext.Provider>
}

export function useCovid() {
  const context = useContext(CovidContext)

  return context
}
