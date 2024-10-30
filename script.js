document.addEventListener("DOMContentLoaded", () => {
    const variantNumber = 49;
    const elementIndex = (variantNumber % 10) + 1; 
    const firstElement = document.getElementById("target-element");

    if (firstElement) {
        firstElement.addEventListener("click", function () {
            this.classList.toggle("highlighted");
        });
    } else {
        console.error("Елемент id 'target-element' не знайдений.");
    }

    const secondElement = document.querySelector("ul:nth-of-type(3)");
    if (secondElement) {
        secondElement.addEventListener("click", function () {
            this.classList.toggle("highlighted-next");
        });
    } else {
        console.error("Другий елемент <ul> не знайдений.");
    }
});

function addImage() {
    let image = document.getElementById("chernihiv-image");
    
    if (!image) {
        image = document.createElement("img");
        image.id = "chernihiv-image";
        image.src = "images/Chernihiv.jpg";
        image.alt = "Чернігів";
        image.width = 300;
        const imageContainer = document.querySelector(".image-container");
        if (imageContainer) {
            imageContainer.prepend(image);
        }
    }
}

function resizeImage(increase) {
    let image = document.getElementById("chernihiv-image");
    if (image) {
        let currentWidth = image.width;
        image.width = increase ? currentWidth + 50 : currentWidth - 50;
    }
}

function removeImage() {
    let image = document.getElementById("chernihiv-image");
    if (image) {
        image.remove();
    }
}