import { useState } from "react";
import styled from "styled-components";
import url from "../../url";

const Container = styled.div`
    display: flex;
    align-item : center;
`

const Control = styled``

const Button = styled.div`
    color: black;
`

export function Registration() {
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function register() {
        fetch(url + `users/`, {
            method: 'POST',
        })
    }

    return (
        <Container>
            <Control>
                <input placeholder="firstname" onChange={(e) => { setFirstname(e.target.value) }} />
            </Control>
            <Control>
                <input placeholder="lastname" onChange={(e) => { setLastname(e.target.value) }} />
            </Control>
            <Control>
                <input placeholder="username" onChange={(e) => { setUsername(e.target.value) }} />
            </Control>
            <Control>
                <input placeholder="email" onChange={(e) => { setEmail(e.target.value) }} />
            </Control>
            <Control>
                <input placeholder="password" onChange={(e) => { setPassword(e.target.value) }} />
            </Control>
            <Button>
                <button>Signup</button>
            </Button>
        </Container>
    )
}