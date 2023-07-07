var PhoneOne = {
    phone: "iPhone11.jpeg",
    Name: "iPhone 11",
    Price: 98499,
    OriginalPrice: 102459,
    ItemId: "I001"
}

document.getElementById("iPhone11").src= PhoneOne.phone
document.getElementById("Name1").innerText= PhoneOne.Name
document.getElementById("Price1").innerText= PhoneOne.Price
document.getElementById("Original1").innerText= PhoneOne.OriginalPrice

var PhoneTwo = {
    phone: "iPhone12.jpeg",
    Name: "iPhone 12",
    Price: 118499,
    OriginalPrice: 122459,
    ItemId: "I002"
}

document.getElementById("iPhone12").src= PhoneTwo.phone
document.getElementById("Name2").innerText= PhoneTwo.Name
document.getElementById("Price2").innerText= PhoneTwo.Price
document.getElementById("Original2").innerText= PhoneTwo.OriginalPrice

var PhoneThree = {
    phone: "iPhone13.jpeg",
    Name: "iPhone 13",
    Price: 128459,
    OriginalPrice: 132459,
    ItemId: "I003"
}

document.getElementById("iPhone13").src= PhoneThree.phone
document.getElementById("Name3").innerText= PhoneThree.Name
document.getElementById("Price3").innerText= PhoneThree.Price
document.getElementById("Original3").innerText= PhoneThree.OriginalPrice

var PhoneFour = {
    phone: "iPhone14.jpeg",
    Name: "iPhone 14",
    Price: 148459,
    OriginalPrice: 152459,
    ItemId: "I004"
}

document.getElementById("iPhone14").src= PhoneFour.phone
document.getElementById("Name4").innerText= PhoneFour.Name
document.getElementById("Price4").innerText= PhoneFour.Price
document.getElementById("Original4").innerText= PhoneFour.OriginalPrice

document.getElementById("phone1"). onclick = function() {
    window.location.href = "select.html" + "?" + PhoneOne.ItemId
}

document.getElementById("phone2"). onclick = function() {
    window.location.href = "select.html" + "?" + PhoneTwo.ItemId
}

document.getElementById("phone3"). onclick = function() {
    window.location.href = "select.html" + "?" + PhoneThree.ItemId
}

document.getElementById("phone4"). onclick = function() {
    window.location.href = "select.html" + "?" + PhoneFour.ItemId
}