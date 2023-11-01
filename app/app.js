var GAMES = 
[
    {
       "gameTitle":"Genshin Impact",
       "gameThumbImg":"genshin-impact.jpg",
       "gameFullImg":"genshin-impact-FS.jpg",
       "gameBriefDescription":"Lorem ipsum dolor sit amet, consectur adipisicing elit. Quas, ",
       "gameDescription":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt rerum culpa architecto dolorum ad excepturi quae doloribus, dolore consequuntur ut est blanditiis, porro quibusdam eaque minima ex vitae quis ratione!",
       "gameRating":"M"
    },
    {
       "gameTitle":"Halo",
       "gameThumbImg":"halo.jpg",
       "gameFullImg":"halo-FS.jpg",
       "gameBriefDescription":"Lorem ipsum dolor sit amet, consectur adipisicing elit. Quas, ",
       "gameDescription":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt rerum culpa architecto dolorum ad excepturi quae doloribus, dolore consequuntur ut est blanditiis, porro quibusdam eaque minima ex vitae quis ratione!",
       "gameRating":"M"
    },
    {
       "gameTitle":"FallOut",
       "gameThumbImg":"falloutFour.jpg",
       "gameFullImg":"falloutFour-FS.jpg",
       "gameBriefDescription":"Lorem ipsum dolor sit amet, consectur adipisicing elit. Quas, ",
       "gameDescription":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt rerum culpa architecto dolorum ad excepturi quae doloribus, dolore consequuntur ut est blanditiis, porro quibusdam eaque minima ex vitae quis ratione!",
       "gameRating":"M"
    },
    {
       "gameTitle":"Assassain's Creed",
       "gameThumbImg":"aCreed.jpg",
       "gameFullImg":"aCreed-FS.jpg",
       "gameBriefDescription":"Lorem ipsum dolor sit amet, consectur adipisicing elit. Quas, ",
       "gameDescription":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt rerum culpa architecto dolorum ad excepturi quae doloribus, dolore consequuntur ut est blanditiis, porro quibusdam eaque minima ex vitae quis ratione!",
       "gameRating":"M"
    },
    {
        "gameTitle":"Battlefield",
        "gameThumbImg":"battlefield.jpg",
        "gameFullImg":"battlefield-FS.jpg",
        "gameBriefDescription":"Lorem ipsum dolor sit amet, consectur adipisicing elit. Quas, ",
        "gameDescription":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt rerum culpa architecto dolorum ad excepturi quae doloribus, dolore consequuntur ut est blanditiis, porro quibusdam eaque minima ex vitae quis ratione!",
        "gameRating":"M"
    },
    {
        "gameTitle":"Borderlands",
        "gameThumbImg":"Borderlands.jpg",
        "gameFullImg":"Borderlands-FS.jpg",
        "gameBriefDescription":"Lorem ipsum dolor sit amet, consectur adipisicing elit. Quas, ",
        "gameDescription":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt rerum culpa architecto dolorum ad excepturi quae doloribus, dolore consequuntur ut est blanditiis, porro quibusdam eaque minima ex vitae quis ratione!",
        "gameRating":"M"
    },
    {
        "gameTitle":"Call of Duty",
        "gameThumbImg":"cod.jpg",
        "gameFullImg":"cod-FS.jpg",
        "gameBriefDescription":"Lorem ipsum dolor sit amet, consectur adipisicing elit. Quas, ",
        "gameDescription":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt rerum culpa architecto dolorum ad excepturi quae doloribus, dolore consequuntur ut est blanditiis, porro quibusdam eaque minima ex vitae quis ratione!",
        "gameRating":"M"
    },
    {
        "gameTitle":"Gears of War",
        "gameThumbImg":"gow.jpg",
        "gameFullImg":"gow-FS.jpg",
        "gameBriefDescription":"Lorem ipsum dolor sit amet, consectur adipisicing elit. Quas, ",
        "gameDescription":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt rerum culpa architecto dolorum ad excepturi quae doloribus, dolore consequuntur ut est blanditiis, porro quibusdam eaque minima ex vitae quis ratione!",
        "gameRating":"M"
    },
    {
        "gameTitle":"FarCry",
        "gameThumbImg":"farCry.jpg",
        "gameFullImg":"farCry-FS.jpg",
        "gameBriefDescription":"Lorem ipsum dolor sit amet, consectur adipisicing elit. Quas, ",
        "gameDescription":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt rerum culpa architecto dolorum ad excepturi quae doloribus, dolore consequuntur ut est blanditiis, porro quibusdam eaque minima ex vitae quis ratione!",
        "gameRating":"M"
    }, 
    {
        "gameTitle":"Final Fantasy",
        "gameThumbImg":"ff.jpg",
        "gameFullImg":"ff-FS.jpg",
        "gameBriefDescription":"Lorem ipsum dolor sit amet, consectur adipisicing elit. Quas, ",
        "gameDescription":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt rerum culpa architecto dolorum ad excepturi quae doloribus, dolore consequuntur ut est blanditiis, porro quibusdam eaque minima ex vitae quis ratione!",
        "gameRating":"M"
    },
];

function loadData() {
    $.each(GAMES, function(idx, game) {
        $("#app").append(`<div id="${idx}" class="gameHolder">
        <h4>${game.gameTitle}</h4>
        <div class="gameImage">
            <img src="images/thumbnails/${game.gameThumbImg}" alt="${game.gameTitle}" width="150px" height="150px">
        </div>
        <div class="briefRating">
            <div class="briefDescription">
                L${game.gameBriefDescription}
            </div>
            <div class="rating">Rating: ${game.gameRating}</div>
        </div>
    </div>`);
    });
    // console.log(GAMES.gameTitle);
    // for (let i = 0; i < GAMES.length; i++) {
    //     console.log(GAMES[i].gameTitle);
    // }
    // !-- Lines 41-44 is another way to flip back in forth between index variables in javascript.-->
}

function initListeners () {} 

$(document).ready(function () {
    // initListeners();
    loadData();
});