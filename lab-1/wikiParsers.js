var src = document.querySelectorAll('#mw-pages .mw-category .mw-category-group li a'),
    result = [];
src.forEach(el => {
    result.push(el.innerHTML);
});

console.log(result);