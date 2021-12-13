document.getElementById('listView').onclick = function changeToList() {
    document.getElementById('items-list').classList.remove('direction-row');
    document.getElementById('items-list').classList.add('direction-column');
    document.getElementById('items-list').classList.add('left');
}

document.getElementById('gridView').onclick = function changeToGrid() {
    document.getElementById('items-list').classList.remove('left');
    document.getElementById('items-list').classList.remove('direction-column');
    document.getElementById('items-list').classList.add('direction-row');
}

let items = [
    {id: 1, path: 'Images/person/1.jpg', name: 'Йоимия', description: 'Пиро, Стрелковое', price: '45$', inStock: true},
    {id: 2, path: 'Images/person/2.png', name: 'Альбедо', description: 'Гео, Одноручное', price: '30$', inStock: false},
    {id: 3, path: 'Images/person/3.jpg', name: 'Аяка', description: 'Крио, Одноручное', price: '5$', inStock: true},
    {id: 4, path: 'Images/person/4.jpg', name: 'Барбара', description: 'Гидро, Катализатор', price: '7$', inStock: true},
    {id: 5, path: 'Images/person/5.jpg', name: 'Беннет', description: 'Пиро, Одноручное', price: '10$', inStock: true},
    {id: 6, path: 'Images/person/6.jpg', name: 'Бей Доу', description: 'Электро, Двуручное', price: '0.5$', inStock: false},
    {id: 7, path: 'Images/person/7.jpg', name: 'Венти', description: 'Анемо, Стрелковое', price: '45$', inStock: false},
    {id: 8, path: 'Images/person/8.png', name: 'Гань Юй', description: 'Крио, Стрелковое', price: '4$', inStock: false},
    {id: 9, path: 'Images/person/9.jpg', name: 'Джин', description: 'Анемо, Одноручное', price: '20$', inStock: true},
    {id: 10, path: 'Images/person/10.jpg', name: 'Дилюк', description: 'Пиро, Двуручное', price: '50$', inStock: true},
    {id: 11, path: 'Images/person/11.png', name: 'Диона', description: 'Крио, Стрелковое', price: '20$', inStock: true},
    {id: 12, path: 'Images/person/12.jpg', name: 'Кадзуха', description: 'Анемо, Одноручное', price: '10$', inStock: true},
    {id: 13, path: 'Images/person/13.jpg', name: 'Кли', description: 'Пиро, Катализатор', price: '15$', inStock: true},
    {id: 14, path: 'Images/person/14.jpg', name: 'Кокоми', description: 'Гидро, Катализатор', price: '40.6$', inStock: true},
    {id: 15, path: 'Images/person/15.png', name: 'Кэ Цин', description: 'Электро, Одноручное', price: '6$', inStock: true},
    {id: 16, path: 'Images/person/16.jpg', name: 'Кэйа', description: 'Крио, Одноручное', price: '4$', inStock: true},
    {id: 17, path: 'Images/person/17.png', name: 'Лиза', description: 'Электро, Катализатор', price: '5$', inStock: true},
    {id: 18, path: 'Images/person/18.jpg', name: 'Мона', description: 'Гидро, Катализатор', price: '7$', inStock: true},
    {id: 19, path: 'Images/person/19.jpg', name: 'Нин Гуан', description: 'Гео, Катализатор', price: '860$', inStock: false},
    {id: 20, path: 'Images/person/20.jpg', name: 'Ноэль', description: 'Гео, Двуручное', price: '10$', inStock: true},
]

let list = document.getElementById('items-list');
let pagination = document.getElementById('pagination');

let itemsOnPage = 8;

function showPage(number, array) {
    let active = document.querySelector('#pagination a.active');

    if (active) {
        active.classList.remove('active');
    }

    number.classList.add('active');

    let pageNumber = +number.innerHTML;

    let displayedItems = array.slice((pageNumber - 1) * itemsOnPage, pageNumber * itemsOnPage);

    list.innerHTML = '';
    for (let displayedItem of displayedItems) {
        let div = document.createElement('div');
        div.className = 'item';
        text = `<div class="picture">
                            <img class="plant" src="` + displayedItem.path + `">`
        text += `</div>
                <div class="description">
                    <h1 class="display">` + displayedItem.name + `</h1>
                    <p class="description-text">` + displayedItem.description + `, ` + displayedItem.price + `</p>`

        if (displayedItem.inStock)
            text += `<button data-id="` + displayedItem.id + `" class="btn btn-success add-to-cart">Add to Cart</button>`;

        div.innerHTML += text + `</div>`;
        list.appendChild(div);
    }
};

let numbersOfPages = [];

function setPagesCount() {
    let countOfPages = Math.ceil(items.length / itemsOnPage);
    pagination.innerHTML = '';
    numbersOfPages = [];
    for (let i = 1; i <= countOfPages; i++) {
        let a = document.createElement('a');
        a.classList.add('page-link');
        a.innerHTML = i;
        pagination.appendChild(a);
        numbersOfPages.push(a);
    }

    goToPage();

    showPage(numbersOfPages[0], items);
}

function goToPage() {
    let pages = document.getElementsByClassName('page-link');

    for (let page of pages) {
        page.addEventListener('click', function () {
            showPage(this, items);
        })
    }
}

setPagesCount();