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

const resizeImg = (e) => {
  if (e.target !== e.currentTarget) {
    let photo = e.target.id;
    alert(`Hello ${photo}`);
  }
  e.stopPropagation();
};

document.addEventListener("DOMContentLoaded", () => {
  const wrapper = document.querySelector(".photos");
  wrapper.addEventListener("click", resizeImg(), false);
});
