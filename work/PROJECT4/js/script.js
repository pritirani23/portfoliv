let  fetchquote  =  fetch("https://type.fit/api/quotes")

async  function quotes(){
    let response = await  fetchquote
   // console.log(response)
    let data     =  response.json()
  //  console.log(data)
   return data
}

let allquotes  = quotes()

let show  = document.querySelector("#show")
let authortext  = document.querySelector("#author")
let button = document.querySelector("#btn")


button.addEventListener("click", function(){

    let random = Math.floor(Math.random()  * 1500)
    console.log(random)
  //  console.log(random)

  allquotes.then(function(resolve){
      let quote  =  resolve[random].text
      let author  =  resolve[random].author
     // console.log(quote) 
     // console.log(author)
     show.innerHTML = quote
     authortext.innerHTML  = author
  })
})
