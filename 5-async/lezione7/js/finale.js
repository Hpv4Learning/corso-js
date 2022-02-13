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

function showPost(posts) {
  if (posts && posts.length > 0) {
    const first10 = posts.slice(0, 10);
    const ul = document.createElement("ul");
    const tempArray = first10.map(function (el) {
      return createListItem(el.title);
    });

    tempArray.forEach((item) => {
      ul.appendChild(item);
    });

    container.appendChild(ul);
  }
}

function handleError(text) {
  const errorDiv = document.createElement("div");
  errorDiv.innerText = text || "Sorry there was an error";
  errorDiv.classList.add("paper", "error");
  container.appendChild(errorDiv);
}

//PROMISE
// const getData = () => {
//   fetch(url)
//     .then(function (result) {
//       return result.json();
//     })
//     .then((data) => showPost(data));
// };

// ASYNC;
const getData = async () => {
  try {
    const response = await fetch(errorUrl);
    if (response.status >= 400) {
      throw Error("Sorry, Bad Request");
    }
    const data = await response.json();
    showPost(data);
  } catch (error) {
    handleError(error);
  }
};

getData();
