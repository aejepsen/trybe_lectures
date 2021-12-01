
tabuada = [];
index = 0;
for ( contador = 1; contador < 10; contador ++) {
    console.log("Tabuada do ", contador);
    for (num = 1; num < 10; num ++) {
         index = contador -1;
         tabuada[index] = contador*num;
         
         console.log(tabuada[index]);}
}