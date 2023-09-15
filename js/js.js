//手機板導覽列



window.addEventListener("scroll", function() {
    const phone_nav = document.querySelector(".phone_nav");
    // const contentHeight = document.querySelector(".content").clientHeight;
  
    if (window.scrollY > 0) {
        phone_nav.classList.add("transparent");
    } else {
        phone_nav.classList.remove("transparent");
    }
  });
  


