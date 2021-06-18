const setDropdown = (event)=> {
  let elements = document.querySelectorAll("#faq .item");
  if (event.target.className != "item active") {
    for (var i=0;i<elements.length;i++) {
         elements[i].classList.remove('active')
    } 
    event.target.classList.add("active");
  }
  else {
    event.target.classList.remove("active");
  }
}
