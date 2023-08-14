window.onload= function()
{
    var dark= document.getElementById("Dark_btn")
    var spooky= document.getElementById("Spooky_btn")
    var prog= document.getElementById("Prog_btn")
    var misc= document.getElementById("Miscs_btn")
    
    dark.addEventListener("click",submit_dark)
    spooky.addEventListener("click",submit_spooky)
    prog.addEventListener("click", submit_prog)
    misc.addEventListener("click", submit_miscs)
}

function submit_dark()
{
    var dark_value= document.getElementById("Dark_btn").value
    joke_req(dark_value)
}

function submit_spooky()
{
    var spooky_value= document.getElementById("Spooky_btn").value
    joke_req(spooky_value)
}

function submit_prog()
{
    var prog_value= document.getElementById("Prog_btn").value
    joke_req(prog_value)
}

function submit_miscs()
{
    var misc_value= document.getElementById("Miscs_btn").value
    joke_req(misc_value)
}

function joke_req(value)
{
    var xhr = new XMLHttpRequest()
    var url = "https://sv443.net/jokeapi/v2/joke/"+value
    xhr.open("GET", url);
    xhr.send();
    xhr.onload = function () {
      if (xhr.status == 200) {
        console.log(JSON.parse(xhr.response))
        var results= JSON.parse(xhr.response)
        console.log(results.setup||results.joke)
        console.log(results.delivery)
        var temp= display(results)
      }

      xhr.onerror= function(){
        console.log("error")
      }
    };
}

function display(results)
{
    var joke= document.getElementById("joke")
    joke.innerHTML=""
    joke.innerHTML= "~"+results.setup+"<br><br>"+results.delivery+"~"
}
