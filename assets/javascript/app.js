$(document).ready(function () {

    var APIkey = "OhxnQpyEjD8FLglH3MjDscrOuNXE3hwD";
    var videogame = $(this).attr("data-name");
    var queryURL = ("http://api.giphy.com/v1/gifs/search?q=" + videogame + "&api_key=" + APIkey + "&limit=10");


    $.ajax({
        url: queryURL,
        method: "GET"
    })
        // After data comes back from the request
        .then(function (response) {
            console.log(queryURL);
            console.log(response);
        });
    var vgs = ["Dota 2", "Dark Souls", "Final Fantasy 7", "Nier", "Chrono Cross", "Diablo 2", "WarCraft 3: The Frozen Throne"];

    // Function for displaying movie data
    function renderButtons() {

        // Deleting the movie buttons prior to adding new movie buttons
        // (this is necessary otherwise we will have repeat buttons)
        $("#vgs-view").empty();

        // Looping through the array of movies
        for (var i = 0; i < vgs.length; i++) {

            // Then dynamicaly generating buttons for each movie in the array.
            // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
            var a = $("<button>");
            // Adding a class
            a.addClass("vg");
            // Adding a data-attribute with a value of the movie at index i
            a.attr("data-name", vgs[i]);
            // Providing the button's text with a value of the movie at index i
            a.text(vgs[i]);
            // Adding the button to the HTML
            $("#vgs-view").append(a);
        }
    }
    $("#add-vg").on("click", function (event) {
        // event.preventDefault() prevents the form from trying to submit itself.
        // We're using a form so that the user can hit enter instead of clicking the button if they want
        event.preventDefault();

        // This line will grab the text from the input box
        var vg = $("#vg-input").val().trim();
        // The movie from the textbox is then added to our array
        vgs.push(vg);

        // calling renderButtons which handles the processing of our movie array
        renderButtons();
    });
    renderButtons();

});