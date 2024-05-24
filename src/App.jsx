import { Container } from "@/src/components/Layout";
import { POSTS_STORAGE_NAME } from "@/src/constants";
import { Detail, Home } from "@/src/pages";
import { getLocalStorage, setLocalStorage } from "@/src/utils";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const getPostsFromLocalStorage = () => {
  return JSON.parse(getLocalStorage(POSTS_STORAGE_NAME) || "[]");
};

const setPostsFromLocalStorage = (value) => {
  setLocalStorage(POSTS_STORAGE_NAME, JSON.stringify(value));
};

const App = () => {
  const [posts, setPosts] = useState(getPostsFromLocalStorage());

  const onSubmit = (post) => {
    setPosts((prev) => {
      const newPosts = [...prev, { ...post, id: uuidv4() }];
      setPostsFromLocalStorage(newPosts);

      return newPosts;
    });
  };

  const onUpdate = (post) => {
    setPosts((prev) => {
      const newPosts = prev.map((item) => (item.id === post.id ? post : item));
      setPostsFromLocalStorage(newPosts);

      return newPosts;
    });
  };

  const onDelete = (id) => {
    setPosts((prev) => {
      const newPosts = prev.filter((item) => item.id !== id);
      setPostsFromLocalStorage(newPosts);

      return newPosts;
    });
  };

  const getPost = (id) => {
    return posts.find((post) => post.id === id);
  };

  return (
    <BrowserRouter basename="/sparta-budget-tracker/">
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
