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
          

            let boxes = document.querySelectorAll('.skillsBoxAnimation')
         
           let observer = new IntersectionObserver((entries)=>{
                entries.forEach(entry=>{
                    if(entry.intersectionRatio > 0){
                        entry.target.className += ` animated bounceInUp slow`
                     }
                     else{
                        entry.target.style.color = 'none'
                     }
                }) 
            })
            boxes.forEach(image => {
                observer.observe(image); 
            })

            
            let images = document.querySelectorAll('.skillsImageAnimation')

           let observer1 = new IntersectionObserver((entries)=>{
                entries.forEach(entry=>{
                   if (entry.intersectionRatio > 0){
                        entry.target.className += ` animated backInDown slow`
                     }
                     else{
                        entry.target.style.color = 'none'
                     }
                })
            })
     
            images.forEach(image => {
                observer.observe(image); 
            })