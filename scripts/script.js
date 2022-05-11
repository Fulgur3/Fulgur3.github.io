// slider

document.getElementById('prev-button').addEventListener('click', prev);
document.getElementById('next-button').addEventListener('click', next);

function prev() {
    clearTimeout(timeout);

    var current_slide = document.querySelector('.slider-image.active');

    var current_slide_data = Number(current_slide.getAttribute('data')); 
    var first_slide_data = Number(document.querySelector('.slider-image:first-child').getAttribute('data'));

    current_slide.classList.remove('active');

    current_slide_data != first_slide_data 
        ?
        document.querySelector('.slider-image[data="'+ (current_slide_data -= 1) + '"]').classList.add('active')
        :
        document.querySelector('.slider-image:last-child').classList.add('active');

    timeout = setTimeout(next, 4000);
}

function next() {
    clearTimeout(timeout);

    var current_slide = document.querySelector('.slider-image.active');

    var current_slide_data = Number(current_slide.getAttribute('data')); 
    var last_slide_data = Number(document.querySelector('.slider-image:last-child').getAttribute('data'));

    current_slide.classList.remove('active');

    current_slide_data != last_slide_data 
        ?
        document.querySelector('.slider-image[data="'+ (current_slide_data += 1) + '"]').classList.add('active')
        :
        document.querySelector('.slider-image:first-child').classList.add('active');

    timeout = setTimeout(next, 4000);
}

timeout = setTimeout(next, 4000);

// prosucts slider

document.querySelectorAll('#products-slider input').forEach(element => {
    element.addEventListener('click', showProducts);
});

function showProducts() {
    document.querySelector('.catalog-products-part:not(.d-none)').classList.toggle('d-none');
    var id = this.getAttribute('id');
    document.querySelector('.catalog-products-part[for="' + id + '"]').classList.toggle('d-none');
}
