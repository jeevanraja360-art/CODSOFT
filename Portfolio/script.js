function createPortfolio() {

    const name = document.getElementById("name").value;
    const role = document.getElementById("role").value;
    const about = document.getElementById("about").value;
    const photo = document.getElementById("photo").files[0];
    const resume = document.getElementById("resume").files[0];

    document.getElementById("pName").innerText = name;
    document.getElementById("pRole").innerText = role;
    document.getElementById("pAbout").innerText = about;

    if (photo) {
        document.getElementById("pPhoto").src =
            URL.createObjectURL(photo);
    }

    if (resume) {
        document.getElementById("resumeLink").href =
            URL.createObjectURL(resume);
    }

    document.getElementById("formSection").style.display = "none";
    document.getElementById("portfolioSection").style.display = "block";
}
