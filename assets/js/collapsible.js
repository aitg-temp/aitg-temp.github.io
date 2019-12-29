var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var matter = this.nextElementSibling;
    if (matter.style.maxHeight){
      matter.style.maxHeight = null;
    } else {
      matter.style.maxHeight = matter.scrollHeight + "px";
    } 
  });
}