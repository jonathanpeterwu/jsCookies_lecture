// STEP 1. Window Load (client side browser javascript)
// window.onload = function(){

// STEP 2. Cookie Model (attributes)
// // MODEL=====================================================
// function Cookie(){
//   this.type = "chocolate chip";
//   this.softness = 6;
//   this.remaining = 3
// };

// STEP 3. Cookie Factory (creating new cookies)
// //MODEL FACTOR
// createCookie = function(){
//   return new Cookie();
// };


// STEP 4. Object Prototype Functions (Methods on the model/object)
// //MODEL METHODS ===============================================
// Cookie.prototype = {
//   eat: function(){
//     this.remaining -= 1;
//   },
//   dipInMilk: function(){
//     this.softness += 2;
//   },
//   anythingLeft: function(){
//     if (this.remaining > 0) { return "There's more" }
//     else { return "It's all gone" };
//   }
// };


//  STEP 5. ALl about DOM element manipulation ( event listeners, callbacks)
// var el = document.getElementsByClassName("new");
// el[0].addEventListener("click", addCookie, false)

// var otherel = document.getElementsByClassName("eat");
// otherel[0].addEventListener("click", eatAllCookies, false)
// };


// STEP 6. "DRIVER CODE" Showing that our object works
// var cookieJar = []
// // PSEUDO CONTROLLER ===============================
// function addCookie(){
//   var cookie = createCookie()
//   cookieJar.push(cookie);
//   console.log(cookie);
//   console.log(cookieJar);
//   // $('.new').html("<img src="http://eleventhstack.files.wordpress.com/2013/06/chocolate_chip_cookies.jpg"></img>")
// }

// function eatAllCookies(){
//   console.log(cookieJar)
//   for(var i = 0; i < cookieJar.length; i++){
//     cookieJar[i].eat();
//     console.log(cookieJar[i].remaining);
//     console.log(cookieJar[i].anythingLeft());
//   }
// }


//  EXTRA TIME
// // VIEW !!! ===========================================
// // cookieView = {}

// // cookiewView.prototype = function(){
// //   printCookie:
// // }


