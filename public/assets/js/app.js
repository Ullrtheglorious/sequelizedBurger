
$(function () {
    $(".create-burger").on("submit", function (event) {
        event.preventDefault();
        var newBurger = {
            name: $("#burger-input").val().trim(),
            
        }
        if (newBurger.name == "") {
            alert("You need to Enter a Burger");
        } else {
        $('#burger-input').val('');
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                location.reload();
            }
            );
        }
    });
    
    $(".devour-btn").on("click", function (event) {
        event.preventDefault();
        var id = $(this).data("id");
        var newBurgerStatus = {
            devoured: true
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newBurgerStatus
        }).then(
            function () {
                location.reload();
            }
            );
    });

});