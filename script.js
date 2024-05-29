'use strict';

class Person {
    constructor(name, lastName, phone, email, address){
        this.name = name;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.address = address;
    }

    getFullName() {
        return `${this.name} ${this.lastName}`;
    }
}

class Business extends Person {
    constructor(name, lastName, phone, email, address, companyName){
        super(name, lastName, phone, email, address);
        this.companyName = companyName;
    }

    getBusinessInfo(){
        return `${this.getFullName()} work in company ${this.companyName}`
    }
}

document.getElementById('clientFrom').addEventListener('submit', function(event){
    event.preventDefault();
    const customer = createCustomerFromForm();
    displayCustomerInfo(customer);
});

function createCustomerFromForm(){

    let name = document.getElementById('name').value;
    let lastName = document.getElementById('lastName').value;
    let phone = document.getElementById('phone').value;
    let email = document.getElementById('email').value;
    let address = document.getElementById('address').value;

    let companySelect = document.getElementById('company');
    let companyName = companySelect.value;

    return new Business(name, lastName, phone, email, address, companyName)
}
function displayCustomerInfo(customer){
    alert(customer.getBusinessInfo());
}