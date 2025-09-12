// // Select all menu items
// const menuItems = document.querySelectorAll(".menu-item");

// menuItems.forEach((item) => {
//   item.addEventListener("click", () => {
//     const price = item.querySelector(".price");

//     // // Show the price on click
//     // price.style.display = "inline";

//     // Toggle show/hide
//     if (price.style.display === "none" || price.style.display === "") {
//       price.style.display = "inline"; // show
//     } else {
//       price.style.display = "none"; // hide again
//     }
//   });
// });

// Select all menu items
// const menuItems = document.querySelectorAll(".menu-item");

// menuItems.forEach((item) => {
//   item.addEventListener("click", () => {
//     const price = item.querySelector(".price");
//     price.classList.toggle("show"); // toggles the class
//   });
// });

function togglePrice(id) {
  const price = document.getElementById(id);
  price.classList.toggle("show");
}
