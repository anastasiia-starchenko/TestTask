            $( document ).ready(function() {
              $('#carousel').slick({
                  centerMode: true,
                  slidesToShow: 3,
                  variableWidth: true,
                  responsive: [
                    {
                      breakpoint: 768,
                      settings: {
                        arrows: true,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 3
                      }
                    },
                    {
                      breakpoint: 480,
                      settings: {
                        arrows: true,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 1
                      }
                    }
                  ]
                });
                                
          
              $('.blog-items').slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                responsive: [
                    {
                      breakpoint: 415,
                      settings: {
                        infinite: true,
                        slidesToShow: 1,
                        slidesToScroll: 1
                      }
                    }
                  ]
                });
                                
            
              $('#insta-carousel').slick({
                infinite: true,
                slidesToShow: 6,
                slidesToScroll: 3,
                responsive: [
                    {
                      breakpoint: 1025,
                      settings: {
                        infinite: true,
                        slidesToShow: 4,
                        slidesToScroll: 2
                      }
                    },
                    {
                      breakpoint: 769,
                      settings: {
                        infinite: true,
                        slidesToShow: 3,
                        slidesToScroll: 3
                      }
                    }
                  ]
                });
                                
            });
        
        
            let menu = document.querySelector("#menu-button");
            let header = document.querySelector("#header");
            menu.onclick = function() {
                header.classList.toggle("menu-open");
            }
        
       