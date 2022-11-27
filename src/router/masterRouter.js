import { Home } from "../pages/home";
import { Route, Routes } from "react-router-dom";
import { Post } from "../components/posts/singlePost";
import { SearchPost } from "../components/posts/search";
import SignUp from "../pages/signup";

export function MasterRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="sign-up" element={<SignUp />} />
      <Route path="/:search" element={<SearchPost />} />
      <Route path="/blog/:id" element={<Post />} />
    </Routes>
  );
}
