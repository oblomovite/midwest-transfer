// import React from 'react';
// import { GetStaticProps } from 'next';
// import { fetchPosts } from '../lib/wordpress';


// type Post = {
//   title: string;
//   excerpt: {
//     rendered?: string;
//   };
// };

// type HomeProps = {
//   posts: Post[];
// };

// const Home: React.FC<HomeProps> = ({ posts }) => {
//   return (
//     <div>
//       <h1>Latest Posts</h1>
//       {posts.map((post) => (
//         <div key={post.title}>
//           <h2>{post.title}</h2>
//           {post.excerpt?.rendered ? (
//             <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
//           ) : (
//             <p>No excerpt available</p>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export const getStaticProps: GetStaticProps = async () => {
//   const posts = await fetchPosts();
//   return {
//     props: {
//       posts,
//     },
//   };
// };


// export default Home;

import React, { useEffect, useState } from 'react';

type Post = {
  id: number;
  title: string;
  body: string;
};

const Home: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Latest Posts</h1>
      {posts.map((post) => (
        <div key={post.id} className="bg-gray-100 p-4 rounded mb-4">
          <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
          <p className="text-gray-700">{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
