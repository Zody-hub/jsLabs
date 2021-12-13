let itemsCopy = items.slice();
let defaultArrayOfPlants = items.slice();
let countOfPurchases = 0;

function checkInStock(array) {
    let checkbox = document.getElementById('inStock');

    if (checkbox.checked) {
        let itemsInStock = [];

        for (let item of array)
            if (item.inStock)
                itemsInStock.push(item);

        items = itemsInStock;
    } else {
        items = itemsCopy.slice();
    }
}

document.getElementById('priceasc').onclick = function() {   
    let itemsSortedByPrice = itemsCopy.sort(
        (pl1, pl2) => 
        parseFloat(pl1.price, 10) - parseFloat(pl2.price, 10)
    );    
    checkInStock(itemsSortedByPrice);    

    showPage(numbersOfPages[0], items);
}

document.getElementById('pricedesc').onclick = function() {  
    let itemsSortedByPrice = itemsCopy.sort(
        (pl1, pl2) => 
        parseFloat(pl2.price, 10) - parseFloat(pl1.price, 10)
    );
    checkInStock(itemsSortedByPrice);    

    showPage(numbersOfPages[0], items);
}

document.getElementById('inStock').onchange = function() { 
    checkInStock(items);    
    setPagesCount();
}

document.getElementById('reset').onclick = function() {
    items = defaultArrayOfPlants.slice();
    document.getElementById('inStock').checked = false;
    
    setPagesCount();
}

let itemsInCart = {};

list.addEventListener('click', function(e) {
    if (e.target.classList.contains('add-to-cart')) {        
        countOfPurchases++;          
        document.getElementById("count").innerHTML = countOfPurchases; 
        
        let id = e.target.dataset['id'];

        if (itemsInCart[id] === undefined) {
            itemsInCart[id] = defaultArrayOfPlants[id-1];
            itemsInCart[id]['count'] = 1;
        } else {
            itemsInCart[id]['count']++;
        }

        localStorage.setItem('cart', JSON.stringify(itemsInCart));
    }
});

