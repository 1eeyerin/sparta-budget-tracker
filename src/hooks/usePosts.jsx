import { useContext } from 'react';
import { PostsContext } from '@/context/PostsProvider';

export const usePosts = () => useContext(PostsContext).posts;
export const useSetPosts = () => useContext(PostsContext).setPosts;
