document.addEventListener("DOMContentLoaded", () => {
    const hamburgerBtn = document.getElementById("hamburger-btn");
    const sidebar = document.getElementById("sidebar");
    const navLinks = document.querySelectorAll(".nav-link");
    const pages = document.querySelectorAll(".page");

    
    function toggleMenu() {
        hamburgerBtn.classList.toggle("open");
        sidebar.classList.toggle("open");
    }

    
    hamburgerBtn.addEventListener("click", toggleMenu);

   
    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault(); 
            
           
            navLinks.forEach(l => l.classList.remove("active"));
            this.classList.add("active");

            
            pages.forEach(page => page.classList.remove("active"));

           
            const targetId = this.getAttribute("data-target");
            document.getElementById(targetId).classList.add("active");

            
            if (window.innerWidth < 768) {
                toggleMenu();
            }
        });
    });

});
