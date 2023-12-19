function getIDParam() {
  const url = new URL(location.href);
  const searchParam = url.search;
  const urlParams = new URLSearchParams(searchParam);
  const ID = urlParams.get("id");
  return ID;
}
async function getData() {
  axios
    .get("https://jsonplaceholder.typicode.com/todos/", {
      params: { id: getIDParam() },
    })
    .then((response) => console.log(response.data))
    .catch((error) => console.log(error));
}

async function postData() {
  axios
    .post("https://jsonplaceholder.typicode.com/posts", {
      title: "Our Title",
      body: "Our Body",
    })
    .then((response) => console.log(response.data))
    .catch((error) => console.log(error));
}
async function putData() {
  axios
    .put("https://jsonplaceholder.typicode.com/posts/" + getIDParam(), {
      title: "Our New Title",
      body: "Our New Body",
    })
    .then((response) => console.log(response.data))
    .catch((error) => console.log(error));
}
async function deleteData() {
  axios
    .delete("https://jsonplaceholder.typicode.com/posts/" + getIDParam())
    .then((response) => console.log("Data Deleted", response.data))
    .catch((error) => console.log(error));
}
