function submitForm() {
    const itemName = document.getElementById('itemName').value;
    const itemPrice = document.getElementById('itemPrice').value;
    const itemDescription = document.getElementById('itemDescription').value;

    alert(`Item Name: ${itemName}\nPrice: $${itemPrice}\nDescription: ${itemDescription}`);
}
