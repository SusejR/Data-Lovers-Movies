const bestFilm = ["tt1302006", "tt7653254", "tt8579674", "tt7131622", "tt2584384", "tt6751668", "tt3281548", "tt7286456", "tt8637428", "tt3224458"]
const bestAnimatedFilm = ["tt1979376", "tt4520988", "tt2386490", "tt9426210", "tt9806192", "tt4729430"]
const bestForeignFilm = ["tt6751668", "tt8291806", "tt10199590", "tt7921248", "tt6062774", "tt10199640"]
const bestDirector = ["tt1302006", "tt7653254", "tt8579674", "tt7131622", "tt6751668"]
const bestActor = ["tt7653254", "tt7286456", "tt2066051", "tt8291806"]
const bestActrees = ["tt7653254", "tt3281548", "tt6394270", "tt7549996", ]
const bestSupportingActrees = ["tt7653254", "tt3281548", "tt8637428", "tt6394270", ]
const bestSupportingActor = ["tt1302006", "tt7131622", "tt3224458", "tt8404614"]


function bestMovie() {
    bestFilm.forEach(element => {
        fetch(` http://www.omdbapi.com/?i=${element}&apikey=46ccb234`)
        .then(res => res.json())
        .then(data => { console.log(data);
        root.innerHTML +=`<div class="wrap">
          <div class="tarjeta">
          <div class="infopoke">
           <h4>${data.Title}</h4>
           <p>${data.Year}</p>
           <div class="imagenpoke">
            <img class="grande" src="${data.Poster}" alt="poster"></img>
            </div>
            
            </div>
            <div class="atras">
            <img src="${data.poster}" alt="imagen poke"></img>
            <lo>
                <li>Tipo: ${paramPoke.type}</li>
                <li>Altura: ${paramPoke.height}</li>
                <li>Peso: ${paramPoke.height}</li>
                <li>Debilidad: ${paramPoke.weaknesses}</li>
            </lo>
            </div>
            </div>
            </div>
            `;
        })
    })
}

function animatedMovie() {
    bestAnimatedFilm.forEach(element => {
        fetch(` http://www.omdbapi.com/?i=${element}&apikey=46ccb234`)
        .then(res => res.json())
        .then(data => { console.log(data)
        });
    });
}

function foreignFilm() {
    bestForeignFilm.forEach(element => {
        fetch(` http://www.omdbapi.com/?i=${element}&apikey=46ccb234`)
        .then(res => res.json())
        .then(data => { console.log(data);
        })
    })
}

function director() {
    bestDirector.forEach(element => {
        fetch(` http://www.omdbapi.com/?i=${element}&apikey=46ccb234`)
        .then(res => res.json())
        .then(data => { console.log(data);
        })
    })
}

function actor() {
    bestActor.forEach(element => {
        fetch(` http://www.omdbapi.com/?i=${element}&apikey=46ccb234`)
        .then(res => res.json())
        .then(data => { console.log(data.Actors);
        })
    })
}

function actrees() {
    bestActrees.forEach(element => {
        fetch(` http://www.omdbapi.com/?i=${element}&apikey=46ccb234`)
        .then(res => res.json())
        .then(data => { console.log(data);
        })
    })
}

function supportingActrees() {
    bestSupportingActrees.forEach(element => {
        fetch(` http://www.omdbapi.com/?i=${element}&apikey=46ccb234`)
        .then(res => res.json())
        .then(data => { console.log(data);
        })
    })
}

function supportingActor() {
    bestSupportingActor.forEach(element => {
        fetch(` http://www.omdbapi.com/?i=${element}&apikey=46ccb234`)
        .then(res => res.json())
        .then(data => { console.log(data);
        })
    })
}
export {bestMovie, animatedMovie, foreignFilm, director, actor, actrees, supportingActrees, supportingActor}