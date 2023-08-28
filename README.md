# :sparkles: SimpleToast

Simple toast notification library with Tailwind CSS.

**This means TailwindCSS is required! for this to work "out of the box"**

Please note this may bug a bit on mobile

## :arrow_heading_down: Installation

Simply include the [SimpleToast.js](./SimpleToast.js) or [SimpleToast.min.js](./SimpleToast.min.js).

## :memo: Change Log

- 25th August rewrote some of the code and made it easier to customize, Also code is now smaller. - [#1](https://github.com/itaypanda/SimpleToast/issues/1)

## :gear: Config

No configuration is required unless you count the init and the toast itself.

## :fire: Usage

```javascript

// Init the library, can be skipped if you add:
// <div class="absolute bottom-0 right-0"></div>
// Anywhere in the page, recommended at the top or bottom
toastInit();

// Example info toast:

toast('Title', 'Message', toastStyles.info);

// Example warn toast:

toast('Title', 'Message', toastStyles.warn);

// Example error toast:

toast('Title', 'Message', toastStyles.error);

// Example success toast:

toast('Title', 'Message', toastStyles.success);


// Example toast with set fade time instead of the default (7.5 seconds):

toast('Title', 'Message', toastStyles.info, 10);

```

## :wrench: Adding custom styles

```javascript
const myCustomStyle = {
  color: "blue", // Tailwind CSS color. Ex: [#ffffff].
  icon: "<svg></svg>" // Doesn't have to be an svg.
};
```

![demonstration](abc.jpg)

## :wave: Contact/Contribute

Open an issue and I'll answer as soon as I'm available.

Feel free to contribute :D

Feel free to open an issue if you find any, or if you want to add a feature!

## :page_with_curl: License

This project is licensed under the [MIT license.](./LICENSE)

>Copyright (c) 2023 itaypanda
>
> Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## 💙 Thanks

**Thanks to Tailwind CSS / Tailwind Labs, Inc.**

https://github.com/tailwindlabs/tailwindcss/blob/master/LICENSE

https://github.com/tailwindlabs/tailwindcs

https://tailwindcss.com/

**Thanks to system UIcons**

https://github.com/CoreyGinnivan/system-uicons/blob/main/LICENSE

https://github.com/CoreyGinnivan/system-uicons

https://www.systemuicons.com/
