const gallery = document.querySelector(".gallery");
const galleryModal = document.querySelector(".gallery-modal");
const modalImg = document.getElementById("img01");
const captionText = document.getElementById("caption");
let currentIndex = 0;

const imageData = [
  { src: "/materials/IMG_1240.JPG", alt: "Description for image 1" },
  { src: "/materials/IMG_1357.JPG", alt: "Description for image 2" },
  { src: "/materials/IMG_1675.JPG", alt: "Description for image 3" },
  { src: "/materials/IMG_3428.JPG", alt: "Description for image 4" },
  { src: "/materials/IMG_4717.JPG", alt: "Description for image 5" },
  { src: "/materials/IMG_9181.JPG", alt: "Description for image 6" },
];

imageData.forEach((img, index) => {
  let imageElement = document.createElement("img");
  imageElement.src = img.src;
  imageElement.alt = img.alt;
  imageElement.onclick = function () {
    openCarousel(index);
  };
  gallery.appendChild(imageElement);
});

function openCarousel(index) {
  currentIndex = index;
  galleryModal.style.display = "block";
  modalImg.src = imageData[index].src;
  captionText.innerHTML = imageData[index].alt;
}

function closeCarousel() {
  galleryModal.style.display = "none";
}

function changeImage(step) {
  currentIndex = (currentIndex + step + imageData.length) % imageData.length;
  modalImg.src = imageData[currentIndex].src;
  captionText.innerHTML = imageData[currentIndex].alt;
}

function openCarousel(index) {
  currentIndex = index;
  galleryModal.style.display = "block";
  modalImg.src = imageData[index].src;
  captionText.innerHTML = imageData[index].alt;

  document.querySelector(".navbar").style.display = "none";
}

function closeCarousel() {
  galleryModal.style.display = "none";

  document.querySelector(".navbar").style.display = "block";
}
