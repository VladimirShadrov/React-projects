import { useMemo } from 'react';

type PostType = {
  id: number;
  title: string;
  body: string;
};


export const useSortedPosts = (posts: PostType[], sortType: 'title' | 'body') => {
  const sortedPosts = useMemo(() => {
    if (sortType) {
      return [...posts].sort((a, b) => a[sortType].localeCompare(b[sortType]));
    }
    return posts;
  }, [posts, sortType]);

  return sortedPosts;
};

export const usePost = (posts: PostType[], sortType: 'title' | 'body', query: string) => {

  const sortedPosts = useSortedPosts(posts, sortType);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post[sortType].toLowerCase().includes(query.toLowerCase().trim()));
  }, [sortedPosts, sortType, query]);

  return sortedAndSearchedPosts;
};