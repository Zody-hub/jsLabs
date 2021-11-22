function SecondTask() {
    let word = prompt("Введіть слово: ");
    let isWord = true;

    if(word !== "") {

        for (const c of word) {
            if(!isAlpha(c)) {
                isWord = false;
                break;
            }
        }

        if(isWord ) {

            if(word.length % 2 == 0) {
                if(word[(word.length/2)-1] == word[word.length/2])
                    alert("Ваше слово: " + word + "\n" + "Середні символи збігаються");
                else
                    alert("Ваше слово: " + word + "\n" + word[(word.length/2)-1] + word[word.length/2]);
            }
            else {
                alert("Ваше слово: " + word + "\n" +word[Math.ceil(word.length/2) - 1]);
            }

        }
        else {
            alert("Невалідне слово: " + word);
        }
    }
    else {
        alert("Невалідне слово: " + word);
    }
}

function isAlpha(str) {
    return str.length === 1 && (str.match(/[a-z]/i) || str.match(/[\wа-я]+/ig));
}
SecondTask();
