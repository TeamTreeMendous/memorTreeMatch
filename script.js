const memorTree = {};

// * * * *  ARRAY OF CARDS
memorTree.cardDeck = [
    {
        id: 01,
        tree: 'Eastern Hemlock'
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
        id: 04,
        tree: 'Red Maple'
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
        id: 07,
        tree: 'White Cedar'
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
        id: 10,
        tree: 'Yellow Birch'
    },
    {
        id: 11,
        tree: 'Willow'
    },
    {
        id: 12,
        tree: 'American Beech'
    }
];

// * * * *  LANDING PAGE - BUTTON OPTIONS TO SLIDE UP SCREEN AND TAKE YOU TO GAME(MULTIPLE VERSIONS) OR SLIDE UP AND TAKE YOU TO TREE - FORMATION
// * * * *  START GAME
// * * * *  SHUFFLE DECK - RANDOMIZE ORDER OF CARDS
// * * * *  CARD TABLE - LAY OUT THE CARD WITH BACKS FACING USER
// * * * *  COMPARE THE TWO CARD CHOICES - IF A MATCH, DISAPPEAR, MAYBE A LITTLE MESSAGE LIKE “UN BE - LEAF - ABLE” OR “TAKE A BOUGH” AND IF IT’S WRONG “DON’T FEEL STUMPED” OR “DON’T GIVE UP, THERE’S NO TIME FORREST” (LIKE ON THE FIRST QUESTION AND THE SECOND LAST AND LAST ONES)
// * * * *  FLIP CARD ACTION
// * * * *  COMPLETE GAME - LOAD OTHER GAMING OPTIONS OR TREE - FORMATION(TREE INFORMATION) PAGE OF INFO
// * * * *  [OTHER GAME VERSIONS]
// * * * *  END OF GAME - CHOOSE TO PLAY AGAIN, PLAY ANOTHER VERSION, OR CHOOSE TO SEE TREE INFO PAGE(SLIDE UP PAGE)
// * * * *  TREE - FORMATION PAGE - DISPLAYS INFO ON CARDS IN BROCHURE / PDF MANNER ON IT’S OWN PAGE




// * * * * DOCUMENT READY
$(() => {

    // * * * * WHEN FIRST BUTTON IS CLICKED IT GOES TO THE GAME PAGE
    $('.start').click(function () {
        $('html,body').animate({
            scrollTop: $(".game").offset().top
        },
            'slow');
    });

    // * * * * WHEN INFO BUTTON IS CLICKED IT GOES TO THE TREE INFO PAGE
    $('.info').click(function () {
        $('html,body').animate({
            scrollTop: $(".treeFormation").offset().top
        },
            'slow');
    });

    AOS.init();
}); // * * * * END OF DOCUMENT READY
