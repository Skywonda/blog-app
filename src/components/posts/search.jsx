import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { PostCard } from "./allPost"
// import url from "../../url"
import styled from "styled-components"

const HashTag = styled.h1`
    display: flex;
    align-item: center;
    justify-content: center;
`


export function SearchPost() {
    const param = useParams()

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch(`http://localhost:8000/blogs?search=${param.search}`)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setPosts(data.posts)
            })
    }, [])

    return (
        <div>
            <HashTag>{`#${param.search}`}</HashTag>
            {posts.map((each) => (
                <PostCard
                    id={each._id}
                    key={each._id}
                    title={each.title}
                    read_count={each.read_count}
                />
            ))}
        </div>
    )
}