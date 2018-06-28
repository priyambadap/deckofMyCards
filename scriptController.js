angular.module('deckOfCardApp', [])
    .controller('CardController', function() {
        var vm = this;
        vm.suits = ["clubs", "spades", "hearts", "diamonds", ];
        vm.ranks = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
        vm.numberOfCard = 20;
        vm.dack = [];
        vm.dackIndex = [];
        vm.cards = {
            "clubs": [],
            "spades": [],
            "hearts": [],
            "diamonds": []
        }

        vm.drawCard = function() {
            if (vm.numberOfCard <= 0) {
                vm.numberOfCard = 1
            }
            if (vm.numberOfCard > 52) {
                vm.numberOfCard = 52
            }
            if (vm.dack.length >= vm.numberOfCard) {
                vm.shuffleCard();
                return;
            }
            var suit = Math.floor(Math.random() * 4);
            var rank = Math.floor(Math.random() * 13);
            var card = {
                "suits": vm.suits[suit],
                "rank": vm.ranks[rank]
            };
            vm.cardInDackAvailble = true;
            var cardIndex = vm.suits[suit] + "_" + vm.ranks[rank];
            if (vm.dackIndex.indexOf(cardIndex) == -1) {
                vm.dackIndex.push(cardIndex);
                vm.dack.push(card);
                switch (card.suits) {
                    case 'clubs':
                        vm.cards.clubs.push(card);
                        break;
                    case 'spades':
                        vm.cards.spades.push(card);
                        break;
                    case 'hearts':
                        vm.cards.hearts.push(card);
                        break;
                    case 'diamonds':
                        vm.cards.diamonds.push(card);
                        break;
                    default:
                        break;
                }
                if (vm.dack.length < vm.numberOfCard) {
                    vm.drawCard();
                }
            } else {
                vm.drawCard();
            }
        }

        vm.shuffleCard = function() {
            vm.dack = [];
            vm.dackIndex = [];
            vm.cards = {
                "clubs": [],
                "spades": [],
                "hearts": [],
                "diamonds": []
            }
            vm.drawCard();
        }

        vm.sortCard = function() {
            vm.cards.clubs.sort(function(a, b) {
                return vm.ranks.indexOf(a.rank) - vm.ranks.indexOf(b.rank)
            });
            vm.cards.spades.sort(function(a, b) {
                return vm.ranks.indexOf(a.rank) - vm.ranks.indexOf(b.rank)
            });
            vm.cards.hearts.sort(function(a, b) {
                return vm.ranks.indexOf(a.rank) - vm.ranks.indexOf(b.rank)
            });
            vm.cards.diamonds.sort(function(a, b) {
                return vm.ranks.indexOf(a.rank) - vm.ranks.indexOf(b.rank)
            });
            cards = {};
            angular.copy(vm.cards, cards);
            angular.copy(cards.clubs.concat(cards.spades).concat(cards.hearts).concat(cards.diamonds), vm.dack);
        }

        vm.deleteCard = function(index) {
            var card = vm.dack[index];
            var cardIndex = card.suits + "_" + card.rank;

        
            switch (card.suits) {
                case 'clubs':
                    angular.forEach(vm.cards.clubs, function(val, key) {
                        if (val.rank == card.rank) {
                            vm.cards.clubs.splice(key, 1);
                            return;
                        }
                    });
                    break;
                case 'spades':
                    angular.forEach(vm.cards.spades, function(val, key) {
                        if (val.rank == card.rank) {
                            vm.cards.spades.splice(key, 1);
                            return;
                        }
                    });
                    break;
                case 'hearts':
                    angular.forEach(vm.cards.hearts, function(val, key) {
                        if (val.rank == card.rank) {
                            vm.cards.hearts.splice(key, 1);
                            return;
                        }
                    });
                    break;
                case 'diamonds':
                    angular.forEach(vm.cards.diamonds, function(val, key) {
                        if (val.rank == card.rank) {
                            vm.cards.diamonds.splice(key, 1);
                            return;
                        }
                    });
                    break;
                default:
                    break;
            }

            vm.dackIndex.splice(vm.dackIndex.indexOf(cardIndex), 1);
            vm.dack.splice(index, 1);
            vm.numberOfCard--;
           
        }
    });