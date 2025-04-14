window.onload = () => {
    const inputs = document.querySelectorAll("input");

    inputs.forEach(input => {
        input.addEventListener('change', calculate)
    })
}

function calculate () {
    // Get petrol price value and convert to number//
    const Petrol_Price = document.querySelector('#Petrol_Price').value;
    const liters = document.querySelector('#liters').value;

    if (!Petrol_Price || !liters) return;

    document.querySelector('#totalAmount').innerText = Petrol_Price * liters;  // Calculate total by multiplying price by liters//
}