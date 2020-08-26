$(document).ready(function(){                                 //Program 1
	$("#btnBackground").click(function(){
				console.log("clicked");
				var red = Math.floor(Math.random() * 255) + 1;
				var green = Math.floor(Math.random() * 255) + 1;
				var blue = Math.floor(Math.random() * 255) + 1;
				var bgcolor =  "rgb("+red+", "+green+", "+blue+")";
				$("#example1Container").css("background-color",bgcolor);
			});



	$("#Explanation1").click(function()
			{
				$("#CodeExplanation1").animate({
					height: 'toggle'
				})

			});

	$("#appendbtn").click(function(){                            // Program 3
				$("#example2Container").append("<h5 class='ex4'>I am new here</h5>")
			});

		$("#removebtn").click(function(){
			console.log("remove btn");
			$(".ex4:nth(0)").remove();
		});

	$("#Explanation2").click(function()
			{
				$("#CodeExplanation2").animate({
					height: 'toggle'
				})

			});


$("#btnToggleImage").click(function()                    // Program 3
			{
				$("#imgToggleImage").animate({
					height: 'toggle'
				})

			});

$("#Explanation3").click(function()
			{
				$("#CodeExplanation3").animate({
					height: 'toggle'
				})

			});

	});


	
		