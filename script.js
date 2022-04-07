const container = document.querySelector(".container")
//const element = document.querySelector('#back')
const  main = document.createElement("div")
//import { back } from './bkspc.js'

container.appendChild(main)
main.style.backgroundColor = 'lightGrey'
main.style.height = '700px'
main.style.width = '600px'
main.className = 'main'

const sentences = ["We are smart!", "We are Learning!", "We are smarter!"]


fetch("./class.json")
.then(response => {
   return response.json().then(data => {
       console.log(data)
       for (i in data){
           const card = document.createElement('div')
           card.innerHTML = `${data[i].Name}` + '<br>' + `${data[i].Role}` + '<br>'
           card.style.border = 'solid black 5px'
           card.style.padding = '3px'
           main.appendChild(card)
           card.style.margin = '3px'
        }
   });
})
//back(sentences, 'back')

//document.write( ' <div class=\"profile-card\">\n' );
//document.write( '    <div class=\"card-header\">\n' );
//document.write( '      <div class=\"pic\">\n' );
//document.write( `        <img src=\"${data.link.pic}\" alt=\"\">\n` );
//document.write( '      </div>\n' );
//document.write( `      <div class=\"name\">${data.Name}</div>\n` );
//document.write( `      <div class=\"desc\">${data.Role}</div>\n` );
//document.write( '      <div class=\"sm\">\n' );
//document.write( `        <a href=\"${data.link.facebook}\" class=\"fab fa-facebook-f\"></a>\n` );
//document.write( `        <a href=\"${data.link.twitter}\" class=\"fab fa-twitter\"></a>\n` );
//document.write( `        <a href=\"${data.link.github}\" class=\"fab fa-github\"></a>\n` );
//document.write( `        <a href=\"${data.link.youtube}\" class=\"fab fa-youtube\"></a>\n` );
//document.write( '      </div>\n' );
//document.write( '      <a href=\"#\" class=\"contact-btn\">Contact Me</a>\n' );
//document.write( '    </div>\n' );
//document.write( '  </div>' );
