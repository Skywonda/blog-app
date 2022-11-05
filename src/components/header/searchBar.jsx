import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Main = styled.div`
    display: flex;
    box-sizing: border-box;
    width: 90%;
    margin: 0 auto;
    justify-content: space-between;
    align-item: center;
    flex-wrap: wrap;
`;

const SearchInput = styled.div`
    display: flex;
    align-item: center;
    margin-top: 30px;
    .search-container {
        display: flex;
        align-item: center;


        & input {
            display : flex;
            align-item: center;
            height: 20px;
            padding: 10px;
            &::placeholder {
                text-transform: capitalize;
                justify-content: center;
            }
        }
    }

    .search-button {
        display: flex;
        align-item: center;
        border: groove;
        height: 45px;
        padding: 10px;
    }
`;

const Blog = styled.h2`
    font-weight : 400;
`

export function SearchBar() {
    const [search, setSearch] = useState("")
    const navigate = useNavigate()
    function SearchItem() {
        navigate(`/${search}`)
    }
    return (
        <Main>
            <SearchInput>
                <div className="search-container">
                    <input placeholder="search post" onChange={(e) => setSearch(e.target.value)} />
                </div>
                <button className="search-button" onClick={SearchItem}>Go</button>
            </SearchInput>
            <Blog>
                <p>Recommended posts for you</p>
            </Blog>

        </Main>
    )
}