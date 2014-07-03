/**
  # contain

  Use [letterboxing](http://en.wikipedia.org/wiki/Letterbox) or
  [pillarboxing](http://en.wikipedia.org/wiki/Pillar_box_(film)) to resize
  an object to fit within another containing rect, without affecting the
  aspect ratio.

  ## Example Usage

  To be completed.

  ## Reference

  ### `contain(container, => subject) => result`

  Given the supplied `container` and `subject` bounds, determine the maximum
  `result` bounds in which the subject can be displayed within the container
  without distorting the aspect ratio.

  All bounds are provided in the format of `[x, y, width, height]`

**/
module.exports = function(container, subject) {

  function contain(subject) {
    return [];
  }

  return subject ? contain(subject) : contain;
};
