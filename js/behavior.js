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
  photo.className.split(" ").classes.includes("small") ? (photo.className = "photo") : (photo.className = "photo small");
};

const insertListeners = () => {
  document.querySelectorAll(".photo").forEach((e) => e.addEventListener("click", reziseImg, false));
};

const waitThePage = () => {
  document.addEventListener("DOMContentLoaded", insertListeners(), false);
};

waitThePage();
