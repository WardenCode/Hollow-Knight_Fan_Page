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

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".photo").forEach((e) => e.addEventListener("click", (e) => {
    photo.className.split(" ").includes("small") ? (photo.className = "photo") : (photo.className = "photo small");
  }));
});
