let itemsInCart = JSON.parse(localStorage.getItem('cart'));

console.log(Object.values(itemsInCart));

itemsInCart = Object.values(itemsInCart);

let list = document.getElementById('items-list');
let cartSum = 0;
for (let itemInCart of itemsInCart) {
    let div = document.createElement('div');
    div.className = 'item';
    text = `<div class="picture">
                <img class="plant" src="` + itemInCart.path + `">
            </div>
            <div class="description">
                <h1 class="display">` + itemInCart.name + `</h1>
                <p class="description-text">` + itemInCart.description + `, ` + itemInCart.price + `</p>
                <p class="description-text">Количество `+ itemInCart.count +`</p>
            </div>`
    cartSum+=itemInCart.count * parseFloat(itemInCart.price,10);
    div.innerHTML += text;
    list.appendChild(div);
}
let divCarSum = document.createElement('div');
divCarSum.className='cartSum';
let cartText= `<div class="cartSum">
    <p class="description-text">Итого `+ cartSum +`</p>
</div>`
divCarSum.innerHTML += cartText;
list.appendChild(divCarSum);