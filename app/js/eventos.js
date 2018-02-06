
$("#cancelButton").on('click', function () {
	window.close();
});

$("#nextButton").on('click', function() {
	if (_step == 1)
	{
		_step = 2
		$("#step1").removeClass("active");
		$("#step1").find('span').css("display", "none");
		$("#step2").addClass("active");
		$("#step2").css("display", "block");
		$("#backButton").css("display", "block");

	}
	else if (_step == 2)
	{
		_step = 3;

		$("#step1").removeClass("active");
		$("#step1").find('span').css("display", "none");

		$("#step2").removeClass("active");
		$("#step2").find('span').css("display", "none");
		
		$("#step3").addClass("active");
		$("#step3").css("display", "block");
	}
});

$("#backButton").on('click', function () {
	if (_step == 2)
	{
		_step = 1;

		$("#step1").addClass("active");
		$("#step2").find('span').prop("data-feather", "arrow-right-circle");

		$("#step2").removeClass("active");
		$("#step2").find('span').css("display", "none");
		$("#step2").css("display", "none");

		$("#backButton").css("display", "none");

	}
	else if (_step == 3)
	{
		_step = 2;

		$("#step3").removeClass("active");
		$("#step3").find('span').prop("data-feather", "");
		$("#step3").css("display", "none");

		$("#step2").addClass("active");
		$("#step2").find('span').prop("data-feather", "arrow-right-circle");
		$("#step2").css("display", "block");
	}
});
