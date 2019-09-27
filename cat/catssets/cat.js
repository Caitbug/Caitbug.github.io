var eyeHeight = 0;
var leftEye = $("#Left_Pupil-2");
var rightEye = $("#Right_Pupil-2");
var y = 0;
var x = 0;
$(document).ready(function() {
  eyeHeight = leftEye.offset().top;
});

$(document).mousemove(function(event) {
  var halfway = $(".content").width() / 2;
  var x = (leftEye.offset().left) + (15);
  var coords = $(".coords");

  var rad = Math.atan2(event.pageX - x, event.pageY - y);
  var rot = (rad * (180 / Math.PI) * -1) + 180;

  var xCoords = -(halfway - event.pageX);

  if (event.pageY < eyeHeight && event.pageY - eyeHeight < -10) {
    y = -11;
  } else if (event.pageY - eyeHeight > 15) {
    y = 10;
  } else {
    y = (event.pageY - eyeHeight);
  }

  var yCoords = (event.pageY);
  var x = xCoords / 10;
  if (x > 12) {
    x = 12
  }
  if (x < -20) {
    x = -20
  }
  var rightX = x + 7;
  if ((xCoords / 10) < 2 && (xCoords / 10) > -2) {
    x = 12;
    rightX = -x;
  }
  leftEye.css({
    'transform': 'translate(' + x + 'px, ' + y + 'px)'
  });
  rightEye.css({
    'transform': 'translate(' + (rightX) + 'px, ' + y + 'px)'
  });
});
