import React, { useEffect, useState } from "react";
import { gql, InMemoryCache, ApolloClient } from "@apollo/client";
import { HttpLink } from "@apollo/client/link/http";

const httpLink = new HttpLink({
  uri: "https://jsonplaceholder.typicode.com/graphql", // This is a placeholder. You need to replace this with your actual GraphQL endpoint.
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

const GET_POSTS = gql`
  query GetPosts {
    posts {
      # Assuming your GraphQL API has a 'posts' field that returns an array of post objects
      id
      title
      body
      userId # Assuming userId is a scalar field on the Post type
    }
  }
`;

function GraphqlComponent() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await client.query({
          query: GET_POSTS,
        });
        // Adjust 'data.posts' based on your actual GraphQL schema's root query field name for posts.
        setPosts(data.posts || []);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Posts from GraphQL API</h1>
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <p>User ID: {post.userId}</p>
          </div>
        ))
      ) : (
        <p>No posts found or GraphQL endpoint is incorrect.</p>
      )}
    </div>
  );
}

export default GraphqlComponent;
