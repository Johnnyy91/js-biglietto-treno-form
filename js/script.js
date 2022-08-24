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

