/**
 * @author Peterphobia
 */
/*
 * This is an array of all of our images (in order)
 */

var images = ["1.jpg", "2.jpg",  "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg"];
/* Index of the current image in our images array */
var index = 0;

/*set button events here*/
function setNav() {

	 /*console.log("setNav");
	*/
	$(".button").on("click", function() {

		var isNext = $(this).hasClass("next");
		console.log(isNext);

		if (isNext == true && index != (images.length-1)) {
		index = index + 1;
	}	else if (isNext == false && index > 0) {
		index = index - 1;
	}

	if (index == 0) {
		$(".button.prev").addClass("disabled");
	} else if (index == (images.length-1)) {
		$(".button.next").addClass("disabled");
	} else {
		$(".button").removeClass("disabled");
	}
		updateImage();

	}); /*End setNav function*/
}

/* change the image her */
function updateImage() {
	$(".image-holder").html(
		"<img src='images/"+images[index]+"'/>"
	);
}

$(document).ready(function() {
	/*
	 * target image-holder and write html within markup, then define source
	 * adding strings in a url format[??]
	 * "string/variable/string to put first image into image holder
	 */
	$(".image-holder").html(
		"<img src='images/"+images[index]+"'/>"
	);

	$(".button.prev").addClass("disabled");

		setNav();

});