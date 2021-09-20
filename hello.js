/**
 * This method smooth the scrooling when a link is clicked
 * 
 */
function scrollSmooth(info) {
  console.log(info);
  var offset = document.querySelector("#" + info).offsetTop;

  scroll({
    top: offset - 100,
    behavior: "smooth",
  });
}
