const bestFilm = ["tt1302006", "tt7653254", "tt8579674", "tt7131622", "tt2584384", "tt6751668", "tt3281548", "tt7286456", "tt8637428", "tt3224458"]
const bestAnimatedFilm = ["tt1979376", "tt4520988", "tt2386490", "tt9426210", "tt9806192", "tt4729430"]
const bestForeignFilm = ["tt6751668", "tt8291806", "tt10199590", "tt7921248", "tt6062774", "tt10199640"]
const bestDirector = ["tt1302006", "tt7653254", "tt8579674", "tt7131622", "tt6751668"]
const bestActor = ["tt7653254", "tt7286456", "tt2066051", "tt8291806"]
const bestActrees = ["tt7653254", "tt3281548", "tt6394270", "tt7549996"]
const bestSupportingActrees = ["tt7653254", "tt3281548", "tt8637428", "tt6394270"]
const bestSupportingActor = ["tt1302006", "tt7131622", "tt3224458", "tt8404614"]
const containerMovies = document.getElementById("container");
const btnSiguiente = document.getElementById("siguiente");

function bestActorCard (data){
    if (data === "tt7653254"){
        containerMovies.innerHTML +=
    `<div class="wrap">
      <div class="tarjetaActors">
        <button id="star">✩</button>
        <img class="imgActor" src="actorsimg/adam-driver-img.jpg" value="Adam Driver" alt="poster"></img>
      </div>
    </div>`
    } if (data === "tt7286456"){
        containerMovies.innerHTML +=
    `<div class="wrap">
      <div class="tarjetaActors">
        <button id="star">✩</button>
        <img class="imgActor" src="actorsimg/joaquin-phoenix-img.jpg" value="Joaquin Phoenix" alt="poster"></img>
      </div>
    </div>`
    } if (data === "tt2066051"){
        containerMovies.innerHTML +=
    `<div class="wrap">
      <div class="tarjetaActors">
        <button id="star">✩</button>
        <img class="imgActor" src="actorsimg/taron-egerton-img.jpg" value="Taron Egerton" alt="poster"></img>
      </div>
    </div>`
    } if (data === "tt8291806"){
        containerMovies.innerHTML +=
    `<div class="wrap">
      <div class="tarjetaActors">
        <button id="star">✩</button>
        <img class="imgActor" src="actorsimg/antonio-banderas-img.jpg" value="Antonio Banderas" alt="poster"></img>
      </div>
    </div>`
    }     
}

function pageOne(){
  containerMovies.innerHTML = 
  `<div class="row">   
  <div class="col s12 m3 bg-bestfilm">
      <button id="bestFilm"><img class=" border-color-black responsive-img " src="img/picture.jpg"></button>
  </div>
  <div class="col s12 m3">
      <button id="bestForeignFilm"><img class="responsive-img "src="img/language.jpg"></button>
  </div>     
  <div class="col s12 m3">
      <button id="bestAnimatedFilm"><img class="responsive-img"src="img/animated.jpg"></button>
  </div>      
  <div class="col 12 m3">
      <button id="bestDirector"><img class="responsive-img"src="img/directing.jpg"></button>        
  </div>      
  <div class="col s12 m3">
      <button id="bestActor"><img class=" responsive-img"src="img/actor.jpg"></button>
  </div>
  <div class="col s12 m3">
      <button id="bestActrees"><img class=" responsive-img" src="img/actress.jpg"></button>        
  </div>
  <div class="col s12 m3">
      <button id="bestSupportingActrees"><img class="responsive-img" src="img/s-actress.jpg"></button> 
  </div>
  <div class="col s12 m3">
    <button id="bestSupportingActor"><img class="responsive-img" src="img/s-actor.jpg"></button>
  </div>`
  
  btnSiguiente.style.display = "none"
}

function bestMovie() {
    containerMovies.innerHTML=""
    btnSiguiente.style.display = "flex"
    btnSiguiente.addEventListener('click', pageOne);
    bestFilm.forEach(element => {
        fetch(`https://www.omdbapi.com/?i=${element}&apikey=46ccb234`)
        .then(res => res.json())
        .then(data => {
          containerMovies.innerHTML +=
      `<div id="category-1" class="row white">    
           </div>
        <div class="tarjetaMovies col s12 m6">
          <div class="card black">
           <div class="card-img">
           <img src=${data.Poster} alt="" class="responsive-img">
          <div class="card-content white-text">
          <span class="card-title"><strong>${data.Title}</strong></spam>
          </div>
          <div class="card-action">
            <a id="star" class="waves-effect waves-light btn black">⭐️</a>
            </div>
          </div>
          </div>
         </div>
        </div>
          `
        let btnStar= document.getElementById("star")
        btnStar.addEventListener('click', () => {              
          let selectTitle = document.getElementById("winnerBestMovie")
          selectTitle.innerHTML =`${data.Title}`
        })  
      })  
    })
}

