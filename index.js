var dropDown = document.querySelector(".toogling")
var dropButton = document.getElementById("dropDown-button").classList

dropDown.addEventListener("click", function(){
  if (dropButton[1] == "not-showed") {
    dropButton.remove("not-showed")
    dropButton.add("showed")
  }
  else{
    dropButton.remove("showed")
    dropButton.add("not-showed")
  }
})
