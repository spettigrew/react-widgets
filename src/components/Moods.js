/*
MOODS Instructions

Watch this short video:
https://tk-assets.lambdaschool.com/fe491c4f-395b-425c-b62e-3fbebf3cbb3f_moods-clip.gif

How many slices of state do you think are necessary to act as "sources of truth" for all
the things that change in this widget? Give it some thought before continuing reading!

Some might say 3 different states: one per mood (happy, sad, and uncertain).
But a single slice of state is more than enough to keep track of all these moods!

STEP 0:
  Study the component below, and import the state hook.

STEP 1:
  Create a 'mood', 'setMood' pair using the state hook.
  The 'mood' slice of state should be initialized to one of the three variables right below our imports.
  Those variables exist so we don't need to write those long strings anywhere inside the component.

STEP 2:
  Make the color of the text be royalblue if the state of the mood is happy, crimson otherwise.

STEP 3:
  Remove the hard-coded mood and interpolate the 'mood' slice of state instead, using curly brackets.

STEPS 4, 5, 6:
  Inside these click handlers set the correct mood, using 'setMood' and the variables below the imports.
*/

import React, {useState} from 'react'; /* STEP 0 */

const initialMood = 'Not sure how I feel';
const happyMood = 'Quite happy!';
const sadMood = 'Rather sad';

export default function Moods() {
  /* STEP 1 
  Crate a mood setMood pair using the state hook. The mood slice of state should be initialized to one fo the three variables right below our imports. Those variations exist so we don't need to write those long strings anywhere inside the component.*/
  const [mood, setMood] = useState(initialMood)

  const makeHappy = () => {
    /* STEP 4 
    Inside these click handlers set the current mood, using setMood and the variable below the imports. */
    setMood(happyMood)
  };
  const makeSad = () => {
    /* STEP 5 & 6
    Inside these click handlers, set the current mood, using setMood and the variables below the imports*/
    setMood(sadMood)
  };
  const reset = () => {
    /* STEP 6 */
    setMood(initialMood)
  };

  const style = {
    fontSize: '1.5em',
    marginBottom: '0.3em',
    color: 'crimson', /* STEP 2 
*** Ternary with another ternary as the else condition ***
below we are saying if the string in mood has 'happy' in it then color should be royalblue else (:) if the string mood has 'sad' in it then the color should be crimson else (:) default to the color orange
Make the color of the text be royalblue if the state of the mood is happy, otherwise, crimson*/
    color: mood.includes('happy') ? 'royalblue' : mood.includes('sad') ? 'crimson' : 'orange',
  };

  return (
    <div className='widget-moods container'>
      <h2>Moods</h2>
      <div id='mood' style={style}>{mood}</div> {/* STEP 3 */}
      <div>
        <button id='makeHappy' onClick={makeHappy}>Make Happy</button>
        <button id='makeSad' onClick={makeSad}>Make Sad</button>
        <button id='resetMood' onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
