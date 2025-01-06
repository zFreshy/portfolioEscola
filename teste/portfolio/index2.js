
   document.addEventListener("DOMContentLoaded", function () {
        
    // Variável global para rastrear o estado
let gsapInitialized = false;

// Função para inicializar a animação
function initializeGsapAnimation() {
    if (gsapInitialized) {
        return;
    }

    document.addEventListener("mousemove", (event) => {
        const layers = document.querySelectorAll(".parallax-wrapper > *");
        const { clientX, clientY } = event;
    
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
    
        layers.forEach((layer) => {
            const zIndex = parseInt(window.getComputedStyle(layer).zIndex, 10);
    
            if (zIndex === 1 || zIndex === 9) return; // Ignora camadas estáticas
    
            const isText = layer.tagName === "H1" || layer.tagName === "H2";
    
            // Velocidade: inversamente proporcional ao z-index (camadas inferiores se movem mais rápido)
            const speed = isText ? 0.02 : 1 / (zIndex / 0.9);
            const direction = isText ? -1 : 1; // Movimento inverso para textos
    
            const xOffset = direction * (clientX - centerX) * speed;
            const yOffset = direction * (clientY - centerY) * speed;
    
            layer.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
        });
    }); 











$(".scroll_wrap").each(function() {
    let headings = $(this).find(".scroll_heading_item");
    let paragraphs = $(this).find(".scroll_paragraph_item");
    let indexLength = headings.length - 1;
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: $(this),
            start: "top top",
            end: "bottom bottom",
            scrub: true
        }
    });
    tl.to(headings, {
        yPercent: -150 * indexLength,
        ease: "none"
    });

    let tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: $(this),
            start: "top top",
            end: "bottom bottom",
            scrub: true
        }
    });
    paragraphs.each(function(index) {
        if (index > 0) {
            tl2.set($(this), {
                display: "block"
            });
            tl2.from($(this), {
                opacity: 0,
                y: "2rem"
            });
        }
        if (index < indexLength) {
            tl2.to($(this), {
                opacity: 0
            });
            tl2.set($(this), {
                display: "none"
            });
        }
    });
});



gsap.from('[animate] .word', {
    opacity: 0.3,
    duration: 0.25,
    ease: 'power1.in',
    stagger: 0.15,

    scrollTrigger: {
        trigger: '[animate]',
        start: 'top center',
        end: 'bottom center',
        scrub: true
    }
})






