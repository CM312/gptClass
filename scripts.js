document.addEventListener('DOMContentLoaded', function() {
    console.log('여행 블로그가 로드되었습니다.');

    const slides = document.querySelector('.slides');
    const slideImages = document.querySelectorAll('.slides img');
    let currentIndex = 0;
    const slideInterval = 3000;

    function showNextSlide() {
        currentIndex++;
        if (currentIndex >= slideImages.length) {
            currentIndex = 0;
        }
        const offset = -currentIndex * 100;
        slides.style.transform = `translateX(${offset}%)`;
    }

    setInterval(showNextSlide, slideInterval);
});
