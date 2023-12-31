// Scroll to section
function scrollToCompany() {
    const abouts = document.getElementById("abouts");
    abouts.scrollIntoView({
        behavior: "smooth",
    });
}
function scrollToApartments() {
    const apartments = document.getElementById("apartments");
    apartments.scrollIntoView({
        behavior: "smooth",
    });
}
function scrollToWorks() {
    const works = document.getElementById("works");
    works.scrollIntoView({
        behavior: "smooth",
    });
}
function scrollToAgents() {
    const agents = document.getElementById("agents");
    agents.scrollIntoView({
        behavior: "smooth",
    });
}
function scrollToLocation() {
    const contact = document.getElementById("contact");
    contact.scrollIntoView({
        behavior: "smooth",
    });
}
function scrollToGIT() {
    const git = document.getElementById("git");
    git.scrollIntoView({
        behavior: "smooth",
    });
}
// End Scroll to section

// Scroll to top button
window.onscroll = function () {
    scrollToTop();
}
function scrollToTop() {
    const btnElement = document.querySelector('.myBtn');
    const heroElement = document.querySelector('.hero');
    const heroHeight = heroElement.clientHeight;
    if (window.scrollY > heroHeight) {
        btnElement.classList.add('show');
        btnElement.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        })
    }
    else {
        btnElement.classList.remove('show');
    }
}

// scrollToTop();

// End Scroll to top button

