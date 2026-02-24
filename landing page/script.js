function updateProfile() {
    const name = document.getElementById("nameInput").value;
    const about = document.getElementById("aboutInput").value;
    const image = document.getElementById("imageInput").files[0];
    const hero = document.getElementById("heroSection");

    if (name !== "") {
        document.getElementById("displayName").innerText = name;
    }

    if (about !== "") {
        document.getElementById("displayAbout").innerText = about;
    }

    if (image) {
        const reader = new FileReader();
        reader.onload = function () {
            hero.style.backgroundImage = `url(${reader.result})`;
        };
        reader.readAsDataURL(image);
    }
}
