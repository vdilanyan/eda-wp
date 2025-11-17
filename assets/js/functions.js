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
    // document.addEventListener('contextmenu', e => {
    //     e.preventDefault();
    // }, { capture: true });

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

    seeMore.addEventListener('click', function() {
        const moreText = this.dataset.more;
        const lessText = this.dataset.less;
        this.textContent = this.textContent.trim() === moreText
            ? lessText
            : moreText;
        exhibitionsGrid.classList.toggle('expanded');
    });
});
