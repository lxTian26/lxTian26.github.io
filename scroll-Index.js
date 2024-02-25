const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
    const elementBottom = el.getBoundingClientRect().bottom;

    return (
        elementBottom <=
        (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
};

const elementOutofView = (el) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
        elementTop <= (window.innerHeight || document.documentElement.clientHeight)
    );
};

const displayScrollElement = (element) => {
    element.classList.add("scrolled");
    element.classList.remove("scroll");
};

const hideScrollElement = (element) => {
    element.classList.remove("scrolled");
    element.classList.add("scroll");
};

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 1.5)) {
            hideScrollElement(el)

        } else if (elementOutofView(el)) {
            displayScrollElement(el);
        }
    })
}

window.addEventListener("scroll", () => {
    handleScrollAnimation();
});

