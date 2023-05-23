  import axios from 'axios';

  type Post = {
    id: number;
    title: {
      rendered: string;
    };
    excerpt: {
      rendered: string;
    };
  };
  
  export const fetchPosts = async (): Promise<Post[]> => {
    try {

      // TODO replace with real endpoint
      // const response = await axios.get('https://your-wordpress-api-url/wp-json/wp/v2/posts');

      // STUB
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');

      const posts: Post[] = response.data.map((post: any) => ({
        id: post.id,
        title: {
          rendered: post.title//?.rendered,
        },
        excerpt: {
          rendered: post.excerpt//?.rendered,
        },
      }));
      return posts;
    } catch (error) {
      console.error('Error fetching posts:', error);
      return [];
    }
  };
  