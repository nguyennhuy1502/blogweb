/* eslint-disable array-callback-return */
import { useEffect, useState } from "react";
import Post from "../Post";

export default function IndexPage() {
    const [posts, setPosts] = useState([])
  useEffect(() => {
    fetch("http://192.168.1.74:4000/post").then(response => {
      response.json().then((posts) => {
        setPosts(posts)
      });
    });
  }, []);
  return (
    <>
    {posts.length > 0 && posts.map(post => (
        <Post {...post} />
    ))}
    </>
  );
}
