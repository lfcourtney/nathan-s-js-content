let story =
  'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

let storyWordsArray = story.split(" ");
const unnecessaryWord = "literally";
const misspelledWord = "beautifull";
const badWord = "freaking";

let count = 0;

// Filter out 'literally' word
storyWordsArray = storyWordsArray.filter(
  (storyWord) => storyWord.toLowerCase() !== unnecessaryWord
);

// Replace mispelled word
storyWordsArray = storyWordsArray.map((storyWord) => {
  if (storyWord.toLowerCase() === misspelledWord) {
    // CORRECT SPELLING
    return "beautiful";
  }

  return storyWord;
});

// Find BAD WORD
const badWordIndex = storyWordsArray.findIndex(
  (storyWord) => storyWord.toLowerCase() === badWord
);
console.log(`Bad word index: ${badWordIndex}`);
const replaceBadWord = "really";
storyWordsArray[badWordIndex] = replaceBadWord;

// TEST whether every word is < 10 characters
const lengthCheck = storyWordsArray.every((storyWord) => storyWord.length < 10);
console.log(`Every word is < 10 characters, true or false: ${lengthCheck}`);

const replaceOverlyLongWord = "Xtreme";

// to prevent modification of original (non-copied) array (via 'splice' method) from messing with planning invokation of callback function.
storyWordsArray.slice(0).forEach((storyWord) => {
  if (storyWord.length < 10 === false) {
    // Replace 1 element
    // Modify original (non-copied) array
    storyWordsArray.splice(
      storyWordsArray.indexOf(storyWord),
      1,
      replaceOverlyLongWord
    );

    return;
  }

  if (storyWord === "GW") {
    storyWordsArray.splice(storyWordsArray.indexOf(storyWord), 1, [
      "George",
      "Washington",
    ]);

    return;
  }
});

// FINISH: Count words
const forEachCallbackFn = (word) => {
  count++;
};

storyWordsArray.forEach(forEachCallbackFn);

// Join Array to LOG as single STRING
console.log(storyWordsArray.join(" "));
// Log NUMBER of words in story
console.log(`Number of words in story: ${count}`);
