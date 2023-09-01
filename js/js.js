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
  







  //網頁版 woo

//   window.addEventListener('scroll', function() {
//     // 檢查是否滾動到你想要觸發 WOW.js 效果的位置
//     if (window.scrollY >= 200) { // 這是一個示例的閾值，請根據你的需求調整
//       wow.init(); // 啟動 WOW.js
//     }
//   });