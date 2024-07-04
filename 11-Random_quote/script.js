function generateQuote(){
  var quote_name={
    "- Nelson Mandela" :' "The greatest glory in living lies not in never falling, but in rising every time we fall." ',
    "- Oscar Wilde" : ' "Be yourself; everyone else is already taken." ',
    "- Albert Einstein" : ' "In the middle of difficulty lies opportunity." ',
    "- Mahatma Gandhi" : ' "You must be the change you wish to see in the world." ',
    "- Confucius" : ' "It does not matter how slowly you go as long as you do not stop." ',
    "- Tony Robbins" : ' "The only impossible journey is the one you never begin." ',
    "- Oprah Winfrey" : ' "Turn your wounds into wisdom." ',
    "- Dalai Lama" : ' "Happiness is not something ready made. It comes from your own actions." ',
    "- Sarah Louise Delany" : ' "Life is short, and it is up to you to make it sweet." '
  }

  var authors = Object.keys(quote_name);
  var author = authors[Math.floor(Math.random() *authors.length)];

  var quote = quote_name[author];

  document.getElementById("quote").innerHTML = quote;
  document.getElementById("auother").innerHTML = author;

}