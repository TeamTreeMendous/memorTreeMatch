const memorTreeMatch = {
    apiBaseURL: "https://v0.trefle.io/api/plants",
    apiKey: "ejdBSVpoT3pSZnltT2ZieVZ4VEtOZz09",
};

// * * * *  ARRAY OF CARDS
memorTreeMatch.cardDeck = [
    {
        id: 01,
        tree: 'Eastern Hemlock'
    },
    {
        id: 01,
        tree: 'Eastern Hemlock'
    },
    {
        id: 02,
        tree: 'Red Oak'
    },
    {
        id: 02,
        tree: 'Red Oak'
    },
    {
        id: 03,
        tree: 'Black Oak'
    },
    {
        id: 03,
        tree: 'Black Oak'
    },
    {
        id: 04,
        tree: 'Red Maple'
    },
    {
        id: 04,
        tree: 'Red Maple'
    },
    {
        id: 05,
        tree: 'Eastern White Pine'
    },
    {
        id: 05,
        tree: 'Eastern White Pine'
    },
    {
        id: 06,
        tree: 'White Oak'
    },
    {
        id: 06,
        tree: 'White Oak'
    },
    {
        id: 07,
        tree: 'White Cedar'
    },
    {
        id: 07,
        tree: 'White Cedar'
    },
    {
        id: 08,
        tree: 'White Birch'
    },
    {
        id: 08,
        tree: 'White Birch'
    },
    {
        id: 09,
        tree: 'Black Cherry'
    },
    {
        id: 09,
        tree: 'Black Cherry'
    },
    {
        id: 10,
        tree: 'Yellow Birch'
    },
    {
        id: 10,
        tree: 'Yellow Birch'
    },
    {
        id: 11,
        tree: 'Willow'
    },
    {
        id: 11,
        tree: 'Willow'
    },
    {
        id: 12,
        tree: 'American Beech'
    },
    {
        id: 12,
        tree: 'American Beech'
    }
];

memorTreeMatch.buttons = function() {
    // * * * * PUT THE OTHER BUTTONS HERE
    $('.start').on('click', function () {
        $('html, .game').animate({
            scrollTop: $('.game').offset().top
        });
    });

    // * * * * .OPTIONS BUTTONS
    $('.restartGame').on('click', function (event) {
        event.preventDefault();
        location.reload(true);
        //It reloads to landing page, make it reload to just .game
    });

    $('.barkGame').on('click', function () {
        //Didnt make this version yet
        console.log('Hello i was clicked :P');
    });

    $('.learnTrees').on('click', function () {
        const offsetTop = $(this).offset().top + 100;
        $('html, .treeformation').animate({
            scrollTop: offsetTop
        }, 'slow');
    });
};
// * * * *  START GAME - NEW GAME ON LOAD, CHOICE IS USER CARD PICKS, COUNTER FOR MATCHING PAIRS
memorTreeMatch.newGame = [];
memorTreeMatch.choice1 = '';
memorTreeMatch.choice2 = '';
memorTreeMatch.pairCount = 0;

// * * * *  SHUFFLE DECK - RANDOMIZE ORDER OF CARDS
// * * * * https://bost.ocks.org/mike/shuffle/
// function shuffle(array) {
//     var m = array.length, t, i;

//     // While there remain elements to shuffle…
//     while (m) {

//         // Pick a remaining element…
//         i = Math.floor(Math.random() * m--);

//         // And swap it with the current element.
//         t = array[m];
//         array[m] = array[i];
//         array[i] = t;
//     }

//     return array;
// }
// console.log(deck);

// memorTreeMatch.shuffle = function (deck) {
//     for (let i = deck.length - 1; i > 0; i--) {
//         const swapIndex = Math.floor(Math.random() * (i + 1));
//         const currentCard = deck[i];
//         const cardToSwap = deck[swapIndex];
//         deck[i] = cardToSwap;
//         deck[swapIndex] = currentCard;
//     }
//     return deck;
// };

// * * * * DONT UNDERSTAND WHY THIS DOESNT WORK
// memorTreeMatch.shuffleDeck = function (arr) {
//     const deck = arr;
//     for (let i = deck.length - 1; i > 0; i--) {
//         let j = Math.floor(Math.random() * (i + 1));
//         [deck[i], deck[j]] = [deck[j], deck[i]]
//     }
//     return deck;
// }

