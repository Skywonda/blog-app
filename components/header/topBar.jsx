import { Link } from "react-router-dom"
import styled from "styled-components"

const Top = styled.div`
    display: flex;
    align-item: center;
    max-width: 90%;
    margin: 0 auto;
    padding: 10px;
    justify-content: space-between;
`

const Main = styled.h1`
    display: flex;
    align-item: center;
    color: #333;
    opacity: 0.8;
    margin: 0;
    padding: 0px;
`;
const Container = styled.div`
    display: flex;
    align-item: center;
    justify-content: center;
    gap: 2em;
`;

const Log = styled.div`
    font-size: 13px;
    color: #333;
    font-weight: 400;
`

export function TopBar() {
    return (
        <Top>
            <Link to="/" style={{ textDecoration: 'none' }}>
                <Main>Alt School blog app</Main>
            </Link>
            <Container>
                <Link to="/signup" style={{ textDecoration: 'none' }}>
                    <Log>Register</Log>
                </Link>
                <Link to="/login" style={{ textDecoration: 'none' }}>
                    <Log>Login</Log>
                </Link>
            </Container>
        </Top>
    )
}