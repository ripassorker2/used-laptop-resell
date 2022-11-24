export const setUserAndToken = (user) => {
  const currentUser = {
    email: user.email,
  };
  console.log(currentUser);

  //   Save user in db & get token
  if (user) {
    fetch(`http://localhost:5000//user/${user?.email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(currentUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        //Save token in LocalStorage
        localStorage.setItem("user-token", data.token);
      });
  }
};
