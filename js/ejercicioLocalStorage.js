var formulario=document.querySelector("#formPelicula");

formulario.addEventListener('submit', function(){
    var title=document.querySelector('#addFilm').value
    if (title.length>=1){
        localStorage.setItem(title, title); //como clave y como valor
    } else{
        alert("no es aceptado")
    } 
});

//RECORRER PARA MOSTRAR LAS PELICULAS QUE ESTAN EN LE LOCALSTORAGE
var ul=document.querySelector('#listaPeliculas');
for(var i in localStorage){
    //console.log(localStorage[i])
    if(typeof localStorage[i] =='string'){
        var lista=document.createElement("li");
        lista.append(localStorage[i]);
        ul.append(lista);
    }
    
}
//FORMULARIO PARA BORAR UNA PELICULA

var borraForm=document.querySelector('#formBorraPelicula');

borraForm.addEventListener('submit', function(){
    var borrar=document.querySelector('#borrarPelicula').value
    if(borrar.length >=1){
        localStorage.removeItem(borrar); 
    }
    
})
