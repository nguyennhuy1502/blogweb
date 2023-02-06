import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import CreatePage from "./Page/CreatePage";
import EditPost from "./Page/EditPost";
import IndexPage from "./Page/IndexPage";
import LoginPage from "./Page/LoginPage";
import PostPage from "./Page/PostPage";
import RegisterPage from "./Page/RegisterPage";
import { UserContextProvider } from "./userContext";

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/post/:id" element={<PostPage />} />
          <Route path="/edit/:id" element={<EditPost />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
