import styled from "styled-components"
import { Link } from "react-router-dom";

const All = styled.div`
    display: flex;
    width: 90%;
    margin: 0 auto;
    align-item: center;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    border-radius: 5px;
    padding: .5em;
`;

const Title = styled.h1`
    padding: 20px;
    align-item: center;
    color: #333;
`;

const View = styled.p`
    display: flex;
    align-item: center;
`



export function PostCard(props) {
    return (
        <All>
            <Link to={`/blog/${props.id}`} style={{ textDecoration: 'none' }}>
                <Title>{props.title}</Title>
            </Link>
            <View>views:{props.read_count}</View>
        </All>
    )
}