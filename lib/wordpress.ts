import axios, { AxiosResponse } from 'axios';

interface Post {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  // Add more properties as needed
}

export async function getPosts(): Promise<Post[]> {
  try {
    // todo
    const response: AxiosResponse<Post[]> = await axios.get(
      "https://your-wordpress-site/wp-json/wp/v2/posts"
    );
    return response.data;
  } catch (error) {
    console.error('Failed to fetch WordPress posts:', error);
    return [];
  }
}
