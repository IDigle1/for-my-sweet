import { textes } from './script';

export const toHTMLElement = (element) => {
    const wrap = document.createElement('div')

    wrap.innerHTML = element
    
    return wrap.children[0]
}

export const fedeInOut = (step = 0, duration = 4000) => {
    return {
        targets: '.script.s1',
        opacity: [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        duration,
        complete: function() {
          document.querySelector('.script.s1 p').innerText = textes[step]
        }
      }
}