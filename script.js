const postInput = document.getElementById("postInput");
const postBtn = document.getElementById("postBtn");
const postList = document.getElementById("postList");

const dummyPosts = [
  {
    id: 1,
    name: "Anton Pixel",
    username: "@pixalate",
    avatar: "https://i.pravatar.cc/50?img=1",
    content: "Bekasi panas banget, mataharinya ada dua ratus tiga puluh belas ribu juta triliun niun niun kalee",
  },

  {
    id: 2,
    name: "Endang Pentium",
    username: "@niumnium1",
    avatar: "https://i.pravatar.cc/50?img=2",
    content: "Kenapasih dia nolak aku? emang aku setua itu ya??",
  },

  {
    id: 3,
    name: "Namaku MUKHLIS",
    username: "@mukhlishitsabiss",
    avatar: "https://i.pravatar.cc/50?img=3",
    content: "Mls bgt dh klo k mall pda minta fto kyk gw artis aja, eh kn emg artis xixi",
  },
];


if (!localStorage.getItem("posts")) {
  localStorage.setItem("posts", JSON.stringify(dummyPosts));
}

let posts = JSON.parse(localStorage.getItem("posts"));

function renderPosts() {
  postList.innerHTML = posts
    .slice()
    .reverse()
    .map((post) => {
      return `
        <div class="post">
          <div class="post-header">
            <img src="${post.avatar}">

            <div class="post-user">
              <h4>${post.name}</h4>
              <span>${post.username}</span>
            </div>

          </div>

          <div class="post-content">
            ${post.content}
          </div>

        </div>
      `;
    })
    .join("");
}


postBtn.addEventListener("click", function () {
  const content = postInput.value.trim();

  if (content === "") {
    alert("Post tidak boleh kosong!");
    return;
  }

  const newPost = {
    id: Date.now(),
    name: "Hariri",
    username: "@rarariri",
    avatar: "https://i.pravatar.cc/50?img=15",
    content: content,
  };

  posts.push(newPost);

  localStorage.setItem("posts", JSON.stringify(posts));

  renderPosts();

  postInput.value = "";
});

renderPosts();
