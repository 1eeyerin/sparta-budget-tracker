import React, { createContext, useState, useMemo, useEffect } from 'react';
import { getLocalStorage, setLocalStorage } from '@/utils';
import { POSTS_STORAGE_NAME } from '@/constants';

export const PostsContext = createContext();

const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState(getLocalStorage(POSTS_STORAGE_NAME) || []);
  const value = useMemo(() => ({ posts, setPosts }), [posts]);

  useEffect(() => {
    setLocalStorage(POSTS_STORAGE_NAME, posts);
  }, [posts]);

  return (
    <PostsContext.Provider value={value}>{children}</PostsContext.Provider>
  );
};

export default PostsProvider;
