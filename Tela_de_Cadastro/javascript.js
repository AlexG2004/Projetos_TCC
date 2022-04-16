var  Anum = 1;
var caountalunos = 0;
function CriarMaisAlunos()
{
    Anum = Anum +1;
  
    var obj = document.getElementById("_InferiorAluno")
    var divs = document.createElement("div")
    divs.setAttribute("id","spacealuno"+String(Anum))
    divs.setAttribute("class","_InferiorAO")
    obj.appendChild(divs)

    var objA = document.getElementById("spacealuno"+String(Anum));
    var NomeAluno = document.createElement("p");
    var newAluno = document.createElement("input");
    var newEmail = document.createElement("input");


    NomeAluno.setAttribute("class","NomeAO")
    NomeAluno.setAttribute("id","NomeAluno"+String(Anum))
    objA.appendChild(NomeAluno);

    newAluno.setAttribute("class","designerAO")
    newAluno.setAttribute("id","nome"+String(Anum))
    newAluno.setAttribute("type","text")
    newAluno.setAttribute("placeholder","Nome")
    objA.appendChild(newAluno);

    newEmail.setAttribute("class","designerEmail")
    newEmail.setAttribute("id","email"+String(Anum))
    newEmail.setAttribute("type","email")
    newEmail.setAttribute("placeholder","Email")
    objA.appendChild(newEmail);

    var conteudoNovo = document.createTextNode("Aluno"+String(Anum));
    var divAtual = document.getElementById("NomeAluno"+String(Anum));
    divAtual.appendChild(conteudoNovo);
    
    caountalunos=caountalunos+1;
    var strAluno = String(caountalunos)+"aluno"

    var n3 = document.createElement("button");
    n3.setAttribute('class','btnpAO')
    n3.setAttribute("id",strAluno);
    n3.setAttribute("onclick","ApagarAL()")
    n3.textContent = "x";
    objA.appendChild(n3);
}
function ApagarAL(){
    alert(Anum);
    var elementoAL = document.getElementById("spacealuno"+String(Anum));
    elementoAL.parentNode.removeChild(elementoAL);
    Anum =Anum-1;
}

var Onum = 1;

function CriarMaisOrientador()
{
    Onum = Onum +1;
    var NomeOrientador = document.createElement("p");
    var newOrientador = document.createElement("input");
    var newEmail = document.createElement("input");
    var obj = document.getElementById("_InferiorOrientador")

    NomeOrientador.setAttribute("class","NomeAO")
    NomeOrientador.setAttribute("id","NomeOrientador"+String(Onum))
    obj.appendChild(NomeOrientador);

    newOrientador.setAttribute("class","designerAO")
    newOrientador.setAttribute("id","nome"+String(Onum))
    newOrientador.setAttribute("type","text")
    newOrientador.setAttribute("placeholder","Nome")
    obj.appendChild(newOrientador);
    newEmail.setAttribute("class","designerEmail")
    newEmail.setAttribute("id","email"+String(Onum))
    newEmail.setAttribute("type","email")
    newEmail.setAttribute("placeholder","Email")
    obj.appendChild(newEmail);
    
    var conteudoNovo1 = document.createTextNode("Orientador"+String(Onum));
    var divAtual = document.getElementById("NomeOrientador"+String(Onum));
    divAtual.appendChild(conteudoNovo1);
}
var Lista_pavras_chaves = [];
var caountchaves = 0;
function Add(){
    var contador = true;
        document.getElementById("ftext").addEventListener("keyup", function(event){
    var textocontido = document.getElementById("ftext").value
        var tecla = event.keyCode;
        if(contador == true && tecla == 13 && textocontido != "" && textocontido != " "){
            var obj = document.getElementById("div1");
            var texto = document.getElementById("ftext").value;
            var nova = document.createElement("div");
            //var nova2 = document.createElement("div")
            var n3 = document.createElement("button");
            n3.textContent = "x";
            //nova2.textContent = "ㅤ"
            nova.textContent = texto;
            Lista_pavras_chaves.push(texto)
            nova.setAttribute('class','campos');
            obj.appendChild(nova);
            //obj.appendChild(nova2);
            caountchaves= caountchaves +1;
            document.getElementById("ftext").value = "";
            var strchaves = String(caountchaves)+"chave"
            nova.setAttribute('id',strchaves+"_")
            //nova2.setAttribute('id',strchaves+"__" )
            n3.setAttribute('class','btnP')
            n3.setAttribute('id',strchaves)
            n3.setAttribute('onclick','Apagar()');
            nova.appendChild(n3);
            
        }
        contador =false;
        })
    
    }

    function Apagar(){
        const el = event.target || event.srcElement;
        const id = el.id;
        var elemento = document.getElementById(id);
        id2 = id+"_";
        //id3 = id+"__"
        var elementopai = document.getElementById(id2);
        //var elementospace = document.getElementById(id3);
        //elementospace.parentNode.removeChild(elementospace);
        elemento.parentNode.removeChild(elemento);
        elementopai.parentNode.removeChild(elementopai);
    }