// FULL NAMES
var src = document.querySelectorAll('#mw-pages .mw-category .mw-category-group li a'),
    result = [];
src.forEach(el => {
    result.push(el.innerHTML);
});

console.log(result);

// WIKI LINKS
var src = document.querySelectorAll('#mw-pages .mw-category .mw-category-group li a'),
    result = [];
src.forEach(el => {
    result.push(el.getAttribute('href'));
});

console.log(result);