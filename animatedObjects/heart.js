import anime from 'animejs/lib/anime.es.js';
import { toHTMLElement } from '../helpers';
import { heart } from '../htmlObjects/heart';

export const heartAnimation = (animationEndCallback) => {

    let tl2 = anime.timeline({
      easing: 'easeInOutQuad',
      duration: 750
    });
  
    document.querySelector('.script.s1').appendChild(toHTMLElement(heart))
  
    tl2
    .add({
        targets: '.heart',
        opacity: ['0', '1'],
        easing: 'easeInOutQuad',
        delay: 1000,
        duration: 1000
    })
    .add({
      targets: '.heart .part',
      backgroundColor: ['transparent', '#4e444d'],
      easing: 'easeInOutQuad',
      delay: anime.stagger(200, {grid: [11, 11], from: 'center'}),
      duration: 1000
    })
    .add({
      targets: '.heart .part',
      backgroundColor: ['transparent', '#4e444d', '#70586d', '#784d73', '#70586d', '#ff9ff3'],
      delay: anime.stagger(200, {grid: [11, 11], from: 'center'}),
      duration: 1000
    })
    .add({
        targets: '.heart .part',
        opacity: '0',
        easing: 'easeInOutQuad',
        delay: anime.stagger(200, {grid: [11, 11], from: 'center'}),
        duration: 1000,
        complete() {
            animationEndCallback()
        }
    })
}