import {useState} from 'react';

// useState = hooks
// sempre que vamos alterar o valor de algo => useState
// se é somente leitura => var, state

const UseStateComponent = () => {
        // variável de consulta, e uma de alteração, início o hook
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount((prevCount) => prevCount + 1);
        // setCount(count + 1)

        console.log(count);
    };

    const [user, setUser] = useState({
        name: "Rafaela",
        age: 18,
        hobbiers: ["Estudar", "Programação"],
    })

    const updateUserAge = () => {
        setUser((prevUser) => (
            {
                ...prevUser,
                age: prevUser.age + 1
            }
        ))
    }

    return <div>
        <h2>Contador</h2>
        <p>Você clicou {count} vezes</p>
        <button onClick={increment}>Incrementar</button>

        <p>
            Nome: {user.name} e idade: {user.age}
        </p>

        <button onClick={updateUserAge}>Incrementar Idade</button>
    </div>
}

export default UseStateComponent