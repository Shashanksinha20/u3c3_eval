let makeRequest = async () => {
    let res = await fetch('https://masai-vouchers-api.herokuapp.com/api/vouchers')
    let data = await res.json()
    // console.log(typeof data, data)
    append(data[0].vouchers);
}

makeRequest()

let append = (list) => {
    let container = document.getElementById('voucher_list');
    list.forEach(element => {
        let card = document.createElement('div')
        card.setAttribute("class", "voucher")

        let img =  document.createElement('img')
        img.src = element.image

        let name = document.createElement('p')
        name.innerText = element.name

        let price = document.createElement('p')
        price.innerText = element.price


        let btn = document.createElement('button')
        btn.innerText = "BUY"
        btn.setAttribute("class", "buy_voucher")
        btn.addEventListener('click', function(event){
            buyVoucherActivated(element.name, element.image, element.price);
        })

        card.append(img, name, price, btn)


        container.append(card);
    });
}

let userArr = JSON.parse(localStorage.getItem('user')) 

let walletBalance = document.getElementById('wallet_balance')
walletBalance.innerText = userArr[0].wallet


let boughtVoucher = JSON.parse(localStorage.getItem('purchase')) || []


let buyVoucherActivated = (name, image, price) => {
    let voucherObj = {
        name : name,
        image : image,
        price : price
    }
  
    let update = userArr[0].wallet - Number(price);
    if(update >= 0){
        let updatedUserObj = {
            name : userArr[0].name,
            email : userArr[0].email,
            address : userArr[0].address,
            wallet : update
        }
         
        userArr[0] = updatedUserObj
        localStorage.setItem('user', JSON.stringify(userArr))

        boughtVoucher.push(voucherObj);
        localStorage.setItem('purchase', JSON.stringify(boughtVoucher));
        alert("Hurray! purchase successful")
        window.location.reload()
        
    }else{
        alert("Sorry! insufficient balance")
    }

}