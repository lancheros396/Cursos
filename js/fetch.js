//COSUMIR UNA API

// METODOS FETCH (ajax) y peticiones a servicios / apis rest
var div_user = document.querySelector('#usuarios');
var usuarios =[];
// se usa el metodo FETCH donde se pasa la URL
fetch('https://reqres.in/api/users') //esto es una promesa
     .then (function(data ){ //FUNCION CALLBACK
        return data.json()
     }) //-> lo primero es captura los dados en data para pasarlos a formato json
     .then(users=>{//luego de tener la data en data se almacena en la variable User (con funcion flecha)
      usuarios=users.data;
      console.log(usuarios);   //Se muestra la data

      usuarios.map((user, i)=>{
        let nombre = document.createElement('h2');

        nombre.innerHtml = i +'.'+ user.first_name+" "+ user.last_name;
        div_user.appendChild(nombre);
      });
     });                                         
