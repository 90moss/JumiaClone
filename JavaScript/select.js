var PhoneOne = {
    phone: "iPhone11.jpeg",
    Name: "iPhone 11",
    Price: 98499,
    OriginalPrice: 102459,
    ItemId: "I001"
}

PhoneTwo = {
    phone: "iPhone12.jpeg",
    Name: "iPhone 12",
    Price: 118499,
    OriginalPrice: 122459,
    ItemId: "I002"
}

PhoneThree = {
    phone: "iPhone13.jpeg",
    Name: "iPhone 13",
    Price: 128459,
    OriginalPrice: 132459,
    ItemId: "I003"
}

PhoneFour = {
    phone: "iPhone14.jpeg",
    Name: "iPhone 14",
    Price: 148459,
    OriginalPrice: 152459,
    ItemId: "I004"
}

var selectId = decodeURIComponent(window.location.search)

var selectedItem = selectId.substring(1)

if(selectedItem==PhoneOne.ItemId) {
    document.getElementById("iPhone11").src=PhoneOne.phone
    document.getElementById("Name1").innerText = PhoneOne.Name
    document.getElementById("Price1").innerText = PhoneOne.Price
    document.getElementById("Original1").innerText = PhoneOne.OriginalPrice
    var cost = PhoneOne.Price 
    qty(cost)
}

else if(selectedItem==PhoneTwo.ItemId) {
    document.getElementById("iPhone11").src=PhoneTwo.phone
    document.getElementById("Name1").innerText = PhoneTwo.Name
    document.getElementById("Price1").innerText = PhoneTwo.Price
    document.getElementById("Original1").innerText = PhoneTwo.OriginalPrice
    var cost = PhoneTwo.Price 
    qty(cost)
}

else if(selectedItem == PhoneThree.ItemId) {
    document.getElementById("iPhone11").src=PhoneThree.phone
    document.getElementById("Name1").innerText = PhoneThree.Name
    document.getElementById("Price1").innerText = PhoneThree.Price
    document.getElementById("Original1").innerText = PhoneThree.OriginalPrice
    var cost = PhoneThree.Price 
    qty(cost)
}

else if(selectedItem == PhoneFour.ItemId) {
    document.getElementById("iPhone11").src=PhoneFour
    document.getElementById("Name1").innerText = PhoneFour.Name
    document.getElementById("Price1").innerText = PhoneFour.Price
    document.getElementById("Original1").innerText = PhoneFour.OriginalPrice
    var cost = PhoneFour.Price 
    qty(cost)
}

function qty(cost) {
    document.getElementById("quantity").onkeyup = function() {
        let quantity = document.getElementById("quantity").value
        let amount = cost

        if (quantity>1){
            total = quantity * amount
            document.getElementById("total").innerText=total
            UserLocation(total)
          }
          else if (quantity==1) {
              total = amount
              document.getElementById("total").innerText=total
              UserLocation(total)
          }
    }  
}

// function calculate(transport) {
//     document.getElementById("transport").onkeydown = function() {
//         let transport = document.getElementById("transport").value;
//         let amount = transport
//     }

//     if (transport) {
//         total = transport + amount
//         document.getElementById("total").innerText = total
//     }
//     else if (transport=="all") {
//         total = amount
//         document.getElementById("total").innerText = total
//     }
// }

function UserLocation(total) {
    document.getElementById("location").onchange = function() {
        let delivery = document.getElementById("location").value
        let Ruaka = 500
        let Kiambu = 900
        let Thindigua = 700

        if (delivery == "Ruaka") {
            document.getElementById("total").innerText = Ruaka + total
        }
        else if (delivery == "Kiambu") {
            document.getElementById("total").innerText = Kiambu + total
        }
        else if (delivery == "Thindigua") {
            document.getElementById("total").innerText = Thindigua + total
        }
        else if (delivery == " ") {
            document.getElementById("total").innerText = total
}
}
}
    


