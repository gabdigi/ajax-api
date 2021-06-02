


function game() {
    $.ajax({
        url: "https://opentdb.com/api.php?amount=10&category=12&difficulty=easy&type=boolean",
        method: 'GET',
        dataType: 'json'
    })
    .done(getData)
    .fail(function () {
        console.log("La requête a échoué");
    })
};

// la fonction getdata permet de récupérer les données
function getData(response) {
    console.log(response);
    for (let i = 0; i < response.results.length; i++) {
        $('.play').append("<section>")
            .append("<article>")
            .append($("<h2>").text(response.results[i].category))
            .append($("<p>").text(response.results[i].question))
            /*.append($("<p>").text(response.results[i].difficulty))*/
            .append($("<div>").text("").attr('id', 'myDiv'))
            .append($("<button>").text("reponse").attr('onclick', 'myFunction(this)'))
            .append($("<p>").text(response.results[i].correct_answer).attr('class', 'reponse'))
    }
};  


function myFunction(button) {
  let y = button.nextSibling; // nextSibling parent enfant frere (liste, suite)
    if (y.style.visibility === "visible") {
      y.style.visibility = "collapse";
    } else {
      y.style.visibility = "visible";
    }
  }

  /*
  function myFunction() {
    let x = document.getElementsById("reponse");
    if (x.style.visibility === "visible") {
      x.style.visibility = "collapse";
    } else {
      x.style.visibility = "visible";
    }
  }
  
  */

game();
console.log(getData);
