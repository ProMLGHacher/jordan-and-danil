import { useState } from "react"

const Reg = () => {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const reg = () => {

    }

    return (
        <div>
            <input value={login} onChange={(e) => {
                setLogin(e.target.value)
            }} type="text" />
            <input value={password} onChange={(e) => {
                setPassword(e.target.value)
            }} type="text" />
            <button onClick={reg}>Рег</button>
        </div>
    )
}

export default Reg