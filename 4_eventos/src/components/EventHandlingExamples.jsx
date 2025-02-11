import {useState} from 'react'

const EventHandlingExamples = () => {

    const handleClick = () => {
        alert("Testando");
    }

    const handleGreet = (name) => {
        alert(`Olá ${name}`)
    }

    const [name, setName] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        alert(`enviado! ${name}`)
    }

  return (
    <div>
        <button onClick={() => alert("oi")}>Clique aqui</button>
        <button onClick={handleClick}>Clique aqui 2</button>
        <br />
        <button onClick={() => handleGreet("Rafaela")}>Dizer Olá Rafaela</button>
        <button onClick={() => handleGreet("João")}>Dizer Olá João</button>
        <br />
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder='Digite seu nome' 
            />
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default EventHandlingExamples