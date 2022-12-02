import styled from "styled-components";

const Style = styled.div`
    margin: auto;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    border-radius: 5px;
`

export function Card({ children }) {
    return (
        <Style>
            {children}
        </Style>
    )
}