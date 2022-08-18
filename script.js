(function () {
  const photo = document.querySelector(".may-photo");
  const text = document.querySelector(".text");
  const body = document.querySelector("body");
  photo.addEventListener("click", () => {
    body.insertAdjacentHTML(
      "afterbegin",
      `<img
        class="may-photo-active"
        src="photo_.jpg"
        alt="foto Valiantsin Kurakevich"
        title="foto Valiantsin Kurakevich"
      />`
    );
    body.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    photo.style.display = "none";

    const mayPhotoActive = document.querySelector(".may-photo-active");

    mayPhotoActive.addEventListener("click", () => {
      mayPhotoActive.remove();
      body.style.backgroundColor = "#e4eec0";
      photo.style.display = "";
    });
  });
})();
