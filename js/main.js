jQuery(document).ready(function (e) {
    function t(t) {
        e(t).bind("click", function (t) {
            t.preventDefault();
            e(this).parent().fadeOut()
        })
    }
    e(".dropdown-toggle").click(function () {
        var t = e(this).parents(".button-dropdown").children(".dropdown-menu").is(":hidden");
        e(".button-dropdown .dropdown-menu").hide();
        e(".button-dropdown .dropdown-toggle").removeClass("active");
        if (t) {
            e(this).parents(".button-dropdown").children(".dropdown-menu").toggle().parents(".button-dropdown").children(".dropdown-toggle").addClass("active")
        }
    });
    e(document).bind("click", function (t) {
        var n = e(t.target);
        if (!n.parents().hasClass("button-dropdown")) e(".button-dropdown .dropdown-menu").hide();
    });
    e(document).bind("click", function (t) {
        var n = e(t.target);
        if (!n.parents().hasClass("button-dropdown")) e(".button-dropdown .dropdown-toggle").removeClass("active");
    })
});

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
}

$('.slider__slide-img').slick({
    infinite: true,
    centerMode: true,
    variableWidth: true,
    slidesToShow: 1,
    arrows: false,
    dots: true,
    autoplay: true,
	autoplaySpeed: 3000
});

jQuery(document).ready(function($) {  
    $(window).scroll(function(){
        if  ($(window).scrollTop() > 150)
            $('#header--sticky').animate({'top':'100px'},400);
            else
            $('#header--sticky').stop(true).animate({'top':'-130px'},300);   
        });
});

// $(function(){
//     $(".carousel-inner").slick({
//       autoplay: true,
//       speed: 1000,
//       arrows: true,
//       infinite: true,
//       asNavFor: ".carousel-indicators list-inline",
//       prevArrow: '<button class="slick-prev"> < </button>',
//     nextArrow:'<button class="slick-next"> > </button>'
//     });
//     $(".carousel-indicators list-inline").slick({
//     asNavFor: "#slider",
//       slidesToShow: 5,
//       speed: 1000,
//       arrows: false,
//       focusOnSelect: true
//     });
// });  

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 19,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });

  $(document).ready(function(){
    var rating = $('#rating-container > .rating-circle');
    var current_rating = [0,0,0,0,0];
    var setRating = function(th) {
      th.prevAll().addBack().addClass('rating-chosen');
      current_rating = [0,0,0,0,0];
      rating.filter('.rating-chosen').each(function(index) {
        current_rating[index] = 1;
      });
    };
    var resetToCurrent = function() {
      cleanRate();
      $.each(current_rating, function(index) {
        if (current_rating[index] === 1) {
          rating.filter(':eq(' + index + ')').addClass('rating-chosen');
        }
      });
    };
    var cleanRate = function() {
      rating.each(function(index) {
        $(this).removeClass('rating-hover');
        $(this).removeClass('rating-chosen');
      });
    };
    $('.rating-circle').hover(
      function() {
        cleanRate();
        $( this ).prevAll().addBack().addClass('rating-hover');
      }, function() {
        resetToCurrent();
      });
    $('.rating-circle').click(
      function() {
        setRating($(this));
      });
  });
  
  window.addEventListener("DOMContentLoaded", function () {
  
    var form = document.getElementById("my-form");
    var status = document.getElementById("status");
  
  
    function success() {
      form.reset();
      status.classList.add("success");
      status.innerHTML = "Thanks!";
    }
  
    function error() {
      status.classList.add("error");
      status.innerHTML = "Oops! There was a problem.";
    }

  
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });
  });
  
  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }

  function openPost(evt, cityName) {
    var tabContent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
    }
    
    var tabLinks =  document.getElementsByClassName("tablinks");
    for (let i = 0; i < tabLinks.length; i++) {
      tabLinks[i].className = tabLinks[i].className.replace("active", "");
    }  
    
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += "_active";
  }
  
  $('.language').each(function () {
    $(this).find('> .select').on('click', function () {
      $(this).next().slideToggle();
    });
    $(this).find('.option').on('click', function () {
      $('.language > .select').html($(this).html()).next().slideUp();
    });
  });