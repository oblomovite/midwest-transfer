import axios, { AxiosResponse } from 'axios';

export interface Post {
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
    const response: AxiosResponse<Post[]> = await axios.get(
      // todo: replace with real endpoint
      "https://your-wordpress-site/wp-json/wp/v2/posts"
    );
    return response.data;
  } catch (error) {
    console.error('Failed to fetch WordPress posts:', error);
    return [];
  }
}

// lib/wordpress.ts
export async function getStubPosts(): Promise<Post[]> {
    // Simulate an API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
  
    // Stubbed posts data
    const stubbedPosts = [
      {
        id: 1,
        title: 'Stubbed Post 1',
        content: '<p>This is the content of stubbed post 1.</p>',
        date: '2022-01-01',
      },
      {
        id: 2,
        title: 'Stubbed Post 2',
        content: '<p>This is the content of stubbed post 2.</p>',
        date: '2022-02-01',
      },
      {
        id: 3,
        title: 'Stubbed Post 3',
        content: '<p>This is the content of stubbed post 3.</p>',
        date: '2022-03-01',
      },
    ];
  
    return stubbedPosts;
  }
  