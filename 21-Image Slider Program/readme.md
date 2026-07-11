# JavaScript Image Slider

A simple automatic image slider built using **HTML, CSS, and JavaScript**. Images change automatically every few seconds, and users can manually navigate using Previous and Next buttons.

## Features

- Automatic slideshow using `setInterval()`
- Previous and Next navigation buttons
- Smooth fade animation between slides
- Infinite looping (last → first, first → last)
- Built with vanilla JavaScript (no libraries)

## Concepts Learned

### HTML
- Image elements (`<img>`)
- Buttons
- Container structure using `div`

### CSS
- Relative and absolute positioning
- `display: none` / `display: block`
- CSS animations using `@keyframes`
- `transform: translateY()`
- Responsive sizing

### JavaScript
- `querySelectorAll()`
- `DOMContentLoaded`
- `classList.add()` / `classList.remove()`
- `forEach()`
- `setInterval()`
- `clearInterval()`
- DOM manipulation
- Automatic and manual slide navigation
- Index wrapping for infinite looping

## How It Works

1. When the page loads, the first image is displayed.
2. `setInterval()` automatically calls `nextSlide()` every 3 seconds.
3. Clicking **Next** shows the next image.
4. Clicking **Previous** shows the previous image and stops the automatic slideshow.
5. The slider loops infinitely when reaching either end.

## Files

- `index.html` – Slider structure
- `style.css` – Styling and fade animation
- `script.js` – Slider logic and navigation

---

**Learning Outcome:** Built a fully functional image slider while practicing DOM manipulation, timers, CSS animations, event handling, and dynamic class management in JavaScript.