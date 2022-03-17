export const postUser = async (firstName, username, email, pass) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_REST_API}register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        firstName,
        username,
        email,
        pass,
      }),
      mode: "cors",
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export const getUser = async (username) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_REST_API}user`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username }),
    });
    const data = await response.json();
    console.log(data.user[0]);
    return data.user[0];
  } catch (error) {
    console.log(error);
  }
};

export const postPost = async (author, url, message) => {
  console.log("Data:", author, url, message);
  try {
    const response = await fetch(`${process.env.REACT_APP_REST_API}post`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        author,
        url,
        message,
        likes: "0",
      }),
      mode: "cors",
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export const getPost = async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_REST_API}getpost`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({}),
    });
    const data = await response.json();
    console.log(data.post);
    return data.post;
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = async (_id, url, message) => {
  console.log("Data", _id, url, message);
  try {
    const response = await fetch(`${process.env.REACT_APP_REST_API}update`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        _id,
        url,
        message,
      }),
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = async (_id) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_REST_API}delete`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ _id }),
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
