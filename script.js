const container = document.querySelector(".container")
const  main = document.createElement("div")

const sentences = ["We are smart!", "We are Learning!", "We are smarter!"]

fetch("./class.json")
.then(response => {
   return response.json().then(data => {
       console.log(data)
       for (i in data){
           const card = document.createElement('div')
           card.classList = 'card'
           container.appendChild(card)

           const profileCard = document.createElement('div')
           profileCard.classList = "profile-card"
           card.appendChild(profileCard)
  
           const cardHeader = document.createElement('div')
           cardHeader.classList="card-header"
           profileCard.appendChild(cardHeader)
  
           const picDiv = document.createElement('div')
           picDiv.classList="picDiv"
           cardHeader.appendChild(picDiv)
  
           const picImg = document.createElement('img')
           picImg.classList = "pic"
           picImg.src = `${data[i].pic}`
           picImg.alt = "pic"
           cardHeader.appendChild(picImg)
  
           const nameDiv = document.createElement('div')
           nameDiv.classList="name"
           nameDiv.textContent = `${data[i].Name}`
           profileCard.appendChild(nameDiv)
  
           const descDiv = document.createElement('div')
           descDiv.classList="desc"
           descDiv.textContent = `${data[i].Role}`
           profileCard.appendChild(descDiv)
  
           const smDiv = document.createElement('div')
           smDiv.classList = "sm"
           profileCard.appendChild(smDiv)
  
           const linkFace = document.createElement('a')
           linkFace.href = `${data[i].link.facebook}`
           linkFace.classList="fab fa-facebook-f"
           smDiv.appendChild(linkFace)
  
           const linkTwitter = document.createElement('a')
           linkTwitter.href = `${data[i].link.twitter}`
           linkTwitter.classList="fab fa-twitter"
           smDiv.appendChild(linkTwitter)
  
           const linkGithub = document.createElement('a')
           linkGithub.href = `${data[i].link.github}`
           linkGithub.classList="fab fa-github"
           smDiv.appendChild(linkGithub)
  
           const linkYoutube = document.createElement('a')
           linkYoutube.href = `${data[i].link.youtube}`
           linkYoutube.classList="fab fa-linkedin"
           smDiv.appendChild(linkYoutube)
 
         }
   });
})
const run = (() =>{
   const testString = ["Brilliant People!", "Learning more everday!", "the Future!", "PerScholas!"]

   const testElement = 'back'
   
   function back(strings, element){
   const textDisplay = document.getElementById(element)
   const phrases = strings
   
   let i = 0
   let j = 0
   let currentPhrase = []
   let isDeleting = false
   let isEnd = false
   
   function backspace() {
       isEnd = false
       textDisplay.innerHTML = currentPhrase.join("")
       
       if (i < phrases.length) {
       
           
           if (!isDeleting && j <= phrases[i].length){
               currentPhrase.push(phrases[i][j])
               j++
               textDisplay.innerHTML = currentPhrase.join("")
           }
   
           if(isDeleting && j <= phrases[i].length){
               currentPhrase.pop(phrases[i][j])
                   j--
                   textDisplay.innerHTML = currentPhrase.join("")
           }
   
           if (j == phrases[i].length){
               isEnd = true
               isDeleting = true
           }
           
           if(isDeleting && j === 0) {
               currentPhrase = []
               isDeleting = false
               i++
               if(i=== phrases.length){
                   i= 0
               }
           }
           
       }   
       const spedUp = Math.random() * (80 - 50) + 50
       const normalSpeed = Math.random() * (300 - 200) + 200
       const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed
       setTimeout(backspace, time)
   }
   
   backspace()
   }
   back(testString, testElement)
   })()