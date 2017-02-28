(function() {
  var app = angular.module('Store', []);

  app.controller('GalleryController' , function(){
    this.current = 0;

    this.setCurrent = function(value) {
      this.current = value || 0;
    };
  });

  app.controller('StoreController', function() {
    this.products = balls;
  });

  app.controller("PanelController", function(){
  	this.tab = 1;

  	this.selectTab = function(setTab) {
  		this.tab = setTab;
  	};
  	this.isSelected = function(checkTab){
  		return this.tab === checkTab;
  	};
  });

  app.controller("ReviewController", function(){
  	this.review = {};

  	this.addReview = function(product) {
  		this.review.createdOn = Date.now();
  		product.reviews.push(this.review);
  		this.review = {};
  	};
  });


  var balls = [{
    name: 'Wilson',
    description: "These Wilson Championship balls feature regular duty felt, ideal for clay and indoor courts. The exclusive Dura-Weave felt from Wilson provides greater durability and performance.",
    mass: 56,
    size: 2.575,
    bounce: 53,
    price: 10.95,
    images: [
      "img/ball-01.gif",
      "img/ball-02.gif",
      "img/ball-03.gif"
    ],
    reviews: [{
        stars: 5,
        body: "Awesome ball!",
        author: "bill@mail.org",
        createdOn: 1477490980842
      }, {
        stars: 1,
        body: "This is not what I looked for.",
        author: "carl@example.org",
        createdOn: 1477490980842
      }]
  }, {
    name: 'Babolat',
    description: "This regular duty ball is good for all types of surfaces and comes with Roland Garros print on the ball.",
    mass: 59.5,
    size: 2.650,
    bounce: 57,
    price: 17.90,
    images: [
      "img/ball-04.gif",
      "img/ball-05.gif",
      "img/ball-06.gif"
    ],
    reviews: [{
        stars: 3,
        body: "Too heavy for me ((.",
        author: "EmmaStone@example.org",
        createdOn: 1477490980842
      }, {
        stars: 4,
        body: "I adore Roland Garros balls. Very nice!",
        author: "MikeCoul@example.org",
        createdOn: 1477490980842
      }]
  }, {
    name: 'Head',
    description: "The perfect ball for the tournament or serious club player, the HEAD PRO offers good spin and long durability.",
    mass: 57.2,
    size: 2.850,
    bounce: 58,
    price: 22.50,
    images: [
      "img/ball-07.gif",
      "img/ball-08.gif",
      "img/ball-09.gif"
    ],
    reviews: [{
        stars: 1,
        body: "This ball seems too expensive for me.",
        author: "bestPlayer@example.org",
        createdOn: 1477490980842
      }, {
        stars: 5,
        body: "You need to pay for quality. That's my choice)",
        author: "RogerFederer@gmail.com",
        createdOn: 1477490980842
      }, {
        stars: 2,
        body: "Don't waste your money!",
        author: "RaffaelNadal@example.org",
        createdOn: 1477490980842
      }]
  }];
})();
