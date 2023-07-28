function calc(valor1, valor2, op){
    let result;
    if(op > 0 && op <5){
        switch (op){
            case 1:
                result = valor1 + valor2
                break;
            case 2:
                result = valor1 - valor2
                break;
            case 3:
                result = valor1 * valor2
                break;
            case 4:
                result = valor1/valor2
                break;
        }
        return result;
    }else{
        return 0;
    }
}

let resposta = calc(2, 2, 3)
console.log(`O resultado foi ${resposta}`)
