var $galleryContainer = $('.portfolio__gallery').isotope({
  itemSelector: '.portfolio__item',
  layoutMode: 'fitRows',
})

$('.portfolio__button-group .portfolio__btn').on('click', function () {
  $('.portfolio__button-group .portfolio__btn').removeClass(
    'portfolio__btn_active'
  )
  $(this).addClass('portfolio__btn_active')

  var value = $(this).attr('data-filter')
  $galleryContainer.isotope({
    filter: value,
  })
})

const gallery = document.querySelector('.portfolio__gallery')
gallery.style.height = 600 + 'px'
gallery.style.overflowY = 'scroll'
