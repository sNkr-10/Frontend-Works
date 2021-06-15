const setActive = (event)=> {
    let elements = document.getElementsByClassName("nav-link")
    if (event.target.className != "nav-link active") {
      for (var i=0;i<elements.length;i++) {
           elements[i].classList.remove('active')
      } 
      event.target.classList.add("active")
    }
}

const showMenu = ()=> { 
    let menu = document.querySelector(".side-menu")
    let button = document.querySelector("#spotlight header button")
    menu.classList.toggle("active")
    button.classList.toggle("active")
}

const removeMenu = ()=> { 
    let menu = document.querySelector(".side-menu")
    let button = document.querySelector("#spotlight header button")
    menu.classList.remove("active")
    button.classList.remove("active")

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


const setDropdown = (event)=> {
    let elements = document.getElementsByClassName("item-child")
    let arrow = document.querySelector("#services .middle .item .item-child i")
    if (event.target.className != "item-child p-xl-4 p-lg-3 p-sm-2 rounded d-flex flex-column justify-content-between align-items-center drop") {
        for (var i=0;i<elements.length;i++) {
             elements[i].classList.remove('drop')
        }
        event.target.classList.add("drop")
    }
    else {
        event.target.classList.remove("drop")
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
    }
  ]
});

$('.slick-third').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 9999,
        settings: "unslick"
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
});

 function form_validation() {
        var name = document.forms["RegForm"]["Name"];
        var email = document.forms["RegForm"]["EMail"];
  
        if (name.value == "") {
            window.alert("Please enter your name.");
            name.focus();
            return false;
        }
  
        if (email.value == "") {
            window.alert(
              "Please enter a valid e-mail address.");
            email.focus();
            return false;
        }
  
        return true;
    }