// * * * *  CARD TABLE - LAY OUT THE CARD WITH BACKS FACING USER
// memorTreeMatch.cardTable = function () {
//     // memorTreeMatch.shuffle.forEach( function(treeObject) {
//     //     const treeCard = $('<button>').addClass('cardDeck');
//     //     $('.gameBoard').append(treeCard);
//     //     console.log(treeObject);

//     let shuffledDeck = memorTreeMatch.shuffle(memorTreeMatch.cardDeck);
//     for (let i = 0; i < shuffledDeck.length; i++) {
//         let cardTemplate = `
//             <button class="card" cardPairId = '${shuffledDeck[i].id}'></button>`;
//         $('.gameBoard').append(cardTemplate);
//     }
//     // });
// };

// * * * * DISPLAY PLANT IMAGES
memorTreeMatch.displayImages = function (id, scientificName) {

// * * * * API PROMISE
memorTreeMatch.getPlant = function(id) {
    return $.ajax({
        url: "http://proxy.hackeryou.com",
        method: "GET",
        dataType: "json",
        data: {
            reqUrl: `${memorTreeMatch.apiBaseURL}/${id}`,
            params: {
                token: memorTreeMatch.apiKey,
            },
        },
    });
};

// * * * * DISPLAY PLANT IMAGES
memorTreeMatch.displayImages = function(id, scientificName) {
    const $option = $(`#${id}`);
    const name = $option.text();
    const bark = $option.data("bark");
    const leaf = $option.data("leaf");
    const barkCredit = $option.data("barkCredit");
    const leafCredit = $option.data("leafCredit");
    const barkURL = $option.data("barkUrl");
    const leafURL = $option.data("leafUrl");


    $("#bark img")
        .prop("src", `./assets/${bark}`)
        .prop("alt", `${name} Bark | ${scientificName} | Photo by ${barkCredit} on Flickr [ https://www.flickr.com/photos/${barkURL} ] Modifications from original made for website image container.`);
    $("#bark figcaption").html(`${name} Bark<span class="photoAttribution">Photo by <a href="https://www.flickr.com/photos/${barkURL}">${barkCredit}</a></span>`);
    $("#leaf img")
        .prop("src", `./assets/${leaf}`)
        .prop("alt", `${name} Leaves | ${scientificName} | Photo by ${leafCredit} on Flickr [ https://www.flickr.com/photos/${leafURL} ] Modifications from original made for website image container.`);
    $("#leaf figcaption").html(`${name} Leaves<span class="photoAttribution">Photo by <a href="https://www.flickr.com/photos/${leafURL}">${leafCredit}</a></span>`);
};


// * * * * DISPLAY PLANT DATA ON TREEFORMATION PAGE
memorTreeMatch.displayData = function (obj) {
    const scientificName = obj.scientific_name;
    const familyCommonName = obj.family_common_name;
    const nativeStatus = obj.native_status;
    const foliageColor = obj.main_species.foliage.color;
    const flowerColor = obj.main_species.flower.color;
    const bloomPeriod = obj.main_species.seed.bloom_period;
    const seedPeriodBegin = obj.main_species.fruit_or_seed.seed_period_begin;
    const seedPeriodEnd = obj.main_species.fruit_or_seed.seed_period_end;
    const matureHeight = obj.main_species.specifications.mature_height.ft;

<<<<<<< added-styles
    $("#scientificName").html(scientificName);
    $("#familyCommonName").html(familyCommonName);
    $("#nativeStatus").html(nativeStatus);
    $("#foliageColor").html(foliageColor);
    $("#flowerColor").html(flowerColor);
    $("#bloomPeriod").html(bloomPeriod);
    $("#seedPeriod").html(seedPeriodBegin === seedPeriodEnd ? seedPeriodBegin : `${seedPeriodBegin} to ${seedPeriodEnd}`);
    $("#matureHeight").html(`${matureHeight} feet`);
};

// * * * * ACTUALIZE TREEFORMATION SELECTION
memorTreeMatch.selectTree = function () {
    $(".info select").change(function () {
        const id = $(".info option:selected").prop("id");

        memorTreeMatch.getPlant(id).then(function (result) {

    $("#bark img")
        .prop("src", `./assets/${bark}`)
        .prop("alt", `${name} Bark | ${scientificName} | Photo by ${barkCredit} on Flickr [ https://www.flickr.com/photos/${barkURL} ] Modifications from original made for website image container.`);
    $("#bark figcaption").html(`${name} Bark<span class="photoAttribution">Photo by <a href="https://www.flickr.com/photos/${barkURL}">${barkCredit}</a></span>`);
    $("#leaf img")
        .prop("src", `./assets/${leaf}`)
        .prop("alt", `${name} Leaves | ${scientificName} | Photo by ${leafCredit} on Flickr [ https://www.flickr.com/photos/${leafURL} ] Modifications from original made for website image container.`);
    $("#leaf figcaption").html(`${name} Leaves<span class="photoAttribution">Photo by <a href="https://www.flickr.com/photos/${leafURL}">${leafCredit}</a></span>`);
};

// * * * * DISPLAY PLANT DATA ON TREEFORMATION PAGE
memorTreeMatch.displayData = function(obj) {
    const scientificName = obj.scientific_name;
    const familyCommonName = obj.family_common_name;
    const nativeStatus = obj.native_status;
    const foliageColor = obj.main_species.foliage.color;
    const flowerColor = obj.main_species.flower.color;
    const bloomPeriod = obj.main_species.seed.bloom_period;
    const seedPeriodBegin = obj.main_species.fruit_or_seed.seed_period_begin;
    const seedPeriodEnd = obj.main_species.fruit_or_seed.seed_period_end;
    const matureHeight = obj.main_species.specifications.mature_height.ft;

    $("#scientificName").html(scientificName);
    $("#familyCommonName").html(familyCommonName);
    $("#nativeStatus").html(nativeStatus);
    $("#foliageColor").html(foliageColor);
    $("#flowerColor").html(flowerColor);
    $("#bloomPeriod").html(bloomPeriod);
    $("#seedPeriod").html(seedPeriodBegin === seedPeriodEnd ? seedPeriodBegin : `${seedPeriodBegin} to ${seedPeriodEnd}`);
    $("#matureHeight").html(`${matureHeight} feet`);
};

// * * * * ACTUALIZE TREEFORMATION SELECTION
memorTreeMatch.selectTree = function() {
    $(".info select").change(function() {
        const id = $(".info option:selected").prop("id");

        memorTreeMatch.getPlant(id).then(function(result) {

            const scientificName = result.scientific_name;

            memorTreeMatch.displayImages(id, scientificName);
            memorTreeMatch.displayData(result);
        });
    });
};



// * * * *  COMPARE THE TWO CARD CHOICES - IF A MATCH, DISAPPEAR, MAYBE A LITTLE MESSAGE LIKE “UN BE - LEAF - ABLE” OR “TAKE A BOUGH” AND IF IT’S WRONG “DON’T FEEL STUMPED” OR “DON’T GIVE UP, THERE’S NO TIME FORREST” (LIKE ON THE FIRST QUESTION AND THE SECOND LAST AND LAST ONES)
// * * * *  FLIP CARD ACTION
// * * * *  COMPLETE GAME - LOAD OTHER GAMING OPTIONS OR TREE - FORMATION(TREE INFORMATION) PAGE OF INFO
// * * * *  [OTHER GAME VERSIONS]
// * * * *  END OF GAME - CHOOSE TO PLAY AGAIN, PLAY ANOTHER VERSION, OR CHOOSE TO SEE TREE INFO PAGE(SLIDE UP PAGE)
// * * * *  TREE - FORMATION PAGE - DISPLAYS INFO ON CARDS IN BROCHURE / PDF MANNER ON IT’S OWN PAGE

// * * * * INIT PIECES
memorTreeMatch.init = function () {
    memorTreeMatch.buttons();
    // memorTreeMatch.shuffle(memorTreeMatch.cardDeck);
    // memorTreeMatch.cardTable();
    // memorTreeMatch.selectTree();

    $(".info select").change();
};

// * * * * DOCUMENT READY
$(() => {
    memorTreeMatch.init();
    AOS.init();
}); // * * * * END OF DOCUMENT READY