// trivia with multiple choice or true/false options
// timed answers - game ends when time ends
// display correct and incorrect answers at the end
// only one answer per questions
// counterdown timer
// advanced - time each questions

// use nerd hangman for trivia

// Start function
//Trivia Questions
// Timer
// win/lose counter

// jquery
// document.onready = function(){
	window.onload = function () {

// Variables
var wins = 0;
var losses = 0;
var trivia = [
{	questions: "Written by Warren Ellis, this webcomic takes place in post-apocalyptic Whitechapel",
	answers: ["Freakangels", "Ava's Demon", "Wilde Life", "Monstress"],
	correctAns: "Freakangels"
},
{	questions: "This Tabletop RPG was created by Luke Crane, designed to make you cry",
	answers: ["Dungeons and Dragons", "Call of Cthulhu", "Burning Wheel", "Warhammer Forty K"],
	correctAns: "Burning Wheel"
},
{	questions: "Marjorie Liu, this graphic novel takes place in an alt-Asia where magic runs wild",
	answers: ["Freakangels", "Monstress", "Rat Queens", "Morning Glories"],
	correctAns: "Monstress"
},
{	questions: "This Tabletop RPG is a space odyssey focused on military tactics",
	answers: ["Apocolypse World", "Warhammer Forty K", "Everyone is John", "Fung Shui"],
	correctAns: "Warhammer Forty K"
},
{	questions: "Written by Kurtis Wiebe, this graphic novel features an all female adventuring party",
	answers: ["Monstress", "Rat Queens", "Morning Glories", "Scott Pilgrim"],
	correctAns: "Rat Queens"
},
{	questions: "Set after a catastrophic event, this RPG puts an emphasis on collective storytelling",
	answers: ["Dungeons and Dragons", "Call of Cthulhu", "Apocolypse World", "Burning Wheel"],
	correctAns: "Apocolypse World"
},
{	questions: "Written by Nick Spencer, this strange graphic novel revolves around a group of students stuck in a sadistic boarding school",
	answers: ["Rat Queens", "Morning Glories", "Scott Pilgrim", "The Sandman"],
	correctAns: "Morning Glories"
},
{	questions: "Written by Bryan Lee OMalley, this graphic novel was later turned into a movie about a slacker trying to level up in the world",
	answers: ["Morning Glories", "Scott Pilgrim", "The Sandman", "Lucifer"],
	correctAns: "Scott Pilgrim"
},]

// window.onload = function () {

$("#start").click(function(){
	setInterval(oneSecond, 1000);
	setInterval(tenSeconds, 10000);	
	$("#trivia").text(trivia[0].questions);
	$("#choices1").html("blue");
	$("#choices2").text(trivia[0].answers[1]);
	$("#choices3").text(trivia[0].answers[2]);
});

// };

// var countdown = new minute("00:04:00").getTime();

// var x = setInterval(function() {
// 	var now = new minute().getTime();
// 	var distance = countdown - now;
// 	var minutes = Math.floor((distance % (1000 * 240))/(1000 * 60));
// 	var seconds = Math.floor((distance % (1000 * 60))/ 1000);
// 	$("#display").html("minutes + 'm' + seconds + 's '")
// })




// setTimeout(oneMinute, 1000 * 60);
// setTimeout(twoMinutes, 1000 * 120);
// setTimeout(threeMinutes, 1000 * 180);
// setTimeout(timeUp, 1000 * 240);

var tens = 0;
var seconds = 0;
// Functions
// timerfunctions
function oneSecond () {
	$("#secs").text(seconds);
	seconds += 1;
	console.log(oneSecond);
	if (seconds > 9){
		seconds = 0;
	}
};

function tenSeconds () {
	$("#tens").text(tens);
	tens += 1;
	console.log(tenSeconds);
	if (tens > 6){
		tens = 0;
	}
};
// function oneMinute() {
// 	$("#time-left").html("<h3>Three Minutes Left!</h3>");
// 	console.log(oneMinute);
// }
// function twoMinutes(){
// 	$("#time-left").html("<h3>Two Minutes Left!</h3>");
// 	console.log(twoMinutes);
// }
// function threeMinutes(){
// 	$("#time-left").html("<h3>One Minute Left!</h3>");
// 	console.log(threeMinutes);
// }
// function timeUp() {
// 	$("#time-left").html("<h3>Time's Up!</h3>");
// 	console.log(timeUp);
// }
};