# Snake Client Project

Snake game is a very popular video game. It is a video game concept where the player maneuvers a dot and grows it by ‘eating’ pieces of food. As it moves and eats, it grows and the growing snake becomes an obstacle to smooth maneuvers. The goal is to grow it to become as big as possible without bumping into the side walls, or bumping into itself, upon which it dies.

This is simply a multiplayer take on the genre.

Before you can run this client, you will need to be running the server side which you can download and install from here ---- > https://github.com/lighthouse-labs/snek-multiplayer


## Getting Started

- Follow steps inside the snek server repo to run the server side.

- While the server is still running, run the development snake client using the `node play.js` command and you shall see your snake appear on the server board with its name. 

## Rules 

### Get Your Snake To Move - 

We have implemented the good ol' **wasd** maneuvers to make the snake move.

In the gaming world : 

 - **w** means **UP** 
 - **a** means **left**
 - **s** means **down**
 - **d** means **right**  

 ### Whats a Game Without Some Banter...

 Help your snake express itself by using these simple keys : 

 - Use `j` to say `I'm John Cena!`
 - Use `k` to say `Behind you!`
 - Use `l` to say `See ya l8r`
 - Use `p` to say `Cant touch dis` 

### Exit the game

There are 2 ways the game exits 
-If you want a *graceful exit*  type in the command `ctrl + c`
-If your snake hits any part of the border your game automatically exits and you have to start it again.

*Do keep in mind that your snake dies if its idle for more than **10** seconds. After that you have to exit yourself and restart the game.*

# Hope you enjoy this simple yet fun game!


