import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(ScrollTrigger, SplitText)

export default class Animations 
{
    constructor()
    {
        const init = () =>
        {
            const section = $('.section')
            $(section).each(function()
            {
                let self = $(this)
                let text = self.find('p')
                let split = new SplitText(text, {type: 'lines, words'})
                let tl = gsap.timeline({paused: true, defaults: { duration: 0.6, ease: 'power3', stagger: 0.02 }})

                tl.from(split.words, {yPercent: 100, opacity: 0})

                ScrollTrigger.create(
                {
                    trigger: text, start: 'top 90%', onEnter: () => tl.play()
                })
            })
        }
        window.addEventListener('load', () => init())
    }
}
