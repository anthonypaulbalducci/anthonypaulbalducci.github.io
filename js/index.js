var displayResume = false;

function showResume() {
  if (!displayResume) {
 $(".me").removeClass("teamPlayerFill");
 $(".me").addClass("teamPlayerFade");
  $(".resume").animate({
                left: '0%',
            }, 900 );
    displayResume = true;
  } else {
     $(".me").removeClass("teamPlayerFade");
     $(".me").addClass("teamPlayerFill");
    
  $(".resume").animate({
                left: '150%',
            }, 900 );
    displayResume = false;
  }
}