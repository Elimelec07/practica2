const promo = document.getElementById("promo");
const urls = {
img1: "https://co.pinterest.com/lorenakrox/imagenes-random/",
img2: "https://wordpress.org/support/forum/localhost-installs/",
img3: "https://www.freehosting.com/client/index.php/store/website-hosting",
};

promo.addEventListener("click", function (e) {
const { alt } = e.srcElement;

if (urls[alt]) {
    window.open(urls[alt]);
}
});

const imgs = document.querySelectorAll(".swiper-slide-image");
Image.forEach(function (img) {
img.style.cursor = "pointer";
});
