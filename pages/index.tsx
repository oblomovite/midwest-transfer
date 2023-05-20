import React from 'react';
import { GetStaticProps, NextPage } from 'next';
import { getPosts, getStubPosts, Post } from '../lib/wordpress';

interface HomePageProps {
  posts: Post[];
}

const HomePage: NextPage<HomePageProps> = ({ posts }) => {
  return (
    <div>
      <h1>Welcome to My News/Blogging Site!</h1>
      <h2>Latest Posts</h2>

      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title.rendered}</h3>
          <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
          <a href={`/posts/${post.slug}`}>Read more</a>
        </div>
      ))}

    </div>
  );
};

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
//   const posts = await getPosts();
  const posts = await getStubPosts();
  return {
    props: { posts },
  };
};

export default HomePage;
