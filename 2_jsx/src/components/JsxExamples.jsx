const JsxExamples = () => {

    const userName = "Rafaela";

    const user = {
        name: "Rafaela",
        lastName: "Gusczak",
    }

    function getGreeting(name) {
        return `Olá ${ name}`
    }
    
    const userIsLoggedIn = false;

    const userRole = "admin";

    const users = [
        {id: 1, name: "João"},
        {id: 2, name: "Rafaela"},
        {id: 3, name: "Julia"},
    ]

  return (
    <div>
            {/* BÁSICO */}
        <h2>Conteúdo que o usuário vai ver</h2>
        {/* Listando dados do usuario */}
        <p>O nome do usuário é: {userName}</p>

        <p>
            Usuário: {user.name} {user.lastName}
        </p>

        <p>{2 + 2}</p>

        <p>{getGreeting("Rafa")}</p>

        {/* DIFERENÇAS DO HTML */}
        <div className='alguma-coisa'>oi</div>

        <div className="teste">ok</div>

        <button onClick={() => alert("Teste")}>Clique em mim</button>

        <input type="text" placeholder='Digite algo' />

        {/* RENDERIZAÇÃO CONDICIONAL */}
        {userIsLoggedIn ? (
            <p>Caso: está logado</p>
        ) : (
            <p>Caso: NÃO está logado</p>
        )}
        
        <p>
            {userRole === "admin" && "Você é um admin"}
        </p>

        {/* RENDERIZAÇÃO DE LISTAS */}
        <div>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.id} - {user.name}
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default JsxExamples