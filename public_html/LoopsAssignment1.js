/* 
 * Display the numbers from 0 to 1000 by 10's
 * 0, 10, 20, 30, ... 1000
 */

document.write("This program displays the numbers 0 to 1000 by 10's");

let counter = 10;
while (counter <= 1000) {
    document.write(counter + "<br>");
    counter = counter + 10;
}
document.write("Goodbye");