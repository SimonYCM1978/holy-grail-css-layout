function toggleNav() {
  const outerGrid = document.querySelector(".outer-grid");

  // show on the console the class name if we click on the icon
  console.log(outerGrid.classList);

  // when user clicks on the bar icon, it toggles it on and off
  // add it if not present, removes it if present
  outerGrid.classList.toggle("outer-grid-expanded");

  // since in css, the .hide-nav hides it, we need to toggle it on or off
  // add it if not present, removes it if present
  const nav = document.querySelector(".hide-nav");
  nav.classList.toggle("hide-nav");

  /*
  querySelector only selects the first matching element, first found, first served, if the rest of
  the document contains the same class names, they will be ignored.
  querySelectorAll selects all matching elements regardless of hierarchy, each matching element is served.
  */
}

// function toggleNav() {
//   const outerGrid = document.querySelector(".outer-grid");
//   outerGrid.classList.toggle("outer-grid-expanded");
// }
