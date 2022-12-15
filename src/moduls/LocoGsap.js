import '../styles/loco.css'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import LocomotiveScroll from 'locomotive-scroll'

export default class LocoGsap 
{
    constructor()
    {
        /**
         * Setup Loco And Gsap
         */
        gsap.registerPlugin(ScrollTrigger)
        
        let locoScroll
        const wrapper = document.querySelector('.main')
        if (window.innerWidth > 480) 
        {
            locoScroll = new LocomotiveScroll({
                el: wrapper,
                smooth: true,
                multiplier: 1.0,
                lerp: 0.15
            });
            locoScroll.on('scroll', ScrollTrigger.update);
            ScrollTrigger.scrollerProxy(wrapper, {
                scrollTop(value) {
                    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
                },
                getBoundingClientRect() {
                    return {
                        top: 0,
                        left: 0,
                        width: window.innerWidth,
                        height: window.innerHeight
                    };
                },
                pinType: wrapper.style.transform ? 'transform' : 'fixed'
            });
        }
        ScrollTrigger.defaults({
            scroller: wrapper
        })
        
        window.addEventListener('load', () => 
        {
            ScrollTrigger.addEventListener('refresh', () => locoScroll.update())
            locoScroll.update()
        })

        new ResizeObserver(() => locoScroll.update()).observe(wrapper);
        
        
        $(window).on('resize', function (e) {
            ScrollTrigger.refresh()
            locoScroll.update();
        });
    }
}