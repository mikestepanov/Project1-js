// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var quotes = [{quote : 'You can do anything but not everything',
  author : 'David Allen',
  citation : 'Making It All Work',
  year: 2009},
  {quote : 'Don\'t cry because it\'s over, smile because it happened.',
    author : 'Dr. Seuss',
    citation : undefined,
    year: undefined},
  {quote : 'Be yourself; everyone else is already taken.',
    author : 'Oscar Wilde',
    citation : undefined,
    year: undefined},
  {quote : 'Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.',
    author : 'Albert Einstein',
    citation : undefined,
    year: undefined},
  {quote : 'So many books, so little time.',
    author : 'Frank Zappa',
    citation : undefined,
    year: undefined}
];

//removes previos quote
// and applies random new one to the #quote-box div
function printQuote() {
  var quoteBox = document.getElementById('quote-box');
  quoteBox.innerHTML = '';
  var quote = getRandomQuote();
  var citation = '';
  var year = '';
  if(quote.citation) {
    citation = ' <span class="citation"> ' + quote.citation + ' </span>';
  }
  if (quote.year) {
    year = '<span class="year"> ' + quote.year + ' </span>';
  }
  var text = '<p class="quote"> ' + quote.quote + ' </p><p class="source"> ' + quote.author + citation + year + '</p>';
  quoteBox.innerHTML=text;
}

//takes random quote from quotes array
function getRandomQuote() {
  var i = Math.floor(Math.random() * quotes.length);
  return quotes[i];
}
