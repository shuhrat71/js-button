var index = 0;

function changeColors() {
  var colors = ["black"];

  document.getElementsByTagName("body")[0].style.background = colors[index++];

  if (index > colors.length - 1) index = 0;
}
function changeColors2() {
  var colors = ["white"];

  document.getElementsByTagName("body")[0].style.background = colors[index++];

  if (index > colors.length - 1) index = 0;
}
