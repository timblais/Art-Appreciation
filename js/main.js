// MET API search query:
// API info: https://metmuseum.github.io/#search

// https://collectionapi.metmuseum.org/public/collection/v1/search?artistOrCulture=true&q=vanGogh

let objectID = ''



let getArt = function(){
    // https://collectionapi.metmuseum.org/public/collection/v1/objects/{objectID}

let url = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`
fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
    console.log(data)
    let image = data.primaryImage
    let title = data.title
    let artist = data.artistDisplayName
    let year = data.objectDate
    document.getElementById('title').innerText += ` ${title}`
    document.getElementById('artist').innerText += ` ${artist}`
    document.getElementById('year').innerText += ` ${year}`
    document.getElementById('image').src = image
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

let testFetch = function(){
    // https://collectionapi.metmuseum.org/public/collection/v1/search?artistOrCulture=true&q=vanGogh
    
    fetch('https://collectionapi.metmuseum.org/public/collection/v1/search?artistOrCulture=true&q=vanGogh')
        .then(res => res.json()) // parse response as JSON
        .then(data => {
        console.log(data)
        objectID = data.objectIDs[1] // grabs first object ID and gives to objectID variable for use with next API call
        })
        .then(data => {
            return getArt()
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}

document.querySelector('button').addEventListener('click', testFetch)