(function () {
  const photo = document.querySelector(".my-photo");
  const body = document.querySelector("body");
  photo.addEventListener("click", () => {
    body.insertAdjacentHTML(
      "afterbegin",
      `<img
        class="my-photo-active"
        src="main-photo.jpg"
        alt="foto Valiantsin Kurakevich"
        title="foto Valiantsin Kurakevich"
      />`
    );
    body.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    photo.style.display = "none";

    const myPhotoActive = document.querySelector(".my-photo-active");

    myPhotoActive.addEventListener("click", () => {
      myPhotoActive.remove();
      body.style.backgroundColor = "#e4eec0";
      photo.style.display = "";
    });
  });
})();
