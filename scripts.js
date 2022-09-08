function Converter(){
    var ValorInicial = parseFloat(document.getElementById("ValorEntrada").value);
    console.log(ValorInicial)
    
    var UnidadeInicial = document.getElementById("UnidadeEntrada").value;
    console.log(UnidadeInicial);

    var celcius = 0;
    var fahrenheit = 0;
    var kelvin = 0;
    var erro = "";
    
    if (UnidadeInicial == "Celcius"){
        celcius = ValorInicial;
        fahrenheit = (ValorInicial * 9 / 5) + 32;
        kelvin = ValorInicial + 273;
    } else if (UnidadeInicial == "Fahrenheit"){
        celcius = (ValorInicial - 32) * 5 / 9;
        fahrenheit = ValorInicial
        kelvin = ((ValorInicial - 32) * 5 / 9) + 273;
    } else if (UnidadeInicial == "Kelvin"){
        celcius = ValorInicial - 273;
        fahrenheit = ((ValorInicial - 273) * 9 / 5) + 32;
        kelvin = ValorInicial;
    }else{
        celcius = "-";
        fahrenheit = "-";
        kelvin = "-";
        erro = "Erro! Selecione uma unidade"
    }

    var elementoCelcius = document.getElementById("resultCelcius");
    var elementoFahrenheir = document.getElementById("resultFahrenheit");
    var elementoKelvin = document.getElementById("resultKelvin");
    var elementoErro = document.getElementById("erro");

    elementoCelcius.innerHTML = celcius.toFixed(3);
    elementoFahrenheir.innerHTML = fahrenheit.toFixed(3);
    elementoKelvin.innerHTML = kelvin.toFixed(3);
    elementoErro.innerHTML = erro;

}

