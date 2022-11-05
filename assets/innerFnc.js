const nav = (url) => {
  return `
  <nav>
    <a href='/' class='${url === "/" ? "selected" : ""}'> Home </a>
    <a href='/movies' class='${
      url.startsWith("/movies") ? "selected" : ""
    }'> Movies </a>
  </nav>
`;
};

const script = () => {
  return `
  <script>
    const mouseover = document.querySelector("body");
    mouseover.addEventListener("mouseover", (event) => {
      if(event.target.tagName === 'A'){
      event.target.classList.add("mouse-over");
        }
      });
    mouseover.addEventListener("mouseout", (event) => {
      event.target.classList.remove("mouse-over");
      });
  </script>
  `;
};

module.exports = { nav, script };
