import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Apply animations to elements
 */
export default function initAnimateOnScroll() {
	const elements = document.querySelectorAll('[data-animate]')
	const elementsLeft = document.querySelectorAll('[data-animate-left]')

	elements.forEach((element) => {
		const settings = {
			scrollTrigger: {
				trigger: element,
				start: 'top bottom-=10%',
			},
			y: 16,
			opacity: 0,
		}

		// Animation time
		gsap.from(element, settings)
	})

	elementsLeft.forEach((element) => {
		const settings = {
			scrollTrigger: {
				trigger: element,
				start: 'top bottom-=15%',
			},
			x: 30,
			opacity: 0,
		}

		// Animation time
		gsap.from(element, settings)
	})

	document.querySelectorAll('[data-animate-stagger]').forEach((stagger) => {
		const elementsStagger = gsap.utils.toArray(stagger.children)

		gsap.from(elementsStagger, {
			scrollTrigger: {
				trigger: stagger,
				start: 'top bottom-=10%',
			},
			y: 20,
			opacity: 0,
			delay: 0.2,
			stagger: 0.1,
		})
	})
}
