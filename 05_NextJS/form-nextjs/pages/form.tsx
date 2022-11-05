import React, { useState, ChangeEvent } from 'react';
import Input from '../components/Input';

interface IFormData {
  email: string
}


export default function Form() {
  const [data, setData] = useState<IFormData>({email: ''})
  
  const lidarComAoMudar = (e: ChangeEvent<HTMLInputElement>) => {
    const { target } = e
    setData({...data, [target.name]: target.value})
  }
  const lidarComAoSubmitar = () => {
    alert(JSON.stringify(data))
  }

  return (
    <div>
      <form onSubmit={lidarComAoSubmitar}>
        <Input name="email" rotulo="Email" aoMudar={lidarComAoMudar}/>
        <button type="submit">Sub</button>
      </form>
    </div>
  )
}
