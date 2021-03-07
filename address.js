use strict'

console.log("Loading address.js");

let getButton = document.getElementById("getUsersButton");
//on load function 
getButton.addEventListener ('click', function() {
  console.log("Get Users Button got clicked");


  console.log("Before calling the api");

  // make the api call, and get a promise, to connect our call back to
  let fetchResult = fetch("https://randomuser.me/api/?results=5");

  let jsonResponse = fetchResult.then(function(response){
    console.log("Processing the results", response);
    return response.json();
  })

  jsonResponse.then(function(json){
    // created a new empty div tag
    
    console.log(json.results)
    for (let i = 0; i <= json.results.length; i++){
    console.log("The number of users", json.results[i].name.first);
      
      //picture Div
      const picDiv = document.createElement('img');
      picDiv.setAttribute("src", json.results[i].picture.thumbnail);
      
      // const picContent = document.createTextNode(json.results[i].picture.thumbnail);
      console.log(json.results[i].picture.thumbnail)
      
      // picDiv.appendChild(picContent);
      
      const currentPicDiv = document.getElementById("div1");
      
      document.body.insertBefore(picDiv, currentPicDiv);
      
// console.log(json.results[i].picture + 'was click on')

// first name Div 
    // create new element 
    const newDiv = document.createElement("div"); 
    //assign id to new element
    newDiv.setAttribute("id", "newdiv" + i);
    // newContent and extracted .json result
    const newContent = document.createTextNode(json.results[i].name.first);
    // added or append a newcontent
    newDiv.appendChild(newContent);
    //getting the element from html file (empty div tag)
    const currentDiv = document.getElementById("div1")
    
    document.body.insertBefore(newDiv, currentDiv);

    
// Email of birth div
    newDiv.addEventListener ('click', function(){
    const emailDiv = document.createElement("div"); 
    
    // newContent and extracted .json result
    const emailContent = document.createTextNode(json.results[i].email);
    
    // added or append a newcontent
    emailDiv.appendChild(emailContent);
    //getting the element from html file (empty div tag)
    const currentDiv = document.getElementById("newdiv" + i);
    
    // selecting the parent node div and insert the dobDiv 
    currentDiv.parentNode.insertBefore(emailDiv, currentDiv.nextSibling);
    
    
    console.log(json.results[i].email + ' was click on');
    
    
    // Display location 
    // const locationDiv = document.createElement("div");
    
    // // const newContent = document.createTextNode(json.results[i].location.city);
    // // // added or append a newcontent
    // // locationDiv.appendChild(newContent);
    // // //getting the element from html file (empty div tag)
    // const currentDiv = document.getElementById("locationDiv" + i);
    // // selecting the parent node div and insert the dobDiv 
    // currentDiv.parentNode.insertBefore(locationDiv, currentDiv.nextSibling);
    
    // console.log(json.results[i].location.city + ' was click on');

    })

    //insert newdiv before current div from div 1(html)
    // print out the first name of the user in position [0] in the results array
    // console.log("The json payload", json.results[0].name.first);

    }
    // console.log("json =", json.result);
  })
  console.log("After calling api");
})

