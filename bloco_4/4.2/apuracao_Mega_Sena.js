let result = [53,44,33,1,2,5];
result.sort(function(a, b) { return a - b; });
console.log(result);

let play = [1,2,5,33,44,53];
play.sort(function(a, b) { return a - b; });
console.log(play);
 
let acerto = [];
let contador = 0;
let index2 = 0;
let x;
for ( let index =0; index <= result.length -1; index ++) {
    
for ( let index2 =0; index2 <= play.length -1; index2 ++){
    if ( result[index2] == play[index]  ) {
        x = play[index]
        acerto.push(x);
        contador ++;
    }
}}
if (contador == result.length){
    console.log("Acertou as Seis Dezenas da Mega Sena", acerto);
}else { 
    console.log("Acertou", contador, "dezenas da Mega Sena", acerto)
}

