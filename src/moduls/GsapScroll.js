import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'

export default class GsapScroll 
{
    constructor()
    {
        gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

        const init = () => 
        {
            const wrapper = document.querySelector('[smoother-wrapper]')
            const content = document.querySelector('[smoother-container]')

            ScrollSmoother.create(
            {
                wrapper: wrapper,
                content: content,
                smooth: 0.4
            })
            
        }
        init()
    }
}