//$(document).ready(function(){

//});

var EightAM = $("#EightAM");
var NineAM = $("#NineAM");
var TenAM = $("#TenAM");
var ElevenAM = $("#ElevenAM");
var TwelvePM = $("#TwelvePM");
var OnePM = $("#OnePM");
var TwoPM = $("#TwoPM");
var ThreePM = $("#ThreePM");
var FourPM = $("#FourPM");
var FivePM = $("#FivePM");



var today = moment();
$("#currentDay").text(moment().format("dddd, MMMM, Do"));



function timeSlot(element, time) {
    if (time == timeCheck) {
        element.addClass("present");
    }
    else if (time <timeCheck) {
        element.addClass("past");
    }
    else (element.addClass("future"));
}

for (let index = 8; index < 18; index++) {
    const time = index;
    var element = $("#" + time)
    timeSlot(element,time);

}

//local storage
localStorage.setItem(EightAM);