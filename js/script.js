'use strict'

window.addEventListener("scroll", Animation);
            function Animation()
            {
                $("#anim:visible").addClass("animated fadeInLeft");
                
            }

            window.addEventListener("scroll", Animation1);
            function Animation1()
            {
                $("#anim1:visible").addClass("animated fadeInLeft");
                
            }

            window.addEventListener("scroll", Animation2);
            function Animation2()
            {
                $("#anim2:visible").addClass("animated fadeInRight");
                
            }
          