'use strict';

let pictureSlideshow = function () {

  let pictures = $('[data-slides]');
  let data = pictures.data('slides');
  let amount = data.length;
  let slideshow = function () {
    pictures
      .css('background-image', 'url("' + data[Math.floor(Math.random() * amount)] + '")')
      .show(0, function () {
        setTimeout(slideshow, 5000);
      });
  };

  slideshow();

}

pictureSlideshow();
