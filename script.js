const observer = new IntersectionObserver(
  (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')),
  { threshold: 0.12 },
)

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element))

const lightbox = document.querySelector('#image-lightbox')
const lightboxImage = lightbox.querySelector('.lightbox-image')
const closeLightbox = () => {
  lightbox.hidden = true
  lightboxImage.src = ''
}

document.querySelectorAll('[data-lightbox-src]').forEach((trigger) => {
  trigger.addEventListener('click', () => {
    lightboxImage.src = trigger.dataset.lightboxSrc
    lightboxImage.alt = trigger.dataset.lightboxAlt
    lightbox.hidden = false
    lightbox.querySelector('.lightbox-close').focus()
  })
})

lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox || event.target.closest('.lightbox-close')) closeLightbox()
})

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !lightbox.hidden) closeLightbox()
})
