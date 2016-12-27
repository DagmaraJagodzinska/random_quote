var tweetLink = "https://twitter.com/intent/tweet?text=";
var quoteUrl = "http://api.forismatic.com/api/1.0/?method=getQuote&key=867576&format=jsonp&lang=en&jsonp=?"; // api forismatic
//  dwa adresy: jeden do wysyłania tweetów, drugi do pobierania cyctatów

//pobranie losowego cytatu za pomoca API - metoda $.getJSON()

function getQuote() {
	$.getJSON(quoteUrl, createTweet);
}
// quoteUrl- adres zaputanie, createTweet-funkcja-zostanie wykonana po wykonaniu zapytania 

function createTweet(input) {
	if (!input.quoteAuthor.length) {  //czyli jeśli autor cytatu jest pusty, to wejdziemy do treści warunku
		input.quoteAuthor = "Unknown author";
	}
	var tweetText = "Quote of the day - " + input.quoteText + " Author: " + input.quoteAuthor;
	if (tweetText.length > 140) {
	getQuote();
	} else {
		var tweet = tweetLink + encodeURIComponent(tweetText); // link do generowania i sam tekst tweeta
		$('.quote').text(input.quoteText); // tu wyświetlamy tresc
		$('.author').text("Author: " + input.quoteAuthor); // tu autora
		$('.tweet').attr('href', tweet); // wybieramy elem z klasą tweet i modyfikujemy za atrybutu na URL tweeta, ktory jest w zmiennej tweet
	}
}
$(document).ready(function() {
	getQuote();
	$('.trigger').click(function(){
		getQuote();
	})
});


