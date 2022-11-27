import { MasterRoutes } from "./router/masterRouter";
// import { Home } from "../pages/home";
import { Route, Routes } from "react-router-dom";
// import { Post } from "../components/posts/singlePost";
// import { SearchPost } from "../components/posts/search";
import SignUp from "./pages/signup";
import { Home } from "./pages/home";
import { SearchPost } from "./components/posts/search";
import { Post } from "./components/posts/singlePost";
import SignIn from "./pages/signin";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="/:search" element={<SearchPost />} />
        <Route path="/blog/:id" element={<Post />} />
      </Routes>
    </div>
  );
}

export default App;
