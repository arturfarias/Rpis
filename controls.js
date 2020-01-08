function criarDiv(texto,elemento,id){
    let div = document.getElementById(elemento);

    for (let[index,value] of texto.split(" ").entries()){
        let tag = `<texto1 id="${id}${index}" onclick="marcar('${id}${index}')"> ${value} </texto1>`
        div.innerHTML += tag;
    }
};

function gerar(){
    let texto1 = document.getElementById("texto1").value;
    let texto2 = document.getElementById("texto2").value;

    criarDiv(texto1,"divTexto1","a")
    criarDiv(texto2,"divTexto2","b")
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