(function () {
  const photo = document.querySelector(".may-photo");
  const text = document.querySelector(".text");
  const body = document.querySelector("body");
  photo.addEventListener("click", () => {
    body.insertAdjacentHTML(
      "afterbegin",
      `<img
        class="may-photo-activ"
        src="Photo.jpg"
        alt="foto Valiantsin Kurakevich"
        title="foto Valiantsin Kurakevich"
      />`
    );
    body.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    photo.style.display = "none";

    const mayPhotoActiv = document.querySelector(".may-photo-activ");

    mayPhotoActiv.addEventListener("click", () => {
      mayPhotoActiv.remove();
      body.style.backgroundColor = "#e4eec0";
      photo.style.display = "";
    });
  });
})();
