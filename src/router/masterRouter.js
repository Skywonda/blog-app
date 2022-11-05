import { Home } from "../pages/home";
import { Route, Routes } from "react-router-dom"
import { Post } from "../components/posts/singlePost";
import { SearchPost } from "../components/posts/search";

export function MasterRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:search" element={<SearchPost />} />
            <Route path="/blog/:id" element={<Post />} />
        </Routes>
    )
}