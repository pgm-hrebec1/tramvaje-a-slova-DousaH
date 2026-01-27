
import * as fs from 'fs';
import * as process from 'process';

// Precteme obsah souboru, jehoz jmeno se v launch.json predava jako parametr:
// argv[0] je "node", interpret javascriptu
// argv[1] je nazev scriptu - tento program
// argv[2] je prvni SKUTECNY parametr programu, jak je zapsany v "args" v launch.json
let obsah : string = fs.readFileSync(process.argv[2]).toString();  // precte se CELY soubor

let radky : string[] = obsah.split('\n');

// podle zadani je na 1. radku pocet linek
let pocetLinek = Number(radky[0].trim());

// ------ POD TOTO MISTO PISTE PROGRAM -----

// nasleduji DVOJICE radku -- potrebujete cyklus, ktery bude postupne "vyjmenovavat" pozice (radku) 1, 3, 5, ....
// na radku s pozici 1 je pocet tramvaji dane linky, ale jeho precteni, budete-li potrebovat, je podobne jako u "pocetLinek" -- jen ze "spravneho" radku

// ukazka CASTI zpracovani radku s odjezdy, protoze zpracovanim textu jsme se moc nezabyvali

// prvni z radku: pocet projizdejicich tramvaji dane linky
let pocetPrujezdu = radky[1];
let jizdniRad = radky[2];
// ted budu mit pole odjezdu, ale zatim to budou TEXTY
let odjezdy : string[] = jizdniRad.split(/ +/); // to uvnitr zavorky je "regularni vyraz", neco jako sablona, ktere musi odpovidat oddelovac. Zde "jedna nebo vice mezer"
// kazdy jednotlivy odjezd (prvek pole) musime prevest na cislo (viz jak se prevadi "pocetLinek")

// tohle je jen pro zpestreni, syntaxi "closures" neznate. Konverzi z textu na cisla prepiste jako cyklus for
let odjezdyCasy : number[] = odjezdy.map(str => Number(str));

// pro kontrolu si vypiseme casy
console.log(odjezdyCasy);

