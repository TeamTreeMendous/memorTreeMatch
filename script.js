const memorTreeMatch = {
    apiBaseURL: "https://v0.trefle.io/api/plants",
    apiKey: "ejdBSVpoT3pSZnltT2ZieVZ4VEtOZz09",
};

// * * * * BUTTONS
memorTreeMatch.buttons = function() {
    $('.start').on('click', function () {
        $('html, .game').animate({
            scrollTop: $('.game').offset().top
        });
    });

    // * * * * .OPTIONS BUTTONS
    $('.restartGame').on('click', function (event) {
        event.preventDefault();
        // location.reload(true);
        $("main").load(".game");

        return false;
        //It reloads to landing page, make it reload to just .game
    });

    $('.learnTrees').on('click', function () {
        const offsetTop = $(this).offset().top + 100;
        $('html, .treeformation').animate({
            scrollTop: offsetTop
        }, 'slow');
    });
};

// * * * * THE CARD GAME USING CODE BY https://codepen.io/riclab/pen/rzyVWO 
(global => {
    //It’s an Immediately-Invoked Function Expression, or IIFE for short. It executes immediately after it’s created. One of the famous JavaScript design patterns, it is the heart and soul of the modern day Module pattern. As the name suggests it executes immediately after it is created. This pattern creates an isolated or private scope of execution.
    
    let cardGame = {

        // * * * *  INIT
        init: function (cards) {
            this.$game = $('.game');
            this.$modal = $('.options');
            this.$restartButton = $('.restartGame');
            this.cardsArray = $.merge(cards, cards);
            this.shuffleCards(this.cardsArray);
            this.setup();
            this.binding();
        },

        shuffleCards: function (cardsArray) {
            this.$cards = $(this.shuffle(this.cardsArray));
        },

        setup: function () {
            this.html = this.buildHTML();
            this.$game.html(this.html);
            this.$memorTreeCards = $('.card');
            this.paused = false;
            this.guess = null;
        },

        binding: function () {
            this.$memorTreeCards.on('click', this.cardClicked);
            this.$restartButton.on("click", $.proxy(this.reset, this));
        },

        cardClicked: function () {
            let _ = cardGame;
            let $card = $(this);
            if (!_.paused && !$card.find(".inside").hasClass("matched") && !$card.find(".inside").hasClass("picked")) {
                $card.find(".inside").addClass("picked");
                if (!_.guess) {
                    _.guess = $(this).attr("data-id");
                } else if (_.guess == $(this).attr("data-id") && !$(this).hasClass("picked")) {
                    $(".picked").addClass("matched");
                    _.guess = null;
                } else {
                    _.guess = null;
                    _.paused = true;
                    setTimeout(function () {
                        $(".picked").removeClass("picked");
                        cardGame.paused = false;
                    }, 600);
                }
                if ($(".matched").length == $(".card").length) {
                    _.win();
                }
            }
        },

        win: function () {
            this.paused = true;
            setTimeout(function () {
                cardGame.showModal();
            });
        },

        showModal: function () {
            this.$modal.show();
        },

        hideModal: function () {
            this.$modal.hide();
        },

        reset: function () {
            location.reload(true);
        },

        // Fisher--Yates Algorithm -- https://bost.ocks.org/mike/shuffle/
        shuffle: function (array) {
            let counter = array.length, temp, index;
            // While there are elements in the array
            while (counter > 0) {
                // Pick a random index
                index = Math.floor(Math.random() * counter);
                // Decrease counter by 1
                counter--;
                // And swap the last element with it
                temp = array[counter];
                array[counter] = array[index];
                array[index] = temp;
            }
            return array;
        },

        buildHTML: function () {
            let complete = '';
            this.$cards.each(function (k, v) {
                complete += '<div class="card" data-id="' + v.id + '"><div class="inside">\
                <div class="cardFront"><img src="'+ v.img + '"\
                alt="'+ v.name + '" /></div>\
                <div class="cardBack"></div></div>\
                </div>';
            });
            return complete;
        }

    }; // * * * * END OF THE GAME OBJECT

    // * * * *  ARRAY OF CARDS
    let cards = [
        {
            id: 01,
            tree: "American Beech Leaves",
            img: "./assets/americanBeechLeaves.jpg"
        },
        {
            id: 02,
            tree: "Black Cherry Leaves",
            img: "./assets/blackCherryLeaves.jpg"
        },
        {
            id: 03,
            tree: "Black Oak Leaves",
            img: "./assets/blackOakLeaves.jpg"
        },
        {
            id: 04,
            tree: "Eastern Hemlock Leaves",
            img: "./assets/easternHemlockLeaves.jpg"
        },
        {
            id: 05,
            tree: "Eastern White Pine Leaves",
            img: "./assets/easternWhitePineLeaves.jpg"
        },
        {
            id: 06,
            tree: "Paper Birch Leaves",
            img: "./assets/paperBirchLeaves.jpg"
        },
        {
            id: 07,
            tree: "Red Maple Leaves",
            img: "./assets/redMapleLeaves.jpg"
        },
        {
            id: 08,
            tree: "Red Oak Leaves",
            img: "./assets/redOakLeaves.jpg"
        },
        {
            id: 09,
            tree: "White Cedar Leaves",
            img: "./assets/whiteCedarLeaves.jpg"
        },
        {
            id: 10,
            tree: "White Oak Leaves",
            img: "./assets/whiteOakLeaves.jpg"
        },
        {
            id: 11,
            tree: "White Willow Leaves",
            img: "./assets/whiteWillowLeaves.jpg"
        },
        {
            id: 12,
            tree: "Yellow Birch Leaves",
            img: "./assets/yellowBirchLeaves.jpg"
        },
    ];

    cardGame.init(cards);

})(); // END OF ENTIRE GAME


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

// * * * * INIT PIECES
memorTreeMatch.init = function () {
    memorTreeMatch.buttons();
    memorTreeMatch.selectTree();

    $(".info select").change();
};

// * * * * DOCUMENT READY
$(() => {
    memorTreeMatch.init();
}); // * * * * END OF DOCUMENT READY
