import "@/app/globals.css";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { Container } from "./components/Layout";
import { STORAGE_NAME } from "./constants";
import { DetailPage, HomePage } from "./pages";
import { getLocalStorage, setLocalStorage } from "./utils";

const getPostsFromLocalStorage = () => {
  return JSON.parse(getLocalStorage(STORAGE_NAME) || "[]");
};

const setPostsFromLocalStorage = (value) => {
  setLocalStorage(STORAGE_NAME, JSON.stringify(value));
};

const App = () => {
  const [posts, setPosts] = useState(getPostsFromLocalStorage());

  const onSubmitForm = (post) => {
    setPosts((prev) => {
      const newPosts = [...prev, { ...post, id: uuidv4() }];
      setPostsFromLocalStorage(newPosts);

      return newPosts;
    });
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Container>
              <HomePage onSubmitForm={onSubmitForm} posts={posts} />
            </Container>
          }
        />
        <Route
          path="/detail/:id"
          element={
            <Container>
              <DetailPage posts={posts} />
            </Container>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
