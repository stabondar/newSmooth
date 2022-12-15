import '../styles/scroll.css'

import { gsap } from 'gsap'
import Lenis from '@studio-freight/lenis'

export default class Smooth 
{
    constructor()
    {
        const wrapper = document.querySelector('[data-lenis-parent]')
        const content = document.querySelector('[data-lenis-prevent]')
        const lenis = new Lenis({
            wrapper: wrapper, // element which has overflow
            content: content, // usually wrapper's direct child
            duration: 1,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
            direction: 'vertical', // vertical, horizontal
            gestureDirection: 'vertical', // vertical, horizontal, both
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
            infinite: false,
        })
          
          function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
          }
          
          requestAnimationFrame(raf)
    }
}