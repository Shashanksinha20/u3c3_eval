let form = document.getElementById('form');

let userArr =  []


form.addEventListener('submit', function(event){
    event.preventDefault();

    var obj = {
        name : form.name.value,
        email : form.email.value,
        address : form.address.value,
        wallet : Number(form.amount.value)
    }

    userArr.push(obj);
    localStorage.setItem('user', JSON.stringify(userArr))

    document.getElementById('name').value = ""
    document.getElementById('email').value = ""
    document.getElementById('address').value = ""
    document.getElementById('amount').value = ""
    window.location.reload()

})