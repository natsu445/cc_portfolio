const toggleButton = document.getElementById('toggleButton');
    const list = document.querySelector('.nav');
    
    toggleButton.addEventListener('click', function() {
      list.classList.toggle('show-list'); // 切換顯示清單的類別
    });

