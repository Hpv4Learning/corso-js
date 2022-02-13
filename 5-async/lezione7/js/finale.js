// Interagire con un API
// metodo fetch

const container = document.getElementById("root");
const url = "https://jsonplaceholder.typicode.com/posts";
const errorUrl = "https://jsonplaceholder.typicode.com/po";

function createListItem(text) {
  const li = document.createElement("li");
  li.classList.add("li-item");
  li.innerText = text;
  return li;
}

function handleError(text) {
  const errorDiv = document.createElement("div");
  errorDiv.innerText = text || "Sorry there is an Error";
  errorDiv.classList.add("paper", "error");
  container.appendChild(errorDiv);
}

function showPost(posts) {
  if (posts && posts.length > 0) {
    const first10 = posts.slice(0, 10);
    const ul = document.createElement("ul");
    const tempArray = first10.map((el) => createListItem(el.title));
    tempArray.forEach((item) => {
      ul.appendChild(item);
    });

    container.appendChild(ul);
  }
}

// PROMISE;
// const getData = () => {
//   fetch(url)
//     .then((response) => response.json())
//     .then((json) => showPost(json))
//     .catch((err) => handleError());
// };

// Async;
const getData = async () => {
  try {
    const response = await fetch(url);
    if (response.status >= 400) {
      throw Error("Sorry, Bad Raquest");
    }
    const data = await response.json();

    showPost(data);
  } catch (error) {
    console.log(error);
    handleError(error);
  }
};

getData();
