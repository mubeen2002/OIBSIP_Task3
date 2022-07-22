

function celTofar(valNum) {
    valNum=parseFloat(valNum);
    document.getElementById("outputfahrenheit").innerHTML=(valNum*1.8)+32;
}

function farToCel(valNum) {
    valNum=parseFloat(valNum);
    document.getElementById("outputCelsius").innerHTML=(valNum-32)/1.8;
}
