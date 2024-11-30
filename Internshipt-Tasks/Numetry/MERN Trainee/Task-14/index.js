// Get all the clickable elements
const clickableElements = document.querySelectorAll('.clickable');

// Add a click event listener to each clickable element
clickableElements.forEach((element, index) => {
    element.addEventListener('click', () => {
        // Get the data-target attribute to determine which content to show/hide
        const target = element.getAttribute('data-target');

        // Hide all content elements
        document.querySelectorAll('.content').forEach((content) => {
            content.style.display = 'none';
        });

        // Show the corresponding content element
        const contentElement = document.querySelector(`.content[data-target="${target}"]`);
        contentElement.style.display = 'block';

        // Remove border bottom from all clickable elements
        clickableElements.forEach((clickable) => {
            clickable.style.borderBottom = '4px solid gray'; // Set gray for all elements by default
        });

        // Add red border bottom to the clicked element
        element.style.borderBottom = '4px solid red'; // Set red for the clicked element
    });

    // Set the first div as active by default
    if (index === 0) {
        element.click();
    }
});

// Set gray border bottom for the second clickable element by default
clickableElements[1].style.borderBottom = '4px solid gray';



const cardContainer = document.querySelector('.image_card_with_content');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const cardWidth = 350; // Adjust the width to match your card width
const scrollAmount = 100; // Adjust the scrolling amount
const scrollDuration = 500; // Duration of smooth scrolling in milliseconds

prevButton.addEventListener('click', () => {
    smoothScroll(-scrollAmount);
});

nextButton.addEventListener('click', () => {
    smoothScroll(scrollAmount);
});

function smoothScroll(scrollDistance) {
    const startTime = performance.now();
    const startScroll = cardContainer.scrollLeft;
    const endTime = startTime + scrollDuration;

    function step(currentTime) {
        if (currentTime < endTime) {
            const timeFraction = (currentTime - startTime) / scrollDuration;
            cardContainer.scrollLeft = startScroll + scrollDistance * easeOutQuad(timeFraction);
            requestAnimationFrame(step);
        } else {
            cardContainer.scrollLeft += scrollDistance; // Ensure the final position is exact
        }
    }

    requestAnimationFrame(step);
}

// Easing function for smoother animation
function easeOutQuad(t) {
    return t * (2 - t);
}


