function FirstTask() {

    let quantityProm = prompt("Кількість батарей: ", 1);
    let percentProm = prompt("Рівень браку: ", 10);

    let quan = parseInt(quantityProm);
    let per = parseInt(percentProm);


    if(isValidQuan(quan))
        alert("Невалідні дані: - очикуеться число > 0" + "\n" + "Ваші дані: " + quantityProm);
    else if(isValidPer(per))
        alert("Невалідні дані: - очикуеться число в рамках [0; 100]" + "\n" + "Ваші дані: " + percentProm);
    else {

        let broken = quan*per/100;
        alert("Рівень браку: " + per + "%\n" +
            "Кількість несправних акумуляторів: " + broken + "\n" +
            "Кількість робочих батарей: " + (quan - broken));
    }

}

function isValidQuan(x) {
    return (isNaN(x) || x <= 0) ? true : false;
}

function isValidPer(x){
    return (isNaN(x) || x < 0 || x > 100) ? true : false;
}

FirstTask();
