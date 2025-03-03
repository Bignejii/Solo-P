function login() {
    var username = document.getElementById('username').value
    var password = document.getElementById('password').value

    if (username && password) {
        localStorage.setItem('username', username)
        alert('Logged in successfully!')
        document.getElementById('login-section').style.display = 'none'
        displayProducts()
    } else {
        alert('Please enter valid credentials!')
    }
}

if (!localStorage.getItem('username')) {
    document.getElementById('login-section').style.display = 'contents'  
} else {
    document.getElementById('login-section').style.display = 'contents'  
    displayProducts() 
}

var products = []

function addProduct(name, price, imageUrl) {
    products.push({
        name: name,
        price: Number(price),
        imageUrl: imageUrl
    });
    displayProducts();
}

function displayProducts() {
    var $productList = $('#product-container');
    $productList.empty();

    each(products, function (product) {
        var productCardHTML =
            '<div class="product-card">' +
            '<img src="' + product.imageUrl + '" alt="' + product.name + '">' +
            '<h3>' + product.name + '</h3>' +
            '<p>Price: $' + product.price + '</p>' +
            '</div>';
        $productList.append(productCardHTML);
    });
}

$('#add-product-button').on('click', function () {
    var name = document.getElementById('product-name').value;
    var price = document.getElementById('product-price').value;
    var imageUrl = document.getElementById('product-image').value;

    if (!name || !price || !imageUrl) {
        alert('All fields are required!');
        return;
    }

    addProduct(name, price, imageUrl);

    document.getElementById('product-name').value = '';
    document.getElementById('product-price').value = '';
    document.getElementById('product-image').value = '';
});






























////////////////////////////////////////////////////////////////////////
function each(coll, func) {
    if (Array.isArray(coll)) {
        for (var i = 0; i < coll.length; i++) {
            func(coll[i], i);
        }
    } else {
        for (var key in coll) {
            func(coll[key], key);
        }
    }
}

function map(coll, func) {
    var acc = Array.isArray(coll) ? [] : {};
    each(coll, function (element, key) {
        acc[key] = func(element, key);
    });
    return acc;
}

function filter(array, predicate) {
    var acc = [];
    each(array, function (element, index) {
        if (predicate(element, index)) {
            acc.push(element);
        }
    });
    return acc;
}

function reduce(array, f, acc) {
    if (acc === undefined) {
        acc = array[0];
        array = array.slice(1);
    }
    each(array, function (element, i) {
        acc = f(acc, element, i);
    });
    return acc;
}
