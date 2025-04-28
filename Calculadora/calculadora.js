function writeNumber(button) {
    const receberValor = document.getElementById('receber');
    
    if(receberValor.value == '0' || receberValor.value == 'Syntax erro'){
        receberValor.value = button.textContent;
    }else{ 
        receberValor.value += button.textContent;
    }
}

function limparNumero() { 
    document.getElementById('receber').value = '0'
    document.getElementById('dec').disable = false;
}

function setOperator(receber) {
    const receberValor = document.getElementById('receber');
    if( receberValor.value == '0' || receberValor.value == 'Syntax erro'){
        receberValor.value = '0';
    }else { 
        receberValor.value += receber.textContent;
        document.getElementById('dec').disable = false;
    }
}

function calcular() { 
    try{
        const field1txt = document.getElementById('receber');
        if(field1txt.value != ''){
            const calcularResultado = eval(field1txt.value);
            field1txt.value = calcularResultado;
        }
    } catch (err){
        field1txt.value = 'Syntax error';
    }
}

function removerNumero() {
    const field1txt = document.getElementById('receber');

    if(field1txt.value.length == 0 || field1txt.value == '0' || field1txt.value == 'Syntax error'){ 
        field1txt = '0';
        document.getElementById('dec').disable = false;
    }else{
        field1txt.value = field1txt.value.substring(0, field1txt.value.length -1);
    }
}