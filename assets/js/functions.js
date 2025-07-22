(function() {
    function isKey(e, codes) {
        return (
            codes.includes(e.keyCode) ||
            (typeof e.key === 'string' && codes.includes(e.key.toUpperCase().charCodeAt(0)))
        );
    }

    function blockDevTools(e) {
        // F12
        if (e.keyCode === 123) {
            e.preventDefault(); return false;
        }

        // Ctrl+Shift+[I(73),J(74),C(67)]
        if (e.ctrlKey && e.shiftKey && isKey(e, [73, 74, 67])) {
            e.preventDefault(); return false;
        }

        // Ctrl+U (view-source)
        if (e.ctrlKey && isKey(e, [85])) {
            e.preventDefault(); return false;
        }

        // Mac: ⌘ + Option + [I,J,C,U]
        if (e.metaKey && e.altKey && isKey(e, [73, 74, 67, 85])) {
            e.preventDefault(); return false;
        }
    }

    // Disable right‐click
    document.addEventListener('contextmenu', e => {
        e.preventDefault();
    }, { capture: true });

    // Catch keydowns at both window and document, in capture phase
    window.addEventListener('keydown', blockDevTools, { capture: true });
    document.addEventListener('keydown', blockDevTools, { capture: true });
})();

function ready(fn) {
    if (document.readyState !== 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

ready(function () {
    const seeMore = document.getElementById('see-more-exhibitions');
    const exhibitionsGrid = document.getElementById('exhibitions-grid');
    const galleryData = [];

    JSON.parse(wp_var.gallery).forEach((item) => {
        galleryData.push({ url: item.url });
    });

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

    seeMore.addEventListener('click', function() {
        const moreText = this.dataset.more;
        const lessText = this.dataset.less;
        this.textContent = this.textContent.trim() === moreText
            ? lessText
            : moreText;
        exhibitionsGrid.classList.toggle('expanded');
    });
});
