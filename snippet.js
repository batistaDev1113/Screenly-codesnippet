setInterval(function (){
  // array of quotes
  let quotes = ['There is nothing permanent except change.','Let us sacrifice our today so that our children can have a better tomorrow.', 'Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do.','Every goal, every action, every thought, every feeling one experiences, whether it be consciously or unconsciously known, is an attempt to increase one’s level of peace of mind.', 'A good head and a good heart are always a formidable combination.', 'Without hard work, nothing grows but weeds.','Learning never exhausts the mind.', 'If you cannot do great things, do small things in a great way.' ];
  
  let quotesRand = Math.floor(Math.random() * quotes.length);
  
  // guessing there is a div with a h3 element with id of printQuotes
  
  // write to element
  document.querySelector('q').innerHTML = quotes[quotesRand];
  console.dir(quotes[quotesRand]);
  }, 3000
); 
  

