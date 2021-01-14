/* The JavaScript for EmileVituOnlineCV */

//import './EmileVituOnlineCV.html';


//So first we will need the code to do what annelyse wants

//Then we need an infinite scroll

//We probably will be needing some buttons as well to go back up to the top of the page

	/* The copy function */
function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}









console.log('Everything seems to be working for now');