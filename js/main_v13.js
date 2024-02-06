$(document).ready(function(){
	prepareCarousel('.carousel-hero');
	prepareCarousel('.carousel-feature1');
	prepareCarousel('.carousel-feature2');
	prepareCarousel('.carousel-feature3');
	prepareCarousel('.carousel-feature4');
	prepareCarousel('.carousel-feature5');
	prepareCarousel('.carousel-feature6');
	updateDownloadButtons();
});

function prepareCarousel(name) {
	var initialSlide = 0;
	if (iPad()) {
		initialSlide = 1;
	} else if (iPhone()) {
		initialSlide = 2;
	}
    $(name).slick({
	  dots: true,
	  initialSlide: initialSlide,
	  lazyLoad: 'progressive'
    });
	$(name).on("click", function(){
	  $(name).slick("slickNext");
	});
}

function updateDownloadButtons() {
	if (iOS()) {
		$('.getit-download-button1').hide();
		$('.getit-availability1').hide();
		$('.cta-download-button1').hide();
		$('.cta-availability1').hide();
	} else {
		$('.getit-download-button2').hide();
		$('.getit-availability2').hide();
		$('.cta-download-button2').hide();
		$('.cta-availability2').hide();
	}	
}

// function updateDownloadButtons() {
// 	if (iOS()) {
// 		$('.getit-download-button1').css('box-ordinal-group', '2')
// 		$('.getit-download-button1').css('-webkit-box-ordinal-group', '2')
// 		$('.getit-download-button1').css('-moz-box-ordinal-group', '2')
//
// 		$('.getit-download-button1').css('box-ordinal-group', '3')
// 		$('.getit-download-button1').css('-webkit-box-ordinal-group', '3')
// 		$('.getit-download-button1').css('-moz-box-ordinal-group', '3')
// 		$('.getit-download-button1').hide()
//
// 		$('.getit-download-button3').css('box-ordinal-group', '1')
// 		$('.getit-download-button3').css('-webkit-box-ordinal-group', '1')
// 		$('.getit-download-button3').css('-moz-box-ordinal-group', '1')
//
// 		$('.getit-download-button3').css('margin-bottom', '0.8em')
// 		$('.getit-download-buttons').css('width', '320px')
//
// 		$('.cta-download-button1').css('box-ordinal-group', '3')
// 		$('.cta-download-button1').css('-webkit-box-ordinal-group', '3')
// 		$('.cta-download-button1').css('-moz-box-ordinal-group', '3')
//
// 		$('.cta-download-button2').css('box-ordinal-group', '4')
// 		$('.cta-download-button2').css('-webkit-box-ordinal-group', '4')
// 		$('.cta-download-button2').css('-moz-box-ordinal-group', '4')
//
// 		$('.cta-download-button3').css('box-ordinal-group', '2')
// 		$('.cta-download-button3').css('-webkit-box-ordinal-group', '2')
// 		$('.cta-download-button3').css('-moz-box-ordinal-group', '2')
//
// 		$('.cta-download-button4').css('box-ordinal-group', '1')
// 		$('.cta-download-button4').css('-webkit-box-ordinal-group', '1')
// 		$('.cta-download-button4').css('-moz-box-ordinal-group', '1')
//
// 		$('.cta-download-button4').css('margin-bottom', '0.8em')
// 		$('.cta-download-button2').css('margin-bottom', '2.5em')
// 	}
// }
	
function goToCommmunity() {
	goToLink('https://agenda.community');
}

function goToYouTube() {
	goToLink('https://youtube.com/c/AgendaApp');
}

function goToLink(link) {
	window.location.href = link;
}

function stopVideos() {
	$('.ytvideo').each(function(){
		this.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
	});
}

