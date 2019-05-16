function gerar(){
    var texto1 = document.getElementById("texto1").value;
    var texto2 = document.getElementById("texto2").value;
    var div1 = document.getElementById("divTexto1");
    var div2 = document.getElementById("divTexto2");

    var listaDePalavras1 = texto1.split(" ");
    listaDePalavras1.forEach(function(palavra) {
        let tag = "<texto1 id='a"+ listaDePalavras1.indexOf(palavra) +"'>" + palavra +""+"</texto1>"
        div1.innerHTML += tag;
    });

    var listaDePalavras2 = texto2.split(" ");
    listaDePalavras2.forEach(function(palavra) {
        let tag = "<texto2 id='b"+ listaDePalavras2.indexOf(palavra) +"'>" + palavra +" "+"</texto2>"
        div2.innerHTML += tag;
    });
}

function limpar(){
    document.getElementById("texto1").value = "";
    document.getElementById("texto2").value = "";

    document.getElementById("divTexto1").innerHTML = ""
    document.getElementById("divTexto2").innerHTML = ""
}