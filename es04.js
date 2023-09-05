//4) scrivere una funzione che data una stringa in ingresso 
//ritorna solo i caratteri che al piu' compaiono una volta

function str(str) {
    let arr = str.split('')
    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) > i){
            console.log(arr[i])
        }
    }
}

str('acbdd')