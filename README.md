# Tic Tac Toe for students.

A product that could help others that has come to a stand stil in their development. Or just want to learn.

 As Javascript can be extremely confusing for a beginner, even after completeing course material, and doing challanges. 

The user will find the real value of this project located mainly inside the Javascript code file itself.
And the "by-product" is a working straight forward Tic Tac Toe game.

## Introduction.

[![Tic-tac-toe-show.jpg](https://i.postimg.cc/3WMNwkJL/Tic-tac-toe-show.jpg)](https://postimg.cc/RJR4sVtf)
This is how the game looks when it is in full action.

One of the simplest games, 3x3 squares, called tic tac toe, or Noughts and crosses as some people say. 

There's somewhere between 26830 and 31896 possible games. Depending on some rules that i will not go into. 

The main goal for a player is to get 3 of the same objects in line or diagonal. 

The game begins with a players turn screen, that shows (always it's circles turn to start) when the game is first loaded. 
Will then show players turn, after a box is clicked. 
It will show a message who wins the turn, also if it's a draw. 

The game-grid is responsive, with the help of css. And can be played on smaller screens. 

That's everything about the game itself. 

Now lets look at the code and it's functions. 

## Functions

The game is made up by 3 different functions. 

 - createBoard   (creates 3 columns with 3 divs inside each, appended to a "game-container")
 - addMark        (listens for click events, and creates the player markers, loaded from css)
 - checkScore    (checks arrays of winning combinations, updates playerdisplay, and resets "game-container") 
(***Actually*** checkScore is made up of 6 "sub-functions")

## Some overview inside script.js

At the top the user will find the welcome screen and the happy mascot, where a short introduction is presented.
Moving down, the user will find info about the game, and how the functions are built. 
[![Student-welcome.jpg](https://i.postimg.cc/mkc6Vqwz/Student-welcome.jpg)](https://postimg.cc/fSNKR81D)
Happy coding = efficient work. This is the mascot named mascot who lives inside the code and looks out so that no coder gets lost.
[![happy-mascot.jpg](https://i.postimg.cc/76KGVPP9/happy-mascot.jpg)](https://postimg.cc/jwJSqb7n)

This is how the info box for the function addMark looks. All functions is presented in a similar way.
[![Function-info-add-Mark.jpg](https://i.postimg.cc/K80bqKSd/Function-info-add-Mark.jpg)](https://postimg.cc/9DwszQfp)

## Testing

Tested the code in jshint, some code needs at least esversion: 11' to work. 

Css got a score of ## CSS lvl 3 + SVG

Validating Html, only points out that section should contain a header, but i will leave it as is. The id makes its point.
#

Iphone 5 size screens works well. 
Larger screens up to 4k works as well but the player turn display and heading becomes tiny. 

----
| Test label |Test action  |Expected outcome|Test Outcome|
|--|--|--|--|
| Game functionality |Test different combiantion  |Game reset when either win or draw |Pass|
|Player turn |Play end games |PlayerTurnDisplay matches winner|Pass|
|playerTurnDisplay|Play end game / game reset (not refresh screen)|When game reset playerTurnDisplay shows Starting player |Fail / Starting player does not update after a played game 

---

## Unfixed bugs

The failed test, might be resolved by rewriting the function that resets the board after every game. 
This has not been looked into due to shortage of time.
#

## Possible Future functions & updates

 - Player score function
 - High score table
 - Reset game button
 - Functionality to choose 3x3, 4x4, 5x5 size board
 - Choose player icon or picture
 - Make game look more stylish with a cooler look.
 - Fix, so that starting player is shown after a game is played.
 -  a function that shows the winning move until player start a new game.
 - add the possability to play against ai. with different difficulty levels.
 - a div that can show actual code that is in use.
# Wireframe

This is how i imagined the game and functions to look like before take-off.
[![tic-tac-toe-wireframe.jpg](https://i.postimg.cc/bNk7vxWg/tic-tac-toe-wireframe.jpg)](https://postimg.cc/kBM11bnR)

## Credits

  (addMark & most parts 'not all!' of checkScore) also making the cross and circle in css, is inspired from this video https://www.youtube.com/watch?v=DRaWr0Dcbl0 code written by [Ania Kubów](https://www.youtube.com/@AniaKubow) 

## Deployment
Live link [Tic Tac toe Game](https://togothor.github.io/Tic-Tac-Toe/)

# *Developer-Story*
 
 This project turned out to become a self educating experience, as i gradually became aware of my shortcommings as a beginner, i also started to realise my own kind of learning ability. *finally*
 
Traveling down the path of Javascript, reading all the content, "learning" a new language.
Watching videos, doing challanges and so on.

It kind of never actually started to click. I felt more and more 'behind'. 
That by itself became a downward spiral. *worst that can happen when learning*. 
Loosing interest, and struggle.

"how can i make my learning fun?"
 
Working several years on the cutting edge, in the world of advance CNC machining. 
Up to 9 axis of machining.
Where another type of code 'Robot language > Gcode' is like fluent water for me. 
("Gcode also has many different functions, but the lines of code need to be put in order exactly right or it will fail. And you can run sub-programs within programs, and link between them and jump arround, some similarities to javascript") 

Javascript is on another level of confusion. As there are so many ways to do the same thing. 

That experience alone i thought would make it easy for me to understand this. Not so much i realised.
As the code in Javascript can be very encrypted, "*anonomus*" from my point of view. With code that goes in reverse order right to left, and then goes back to be read in left to right. 

The difference is what my old teacher told me, 

"You cannot simply learn how to ride a horse theoretically! You must ride it in real life." 

After weeks of studying Javascript i found myself standing against a wall of stupidity. Everything i tried just did not work.
I Felt like a baby. 

How can i walk myself out of this hole i asked myself, what is it that is so hard for me to grasp ?  

I felt ambarresed not to be able to build code from scratch after weeks of studying, any custom code felt light years away. 
But after i finally understood what my brain need to comprehend this understanding, a whole new world opened up for me.
And this experience makes me feel much richer. 

This understanding finally made me humble enough to dive in to other peoples work ("embarrassing") and even copy their code to some extent, just to realise what was going on. 

I was so afraid of looking at others code, that i made myself come to a stand stil. 

For me that would just take to much time of trial and error my way forward. In reflection i've should have asked for much more help.

Instead this product came to life from that experience.
A product that will grow with time, develop more functions. 

And hopefully the mascot will catch some people who has lost their way to find inspiration again.  

So this product takes the journey through my experience of learning the code, the comments i had to make to understand whats inside, and the explanation of the functions in a real world scenario.

I even left some commented "*i know*" code, that the user can try, to see for them selves what happens within the console. 
