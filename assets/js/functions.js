function ready(fn) {
    if (document.readyState !== 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

ready(function () {
    const galleryData = [];

    JSON.parse(wp_var.gallery).forEach((item) => {
        galleryData.push({ url: item.url });
    });

    console.log(galleryData);

    const images = document.querySelectorAll('.masonry-gallery img');
    const lightboxOverlay = document.getElementById('lightboxOverlay');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxClose = document.getElementById('lightboxClose');
    const lightboxPrev = document.getElementById('lightboxPrev');
    const lightboxNext = document.getElementById('lightboxNext');

    let currentIndex = 0;

    function openLightbox(index) {
        currentIndex = index;
        lightboxImage.src = galleryData[currentIndex].url;
        lightboxOverlay.style.display = 'flex';
    }

    function closeLightbox() {
        lightboxOverlay.style.display = 'none';
    }

    function goNext(event) {
        event.stopPropagation();
        currentIndex = (currentIndex + 1) % galleryData.length;
        lightboxImage.src = galleryData[currentIndex].url;
    }

    function goPrev(event) {
        event.stopPropagation();
        currentIndex = (currentIndex - 1 + galleryData.length) % galleryData.length;
        lightboxImage.src = galleryData[currentIndex].url;
    }

    function handleKeyDown(event) {
        switch (event.key) {
            case 'Escape':
                closeLightbox();
                break;
            case 'ArrowRight':
                goNext(event);
                break;
            case 'ArrowLeft':
                goPrev(event);
                break;
        }
    }

    document.addEventListener('keydown', handleKeyDown);
    lightboxClose.addEventListener('click', closeLightbox);
    lightboxPrev.addEventListener('click', goPrev);
    lightboxNext.addEventListener('click', goNext);
    lightboxOverlay.addEventListener('click', closeLightbox);

    images.forEach((img, index) => {
        img.addEventListener('click', () => openLightbox(index));
    });
});
