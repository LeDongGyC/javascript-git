function toggleMenu() {
    const horizontalMenu = document.querySelector(".horizontal-menu");
    const verticalMenu = document.querySelector(".vertical-menu");
    const menuToggleBtn = document.querySelector(".menu-toggle");
    const closeBtn = document.querySelector(".close-btn");
  
    menuToggleBtn.addEventListener("click", () => {
      horizontalMenu.style.display = "none";
      verticalMenu.style.display = "block";
    });
  
    closeBtn.addEventListener("click", () => {
      horizontalMenu.style.display = "flex w";
      verticalMenu.style.display = "none";
    });
  }
  
  // Gọi hàm khi trang tải xong
  window.onload = () => {
    // 768px là width tương ứng với điểm bắt đầu responsive
    if (window.innerWidth <= 768) {
      toggleMenu();
    }
  };
  
  // Xử lý sự kiện khi cửa sổ trình duyệt thay đổi kích thước (responsive)
  window.onresize = () => {
    if (window.innerWidth <= 768) {
      toggleMenu();
    } else {
      const horizontalMenu = document.querySelector(".horizontal-menu");
      const verticalMenu = document.querySelector(".vertical-menu");
      horizontalMenu.style.display = "flex";
      verticalMenu.style.display = "none";
    }
  };