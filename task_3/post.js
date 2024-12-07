// Get post ID from URL
const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get("id");

// Find post data
const post = blogPosts.find((post) => post.id == postId);

// Render post content
const postContent = document.getElementById("post-content");

if (post) {
  postContent.innerHTML = `
    <h2>${post.title}</h2>
    <img src="${post.image}" alt="${post.title}">
    <p>${post.content}</p>
  `;
} else {
  postContent.innerHTML = "<p>Post not found!</p>";
}