function animatedMovie() {
    containerMovies.innerHTML=""
    btnSiguiente.style.display = "flex"
    btnSiguiente.addEventListener('click', pageOne)
    bestAnimatedFilm.forEach(element => {
        fetch(` https://www.omdbapi.com/?i=${element}&apikey=46ccb234`)
        .then(res => res.json())
        .then(data => { 
          containerMovies.innerHTML +=
          `<div id="category-1" class="row white">    
          </div>
       <div class="tarjetaMovies col s12 m6">
         <div class="card black">
          <div class="card-img">
          <img src=${data.Poster} alt="" class="responsive-img">
         <div class="card-content white-text">
         <span class="card-title"><strong>${data.Title}</strong></spam>
         </div>
         <div class="card-action">
           <a id="star" class="waves-effect waves-light btn black">⭐️</a>
           </div>
         </div>
         </div>
        </div>
       </div>
         `
        let btnStar= document.getElementById("star")
        btnStar.addEventListener('click', () => {              
          let selectTitle = document.getElementById("winnerAnimatedMovie")
          selectTitle.innerHTML =`${data.Title}`
        })            
      });
    });
}

function foreignFilm() {
    containerMovies.innerHTML=""
    btnSiguiente.style.display = "flex"
    btnSiguiente.addEventListener('click', pageOne)
    bestForeignFilm.forEach(element => {
        fetch(`https://www.omdbapi.com/?i=${element}&apikey=46ccb234`)
        .then(res => res.json())
        .then(data => { containerMovies.innerHTML +=
          `<div id="category-1" class="row white">    
           </div>
        <div class="tarjetaMovies col s12 m6">
          <div class="card black">
           <div class="card-img">
           <img src=${data.Poster} alt="" class="responsive-img">
          <div class="card-content white-text">
          <span class="card-title"><strong>${data.Title}</strong></spam>
          </div>
          <div class="card-action">
            <a id="star" class="waves-effect waves-light btn black">⭐️</a>
            </div>
          </div>
          </div>
         </div>
        </div>
          `
        let btnStar= document.getElementById("star")
        btnStar.addEventListener('click', () => {              
          let selectTitle = document.getElementById("winnerForeignMovie")
          selectTitle.innerHTML =`${data.Title}`
        }) 
      })
    })
}

function director() {
    containerMovies.innerHTML=""
    btnSiguiente.style.display = "flex"
    btnSiguiente.addEventListener('click', pageOne)
    bestDirector.forEach(element => {
    fetch(` https://www.omdbapi.com/?i=${element}&apikey=46ccb234`)
    .then(res => res.json())
    .then(data => { 
        const movies = data
        containerMovies.innerHTML +=
        `<div id="category-1" class="row white">    
        </div>
     <div class="tarjetaMovies col s12 m6">
       <div class="card black">
        <div class="card-img">
        <img src=${data.Poster} alt="" class="responsive-img">
       <div class="card-content white-text">
       <span class="card-title"><strong>${data.Director}</strong></spam>
       <p>${data.Genre}</p>
       </div>
       <div class="card-action">
         <a id="star" class="waves-effect waves-light btn black">⭐️</a>
         </div>
       </div>
       </div>
      </div>
     </div>
       `
          let btnStar= document.getElementById("star")
          btnStar.addEventListener('click', () => {              
            let selectTitle = document.getElementById("winnerDirector")
            selectTitle.innerHTML =`${data.Director}`
          })
        })
    })
}
function actor() {
  containerMovies.innerHTML=""
  btnSiguiente.style.display = "flex"
  btnSiguiente.addEventListener('click', pageOne)
  bestActor.forEach(element => {
    fetch(`https://www.omdbapi.com/?i=${element}&apikey=46ccb234`)
      .then(res => res.json())
      .then(data => { 
        containerMovies.innerHTML +=
        `<div id="category-1" class="row white">    
        </div>
     <div class="tarjetaMovies col s12 m6">
       <div class="card black">
        <div class="card-img">
        <img src=${data.Poster} alt="" class="responsive-img">
       <div class="card-content white-text">
       <span class="card-title"><strong>${data.Title}</strong></spam>
       </div>
       <div class="card-action">
         <a id="star" class="waves-effect waves-light btn black">⭐️</a>
         </div>
       </div>
       </div>
      </div>
     </div>
       `
        let btnStar= document.getElementById("star")
        btnStar.addEventListener('click', () => {              
          let selectTitle = document.getElementById("winnerBestActor")
          selectTitle.innerHTML =`Joaquin Phoenix`
        }) 
        let btnActor = document.getElementById("tarjetaMovies")
        btnActor.addEventListener('click', () => {
          let divActor = document.getElementById("container")
          let value = data.imdbID
          console.log(value)       
          divActor.innerHTML = ""
          divActor.innerHTML = bestActorCard(value)    
        })
    })              
  })
}

