function getMedia(){
    var a = parseInt(document.getElementById("first").value);
    var b = parseInt(document.getElementById("second").value);
    var c = parseInt(document.getElementById("third").value);

    var media = (a + b + c) / 3;

    document.getElementById("result").innerHTML = "Resultado: " + media;
}