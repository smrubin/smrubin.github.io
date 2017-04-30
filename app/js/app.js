(function() {

  document.querySelectorAll('.navbar a').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      smoothScrollTo(anchor.getAttribute('href'));
      e.preventDefault();
    });
  });

  getFunFact();

  function smoothScrollTo(anchor) {
    document.querySelector(anchor).scrollIntoView({
      behavior: 'smooth'
    });
  }

  function getFunFact() {
  	var funFacts = ['Over three weeks, I backpacked seven countries in Europe: Denmark, Germany, Czech Republic, Italy, Spain, France, and the U.K.', 'I am an avid skier and have skied more than a dozen resorts, my favorite being Whistler, Canada.', 'I used to be internationally ranked in Guitar Hero.', 'I grew up with three Shih Tzus named Dill, Phil, and Coco.', 'I graduated as the Salutatorian of my high school class and gave a speech wearing a "Stud Muffin" t-shirt.', 'My favorite videogame of all-time is Fez.', 'My favorite beer of all-time is Delirium Tremens.', 'I\'ve gone whitewater rafting down a Class V rapid.', 'My favorite programming language is Javascript (surprise!).', 'My favorite band is the Foo Fighters.', 'My favorite song, if I had to pick one, is "That Was A Crazy Game of Poker" by O.A.R.', 'My girlfriend consistently beats me at the board game Mancala.', 'My favorite game on the casino floor is Pai Gow Poker.', 'As a kid, I had a traumatic experience with a Christmas tree falling on me as it was being chopped down.', 'Somewhere out there on the Internet exists my embarrassing first-year class president campaign video (I did come in 3rd place).'];
  	var randomNumber = Math.floor(Math.random() * funFacts.length);
  	document.querySelector('#funfact').innerHTML = 'Fun Fact #' + (randomNumber + 1) + ': ' + funFacts[randomNumber];
  };

})();
