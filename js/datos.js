var datos= [{ "Name" : "Alfreds Futterkiste", "City" : "Berlin", "Country" : "Germany" }, { "Name" : "Berglunds snabbköp", "City" : "Luleå", "Country" : "Sweden" }, { "Name" : "Centro comercial Moctezuma", "City" : "México D.F.", "Country" : "Mexico" }, { "Name" : "Ernst Handel", "City" : "Graz", "Country" : "Austria" }, { "Name" : "FISSA Fabrica Inter. Salchichas S.A.", "City" : "Madrid", "Country" : "Spain" }, { "Name" : "Galería del gastrónomo", "City" : "Barcelona", "Country" : "Spain" }, { "Name" : "Island Trading", "City" : "Cowes", "Country" : "UK" }, { "Name" : "Königlich Essen", "City" : "Brandenburg", "Country" : "Germany" }, { "Name" : "Laughing Bacchus Wine Cellars", "City" : "Vancouver", "Country" : "Canada" }, { "Name" : "Magazzini Alimentari Riuniti", "City" : "Bergamo", "Country" : "Italy" }, { "Name" : "North/South", "City" : "London", "Country" : "UK" }, { "Name" : "Paris spécialités", "City" : "Paris", "Country" : "France" }, { "Name" : "Rattlesnake Canyon Grocery", "City" : "Albuquerque", "Country" : "USA" }, { "Name" : "Simons bistro", "City" : "København", "Country" : "Denmark" }, { "Name" : "The Big Cheese", "City" : "Portland", "Country" : "USA" }, { "Name" : "Vaffeljernet", "City" : "Århus", "Country" : "Denmark" }, { "Name" : "Wolski Zajazd", "City" : "Warszawa", "Country" : "Poland" }];

//alert(datos[5].Country);
var copia=datos;
copia.sort(function(a, b){return a.Country.toLowerCase().localeCompare(b.Country.toLowerCase());});
//alert(copia[5].Country);
var table = document.getElementById("T1");


for(let i=0;i<datos.length;i++){
    var hilera = document.createElement("tr");
    
    var celda = document.createElement("td");
    var textoCelda = document.createTextNode(copia[i].Name);
    
    var celda2 = document.createElement("td");
    var textoCelda2 = document.createTextNode(copia[i].City);
    
    var celda3 = document.createElement("td");
    var textoCelda3 = document.createTextNode(copia[i].Country);
    
    celda.appendChild(textoCelda);
    celda2.appendChild(textoCelda2);
    celda3.appendChild(textoCelda3);
    hilera.appendChild(celda);
    hilera.appendChild(celda2);
    hilera.appendChild(celda3);
    
    
    table.appendChild(hilera);

}

