const head_dropdown = document.querySelectorAll('.head_dropdown');

head_dropdown.forEach(item => {
    let button = item.querySelector('button');
    let ul = item.querySelector('ul');
    button.onclick = () => {
        removeHeadDropdown(ul);
        ul.classList.toggle('active');
    }
})

function removeHeadDropdown(el = null) {
    let list = document.querySelectorAll('.head_dropdown ul');

    if (el) {
        list.forEach(item => {
            if (item != el) {
                item.classList.remove('active');
            }
        })
    } else {
        list.forEach(item => {
            item.classList.remove('active');
        })
    }
}

function checkAppsBtn(a) {
    t = false;
    head_dropdown.forEach(item => {
        if (item === a) {
            t = true;
        }
    })
    return t;
}

const search = document.querySelector('.postmarks_searchbox button');
const search_input = document.querySelector('.postmarks_searchbox .search_input');

if (search) {
    search.onclick = () => {
        search_input.classList.toggle('search_input_active');

        if (search_input.classList.contains('search_input_active')) {
            search_input.querySelector('input').focus();
        } else {
            search_input.querySelector('input').blur();
        }
    }
}

const body = document.querySelector('body');
document.onclick = (e) => {
    let parent = e.target;
    let t = true;
    let search = true;

    while (parent != body) {
        parent = parent.parentNode;
        if (checkAppsBtn(parent)) {
            t = false;
        }

        if (document.querySelector('.postmarks_searchbox') == parent) {
            search = false;
        }
    }
    if (t) {
        removeHeadDropdown();
    }

    if (search && search_input) {
        search_input.classList.remove('search_input_active');
    }
}

const anons_slider_items = document.querySelectorAll('.anons_slider .swiper-slide');
const check_image = document.querySelector('.main_image .select_brand_img');
const play_video_image = document.querySelector('.main_image .left');
const mobile_anons_slider = document.querySelectorAll('.mobile_anons_slider .swiper-slide');

if (mobile_anons_slider.length) {
    mobile_anons_slider.forEach(item => {
        const img = item.querySelector('img');
        item.onclick = () => {
            check_image.setAttribute('src', img.src);
            play_video_image.setAttribute('src', img.src);
        }
    })
}

if (anons_slider_items.length) {
    anons_slider_items.forEach(item => {
        const img = item.querySelector('img');
        item.onclick = () => {
            check_image.setAttribute('src', img.src);
            play_video_image.setAttribute('src', img.src);
        }
    })
}

const calculate = document.querySelectorAll('.calculate');

if (calculate.length) {
    calculate.forEach(item => {
        const minus = item.querySelector('.decrement');
        const plus = item.querySelector('.increment');
        const result = item.querySelector('.result');
        const money = result.getAttribute('default-price');
        console.log(money);

        minus.onclick = () => {
            if (parseInt(result.innerHTML) >= Number(money)) {
                result.innerHTML = parseInt(result.innerHTML) - parseInt(money) + '$';
            }
        }

        plus.onclick = () => {
            result.innerHTML = parseInt(result.innerHTML) + parseInt(money) + '$';
        }
    })
}

const resize_btn = document.querySelector('.resize_icon');
const modal = document.querySelector('.img_modal');
const select_img = document.querySelector('.main_image .select_brand_img');

if (resize_btn) {
    resize_btn.onclick = () => {
        let img = modal.querySelector('img');
        img.setAttribute('src', select_img.getAttribute('src'))
        modal.classList.toggle('img_modal_active');
    }

    modal.querySelector('.close').onclick = () => {
        modal.classList.remove('img_modal_active');
    }
}