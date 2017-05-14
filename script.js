const quotes = [
    "Be yourself; everyone else is already taken.",
    "Two things are infinite: the universe and human stupidity.",
    "In three words I can sum up everything I've learned about life: it goes on."
];

document.getElementById('new-quote').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote-display').innerText = quotes[randomIndex];
});
