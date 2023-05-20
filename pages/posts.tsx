import React from 'react';
import { GetStaticProps, NextPage } from 'next';
import { getPosts, Post } from '../lib/wordpress';

interface PostsPageProps {
  posts: Post[];
}

const PostsPage: NextPage<PostsPageProps> = ({ posts }) => {
  return (
    <div>
      <h1>WordPress Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title.rendered}</h2>
          <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </div>
      ))}
    </div>
  );
};

export const getStaticProps: GetStaticProps<PostsPageProps> = async () => {
  const posts = await getPosts();
  return {
    props: { posts },
  };
};

export default PostsPage;
