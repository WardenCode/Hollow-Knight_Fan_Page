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

function validateClass(photo) {
    photo.addEventListener("click", () => {
      let classes = photo.className.split(" ");
      classes.includes("small")
        ? (photo.className = "photo")
        : (photo.className = "photo small");
    }, false);
}

function addTheEvents(photos) {
  photos.forEach(photo => validateClass(photo));
}

document.addEventListener("DOMContentLoaded", () => {
  let photos = document.querySelectorAll(".photo");
  addTheEvents(photos);
});

// document.addEventListener("DOMContentLoaded", () => {
//   let photos = document.querySelectorAll(".photo");

//   for (let photo of photos) {
//     photo.addEventListener("click", () => {
//       let classes = photo.className.split(" ");
//       classes.includes("small")
//         ? (photo.className = "photo")
//         : (photo.className = "photo small");
//     }, false);
//   };  
// });
