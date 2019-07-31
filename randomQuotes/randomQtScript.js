var quoteArray = ["Trying to define yourself is like trying to bite your own teeth. -Alan Watts", "Life is only a dream and we are the imagination of ourselves. -Bill Hicks", "After silence, that which comes nearest to expressing the inexpressible is music. -Aldous Huxley", "There are nights when the wolves are silent and only the moon howls. - George Carlin", "Reality is that which, when you stop believing in it, doesn't go away. -Philip K Dick", "We're all just walking each other home. -Ram Dass", "Language is a virus from outer space. -William S Burroughs", "Logic is the beginning of wisdom, not the end. -Leonard Nimoy", "That is not dead which can eternal lie, And with strange aeons even death may die. -H.P. Lovecraft", "If it can be written, or thought, it can be filmed. -Stanley Kubrick", "Any sufficiently advanced technology is indistinguishable from magic. -Arthur C. Clarke", "Somewhere, something incredible is waiting to be known. -Carl Sagan", "We are what we pretend to be, so we must be careful about what we pretend to be. -Kurt Vonnegut", "Violence is the last refuge of the incompetent. - Isaac Asimov", "In a time of universal deceit - telling the truth is a revolutionary act. -George Orwell", "You don't have to burn books to destroy a culture. Just get people to stop reading them. -Ray Bradbury", "Moderation is the secret of survival. -Manly P. Hall", "Reality is wrong. Dreams are for real. -Tupac Shakur", "People have the power to redeem the work of fools. -Patti Smith", "Take what you can use and let the rest go by. -Ken Kesey", "“The earth cannot move without music -Sun Ra", "There is nothing permanent except change. -Heraclitus", "And your very flesh shall be a great poem. -Walt Whitman", "Always remember that you are absolutely unique. Just like everyone else. -Margaret Mead", "Only the dead have seen the end of war. -Plato", "If the doors of perception were cleansed everything would appear to man as it is, infinite. -William Blake", "Intelligence without ambition is a bird without wings. -Salvador Dali", "He who has a why to live can bear almost any how. -Friedrich Nietzsche", "When I let go of what I am, I become what I might be. –Lao Tzu", "We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained. –Marie Curie", "The cave you fear to enter holds the treasure you seek. -Joseph Campbell"];


function tweetQuote()
{

  window.open("https://twitter.com/intent/tweet?text=" + quoteArray[randomPick]);
}

window.onload = function() {
  
  document.getElementById('quoteBtn').addEventListener('click', generateQuote);
   document.getElementById('tweetBtn').addEventListener('click', tweetQuote);
   document.getElementById('reloadBtn').addEventListener('click', reloadQuote);
}
var randomPick = Math.floor(Math.random() * (quoteArray.length));

function generateQuote()
{
     
  //var randomPick = Math.floor(Math.random() * (quoteArray.length));
  document.getElementById('quoteArea').innerHTML = quoteArray[randomPick];
 
}







