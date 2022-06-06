let purchaseVoucher = JSON.parse(localStorage.getItem('purchase'));
let userArr = JSON.parse(localStorage.getItem('user'));
let rem_bal = document.getElementById('wallet_balance');
rem_bal.innerText = userArr[0].wallet;

let purchased_vouchers = document.getElementById('purchased_vouchers')

purchaseVoucher.forEach(element => {
    let card = document.createElement('div')

    let img = document.createElement('img')
    img.src = element.image

    let name = document.createElement('p')
    name.innerText = element.name

    let price = document.createElement('p')
    price.innerText = element.price


    card.append(img, name, price);

    purchased_vouchers.append(card)
});

