writeRandomQuote = () => {

  let quotes = ['There is nothing permanent except change.', 'Let us sacrifice our today so that our children can have a better tomorrow.', 'Every goal, every action, every thought, every feeling one experiences, whether it be consciously or unconsciously known, is an attempt to increase one’s level of peace of mind.', 'A good head and a good heart are always a formidable combination.', 'Learning never exhausts the mind.', 'If you cannot do great things, do small things in a great way.' ];

  let quotesRand = Math.floor(Math.random() * quotes.length);

  // guessing there is a div with a h3 element with id of printQuotes
  let idQuotes = document.querySelector('#printQuotes');
  idQuotes.innerHTML = quotes[quotesRand];
}

