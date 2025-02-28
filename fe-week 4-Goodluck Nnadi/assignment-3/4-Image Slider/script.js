let images = [
    "firstpic.jpg",
    "secondpic.jpg",
    "thirdpic.jpg"
    ];
let index = 0;

function showImage() {
    document.getElementById("slider").src = images[index];
}

function nextImage() {
    index = (index + 1) % images.length;
    showImage();
}

function prevImage() {
    index = (index - 1 + images.length) % images.length;
    showImage();
}

showImage(); 
