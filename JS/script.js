/* *---------------------------------------------------------------
INITIALIZATIONS AND DECLARATIONS */

// * INITIALIZATIONS

// ? COSTANTS INITIALIZATION
const ticketPriceMoltiplicatorUnit = 0.21;



// * DECLARATIONS

// ? VARIABLES DECLARATIONS
let discount;
let ticketPriceWithoutDiscount;
let ticketPriceWithDiscount;
let kmToTravel;
let userAge;





/* *---------------------------------------------------------------
MAIN CODE */

// * LINEAR PROGRAMM

// ? INITIAL ALERTS
alert('Benvenuto!\nQuesto programma permette di fornire il prezzo del biglietto del treno che dovrai pagare in base a quanti km percorrerai.');
alert('Il prezzo viene calcolato secondo queste regole:\n1)Ogni km vale 0.21$;\n2)Viene applicato uno sconto del 20% per i minorenni;\n3)Viene applicato uno sconto del 40% per gli over 65');
alert('Detto questo');


// ? TAKING AND CONTROL OF THE KM GIVEN BY THE USER WITH THE PROMPT
kmToTravel = prompt('Quanti km dovrai percorrere?');

if(kmToTravel === null){
    alert('Il programma è stato annullato');
}
else{
    if(kmToTravel === ''){
        alert('Non hai digitato nessun valore');
    }
    else if(!isFinite(kmToTravel)){
        alert('ATTENZIONE!\n Puoi digitare solo valori numerici');
    }
    else if(Number(kmToTravel)<0){
        alert('ATTENZIONE\n La distanza tra 2 punti non può essere un valore negativo');
    }

    else{
        // ? CONVERSION OF THE VALUE FROM A STRING TO A DECIMAL NUMBER AND CALCULATION OF THE PRICE OF THE TRAIN TICKET WITHOUT THE DISCOUNT
        kmtoTravel = parseFloat(kmToTravel);
        ticketPriceWithoutDiscount = kmToTravel * ticketPriceMoltiplicatorUnit;


        // ? TAKING AND CONTROL OF THE AGE GIVEN BY THE USER WITH THE PROMPT
        userAge = prompt('Quanti anni hai?');

        if(userAge === null){
            alert('Il programma è stato annullato');
        }
        else{
            if(userAge === ''){
                alert('Non hai digitato nessun valore');
            }
            else if(!isFinite(userAge)){
                alert('ATTENZIONE!\n Puoi digitare solo valori numerici');
            }
            else if(Number(userAge)<0){
                alert('ATTENZIONE\n All\'età non può essere associato un valore negativo');
            }

            else if((Number(userAge) - Number(Math.floor(userAge))) !==0){
                alert('ATTENZIONE\n L\'età non può essere un numero decimale');
            }

            else{
                // ? CONVERSION OF THE VALUE FROM A STRING TO AN ENTIRE NUMBER
                userAge = parseInt(userAge);


                // ? APPLICATION OF THE DISCOUNT
                if(userAge < 18){
                    discount = ticketPriceWithoutDiscount/100 * 20;
                    ticketPriceWithDiscount = ticketPriceWithoutDiscount - discount;
                }
                else if(userAge > 65){
                    discount = ticketPriceWithoutDiscount/100 * 40;
                    ticketPriceWithDiscount = ticketPriceWithoutDiscount - discount;
                }
                else{
                    ticketPriceWithDiscount = ticketPriceWithoutDiscount;
                }


                // ? FINAL PRICE ALERT
                alert(`Il prezzo del biglietto è di ${ticketPriceWithDiscount.toFixed(2)}$`);
            }
        }
    }
}