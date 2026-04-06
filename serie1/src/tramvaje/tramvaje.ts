
import * as fs from 'fs';
import * as process from 'process';
//nejvetsi doba kdy nic nejede !!!
// Precteme obsah souboru, jehoz jmeno se v launch.json predava jako parametr:
// argv[0] je "node", interpret javascriptu
// argv[1] je nazev scriptu - tento program
// argv[2] je prvni SKUTECNY parametr programu, jak je zapsany v "args" v launch.json
let obsah : string = fs.readFileSync(process.argv[2]).toString();  // precte se CELY soubor

let radky : string[] = obsah.split('\n');

// podle zadani je na 1. radku pocet linek
let pocetLinek = Number(radky[0].trim());
// ------ POD TOTO MISTO PISTE PROGRAM -----
//let kos : string|undefined[] = []
//kos[0] = radky.shift
let odjezdyCasy : number[] =[] ;

for(let index : number = 0; index < pocetLinek; index++) {
let pozice : number = index * 2 + 1 ;





// nasleduji DVOJICE radku -- potrebujete cyklus, ktery bude postupne "vyjmenovavat" pozice (radku) 1, 3, 5, ....
// na radku s pozici 1 je pocet tramvaji dane linky, ale jeho precteni, budete-li potrebovat, je podobne jako u "pocetLinek" -- jen ze "spravneho" radku

// ukazka CASTI zpracovani radku s odjezdy, protoze zpracovanim textu jsme se moc nezabyvali

// prvni z radku: pocet projizdejicich tramvaji dane linky
let pocetPrujezdu = radky[pozice];
let jizdniRad = radky[pozice + 1];
// ted budu mit pole odjezdu, ale zatim to budou TEXTY
let odjezdy : string[] = jizdniRad.split(/ +/); // to uvnitr zavorky je "regularni vyraz", neco jako sablona, ktere musi odpovidat oddelovac. Zde "jedna nebo vice mezer"
// kazdy jednotlivy odjezd (prvek pole) musime prevest na cislo (viz jak se prevadi "pocetLinek")

// tohle je jen pro zpestreni, syntaxi "closures" neznate. Konverzi z textu na cisla prepiste jako cyklus for
odjezdyCasy.push(...odjezdy.map(str => Number(str)));
}

odjezdyCasy.sort() ;

let nejvetsimezera : number = 0 ;

for(let index : number = 0; index < odjezdyCasy.length; index++) {
    let vypocet : number = odjezdyCasy[index+1] - odjezdyCasy[index] ;
    if(vypocet > nejvetsimezera){
        nejvetsimezera = vypocet ;
    }
}

let predpul : number = odjezdyCasy[odjezdyCasy.length - 1]
let popul : number = odjezdyCasy[0] + 24 * 3600
let vypocet2 : number = popul - predpul
if(vypocet2 > nejvetsimezera) {
    nejvetsimezera = vypocet2
}


console.log("největší mezera kdy nejedou tramvaje je " + nejvetsimezera + "sekund dlouhá") ;

// pro kontrolu si vypiseme casy
console.log(odjezdyCasy);

