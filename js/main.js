function Estudiante(nombre,parcial,final,mejoramiento) {
    this.nombre = nombre;
    this.parcial = parcial;
    this.final = final;
    this.mejoramiento = mejoramiento;
    
}
var estudiantes=[];


function ingresar(){
    var table = document.getElementById("T1");
    var hilera = document.createElement("tr");
    var datos = document.getElementsByTagName("input");
    
    for(let i=0;i<datos.length-3;i++){
        var celda = document.createElement("td");
        var textoCelda = document.createTextNode(datos[i].value);
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);
    }
    var persona = new Estudiante(datos[0].value,datos[1].value,datos[2].value,datos[3].value);
    estudiantes.push(persona);
    /*
    
    var TRs = document.getElementsByTagName("tr");
    var pos=2;
   
    if( TRs[pos] ) {
        table.insertBefore(hilera, TRs[pos]);
    }
    else {
        table.appendChild(hilera);
    } */
    //table.insertBefore(hilera, TRs[pos]); 
    table.appendChild(hilera);
    
}

function promedioParcial(){
    var table = document.getElementById("T1");
    var total=0;
    var cont=0;
    var miCelda = table.getElementsByTagName("td");
    for(let i=1;i<miCelda.length;i=i+4){
       total+=parseFloat(miCelda[i].innerHTML);
        cont++;
    }
    document.getElementById("valorParcial").value=total/cont;
   
}

function promedioFinal(){
    var table = document.getElementById("T1");
    var total=0;
    var cont=0;
    var miCelda = table.getElementsByTagName("td");
    for(let i=2;i<miCelda.length;i=i+4){
       total+=parseFloat(miCelda[i].innerHTML);
        cont++;
    }
    document.getElementById("valorFinal").value=total/cont;
}
function promedioMejoramiento(){
    var table = document.getElementById("T1");
    var total=0;
    var cont=0;
    var miCelda = table.getElementsByTagName("td");
    for(let i=3;i<miCelda.length;i=i+4){
      total+=parseFloat(miCelda[i].innerHTML);
         cont++;
    }
    document.getElementById("valorMejoramiento").value=total/cont;
   
}
function reporte(){
    var table = document.getElementById("T2");
    var filas = table.getElementsByTagName("tr");
    //alert(filas.length);
    if(filas.length>1){
        for(let i=1;i<filas.length;i++){
            table.deleteRow(i);
        }   
    }
    
    
    //alert(estudiantes[0].nombre);
    var promedio=0,total=0;
    for(let i=0;i<estudiantes.length;i++){
        var hilera = document.createElement("tr");
        var celda = document.createElement("td");
        var celda2 = document.createElement("td");
        var textoCelda = document.createTextNode(estudiantes[i].nombre);
        total=(parseFloat(estudiantes[i].parcial)+parseFloat(estudiantes[i].final));
        //alert(total);
        if((total/2)>=60){
             var textoCelda2 = document.createTextNode("APROBADO");
            
        }else{
            if(parseFloat(estudiantes[i].parcial)<=parseFloat(estudiantes[i].final)){
                total=(parseFloat(estudiantes[i].mejoramiento)+parseFloat(estudiantes[i].final));
                    
            }else{
                total=(parseFloat(estudiantes[i].parcial)+parseFloat(estudiantes[i].mejoramiento));
                
            }
            if((total/2)>=60){
                     var textoCelda2 = document.createTextNode("APROBADO");
            }else{
                var textoCelda2 = document.createTextNode("REPROBADO");
            } 
            
        }
       
        celda.appendChild(textoCelda);
        celda2.appendChild(textoCelda2);
        hilera.appendChild(celda);
        hilera.appendChild(celda2);
        table.appendChild(hilera);
    }
   
    
    
}



