const setActive = (event)=> {
     let elements = document.getElementsByClassName("nav-link")
     if (event.target.className != "nav-link active") {
          for (var i=0;i<elements.length;i++) {
               elements[i].classList.remove('active')
          } 
          event.target.className = "nav-link active"
     }
}