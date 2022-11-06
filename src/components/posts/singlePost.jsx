import styled from "styled-components"
// import { Card } from "../ui/card"
import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import url from "../../url"

const SinglePost = styled.div`
    display: block;
    width: 90%;
    margin: 0 auto;
    justify-content: center;
    color: #000;
`
const General = styled.div`
    display: flex;
    align-item: center;
    justify-content: center;
`

const Title = styled.h1`
    font-weight: 400;
`

const Description = styled.div`
    display: flex;
    align-item: center;
    justify-cont
`

const Category = styled.div`
    color : blue;

    & h1 {
        opacity: 0.5;
    }

    & a {
        margin: 30px;
        text-decoration: none;
        color: blue;
    }

`

const Body = styled.p`
    font-size: 30px;
`

export function Post() {
    const param = useParams()
    const [post, setPost] = useState([])
    const [owner, setOwner] = useState([])
    const [tags, setTags] = useState([])
    useEffect(() => {
        fetch(url.localhost + `/blogs/${param.id}`)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setPost(data.post)
                setOwner(data.post.owner)
                setTags(data.post.tags)
            })
    }, [])
    return (
        <div>
            <SinglePost>
                <General>
                    <Title>{post.title}</Title>
                </General>
                <General>
                    "<Description>{post.description}</Description>" - {owner.username}  - {post.reading_time} mins read
                </General>
                <General>
                    <Category>
                        <h1>Related Category:</h1>
                        {tags.map((tag, i) => (
                            <Link to={`/${tag}`} key={i}>{tag}</Link>
                        ))}
                    </Category>
                </General>
                <General>
                    <Body>{post.body}</Body>
                </General>
            </SinglePost>
        </div>
    )
}