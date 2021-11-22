let list = document.getElementsByClassName("item");

document.getElementById('listView').onclick = function changeToList() {    
    document.getElementById('items-list').classList.remove('direction-row');
    document.getElementById('items-list').classList.add('direction-column');    
    document.getElementById('items-list').classList.add('left');

    for (let element of list) {
        element.classList.add("list-view");
    }
}

document.getElementById('gridView').onclick = function changeToGrid() {    
    document.getElementById('items-list').classList.remove('left');
    document.getElementById('items-list').classList.remove('direction-column');
    document.getElementById('items-list').classList.add('direction-row');
    
    for (let element of list) {
        element.classList.remove("list-view");        
    }
}