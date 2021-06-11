const setActive = (event)=> {
     let elements = document.getElementsByClassName("nav-link")
     if (event.target.className != "nav-link active") {
          for (var i=0;i<elements.length;i++) {
               elements[i].classList.remove('active')
          } 
          event.target.className = "nav-link active"
     }
}

const setHover = ()=> {
     let elements = document.getElementsByClassName("item-child")
     if (event.target.className != "shadow-lg bg-white") {
          for (var i=0;i<elements.length;i++) {
               elements[i].classList.remove('shadow-lg')
               elements[i].classList.remove('bg-white')
               elements[i].classList.remove('active')
          } 
          event.target.classList.add("active")
          event.target.classList.add('shadow-lg')
          event.target.classList.add('bg-white')
     }
}

$('.slick-first').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});

$('.slick-second').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});