function showWhatsNew() {	
	$("#whatsnewmovie").html('<iframe id="ytplayer" class="ytvideo" src="https://www.youtube.com/embed/NAm3h7Ne8Xk?enablejsapi=1&autoplay=1&playsinline=0&cc_load_policy=1&origin=https://agenda.com" title="See what is new in Agenda 16" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
	$("#whatsnew").css({ opacity: 0.0 });
	$("#whatsnew").show();
	$("#whatsnew").animate({
		opacity: 1.0
	  }, 200, function() {});
}

function hideWhatsNew() {
	stopVideos()
	$("#whatsnew").animate({
		opacity: 0.0
	  }, 200, function() {
	  	$("#whatsnew").hide();
	  });
}


function showInAction() {
	$("#inactionmovie").html('<iframe id="ytplayer" class="ytvideo" src="https://www.youtube.com/embed/8rU-lie5uvg?enablejsapi=1&autoplay=1&playsinline=0&start=274&cc_load_policy=1&origin=https://agenda.com" title="See Agenda in Action" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
	$("#inaction").css({ opacity: 0.0 });
	$("#inaction").show();
	$("#inaction").animate({
		opacity: 1.0
	  }, 200, function() {});
}

function hideInAction() {
	stopVideos()
	$("#inaction").animate({
		opacity: 0.0
	  }, 200, function() {
	  	$("#inaction").hide();
	  });
}

function startDownload() {
	if (iOS()) {
		var subject = "Download Agenda for Mac, A new take on Notes"
		var body = "Note to self when I am back at my Mac:\nDownload Agenda from https://downloads.agenda.com/Agenda.zip.\n\n(I found that link on agenda.com. They have an iOS version in the works too.)"
		window.location.href = "mailto:?subject=" + escape(subject) + "&body=" + escape(body);
	} else {
		$('body').append('<iframe class="download" src="https://downloads.agenda.com/Agenda.zip" style="visibility: hidden; position: absolute;" width="0" height="0"></iframe>');
		setTimeout(scheduleMailingPopup(), 200);
	}
}

function scheduleMailingPopup() {
	setTimeout(showMailingPopUp(), 100);
}

function showMailingPopUp() {
	document.cookie = 'MCPopupClosed=no;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC;';
	document.cookie = 'MCPopupSubscribed=no;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC;';
	require(["mojo/signup-forms/Loader"], function(L) { L.start({"baseUrl":"mc.us17.list-manage.com","uuid":"eebe9ef1998a6474d6030f9bd","lid":"6980ed3c83"}) })
	document.cookie = 'MCPopupClosed=no;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC;';
	document.cookie = 'MCPopupSubscribed=no;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC;';
}

function showMenu() {
	$("#menu").css({ opacity: 0.0 });
	$("#menu").show();
	$("#menu").animate({
		opacity: 1.0
	  }, 200, function() {});
}

function hideMenu() {
	$("#menu").animate({
		opacity: 0.0
	  }, 200, function() {
	  	$("#menu").hide();
	  });
}

function iOS() {
  var iDevices = [
    'iPad Simulator',
    'iPhone Simulator',
    'iPod Simulator',
    'iPad',
    'iPhone',
    'iPod'
  ];

  if (!!navigator.platform) {
    while (iDevices.length) {
      if (navigator.platform === iDevices.pop()){ return true; }
    }
  }

  // iPad -- https://stackoverflow.com/questions/57776001/how-to-detect-ipad-pro-as-ipad-using-javascript
  if (navigator.maxTouchPoints && navigator.maxTouchPoints > 2 && /MacIntel/.test(navigator.platform)) { 
	  return true; 
  }
  
  return false;
}

function iPad() {
  var iDevices = [
    'iPad Simulator',
    'iPad',
  ];

  if (!!navigator.platform) {
    while (iDevices.length) {
      if (navigator.platform === iDevices.pop()){ return true; }
    }
  }
  
  // iPad -- https://stackoverflow.com/questions/57776001/how-to-detect-ipad-pro-as-ipad-using-javascript
  if (navigator.maxTouchPoints && navigator.maxTouchPoints > 2 && /MacIntel/.test(navigator.platform)) { 
	  return true; 
  }

  return false;
}

function iPhone() {
  var iDevices = [
    'iPhone Simulator',
    'iPhone',
  ];

  if (!!navigator.platform) {
    while (iDevices.length) {
      if (navigator.platform === iDevices.pop()){ return true; }
    }
  }

  return false;
}

function toggleLight() {
	var currentSlide = $(".carousel-hero").slick("slickCurrentSlide");
	
	$("#switch").html('<img src="/img/switch-light.gif">');
	$("#switch").attr("onclick","toggleDark()");

	$(".carousel-hero").slick("slickAdd",'<div class="slide"><img src="img/hero-mac.png" alt="Screenshot Mac"></div>');
	$(".carousel-hero").slick("slickAdd",'<div class="slide"><img src="img/hero-ipad.png" alt="Screenshot iPad"></div>');
	$(".carousel-hero").slick("slickAdd",'<div class="slide"><img src="img/hero-iphone.png" alt="Screenshot iPhone"></div>');
	
	$(".carousel-hero").slick("slickRemove", 0, false);
	$(".carousel-hero").slick("slickRemove", 0, false);
	$(".carousel-hero").slick("slickRemove", 0, false);
	
 	$(".carousel-hero").slick("slickGoTo", currentSlide);
}

function toggleDark() {
	var currentSlide = $(".carousel-hero").slick("slickCurrentSlide");
	
	$("#switch").html('<img src="/img/switch-dark.gif">');
	$("#switch").attr("onclick","toggleLight()");

	$(".carousel-hero").slick("slickAdd",'<div class="slide"><img src="img/hero-mac-dark.png" alt="Screenshot Mac"></div>');
	$(".carousel-hero").slick("slickAdd",'<div class="slide"><img src="img/hero-ipad-dark.png" alt="Screenshot iPad"></div>');
	$(".carousel-hero").slick("slickAdd",'<div class="slide"><img src="img/hero-iphone-dark.png" alt="Screenshot iPhone"></div>');
	
	$(".carousel-hero").slick("slickRemove", 0, false);
	$(".carousel-hero").slick("slickRemove", 0, false);
	$(".carousel-hero").slick("slickRemove", 0, false);
	
 	$(".carousel-hero").slick("slickGoTo", currentSlide);

}

/* Typewriter effect from https://www.w3schools.com/howto/howto_js_typewriter.asp */
var i = 0;
var reminders_title_part1 = 'Agenda + Reminders'; 
var reminders_title_part2 = ' \\remind(today)';
var speed = 75; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
    if (i < reminders_title_part1.length) {
	   $("#reminders").html('<span style="color:rgb(0, 0, 0)">' + reminders_title_part1.substring(0, i + 1) + '</span>');
       i++;
       setTimeout(typeWriter, speed);;
    } else {
	   i = 0
       setTimeout(typeWriter_part2, 300);
    }
}

function typeWriter_part2() {
    if (i < reminders_title_part2.length) {
	   $("#reminders").html('<span style="color:rgb(0, 0, 0)">' + reminders_title_part1 + '</span>' + '<span style="color:rgb(255, 255, 255)">' + reminders_title_part2.substring(0, i + 1) + '</span>');
       i++;
       setTimeout(typeWriter_part2, speed);
    }
}

function typeWriter_end() {
    $("#reminders").html('<span style="color:rgb(0, 0, 0)">' + reminders_title_part1 + '</span>');
	i = 0;
}
