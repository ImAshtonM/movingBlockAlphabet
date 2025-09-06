The goal of this project was to create an animated moving 3d block title. 
Each letter is created in a 5x5 grid pattern and set dynamically. Each letter's required number of blocks are stored in a JavaScript object.

TO IMPLEMENT YOURSELF:
To utilize the movingBlockAlphabet CSS and JS files you'll need to set you HTML up in the following format.

<section class="hero"> // My original design was to only utilize this in hero sections which is why its tied
  <div class="scene">
    <div class="container"> //This is simply the element that will handle letter spacing, otherwise each letter added will stack upon the last.
      <div class="character letterA"></div> 
      // The character class is so we can identify the amount of total characters to be created. Each letter is called by the word "letter" followed by the capital of the letter you want.
      // ex: letterA, letterB, letterC and so on.
      // Available characters are A-Z capital versions only along with commas, excalamation points, and question marks - those would be called as "character comma" "character exclamation" "character question" 
    </div>
  </div>
</section>

All elements need transform-style: preserve-3d; from .hero element to the .character elements. Any spacing containers you add would be the primary concern as all elements in codebase currently should already have this applied.
