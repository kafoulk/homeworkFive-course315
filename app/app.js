var GAMES = 
[
    {
       "gameTitle":"Backpack",
       "gameThumbImg":"backpack.jpg",
       "gameFullImg":"backpackFS.jpg",
       "gameBriefDescription":"Lorem ipsum dolor sit amet, consectur adipisicing elit. Quas, ",
       "gameDescription":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt rerum culpa architecto dolorum ad excepturi quae doloribus, dolore consequuntur ut est blanditiis, porro quibusdam eaque minima ex vitae quis ratione!",
       "gameRating":"$79.99"
    },
    {
       "gameTitle":"Chair",
       "gameThumbImg":"chair.jpg",
       "gameFullImg":"chairFS.jpg",
       "gameBriefDescription":"Lorem ipsum dolor sit amet, consectur adipisicing elit. Quas, ",
       "gameDescription":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt rerum culpa architecto dolorum ad excepturi quae doloribus, dolore consequuntur ut est blanditiis, porro quibusdam eaque minima ex vitae quis ratione!",
       "gameRating":"$59.99"
    },
    {
       "gameTitle":"Cook Utensils",
       "gameThumbImg":"cookUtensils.jpg",
       "gameFullImg":"cookUtensilsFS.jpg",
       "gameBriefDescription":"Lorem ipsum dolor sit amet, consectur adipisicing elit. Quas, ",
       "gameDescription":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt rerum culpa architecto dolorum ad excepturi quae doloribus, dolore consequuntur ut est blanditiis, porro quibusdam eaque minima ex vitae quis ratione!",
       "gameRating":"$15.99"
    },
    {
       "gameTitle":"Cot",
       "gameThumbImg":"cot.jpg",
       "gameFullImg":"cotFS.jpg",
       "gameBriefDescription":"Lorem ipsum dolor sit amet, consectur adipisicing elit. Quas, ",
       "gameDescription":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt rerum culpa architecto dolorum ad excepturi quae doloribus, dolore consequuntur ut est blanditiis, porro quibusdam eaque minima ex vitae quis ratione!",
       "gameRating":"$99.99"
    },
    {
        "gameTitle":"Over-the-Fire Griddle",
        "gameThumbImg":"grill.jpg",
        "gameFullImg":"grillFS.jpg",
        "gameBriefDescription":"Lorem ipsum dolor sit amet, consectur adipisicing elit. Quas, ",
        "gameDescription":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt rerum culpa architecto dolorum ad excepturi quae doloribus, dolore consequuntur ut est blanditiis, porro quibusdam eaque minima ex vitae quis ratione!",
        "gameRating":"$89.99"
    },
    {
        "gameTitle":"Hammock",
        "gameThumbImg":"hammock.jpg",
        "gameFullImg":"hammockFS.jpg",
        "gameBriefDescription":"Lorem ipsum dolor sit amet, consectur adipisicing elit. Quas, ",
        "gameDescription":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt rerum culpa architecto dolorum ad excepturi quae doloribus, dolore consequuntur ut est blanditiis, porro quibusdam eaque minima ex vitae quis ratione!",
        "gameRating":"$39.99"
    },
    {
        "gameTitle":"Lantern",
        "gameThumbImg":"lantern.jpg",
        "gameFullImg":"lanternFS.jpg",
        "gameBriefDescription":"Lorem ipsum dolor sit amet, consectur adipisicing elit. Quas, ",
        "gameDescription":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt rerum culpa architecto dolorum ad excepturi quae doloribus, dolore consequuntur ut est blanditiis, porro quibusdam eaque minima ex vitae quis ratione!",
        "gameRating":"$35.99"
    },
    {
        "gameTitle":"Outdoor Chess Table",
        "gameThumbImg":"table.jpg",
        "gameFullImg":"tableFS.jpg",
        "gameBriefDescription":"Lorem ipsum dolor sit amet, consectur adipisicing elit. Quas, ",
        "gameDescription":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt rerum culpa architecto dolorum ad excepturi quae doloribus, dolore consequuntur ut est blanditiis, porro quibusdam eaque minima ex vitae quis ratione!",
        "gameRating":"$49.99"
    },
    {
        "gameTitle":"Camping Tent",
        "gameThumbImg":"tent.jpg",
        "gameFullImg":"tentFS.jpg",
        "gameBriefDescription":"Lorem ipsum dolor sit amet, consectur adipisicing elit. Quas, ",
        "gameDescription":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt rerum culpa architecto dolorum ad excepturi quae doloribus, dolore consequuntur ut est blanditiis, porro quibusdam eaque minima ex vitae quis ratione!",
        "gameRating":"$179.99"
    }, 
    {
        "gameTitle":"Waterproof Bag",
        "gameThumbImg":"waterBag.jpg",
        "gameFullImg":"waterBagFS.jpg",
        "gameBriefDescription":"Lorem ipsum dolor sit amet, consectur adipisicing elit. Quas, ",
        "gameDescription":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt rerum culpa architecto dolorum ad excepturi quae doloribus, dolore consequuntur ut est blanditiis, porro quibusdam eaque minima ex vitae quis ratione!",
        "gameRating":"$79.99"
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
            <div class="rating">Price: ${game.gameRating}</div>
        </div>
    </div>`);
    });

     initListeners();
    // console.log(GAMES.gameTitle);
    // for (let i = 0; i < GAMES.length; i++) {
    //     console.log(GAMES[i].gameTitle);
    // }
    // !-- Lines 41-44 is another way to flip back in forth between index variables in javascript.-->
}

function initListeners () {
    $(".gameHolder").click(function(e){
        let gameIndex = e.currentTarget.id;
        console.log(gameIndex);
        $("#app").html(
            `<div class="bigHolder">
                <h2>${GAMES[gameIndex].gameTitle}</h2>
                <div class="gameImage">
                    <img src="images/fullSize/${GAMES[gameIndex].gameFullImg}" alt="${GAMES[gameIndex].gameTitle}">
                </div>
                <div class="gameDescription">
                ${GAMES[gameIndex].gameDescription}
                </div>
                <div class="rating">Price: ${GAMES[gameIndex].gameRating}</div>
            <div class="close">Back</div></div>`);

            addCloseListener();
    });
} 

function addCloseListener() {
    $(".close").click(function (){
        $("#app").html("");
        loadData();
    });
}

$(document).ready(function () {
   
    loadData();
});