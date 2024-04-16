function InputField() {
    document.getElementById("sending").reset();
}

function checkFirstName() {
    var first = document.getElementById("firstName").value;
    var regex = /^[а-яА-Я\s]{2,20}$/;

    if (regex.test(first)) {
        document.getElementById("firstname_check").style.color = "green";
        document.getElementById("firstname_check").innerHTML = "✓";
        return true;
    } else {
        document.getElementById("firstname_check").style.color = "red";
        document.getElementById("firstname_check").innerHTML = "От 2 до 20 символов";
        return false;
    }
}

function checkSecondName() {
    var last = document.getElementById("secondName").value;
    var regex = /^[а-яА-Я\s]{2,30}$/;

    if (regex.test(last)) {
        document.getElementById("secondname_check").style.color = "green";
        document.getElementById("secondname_check").innerHTML = "✓";
        return true;
    } else {
        document.getElementById("secondname_check").style.color = "red";
        document.getElementById("secondname_check").innerHTML = "От 2 до 30 символов";
        return false;
    }
}

function checkLastName() {
    var last = document.getElementById("lastName").value;
    var regex = /^[а-яА-Я\s]{2,25}$/;

    if (regex.test(last)) {
        document.getElementById("lastname_check").style.color = "green";
        document.getElementById("lastname_check").innerHTML = "✓";
        return true;
    } else {
        document.getElementById("lastname_check").style.color = "red";
        document.getElementById("lastname_check").innerHTML = "От 2 до 25 символов";
        return false;
    }
}

function checkPhone() {
    var phone = document.getElementById("phone").value;
    var regex = /^\d{12}$/;

    if (regex.test(phone)) {
        document.getElementById("phone_check").style.color = "green";
        document.getElementById("phone_check").innerHTML = "✓";
        return true;
    } else {
        document.getElementById("phone_check").style.color = "red";
        document.getElementById("phone_check").innerHTML = "Номер в формате +7-XXX-ХХХ-ХХ-ХХ";
        return false;
    }
}

function checkAddress() {
    var dest = document.getElementById("address").value;
    var regex = /^[а-яА-Я\s.,\d ]{5,50}$/;

    if (regex.test(dest)) {
        document.getElementById("address_check").style.color = "green";
        document.getElementById("address_check").innerHTML = "✓";
        return true;
    } else {
        document.getElementById("address_check").style.color = "red";
        document.getElementById("address_check").innerHTML = "От 5 до 50 символов";
        return false;
    }
}


function Order() {
    let firstname = document.getElementById('firstName').value;
    let secondname = document.getElementById('secondName').value;
    let lastname = document.getElementById('lastName').value;
    var address = document.getElementById("address").value;
    let phone = document.getElementById('phone').value;


    if (firstname != '' && secondname != ''&& lastname != '' && phone != '' && quantity != '') {
        document.getElementById('orderSummary').innerHTML = 'Здравствуйте, ' + firstname + ' ' secondname + ' ' + lastname + ' !';
        document.getElementById("orderSummary").innerHTML += "<p>Ваш заказ успешно оформлен. Вы можете ознакомиться с подробностями вашего заказа: </p>";
        document.getElementById("orderSummary").innerHTML += "Пункт назначения: " + address + ".</br>";
        document.getElementById('orderSummary').innerHTML += '<p>Номер телефона: ' + phone + '.</p>';
        document.getElementById("orderSummary").innerHTML += "<p style='font-weight: bold;'> Спасибо за заказ!</p>";
    } else {
        document.getElementById('orderSummary').style.color = 'red';
        document.getElementById('orderSummary').innerHTML = 'Заполните все поля';
    }
    
    alert('Ваш заказ оформлен. Подробности заказа на странице')

    const text = document.getElementById("hidden");
    text.style.display = "block";
}