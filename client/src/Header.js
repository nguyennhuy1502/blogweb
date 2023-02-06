/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./userContext";

export default function Header() {
  const {setUserInfo, userInfo} = useContext(UserContext);

  useEffect(() => {
    fetch("http://192.168.1.74:4000/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUserInfo(userInfo)
      });
    });
  }, []);

  function logout(){
    fetch("http://192.168.1.74:4000/logout", {
      credentials:"include",
      method: "POST",
    })
    setUserInfo(null)
  }

  const username = userInfo?.username
  
  return (
    <header>
      <Link to={"/"} className="logo">
        My blog
      </Link>
      <nav>
        {username && (
          <>
            <span>Hello, {username}</span>
            <Link to="/create"> Create new Post</Link>
            <a onClick={logout}> Logout </a>
          </>
        )}
      </nav>
      <nav>
        {!username && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
}
