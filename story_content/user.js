window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  var progressBar = document.querySelector("[data-acc-text='progressBar']");

var player = GetPlayer();
var JS_totalSlidesInProject = player.GetVar("Course_Total");
var JS_currentSlide = player.GetVar("Course_Now");

var objectScale = (JS_currentSlide / JS_totalSlidesInProject) * 1;
var progressPercentage = Math.round(objectScale * 100); // Переводим objectScale в проценты

gsap.set(progressBar, {scaleX: objectScale, transformOrigin: "center left"});

// Устанавливаем значение переменной Progress в процентах
player.SetVar("Progress", progressPercentage.toString() + "%");

}

};
