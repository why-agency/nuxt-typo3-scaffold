/* eslint-disable */

function define(obj, prop, definition) {
  Object.defineProperty(obj, prop, definition)
}

export default function (_slideWidth) {
  return function (Glide, Components, Events) {
    const Sizes = {
      get slideWidth() {
        if (typeof window.matchMedia !== 'undefined') {
          return window.matchMedia(`(min-width: 1024px)`).matches
            ? _slideWidth.desktop
            : _slideWidth.mobile
        }
      },
      /**
       * Setups dimensions of slides.
       *
       * @return {Void}
       */
      setupSlides() {
        let width = `${Sizes.slideWidth}px`
        let slides = Components.Html.slides

        for (let i = 0; i < slides.length; i++) {
          slides[i].style.width = width
        }
      },

      /**
       * Setups dimensions of slides wrapper.
       *
       * @return {Void}
       */
      setupWrapper() {
        Components.Html.wrapper.style.width = `${this.wrapperSize}px`
      },

      /**
       * Removes applied styles from HTML elements.
       *
       * @returns {Void}
       */
      remove() {
        let slides = Components.Html.slides

        for (let i = 0; i < slides.length; i++) {
          slides[i].style.width = ''
        }

        Components.Html.wrapper.style.width = ''
      }
    }

    define(Sizes, 'length', {
      /**
       * Gets count number of the slides.
       *
       * @return {Number}
       */
      get() {
        return Components.Html.slides.length
      }
    })

    define(Sizes, 'width', {
      /**
       * Gets width value of the slider (visible area).
       *
       * @return {Number}
       */
      get() {
        return Components.Html.track.offsetWidth
      }
    })

    define(Sizes, 'wrapperSize', {
      /**
       * Gets size of the slides wrapper.
       *
       * @return {Number}
       */
      get() {
        return (
          Sizes.slideWidth * Sizes.length +
          Components.Gaps.grow +
          Components.Clones.grow
        )
      }
    })

    /**
     * Apply calculated glide's dimensions:
     * - before building, so other dimensions (e.g. translate) will be calculated propertly
     * - when resizing window to recalculate sildes dimensions
     * - on updating via API, to calculate dimensions based on new options
     */
    Events.on(['build.before', 'resize', 'update'], () => {
      Sizes.setupSlides()
      Sizes.setupWrapper()
    })

    /**
     * Remove calculated glide's dimensions:
     * - on destoting to bring markup to its inital state
     */
    Events.on('destroy', () => {
      Sizes.remove()
    })

    return Sizes
  }
}
