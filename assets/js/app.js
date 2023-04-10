const addEventOnElements = function ($elements, eventType, callback) {
    for (const $item of $elements) {
        $item.addEventListener(eventType, callback);
    }
};


/*
** Header Scroll State
*/

const $header = document.querySelector("[data-header]");
window.addEventListener("scroll", function () {
    $header.classList[this.window.scrollY > 50 ? "add" : "remove"]("active");
});

/*
** Search Toggle
*/

const $searchToggler = document.querySelector("[data-search-toggler]");
const $searchField = document.querySelector("[data-search-field]");
let IsExpanded = false;
$searchToggler.addEventListener("click", function () {
    $header.classList.toggle("search-active");
    IsExpanded = IsExpanded ? false : true;
    this.setAttribute("aria-expanded", IsExpanded)
    $searchField.focus()
});