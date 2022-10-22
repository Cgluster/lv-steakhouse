// Mailing list feature for deals

// Back to top button functionality

const showPx = 100;
const backToTopButton = document.querySelector('.back-to-top');

const scrollContainer = () => {
    return document.documentElement || document.body;
};

document.addEventListener('scroll', () => {
    if (scrollContainer().scrollTop > showPx) {
        backToTopButton.classList.remove('hidden');
    } else {
        backToTopButton.classList.add('hidden');
    }
});

const goToTop = () => {
    document.body.scrollIntoView();
}

backToTopButton.addEventListener('click', goToTop);