import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';

// Fetch the post data based on the slug
export const getStaticProps: GetStaticProps = async ({ params }) => {
  // Fetch the post data from the API based on the slug
  const slug = params?.slug;
  // Perform the necessary logic to fetch the post data by slug
  const postData = await fetchPostBySlug(slug);

  return {
    props: {
      postData,
    },
  };
};

// Specify the dynamic paths to pre-render
export const getStaticPaths: GetStaticPaths = async () => {
  // Fetch the list of slugs for all posts from the API
  const allPosts = await fetchAllPosts();
  // Create an array of objects with the 'params' key containing the slug
  const paths = allPosts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

const PostPage: React.FC<{ postData: PostData }> = ({ postData }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{postData.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: postData.content }} />
    </div>
  );
};

export default PostPage;