window.addEventListener("DOMContentLoaded", (event) => {
        

    // Link timelines to scroll position
    function createScrollTrigger(triggerElement, timeline) {
        // Reset tl when scroll out of view past bottom of screen
        ScrollTrigger.create({
            trigger: triggerElement,
            start: "top bottom"
        });
        // Play tl when scrolled into view (60% from top of screen)
        ScrollTrigger.create({
            trigger: triggerElement,
            start: "top 80%",
            onEnter: () => timeline.play()
        });
    }

    

    // Avoid flash of unstyled content
    gsap.set("[text-split]", {
        opacity: 1
    });
}
);

    // Marca a inicialização como concluída
    gsapInitialized = true;
}
    
    function recarrega() {
        if (!gsapInitialized) {
                // Chamada inicial da função
        initializeGsapAnimation();
            }
       }

        let primeiraUnidade = document.getElementById("primeiraUnidade")
        let segundaUnidade = document.getElementById("segundaUnidade")
        let terceiraUnidade = document.getElementById("terceiraUnidade")
        let quartaUnidade = document.getElementById("quartaUnidade")
        
        let clickClose = document.querySelectorAll(".click-close")
        
        
        
        
        
        document.addEventListener("mousemove", (event) => {
            const layers = document.querySelectorAll(".parallax-wrapper > *");
            const { clientX, clientY } = event;
        
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;
        
            layers.forEach((layer) => {
                const zIndex = parseInt(window.getComputedStyle(layer).zIndex, 10);
        
                if (zIndex === 1 || zIndex === 9) return; // Ignora camadas estáticas
        
                const isText = layer.tagName === "H1" || layer.tagName === "H2";
        
                // Velocidade: inversamente proporcional ao z-index (camadas inferiores se movem mais rápido)
                const speed = isText ? 0.02 : 1 / (zIndex / 0.9);
                const direction = isText ? -1 : 1; // Movimento inverso para textos
        
                const xOffset = direction * (clientX - centerX) * speed;
                const yOffset = direction * (clientY - centerY) * speed;
        
                layer.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
            });
        }); 
    
    
    
    
    
    
    
    
    
    
 
    
    
    
    gsap.from('[animate] .word', {
        opacity: 0.3,
        duration: 0.25,
        ease: 'power1.in',
        stagger: 0.15,
    
        scrollTrigger: {
            trigger: '[animate]',
            start: 'top center',
            end: 'bottom center',
            scrub: true
        }
    })
    
    
    
    
    
    
    window.addEventListener("DOMContentLoaded", (event) => {
            
    
        // Link timelines to scroll position
        function createScrollTrigger(triggerElement, timeline) {
            // Reset tl when scroll out of view past bottom of screen
            ScrollTrigger.create({
                trigger: triggerElement,
                start: "top bottom"
            });
            // Play tl when scrolled into view (60% from top of screen)
            ScrollTrigger.create({
                trigger: triggerElement,
                start: "top 80%",
                onEnter: () => timeline.play()
            });
        }
    
        
    
        // Avoid flash of unstyled content
        gsap.set("[text-split]", {
            opacity: 1
        });
    }
    );
    
    // LENIS SMOOTH SCROLL
    if (Webflow.env("editor") === undefined) {
        lenis = new Lenis({
            lerp: 0.1,
            wheelMultiplier: 0.7,
            gestureOrientation: "vertical",
            normalizeWheel: false,
            smoothTouch: false
        });
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
    }
    $("[data-lenis-start]").on("click", function() {
        lenis.start();
    });
    $("[data-lenis-stop]").on("click", function() {
        lenis.stop();
    });
    $("[data-lenis-toggle]").on("click", function() {
        $(this).toggleClass("stop-scroll");
        if ($(this).hasClass("stop-scroll")) {
            lenis.stop();
        } else {
            lenis.start();
        }
    });
    
    
    
    
    
        
        
        
        
        
        
        
            function fadeOut(element, duration) {
                let opacity = 1;
                const interval = 50; // Intervalo de tempo para a animação (em ms)
                const step = interval / duration; // Quanto diminuir a opacidade a cada intervalo
            
                const fadeEffect = setInterval(() => {
                  opacity -= step;
                  if (opacity <= 0) {
                    opacity = 0;
                    element.style.opacity = opacity;
                    element.style.display = 'none'; // Esconde o elemento
                    clearInterval(fadeEffect); // Para a animação
                  } else {
                    element.style.opacity = opacity;
                  }
                }, interval);
              }
            
              function fadeIn(element, duration) {
                let opacity = 0;
                element.style.display = 'block'; // Mostra o elemento
                const interval = 50; // Intervalo de tempo para a animação (em ms)
                const step = interval / duration; // Quanto aumentar a opacidade a cada intervalo
            
                const fadeEffect = setInterval(() => {
                  opacity += step;
                  if (opacity >= 1) {
                    opacity = 1;
                    element.style.opacity = opacity;
                    clearInterval(fadeEffect); // Para a animação
                  } else {
                    element.style.opacity = opacity;
                  }
                }, interval);
              }

              function abrirAtividade(pagina, botao) {
                botao.addEventListener("click", ()=> {
                    function fadeOut1(element, duration) {
                        let opacity = 1;
                        const interval = 50; // Intervalo de tempo para a animação (em ms)
                        const step = interval / duration; // Quanto diminuir a opacidade a cada intervalo
                
                        const fadeEffect = setInterval(() => {
                            opacity -= step;
                            if (opacity <= 0) {
                            opacity = 0;
                            element.style.opacity = opacity;
                            element.style.display = 'none'; // Esconde o elemento
                            clearInterval(fadeEffect); // Para a animação
                            fadeIn(pagina, 0)
                            $("html, body").animate({ scrollTop: 0 }, 0);
                            recarrega()
                            } else {
                            element.style.opacity = opacity;
                            }
                        }, interval);
                    }
                    fadeOut1(primeiraUnidade, 500)
                  })
              }

              function fecharAtividade(pagina) {
                

                clickClose.forEach(clickClose => 
                    clickClose.addEventListener('click', () => {
                        if (pagina.style.display != "none") {
                            function fadeOut1(element, duration) {
                                let opacity = 1;
                                const interval = 50; // Intervalo de tempo para a animação (em ms)
                                const step = interval / duration; // Quanto diminuir a opacidade a cada intervalo
                        
                                const fadeEffect = setInterval(() => {
                                    opacity -= step;
                                    if (opacity <= 0) {
                                    opacity = 0;
                                    element.style.opacity = opacity;
                                    element.style.display = 'none'; // Esconde o elemento
                                    clearInterval(fadeEffect); // Para a animação
                                    fadeIn(primeiraUnidade, 500)
                                    } else {
                                    element.style.opacity = opacity;
                                    }
                                }, interval);
                            }
                            fadeOut1(pagina, 500)
                        }
                    })
                  );


              }




              function abrirAtividade2(pagina, botao) {
                botao.addEventListener("click", ()=> {
                    function fadeOut1(element, duration) {
                        let opacity = 1;
                        const interval = 50; // Intervalo de tempo para a animação (em ms)
                        const step = interval / duration; // Quanto diminuir a opacidade a cada intervalo
                
                        const fadeEffect = setInterval(() => {
                            opacity -= step;
                            if (opacity <= 0) {
                            opacity = 0;
                            element.style.opacity = opacity;
                            element.style.display = 'none'; // Esconde o elemento
                            clearInterval(fadeEffect); // Para a animação
                            fadeIn(pagina, 0)
                            $("html, body").animate({ scrollTop: 0 }, 0);
                            recarrega()
                            } else {
                            element.style.opacity = opacity;
                            }
                        }, interval);
                    }
                    fadeOut1(segundaUnidade, 500)
                  })
              }

              function fecharAtividade2(pagina) {
                

                clickClose.forEach(clickClose => 
                    clickClose.addEventListener('click', () => {
                        if (pagina.style.display != "none") {
                            function fadeOut1(element, duration) {
                                let opacity = 1;
                                const interval = 50; // Intervalo de tempo para a animação (em ms)
                                const step = interval / duration; // Quanto diminuir a opacidade a cada intervalo
                        
                                const fadeEffect = setInterval(() => {
                                    opacity -= step;
                                    if (opacity <= 0) {
                                    opacity = 0;
                                    element.style.opacity = opacity;
                                    element.style.display = 'none'; // Esconde o elemento
                                    clearInterval(fadeEffect); // Para a animação
                                    fadeIn(segundaUnidade, 500)
                                    } else {
                                    element.style.opacity = opacity;
                                    }
                                }, interval);
                            }
                            fadeOut1(pagina, 500)
                        }
                    })
                  );


              }



              function abrirAtividade3(pagina, botao) {
                botao.addEventListener("click", ()=> {
                    function fadeOut1(element, duration) {
                        let opacity = 1;
                        const interval = 50; // Intervalo de tempo para a animação (em ms)
                        const step = interval / duration; // Quanto diminuir a opacidade a cada intervalo
                
                        const fadeEffect = setInterval(() => {
                            opacity -= step;
                            if (opacity <= 0) {
                            opacity = 0;
                            element.style.opacity = opacity;
                            element.style.display = 'none'; // Esconde o elemento
                            clearInterval(fadeEffect); // Para a animação
                            fadeIn(pagina, 0)
                            $("html, body").animate({ scrollTop: 0 }, 0);
                            recarrega()
                            } else {
                            element.style.opacity = opacity;
                            }
                        }, interval);
                    }
                    fadeOut1(terceiraUnidade, 500)
                  })
              }

              function fecharAtividade3(pagina) {
                

                clickClose.forEach(clickClose => 
                    clickClose.addEventListener('click', () => {
                        if (pagina.style.display != "none") {
                            function fadeOut1(element, duration) {
                                let opacity = 1;
                                const interval = 50; // Intervalo de tempo para a animação (em ms)
                                const step = interval / duration; // Quanto diminuir a opacidade a cada intervalo
                        
                                const fadeEffect = setInterval(() => {
                                    opacity -= step;
                                    if (opacity <= 0) {
                                    opacity = 0;
                                    element.style.opacity = opacity;
                                    element.style.display = 'none'; // Esconde o elemento
                                    clearInterval(fadeEffect); // Para a animação
                                    fadeIn(terceiraUnidade, 500)
                                    } else {
                                    element.style.opacity = opacity;
                                    }
                                }, interval);
                            }
                            fadeOut1(pagina, 500)
                        }
                    })
                  );


              }


              function abrirAtividade4(pagina, botao) {
                botao.addEventListener("click", ()=> {
                    function fadeOut1(element, duration) {
                        let opacity = 1;
                        const interval = 50; // Intervalo de tempo para a animação (em ms)
                        const step = interval / duration; // Quanto diminuir a opacidade a cada intervalo
                
                        const fadeEffect = setInterval(() => {
                            opacity -= step;
                            if (opacity <= 0) {
                            opacity = 0;
                            element.style.opacity = opacity;
                            element.style.display = 'none'; // Esconde o elemento
                            clearInterval(fadeEffect); // Para a animação
                            fadeIn(pagina, 0)
                            $("html, body").animate({ scrollTop: 0 }, 0);
                            recarrega()
                            } else {
                            element.style.opacity = opacity;
                            }
                        }, interval);
                    }
                    fadeOut1(quartaUnidade, 500)
                  })
              }

              function fecharAtividade4(pagina) {
                

                clickClose.forEach(clickClose => 
                    clickClose.addEventListener('click', () => {
                        if (pagina.style.display != "none") {
                            function fadeOut1(element, duration) {
                                let opacity = 1;
                                const interval = 50; // Intervalo de tempo para a animação (em ms)
                                const step = interval / duration; // Quanto diminuir a opacidade a cada intervalo
                        
                                const fadeEffect = setInterval(() => {
                                    opacity -= step;
                                    if (opacity <= 0) {
                                    opacity = 0;
                                    element.style.opacity = opacity;
                                    element.style.display = 'none'; // Esconde o elemento
                                    clearInterval(fadeEffect); // Para a animação
                                    fadeIn(quartaUnidade, 500)
                                    } else {
                                    element.style.opacity = opacity;
                                    }
                                }, interval);
                            }
                            fadeOut1(pagina, 500)
                        }
                    })
                  );


              }





              
              let obDs1Btn = document.getElementById("obDs1Btn")
              const obDs1 = document.getElementById("obDs1");

              let opDs1Btn = document.getElementById("opDs1Btn")
              const opDs1 = document.getElementById("opDs1");


              let obMat1Btn = document.getElementById("obMat1Btn")
              const obMat1 = document.getElementById("obMat1");

              let opMat1Btn = document.getElementById("opMat1Btn")
              const opMat1 = document.getElementById("opMat1");

              
              let obCH1Btn = document.getElementById("obCH1Btn")
              const obCH1 = document.getElementById("obCH1");

              let opCH1Btn = document.getElementById("opCH1Btn")
              const opCH1 = document.getElementById("opCH1");


              let obLing1Btn = document.getElementById("obLing1Btn")
              const obLing1 = document.getElementById("obLing1");

              let opLing1Btn = document.getElementById("opLing1Btn")
              const opLing1 = document.getElementById("opLing1");


              let obCN1Btn = document.getElementById("obCN1Btn")
              const obCN1 = document.getElementById("obCN1");

              let opCN1Btn = document.getElementById("opCN1Btn")
              const opCN1 = document.getElementById("opCN1");

              abrirAtividade(obDs1, obDs1Btn)
              fecharAtividade(obDs1)
              
              abrirAtividade(opDs1, opDs1Btn)
              fecharAtividade(opDs1)


              abrirAtividade(obMat1, obMat1Btn)
              fecharAtividade(obMat1)
              
              abrirAtividade(opMat1, opMat1Btn)
              fecharAtividade(opMat1)


              abrirAtividade(obCH1, obCH1Btn)
              fecharAtividade(obCH1)
              
              abrirAtividade(opCH1, opCH1Btn)
              fecharAtividade(opCH1)


              abrirAtividade(obLing1, obLing1Btn)
              fecharAtividade(obLing1)
              
              abrirAtividade(opLing1, opLing1Btn)
              fecharAtividade(opLing1)


              abrirAtividade(obCN1, obCN1Btn)
              fecharAtividade(obCN1)
              
              abrirAtividade(opCN1, opCN1Btn)
              fecharAtividade(opCN1)








              let obDs2Btn = document.getElementById("obDs2Btn")
              const obDs2 = document.getElementById("obDs2");

              let opDs2Btn = document.getElementById("opDs2Btn")
              const opDs2 = document.getElementById("opDs2");


              let obMat2Btn = document.getElementById("obMat2Btn")
              const obMat2 = document.getElementById("obMat2");

              let opMat2Btn = document.getElementById("opMat2Btn")
              const opMat2 = document.getElementById("opMat2");

              
              let obCH2Btn = document.getElementById("obCH2Btn")
              const obCH2 = document.getElementById("obCH2");

              let opCH2Btn = document.getElementById("opCH2Btn")
              const opCH2 = document.getElementById("opCH2");


              let obLing2Btn = document.getElementById("obLing2Btn")
              const obLing2 = document.getElementById("obLing2");

              let opLing2Btn = document.getElementById("opLing2Btn")
              const opLing2 = document.getElementById("opLing2");


              let obCN2Btn = document.getElementById("obCN2Btn")
              const obCN2 = document.getElementById("obCN2");

              let opCN2Btn = document.getElementById("opCN2Btn")
              const opCN2 = document.getElementById("opCN2");

              abrirAtividade2(obDs2, obDs2Btn)
              fecharAtividade2(obDs2)
              
              abrirAtividade2(opDs2, opDs2Btn)
              fecharAtividade2(opDs2)


              abrirAtividade2(obMat2, obMat2Btn)
              fecharAtividade2(obMat2)
              
              abrirAtividade2(opMat2, opMat2Btn)
              fecharAtividade2(opMat2)


              abrirAtividade2(obCH2, obCH2Btn)
              fecharAtividade2(obCH2)
              
              abrirAtividade2(opCH2, opCH2Btn)
              fecharAtividade2(opCH2)


              abrirAtividade2(obLing2, obLing2Btn)
              fecharAtividade2(obLing2)
              
              abrirAtividade2(opLing2, opLing2Btn)
              fecharAtividade2(opLing2)


              abrirAtividade2(obCN2, obCN2Btn)
              fecharAtividade2(obCN2)
              
              abrirAtividade2(opCN2, opCN2Btn)
              fecharAtividade2(opCN2)








              let obDs3Btn = document.getElementById("obDs3Btn")
              const obDs3 = document.getElementById("obDs3");

              let opDs3Btn = document.getElementById("opDs3Btn")
              const opDs3 = document.getElementById("opDs3");


              let obMat3Btn = document.getElementById("obMat3Btn")
              const obMat3 = document.getElementById("obMat3");

              let opMat3Btn = document.getElementById("opMat3Btn")
              const opMat3 = document.getElementById("opMat3");

              
              let obCH3Btn = document.getElementById("obCH3Btn")
              const obCH3 = document.getElementById("obCH3");

              let opCH3Btn = document.getElementById("opCH3Btn")
              const opCH3 = document.getElementById("opCH3");


              let obLing3Btn = document.getElementById("obLing3Btn")
              const obLing3 = document.getElementById("obLing3");

              let opLing3Btn = document.getElementById("opLing3Btn")
              const opLing3 = document.getElementById("opLing3");


              let obCN3Btn = document.getElementById("obCN3Btn")
              const obCN3 = document.getElementById("obCN3");

              let opCN3Btn = document.getElementById("opCN3Btn")
              const opCN3 = document.getElementById("opCN3");

              abrirAtividade3(obDs3, obDs3Btn)
              fecharAtividade3(obDs3)
              
              abrirAtividade3(opDs3, opDs3Btn)
              fecharAtividade3(opDs3)


              abrirAtividade3(obMat3, obMat3Btn)
              fecharAtividade3(obMat3)
              
              abrirAtividade3(opMat3, opMat3Btn)
              fecharAtividade3(opMat3)


              abrirAtividade3(obCH3, obCH3Btn)
              fecharAtividade3(obCH3)
              
              abrirAtividade3(opCH3, opCH3Btn)
              fecharAtividade3(opCH3)


              abrirAtividade3(obLing3, obLing3Btn)
              fecharAtividade3(obLing3)
              
              abrirAtividade3(opLing3, opLing3Btn)
              fecharAtividade3(opLing3)


              abrirAtividade3(obCN3, obCN3Btn)
              fecharAtividade3(obCN3)
              
              abrirAtividade3(opCN3, opCN3Btn)
              fecharAtividade3(opCN3)








              let obDs4Btn = document.getElementById("obDs4Btn")
              const obDs4 = document.getElementById("obDs4");

              let opDs4Btn = document.getElementById("opDs4Btn")
              const opDs4 = document.getElementById("opDs4");


              let obMat4Btn = document.getElementById("obMat4Btn")
              const obMat4 = document.getElementById("obMat4");

              let opMat4Btn = document.getElementById("opMat4Btn")
              const opMat4 = document.getElementById("opMat4");

              
              let obCH4Btn = document.getElementById("obCH4Btn")
              const obCH4 = document.getElementById("obCH4");

              let opCH4Btn = document.getElementById("opCH4Btn")
              const opCH4 = document.getElementById("opCH4");


              let obLing4Btn = document.getElementById("obLing4Btn")
              const obLing4 = document.getElementById("obLing4");

              let opLing4Btn = document.getElementById("opLing4Btn")
              const opLing4 = document.getElementById("opLing4");


              let obCN4Btn = document.getElementById("obCN4Btn")
              const obCN4 = document.getElementById("obCN4");

              let opCN4Btn = document.getElementById("opCN4Btn")
              const opCN4 = document.getElementById("opCN4");

              abrirAtividade4(obDs4, obDs4Btn)
              fecharAtividade4(obDs4)
              
              abrirAtividade4(opDs4, opDs4Btn)
              fecharAtividade4(opDs4)


              abrirAtividade4(obMat4, obMat4Btn)
              fecharAtividade4(obMat4)
              
              abrirAtividade4(opMat4, opMat4Btn)
              fecharAtividade4(opMat4)


              abrirAtividade4(obCH4, obCH4Btn)
              fecharAtividade4(obCH4)
              
              abrirAtividade4(opCH4, opCH4Btn)
              fecharAtividade4(opCH4)


              abrirAtividade4(obLing4, obLing4Btn)
              fecharAtividade4(obLing4)
              
              abrirAtividade4(opLing4, opLing4Btn)
              fecharAtividade4(opLing4)


              abrirAtividade4(obCN4, obCN4Btn)
              fecharAtividade4(obCN4)
              
              abrirAtividade4(opCN4, opCN4Btn)
              fecharAtividade4(opCN4)
            
            
            //   obDs1Btn.addEventListener("click", ()=> {
            //     function fadeOut1(element, duration) {
            //         let opacity = 1;
            //         const interval = 50; // Intervalo de tempo para a animação (em ms)
            //         const step = interval / duration; // Quanto diminuir a opacidade a cada intervalo
            
            //         const fadeEffect = setInterval(() => {
            //             opacity -= step;
            //             if (opacity <= 0) {
            //             opacity = 0;
            //             element.style.opacity = opacity;
            //             element.style.display = 'none'; // Esconde o elemento
            //             clearInterval(fadeEffect); // Para a animação
            //             fadeIn(obDs1, 500)
            //             $("html, body").animate({ scrollTop: 0 }, "slow");
            //             recarrega()
            //             } else {
            //             element.style.opacity = opacity;
            //             }
            //         }, interval);
            //     }
            //     fadeOut1(primeiraUnidade, 500)
            //   })


        
        
            //   clickClose.forEach(clickClose => 
            //     clickClose.addEventListener('click', () => {
            //         if (obDs1.style.display != "none") {
            //             function fadeOut1(element, duration) {
            //                 let opacity = 1;
            //                 const interval = 50; // Intervalo de tempo para a animação (em ms)
            //                 const step = interval / duration; // Quanto diminuir a opacidade a cada intervalo
                    
            //                 const fadeEffect = setInterval(() => {
            //                     opacity -= step;
            //                     if (opacity <= 0) {
            //                     opacity = 0;
            //                     element.style.opacity = opacity;
            //                     element.style.display = 'none'; // Esconde o elemento
            //                     clearInterval(fadeEffect); // Para a animação
            //                     fadeIn(primeiraUnidade, 500)
            //                     } else {
            //                     element.style.opacity = opacity;
            //                     }
            //                 }, interval);
            //             }
            //             fadeOut1(obDs1, 500)
            //         } else if (opDs1.style.display != "none") {
            //             function fadeOut1(element, duration) {
            //                 let opacity = 1;
            //                 const interval = 50; // Intervalo de tempo para a animação (em ms)
            //                 const step = interval / duration; // Quanto diminuir a opacidade a cada intervalo
                    
            //                 const fadeEffect = setInterval(() => {
            //                     opacity -= step;
            //                     if (opacity <= 0) {
            //                     opacity = 0;
            //                     element.style.opacity = opacity;
            //                     element.style.display = 'none'; // Esconde o elemento
            //                     clearInterval(fadeEffect); // Para a animação
            //                     fadeIn(primeiraUnidade, 500)
            //                     } else {
            //                     element.style.opacity = opacity;
            //                     }
            //                 }, interval);
            //             }
            //             fadeOut1(opDs1, 500)
            //         }
            //     })
            //   );


    });


