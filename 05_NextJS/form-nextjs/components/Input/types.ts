import { ChangeEvent } from "react"

export interface IInputProps {
  rotulo?: string
  name: string
  aoMudar: (event: ChangeEvent<HTMLInputElement>) => void
}
