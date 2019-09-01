let next = $(".next");
let prev = $(".prev");
let index = 0;

let app_data = [
  {
    image: "images/software-development.svg",
    title: "Software Development",
    desc:
      "Fed up of doing work in old style. Come to us to see the difference.",
    link: "software-development.html"
  },
  {
    image: "images/web-designing.svg",
    title: "Web Designing",
    desc:
      "Responsive sites, Cutomized designs, security, wide variety of designs to choose from.",
    link: "web-designing.html"
  },
  {
    image: "images/erp-solutions.svg",
    title: "ERP Solutions",
    desc:
      "Provides best realtime solution for Schools, Colleges, Hotels, Shops, Malls etc. which includes Record Management, Account Management.",
    link: "erp-solutions.html"
  },
  {
    image: "images/web-hosting.svg",
    title: "Web Hosting",
    desc:
      "Highly secured space available for PHP, .net, HTML, JSP. Full maintenance and data security.",
    link: "web-hosting.html"
  },
  {
    image: "images/bulk-sms.svg",
    title: "Bulk SMS service",
    desc:
      "Provides API's, multilingual SMS, both DND and Non-DND SMS. An easy and fast procedure to start your service.",
    link: "bulk-sms.html"
  },
  {
    image: "images/app-development.svg",
    title: "App Development",
    desc:
      "Design and develop cutomized apps to provide best interactive feel for the users.",
    link: "app-development.html"
  }
];

function $(e) {
  // selects element on the page.
  return document.querySelector(e);
}

function toggleView() {
  // toggle the view
  $("main").classList.add("fade-out");
  setTimeout(function() {
    $("main").classList.remove("fade-out");
  }, 500);
}

// initial state
$(".illustration > img").setAttribute("src", app_data[0].image);
$(".content__title").textContent = app_data[0].title;
$(".content__desc").textContent = app_data[0].desc;
$(".content-data > a").setAttribute("href", app_data[0].link);

// next button
next.addEventListener(
  "click",
  () => {
    if (index >= 0 && index < app_data.length - 1) {
      toggleView();
      setTimeout(function() {
        $(".illustration > img").setAttribute("src", app_data[index].image);
        $(".content__title").textContent = app_data[index].title;
        $(".content__desc").textContent = app_data[index].desc;
        $(".content-data > a").setAttribute("href", app_data[index].link);
      }, 500);
      index++;
    }
  },
  false
);

// previous button
prev.addEventListener(
  "click",
  () => {
    if (index > 0 && index <= app_data.length) {
      toggleView();
      setTimeout(function() {
        $(".illustration > img").setAttribute("src", app_data[index].image);
        $(".content__title").textContent = app_data[index].title;
        $(".content__desc").textContent = app_data[index].desc;
        $(".content-data > a").setAttribute("href", app_data[index].link);
      }, 500);
      index--;
    }
  },
  false
);

// vision
const vision_video = $("#vision");
vision_video.playbackRate = 0.5; // sets video playback rate

let vision_data = [
  { vision: "Customer satisfaction is our main motive" },
  {
    vision:
      "We believe in customizing products in terms of Functionality and Design rather than just Coding"
  },
  { vision: "We always stand by our commitments" },
  {
    vision:
      "Company's overall working is bound by Rules and Regulations which are redefined by time and again by the authorities."
  }
];

let slideIndex = 0;
showSlides();

function showSlides() {
  let visions = $(".vision__text > p");

  for (let i = 0; i < vision_data.length; i++) {
    visions.textContent = `"${vision_data[slideIndex].vision}"`;
  }

  slideIndex++;

  if (slideIndex >= vision_data.length) {
    slideIndex = 0;
  }

  setTimeout(showSlides, 5000); // Change image every 5 seconds
}


// AOS initialization
AOS.init();