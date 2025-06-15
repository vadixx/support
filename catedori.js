// Данные о товарах по категориям
const products = {
    electronics: [
        { id: 1, name: "Одноразка A", price: 500, image: "https://raw.githubusercontent.com/vadixx/support/main/img/odnorazki.jpg" },
        { id: 2, name: "Одноразка B", price: 450, image: "https://raw.githubusercontent.com/vadixx/support/main/img/odnorazki.jpg" },
        { id: 3, name: "Одноразка C", price: 550, image: "https://raw.githubusercontent.com/vadixx/support/main/img/odnorazki.jpg" }
    ],
    clothes: [
        { id: 4, name: "Расходник A", price: 300, image: "https://raw.githubusercontent.com/vadixx/support04/refs/heads/main/img/rashodniki.jpg" },
        { id: 5, name: "Расходник B", price: 350, image: "https://raw.githubusercontent.com/vadixx/support04/refs/heads/main/img/rashodniki.jpg" }
    ],
    home: [
        { id: 6, name: "POD-система A", price: 1000, image: "https://raw.githubusercontent.com/vadixx/support04/refs/heads/main/img/pod.jpg" },
        { id: 7, name: "POD-система B", price: 1200, image: "https://raw.githubusercontent.com/vadixx/support04/refs/heads/main/img/pod.jpg" }
    ],
    liquids: [
        { id: 8, name: "Жидкость A", price: 200, image: "https://raw.githubusercontent.com/vadixx/support04/refs/heads/main/img/jiji.jpg" },
        { id: 9, name: "Жидкость B", price: 250, image: "https://raw.githubusercontent.com/vadixx/support04/refs/heads/main/img/jiji.jpg" }
    ],
    snus: [
        { id: 10, name: "Снюс A", price: 400, image: "https://raw.githubusercontent.com/vadixx/support04/refs/heads/main/img/snus.jpg" },
        { id: 11, name: "Снюс B", price: 450, image: "https://raw.githubusercontent.com/vadixx/support04/refs/heads/main/img/snus.jpg" }
    ]
};

// Корзина
let cart = [];

// Функция для отображения товаров выбранной категории
function showCategory(category) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Очищаем список товаров

    // Скрываем список категорий и показываем товары выбранной категории
    document.getElementById('category-list').style.display = 'none'; // Скрываем категории
    document.getElementById('backButton').style.display = 'block'; // Показываем кнопку "Назад"

    // Отображаем товары выбранной категории
    products[category].forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}₽</p>
            <button onclick="addToCart(${product.id}, '${category}')">Добавить в корзину</button>
        `;
        productList.appendChild(productDiv);
        productDiv.style.display = 'block'; // Показываем товар
    });
}

// Функция для добавления товара в корзину
function addToCart(productId, category) {
    const product = products[category].find(p => p.id === productId);
    cart.push(product);
    alert(`${product.name} добавлен в корзину!`);
}

// Функция для возвращения к категориям
function backToCategories() {
    // Показываем список категорий и скрываем товары
    document.getElementById('category-list').style.display = 'flex'; // Показываем категории
    document.getElementById('product-list').innerHTML = ''; // Очищаем список товаров
    document.getElementById('backButton').style.display = 'none'; // Скрываем кнопку "Назад"
}

// Функция для отображения корзины
function checkout() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = ''; // Очищаем корзину

    cart.forEach(product => {
        const listItem = document.createElement('li');
        listItem.textContent = `${product.name} - ${product.price}₽`;
        cartItems.appendChild(listItem);
    });

    document.getElementById('cart').style.display = 'block'; // Показываем корзину
}

// Функция для оформления заказа
function finalizeCheckout() {
    alert("Ваш заказ оформлен! Спасибо за покупку.");
    cart = []; // Очищаем корзину после оформления
    document.getElementById('cart-items').innerHTML = ''; // Очищаем список товаров в корзине
    document.getElementById('cart').style.display = 'none'; // Прячем корзину
}

// Переход в корзину
document.getElementById('checkoutBtn').addEventListener('click', function() {
    checkout();
});

// Изначально показываем список категорий
document.getElementById('category-list').style.display = 'flex';
document.getElementById('backButton').style.display = 'none'; // Кнопка "Назад" скрыта по умолчанию
