// Sample blog posts
const blogPosts = [
    {
      id: 1,
      title: "How to Learn JavaScript",
      excerpt: "JavaScript is one of the most popular programming languages...",
      content: "JavaScript is essential for modern web development...",
      image: "https://via.placeholder.com/600x400",
    },
    {
      id: 2,
      title: "Responsive Design with CSS Grid",
      excerpt: "CSS Grid makes creating responsive layouts easier...",
      content: "CSS Grid is a layout system that helps you create...",
      image: "https://via.placeholder.com/600x400",
    },
  ];
  
  // Render blog posts
  const blogList = document.getElementById("blog-posts");
  
  function renderPosts() {
    blogList.innerHTML = blogPosts
      .map(
        (post) => `
      <div class="blog-card">
        <img src="${post.image}" alt="${post.title}">
        <div class="content">
          <h2>${post.title}</h2>
          <p>${post.excerpt}</p>
          <a href="post.html?id=${post.id}" class="read-more">Read More</a>
        </div>
      </div>`
      )
      .join("");
  }
  
  renderPosts();
  