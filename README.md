# contain

Use [letterboxing](http://en.wikipedia.org/wiki/Letterbox) or
[pillarboxing](http://en.wikipedia.org/wiki/Pillar_box_(film)) to resize
an object to fit within another containing rect, without affecting the
aspect ratio.


[![NPM](https://nodei.co/npm/contain.png)](https://nodei.co/npm/contain/)

[![unstable](https://img.shields.io/badge/stability-unstable-yellowgreen.svg)](https://github.com/dominictarr/stability#unstable) [![Build Status](https://img.shields.io/travis/DamonOehlman/contain.svg?branch=master)](https://travis-ci.org/DamonOehlman/contain) 

## Example Usage

To be completed.

## Reference

### `contain(container, => subject) => result`

Given the supplied `container` and `subject` bounds, determine the maximum
`result` bounds in which the subject can be displayed within the container
without distorting the aspect ratio.

All bounds are provided in the format of `[x, y, width, height]`

## License(s)

### MIT

Copyright (c) 2014 Damon Oehlman <damon.oehlman@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
