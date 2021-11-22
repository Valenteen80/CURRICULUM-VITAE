(function () {
  const photo = document.querySelector(".may-photo");
  const text = document.querySelector(".text");
  photo.addEventListener("click", () => {
    text.insertAdjacentHTML(
      "beforebegin",
      `<img
        class="may-photo-activ"
        src="Photo.jpg"
        alt="foto Valiantsin Kurakevich"
        title="foto Valiantsin Kurakevich"
      />`
    );
    text.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
    photo.style.display = "none";
    const mayPhotoActiv = document.querySelector(".may-photo-activ");
    mayPhotoActiv.addEventListener("click", () => {
      mayPhotoActiv.remove();
      text.style.backgroundColor = "#deecac";
      photo.style.display = "";
    });
  });
})();
