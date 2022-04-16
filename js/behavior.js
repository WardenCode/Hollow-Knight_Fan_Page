// document.addEventListener("DOMContentLoaded", (event) => {
//   for (let i = 0; i < 3; i++) {
//     let photo = document.getElementById(`${i.toString()}`);
//     photo.addEventListener("click", () => {
//       let classes = photo.className.split(" ");
//       classes.includes("small")
//         ? (photo.className = "photo")
//         : (photo.className = "photo small");
//     });
//   }
// });

const resizeImg = (photo) => {
  let classes = photo.className.split(" ");

  classes.includes("small") ? (photo.className = "photo") : (photo.className = "photo small");
};

document.addEventListener("DOMContentLoaded", (event) => {
  let photo = document.querySelectorAll(".photo");

  photo.forEach((e) => e.addEventListener("click", reziseImg, false));
});
