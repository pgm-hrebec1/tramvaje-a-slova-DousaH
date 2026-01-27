
import * as fs from 'fs';
import * as process from 'process';

// Precteme obsah souboru, jehoz jmeno se v launch.json predava jako parametr:
// argv[0] je "node", interpret javascriptu
// argv[1] je nazev scriptu - tento program
// argv[2] je prvni SKUTECNY parametr programu, jak je zapsany v "args" v launch.json
let obsah : string = fs.readFileSync(process.argv[2]).toString();  // precte se CELY soubor

// a ted je treba napsat program, ktery SPOCITA slova, ktera jsou v 'obsah'.
console.log(`rows: ${process.stdout.rows}, columns: ${process.stdout.columns}`);
