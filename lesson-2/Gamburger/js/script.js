class Hamburger {
    constructor(size, sauce, flavoring, mayo) {
        this.size = size;
        this.sauce = sauce;
        this.flavoring = flavoring;
        this.mayo = mayo;
    }

    calculatePrice() {       // Посчитать цену бургера
        var result = 0;

        if (this.size == 'small'){
            result += 50;
        } else {
            result += 100;
        }

        switch(this.sauce) {
            case 'cheese':
                result += 10;
                break;
            case 'salad':
                result += 20;
                break;
            case 'potato':
                result += 15;
                break;
        }

        if (this.flavoring) {
            result += 15;
        }

        if (this.mayo) {
            result += 20;
        }

        return result;
    }

    calculateCalories() {    // Посчитать калорийность
        var result = 0;

        if (this.size == 'small') {
            result += 20;
        } else {
            result += 40;
        }

        switch(this.sauce) {
            case 'cheese':
                result += 20;
                break;
            case 'salad':
                result += 5;
                break;
            case 'potato':
                result +=10;
                break;
        }

        if (this.mayo) {
            result += 5;
        }

        return result;
    }
}

document.getElementById('submit').onclick = function() {
    var size = document.getElementById('size').value;
    var sauce = document.getElementById('sauce').value;
    var flavoring = document.getElementById('flavoring').checked;
    var mayo = document.getElementById('mayo').checked;

    var hamburger = new Hamburger(size, sauce, flavoring, mayo);
    document.getElementById('price').innerHTML = String(hamburger.calculatePrice() + ' рублей');
    document.getElementById('calories').innerHTML = String(hamburger.calculateCalories() + ' калорий');
};


