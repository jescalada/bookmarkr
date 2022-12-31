const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");

const button = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const logo = document.getElementById("logo");

// Hamburger button listener
button.addEventListener("click", () => {
  button.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");

  if (menu.classList.contains("flex")) {
    logo.setAttribute("src", "./images/logo-bookmark-footer.svg");
  } else {
    logo.setAttribute("src", "./images/logo-bookmark.svg");
  }
});

// Tabs Menu Event Listener
tabs.forEach((tab) => {
  tab.addEventListener("click", (event) => {
    // Deactivate all tabs
    tabs.forEach((tab) => {
      tab.children[0].classList.remove("border-softRed");
    });

    // Hide all panels
    panels.forEach((panel) => {
      panel.classList.add("hidden");
    });

    // Activate a new tab and panel based on the target
    event.target.classList.add("border-softRed");
    const classString = event.target.getAttribute("data-target");
    document
      .getElementById("panels")
      .getElementsByClassName(classString)[0]
      .classList.remove("hidden");
  });
});
