function gerar(){
    var texto1 = document.getElementById("texto1").value;
    var texto2 = document.getElementById("texto2").value;
    var div1 = document.getElementById("divTexto1");
    var div2 = document.getElementById("divTexto2");

    var listaDePalavras1 = texto1.split(" ");

    for (let x =0; x< listaDePalavras1.length;x++){
        let tag = `<texto1 id="a${x}" onclick="marcar('a${x}')"> ${listaDePalavras1[x]} </texto1>`
        div1.innerHTML += tag;
    }

    var listaDePalavras2 = texto2.split(" ");

    for (let x =0; x< listaDePalavras2.length;x++){
        let tag = `<texto2 id="b${x}" onclick="marcar('b${x}')"> ${listaDePalavras2[x]} </texto2>`
        div2.innerHTML += tag;
    }
}

function limpar(){
    document.getElementById("texto1").value = "";
    document.getElementById("texto2").value = "";

    document.getElementById("divTexto1").innerHTML = ""
    document.getElementById("divTexto2").innerHTML = ""
}

function marcar(id){
    document.getElementById(id).style.fontWeight = "bold";
}