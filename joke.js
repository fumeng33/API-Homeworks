'use strict'

//create the fetch call to the api address
//on the html page the end-user is able to generate random jokes 

//user can click on the button to generate the joke

let getButton = document.getElementById("getJokeButton");

getButton.addEventListener('click', function(){

  //adding the API url
  let fetchJoke = fetch("https://api.jokes.one/jod");
  
  let jsonResponse = fetchJoke.then(function(response){
    console.log("Processing the results", response);
    return response.json();
    
  })
  
  jsonResponse.then (function(json){
    console.log("json =", json)
    processJoke(json.contents.jokes[0].joke.text);

  })

 })
  
 let processJoke =function(joke) {
    // newContent and extracted .json result
    const newContent = document.createTextNode(joke);
    // getting the element from html file 
    const currentDiv = document.getElementById("div1")
    // add text node joke to child element 
    currentDiv.appendChild(newContent);
    
  }