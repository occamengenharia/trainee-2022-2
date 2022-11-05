import { IInputProps } from "./types"

const Input = ({rotulo, name, aoMudar }: IInputProps) => {
  return <div>
    <label>{rotulo}</label>
    <input name={name} onChange={aoMudar}/>
  </div>
} 

export default Input