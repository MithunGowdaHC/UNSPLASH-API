const imagecontainer = document.getElementById("image-container");
const loader = document.getElementById("loader");
const count = 10;
let photosArray = [];


const apiKey = `pH0oaTM_jEIcgfJjVEfZez6cuAY2O3Nj7nrHiIyMszQ`;

const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;

// function imageLoaded() {
//    console.log("image loaded");
  
// }

function setAttributes(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

function displayPhotos() {
  photosArray.forEach((photo) => {
    // item
    const item = document.createElement("a");
    setAttributes(item, {
      href: photo.links.html,
      target: "_blank",
    });
    // img
    const img = document.createElement("img");
    setAttributes(img, {
      src: photo.urls.regular,
      title: photo.alt_description,
      alt: photo.alt_description,
    });

    // img.addEventListener('load', imageLoaded);

    item.appendChild(img);
    imagecontainer.appendChild(item);
  });
}
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    displayPhotos();
  } catch (error) {
    // error
  }
}
window.addEventListener('scroll', () => {
  if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000)
  {
    getPhotos();
    console.log("load more");
  }
})

getPhotos();
