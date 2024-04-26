const gallery_modal = document.querySelector(".gallery-modal");

const imageData = [
  {
    src: "/materials/IMG_1240.JPG",
    alt: "Description for image 1",
    class: "class1",
  },
  {
    src: "/materials/IMG_1357.JPG",
    alt: "Description for image 2",
    class: "class2",
  },
  {
    src: "/materials/IMG_1675.JPG",
    alt: "Description for image 3",
    class: "class3",
  },
];

const images = [];

imageData.forEach((image) => {
  images.push(image);
});

function nextImage() {
  images[1].classList.add("show");
}

function openCarousel() {
  gallery_modal.classList.remove("hide");
  gallery_modal.classList.add("show");
}

function closeCarousel() {
  gallery_modal.classList.remove("show");
  gallery_modal.classList.add("hide");
}
