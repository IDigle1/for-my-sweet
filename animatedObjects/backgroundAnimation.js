import anime from 'animejs/lib/anime.es.js';
import { toHTMLElement } from '../helpers';

export const backgroundAnimation = () => {
    let tl = anime.timeline({
        easing: 'easeInOutQuad',
        duration: 750
      });

    tl
    .add({
      delay: 3000,
      targets: {
        start: '#2d3436',
        end: '#2d3436',
      },
      end: '#e8cc1b',
      start: '#ff8775',
      duration: 3000,
      update: function(a) {
        var value1 = a.animations[0].currentValue;
        var value2 = a.animations[1].currentValue;
        document.querySelector('#app')
          .style.backgroundImage = 'linear-gradient(90deg, '+value1+' 0%, '+value2+' 100%)'
      },
      complete: function() {
        anime({
          targets: {
            end: '#e8cc1b',
            start: '#ff8775',
          },
          loop: true,
          end: '#ff8775',
          start: '#e8cc1b',
          duration: 3000,
          loop: true,
          direction: 'alternate',
          update: function(a) {
            var value1 = a.animations[0].currentValue;
            var value2 = a.animations[1].currentValue;
            document.querySelector('#app')
              .style.backgroundImage = 'linear-gradient(90deg, '+value1+' 0%, '+value2+' 100%)'
          },
        })
      }
    })
}