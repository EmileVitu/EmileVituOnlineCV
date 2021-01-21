/* Here starts the JavaScript code for EmileVituOnlineCV */



		/* First the scroll function to navigate through chapters */
	/* First we declare variables */
var winHeight = window.innerHeight,
	chapters = document.getElementsByClassName('chapter'),
	currentChapter = 0;
	/* Then the event listeners (second one for firefox) */
window.addEventListener('mousewheel', function(e) {
	scrollChapters(e.wheelDelta);
});
window.addEventListener('DOMMouseScroll', function(e) {
	scrollChapters(-1 * e.detail);
});
	/* Finally the function */
function scrollChapters(delta) {
	var direction = (delta > 0) ? 'up' : 'down',
		currentChapterOffset = currentChapter * winHeight*2;
	if (direction == 'down' && currentChapter <= chapters.length - 2) {
		window.scrollTo(0, currentChapterOffset + winHeight*2);
		currentChapter++;
	} 
	else if (direction == 'up' && currentChapter > 0) {
		window.scrollTo(0, currentChapterOffset - winHeight*2);
		currentChapter--;
	}
/* We'll have to remove the console.log at the end */
  console.log(currentChapter);
}


		/* The scroll progress bar function */
function updateProgress(num1, num2){
	var percent = Math.ceil( num1 / num2 * 100 ) + '%';
	document.getElementById('progress').style.width = percent;
}
	/* Here is the eventlistener */
window.addEventListener('scroll', function(){
	var top = window.scrollY;
	var height = document.body.getBoundingClientRect().height - window.innerHeight;
	updateProgress(top, height);
});
		
		/* Now the copy function */
function copyToClipboard(element) {
	var $temp = $("<input>");
	$("body").append($temp);
	$temp.val($(element).text()).select();
	document.execCommand("copy");
	$temp.remove();
}






	/* This will be read only when the web browser has loaded the whole page */
window.onload=function(){
		/* Now we can apply this function to the next button */
	var nextChapter = document.getElementById('nextChapter');
	nextChapter.onclick = function () {
		var currentChapterOffset = currentChapter * winHeight*2;
		window.scrollTo(0, currentChapterOffset + winHeight*2);
		currentChapter++;
	/* We'll have to remove the console.log at the end */
		console.log(currentChapter);
	};
		/* As well as to the previous button */
	var prevChapter = document.getElementById('prevChapter');
	prevChapter.onclick = function () {
		var currentChapterOffset = currentChapter * winHeight*2;
		window.scrollTo(0, currentChapterOffset - winHeight*2);
		currentChapter--;
	/* We'll have to remove the console.log at the end */
		console.log(currentChapter);
	};
			/* Here is the scroll back to top code and the removal of the navigation buttons when necessary */
		/* First we get the button */
	var toTopButton = document.getElementById("scrollToTopButton");
		/* When scrolled down 20px from the top of the document, show the button */
	window.onscroll = function() {scrollFunction(), scrollFunction2()};
		/* Now to define the function and remove the previous button when in top of the page */
	function scrollFunction() {
		if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
			toTopButton.style.display = "block";
			prevChapter.style.display = "block";
		}
		else {
			toTopButton.style.display = "none";
			prevChapter.style.display = "none";
		}
	}

		/* Now to remove the next button when in the bottom of the page */
	function scrollFunction2(){
	var totalPageHeight = document.body.scrollHeight;
	var scrollPoint = window.scrollY + window.innerHeight;
		if (scrollPoint >= totalPageHeight) {
			nextChapter.style.display = "none";
		}
		else {
			nextChapter.style.display = "block";
		}
	}
	
		/* Now the requestAnimationFrame method applied to a variable */
	/* We also have a fallback function that waits one 60th of a second before it callsback */
var scroll = window.requestAnimationFrame || function(callback){ 
	window.setTimeout(callback, 1000/60)
};
	/* Next we set a variable for all the elements with the 'show-on-scroll' class */
var elementsToShow = document.querySelectorAll('.show-on-scroll');
	/* It will return all the elements we are looking for and return them in an array */
	/* Now we can have a function that loops in that array */
function loop() {
	elementsToShow.forEach(function (element){
	/* With the loop we check if they are in the viewport */
		if (isElementInViewport(element)) {
			element.classList.add('is-visible');
		}
	/* If they are we can add to them the class 'is-visible' and if ot we remove them */
		else {
			element.classList.remove('is-visible');
		}
	});
	scroll(loop);
}
	/* Now we call the loop for the first time */
loop();
	/* Helper function from: http://stackoverflow.com/a/7557433/274826 */
function isElementInViewport(el) {
	/*  */
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}
}




	/* When the button is clicked, scrolls to the top of the document */
function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
	/* Must not forget to set currentChapter to 0 to avoid conflicts with the scroll function */
	currentChapter = 0;
/* We'll have to remove the console.log at the end */
	console.log(currentChapter);
}









/* We'll have to remove the console.log at the end */
console.log('Everything seems to be working for now');


/* Johnny's advice
document.getElementsByClassName("chapter")[currentChapter].scrollIntoView()*/

















/* End of the EmileVituOnlineCV JavaScript code */