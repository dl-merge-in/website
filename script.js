const observer = new IntersectionObserver(
  (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')),
  { threshold: 0.12 },
)

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element))

const lightbox = document.querySelector('#image-lightbox')
const lightboxImage = lightbox?.querySelector('.lightbox-image')
const closeLightbox = () => {
  if (!lightbox || !lightboxImage) return
  lightbox.hidden = true
  lightboxImage.src = ''
}

document.querySelectorAll('[data-lightbox-src]').forEach((trigger) => {
  trigger.addEventListener('click', () => {
    if (!lightbox || !lightboxImage) return
    lightboxImage.src = trigger.dataset.lightboxSrc
    lightboxImage.alt = trigger.dataset.lightboxAlt
    lightbox.hidden = false
    lightbox.querySelector('.lightbox-close').focus()
  })
})

lightbox?.addEventListener('click', (event) => {
  if (event.target === lightbox || event.target.closest('.lightbox-close')) closeLightbox()
})

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !lightbox.hidden) closeLightbox()
})

document.querySelectorAll('[data-copy-text]').forEach((button) => {
  button.addEventListener('click', async () => {
    const originalText = button.textContent
    try {
      await navigator.clipboard.writeText(button.dataset.copyText)
      button.textContent = window.DLMERGEIN_T?.('copiedSha') || 'コピーしました'
    } catch {
      button.textContent = window.DLMERGEIN_T?.('copyShaFailed') || 'コピーに失敗しました'
    }
    window.setTimeout(() => { button.textContent = originalText }, 1800)
  })
})