function actrees() {
    containerMovies.innerHTML=""
    btnSiguiente.style.display = "flex"
    btnSiguiente.addEventListener('click', pageOne)
    bestActrees.forEach(element => {
        fetch(` https://www.omdbapi.com/?i=${element}&apikey=46ccb234`)
        .then(res => res.json())
        .then(data => { 
          containerMovies.innerHTML +=
          `<div id="category-1" class="row white">    
          </div>
       <div class="tarjetaMovies col s12 m6">
         <div class="card black">
          <div class="card-img">
          <img src=${data.Poster} alt="" class="responsive-img">
         <div class="card-content white-text">
         <span class="card-title"><strong>${data.Title}</strong></spam>
         </div>
         <div class="card-action">
           <a id="star" class="waves-effect waves-light btn black">⭐️</a>
           </div>
         </div>
         </div>
        </div>
       </div>
         `
        let btnStar= document.getElementById("star")
        btnStar.addEventListener('click', () => {              
          let selectTitle = document.getElementById("winnerBestActress")
          selectTitle.innerHTML =`Scarlett Johansson`
        })          
      })  
    })
}
function supportingActrees() {
    containerMovies.innerHTML=""
    btnSiguiente.style.display = "flex"
    btnSiguiente.addEventListener('click', pageOne)
    bestSupportingActrees.forEach(element => {
        fetch(` https://www.omdbapi.com/?i=${element}&apikey=46ccb234`)
        .then(res => res.json())
        .then(data => {
          containerMovies.innerHTML +=
          `<div id="category-1" class="row white">    
           </div>
        <div class="tarjetaMovies col s12 m6">
          <div class="card black">
           <div class="card-img">
           <img src=${data.Poster} alt="" class="responsive-img">
          <div class="card-content white-text">
          <span class="card-title"><strong>${data.Title}</strong></spam>
          </div>
          <div class="card-action">
            <a id="star" class="waves-effect waves-light btn black">⭐️</a>
            </div>
          </div>
          </div>
         </div>
        </div>
          `
        let btnStar= document.getElementById("star")
        btnStar.addEventListener('click', () => {              
          let selectTitle = document.getElementById("winnerSupportActress")
          selectTitle.innerHTML =`Laura Dern`
        })           
      })  
    })
}
function supportingActor() {
  containerMovies.innerHTML=""
  btnSiguiente.style.display = "flex"
  btnSiguiente.addEventListener('click', pageOne)
  bestSupportingActor.forEach(element => {
    fetch(` https://www.omdbapi.com/?i=${element}&apikey=46ccb234`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      containerMovies.innerHTML +=
      `<div id="category-1" class="row white">    
           </div>
        <div class="tarjetaMovies col s12 m6">
          <div class="card black">
           <div class="card-img">
           <img src=${data.Poster} alt="" class="responsive-img">
          <div class="card-content white-text">
          <span class="card-title"><strong>${data.Title}</strong></spam>
          </div>
          <div class="card-action">
            <a id="star" class="waves-effect waves-light btn black">⭐️</a>
            </div>
          </div>
          </div>
         </div>
        </div>
          `
      let btnStar= document.getElementById("star")
      btnStar.addEventListener('click', () => {              
        let selectTitle = document.getElementById("winnerSupportActor")
        selectTitle.innerHTML =`Brad Pitt`
      }) 
    })
  })
}
export {bestMovie, animatedMovie, foreignFilm, director, actor, actrees, supportingActrees, supportingActor}

// imdbID