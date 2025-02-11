import {useState, useEffect} from 'react'

const UseEffectComponent = () => {

    // sem dependências
    useEffect(() => {
        console.log("Rodou UE1")
    })

    // com dependências vazias / array dep. vazio
    useEffect(() => {
        console.log("Rodou UE2")
    }, [])

    // useState ativa a re-redenrização
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)

    // com dependências
    useEffect(() => {
        console.log("Rodou UE3")
    }, [count])

    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Aumentar contagem</button>
            <button onClick={() => setCount2(count2 + 1)}>Aumentar contagem</button>
        </div>
    )
}

export default UseEffectComponent