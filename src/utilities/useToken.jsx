import { useEffect, useState } from "react";

const useToken = (email) => {
  // console.log(email);
  const [token, setToken] = useState("");
  useEffect(() => {
    if (email) {
      fetch(`https://resale-laptop-server.vercel.app/jwt?email=${email}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.token) {
            localStorage.setItem("user-token", data?.token);
            setToken(data?.token);
          }
        })
        .catch((err) => console.error(err));
    }
  }, [email]);
  return token;
};
export default useToken;
