import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { getLocalStorage, setLocalStorage } from "@/utils";
import { POSTS_STORAGE_NAME } from "@/constants";
import { Detail, Home } from "@/pages";
import { Container } from "@/components/Layout";

const getPostsFromLocalStorage = () => {
  return JSON.parse(getLocalStorage(POSTS_STORAGE_NAME) || "[]");
};

const setPostsFromLocalStorage = (value) => {
  setLocalStorage(POSTS_STORAGE_NAME, JSON.stringify(value));
};

const App = () => {
  const [posts, setPosts] = useState(getPostsFromLocalStorage());

  const onSubmit = (post) => {
    setPosts((prev) => [...prev, { ...post, id: uuidv4() }]);
  };

  const onUpdate = (post) => {
    setPosts((prev) => prev.map((item) => (item.id === post.id ? post : item)));
  };

  const onDelete = (id) => {
    setPosts((prev) => prev.filter((item) => item.id !== id));
  };

  const getPost = (id) => posts.find((post) => post.id === id);

  useEffect(() => {
    setPostsFromLocalStorage(posts);
  }, [posts]);

  return (
    <BrowserRouter basename="/sparta-expense-manager/">
      <Routes>
        <Route
          path="/"
          element={
            <Container>
              <Home onSubmit={onSubmit} posts={posts} />
            </Container>
          }
        />
        <Route
          path="/detail/:id"
          element={
            <Container>
              <Detail
                getPost={getPost}
                onUpdate={onUpdate}
                onDelete={onDelete}
              />
            </Container>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
