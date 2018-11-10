$(document).ready(function () {
    var vgs = ["Dota 2", "Dark Souls", "Final Fantasy 7", "Nier", "Chrono Cross", "Diablo 2", "WarCraft 3: The Frozen Throne"];

    function search(videogame) {
        var APIkey = "L2l0fwskUtVRoP7NK47tr3x6fOM1ALyZ";
        var videogame = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + videogame + "&api_key=" + APIkey + "&limit=10";
        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (response) {
                console.log(queryURL);
                console.log(response);
                var results = response.data;
                for (var i = 0; i < results.length; i++) {
                    var videogameDiv = $("<div>");
                    var videogameImage = $("<img data-still= "+results[i]+" data-animate= "+results[i]+" data-state='still' class='gif'>");
                    videogameImage.attr("src", results[i].images.fixed_height.url, "data-state='still'");
                    videogameDiv.append(videogameImage);
                    $("#gif-view").prepend(videogameDiv);
                }
            });
    };
    function renderButtons() {
        $("#vgs-render").empty();
        for (var i = 0; i < vgs.length; i++) {
            var a = $("<button>");
            a.addClass("vg");
            a.attr("data-name", vgs[i]);
            a.text(vgs[i]);
            $("#vgs-render").append(a);
        }
    }
    $("#add-vg").on("click", function (event) {
        event.preventDefault();
        var vg = $("#vg-input").val().trim();
        vgs.push(vg);
        renderButtons();
    });
    function displayVideoGames() {
        $(document).on("click", ".vg", search);
    }
    renderButtons();
    displayVideoGames();
    $(".gif").on("click", function() {
        var state = $(this).attr("data-state");
        if (state === "still") {
          $(this).attr("src", $(this).attr("data-animate"));
          $(this).attr("data-state", "animate");
        } else {
          $(this).attr("src", $(this).attr("data-still"));
          $(this).attr("data-state", "still");
        }
      });


});
