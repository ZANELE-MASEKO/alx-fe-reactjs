import React from "react";
import { useQuery } from "react-query";

const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export default function PostsComponent() {
  const { data, isLoading, error, refetch, isFetching, isError } = useQuery(
    "posts",
    fetchPosts,
    {
      staleTime:1000*60*5,
      cacheTime:100*60*10,
      refetchOnWindowFocus:false,
      keepPreviousData:true,
    }
  );

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Posts</h2>

      <button onClick={() => refetch()}>
        {isFetching ? "Refreshing..." : "Refetch Posts"}
      </button>

      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}
