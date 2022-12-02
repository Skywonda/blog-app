import { Route, Routes } from "react-router-dom";

import SignUp from "./pages/signup";
import Home from "./pages/home";
import SignIn from "./pages/signin";
import Header from "./components/ui/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="sign-in" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
