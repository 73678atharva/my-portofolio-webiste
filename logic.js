var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");

function openTab(event,tagName) {
    for (var tabLink of tabLinks) {
        tabLink.classList.remove("active-link");
    }
    for (var tabContent of tabContents) {
        tabContent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tagName).classList.add("active-tab");
}

const message = document.getElementById("msg");

function showMessage(event){
    const form = document.getElementById("form");
    form.reset();
}
