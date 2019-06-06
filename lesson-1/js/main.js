const products = [
    {id: 1, title: 'Notebook', price: 2000},
    {id: 2, title: 'Mouse', price: 30},
    {id: 3, title: 'Keyboard', price: 55},
    {id: 4, title: 'Gamepad', price: 65},
    {id: 5, title: 'macbook pro15', price: 2500},
    {id: 6, title: 'macbook pro13', price: 2000},
    {id: 7, title: 'headphones', price: 5},
    {id: 8, title: 'lamp', price: 30},
    {id: 9, title: 'monitor', price: 100},
    {id: 10, title: '55 inch monitor 4k', price: 1000},
    {id: 11, title: 'HDD3.5', price: 165},
    {id: 12, title: 'HDD2,5', price: 60},
];

const renderProduct = (title, price, testArg) => {
    return `<div class="product-item">
                <h3>${title}</h3>
                <p>${price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
};

const renderPage = list => {
    const productsList = list.map(item => renderProduct(item.title, item.price,));
    document.querySelector('.products').innerHTML = productsList.join('');
};

renderPage(products);