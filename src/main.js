import './styles/style.css'
import { gsap } from 'gsap'

import Smooth from './moduls/Smooth'
import LocoGsap from './moduls/LocoGsap'
import GsapScroll from './moduls/GsapScroll'
import Animations from './moduls/Animations'

const checkPages = () => 
{
    if ($('body').attr('body') == 1) {const loco = new LocoGsap()}
    if ($('body').attr('body') == 2) {const scroll = new Smooth()}
    if ($('body').attr('body') == 'gsap') {const gsapScroll = new GsapScroll()}
    const animation = new Animations()
}
checkPages()

const init = () =>
{
    gsap.set('.main', { autoAlpha: 1 })
}
window.addEventListener('load', () => init())