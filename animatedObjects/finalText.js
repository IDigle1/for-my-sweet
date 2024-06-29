import anime from 'animejs/lib/anime.es.js';
import { toHTMLElement } from '../helpers';

export const finalText = (endCallback) => {
    let tl = anime.timeline({
        easing: 'easeInOutQuad',
        duration: 750
      });

    document.querySelector('.script.s1')
        .appendChild(toHTMLElement('<div class="zo regular-text s2">Для меня ты "та самая"</div>'))
        .appendChild(toHTMLElement(`
            <div class="zo s3">
                <span class="zo s4">Жду,</span>
                <span class="zo s5">Целую,</span>
                <span class="zo s6">Обнимаю</span>
            </div>
        `))
        .appendChild(toHTMLElement(`
            <div class="zo s7">
                <span class="zo s8">PS: </span>
                <span class="zo s9">Твой кот </span>
                <span class="zo s10">:<span style="color: #e74c3c">*</span></span>
            </div>
        `))

    tl
    .add({
      targets: '.zo',
      opacity: [0, 1],
      delay: anime.stagger(1000),
      duration: 1000,
      complete: endCallback
    })
    // .add({
    //   targets: '.script.s1 .s3',
    //   opacity: [0, 1],
    //   delay: 600,
    //   duration: 1000,
    // })
    // .add({
    //   targets: '.script.s1 .s4',
    //   opacity: [0, 1],
    //   delay: 600,
    //   duration: 1000,
    // })
    // .add({
    //   targets: '.script.s1 .s5',
    //   opacity: [0, 1],
    //   delay: 600,
    //   duration: 1000,
    // })
    // .add({
    //   targets: '.script.s1 .s6',
    //   opacity: [0, 1],
    //   delay: 600,
    //   duration: 1000,
    // })
    // .add({
    //   targets: '.script.s1 .s7',
    //   opacity: [0, 1],
    //   delay: 600,
    //   duration: 1000,
    // })
    // .add({
    //   targets: '.script.s1 .s8',
    //   opacity: [0, 1],
    //   delay: 600,
    //   duration: 1000,
    // })
    // .add({
    //   targets: '.script.s1 .s9',
    //   opacity: [0, 1],
    //   delay: 600,
    //   duration: 1000,
    // })
    // .add({
    //   targets: '.script.s1 .s10',
    //   opacity: [0, 1],
    //   delay: 600,
    //   duration: 1000,
    // })
}