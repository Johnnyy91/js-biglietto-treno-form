/*
FIRST EXERCISE

console.log('JS OK')

const età = prompt('Età passeggero?');
const etàNumber = parseInt(età);


const km = prompt ('km percorsi?')
const kmNumber=parseInt(km);

let costo =0.21 * kmNumber;


if (etàNumber < 18) 
{
    costo = costo - (costo * 0.20)
    
} 
else if (etàNumber> 65)
 {
    costo = costo - (costo * 0.40)

}

console.log(costo);
document.getElementById('js').innerHTML= costo;

CLOSE FIRST EXERCISE */


//FUNCTION

const età = document.getElementById('età');
const km = document.getElementById('km');
const costo = document.getElementById('costo');
const passenger =document.getElementById('passenger')
const pinco =document.getElementById('name')
const ticket = document.getElementById('ticket');


ticket.addEventListener("click", function(){
    const price = km.value * 0.21
    costo.innerHTML = price
    console.log(costo.innerHTML)

    if (età.value < 18) 
    {
        costo.innerHTML = price - (price * 0.20)
    }
    else if (età.value > 65)
    {
        costo.innerHTML = price - ( price * 0.40)
    }

    passenger.innerHTML = pinco.value

});

//CLOSE FUNCTION
























