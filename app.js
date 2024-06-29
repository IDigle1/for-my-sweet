import anime from 'animejs/lib/anime.es.js';
import { heart } from './htmlObjects/heart';
import { fedeInOut, toHTMLElement } from './helpers';
import { heartAnimation } from './animatedObjects/heart';
import { textes } from './script';
import { backgroundAnimation } from './animatedObjects/backgroundAnimation';
import { weDrawPhoto } from './htmlObjects/weDrawPhoto';
import { finalText } from './animatedObjects/finalText';

let tl = anime.timeline({
  easing: 'easeInOutQuad',
  duration: 750
});

export const useApp = () => {

  document.querySelector('#app').appendChild(toHTMLElement(weDrawPhoto))

  tl
  .add({
    targets: '#app',
    backgroundColor: '#2d3436',
    duration: 1500,
    complete: function() {
      
    }
  })
  .add(fedeInOut(1))
  .add(fedeInOut(2))
  .add({
    targets: '.script.s1',
    opacity: [0, 1, 0],
    scale: [1],
    duration: 3000,
    begin: function() {
      heartAnimation(() => {
        tl.play()
      })

      setTimeout(() => {
        tl.pause()
      }, 2000);
    },
    complete: function() {
      document.querySelector('.script.s1 p').innerText = textes[3]
    }
  })
  .add(fedeInOut(4))
  .add(fedeInOut(5))
  .add(fedeInOut(6))
  .add(fedeInOut(7))
  .add({
    targets: '.script.s1',
    opacity: [0, 1, 0],
    scale: [1],
    duration: 4000,
    begin: function() {
      
      setTimeout(() => {
        tl.pause()

        setTimeout(tl.play, 5000)
      }, 3000);
      backgroundAnimation()
      
    },
    complete: function() {
      document.querySelector('.script.s1 p').innerText = textes[8]
    }
  })
  .add(fedeInOut(9))
  .add(fedeInOut(10))
  .add(fedeInOut(11))
  .add(fedeInOut(12))
  .add({
    targets: '.script.s1',
    opacity: [0, 1],
    scale: [1],
    duration: 4000,
    begin: function() {
      
    },
    complete: function() {
      setTimeout(() => {
        anime({
          targets: '.script.s1 p',
          opacity: [1, 0],
          duration: 3000,
          complete: () => {
            document.querySelector('.script.s1 p').remove()
            finalText(() => {
              setTimeout(() => {
                anime({
                  targets: {
                    start: -300,
                    end: 90,
                  },
                  easing: 'easeOutCubic',
                  start: 100,
                  end: 0,
                  update: (a) => {
                    let value1 = a.animations[0].currentValue;
                    let value2 = a.animations[1].currentValue;
              
                    document.querySelector('.we-draw-photo').style.top = `${value1}px`
                    document.querySelector('.we-draw-photo').style.transform = `rotate(${value2}deg)`
                  },
                  complete: () => {
                    setTimeout(() => {
                      anime.timeline({
                        easing: 'easeInOutQuad',
                        duration: 750
                      })
                      .add({
                        targets: '.s2',
                        opacity: [1, 0],
                        duration: 3000,
                        complete: () => {
                          document.querySelector('.s2').innerHTML = `
                          <span class="zo">PSS:</span>
                          <span class="zo">Твой</span>
                          <span class="zo">навеки</span> 
                          `

                          anime({
                            targets: ['.s2', '.zo'],
                            opacity: [0, 1],
                            delay: anime.stagger(1000)
                          })
                        }
                      })
                      
                    }, 2000);
                  }
                })
              }, 1000)
            })
          }
        })
      }, 2000)
    }
  })
}