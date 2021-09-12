console.log("Md Adil Alam");

setTimeout(function a(){
    console.log("CallbackFunction");
},5000);

fetch("https://api.netflix.com")
.then( function abc(){
    console.log("Netflixsite");
});
console.log("End");