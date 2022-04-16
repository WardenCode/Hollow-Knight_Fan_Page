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
  let photos = document.querySelectorAll(".photo");

  for (photo of photos) {
    photo.addEventListener("click", () => {
      let classes = photo.className.split(" ");
      classes.includes("small")
        ? (photo.className = "photo")
        : (photo.className = "photo small");
    }, false);
  };
  
});
