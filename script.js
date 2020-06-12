const memorTreeMatch = {};

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

// * * * *  LANDING PAGE/BUTTON OPTIONS
// * * * * WHEN FIRST BUTTON IS CLICKED IT GOES TO THE GAME PAGE
memorTreeMatch.begin = function () { 
    $('.start').click(function () {
        $('html,body').animate({
            scrollTop: $("main").offset().top
        },
            'slow');
    });

    // * * * * WHEN INFO BUTTON IS CLICKED IT GOES TO THE TREE INFO PAGE
    $('.info').click(function () {
        $('html,body').animate({
            scrollTop: $(".info").offset().top
        },
            'slow');
    });

    // * * * * ADD OTHER TRANSITION BUTTONS HERE
}; 

// * * * *  START GAME - NEW GAME ON LOAD, CHOICE IS USER CARD PICKS, COUNTER FOR MATCHING PAIRS
memorTreeMatch.newGame = [];
memorTreeMatch.choice1 = '';
memorTreeMatch.choice2 = '';
memorTreeMatch.pairCount = 0;

// * * * *  SHUFFLE DECK - RANDOMIZE ORDER OF CARDS
    // * * * * https://bost.ocks.org/mike/shuffle/
    function shuffle(array) {
        var m = array.length, t, i;

        // While there remain elements to shuffle…
        while (m) {

            // Pick a remaining element…
            i = Math.floor(Math.random() * m--);

            // And swap it with the current element.
            t = array[m];
            array[m] = array[i];
            array[i] = t;
        }

        return array;
    }
// console.log(deck);

memorTreeMatch.shuffle = function (deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        const swapIndex = Math.floor(Math.random() * (i + 1));
        const currentCard = deck[i];
        const cardToSwap = deck[swapIndex];
        deck[i] = cardToSwap;
        deck[swapIndex] = currentCard;
    }
    return deck;
}

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
memorTreeMatch.cardTable = function() {
    // memorTreeMatch.shuffle.forEach( function(treeObject) {
    //     const treeCard = $('<button>').addClass('cardDeck');
    //     $('.gameBoard').append(treeCard);
    //     console.log(treeObject);

        let shuffledDeck = memorTreeMatch.shuffle(memorTreeMatch.cardDeck);
        for (let i = 0; i < shuffledDeck.length; i++) {
            let cardTemplate = `
            <button class="card" cardPairId = '${shuffledDeck[i].id}'></button>`;
            $('.gameBoard').append(cardTemplate);
        }
// });
};






// * * * *  COMPARE THE TWO CARD CHOICES - IF A MATCH, DISAPPEAR, MAYBE A LITTLE MESSAGE LIKE “UN BE - LEAF - ABLE” OR “TAKE A BOUGH” AND IF IT’S WRONG “DON’T FEEL STUMPED” OR “DON’T GIVE UP, THERE’S NO TIME FORREST” (LIKE ON THE FIRST QUESTION AND THE SECOND LAST AND LAST ONES)
// * * * *  FLIP CARD ACTION
// * * * *  COMPLETE GAME - LOAD OTHER GAMING OPTIONS OR TREE - FORMATION(TREE INFORMATION) PAGE OF INFO
// * * * *  [OTHER GAME VERSIONS]
// * * * *  END OF GAME - CHOOSE TO PLAY AGAIN, PLAY ANOTHER VERSION, OR CHOOSE TO SEE TREE INFO PAGE(SLIDE UP PAGE)
// * * * *  TREE - FORMATION PAGE - DISPLAYS INFO ON CARDS IN BROCHURE / PDF MANNER ON IT’S OWN PAGE

// * * * * INIT PIECES
memorTreeMatch.init = function () {
    memorTreeMatch.begin();
    memorTreeMatch.shuffle();
    memorTreeMatch.cardTable();
};

// * * * * DOCUMENT READY
$(() => {

    memorTreeMatch.init();
    AOS.init();
}); // * * * * END OF DOCUMENT READY
