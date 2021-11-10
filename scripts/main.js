const postTemp = document.querySelector("#single-post");
const postList = document.querySelector("#posts ul");

const sendRequest = (methoud, url) => {
  const promise = new Promise((resolve, reject, data) => {});
  //   const xhr = new XMLHttpRequest();

  //   xhr.open(methoud, url);

  //   xhr.responseType = "json";

  //   xhr.onload = function () {
  //     if (xhr.status >= 200 && xhr.status < 300) {
  //       resolve(xhr.response);
  //     } else {
  //       reject(new Error("somting went wrong !"));
  //     }
  //   };

  //   xhr.onerror = function () {
  //     reject(new Error("network faild to send request"));
  //   };

  //   xhr.send(JSON.stringify(data));
  // });

  return fetch(url)
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response.json();
      } else {
        response.json().then((err) => {
          throw new Error("somthing went wrong");
        });
      }
    })
    .catch((err) => {
      throw new Error("somthing went wrong");
    });
};

const fetchPosts = async (target) => {
  const resposeData = await axios.get(
    `https://jsonplaceholder.typicode.com/${target}`
  );
  const response = resposeData.data;
  console.log(response);
  for (let post of response) {
    const postEl = document.importNode(postTemp.content, true);
    postEl.querySelector("h3").textContent = post.title;
    postEl.querySelector("p").textContent = post.body;
    postEl.querySelector("li").id = post.id;
    postList.append(postEl);
  }
};

fetchPosts("posts");
