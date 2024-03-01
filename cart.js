let cartItems = [];

function addToCart(itemName, itemPrice) {

    const newItem = {
        name: itemName,
        price: itemPrice
    };

    cartItems.push(newItem);
    updateCart();
}

function updateCart() {
    const cartSection = document.getElementById('cartSection');
   
    const cartTable = document.getElementById('cartTable');
    const cartTotal = document.getElementById('cartTotal');

    cartTable.innerHTML = `<thead>
    <tr>
        <th>Item</th>
        <th>Price</th>
    </tr>
</thead>`;


    cartItems.forEach(item => {
        const row = cartTable.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);

        cell1.textContent = item.name;
        cell2.textContent = `$${item.price.toFixed(2)}`;
    });

    const total = cartItems.reduce((sum, item) => sum + item.price, 0);
    cartTotal.textContent = total.toFixed(2);
    if (cartItems.length > 0) {
        cartSection.style.display = 'block'; 
    } else {
        cartSection.style.display = 'none'; 
    }
}
 function checkout(){
    document.getElementById('message').innerHTML = 'Thank you for your purchases';

    
    setTimeout(() => {
        cartItems = [];
        updateCart();
        document.getElementById('message').innerHTML = '';
    }, 8000);

 }