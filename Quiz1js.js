/**Parte del slideshow */

var i = 0;
var images = [];
var time = 2000;

images[0]= "https://www.incimages.com/uploaded_files/image/1920x1080/getty_769729163_200013341653767170567_404088.jpg";
images[1]= "data:image/jpeg;base64,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";
images[2]= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuHRRKnUk8ev3ZFg87GhPx_OnyQVA7W9q3Tg&usqp=CAU";

function CambiarFotos(){
    document.slide.src=images[i];
    if (i<images.length-1){
        i++
    }
    else{
        i=0;
    }
    setTimeout("CambiarFotos()",time)
}

window.onload=CambiarFotos;

/**parte de la valiacion del form */

const name_last = document.getElementById("name_last")
const email = document.getElementById("email")
const messaje = document.getElementById("messaje")
const form = document.getElementById("form")

const EmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

form.addEventListener("submit", e=>{
    e.preventDefault()
    if(!EmailRegex.test(email.value)){
        alert("el correo introducido no es valido")
    }else{
        alert("la solicitud se envió con éxito")
    }
})

/**JSON de las Skills */

var JoaoSkills={
    JavaScript1: 'JavaScript: 20/100',
    Html1: 'Html: 100/100',
    Css1: 'Css: 70/100',
}

const PostContainer = document.getElementById('skills_box')

/**Creando contenido html desde css */

/**campo text */

let cdiv = document.createElement('div');                  
cdiv.classList.add('cdiv');
/**let lista = document.createElement('ul');*/
let JavaScript = document.createElement('h4'); 
let Html = document.createElement('h4');
let Css = document.createElement('h4');

let JavaScript_text = document.createTextNode(`${JoaoSkills.JavaScript1}`);
let Html_text = document.createTextNode(`${JoaoSkills.Html1}`);
let Css_text = document.createTextNode(`${JoaoSkills.Css1}`);

JavaScript.appendChild(JavaScript_text);
Html.appendChild(Html_text);
Css.appendChild(Css_text);

/**lista.appendChild(JavaScript);
lista.appendChild(Html);
lista.appendChild(Css);
cdiv.appendChild(lista);*/

cdiv.appendChild(JavaScript);
cdiv.appendChild(Html);
cdiv.appendChild(Css);

document.getElementById('skill-text').appendChild(cdiv);



