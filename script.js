document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if(targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
            
            // Close mobile menu on click
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        });
    });

    // Add scroll-animate class to elements that should be animated
    const elementsToAnimate = document.querySelectorAll(
        '#services h3, #services .grid > div, ' +
        '#features h3, #features .grid > div, ' +
        '#pricing h3, #pricing .justify-center > div, ' +
        '#process h3, #process .grid > div, ' +
        '#testimonials h3, #testimonials .max-w-2xl, ' +
        '#cta h3, #cta p, #cta a'
    );

    elementsToAnimate.forEach(element => {
        element.classList.add('scroll-animate');
    });

    // Intersection Observer for scroll animations
    const animatedElements = document.querySelectorAll('.scroll-animate');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Stop observing the element after it has become visible
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    animatedElements.forEach(element => {
        element.classList.add('scroll-animate-up');
        observer.observe(element);
    });
});
