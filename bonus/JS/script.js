/* *---------------------------------------------------------------
INITIALIZATIONS AND DECLARATIONS */

// * INITIALIZATIONS

// ? COSTANTS INITIALIZATION
const specialGuest = 'Piscopo Aniello';



// * DECLARATIONS

// ? VARIABLES DECLARATIONS
let nameUser;
let surnameUser;
let fullNameUser;





/* *---------------------------------------------------------------
MAIN CODE */

// * LINEAR PROGRAMM

// ? INITIAL ALERTS
alert('BONUSSS');
alert('Benvenuto nella parte BONUS!\nQuesto programma permette di fornire il prezzo del biglietto del treno che dovrai pagare in base a quanti km percorrerai.');
alert('Il prezzo viene calcolato secondo queste regole:\n1)Ogni km vale 0.21$;\n2)Viene applicato uno sconto del 20% per i minorenni;\n3)Viene applicato uno sconto del 40% per gli over 65;\n4)Se sei presente nella lista degli invitati per l\'evento speciale che è stato preparato allora il biglietto è gratuito.');
alert('Detto questo');


// ? TAKING AND CONTROL OF THE FULL  NAME OF THE USER
surnameUser = prompt('Qual è il tuo cognome?');

if(surnameUser === null){
    alert('Il programma è stato annullato');
}
else{
    if(surnameUser === ''){
        alert('Non hai digitato alcun valore');
    }
    else if(isFinite(surnameUser)){
        alert('ATTENZIONE\nNon puoi digitare valori numerici');
    }
    
    else{
        nameUser = prompt('Qual è il tuo nome?');
        
        if(nameUser === null){
            alert('Il programma è stato annullato');
        }
        else{
            if(nameUser === ''){
                alert('Non hai digitato alcun valore');
            }
            else if(isFinite(surnameUser)){
                alert('ATTENZIONE\nNon puoi digitare valori numerici');
            }

            else{
                fullNameUser = surnameUser + ' ' + nameUser;
                
                if(fullNameUser === specialGuest) {
                    alert('Congratulazioni Piscopo Aniello\nPuoi andare avanti senza pagare il biglietto');
                }

                else{    
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
                            alert('ATTENZIONE!\nPuoi digitare solo valori numerici');
                        }
                        else if(Number(kmToTravel)<0){
                            alert('ATTENZIONE\nLa distanza tra 2 punti non può essere un valore negativo');
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
                                    alert('ATTENZIONE!\nPuoi digitare solo valori numerici');
                                }
                                else if(Number(userAge)<0){
                                    alert('ATTENZIONE\nAll\'età non può essere associato un valore negativo');
                                }

                                else if((Number(userAge) - Number(Math.floor(userAge))) !==0){
                                    alert('ATTENZIONE\nL\'età non può essere un numero decimale');
                                }

                                else{
                                    // ? CONVERSION OF THE VALUE FROM A STRING TO AN ENTIRE NUMBER
                                    userAge = parseInt(userAge);


                                    // ? APPLICATION OF THE DISCOUNT
                                    if(userAge < 18){
                                        discount = ticketPriceWithoutDiscount/100 * 20;
                                        ticketWithDiscount = ticketPriceWithoutDiscount - discount;
                                    }
                                    else if(userAge > 65){
                                        discount = ticketPriceWithoutDiscount/100 * 40;
                                        ticketWithDiscount = ticketPriceWithoutDiscount - discount;
                                    }
                                    else{
                                        ticketWithDiscount = ticketPriceWithoutDiscount;
                                    }


                                    // ? FINAL PRICE ALERT
                                    alert(`Il prezzo del biglietto è di ${ticketWithDiscount.toFixed(2)}$`);
                                }
                            }
                        }
                    }
                }
            }
        }
    } 
}