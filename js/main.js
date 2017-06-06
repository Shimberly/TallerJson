var variable = 'A';
alert(variable);
    function color(color){
       var nodos=document.getElementsByTagName('p');
            for(let i=0;i<nodos.length-1;i++){
                 nodos[i].style.backgroundColor=color;

            }
        nodos[1].style.color='black';
        nodos[nodos.length-1].className='resaltar';
        
    }

    function resaltar(){
        var nodoLink=document.getElementsByTagName('a')[1];
        if(nodoLink.innerHTML==='RESALTAR TODO'){
            color('yellow');
            
            nodoLink.innerHTML='LIMPIAR';
        }else{
            color('white');
             nodoLink.innerHTML='RESALTAR TODO';
        }
    }


    function resaltarPorPalabra(){
        var nodoLink=document.getElementById('RxP');
        
        var valor=document.getElementById('buscar').value;

        var texto=document.getElementsByTagName('p');
        if(nodoLink.innerHTML==='RESALTAR PALABRA'){
            for(let i=0;i<texto.length;i++){
                texto[i].innerHTML=resaltarPalabra(texto[i].innerHTML,'yellow');
            }
            nodoLink.innerHTML='LIMPIAR PALABRA';
        }else{
            for(let i=0;i<texto.length;i++){
                texto[i].innerHTML=resaltarPalabra(texto[i].innerHTML,'white');
            }  
            nodoLink.innerHTML='RESALTAR PALABRA';
        }
        function resaltarPalabra(texto,color){
       
            var nuevoValor = "<span style=\u0022background-Color:"+color+";\u0022>"+valor+"</span>";
            return texto.replace(valor, nuevoValor);

        } 
    }
     
function pintar(col)
  {
    document.bgColor=col;
  }

function cambiar(){
    var img = document.images[0];
    if(document.getElementById("mienlace").innerHTML==='OCULTAR'){
        document.getElementById('A').style.display = 'none';
        modificar('MOSTRAR');
        if(img!==undefined){
            img.style.display = 'none';
        }
        
    }else{
        document.getElementById('A').style.display = 'block';
        modificar('OCULTAR');
       
        
        if(img===undefined){
            var elem = document.createElement("img");
            elem.setAttribute("src", "img/EDCOM.jpg");
            var nuevo_parrafo = document.createElement('p').appendChild(elem);

            var segundo_p = document.getElementById('d').getElementsByTagName('p')[1];

            document.getElementById('d').insertBefore(nuevo_parrafo,segundo_p);
            
        }else{
             img.style.display = 'block';
        }
       
    }

}

function modificar(texto){
  document.getElementById("mienlace").innerHTML = texto;
  
}  
function printDOM(node,prefix){
    console.log(prefix + node.nodeName);
    for(let i=0;i<node.childNodes.length;i++){
        printDOM(node.childNodes[i],prefix + '');
    }
    
}

printDOM(document,'');

  /*var i1= document.getElementsByTagName('p');
    console.log(i1);
    for(let p of i1){
        p.classList.add('highlight');
    }*/
   /* var texto=document.getElementsByTagName('p');
    for(let i=0;i<texto.length;i++){
          resaltarPalabra('gatitos',texto[i].innerHTML);

    }
    //resaltarPalabra('miau');
    function resaltarPalabra(palabra,texto){
       
        //var texto = "lenguaje sql";
        var intIndex = texto.indexOf(palabra);
        console.log(intIndex);
        alert(intIndex);
    }
*/
/*var cadena = document.getElementsByTagName('p')[1];
var patron = "gatito";
    var nuevoValor    = "miau";
   cadena= cadena.replace(patron, nuevoValor);*/

/*var cadena = document.getElementsByTagName('p')[1].innerHTML,
    patron = "gatito",
    nuevoValor = "<span style=\u0022background-Color:yellow;\u0022>"+patron+"</span>";
    document.getElementsByTagName('p')[1].innerHTML = cadena.replace(patron, nuevoValor);*/
 
/*var cadena = document.getElementsByTagName('p')[1].innerHTML,
    patron = "gatito",
    nuevoValor = "<span style=\u0022background-Color:yellow;\u0022>"+patron+"</span>",
    nuevaCadena = cadena.replace(patron, nuevoValor);
    console.log(nuevaCadena);
    cadena=nuevaCadena;*/
   

   /* 
        var texto=document.getElementsByTagName('p');
        for(let i=0;i<texto.length;i++){
          texto[i].innerHTML=resaltarPalabra(texto[i].innerHTML);
            
        }
   
        function resaltarPalabra(texto){
       
            var patron = "MIAU",nuevoValor = "<span style=\u0022background-Color:yellow;\u0022>"+patron+"</span>";
            return texto.replace(patron, nuevoValor);

        } */