let currentIndex = 0;
const slider = document.getElementById("slider");
const imageUrls = [
    "https://media.istockphoto.com/id/1381637603/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=w64j3fW8C96CfYo3kbi386rs_sHH_6BGe8lAAAFS-y4=",
    "https://upload.wikimedia.org/wikipedia/commons/e/ea/Spring_Lake%2C_New_Jersey_Beach_at_Sunrise.jpg",
    "https://m.media-amazon.com/images/I/71gqGGm+1UL.jpg"
];

function loadImages() {
    slider.innerHTML = imageUrls.map(url => `<img src="${url}" alt="Slide Image">`).join('');
    slider.style.width = `${600 * imageUrls.length}px`;
}

function updateImage() {
    slider.style.transform = `translateX(-${currentIndex * 600}px)`;
}

function nextImage() {
    currentIndex = (currentIndex + 1) % imageUrls.length;
    updateImage();
    resetAutoSlide();
}

function prevImage() {
    currentIndex = (currentIndex - 1 + imageUrls.length) % imageUrls.length;
    updateImage();
    resetAutoSlide();
}

let autoSlide;
function startAutoSlide() {
    autoSlide = setInterval(nextImage, 3000);
}

function resetAutoSlide() {
    clearInterval(autoSlide);
    startAutoSlide();
}

loadImages();
startAutoSlide();
