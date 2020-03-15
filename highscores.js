var reload2 = document.getElementById("reload");
reload2.addEventListener("click", clearHighscores)
var para = document.getElementById("para");

var maxScore = {};
var data=[]
var values = []

for (let i = 0; i < localStorage.length; i++) {
  data[i] = localStorage.key(i);
  values[i] = parseInt(localStorage.getItem(data[i]))
}

var names2=[];
var values2 = values.sort(function(a, b){return b-a});

for (let i = 0; i < values.length; i++) {
  var index = values.indexOf(values[i])
  names2.push(data[index]) 
  document.getElementById("para2").innerHTML += values2[i]+",  "
}
indexMax = values.indexOf(Math.max.apply(Math,values));
document.getElementById("para").innerHTML += data[indexMax]





// if (data.length > 2 ){
//   var sortable = [];
//   for (var i in data) {
//     sortable.push([i, data[i]]);
//   }

//   sortable.sort(function(a, b) {
//     return a[1] - b[1];
//   });
//   console.log(sortable)

//   var names=[]
//   var scores = []
//   var k =0
//   for (i = sortable.length-1; i > -1; i--) {
//     names[k] = sortable[i][1]
//     document.getElementById("para2").innerHTML += localStorage.getItem(names[k])+"   "
//     document.getElementById("para").innerHTML += names[k].toString()+ " "
//     k++
//   }
//   //document.getElementById("para").innerHTML = names.toString()+ "<br />"
//   //document.getElementById("para2").innerHTML = scores.toString()+ "<br />"
// }else if(data.length == 2){
//   document.getElementById("para").innerHTML = localStorage.key(0)+", "+localStorage.key(1);
//   //document.getElementById("para").innerHTML = localStorage.key(1);
//   //document.getElementById("para2").innerHTML = localStorage.getItem(data[0]);
//   document.getElementById("para2").innerHTML = localStorage.getItem(data[1]) +", "+ localStorage.getItem(data[0]); 
// }else{
//   document.getElementById("para").innerHTML = localStorage.key(0);
//   document.getElementById("para2").innerHTML = localStorage.getItem(data);
// }





function clearHighscores() {
 // window.localStorage.removeItem("highscores");
  location.replace("index.html");
}



