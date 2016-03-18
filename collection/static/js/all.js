import Util from './util'


/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.2): alert.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

const Alert = (($) => {


  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME                = 'alert'
  const VERSION             = '4.0.0-alpha'
  const DATA_KEY            = 'bs.alert'
  const EVENT_KEY           = `.${DATA_KEY}`
  const DATA_API_KEY        = '.data-api'
  const JQUERY_NO_CONFLICT  = $.fn[NAME]
  const TRANSITION_DURATION = 150

  const Selector = {
    DISMISS : '[data-dismiss="alert"]'
  }

  const Event = {
    CLOSE          : `close${EVENT_KEY}`,
    CLOSED         : `closed${EVENT_KEY}`,
    CLICK_DATA_API : `click${EVENT_KEY}${DATA_API_KEY}`
  }

  const ClassName = {
    ALERT : 'alert',
    FADE  : 'fade',
    IN    : 'in'
  }


  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class Alert {

    constructor(element) {
      this._element = element
    }


    // getters

    static get VERSION() {
      return VERSION
    }


    // public

    close(element) {
      element = element || this._element

      let rootElement = this._getRootElement(element)
      let customEvent = this._triggerCloseEvent(rootElement)

      if (customEvent.isDefaultPrevented()) {
        return
      }

      this._removeElement(rootElement)
    }

    dispose() {
      $.removeData(this._element, DATA_KEY)
      this._element = null
    }


    // private

    _getRootElement(element) {
      let selector = Util.getSelectorFromElement(element)
      let parent   = false

      if (selector) {
        parent = $(selector)[0]
      }

      if (!parent) {
        parent = $(element).closest(`.${ClassName.ALERT}`)[0]
      }

      return parent
    }

    _triggerCloseEvent(element) {
      let closeEvent = $.Event(Event.CLOSE)

      $(element).trigger(closeEvent)
      return closeEvent
    }

    _removeElement(element) {
      $(element).removeClass(ClassName.IN)

      if (!Util.supportsTransitionEnd() ||
          !$(element).hasClass(ClassName.FADE)) {
        this._destroyElement(element)
        return
      }

      $(element)
        .one(Util.TRANSITION_END, $.proxy(this._destroyElement, this, element))
        .emulateTransitionEnd(TRANSITION_DURATION)
    }

    _destroyElement(element) {
      $(element)
        .detach()
        .trigger(Event.CLOSED)
        .remove()
    }


    // static

    static _jQueryInterface(config) {
      return this.each(function () {
        let $element = $(this)
        let data     = $element.data(DATA_KEY)

        if (!data) {
          data = new Alert(this)
          $element.data(DATA_KEY, data)
        }

        if (config === 'close') {
          data[config](this)
        }
      })
    }

    static _handleDismiss(alertInstance) {
      return function (event) {
        if (event) {
          event.preventDefault()
        }

        alertInstance.close(this)
      }
    }

  }


  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(document).on(
    Event.CLICK_DATA_API,
    Selector.DISMISS,
    Alert._handleDismiss(new Alert())
  )


  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME]             = Alert._jQueryInterface
  $.fn[NAME].Constructor = Alert
  $.fn[NAME].noConflict  = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT
    return Alert._jQueryInterface
  }

  return Alert

})(jQuery)

export default Alert

import Util from './util'


/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.2): alert.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

const Alert = (($) => {


  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME                = 'alert'
  const VERSION             = '4.0.0-alpha'
  const DATA_KEY            = 'bs.alert'
  const EVENT_KEY           = `.${DATA_KEY}`
  const DATA_API_KEY        = '.data-api'
  const JQUERY_NO_CONFLICT  = $.fn[NAME]
  const TRANSITION_DURATION = 150

  const Selector = {
    DISMISS : '[data-dismiss="alert"]'
  }

  const Event = {
    CLOSE          : `close${EVENT_KEY}`,
    CLOSED         : `closed${EVENT_KEY}`,
    CLICK_DATA_API : `click${EVENT_KEY}${DATA_API_KEY}`
  }

  const ClassName = {
    ALERT : 'alert',
    FADE  : 'fade',
    IN    : 'in'
  }


  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class Alert {

    constructor(element) {
      this._element = element
    }


    // getters

    static get VERSION() {
      return VERSION
    }


    // public

    close(element) {
      element = element || this._element

      let rootElement = this._getRootElement(element)
      let customEvent = this._triggerCloseEvent(rootElement)

      if (customEvent.isDefaultPrevented()) {
        return
      }

      this._removeElement(rootElement)
    }

    dispose() {
      $.removeData(this._element, DATA_KEY)
      this._element = null
    }


    // private

    _getRootElement(element) {
      let selector = Util.getSelectorFromElement(element)
      let parent   = false

      if (selector) {
        parent = $(selector)[0]
      }

      if (!parent) {
        parent = $(element).closest(`.${ClassName.ALERT}`)[0]
      }

      return parent
    }

    _triggerCloseEvent(element) {
      let closeEvent = $.Event(Event.CLOSE)

      $(element).trigger(closeEvent)
      return closeEvent
    }

    _removeElement(element) {
      $(element).removeClass(ClassName.IN)

      if (!Util.supportsTransitionEnd() ||
          !$(element).hasClass(ClassName.FADE)) {
        this._destroyElement(element)
        return
      }

      $(element)
        .one(Util.TRANSITION_END, $.proxy(this._destroyElement, this, element))
        .emulateTransitionEnd(TRANSITION_DURATION)
    }

    _destroyElement(element) {
      $(element)
        .detach()
        .trigger(Event.CLOSED)
        .remove()
    }


    // static

    static _jQueryInterface(config) {
      return this.each(function () {
        let $element = $(this)
        let data     = $element.data(DATA_KEY)

        if (!data) {
          data = new Alert(this)
          $element.data(DATA_KEY, data)
        }

        if (config === 'close') {
          data[config](this)
        }
      })
    }

    static _handleDismiss(alertInstance) {
      return function (event) {
        if (event) {
          event.preventDefault()
        }

        alertInstance.close(this)
      }
    }

  }


  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(document).on(
    Event.CLICK_DATA_API,
    Selector.DISMISS,
    Alert._handleDismiss(new Alert())
  )


  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME]             = Alert._jQueryInterface
  $.fn[NAME].Constructor = Alert
  $.fn[NAME].noConflict  = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT
    return Alert._jQueryInterface
  }

  return Alert

})(jQuery)

export default Alert

import Util from './util'


/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.2): alert.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

const Alert = (($) => {


  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME                = 'alert'
  const VERSION             = '4.0.0-alpha'
  const DATA_KEY            = 'bs.alert'
  const EVENT_KEY           = `.${DATA_KEY}`
  const DATA_API_KEY        = '.data-api'
  const JQUERY_NO_CONFLICT  = $.fn[NAME]
  const TRANSITION_DURATION = 150

  const Selector = {
    DISMISS : '[data-dismiss="alert"]'
  }

  const Event = {
    CLOSE          : `close${EVENT_KEY}`,
    CLOSED         : `closed${EVENT_KEY}`,
    CLICK_DATA_API : `click${EVENT_KEY}${DATA_API_KEY}`
  }

  const ClassName = {
    ALERT : 'alert',
    FADE  : 'fade',
    IN    : 'in'
  }


  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class Alert {

    constructor(element) {
      this._element = element
    }


    // getters

    static get VERSION() {
      return VERSION
    }


    // public

    close(element) {
      element = element || this._element

      let rootElement = this._getRootElement(element)
      let customEvent = this._triggerCloseEvent(rootElement)

      if (customEvent.isDefaultPrevented()) {
        return
      }

      this._removeElement(rootElement)
    }

    dispose() {
      $.removeData(this._element, DATA_KEY)
      this._element = null
    }


    // private

    _getRootElement(element) {
      let selector = Util.getSelectorFromElement(element)
      let parent   = false

      if (selector) {
        parent = $(selector)[0]
      }

      if (!parent) {
        parent = $(element).closest(`.${ClassName.ALERT}`)[0]
      }

      return parent
    }

    _triggerCloseEvent(element) {
      let closeEvent = $.Event(Event.CLOSE)

      $(element).trigger(closeEvent)
      return closeEvent
    }

    _removeElement(element) {
      $(element).removeClass(ClassName.IN)

      if (!Util.supportsTransitionEnd() ||
          !$(element).hasClass(ClassName.FADE)) {
        this._destroyElement(element)
        return
      }

      $(element)
        .one(Util.TRANSITION_END, $.proxy(this._destroyElement, this, element))
        .emulateTransitionEnd(TRANSITION_DURATION)
    }

    _destroyElement(element) {
      $(element)
        .detach()
        .trigger(Event.CLOSED)
        .remove()
    }


    // static

    static _jQueryInterface(config) {
      return this.each(function () {
        let $element = $(this)
        let data     = $element.data(DATA_KEY)

        if (!data) {
          data = new Alert(this)
          $element.data(DATA_KEY, data)
        }

        if (config === 'close') {
          data[config](this)
        }
      })
    }

    static _handleDismiss(alertInstance) {
      return function (event) {
        if (event) {
          event.preventDefault()
        }

        alertInstance.close(this)
      }
    }

  }


  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(document).on(
    Event.CLICK_DATA_API,
    Selector.DISMISS,
    Alert._handleDismiss(new Alert())
  )


  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME]             = Alert._jQueryInterface
  $.fn[NAME].Constructor = Alert
  $.fn[NAME].noConflict  = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT
    return Alert._jQueryInterface
  }

  return Alert

})(jQuery)

export default Alert

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.2): button.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

const Button = (($) => {


  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME                = 'button'
  const VERSION             = '4.0.0-alpha'
  const DATA_KEY            = 'bs.button'
  const EVENT_KEY           = `.${DATA_KEY}`
  const DATA_API_KEY        = '.data-api'
  const JQUERY_NO_CONFLICT  = $.fn[NAME]

  const ClassName = {
    ACTIVE : 'active',
    BUTTON : 'btn',
    FOCUS  : 'focus'
  }

  const Selector = {
    DATA_TOGGLE_CARROT : '[data-toggle^="button"]',
    DATA_TOGGLE        : '[data-toggle="buttons"]',
    INPUT              : 'input',
    ACTIVE             : '.active',
    BUTTON             : '.btn'
  }

  const Event = {
    CLICK_DATA_API      : `click${EVENT_KEY}${DATA_API_KEY}`,
    FOCUS_BLUR_DATA_API : `focus${EVENT_KEY}${DATA_API_KEY} `
                        + `blur${EVENT_KEY}${DATA_API_KEY}`
  }


  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class Button {

    constructor(element) {
      this._element = element
    }


    // getters

    static get VERSION() {
      return VERSION
    }


    // public

    toggle() {
      let triggerChangeEvent = true
      let rootElement        = $(this._element).closest(
        Selector.DATA_TOGGLE
      )[0]

      if (rootElement) {
        let input = $(this._element).find(Selector.INPUT)[0]

        if (input) {
          if (input.type === 'radio') {
            if (input.checked &&
              $(this._element).hasClass(ClassName.ACTIVE)) {
              triggerChangeEvent = false

            } else {
              let activeElement = $(rootElement).find(Selector.ACTIVE)[0]

              if (activeElement) {
                $(activeElement).removeClass(ClassName.ACTIVE)
              }
            }
          }

          if (triggerChangeEvent) {
            input.checked = !$(this._element).hasClass(ClassName.ACTIVE)
            $(this._element).trigger('change')
          }
        }
      } else {
        this._element.setAttribute('aria-pressed',
          !$(this._element).hasClass(ClassName.ACTIVE))
      }

      if (triggerChangeEvent) {
        $(this._element).toggleClass(ClassName.ACTIVE)
      }
    }

    dispose() {
      $.removeData(this._element, DATA_KEY)
      this._element = null
    }


    // static

    static _jQueryInterface(config) {
      return this.each(function () {
        let data = $(this).data(DATA_KEY)

        if (!data) {
          data = new Button(this)
          $(this).data(DATA_KEY, data)
        }

        if (config === 'toggle') {
          data[config]()
        }
      })
    }

  }


  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(document)
    .on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE_CARROT, (event) => {
      event.preventDefault()

      let button = event.target

      if (!$(button).hasClass(ClassName.BUTTON)) {
        button = $(button).closest(Selector.BUTTON)
      }

      Button._jQueryInterface.call($(button), 'toggle')
    })
    .on(Event.FOCUS_BLUR_DATA_API, Selector.DATA_TOGGLE_CARROT, (event) => {
      let button = $(event.target).closest(Selector.BUTTON)[0]
      $(button).toggleClass(ClassName.FOCUS, /^focus(in)?$/.test(event.type))
    })


  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME]             = Button._jQueryInterface
  $.fn[NAME].Constructor = Button
  $.fn[NAME].noConflict  = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT
    return Button._jQueryInterface
  }

  return Button

})(jQuery)

export default Button

import Util from './util'


/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.2): carousel.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

const Carousel = (($) => {


  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME                = 'carousel'
  const VERSION             = '4.0.0-alpha'
  const DATA_KEY            = 'bs.carousel'
  const EVENT_KEY           = `.${DATA_KEY}`
  const DATA_API_KEY        = '.data-api'
  const JQUERY_NO_CONFLICT  = $.fn[NAME]
  const TRANSITION_DURATION = 600

  const Default = {
    interval : 5000,
    keyboard : true,
    slide    : false,
    pause    : 'hover',
    wrap     : true
  }

  const DefaultType = {
    interval : '(number|boolean)',
    keyboard : 'boolean',
    slide    : '(boolean|string)',
    pause    : '(string|boolean)',
    wrap     : 'boolean'
  }

  const Direction = {
    NEXT     : 'next',
    PREVIOUS : 'prev'
  }

  const Event = {
    SLIDE          : `slide${EVENT_KEY}`,
    SLID           : `slid${EVENT_KEY}`,
    KEYDOWN        : `keydown${EVENT_KEY}`,
    MOUSEENTER     : `mouseenter${EVENT_KEY}`,
    MOUSELEAVE     : `mouseleave${EVENT_KEY}`,
    LOAD_DATA_API  : `load${EVENT_KEY}${DATA_API_KEY}`,
    CLICK_DATA_API : `click${EVENT_KEY}${DATA_API_KEY}`
  }

  const ClassName = {
    CAROUSEL : 'carousel',
    ACTIVE   : 'active',
    SLIDE    : 'slide',
    RIGHT    : 'right',
    LEFT     : 'left',
    ITEM     : 'carousel-item'
  }

  const Selector = {
    ACTIVE      : '.active',
    ACTIVE_ITEM : '.active.carousel-item',
    ITEM        : '.carousel-item',
    NEXT_PREV   : '.next, .prev',
    INDICATORS  : '.carousel-indicators',
    DATA_SLIDE  : '[data-slide], [data-slide-to]',
    DATA_RIDE   : '[data-ride="carousel"]'
  }


  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class Carousel {

    constructor(element, config) {
      this._items             = null
      this._interval          = null
      this._activeElement     = null

      this._isPaused          = false
      this._isSliding         = false

      this._config            = this._getConfig(config)
      this._element           = $(element)[0]
      this._indicatorsElement = $(this._element).find(Selector.INDICATORS)[0]

      this._addEventListeners()
    }


    // getters

    static get VERSION() {
      return VERSION
    }

    static get Default() {
      return Default
    }


    // public

    next() {
      if (!this._isSliding) {
        this._slide(Direction.NEXT)
      }
    }

    nextWhenVisible() {
      // Don't call next when the page isn't visible
      if (!document.hidden) {
        this.next()
      }
    }

    prev() {
      if (!this._isSliding) {
        this._slide(Direction.PREVIOUS)
      }
    }

    pause(event) {
      if (!event) {
        this._isPaused = true
      }

      if ($(this._element).find(Selector.NEXT_PREV)[0] &&
        Util.supportsTransitionEnd()) {
        Util.triggerTransitionEnd(this._element)
        this.cycle(true)
      }

      clearInterval(this._interval)
      this._interval = null
    }

    cycle(event) {
      if (!event) {
        this._isPaused = false
      }

      if (this._interval) {
        clearInterval(this._interval)
        this._interval = null
      }

      if (this._config.interval && !this._isPaused) {
        this._interval = setInterval(
          $.proxy(document.visibilityState ? this.nextWhenVisible : this.next, this), this._config.interval
        )
      }
    }

    to(index) {
      this._activeElement = $(this._element).find(Selector.ACTIVE_ITEM)[0]

      let activeIndex = this._getItemIndex(this._activeElement)

      if (index > (this._items.length - 1) || index < 0) {
        return
      }

      if (this._isSliding) {
        $(this._element).one(Event.SLID, () => this.to(index))
        return
      }

      if (activeIndex === index) {
        this.pause()
        this.cycle()
        return
      }

      let direction = index > activeIndex ?
        Direction.NEXT :
        Direction.PREVIOUS

      this._slide(direction, this._items[index])
    }

    dispose() {
      $(this._element).off(EVENT_KEY)
      $.removeData(this._element, DATA_KEY)

      this._items             = null
      this._config            = null
      this._element           = null
      this._interval          = null
      this._isPaused          = null
      this._isSliding         = null
      this._activeElement     = null
      this._indicatorsElement = null
    }


    // private

    _getConfig(config) {
      config = $.extend({}, Default, config)
      Util.typeCheckConfig(NAME, config, DefaultType)
      return config
    }

    _addEventListeners() {
      if (this._config.keyboard) {
        $(this._element)
          .on(Event.KEYDOWN, $.proxy(this._keydown, this))
      }

      if (this._config.pause === 'hover' &&
        !('ontouchstart' in document.documentElement)) {
        $(this._element)
          .on(Event.MOUSEENTER, $.proxy(this.pause, this))
          .on(Event.MOUSELEAVE, $.proxy(this.cycle, this))
      }
    }

    _keydown(event) {
      event.preventDefault()

      if (/input|textarea/i.test(event.target.tagName)) {
        return
      }

      switch (event.which) {
        case 37: this.prev(); break
        case 39: this.next(); break
        default: return
      }
    }

    _getItemIndex(element) {
      this._items = $.makeArray($(element).parent().find(Selector.ITEM))
      return this._items.indexOf(element)
    }

    _getItemByDirection(direction, activeElement) {
      let isNextDirection = direction === Direction.NEXT
      let isPrevDirection = direction === Direction.PREVIOUS
      let activeIndex     = this._getItemIndex(activeElement)
      let lastItemIndex   = (this._items.length - 1)
      let isGoingToWrap   = (isPrevDirection && activeIndex === 0) ||
                            (isNextDirection && activeIndex === lastItemIndex)

      if (isGoingToWrap && !this._config.wrap) {
        return activeElement
      }

      let delta     = direction === Direction.PREVIOUS ? -1 : 1
      let itemIndex = (activeIndex + delta) % this._items.length

      return itemIndex === -1 ?
        this._items[this._items.length - 1] : this._items[itemIndex]
    }


    _triggerSlideEvent(relatedTarget, directionalClassname) {
      let slideEvent = $.Event(Event.SLIDE, {
        relatedTarget,
        direction: directionalClassname
      })

      $(this._element).trigger(slideEvent)

      return slideEvent
    }

    _setActiveIndicatorElement(element) {
      if (this._indicatorsElement) {
        $(this._indicatorsElement)
          .find(Selector.ACTIVE)
          .removeClass(ClassName.ACTIVE)

        let nextIndicator = this._indicatorsElement.children[
          this._getItemIndex(element)
        ]

        if (nextIndicator) {
          $(nextIndicator).addClass(ClassName.ACTIVE)
        }
      }
    }

    _slide(direction, element) {
      let activeElement = $(this._element).find(Selector.ACTIVE_ITEM)[0]
      let nextElement   = element || activeElement &&
        this._getItemByDirection(direction, activeElement)

      let isCycling = Boolean(this._interval)

      let directionalClassName = direction === Direction.NEXT ?
        ClassName.LEFT :
        ClassName.RIGHT

      if (nextElement && $(nextElement).hasClass(ClassName.ACTIVE)) {
        this._isSliding = false
        return
      }

      let slideEvent = this._triggerSlideEvent(nextElement, directionalClassName)
      if (slideEvent.isDefaultPrevented()) {
        return
      }

      if (!activeElement || !nextElement) {
        // some weirdness is happening, so we bail
        return
      }

      this._isSliding = true

      if (isCycling) {
        this.pause()
      }

      this._setActiveIndicatorElement(nextElement)

      let slidEvent = $.Event(Event.SLID, {
        relatedTarget: nextElement,
        direction: directionalClassName
      })

      if (Util.supportsTransitionEnd() &&
        $(this._element).hasClass(ClassName.SLIDE)) {

        $(nextElement).addClass(direction)

        Util.reflow(nextElement)

        $(activeElement).addClass(directionalClassName)
        $(nextElement).addClass(directionalClassName)

        $(activeElement)
          .one(Util.TRANSITION_END, () => {
            $(nextElement)
              .removeClass(directionalClassName)
              .removeClass(direction)

            $(nextElement).addClass(ClassName.ACTIVE)

            $(activeElement)
              .removeClass(ClassName.ACTIVE)
              .removeClass(direction)
              .removeClass(directionalClassName)

            this._isSliding = false

            setTimeout(() => $(this._element).trigger(slidEvent), 0)

          })
          .emulateTransitionEnd(TRANSITION_DURATION)

      } else {
        $(activeElement).removeClass(ClassName.ACTIVE)
        $(nextElement).addClass(ClassName.ACTIVE)

        this._isSliding = false
        $(this._element).trigger(slidEvent)
      }

      if (isCycling) {
        this.cycle()
      }
    }


    // static

    static _jQueryInterface(config) {
      return this.each(function () {
        let data      = $(this).data(DATA_KEY)
        let _config = $.extend({}, Default, $(this).data())

        if (typeof config === 'object') {
          $.extend(_config, config)
        }

        let action = typeof config === 'string' ? config : _config.slide

        if (!data) {
          data = new Carousel(this, _config)
          $(this).data(DATA_KEY, data)
        }

        if (typeof config === 'number') {
          data.to(config)
        } else if (typeof action === 'string') {
          if (data[action] === undefined) {
            throw new Error(`No method named "${action}"`)
          }
          data[action]()
        } else if (_config.interval) {
          data.pause()
          data.cycle()
        }
      })
    }

    static _dataApiClickHandler(event) {
      let selector = Util.getSelectorFromElement(this)

      if (!selector) {
        return
      }

      let target = $(selector)[0]

      if (!target || !$(target).hasClass(ClassName.CAROUSEL)) {
        return
      }

      let config     = $.extend({}, $(target).data(), $(this).data())
      let slideIndex = this.getAttribute('data-slide-to')

      if (slideIndex) {
        config.interval = false
      }

      Carousel._jQueryInterface.call($(target), config)

      if (slideIndex) {
        $(target).data(DATA_KEY).to(slideIndex)
      }

      event.preventDefault()
    }

  }


  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(document)
    .on(Event.CLICK_DATA_API, Selector.DATA_SLIDE, Carousel._dataApiClickHandler)

  $(window).on(Event.LOAD_DATA_API, () => {
    $(Selector.DATA_RIDE).each(function () {
      let $carousel = $(this)
      Carousel._jQueryInterface.call($carousel, $carousel.data())
    })
  })


  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME]             = Carousel._jQueryInterface
  $.fn[NAME].Constructor = Carousel
  $.fn[NAME].noConflict  = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT
    return Carousel._jQueryInterface
  }

  return Carousel

})(jQuery)

export default Carousel

import Util from './util'


/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.2): collapse.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

const Collapse = (($) => {


  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME                = 'collapse'
  const VERSION             = '4.0.0-alpha'
  const DATA_KEY            = 'bs.collapse'
  const EVENT_KEY           = `.${DATA_KEY}`
  const DATA_API_KEY        = '.data-api'
  const JQUERY_NO_CONFLICT  = $.fn[NAME]
  const TRANSITION_DURATION = 600

  const Default = {
    toggle : true,
    parent : ''
  }

  const DefaultType = {
    toggle : 'boolean',
    parent : 'string'
  }

  const Event = {
    SHOW           : `show${EVENT_KEY}`,
    SHOWN          : `shown${EVENT_KEY}`,
    HIDE           : `hide${EVENT_KEY}`,
    HIDDEN         : `hidden${EVENT_KEY}`,
    CLICK_DATA_API : `click${EVENT_KEY}${DATA_API_KEY}`
  }

  const ClassName = {
    IN         : 'in',
    COLLAPSE   : 'collapse',
    COLLAPSING : 'collapsing',
    COLLAPSED  : 'collapsed'
  }

  const Dimension = {
    WIDTH  : 'width',
    HEIGHT : 'height'
  }

  const Selector = {
    ACTIVES     : '.panel > .in, .panel > .collapsing',
    DATA_TOGGLE : '[data-toggle="collapse"]'
  }


  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class Collapse {

    constructor(element, config) {
      this._isTransitioning = false
      this._element         = element
      this._config          = this._getConfig(config)
      this._triggerArray    = $.makeArray($(
        `[data-toggle="collapse"][href="#${element.id}"],` +
        `[data-toggle="collapse"][data-target="#${element.id}"]`
      ))

      this._parent = this._config.parent ? this._getParent() : null

      if (!this._config.parent) {
        this._addAriaAndCollapsedClass(this._element, this._triggerArray)
      }

      if (this._config.toggle) {
        this.toggle()
      }
    }


    // getters

    static get VERSION() {
      return VERSION
    }

    static get Default() {
      return Default
    }


    // public

    toggle() {
      if ($(this._element).hasClass(ClassName.IN)) {
        this.hide()
      } else {
        this.show()
      }
    }

    show() {
      if (this._isTransitioning ||
        $(this._element).hasClass(ClassName.IN)) {
        return
      }

      let actives
      let activesData

      if (this._parent) {
        actives = $.makeArray($(Selector.ACTIVES))
        if (!actives.length) {
          actives = null
        }
      }

      if (actives) {
        activesData = $(actives).data(DATA_KEY)
        if (activesData && activesData._isTransitioning) {
          return
        }
      }

      let startEvent = $.Event(Event.SHOW)
      $(this._element).trigger(startEvent)
      if (startEvent.isDefaultPrevented()) {
        return
      }

      if (actives) {
        Collapse._jQueryInterface.call($(actives), 'hide')
        if (!activesData) {
          $(actives).data(DATA_KEY, null)
        }
      }

      let dimension = this._getDimension()

      $(this._element)
        .removeClass(ClassName.COLLAPSE)
        .addClass(ClassName.COLLAPSING)

      this._element.style[dimension] = 0
      this._element.setAttribute('aria-expanded', true)

      if (this._triggerArray.length) {
        $(this._triggerArray)
          .removeClass(ClassName.COLLAPSED)
          .attr('aria-expanded', true)
      }

      this.setTransitioning(true)

      let complete = () => {
        $(this._element)
          .removeClass(ClassName.COLLAPSING)
          .addClass(ClassName.COLLAPSE)
          .addClass(ClassName.IN)

        this._element.style[dimension] = ''

        this.setTransitioning(false)

        $(this._element).trigger(Event.SHOWN)
      }

      if (!Util.supportsTransitionEnd()) {
        complete()
        return
      }

      let capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1)
      let scrollSize           = `scroll${capitalizedDimension}`

      $(this._element)
        .one(Util.TRANSITION_END, complete)
        .emulateTransitionEnd(TRANSITION_DURATION)

      this._element.style[dimension] = `${this._element[scrollSize]}px`
    }

    hide() {
      if (this._isTransitioning ||
        !$(this._element).hasClass(ClassName.IN)) {
        return
      }

      let startEvent = $.Event(Event.HIDE)
      $(this._element).trigger(startEvent)
      if (startEvent.isDefaultPrevented()) {
        return
      }

      let dimension       = this._getDimension()
      let offsetDimension = dimension === Dimension.WIDTH ?
        'offsetWidth' : 'offsetHeight'

      this._element.style[dimension] = `${this._element[offsetDimension]}px`

      Util.reflow(this._element)

      $(this._element)
        .addClass(ClassName.COLLAPSING)
        .removeClass(ClassName.COLLAPSE)
        .removeClass(ClassName.IN)

      this._element.setAttribute('aria-expanded', false)

      if (this._triggerArray.length) {
        $(this._triggerArray)
          .addClass(ClassName.COLLAPSED)
          .attr('aria-expanded', false)
      }

      this.setTransitioning(true)

      let complete = () => {
        this.setTransitioning(false)
        $(this._element)
          .removeClass(ClassName.COLLAPSING)
          .addClass(ClassName.COLLAPSE)
          .trigger(Event.HIDDEN)
      }

      this._element.style[dimension] = 0

      if (!Util.supportsTransitionEnd()) {
        complete()
        return
      }

      $(this._element)
        .one(Util.TRANSITION_END, complete)
        .emulateTransitionEnd(TRANSITION_DURATION)
    }

    setTransitioning(isTransitioning) {
      this._isTransitioning = isTransitioning
    }

    dispose() {
      $.removeData(this._element, DATA_KEY)

      this._config          = null
      this._parent          = null
      this._element         = null
      this._triggerArray    = null
      this._isTransitioning = null
    }


    // private

    _getConfig(config) {
      config = $.extend({}, Default, config)
      config.toggle = Boolean(config.toggle) // coerce string values
      Util.typeCheckConfig(NAME, config, DefaultType)
      return config
    }

    _getDimension() {
      let hasWidth = $(this._element).hasClass(Dimension.WIDTH)
      return hasWidth ? Dimension.WIDTH : Dimension.HEIGHT
    }

    _getParent() {
      let parent   = $(this._config.parent)[0]
      let selector =
        `[data-toggle="collapse"][data-parent="${this._config.parent}"]`

      $(parent).find(selector).each((i, element) => {
        this._addAriaAndCollapsedClass(
          Collapse._getTargetFromElement(element),
          [element]
        )
      })

      return parent
    }

    _addAriaAndCollapsedClass(element, triggerArray) {
      if (element) {
        let isOpen = $(element).hasClass(ClassName.IN)
        element.setAttribute('aria-expanded', isOpen)

        if (triggerArray.length) {
          $(triggerArray)
            .toggleClass(ClassName.COLLAPSED, !isOpen)
            .attr('aria-expanded', isOpen)
        }
      }
    }


    // static

    static _getTargetFromElement(element) {
      let selector = Util.getSelectorFromElement(element)
      return selector ? $(selector)[0] : null
    }

    static _jQueryInterface(config) {
      return this.each(function () {
        let $this   = $(this)
        let data    = $this.data(DATA_KEY)
        let _config = $.extend(
          {},
          Default,
          $this.data(),
          typeof config === 'object' && config
        )

        if (!data && _config.toggle && /show|hide/.test(config)) {
          _config.toggle = false
        }

        if (!data) {
          data = new Collapse(this, _config)
          $this.data(DATA_KEY, data)
        }

        if (typeof config === 'string') {
          if (data[config] === undefined) {
            throw new Error(`No method named "${config}"`)
          }
          data[config]()
        }
      })
    }

  }


  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
    event.preventDefault()

    let target = Collapse._getTargetFromElement(this)
    let data   = $(target).data(DATA_KEY)
    let config = data ? 'toggle' : $(this).data()

    Collapse._jQueryInterface.call($(target), config)
  })


  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME]             = Collapse._jQueryInterface
  $.fn[NAME].Constructor = Collapse
  $.fn[NAME].noConflict  = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT
    return Collapse._jQueryInterface
  }

  return Collapse

})(jQuery)

export default Collapse

import Util from './util'


/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.2): dropdown.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

const Dropdown = (($) => {


  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME                = 'dropdown'
  const VERSION             = '4.0.0-alpha'
  const DATA_KEY            = 'bs.dropdown'
  const EVENT_KEY           = `.${DATA_KEY}`
  const DATA_API_KEY        = '.data-api'
  const JQUERY_NO_CONFLICT  = $.fn[NAME]

  const Event = {
    HIDE             : `hide${EVENT_KEY}`,
    HIDDEN           : `hidden${EVENT_KEY}`,
    SHOW             : `show${EVENT_KEY}`,
    SHOWN            : `shown${EVENT_KEY}`,
    CLICK            : `click${EVENT_KEY}`,
    CLICK_DATA_API   : `click${EVENT_KEY}${DATA_API_KEY}`,
    KEYDOWN_DATA_API : `keydown${EVENT_KEY}${DATA_API_KEY}`
  }

  const ClassName = {
    BACKDROP : 'dropdown-backdrop',
    DISABLED : 'disabled',
    OPEN     : 'open'
  }

  const Selector = {
    BACKDROP      : '.dropdown-backdrop',
    DATA_TOGGLE   : '[data-toggle="dropdown"]',
    FORM_CHILD    : '.dropdown form',
    ROLE_MENU     : '[role="menu"]',
    ROLE_LISTBOX  : '[role="listbox"]',
    NAVBAR_NAV    : '.navbar-nav',
    VISIBLE_ITEMS : '[role="menu"] li:not(.disabled) a, '
                  + '[role="listbox"] li:not(.disabled) a'
  }


  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class Dropdown {

    constructor(element) {
      this._element = element

      this._addEventListeners()
    }


    // getters

    static get VERSION() {
      return VERSION
    }


    // public

    toggle() {
      if (this.disabled || $(this).hasClass(ClassName.DISABLED)) {
        return false
      }

      let parent   = Dropdown._getParentFromElement(this)
      let isActive = $(parent).hasClass(ClassName.OPEN)

      Dropdown._clearMenus()

      if (isActive) {
        return false
      }

      if ('ontouchstart' in document.documentElement &&
         (!$(parent).closest(Selector.NAVBAR_NAV).length)) {

        // if mobile we use a backdrop because click events don't delegate
        let dropdown       = document.createElement('div')
        dropdown.className = ClassName.BACKDROP
        $(dropdown).insertBefore(this)
        $(dropdown).on('click', Dropdown._clearMenus)
      }

      let relatedTarget = { relatedTarget : this }
      let showEvent     = $.Event(Event.SHOW, relatedTarget)

      $(parent).trigger(showEvent)

      if (showEvent.isDefaultPrevented()) {
        return false
      }

      this.focus()
      this.setAttribute('aria-expanded', 'true')

      $(parent).toggleClass(ClassName.OPEN)
      $(parent).trigger($.Event(Event.SHOWN, relatedTarget))

      return false
    }

    dispose() {
      $.removeData(this._element, DATA_KEY)
      $(this._element).off(EVENT_KEY)
      this._element = null
    }


    // private

    _addEventListeners() {
      $(this._element).on(Event.CLICK, this.toggle)
    }


    // static

    static _jQueryInterface(config) {
      return this.each(function () {
        let data  = $(this).data(DATA_KEY)

        if (!data) {
          $(this).data(DATA_KEY, (data = new Dropdown(this)))
        }

        if (typeof config === 'string') {
          if (data[config] === undefined) {
            throw new Error(`No method named "${config}"`)
          }
          data[config].call(this)
        }
      })
    }

    static _clearMenus(event) {
      if (event && event.which === 3) {
        return
      }

      let backdrop = $(Selector.BACKDROP)[0]
      if (backdrop) {
        backdrop.parentNode.removeChild(backdrop)
      }

      let toggles = $.makeArray($(Selector.DATA_TOGGLE))

      for (let i = 0; i < toggles.length; i++) {
        let parent        = Dropdown._getParentFromElement(toggles[i])
        let relatedTarget = { relatedTarget : toggles[i] }

        if (!$(parent).hasClass(ClassName.OPEN)) {
          continue
        }

        if (event && event.type === 'click' &&
           (/input|textarea/i.test(event.target.tagName)) &&
           ($.contains(parent, event.target))) {
          continue
        }

        let hideEvent = $.Event(Event.HIDE, relatedTarget)
        $(parent).trigger(hideEvent)
        if (hideEvent.isDefaultPrevented()) {
          continue
        }

        toggles[i].setAttribute('aria-expanded', 'false')

        $(parent)
          .removeClass(ClassName.OPEN)
          .trigger($.Event(Event.HIDDEN, relatedTarget))
      }
    }

    static _getParentFromElement(element) {
      let parent
      let selector = Util.getSelectorFromElement(element)

      if (selector) {
        parent = $(selector)[0]
      }

      return parent || element.parentNode
    }

    static _dataApiKeydownHandler(event) {
      if (!/(38|40|27|32)/.test(event.which) ||
         /input|textarea/i.test(event.target.tagName)) {
        return
      }

      event.preventDefault()
      event.stopPropagation()

      if (this.disabled || $(this).hasClass(ClassName.DISABLED)) {
        return
      }

      let parent   = Dropdown._getParentFromElement(this)
      let isActive = $(parent).hasClass(ClassName.OPEN)

      if ((!isActive && event.which !== 27) ||
           (isActive && event.which === 27)) {

        if (event.which === 27) {
          let toggle = $(parent).find(Selector.DATA_TOGGLE)[0]
          $(toggle).trigger('focus')
        }

        $(this).trigger('click')
        return
      }

      let items = $.makeArray($(Selector.VISIBLE_ITEMS))

      items = items.filter((item) => {
        return item.offsetWidth || item.offsetHeight
      })

      if (!items.length) {
        return
      }

      let index = items.indexOf(event.target)

      if (event.which === 38 && index > 0) { // up
        index--
      }

      if (event.which === 40 && index < items.length - 1) { // down
        index++
      }

      if (!~index) {
        index = 0
      }

      items[index].focus()
    }

  }


  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(document)
    .on(Event.KEYDOWN_DATA_API, Selector.DATA_TOGGLE,  Dropdown._dataApiKeydownHandler)
    .on(Event.KEYDOWN_DATA_API, Selector.ROLE_MENU,    Dropdown._dataApiKeydownHandler)
    .on(Event.KEYDOWN_DATA_API, Selector.ROLE_LISTBOX, Dropdown._dataApiKeydownHandler)
    .on(Event.CLICK_DATA_API, Dropdown._clearMenus)
    .on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, Dropdown.prototype.toggle)
    .on(Event.CLICK_DATA_API, Selector.FORM_CHILD, (e) => {
      e.stopPropagation()
    })


  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME]             = Dropdown._jQueryInterface
  $.fn[NAME].Constructor = Dropdown
  $.fn[NAME].noConflict  = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT
    return Dropdown._jQueryInterface
  }

  return Dropdown

})(jQuery)

export default Dropdown

import Util from './util'


/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.2): modal.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

const Modal = (($) => {


  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME                         = 'modal'
  const VERSION                      = '4.0.0-alpha'
  const DATA_KEY                     = 'bs.modal'
  const EVENT_KEY                    = `.${DATA_KEY}`
  const DATA_API_KEY                 = '.data-api'
  const JQUERY_NO_CONFLICT           = $.fn[NAME]
  const TRANSITION_DURATION          = 300
  const BACKDROP_TRANSITION_DURATION = 150

  const Default = {
    backdrop : true,
    keyboard : true,
    focus    : true,
    show     : true
  }

  const DefaultType = {
    backdrop : '(boolean|string)',
    keyboard : 'boolean',
    focus    : 'boolean',
    show     : 'boolean'
  }

  const Event = {
    HIDE              : `hide${EVENT_KEY}`,
    HIDDEN            : `hidden${EVENT_KEY}`,
    SHOW              : `show${EVENT_KEY}`,
    SHOWN             : `shown${EVENT_KEY}`,
    FOCUSIN           : `focusin${EVENT_KEY}`,
    RESIZE            : `resize${EVENT_KEY}`,
    CLICK_DISMISS     : `click.dismiss${EVENT_KEY}`,
    KEYDOWN_DISMISS   : `keydown.dismiss${EVENT_KEY}`,
    MOUSEUP_DISMISS   : `mouseup.dismiss${EVENT_KEY}`,
    MOUSEDOWN_DISMISS : `mousedown.dismiss${EVENT_KEY}`,
    CLICK_DATA_API    : `click${EVENT_KEY}${DATA_API_KEY}`
  }

  const ClassName = {
    SCROLLBAR_MEASURER : 'modal-scrollbar-measure',
    BACKDROP           : 'modal-backdrop',
    OPEN               : 'modal-open',
    FADE               : 'fade',
    IN                 : 'in'
  }

  const Selector = {
    DIALOG             : '.modal-dialog',
    DATA_TOGGLE        : '[data-toggle="modal"]',
    DATA_DISMISS       : '[data-dismiss="modal"]',
    FIXED_CONTENT      : '.navbar-fixed-top, .navbar-fixed-bottom, .is-fixed'
  }


  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class Modal {

    constructor(element, config) {
      this._config              = this._getConfig(config)
      this._element             = element
      this._dialog              = $(element).find(Selector.DIALOG)[0]
      this._backdrop            = null
      this._isShown             = false
      this._isBodyOverflowing   = false
      this._ignoreBackdropClick = false
      this._originalBodyPadding = 0
      this._scrollbarWidth      = 0
    }


    // getters

    static get VERSION() {
      return VERSION
    }

    static get Default() {
      return Default
    }


    // public

    toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget)
    }

    show(relatedTarget) {
      let showEvent = $.Event(Event.SHOW, {
        relatedTarget
      })

      $(this._element).trigger(showEvent)

      if (this._isShown || showEvent.isDefaultPrevented()) {
        return
      }

      this._isShown = true

      this._checkScrollbar()
      this._setScrollbar()

      $(document.body).addClass(ClassName.OPEN)

      this._setEscapeEvent()
      this._setResizeEvent()

      $(this._element).on(
        Event.CLICK_DISMISS,
        Selector.DATA_DISMISS,
        $.proxy(this.hide, this)
      )

      $(this._dialog).on(Event.MOUSEDOWN_DISMISS, () => {
        $(this._element).one(Event.MOUSEUP_DISMISS, (event) => {
          if ($(event.target).is(this._element)) {
            this._ignoreBackdropClick = true
          }
        })
      })

      this._showBackdrop(
        $.proxy(this._showElement, this, relatedTarget)
      )
    }

    hide(event) {
      if (event) {
        event.preventDefault()
      }

      let hideEvent = $.Event(Event.HIDE)

      $(this._element).trigger(hideEvent)

      if (!this._isShown || hideEvent.isDefaultPrevented()) {
        return
      }

      this._isShown = false

      this._setEscapeEvent()
      this._setResizeEvent()

      $(document).off(Event.FOCUSIN)

      $(this._element).removeClass(ClassName.IN)

      $(this._element).off(Event.CLICK_DISMISS)
      $(this._dialog).off(Event.MOUSEDOWN_DISMISS)

      if (Util.supportsTransitionEnd() &&
         ($(this._element).hasClass(ClassName.FADE))) {

        $(this._element)
          .one(Util.TRANSITION_END, $.proxy(this._hideModal, this))
          .emulateTransitionEnd(TRANSITION_DURATION)
      } else {
        this._hideModal()
      }
    }

    dispose() {
      $.removeData(this._element, DATA_KEY)

      $(window).off(EVENT_KEY)
      $(document).off(EVENT_KEY)
      $(this._element).off(EVENT_KEY)
      $(this._backdrop).off(EVENT_KEY)

      this._config              = null
      this._element             = null
      this._dialog              = null
      this._backdrop            = null
      this._isShown             = null
      this._isBodyOverflowing   = null
      this._ignoreBackdropClick = null
      this._originalBodyPadding = null
      this._scrollbarWidth      = null
    }


    // private

    _getConfig(config) {
      config = $.extend({}, Default, config)
      Util.typeCheckConfig(NAME, config, DefaultType)
      return config
    }

    _showElement(relatedTarget) {
      let transition = Util.supportsTransitionEnd() &&
        $(this._element).hasClass(ClassName.FADE)

      if (!this._element.parentNode ||
         (this._element.parentNode.nodeType !== Node.ELEMENT_NODE)) {
        // don't move modals dom position
        document.body.appendChild(this._element)
      }

      this._element.style.display = 'block'
      this._element.scrollTop = 0

      if (transition) {
        Util.reflow(this._element)
      }

      $(this._element).addClass(ClassName.IN)

      if (this._config.focus) {
        this._enforceFocus()
      }

      let shownEvent = $.Event(Event.SHOWN, {
        relatedTarget
      })

      let transitionComplete = () => {
        if (this._config.focus) {
          this._element.focus()
        }
        $(this._element).trigger(shownEvent)
      }

      if (transition) {
        $(this._dialog)
          .one(Util.TRANSITION_END, transitionComplete)
          .emulateTransitionEnd(TRANSITION_DURATION)
      } else {
        transitionComplete()
      }
    }

    _enforceFocus() {
      $(document)
        .off(Event.FOCUSIN) // guard against infinite focus loop
        .on(Event.FOCUSIN, (event) => {
          if (this._element !== event.target &&
             (!$(this._element).has(event.target).length)) {
            this._element.focus()
          }
        })
    }

    _setEscapeEvent() {
      if (this._isShown && this._config.keyboard) {
        $(this._element).on(Event.KEYDOWN_DISMISS, (event) => {
          if (event.which === 27) {
            this.hide()
          }
        })

      } else if (!this._isShown) {
        $(this._element).off(Event.KEYDOWN_DISMISS)
      }
    }

    _setResizeEvent() {
      if (this._isShown) {
        $(window).on(Event.RESIZE, $.proxy(this._handleUpdate, this))
      } else {
        $(window).off(Event.RESIZE)
      }
    }

    _hideModal() {
      this._element.style.display = 'none'
      this._showBackdrop(() => {
        $(document.body).removeClass(ClassName.OPEN)
        this._resetAdjustments()
        this._resetScrollbar()
        $(this._element).trigger(Event.HIDDEN)
      })
    }

    _removeBackdrop() {
      if (this._backdrop) {
        $(this._backdrop).remove()
        this._backdrop = null
      }
    }

    _showBackdrop(callback) {
      let animate = $(this._element).hasClass(ClassName.FADE) ?
        ClassName.FADE : ''

      if (this._isShown && this._config.backdrop) {
        let doAnimate = Util.supportsTransitionEnd() && animate

        this._backdrop = document.createElement('div')
        this._backdrop.className = ClassName.BACKDROP

        if (animate) {
          $(this._backdrop).addClass(animate)
        }

        $(this._backdrop).appendTo(document.body)

        $(this._element).on(Event.CLICK_DISMISS, (event) => {
          if (this._ignoreBackdropClick) {
            this._ignoreBackdropClick = false
            return
          }
          if (event.target !== event.currentTarget) {
            return
          }
          if (this._config.backdrop === 'static') {
            this._element.focus()
          } else {
            this.hide()
          }
        })

        if (doAnimate) {
          Util.reflow(this._backdrop)
        }

        $(this._backdrop).addClass(ClassName.IN)

        if (!callback) {
          return
        }

        if (!doAnimate) {
          callback()
          return
        }

        $(this._backdrop)
          .one(Util.TRANSITION_END, callback)
          .emulateTransitionEnd(BACKDROP_TRANSITION_DURATION)

      } else if (!this._isShown && this._backdrop) {
        $(this._backdrop).removeClass(ClassName.IN)

        let callbackRemove = () => {
          this._removeBackdrop()
          if (callback) {
            callback()
          }
        }

        if (Util.supportsTransitionEnd() &&
           ($(this._element).hasClass(ClassName.FADE))) {
          $(this._backdrop)
            .one(Util.TRANSITION_END, callbackRemove)
            .emulateTransitionEnd(BACKDROP_TRANSITION_DURATION)
        } else {
          callbackRemove()
        }

      } else if (callback) {
        callback()
      }
    }


    // ----------------------------------------------------------------------
    // the following methods are used to handle overflowing modals
    // todo (fat): these should probably be refactored out of modal.js
    // ----------------------------------------------------------------------

    _handleUpdate() {
      this._adjustDialog()
    }

    _adjustDialog() {
      let isModalOverflowing =
        this._element.scrollHeight > document.documentElement.clientHeight

      if (!this._isBodyOverflowing && isModalOverflowing) {
        this._element.style.paddingLeft = `${this._scrollbarWidth}px`
      }

      if (this._isBodyOverflowing && !isModalOverflowing) {
        this._element.style.paddingRight = `${this._scrollbarWidth}px~`
      }
    }

    _resetAdjustments() {
      this._element.style.paddingLeft = ''
      this._element.style.paddingRight = ''
    }

    _checkScrollbar() {
      let fullWindowWidth = window.innerWidth
      if (!fullWindowWidth) { // workaround for missing window.innerWidth in IE8
        let documentElementRect = document.documentElement.getBoundingClientRect()
        fullWindowWidth =
          documentElementRect.right - Math.abs(documentElementRect.left)
      }
      this._isBodyOverflowing = document.body.clientWidth < fullWindowWidth
      this._scrollbarWidth = this._getScrollbarWidth()
    }

    _setScrollbar() {
      let bodyPadding = parseInt(
        $(Selector.FIXED_CONTENT).css('padding-right') || 0,
        10
      )

      this._originalBodyPadding = document.body.style.paddingRight || ''

      if (this._isBodyOverflowing) {
        document.body.style.paddingRight =
          `${bodyPadding + this._scrollbarWidth}px`
      }
    }

    _resetScrollbar() {
      document.body.style.paddingRight = this._originalBodyPadding
    }

    _getScrollbarWidth() { // thx d.walsh
      let scrollDiv = document.createElement('div')
      scrollDiv.className = ClassName.SCROLLBAR_MEASURER
      document.body.appendChild(scrollDiv)
      let scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
      document.body.removeChild(scrollDiv)
      return scrollbarWidth
    }


    // static

    static _jQueryInterface(config, relatedTarget) {
      return this.each(function () {
        let data    = $(this).data(DATA_KEY)
        let _config = $.extend(
          {},
          Modal.Default,
          $(this).data(),
          typeof config === 'object' && config
        )

        if (!data) {
          data = new Modal(this, _config)
          $(this).data(DATA_KEY, data)
        }

        if (typeof config === 'string') {
          if (data[config] === undefined) {
            throw new Error(`No method named "${config}"`)
          }
          data[config](relatedTarget)
        } else if (_config.show) {
          data.show(relatedTarget)
        }
      })
    }

  }


  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
    let target
    let selector = Util.getSelectorFromElement(this)

    if (selector) {
      target = $(selector)[0]
    }

    let config = $(target).data(DATA_KEY) ?
      'toggle' : $.extend({}, $(target).data(), $(this).data())

    if (this.tagName === 'A') {
      event.preventDefault()
    }

    let $target = $(target).one(Event.SHOW, (showEvent) => {
      if (showEvent.isDefaultPrevented()) {
        // only register focus restorer if modal will actually get shown
        return
      }

      $target.one(Event.HIDDEN, () => {
        if ($(this).is(':visible')) {
          this.focus()
        }
      })
    })

    Modal._jQueryInterface.call($(target), config, this)
  })


  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME]             = Modal._jQueryInterface
  $.fn[NAME].Constructor = Modal
  $.fn[NAME].noConflict  = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT
    return Modal._jQueryInterface
  }

  return Modal

})(jQuery)

export default Modal

import Tooltip from './tooltip'


/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.2): popover.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

const Popover = (($) => {


  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME                = 'popover'
  const VERSION             = '4.0.0-alpha'
  const DATA_KEY            = 'bs.popover'
  const EVENT_KEY           = `.${DATA_KEY}`
  const JQUERY_NO_CONFLICT  = $.fn[NAME]

  const Default = $.extend({}, Tooltip.Default, {
    placement : 'right',
    trigger   : 'click',
    content   : '',
    template  : '<div class="popover" role="tooltip">'
              + '<div class="popover-arrow"></div>'
              + '<h3 class="popover-title"></h3>'
              + '<div class="popover-content"></div></div>'
  })

  const DefaultType = $.extend({}, Tooltip.DefaultType, {
    content : '(string|element|function)'
  })

  const ClassName = {
    FADE : 'fade',
    IN  : 'in'
  }

  const Selector = {
    TITLE   : '.popover-title',
    CONTENT : '.popover-content',
    ARROW   : '.popover-arrow'
  }

  const Event = {
    HIDE       : `hide${EVENT_KEY}`,
    HIDDEN     : `hidden${EVENT_KEY}`,
    SHOW       : `show${EVENT_KEY}`,
    SHOWN      : `shown${EVENT_KEY}`,
    INSERTED   : `inserted${EVENT_KEY}`,
    CLICK      : `click${EVENT_KEY}`,
    FOCUSIN    : `focusin${EVENT_KEY}`,
    FOCUSOUT   : `focusout${EVENT_KEY}`,
    MOUSEENTER : `mouseenter${EVENT_KEY}`,
    MOUSELEAVE : `mouseleave${EVENT_KEY}`
  }


  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class Popover extends Tooltip {


    // getters

    static get VERSION() {
      return VERSION
    }

    static get Default() {
      return Default
    }

    static get NAME() {
      return NAME
    }

    static get DATA_KEY() {
      return DATA_KEY
    }

    static get Event() {
      return Event
    }

    static get EVENT_KEY() {
      return EVENT_KEY
    }

    static get DefaultType() {
      return DefaultType
    }


    // overrides

    isWithContent() {
      return this.getTitle() || this._getContent()
    }

    getTipElement() {
      return (this.tip = this.tip || $(this.config.template)[0])
    }

    setContent() {
      let $tip = $(this.getTipElement())

      // we use append for html objects to maintain js events
      this.setElementContent($tip.find(Selector.TITLE), this.getTitle())
      this.setElementContent($tip.find(Selector.CONTENT), this._getContent())

      $tip
        .removeClass(ClassName.FADE)
        .removeClass(ClassName.IN)

      this.cleanupTether()
    }

    // private

    _getContent() {
      return this.element.getAttribute('data-content')
        || (typeof this.config.content === 'function' ?
              this.config.content.call(this.element) :
              this.config.content)
    }


    // static

    static _jQueryInterface(config) {
      return this.each(function () {
        let data   = $(this).data(DATA_KEY)
        let _config = typeof config === 'object' ? config : null

        if (!data && /destroy|hide/.test(config)) {
          return
        }

        if (!data) {
          data = new Popover(this, _config)
          $(this).data(DATA_KEY, data)
        }

        if (typeof config === 'string') {
          if (data[config] === undefined) {
            throw new Error(`No method named "${config}"`)
          }
          data[config]()
        }
      })
    }
  }


  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME]             = Popover._jQueryInterface
  $.fn[NAME].Constructor = Popover
  $.fn[NAME].noConflict  = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT
    return Popover._jQueryInterface
  }

  return Popover

})(jQuery)

export default Popover

import Util from './util'


/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.2): scrollspy.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

const ScrollSpy = (($) => {


  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME               = 'scrollspy'
  const VERSION            = '4.0.0-alpha'
  const DATA_KEY           = 'bs.scrollspy'
  const EVENT_KEY          = `.${DATA_KEY}`
  const DATA_API_KEY       = '.data-api'
  const JQUERY_NO_CONFLICT = $.fn[NAME]

  const Default = {
    offset : 10,
    method : 'auto',
    target : ''
  }

  const DefaultType = {
    offset : 'number',
    method : 'string',
    target : '(string|element)'
  }

  const Event = {
    ACTIVATE      : `activate${EVENT_KEY}`,
    SCROLL        : `scroll${EVENT_KEY}`,
    LOAD_DATA_API : `load${EVENT_KEY}${DATA_API_KEY}`
  }

  const ClassName = {
    DROPDOWN_ITEM : 'dropdown-item',
    DROPDOWN_MENU : 'dropdown-menu',
    NAV_LINK      : 'nav-link',
    NAV           : 'nav',
    ACTIVE        : 'active'
  }

  const Selector = {
    DATA_SPY        : '[data-spy="scroll"]',
    ACTIVE          : '.active',
    LIST_ITEM       : '.list-item',
    LI              : 'li',
    LI_DROPDOWN     : 'li.dropdown',
    NAV_LINKS       : '.nav-link',
    DROPDOWN        : '.dropdown',
    DROPDOWN_ITEMS  : '.dropdown-item',
    DROPDOWN_TOGGLE : '.dropdown-toggle'
  }

  const OffsetMethod = {
    OFFSET   : 'offset',
    POSITION : 'position'
  }


  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class ScrollSpy {

    constructor(element, config) {
      this._element       = element
      this._scrollElement = element.tagName === 'BODY' ? window : element
      this._config        = this._getConfig(config)
      this._selector      = `${this._config.target} ${Selector.NAV_LINKS},`
                          + `${this._config.target} ${Selector.DROPDOWN_ITEMS}`
      this._offsets       = []
      this._targets       = []
      this._activeTarget  = null
      this._scrollHeight  = 0

      $(this._scrollElement).on(Event.SCROLL, $.proxy(this._process, this))

      this.refresh()
      this._process()
    }


    // getters

    static get VERSION() {
      return VERSION
    }

    static get Default() {
      return Default
    }


    // public

    refresh() {
      let autoMethod = this._scrollElement !== this._scrollElement.window ?
        OffsetMethod.POSITION : OffsetMethod.OFFSET

      let offsetMethod = this._config.method === 'auto' ?
        autoMethod : this._config.method

      let offsetBase = offsetMethod === OffsetMethod.POSITION ?
        this._getScrollTop() : 0

      this._offsets = []
      this._targets = []

      this._scrollHeight = this._getScrollHeight()

      let targets = $.makeArray($(this._selector))

      targets
        .map((element) => {
          let target
          let targetSelector = Util.getSelectorFromElement(element)

          if (targetSelector) {
            target = $(targetSelector)[0]
          }

          if (target && (target.offsetWidth || target.offsetHeight)) {
            // todo (fat): remove sketch reliance on jQuery position/offset
            return [
              $(target)[offsetMethod]().top + offsetBase,
              targetSelector
            ]
          }
        })
        .filter((item)  => item)
        .sort((a, b)    => a[0] - b[0])
        .forEach((item) => {
          this._offsets.push(item[0])
          this._targets.push(item[1])
        })
    }

    dispose() {
      $.removeData(this._element, DATA_KEY)
      $(this._scrollElement).off(EVENT_KEY)

      this._element       = null
      this._scrollElement = null
      this._config        = null
      this._selector      = null
      this._offsets       = null
      this._targets       = null
      this._activeTarget  = null
      this._scrollHeight  = null
    }


    // private

    _getConfig(config) {
      config = $.extend({}, Default, config)

      if (typeof config.target !== 'string') {
        let id = $(config.target).attr('id')
        if (!id) {
          id = Util.getUID(NAME)
          $(config.target).attr('id', id)
        }
        config.target = `#${id}`
      }

      Util.typeCheckConfig(NAME, config, DefaultType)

      return config
    }

    _getScrollTop() {
      return this._scrollElement === window ?
          this._scrollElement.scrollY : this._scrollElement.scrollTop
    }

    _getScrollHeight() {
      return this._scrollElement.scrollHeight || Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight
      )
    }

    _process() {
      let scrollTop    = this._getScrollTop() + this._config.offset
      let scrollHeight = this._getScrollHeight()
      let maxScroll    = this._config.offset
        + scrollHeight
        - this._scrollElement.offsetHeight

      if (this._scrollHeight !== scrollHeight) {
        this.refresh()
      }

      if (scrollTop >= maxScroll) {
        let target = this._targets[this._targets.length - 1]

        if (this._activeTarget !== target) {
          this._activate(target)
        }
      }

      if (this._activeTarget && scrollTop < this._offsets[0]) {
        this._activeTarget = null
        this._clear()
        return
      }

      for (let i = this._offsets.length; i--;) {
        let isActiveTarget = this._activeTarget !== this._targets[i]
            && scrollTop >= this._offsets[i]
            && (this._offsets[i + 1] === undefined ||
                scrollTop < this._offsets[i + 1])

        if (isActiveTarget) {
          this._activate(this._targets[i])
        }
      }
    }

    _activate(target) {
      this._activeTarget = target

      this._clear()

      let queries = this._selector.split(',')
      queries     = queries.map((selector) => {
        return `${selector}[data-target="${target}"],` +
               `${selector}[href="${target}"]`
      })

      let $link = $(queries.join(','))

      if ($link.hasClass(ClassName.DROPDOWN_ITEM)) {
        $link.closest(Selector.DROPDOWN).find(Selector.DROPDOWN_TOGGLE).addClass(ClassName.ACTIVE)
        $link.addClass(ClassName.ACTIVE)
      } else {
        // todo (fat) this is kinda sus…
        // recursively add actives to tested nav-links
        $link.parents(Selector.LI).find(Selector.NAV_LINKS).addClass(ClassName.ACTIVE)
      }

      $(this._scrollElement).trigger(Event.ACTIVATE, {
        relatedTarget: target
      })
    }

    _clear() {
      $(this._selector).filter(Selector.ACTIVE).removeClass(ClassName.ACTIVE)
    }


    // static

    static _jQueryInterface(config) {
      return this.each(function () {
        let data    = $(this).data(DATA_KEY)
        let _config = typeof config === 'object' && config || null

        if (!data) {
          data = new ScrollSpy(this, _config)
          $(this).data(DATA_KEY, data)
        }

        if (typeof config === 'string') {
          if (data[config] === undefined) {
            throw new Error(`No method named "${config}"`)
          }
          data[config]()
        }
      })
    }


  }


  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(window).on(Event.LOAD_DATA_API, () => {
    let scrollSpys = $.makeArray($(Selector.DATA_SPY))

    for (let i = scrollSpys.length; i--;) {
      let $spy = $(scrollSpys[i])
      ScrollSpy._jQueryInterface.call($spy, $spy.data())
    }
  })


  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME]             = ScrollSpy._jQueryInterface
  $.fn[NAME].Constructor = ScrollSpy
  $.fn[NAME].noConflict  = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT
    return ScrollSpy._jQueryInterface
  }

  return ScrollSpy

})(jQuery)

export default ScrollSpy

import Util from './util'


/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.2): tab.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

const Tab = (($) => {


  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME                = 'tab'
  const VERSION             = '4.0.0-alpha'
  const DATA_KEY            = 'bs.tab'
  const EVENT_KEY           = `.${DATA_KEY}`
  const DATA_API_KEY        = '.data-api'
  const JQUERY_NO_CONFLICT  = $.fn[NAME]
  const TRANSITION_DURATION = 150

  const Event = {
    HIDE           : `hide${EVENT_KEY}`,
    HIDDEN         : `hidden${EVENT_KEY}`,
    SHOW           : `show${EVENT_KEY}`,
    SHOWN          : `shown${EVENT_KEY}`,
    CLICK_DATA_API : `click${EVENT_KEY}${DATA_API_KEY}`
  }

  const ClassName = {
    DROPDOWN_MENU : 'dropdown-menu',
    ACTIVE        : 'active',
    FADE          : 'fade',
    IN            : 'in'
  }

  const Selector = {
    A                     : 'a',
    LI                    : 'li',
    DROPDOWN              : '.dropdown',
    UL                    : 'ul:not(.dropdown-menu)',
    FADE_CHILD            : '> .nav-item .fade, > .fade',
    ACTIVE                : '.active',
    ACTIVE_CHILD          : '> .nav-item > .active, > .active',
    DATA_TOGGLE           : '[data-toggle="tab"], [data-toggle="pill"]',
    DROPDOWN_TOGGLE       : '.dropdown-toggle',
    DROPDOWN_ACTIVE_CHILD : '> .dropdown-menu .active'
  }


  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class Tab {

    constructor(element) {
      this._element = element
    }


    // getters

    static get VERSION() {
      return VERSION
    }


    // public

    show() {
      if (this._element.parentNode &&
         (this._element.parentNode.nodeType === Node.ELEMENT_NODE) &&
         ($(this._element).hasClass(ClassName.ACTIVE))) {
        return
      }

      let target
      let previous
      let ulElement = $(this._element).closest(Selector.UL)[0]
      let selector  = Util.getSelectorFromElement(this._element)

      if (ulElement) {
        previous = $.makeArray($(ulElement).find(Selector.ACTIVE))
        previous = previous[previous.length - 1]
      }

      let hideEvent = $.Event(Event.HIDE, {
        relatedTarget: this._element
      })

      let showEvent = $.Event(Event.SHOW, {
        relatedTarget: previous
      })

      if (previous) {
        $(previous).trigger(hideEvent)
      }

      $(this._element).trigger(showEvent)

      if (showEvent.isDefaultPrevented() ||
         (hideEvent.isDefaultPrevented())) {
        return
      }

      if (selector) {
        target = $(selector)[0]
      }

      this._activate(
        this._element,
        ulElement
      )

      let complete = () => {
        let hiddenEvent = $.Event(Event.HIDDEN, {
          relatedTarget: this._element
        })

        let shownEvent  = $.Event(Event.SHOWN, {
          relatedTarget: previous
        })

        $(previous).trigger(hiddenEvent)
        $(this._element).trigger(shownEvent)
      }

      if (target) {
        this._activate(target, target.parentNode, complete)
      } else {
        complete()
      }
    }

    dispose() {
      $.removeClass(this._element, DATA_KEY)
      this._element = null
    }


    // private

    _activate(element, container, callback) {
      let active          = $(container).find(Selector.ACTIVE_CHILD)[0]
      let isTransitioning = callback
        && Util.supportsTransitionEnd()
        && ((active && $(active).hasClass(ClassName.FADE))
           || Boolean($(container).find(Selector.FADE_CHILD)[0]))

      let complete = $.proxy(
        this._transitionComplete,
        this,
        element,
        active,
        isTransitioning,
        callback
      )

      if (active && isTransitioning) {
        $(active)
          .one(Util.TRANSITION_END, complete)
          .emulateTransitionEnd(TRANSITION_DURATION)

      } else {
        complete()
      }

      if (active) {
        $(active).removeClass(ClassName.IN)
      }
    }

    _transitionComplete(element, active, isTransitioning, callback) {
      if (active) {
        $(active).removeClass(ClassName.ACTIVE)

        let dropdownChild = $(active).find(
          Selector.DROPDOWN_ACTIVE_CHILD
        )[0]

        if (dropdownChild) {
          $(dropdownChild).removeClass(ClassName.ACTIVE)
        }

        active.setAttribute('aria-expanded', false)
      }

      $(element).addClass(ClassName.ACTIVE)
      element.setAttribute('aria-expanded', true)

      if (isTransitioning) {
        Util.reflow(element)
        $(element).addClass(ClassName.IN)
      } else {
        $(element).removeClass(ClassName.FADE)
      }

      if (element.parentNode &&
         ($(element.parentNode).hasClass(ClassName.DROPDOWN_MENU))) {

        let dropdownElement = $(element).closest(Selector.DROPDOWN)[0]
        if (dropdownElement) {
          $(dropdownElement).find(Selector.DROPDOWN_TOGGLE).addClass(ClassName.ACTIVE)
        }

        element.setAttribute('aria-expanded', true)
      }

      if (callback) {
        callback()
      }
    }


    // static

    static _jQueryInterface(config) {
      return this.each(function () {
        let $this = $(this)
        let data  = $this.data(DATA_KEY)

        if (!data) {
          data = data = new Tab(this)
          $this.data(DATA_KEY, data)
        }

        if (typeof config === 'string') {
          if (data[config] === undefined) {
            throw new Error(`No method named "${config}"`)
          }
          data[config]()
        }
      })
    }

  }


  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(document)
    .on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
      event.preventDefault()
      Tab._jQueryInterface.call($(this), 'show')
    })


  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME]             = Tab._jQueryInterface
  $.fn[NAME].Constructor = Tab
  $.fn[NAME].noConflict  = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT
    return Tab._jQueryInterface
  }

  return Tab

})(jQuery)

export default Tab

/* global Tether */

import Util from './util'


/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.2): tooltip.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

const Tooltip = (($) => {

  /**
   * Check for Tether dependency
   * Tether - http://github.hubspot.com/tether/
   */
  if (window.Tether === undefined) {
    throw new Error('Bootstrap tooltips require Tether (http://github.hubspot.com/tether/)')
  }


  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME                = 'tooltip'
  const VERSION             = '4.0.0-alpha'
  const DATA_KEY            = 'bs.tooltip'
  const EVENT_KEY           = `.${DATA_KEY}`
  const JQUERY_NO_CONFLICT  = $.fn[NAME]
  const TRANSITION_DURATION = 150
  const CLASS_PREFIX        = 'bs-tether'

  const Default = {
    animation   : true,
    template    : '<div class="tooltip" role="tooltip">'
                + '<div class="tooltip-arrow"></div>'
                + '<div class="tooltip-inner"></div></div>',
    trigger     : 'hover focus',
    title       : '',
    delay       : 0,
    html        : false,
    selector    : false,
    placement   : 'top',
    offset      : '0 0',
    constraints : []
  }

  const DefaultType = {
    animation   : 'boolean',
    template    : 'string',
    title       : '(string|element|function)',
    trigger     : 'string',
    delay       : '(number|object)',
    html        : 'boolean',
    selector    : '(string|boolean)',
    placement   : '(string|function)',
    offset      : 'string',
    constraints : 'array'
  }

  const AttachmentMap = {
    TOP    : 'bottom center',
    RIGHT  : 'middle left',
    BOTTOM : 'top center',
    LEFT   : 'middle right'
  }

  const HoverState = {
    IN  : 'in',
    OUT : 'out'
  }

  const Event = {
    HIDE       : `hide${EVENT_KEY}`,
    HIDDEN     : `hidden${EVENT_KEY}`,
    SHOW       : `show${EVENT_KEY}`,
    SHOWN      : `shown${EVENT_KEY}`,
    INSERTED   : `inserted${EVENT_KEY}`,
    CLICK      : `click${EVENT_KEY}`,
    FOCUSIN    : `focusin${EVENT_KEY}`,
    FOCUSOUT   : `focusout${EVENT_KEY}`,
    MOUSEENTER : `mouseenter${EVENT_KEY}`,
    MOUSELEAVE : `mouseleave${EVENT_KEY}`
  }

  const ClassName = {
    FADE : 'fade',
    IN   : 'in'
  }

  const Selector = {
    TOOLTIP       : '.tooltip',
    TOOLTIP_INNER : '.tooltip-inner'
  }

  const TetherClass = {
    element : false,
    enabled : false
  }

  const Trigger = {
    HOVER  : 'hover',
    FOCUS  : 'focus',
    CLICK  : 'click',
    MANUAL : 'manual'
  }


  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class Tooltip {

    constructor(element, config) {

      // private
      this._isEnabled      = true
      this._timeout        = 0
      this._hoverState     = ''
      this._activeTrigger  = {}
      this._tether         = null

      // protected
      this.element = element
      this.config  = this._getConfig(config)
      this.tip     = null

      this._setListeners()

    }


    // getters

    static get VERSION() {
      return VERSION
    }

    static get Default() {
      return Default
    }

    static get NAME() {
      return NAME
    }

    static get DATA_KEY() {
      return DATA_KEY
    }

    static get Event() {
      return Event
    }

    static get EVENT_KEY() {
      return EVENT_KEY
    }

    static get DefaultType() {
      return DefaultType
    }


    // public

    enable() {
      this._isEnabled = true
    }

    disable() {
      this._isEnabled = false
    }

    toggleEnabled() {
      this._isEnabled = !this._isEnabled
    }

    toggle(event) {
      if (event) {
        let dataKey = this.constructor.DATA_KEY
        let context = $(event.currentTarget).data(dataKey)

        if (!context) {
          context = new this.constructor(
            event.currentTarget,
            this._getDelegateConfig()
          )
          $(event.currentTarget).data(dataKey, context)
        }

        context._activeTrigger.click = !context._activeTrigger.click

        if (context._isWithActiveTrigger()) {
          context._enter(null, context)
        } else {
          context._leave(null, context)
        }

      } else {

        if ($(this.getTipElement()).hasClass(ClassName.IN)) {
          this._leave(null, this)
          return
        }

        this._enter(null, this)
      }
    }

    dispose() {
      clearTimeout(this._timeout)

      this.cleanupTether()

      $.removeData(this.element, this.constructor.DATA_KEY)

      $(this.element).off(this.constructor.EVENT_KEY)

      if (this.tip) {
        $(this.tip).remove()
      }

      this._isEnabled      = null
      this._timeout        = null
      this._hoverState     = null
      this._activeTrigger  = null
      this._tether         = null

      this.element = null
      this.config  = null
      this.tip     = null
    }

    show() {
      let showEvent = $.Event(this.constructor.Event.SHOW)

      if (this.isWithContent() && this._isEnabled) {
        $(this.element).trigger(showEvent)

        let isInTheDom = $.contains(
          this.element.ownerDocument.documentElement,
          this.element
        )

        if (showEvent.isDefaultPrevented() || !isInTheDom) {
          return
        }

        let tip   = this.getTipElement()
        let tipId = Util.getUID(this.constructor.NAME)

        tip.setAttribute('id', tipId)
        this.element.setAttribute('aria-describedby', tipId)

        this.setContent()

        if (this.config.animation) {
          $(tip).addClass(ClassName.FADE)
        }

        let placement  = typeof this.config.placement === 'function' ?
          this.config.placement.call(this, tip, this.element) :
          this.config.placement

        let attachment = this._getAttachment(placement)

        $(tip)
          .data(this.constructor.DATA_KEY, this)
          .appendTo(document.body)

        $(this.element).trigger(this.constructor.Event.INSERTED)

        this._tether = new Tether({
          attachment,
          element         : tip,
          target          : this.element,
          classes         : TetherClass,
          classPrefix     : CLASS_PREFIX,
          offset          : this.config.offset,
          constraints     : this.config.constraints,
          addTargetClasses: false
        })

        Util.reflow(tip)
        this._tether.position()

        $(tip).addClass(ClassName.IN)

        let complete = () => {
          let prevHoverState = this._hoverState
          this._hoverState   = null

          $(this.element).trigger(this.constructor.Event.SHOWN)

          if (prevHoverState === HoverState.OUT) {
            this._leave(null, this)
          }
        }

        if (Util.supportsTransitionEnd() && $(this.tip).hasClass(ClassName.FADE)) {
          $(this.tip)
            .one(Util.TRANSITION_END, complete)
            .emulateTransitionEnd(Tooltip._TRANSITION_DURATION)
          return
        }

        complete()
      }
    }

    hide(callback) {
      let tip       = this.getTipElement()
      let hideEvent = $.Event(this.constructor.Event.HIDE)
      let complete  = () => {
        if (this._hoverState !== HoverState.IN && tip.parentNode) {
          tip.parentNode.removeChild(tip)
        }

        this.element.removeAttribute('aria-describedby')
        $(this.element).trigger(this.constructor.Event.HIDDEN)
        this.cleanupTether()

        if (callback) {
          callback()
        }
      }

      $(this.element).trigger(hideEvent)

      if (hideEvent.isDefaultPrevented()) {
        return
      }

      $(tip).removeClass(ClassName.IN)

      if (Util.supportsTransitionEnd() &&
         ($(this.tip).hasClass(ClassName.FADE))) {

        $(tip)
          .one(Util.TRANSITION_END, complete)
          .emulateTransitionEnd(TRANSITION_DURATION)

      } else {
        complete()
      }

      this._hoverState = ''
    }


    // protected

    isWithContent() {
      return Boolean(this.getTitle())
    }

    getTipElement() {
      return (this.tip = this.tip || $(this.config.template)[0])
    }

    setContent() {
      let $tip = $(this.getTipElement())

      this.setElementContent($tip.find(Selector.TOOLTIP_INNER), this.getTitle())

      $tip
        .removeClass(ClassName.FADE)
        .removeClass(ClassName.IN)

      this.cleanupTether()
    }

    setElementContent($element, content) {
      let html = this.config.html
      if (typeof content === 'object' && (content.nodeType || content.jquery)) {
        // content is a DOM node or a jQuery
        if (html) {
          if (!$(content).parent().is($element)) {
            $element.empty().append(content)
          }
        } else {
          $element.text($(content).text())
        }
      } else {
        $element[html ? 'html' : 'text'](content)
      }
    }

    getTitle() {
      let title = this.element.getAttribute('data-original-title')

      if (!title) {
        title = typeof this.config.title === 'function' ?
          this.config.title.call(this.element) :
          this.config.title
      }

      return title
    }

    cleanupTether() {
      if (this._tether) {
        this._tether.destroy()
      }
    }


    // private

    _getAttachment(placement) {
      return AttachmentMap[placement.toUpperCase()]
    }

    _setListeners() {
      let triggers = this.config.trigger.split(' ')

      triggers.forEach((trigger) => {
        if (trigger === 'click') {
          $(this.element).on(
            this.constructor.Event.CLICK,
            this.config.selector,
            $.proxy(this.toggle, this)
          )

        } else if (trigger !== Trigger.MANUAL) {
          let eventIn  = trigger === Trigger.HOVER ?
            this.constructor.Event.MOUSEENTER :
            this.constructor.Event.FOCUSIN
          let eventOut = trigger === Trigger.HOVER ?
            this.constructor.Event.MOUSELEAVE :
            this.constructor.Event.FOCUSOUT

          $(this.element)
            .on(
              eventIn,
              this.config.selector,
              $.proxy(this._enter, this)
            )
            .on(
              eventOut,
              this.config.selector,
              $.proxy(this._leave, this)
            )
        }
      })

      if (this.config.selector) {
        this.config = $.extend({}, this.config, {
          trigger  : 'manual',
          selector : ''
        })
      } else {
        this._fixTitle()
      }
    }

    _fixTitle() {
      let titleType = typeof this.element.getAttribute('data-original-title')
      if (this.element.getAttribute('title') ||
         (titleType !== 'string')) {
        this.element.setAttribute(
          'data-original-title',
          this.element.getAttribute('title') || ''
        )
        this.element.setAttribute('title', '')
      }
    }

    _enter(event, context) {
      let dataKey = this.constructor.DATA_KEY

      context = context || $(event.currentTarget).data(dataKey)

      if (!context) {
        context = new this.constructor(
          event.currentTarget,
          this._getDelegateConfig()
        )
        $(event.currentTarget).data(dataKey, context)
      }

      if (event) {
        context._activeTrigger[
          event.type === 'focusin' ? Trigger.FOCUS : Trigger.HOVER
        ] = true
      }

      if ($(context.getTipElement()).hasClass(ClassName.IN) ||
         (context._hoverState === HoverState.IN)) {
        context._hoverState = HoverState.IN
        return
      }

      clearTimeout(context._timeout)

      context._hoverState = HoverState.IN

      if (!context.config.delay || !context.config.delay.show) {
        context.show()
        return
      }

      context._timeout = setTimeout(() => {
        if (context._hoverState === HoverState.IN) {
          context.show()
        }
      }, context.config.delay.show)
    }

    _leave(event, context) {
      let dataKey = this.constructor.DATA_KEY

      context = context || $(event.currentTarget).data(dataKey)

      if (!context) {
        context = new this.constructor(
          event.currentTarget,
          this._getDelegateConfig()
        )
        $(event.currentTarget).data(dataKey, context)
      }

      if (event) {
        context._activeTrigger[
          event.type === 'focusout' ? Trigger.FOCUS : Trigger.HOVER
        ] = false
      }

      if (context._isWithActiveTrigger()) {
        return
      }

      clearTimeout(context._timeout)

      context._hoverState = HoverState.OUT

      if (!context.config.delay || !context.config.delay.hide) {
        context.hide()
        return
      }

      context._timeout = setTimeout(() => {
        if (context._hoverState === HoverState.OUT) {
          context.hide()
        }
      }, context.config.delay.hide)
    }

    _isWithActiveTrigger() {
      for (let trigger in this._activeTrigger) {
        if (this._activeTrigger[trigger]) {
          return true
        }
      }

      return false
    }

    _getConfig(config) {
      config = $.extend(
        {},
        this.constructor.Default,
        $(this.element).data(),
        config
      )

      if (config.delay && typeof config.delay === 'number') {
        config.delay = {
          show : config.delay,
          hide : config.delay
        }
      }

      Util.typeCheckConfig(
        NAME,
        config,
        this.constructor.DefaultType
      )

      return config
    }

    _getDelegateConfig() {
      let config = {}

      if (this.config) {
        for (let key in this.config) {
          if (this.constructor.Default[key] !== this.config[key]) {
            config[key] = this.config[key]
          }
        }
      }

      return config
    }


    // static

    static _jQueryInterface(config) {
      return this.each(function () {
        let data   = $(this).data(DATA_KEY)
        let _config = typeof config === 'object' ?
          config : null

        if (!data && /destroy|hide/.test(config)) {
          return
        }

        if (!data) {
          data = new Tooltip(this, _config)
          $(this).data(DATA_KEY, data)
        }

        if (typeof config === 'string') {
          if (data[config] === undefined) {
            throw new Error(`No method named "${config}"`)
          }
          data[config]()
        }
      })
    }

  }


  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME]             = Tooltip._jQueryInterface
  $.fn[NAME].Constructor = Tooltip
  $.fn[NAME].noConflict  = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT
    return Tooltip._jQueryInterface
  }

  return Tooltip

})(jQuery)

export default Tooltip

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.2): util.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

const Util = (($) => {


  /**
   * ------------------------------------------------------------------------
   * Private TransitionEnd Helpers
   * ------------------------------------------------------------------------
   */

  let transition = false

  const TransitionEndEvent = {
    WebkitTransition : 'webkitTransitionEnd',
    MozTransition    : 'transitionend',
    OTransition      : 'oTransitionEnd otransitionend',
    transition       : 'transitionend'
  }

  // shoutout AngusCroll (https://goo.gl/pxwQGp)
  function toType(obj) {
    return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
  }

  function isElement(obj) {
    return (obj[0] || obj).nodeType
  }

  function getSpecialTransitionEndEvent() {
    return {
      bindType: transition.end,
      delegateType: transition.end,
      handle(event) {
        if ($(event.target).is(this)) {
          return event.handleObj.handler.apply(this, arguments)
        }
      }
    }
  }

  function transitionEndTest() {
    if (window.QUnit) {
      return false
    }

    let el = document.createElement('bootstrap')

    for (let name in TransitionEndEvent) {
      if (el.style[name] !== undefined) {
        return { end: TransitionEndEvent[name] }
      }
    }

    return false
  }

  function transitionEndEmulator(duration) {
    let called = false

    $(this).one(Util.TRANSITION_END, () => {
      called = true
    })

    setTimeout(() => {
      if (!called) {
        Util.triggerTransitionEnd(this)
      }
    }, duration)

    return this
  }

  function setTransitionEndSupport() {
    transition = transitionEndTest()

    $.fn.emulateTransitionEnd = transitionEndEmulator

    if (Util.supportsTransitionEnd()) {
      $.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent()
    }
  }


  /**
   * --------------------------------------------------------------------------
   * Public Util Api
   * --------------------------------------------------------------------------
   */

  let Util = {

    TRANSITION_END: 'bsTransitionEnd',

    getUID(prefix) {
      do {
        prefix += ~~(Math.random() * 1000000) // "~~" acts like a faster Math.floor() here
      } while (document.getElementById(prefix))
      return prefix
    },

    getSelectorFromElement(element) {
      let selector = element.getAttribute('data-target')

      if (!selector) {
        selector = element.getAttribute('href') || ''
        selector = /^#[a-z]/i.test(selector) ? selector : null
      }

      return selector
    },

    reflow(element) {
      new Function('bs', 'return bs')(element.offsetHeight)
    },

    triggerTransitionEnd(element) {
      $(element).trigger(transition.end)
    },

    supportsTransitionEnd() {
      return Boolean(transition)
    },

    typeCheckConfig(componentName, config, configTypes) {
      for (let property in configTypes) {
        if (configTypes.hasOwnProperty(property)) {
          let expectedTypes = configTypes[property]
          let value         = config[property]
          let valueType

          if (value && isElement(value)) {
            valueType = 'element'
          } else {
            valueType = toType(value)
          }

          if (!new RegExp(expectedTypes).test(valueType)) {
            throw new Error(
              `${componentName.toUpperCase()}: ` +
              `Option "${property}" provided type "${valueType}" ` +
              `but expected type "${expectedTypes}".`)
          }
        }
      }
    }
  }

  setTransitionEndSupport()

  return Util

})(jQuery)

export default Util

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.2): button.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

const Button = (($) => {


  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME                = 'button'
  const VERSION             = '4.0.0-alpha'
  const DATA_KEY            = 'bs.button'
  const EVENT_KEY           = `.${DATA_KEY}`
  const DATA_API_KEY        = '.data-api'
  const JQUERY_NO_CONFLICT  = $.fn[NAME]

  const ClassName = {
    ACTIVE : 'active',
    BUTTON : 'btn',
    FOCUS  : 'focus'
  }

  const Selector = {
    DATA_TOGGLE_CARROT : '[data-toggle^="button"]',
    DATA_TOGGLE        : '[data-toggle="buttons"]',
    INPUT              : 'input',
    ACTIVE             : '.active',
    BUTTON             : '.btn'
  }

  const Event = {
    CLICK_DATA_API      : `click${EVENT_KEY}${DATA_API_KEY}`,
    FOCUS_BLUR_DATA_API : `focus${EVENT_KEY}${DATA_API_KEY} `
                        + `blur${EVENT_KEY}${DATA_API_KEY}`
  }


  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class Button {

    constructor(element) {
      this._element = element
    }


    // getters

    static get VERSION() {
      return VERSION
    }


    // public

    toggle() {
      let triggerChangeEvent = true
      let rootElement        = $(this._element).closest(
        Selector.DATA_TOGGLE
      )[0]

      if (rootElement) {
        let input = $(this._element).find(Selector.INPUT)[0]

        if (input) {
          if (input.type === 'radio') {
            if (input.checked &&
              $(this._element).hasClass(ClassName.ACTIVE)) {
              triggerChangeEvent = false

            } else {
              let activeElement = $(rootElement).find(Selector.ACTIVE)[0]

              if (activeElement) {
                $(activeElement).removeClass(ClassName.ACTIVE)
              }
            }
          }

          if (triggerChangeEvent) {
            input.checked = !$(this._element).hasClass(ClassName.ACTIVE)
            $(this._element).trigger('change')
          }
        }
      } else {
        this._element.setAttribute('aria-pressed',
          !$(this._element).hasClass(ClassName.ACTIVE))
      }

      if (triggerChangeEvent) {
        $(this._element).toggleClass(ClassName.ACTIVE)
      }
    }

    dispose() {
      $.removeData(this._element, DATA_KEY)
      this._element = null
    }


    // static

    static _jQueryInterface(config) {
      return this.each(function () {
        let data = $(this).data(DATA_KEY)

        if (!data) {
          data = new Button(this)
          $(this).data(DATA_KEY, data)
        }

        if (config === 'toggle') {
          data[config]()
        }
      })
    }

  }


  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(document)
    .on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE_CARROT, (event) => {
      event.preventDefault()

      let button = event.target

      if (!$(button).hasClass(ClassName.BUTTON)) {
        button = $(button).closest(Selector.BUTTON)
      }

      Button._jQueryInterface.call($(button), 'toggle')
    })
    .on(Event.FOCUS_BLUR_DATA_API, Selector.DATA_TOGGLE_CARROT, (event) => {
      let button = $(event.target).closest(Selector.BUTTON)[0]
      $(button).toggleClass(ClassName.FOCUS, /^focus(in)?$/.test(event.type))
    })


  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME]             = Button._jQueryInterface
  $.fn[NAME].Constructor = Button
  $.fn[NAME].noConflict  = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT
    return Button._jQueryInterface
  }

  return Button

})(jQuery)

export default Button

import Util from './util'


/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.2): carousel.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

const Carousel = (($) => {


  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME                = 'carousel'
  const VERSION             = '4.0.0-alpha'
  const DATA_KEY            = 'bs.carousel'
  const EVENT_KEY           = `.${DATA_KEY}`
  const DATA_API_KEY        = '.data-api'
  const JQUERY_NO_CONFLICT  = $.fn[NAME]
  const TRANSITION_DURATION = 600

  const Default = {
    interval : 5000,
    keyboard : true,
    slide    : false,
    pause    : 'hover',
    wrap     : true
  }

  const DefaultType = {
    interval : '(number|boolean)',
    keyboard : 'boolean',
    slide    : '(boolean|string)',
    pause    : '(string|boolean)',
    wrap     : 'boolean'
  }

  const Direction = {
    NEXT     : 'next',
    PREVIOUS : 'prev'
  }

  const Event = {
    SLIDE          : `slide${EVENT_KEY}`,
    SLID           : `slid${EVENT_KEY}`,
    KEYDOWN        : `keydown${EVENT_KEY}`,
    MOUSEENTER     : `mouseenter${EVENT_KEY}`,
    MOUSELEAVE     : `mouseleave${EVENT_KEY}`,
    LOAD_DATA_API  : `load${EVENT_KEY}${DATA_API_KEY}`,
    CLICK_DATA_API : `click${EVENT_KEY}${DATA_API_KEY}`
  }

  const ClassName = {
    CAROUSEL : 'carousel',
    ACTIVE   : 'active',
    SLIDE    : 'slide',
    RIGHT    : 'right',
    LEFT     : 'left',
    ITEM     : 'carousel-item'
  }

  const Selector = {
    ACTIVE      : '.active',
    ACTIVE_ITEM : '.active.carousel-item',
    ITEM        : '.carousel-item',
    NEXT_PREV   : '.next, .prev',
    INDICATORS  : '.carousel-indicators',
    DATA_SLIDE  : '[data-slide], [data-slide-to]',
    DATA_RIDE   : '[data-ride="carousel"]'
  }


  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class Carousel {

    constructor(element, config) {
      this._items             = null
      this._interval          = null
      this._activeElement     = null

      this._isPaused          = false
      this._isSliding         = false

      this._config            = this._getConfig(config)
      this._element           = $(element)[0]
      this._indicatorsElement = $(this._element).find(Selector.INDICATORS)[0]

      this._addEventListeners()
    }


    // getters

    static get VERSION() {
      return VERSION
    }

    static get Default() {
      return Default
    }


    // public

    next() {
      if (!this._isSliding) {
        this._slide(Direction.NEXT)
      }
    }

    nextWhenVisible() {
      // Don't call next when the page isn't visible
      if (!document.hidden) {
        this.next()
      }
    }

    prev() {
      if (!this._isSliding) {
        this._slide(Direction.PREVIOUS)
      }
    }

    pause(event) {
      if (!event) {
        this._isPaused = true
      }

      if ($(this._element).find(Selector.NEXT_PREV)[0] &&
        Util.supportsTransitionEnd()) {
        Util.triggerTransitionEnd(this._element)
        this.cycle(true)
      }

      clearInterval(this._interval)
      this._interval = null
    }

    cycle(event) {
      if (!event) {
        this._isPaused = false
      }

      if (this._interval) {
        clearInterval(this._interval)
        this._interval = null
      }

      if (this._config.interval && !this._isPaused) {
        this._interval = setInterval(
          $.proxy(document.visibilityState ? this.nextWhenVisible : this.next, this), this._config.interval
        )
      }
    }

    to(index) {
      this._activeElement = $(this._element).find(Selector.ACTIVE_ITEM)[0]

      let activeIndex = this._getItemIndex(this._activeElement)

      if (index > (this._items.length - 1) || index < 0) {
        return
      }

      if (this._isSliding) {
        $(this._element).one(Event.SLID, () => this.to(index))
        return
      }

      if (activeIndex === index) {
        this.pause()
        this.cycle()
        return
      }

      let direction = index > activeIndex ?
        Direction.NEXT :
        Direction.PREVIOUS

      this._slide(direction, this._items[index])
    }

    dispose() {
      $(this._element).off(EVENT_KEY)
      $.removeData(this._element, DATA_KEY)

      this._items             = null
      this._config            = null
      this._element           = null
      this._interval          = null
      this._isPaused          = null
      this._isSliding         = null
      this._activeElement     = null
      this._indicatorsElement = null
    }


    // private

    _getConfig(config) {
      config = $.extend({}, Default, config)
      Util.typeCheckConfig(NAME, config, DefaultType)
      return config
    }

    _addEventListeners() {
      if (this._config.keyboard) {
        $(this._element)
          .on(Event.KEYDOWN, $.proxy(this._keydown, this))
      }

      if (this._config.pause === 'hover' &&
        !('ontouchstart' in document.documentElement)) {
        $(this._element)
          .on(Event.MOUSEENTER, $.proxy(this.pause, this))
          .on(Event.MOUSELEAVE, $.proxy(this.cycle, this))
      }
    }

    _keydown(event) {
      event.preventDefault()

      if (/input|textarea/i.test(event.target.tagName)) {
        return
      }

      switch (event.which) {
        case 37: this.prev(); break
        case 39: this.next(); break
        default: return
      }
    }

    _getItemIndex(element) {
      this._items = $.makeArray($(element).parent().find(Selector.ITEM))
      return this._items.indexOf(element)
    }

    _getItemByDirection(direction, activeElement) {
      let isNextDirection = direction === Direction.NEXT
      let isPrevDirection = direction === Direction.PREVIOUS
      let activeIndex     = this._getItemIndex(activeElement)
      let lastItemIndex   = (this._items.length - 1)
      let isGoingToWrap   = (isPrevDirection && activeIndex === 0) ||
                            (isNextDirection && activeIndex === lastItemIndex)

      if (isGoingToWrap && !this._config.wrap) {
        return activeElement
      }

      let delta     = direction === Direction.PREVIOUS ? -1 : 1
      let itemIndex = (activeIndex + delta) % this._items.length

      return itemIndex === -1 ?
        this._items[this._items.length - 1] : this._items[itemIndex]
    }


    _triggerSlideEvent(relatedTarget, directionalClassname) {
      let slideEvent = $.Event(Event.SLIDE, {
        relatedTarget,
        direction: directionalClassname
      })

      $(this._element).trigger(slideEvent)

      return slideEvent
    }

    _setActiveIndicatorElement(element) {
      if (this._indicatorsElement) {
        $(this._indicatorsElement)
          .find(Selector.ACTIVE)
          .removeClass(ClassName.ACTIVE)

        let nextIndicator = this._indicatorsElement.children[
          this._getItemIndex(element)
        ]

        if (nextIndicator) {
          $(nextIndicator).addClass(ClassName.ACTIVE)
        }
      }
    }

    _slide(direction, element) {
      let activeElement = $(this._element).find(Selector.ACTIVE_ITEM)[0]
      let nextElement   = element || activeElement &&
        this._getItemByDirection(direction, activeElement)

      let isCycling = Boolean(this._interval)

      let directionalClassName = direction === Direction.NEXT ?
        ClassName.LEFT :
        ClassName.RIGHT

      if (nextElement && $(nextElement).hasClass(ClassName.ACTIVE)) {
        this._isSliding = false
        return
      }

      let slideEvent = this._triggerSlideEvent(nextElement, directionalClassName)
      if (slideEvent.isDefaultPrevented()) {
        return
      }

      if (!activeElement || !nextElement) {
        // some weirdness is happening, so we bail
        return
      }

      this._isSliding = true

      if (isCycling) {
        this.pause()
      }

      this._setActiveIndicatorElement(nextElement)

      let slidEvent = $.Event(Event.SLID, {
        relatedTarget: nextElement,
        direction: directionalClassName
      })

      if (Util.supportsTransitionEnd() &&
        $(this._element).hasClass(ClassName.SLIDE)) {

        $(nextElement).addClass(direction)

        Util.reflow(nextElement)

        $(activeElement).addClass(directionalClassName)
        $(nextElement).addClass(directionalClassName)

        $(activeElement)
          .one(Util.TRANSITION_END, () => {
            $(nextElement)
              .removeClass(directionalClassName)
              .removeClass(direction)

            $(nextElement).addClass(ClassName.ACTIVE)

            $(activeElement)
              .removeClass(ClassName.ACTIVE)
              .removeClass(direction)
              .removeClass(directionalClassName)

            this._isSliding = false

            setTimeout(() => $(this._element).trigger(slidEvent), 0)

          })
          .emulateTransitionEnd(TRANSITION_DURATION)

      } else {
        $(activeElement).removeClass(ClassName.ACTIVE)
        $(nextElement).addClass(ClassName.ACTIVE)

        this._isSliding = false
        $(this._element).trigger(slidEvent)
      }

      if (isCycling) {
        this.cycle()
      }
    }


    // static

    static _jQueryInterface(config) {
      return this.each(function () {
        let data      = $(this).data(DATA_KEY)
        let _config = $.extend({}, Default, $(this).data())

        if (typeof config === 'object') {
          $.extend(_config, config)
        }

        let action = typeof config === 'string' ? config : _config.slide

        if (!data) {
          data = new Carousel(this, _config)
          $(this).data(DATA_KEY, data)
        }

        if (typeof config === 'number') {
          data.to(config)
        } else if (typeof action === 'string') {
          if (data[action] === undefined) {
            throw new Error(`No method named "${action}"`)
          }
          data[action]()
        } else if (_config.interval) {
          data.pause()
          data.cycle()
        }
      })
    }

    static _dataApiClickHandler(event) {
      let selector = Util.getSelectorFromElement(this)

      if (!selector) {
        return
      }

      let target = $(selector)[0]

      if (!target || !$(target).hasClass(ClassName.CAROUSEL)) {
        return
      }

      let config     = $.extend({}, $(target).data(), $(this).data())
      let slideIndex = this.getAttribute('data-slide-to')

      if (slideIndex) {
        config.interval = false
      }

      Carousel._jQueryInterface.call($(target), config)

      if (slideIndex) {
        $(target).data(DATA_KEY).to(slideIndex)
      }

      event.preventDefault()
    }

  }


  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(document)
    .on(Event.CLICK_DATA_API, Selector.DATA_SLIDE, Carousel._dataApiClickHandler)

  $(window).on(Event.LOAD_DATA_API, () => {
    $(Selector.DATA_RIDE).each(function () {
      let $carousel = $(this)
      Carousel._jQueryInterface.call($carousel, $carousel.data())
    })
  })


  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME]             = Carousel._jQueryInterface
  $.fn[NAME].Constructor = Carousel
  $.fn[NAME].noConflict  = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT
    return Carousel._jQueryInterface
  }

  return Carousel

})(jQuery)

export default Carousel

import Util from './util'


/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.2): collapse.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

const Collapse = (($) => {


  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME                = 'collapse'
  const VERSION             = '4.0.0-alpha'
  const DATA_KEY            = 'bs.collapse'
  const EVENT_KEY           = `.${DATA_KEY}`
  const DATA_API_KEY        = '.data-api'
  const JQUERY_NO_CONFLICT  = $.fn[NAME]
  const TRANSITION_DURATION = 600

  const Default = {
    toggle : true,
    parent : ''
  }

  const DefaultType = {
    toggle : 'boolean',
    parent : 'string'
  }

  const Event = {
    SHOW           : `show${EVENT_KEY}`,
    SHOWN          : `shown${EVENT_KEY}`,
    HIDE           : `hide${EVENT_KEY}`,
    HIDDEN         : `hidden${EVENT_KEY}`,
    CLICK_DATA_API : `click${EVENT_KEY}${DATA_API_KEY}`
  }

  const ClassName = {
    IN         : 'in',
    COLLAPSE   : 'collapse',
    COLLAPSING : 'collapsing',
    COLLAPSED  : 'collapsed'
  }

  const Dimension = {
    WIDTH  : 'width',
    HEIGHT : 'height'
  }

  const Selector = {
    ACTIVES     : '.panel > .in, .panel > .collapsing',
    DATA_TOGGLE : '[data-toggle="collapse"]'
  }


  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class Collapse {

    constructor(element, config) {
      this._isTransitioning = false
      this._element         = element
      this._config          = this._getConfig(config)
      this._triggerArray    = $.makeArray($(
        `[data-toggle="collapse"][href="#${element.id}"],` +
        `[data-toggle="collapse"][data-target="#${element.id}"]`
      ))

      this._parent = this._config.parent ? this._getParent() : null

      if (!this._config.parent) {
        this._addAriaAndCollapsedClass(this._element, this._triggerArray)
      }

      if (this._config.toggle) {
        this.toggle()
      }
    }


    // getters

    static get VERSION() {
      return VERSION
    }

    static get Default() {
      return Default
    }


    // public

    toggle() {
      if ($(this._element).hasClass(ClassName.IN)) {
        this.hide()
      } else {
        this.show()
      }
    }

    show() {
      if (this._isTransitioning ||
        $(this._element).hasClass(ClassName.IN)) {
        return
      }

      let actives
      let activesData

      if (this._parent) {
        actives = $.makeArray($(Selector.ACTIVES))
        if (!actives.length) {
          actives = null
        }
      }

      if (actives) {
        activesData = $(actives).data(DATA_KEY)
        if (activesData && activesData._isTransitioning) {
          return
        }
      }

      let startEvent = $.Event(Event.SHOW)
      $(this._element).trigger(startEvent)
      if (startEvent.isDefaultPrevented()) {
        return
      }

      if (actives) {
        Collapse._jQueryInterface.call($(actives), 'hide')
        if (!activesData) {
          $(actives).data(DATA_KEY, null)
        }
      }

      let dimension = this._getDimension()

      $(this._element)
        .removeClass(ClassName.COLLAPSE)
        .addClass(ClassName.COLLAPSING)

      this._element.style[dimension] = 0
      this._element.setAttribute('aria-expanded', true)

      if (this._triggerArray.length) {
        $(this._triggerArray)
          .removeClass(ClassName.COLLAPSED)
          .attr('aria-expanded', true)
      }

      this.setTransitioning(true)

      let complete = () => {
        $(this._element)
          .removeClass(ClassName.COLLAPSING)
          .addClass(ClassName.COLLAPSE)
          .addClass(ClassName.IN)

        this._element.style[dimension] = ''

        this.setTransitioning(false)

        $(this._element).trigger(Event.SHOWN)
      }

      if (!Util.supportsTransitionEnd()) {
        complete()
        return
      }

      let capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1)
      let scrollSize           = `scroll${capitalizedDimension}`

      $(this._element)
        .one(Util.TRANSITION_END, complete)
        .emulateTransitionEnd(TRANSITION_DURATION)

      this._element.style[dimension] = `${this._element[scrollSize]}px`
    }

    hide() {
      if (this._isTransitioning ||
        !$(this._element).hasClass(ClassName.IN)) {
        return
      }

      let startEvent = $.Event(Event.HIDE)
      $(this._element).trigger(startEvent)
      if (startEvent.isDefaultPrevented()) {
        return
      }

      let dimension       = this._getDimension()
      let offsetDimension = dimension === Dimension.WIDTH ?
        'offsetWidth' : 'offsetHeight'

      this._element.style[dimension] = `${this._element[offsetDimension]}px`

      Util.reflow(this._element)

      $(this._element)
        .addClass(ClassName.COLLAPSING)
        .removeClass(ClassName.COLLAPSE)
        .removeClass(ClassName.IN)

      this._element.setAttribute('aria-expanded', false)

      if (this._triggerArray.length) {
        $(this._triggerArray)
          .addClass(ClassName.COLLAPSED)
          .attr('aria-expanded', false)
      }

      this.setTransitioning(true)

      let complete = () => {
        this.setTransitioning(false)
        $(this._element)
          .removeClass(ClassName.COLLAPSING)
          .addClass(ClassName.COLLAPSE)
          .trigger(Event.HIDDEN)
      }

      this._element.style[dimension] = 0

      if (!Util.supportsTransitionEnd()) {
        complete()
        return
      }

      $(this._element)
        .one(Util.TRANSITION_END, complete)
        .emulateTransitionEnd(TRANSITION_DURATION)
    }

    setTransitioning(isTransitioning) {
      this._isTransitioning = isTransitioning
    }

    dispose() {
      $.removeData(this._element, DATA_KEY)

      this._config          = null
      this._parent          = null
      this._element         = null
      this._triggerArray    = null
      this._isTransitioning = null
    }


    // private

    _getConfig(config) {
      config = $.extend({}, Default, config)
      config.toggle = Boolean(config.toggle) // coerce string values
      Util.typeCheckConfig(NAME, config, DefaultType)
      return config
    }

    _getDimension() {
      let hasWidth = $(this._element).hasClass(Dimension.WIDTH)
      return hasWidth ? Dimension.WIDTH : Dimension.HEIGHT
    }

    _getParent() {
      let parent   = $(this._config.parent)[0]
      let selector =
        `[data-toggle="collapse"][data-parent="${this._config.parent}"]`

      $(parent).find(selector).each((i, element) => {
        this._addAriaAndCollapsedClass(
          Collapse._getTargetFromElement(element),
          [element]
        )
      })

      return parent
    }

    _addAriaAndCollapsedClass(element, triggerArray) {
      if (element) {
        let isOpen = $(element).hasClass(ClassName.IN)
        element.setAttribute('aria-expanded', isOpen)

        if (triggerArray.length) {
          $(triggerArray)
            .toggleClass(ClassName.COLLAPSED, !isOpen)
            .attr('aria-expanded', isOpen)
        }
      }
    }


    // static

    static _getTargetFromElement(element) {
      let selector = Util.getSelectorFromElement(element)
      return selector ? $(selector)[0] : null
    }

    static _jQueryInterface(config) {
      return this.each(function () {
        let $this   = $(this)
        let data    = $this.data(DATA_KEY)
        let _config = $.extend(
          {},
          Default,
          $this.data(),
          typeof config === 'object' && config
        )

        if (!data && _config.toggle && /show|hide/.test(config)) {
          _config.toggle = false
        }

        if (!data) {
          data = new Collapse(this, _config)
          $this.data(DATA_KEY, data)
        }

        if (typeof config === 'string') {
          if (data[config] === undefined) {
            throw new Error(`No method named "${config}"`)
          }
          data[config]()
        }
      })
    }

  }


  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
    event.preventDefault()

    let target = Collapse._getTargetFromElement(this)
    let data   = $(target).data(DATA_KEY)
    let config = data ? 'toggle' : $(this).data()

    Collapse._jQueryInterface.call($(target), config)
  })


  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME]             = Collapse._jQueryInterface
  $.fn[NAME].Constructor = Collapse
  $.fn[NAME].noConflict  = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT
    return Collapse._jQueryInterface
  }

  return Collapse

})(jQuery)

export default Collapse

import Util from './util'


/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.2): dropdown.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

const Dropdown = (($) => {


  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME                = 'dropdown'
  const VERSION             = '4.0.0-alpha'
  const DATA_KEY            = 'bs.dropdown'
  const EVENT_KEY           = `.${DATA_KEY}`
  const DATA_API_KEY        = '.data-api'
  const JQUERY_NO_CONFLICT  = $.fn[NAME]

  const Event = {
    HIDE             : `hide${EVENT_KEY}`,
    HIDDEN           : `hidden${EVENT_KEY}`,
    SHOW             : `show${EVENT_KEY}`,
    SHOWN            : `shown${EVENT_KEY}`,
    CLICK            : `click${EVENT_KEY}`,
    CLICK_DATA_API   : `click${EVENT_KEY}${DATA_API_KEY}`,
    KEYDOWN_DATA_API : `keydown${EVENT_KEY}${DATA_API_KEY}`
  }

  const ClassName = {
    BACKDROP : 'dropdown-backdrop',
    DISABLED : 'disabled',
    OPEN     : 'open'
  }

  const Selector = {
    BACKDROP      : '.dropdown-backdrop',
    DATA_TOGGLE   : '[data-toggle="dropdown"]',
    FORM_CHILD    : '.dropdown form',
    ROLE_MENU     : '[role="menu"]',
    ROLE_LISTBOX  : '[role="listbox"]',
    NAVBAR_NAV    : '.navbar-nav',
    VISIBLE_ITEMS : '[role="menu"] li:not(.disabled) a, '
                  + '[role="listbox"] li:not(.disabled) a'
  }


  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class Dropdown {

    constructor(element) {
      this._element = element

      this._addEventListeners()
    }


    // getters

    static get VERSION() {
      return VERSION
    }


    // public

    toggle() {
      if (this.disabled || $(this).hasClass(ClassName.DISABLED)) {
        return false
      }

      let parent   = Dropdown._getParentFromElement(this)
      let isActive = $(parent).hasClass(ClassName.OPEN)

      Dropdown._clearMenus()

      if (isActive) {
        return false
      }

      if ('ontouchstart' in document.documentElement &&
         (!$(parent).closest(Selector.NAVBAR_NAV).length)) {

        // if mobile we use a backdrop because click events don't delegate
        let dropdown       = document.createElement('div')
        dropdown.className = ClassName.BACKDROP
        $(dropdown).insertBefore(this)
        $(dropdown).on('click', Dropdown._clearMenus)
      }

      let relatedTarget = { relatedTarget : this }
      let showEvent     = $.Event(Event.SHOW, relatedTarget)

      $(parent).trigger(showEvent)

      if (showEvent.isDefaultPrevented()) {
        return false
      }

      this.focus()
      this.setAttribute('aria-expanded', 'true')

      $(parent).toggleClass(ClassName.OPEN)
      $(parent).trigger($.Event(Event.SHOWN, relatedTarget))

      return false
    }

    dispose() {
      $.removeData(this._element, DATA_KEY)
      $(this._element).off(EVENT_KEY)
      this._element = null
    }


    // private

    _addEventListeners() {
      $(this._element).on(Event.CLICK, this.toggle)
    }


    // static

    static _jQueryInterface(config) {
      return this.each(function () {
        let data  = $(this).data(DATA_KEY)

        if (!data) {
          $(this).data(DATA_KEY, (data = new Dropdown(this)))
        }

        if (typeof config === 'string') {
          if (data[config] === undefined) {
            throw new Error(`No method named "${config}"`)
          }
          data[config].call(this)
        }
      })
    }

    static _clearMenus(event) {
      if (event && event.which === 3) {
        return
      }

      let backdrop = $(Selector.BACKDROP)[0]
      if (backdrop) {
        backdrop.parentNode.removeChild(backdrop)
      }

      let toggles = $.makeArray($(Selector.DATA_TOGGLE))

      for (let i = 0; i < toggles.length; i++) {
        let parent        = Dropdown._getParentFromElement(toggles[i])
        let relatedTarget = { relatedTarget : toggles[i] }

        if (!$(parent).hasClass(ClassName.OPEN)) {
          continue
        }

        if (event && event.type === 'click' &&
           (/input|textarea/i.test(event.target.tagName)) &&
           ($.contains(parent, event.target))) {
          continue
        }

        let hideEvent = $.Event(Event.HIDE, relatedTarget)
        $(parent).trigger(hideEvent)
        if (hideEvent.isDefaultPrevented()) {
          continue
        }

        toggles[i].setAttribute('aria-expanded', 'false')

        $(parent)
          .removeClass(ClassName.OPEN)
          .trigger($.Event(Event.HIDDEN, relatedTarget))
      }
    }

    static _getParentFromElement(element) {
      let parent
      let selector = Util.getSelectorFromElement(element)

      if (selector) {
        parent = $(selector)[0]
      }

      return parent || element.parentNode
    }

    static _dataApiKeydownHandler(event) {
      if (!/(38|40|27|32)/.test(event.which) ||
         /input|textarea/i.test(event.target.tagName)) {
        return
      }

      event.preventDefault()
      event.stopPropagation()

      if (this.disabled || $(this).hasClass(ClassName.DISABLED)) {
        return
      }

      let parent   = Dropdown._getParentFromElement(this)
      let isActive = $(parent).hasClass(ClassName.OPEN)

      if ((!isActive && event.which !== 27) ||
           (isActive && event.which === 27)) {

        if (event.which === 27) {
          let toggle = $(parent).find(Selector.DATA_TOGGLE)[0]
          $(toggle).trigger('focus')
        }

        $(this).trigger('click')
        return
      }

      let items = $.makeArray($(Selector.VISIBLE_ITEMS))

      items = items.filter((item) => {
        return item.offsetWidth || item.offsetHeight
      })

      if (!items.length) {
        return
      }

      let index = items.indexOf(event.target)

      if (event.which === 38 && index > 0) { // up
        index--
      }

      if (event.which === 40 && index < items.length - 1) { // down
        index++
      }

      if (!~index) {
        index = 0
      }

      items[index].focus()
    }

  }


  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(document)
    .on(Event.KEYDOWN_DATA_API, Selector.DATA_TOGGLE,  Dropdown._dataApiKeydownHandler)
    .on(Event.KEYDOWN_DATA_API, Selector.ROLE_MENU,    Dropdown._dataApiKeydownHandler)
    .on(Event.KEYDOWN_DATA_API, Selector.ROLE_LISTBOX, Dropdown._dataApiKeydownHandler)
    .on(Event.CLICK_DATA_API, Dropdown._clearMenus)
    .on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, Dropdown.prototype.toggle)
    .on(Event.CLICK_DATA_API, Selector.FORM_CHILD, (e) => {
      e.stopPropagation()
    })


  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME]             = Dropdown._jQueryInterface
  $.fn[NAME].Constructor = Dropdown
  $.fn[NAME].noConflict  = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT
    return Dropdown._jQueryInterface
  }

  return Dropdown

})(jQuery)

export default Dropdown

import Util from './util'


/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.2): modal.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

const Modal = (($) => {


  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME                         = 'modal'
  const VERSION                      = '4.0.0-alpha'
  const DATA_KEY                     = 'bs.modal'
  const EVENT_KEY                    = `.${DATA_KEY}`
  const DATA_API_KEY                 = '.data-api'
  const JQUERY_NO_CONFLICT           = $.fn[NAME]
  const TRANSITION_DURATION          = 300
  const BACKDROP_TRANSITION_DURATION = 150

  const Default = {
    backdrop : true,
    keyboard : true,
    focus    : true,
    show     : true
  }

  const DefaultType = {
    backdrop : '(boolean|string)',
    keyboard : 'boolean',
    focus    : 'boolean',
    show     : 'boolean'
  }

  const Event = {
    HIDE              : `hide${EVENT_KEY}`,
    HIDDEN            : `hidden${EVENT_KEY}`,
    SHOW              : `show${EVENT_KEY}`,
    SHOWN             : `shown${EVENT_KEY}`,
    FOCUSIN           : `focusin${EVENT_KEY}`,
    RESIZE            : `resize${EVENT_KEY}`,
    CLICK_DISMISS     : `click.dismiss${EVENT_KEY}`,
    KEYDOWN_DISMISS   : `keydown.dismiss${EVENT_KEY}`,
    MOUSEUP_DISMISS   : `mouseup.dismiss${EVENT_KEY}`,
    MOUSEDOWN_DISMISS : `mousedown.dismiss${EVENT_KEY}`,
    CLICK_DATA_API    : `click${EVENT_KEY}${DATA_API_KEY}`
  }

  const ClassName = {
    SCROLLBAR_MEASURER : 'modal-scrollbar-measure',
    BACKDROP           : 'modal-backdrop',
    OPEN               : 'modal-open',
    FADE               : 'fade',
    IN                 : 'in'
  }

  const Selector = {
    DIALOG             : '.modal-dialog',
    DATA_TOGGLE        : '[data-toggle="modal"]',
    DATA_DISMISS       : '[data-dismiss="modal"]',
    FIXED_CONTENT      : '.navbar-fixed-top, .navbar-fixed-bottom, .is-fixed'
  }


  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class Modal {

    constructor(element, config) {
      this._config              = this._getConfig(config)
      this._element             = element
      this._dialog              = $(element).find(Selector.DIALOG)[0]
      this._backdrop            = null
      this._isShown             = false
      this._isBodyOverflowing   = false
      this._ignoreBackdropClick = false
      this._originalBodyPadding = 0
      this._scrollbarWidth      = 0
    }


    // getters

    static get VERSION() {
      return VERSION
    }

    static get Default() {
      return Default
    }


    // public

    toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget)
    }

    show(relatedTarget) {
      let showEvent = $.Event(Event.SHOW, {
        relatedTarget
      })

      $(this._element).trigger(showEvent)

      if (this._isShown || showEvent.isDefaultPrevented()) {
        return
      }

      this._isShown = true

      this._checkScrollbar()
      this._setScrollbar()

      $(document.body).addClass(ClassName.OPEN)

      this._setEscapeEvent()
      this._setResizeEvent()

      $(this._element).on(
        Event.CLICK_DISMISS,
        Selector.DATA_DISMISS,
        $.proxy(this.hide, this)
      )

      $(this._dialog).on(Event.MOUSEDOWN_DISMISS, () => {
        $(this._element).one(Event.MOUSEUP_DISMISS, (event) => {
          if ($(event.target).is(this._element)) {
            this._ignoreBackdropClick = true
          }
        })
      })

      this._showBackdrop(
        $.proxy(this._showElement, this, relatedTarget)
      )
    }

    hide(event) {
      if (event) {
        event.preventDefault()
      }

      let hideEvent = $.Event(Event.HIDE)

      $(this._element).trigger(hideEvent)

      if (!this._isShown || hideEvent.isDefaultPrevented()) {
        return
      }

      this._isShown = false

      this._setEscapeEvent()
      this._setResizeEvent()

      $(document).off(Event.FOCUSIN)

      $(this._element).removeClass(ClassName.IN)

      $(this._element).off(Event.CLICK_DISMISS)
      $(this._dialog).off(Event.MOUSEDOWN_DISMISS)

      if (Util.supportsTransitionEnd() &&
         ($(this._element).hasClass(ClassName.FADE))) {

        $(this._element)
          .one(Util.TRANSITION_END, $.proxy(this._hideModal, this))
          .emulateTransitionEnd(TRANSITION_DURATION)
      } else {
        this._hideModal()
      }
    }

    dispose() {
      $.removeData(this._element, DATA_KEY)

      $(window).off(EVENT_KEY)
      $(document).off(EVENT_KEY)
      $(this._element).off(EVENT_KEY)
      $(this._backdrop).off(EVENT_KEY)

      this._config              = null
      this._element             = null
      this._dialog              = null
      this._backdrop            = null
      this._isShown             = null
      this._isBodyOverflowing   = null
      this._ignoreBackdropClick = null
      this._originalBodyPadding = null
      this._scrollbarWidth      = null
    }


    // private

    _getConfig(config) {
      config = $.extend({}, Default, config)
      Util.typeCheckConfig(NAME, config, DefaultType)
      return config
    }

    _showElement(relatedTarget) {
      let transition = Util.supportsTransitionEnd() &&
        $(this._element).hasClass(ClassName.FADE)

      if (!this._element.parentNode ||
         (this._element.parentNode.nodeType !== Node.ELEMENT_NODE)) {
        // don't move modals dom position
        document.body.appendChild(this._element)
      }

      this._element.style.display = 'block'
      this._element.scrollTop = 0

      if (transition) {
        Util.reflow(this._element)
      }

      $(this._element).addClass(ClassName.IN)

      if (this._config.focus) {
        this._enforceFocus()
      }

      let shownEvent = $.Event(Event.SHOWN, {
        relatedTarget
      })

      let transitionComplete = () => {
        if (this._config.focus) {
          this._element.focus()
        }
        $(this._element).trigger(shownEvent)
      }

      if (transition) {
        $(this._dialog)
          .one(Util.TRANSITION_END, transitionComplete)
          .emulateTransitionEnd(TRANSITION_DURATION)
      } else {
        transitionComplete()
      }
    }

    _enforceFocus() {
      $(document)
        .off(Event.FOCUSIN) // guard against infinite focus loop
        .on(Event.FOCUSIN, (event) => {
          if (this._element !== event.target &&
             (!$(this._element).has(event.target).length)) {
            this._element.focus()
          }
        })
    }

    _setEscapeEvent() {
      if (this._isShown && this._config.keyboard) {
        $(this._element).on(Event.KEYDOWN_DISMISS, (event) => {
          if (event.which === 27) {
            this.hide()
          }
        })

      } else if (!this._isShown) {
        $(this._element).off(Event.KEYDOWN_DISMISS)
      }
    }

    _setResizeEvent() {
      if (this._isShown) {
        $(window).on(Event.RESIZE, $.proxy(this._handleUpdate, this))
      } else {
        $(window).off(Event.RESIZE)
      }
    }

    _hideModal() {
      this._element.style.display = 'none'
      this._showBackdrop(() => {
        $(document.body).removeClass(ClassName.OPEN)
        this._resetAdjustments()
        this._resetScrollbar()
        $(this._element).trigger(Event.HIDDEN)
      })
    }

    _removeBackdrop() {
      if (this._backdrop) {
        $(this._backdrop).remove()
        this._backdrop = null
      }
    }

    _showBackdrop(callback) {
      let animate = $(this._element).hasClass(ClassName.FADE) ?
        ClassName.FADE : ''

      if (this._isShown && this._config.backdrop) {
        let doAnimate = Util.supportsTransitionEnd() && animate

        this._backdrop = document.createElement('div')
        this._backdrop.className = ClassName.BACKDROP

        if (animate) {
          $(this._backdrop).addClass(animate)
        }

        $(this._backdrop).appendTo(document.body)

        $(this._element).on(Event.CLICK_DISMISS, (event) => {
          if (this._ignoreBackdropClick) {
            this._ignoreBackdropClick = false
            return
          }
          if (event.target !== event.currentTarget) {
            return
          }
          if (this._config.backdrop === 'static') {
            this._element.focus()
          } else {
            this.hide()
          }
        })

        if (doAnimate) {
          Util.reflow(this._backdrop)
        }

        $(this._backdrop).addClass(ClassName.IN)

        if (!callback) {
          return
        }

        if (!doAnimate) {
          callback()
          return
        }

        $(this._backdrop)
          .one(Util.TRANSITION_END, callback)
          .emulateTransitionEnd(BACKDROP_TRANSITION_DURATION)

      } else if (!this._isShown && this._backdrop) {
        $(this._backdrop).removeClass(ClassName.IN)

        let callbackRemove = () => {
          this._removeBackdrop()
          if (callback) {
            callback()
          }
        }

        if (Util.supportsTransitionEnd() &&
           ($(this._element).hasClass(ClassName.FADE))) {
          $(this._backdrop)
            .one(Util.TRANSITION_END, callbackRemove)
            .emulateTransitionEnd(BACKDROP_TRANSITION_DURATION)
        } else {
          callbackRemove()
        }

      } else if (callback) {
        callback()
      }
    }


    // ----------------------------------------------------------------------
    // the following methods are used to handle overflowing modals
    // todo (fat): these should probably be refactored out of modal.js
    // ----------------------------------------------------------------------

    _handleUpdate() {
      this._adjustDialog()
    }

    _adjustDialog() {
      let isModalOverflowing =
        this._element.scrollHeight > document.documentElement.clientHeight

      if (!this._isBodyOverflowing && isModalOverflowing) {
        this._element.style.paddingLeft = `${this._scrollbarWidth}px`
      }

      if (this._isBodyOverflowing && !isModalOverflowing) {
        this._element.style.paddingRight = `${this._scrollbarWidth}px~`
      }
    }

    _resetAdjustments() {
      this._element.style.paddingLeft = ''
      this._element.style.paddingRight = ''
    }

    _checkScrollbar() {
      let fullWindowWidth = window.innerWidth
      if (!fullWindowWidth) { // workaround for missing window.innerWidth in IE8
        let documentElementRect = document.documentElement.getBoundingClientRect()
        fullWindowWidth =
          documentElementRect.right - Math.abs(documentElementRect.left)
      }
      this._isBodyOverflowing = document.body.clientWidth < fullWindowWidth
      this._scrollbarWidth = this._getScrollbarWidth()
    }

    _setScrollbar() {
      let bodyPadding = parseInt(
        $(Selector.FIXED_CONTENT).css('padding-right') || 0,
        10
      )

      this._originalBodyPadding = document.body.style.paddingRight || ''

      if (this._isBodyOverflowing) {
        document.body.style.paddingRight =
          `${bodyPadding + this._scrollbarWidth}px`
      }
    }

    _resetScrollbar() {
      document.body.style.paddingRight = this._originalBodyPadding
    }

    _getScrollbarWidth() { // thx d.walsh
      let scrollDiv = document.createElement('div')
      scrollDiv.className = ClassName.SCROLLBAR_MEASURER
      document.body.appendChild(scrollDiv)
      let scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
      document.body.removeChild(scrollDiv)
      return scrollbarWidth
    }


    // static

    static _jQueryInterface(config, relatedTarget) {
      return this.each(function () {
        let data    = $(this).data(DATA_KEY)
        let _config = $.extend(
          {},
          Modal.Default,
          $(this).data(),
          typeof config === 'object' && config
        )

        if (!data) {
          data = new Modal(this, _config)
          $(this).data(DATA_KEY, data)
        }

        if (typeof config === 'string') {
          if (data[config] === undefined) {
            throw new Error(`No method named "${config}"`)
          }
          data[config](relatedTarget)
        } else if (_config.show) {
          data.show(relatedTarget)
        }
      })
    }

  }


  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
    let target
    let selector = Util.getSelectorFromElement(this)

    if (selector) {
      target = $(selector)[0]
    }

    let config = $(target).data(DATA_KEY) ?
      'toggle' : $.extend({}, $(target).data(), $(this).data())

    if (this.tagName === 'A') {
      event.preventDefault()
    }

    let $target = $(target).one(Event.SHOW, (showEvent) => {
      if (showEvent.isDefaultPrevented()) {
        // only register focus restorer if modal will actually get shown
        return
      }

      $target.one(Event.HIDDEN, () => {
        if ($(this).is(':visible')) {
          this.focus()
        }
      })
    })

    Modal._jQueryInterface.call($(target), config, this)
  })


  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME]             = Modal._jQueryInterface
  $.fn[NAME].Constructor = Modal
  $.fn[NAME].noConflict  = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT
    return Modal._jQueryInterface
  }

  return Modal

})(jQuery)

export default Modal

import Tooltip from './tooltip'


/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.2): popover.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

const Popover = (($) => {


  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME                = 'popover'
  const VERSION             = '4.0.0-alpha'
  const DATA_KEY            = 'bs.popover'
  const EVENT_KEY           = `.${DATA_KEY}`
  const JQUERY_NO_CONFLICT  = $.fn[NAME]

  const Default = $.extend({}, Tooltip.Default, {
    placement : 'right',
    trigger   : 'click',
    content   : '',
    template  : '<div class="popover" role="tooltip">'
              + '<div class="popover-arrow"></div>'
              + '<h3 class="popover-title"></h3>'
              + '<div class="popover-content"></div></div>'
  })

  const DefaultType = $.extend({}, Tooltip.DefaultType, {
    content : '(string|element|function)'
  })

  const ClassName = {
    FADE : 'fade',
    IN  : 'in'
  }

  const Selector = {
    TITLE   : '.popover-title',
    CONTENT : '.popover-content',
    ARROW   : '.popover-arrow'
  }

  const Event = {
    HIDE       : `hide${EVENT_KEY}`,
    HIDDEN     : `hidden${EVENT_KEY}`,
    SHOW       : `show${EVENT_KEY}`,
    SHOWN      : `shown${EVENT_KEY}`,
    INSERTED   : `inserted${EVENT_KEY}`,
    CLICK      : `click${EVENT_KEY}`,
    FOCUSIN    : `focusin${EVENT_KEY}`,
    FOCUSOUT   : `focusout${EVENT_KEY}`,
    MOUSEENTER : `mouseenter${EVENT_KEY}`,
    MOUSELEAVE : `mouseleave${EVENT_KEY}`
  }


  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class Popover extends Tooltip {


    // getters

    static get VERSION() {
      return VERSION
    }

    static get Default() {
      return Default
    }

    static get NAME() {
      return NAME
    }

    static get DATA_KEY() {
      return DATA_KEY
    }

    static get Event() {
      return Event
    }

    static get EVENT_KEY() {
      return EVENT_KEY
    }

    static get DefaultType() {
      return DefaultType
    }


    // overrides

    isWithContent() {
      return this.getTitle() || this._getContent()
    }

    getTipElement() {
      return (this.tip = this.tip || $(this.config.template)[0])
    }

    setContent() {
      let $tip = $(this.getTipElement())

      // we use append for html objects to maintain js events
      this.setElementContent($tip.find(Selector.TITLE), this.getTitle())
      this.setElementContent($tip.find(Selector.CONTENT), this._getContent())

      $tip
        .removeClass(ClassName.FADE)
        .removeClass(ClassName.IN)

      this.cleanupTether()
    }

    // private

    _getContent() {
      return this.element.getAttribute('data-content')
        || (typeof this.config.content === 'function' ?
              this.config.content.call(this.element) :
              this.config.content)
    }


    // static

    static _jQueryInterface(config) {
      return this.each(function () {
        let data   = $(this).data(DATA_KEY)
        let _config = typeof config === 'object' ? config : null

        if (!data && /destroy|hide/.test(config)) {
          return
        }

        if (!data) {
          data = new Popover(this, _config)
          $(this).data(DATA_KEY, data)
        }

        if (typeof config === 'string') {
          if (data[config] === undefined) {
            throw new Error(`No method named "${config}"`)
          }
          data[config]()
        }
      })
    }
  }


  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME]             = Popover._jQueryInterface
  $.fn[NAME].Constructor = Popover
  $.fn[NAME].noConflict  = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT
    return Popover._jQueryInterface
  }

  return Popover

})(jQuery)

export default Popover

import Util from './util'


/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.2): scrollspy.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

const ScrollSpy = (($) => {


  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME               = 'scrollspy'
  const VERSION            = '4.0.0-alpha'
  const DATA_KEY           = 'bs.scrollspy'
  const EVENT_KEY          = `.${DATA_KEY}`
  const DATA_API_KEY       = '.data-api'
  const JQUERY_NO_CONFLICT = $.fn[NAME]

  const Default = {
    offset : 10,
    method : 'auto',
    target : ''
  }

  const DefaultType = {
    offset : 'number',
    method : 'string',
    target : '(string|element)'
  }

  const Event = {
    ACTIVATE      : `activate${EVENT_KEY}`,
    SCROLL        : `scroll${EVENT_KEY}`,
    LOAD_DATA_API : `load${EVENT_KEY}${DATA_API_KEY}`
  }

  const ClassName = {
    DROPDOWN_ITEM : 'dropdown-item',
    DROPDOWN_MENU : 'dropdown-menu',
    NAV_LINK      : 'nav-link',
    NAV           : 'nav',
    ACTIVE        : 'active'
  }

  const Selector = {
    DATA_SPY        : '[data-spy="scroll"]',
    ACTIVE          : '.active',
    LIST_ITEM       : '.list-item',
    LI              : 'li',
    LI_DROPDOWN     : 'li.dropdown',
    NAV_LINKS       : '.nav-link',
    DROPDOWN        : '.dropdown',
    DROPDOWN_ITEMS  : '.dropdown-item',
    DROPDOWN_TOGGLE : '.dropdown-toggle'
  }

  const OffsetMethod = {
    OFFSET   : 'offset',
    POSITION : 'position'
  }


  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class ScrollSpy {

    constructor(element, config) {
      this._element       = element
      this._scrollElement = element.tagName === 'BODY' ? window : element
      this._config        = this._getConfig(config)
      this._selector      = `${this._config.target} ${Selector.NAV_LINKS},`
                          + `${this._config.target} ${Selector.DROPDOWN_ITEMS}`
      this._offsets       = []
      this._targets       = []
      this._activeTarget  = null
      this._scrollHeight  = 0

      $(this._scrollElement).on(Event.SCROLL, $.proxy(this._process, this))

      this.refresh()
      this._process()
    }


    // getters

    static get VERSION() {
      return VERSION
    }

    static get Default() {
      return Default
    }


    // public

    refresh() {
      let autoMethod = this._scrollElement !== this._scrollElement.window ?
        OffsetMethod.POSITION : OffsetMethod.OFFSET

      let offsetMethod = this._config.method === 'auto' ?
        autoMethod : this._config.method

      let offsetBase = offsetMethod === OffsetMethod.POSITION ?
        this._getScrollTop() : 0

      this._offsets = []
      this._targets = []

      this._scrollHeight = this._getScrollHeight()

      let targets = $.makeArray($(this._selector))

      targets
        .map((element) => {
          let target
          let targetSelector = Util.getSelectorFromElement(element)

          if (targetSelector) {
            target = $(targetSelector)[0]
          }

          if (target && (target.offsetWidth || target.offsetHeight)) {
            // todo (fat): remove sketch reliance on jQuery position/offset
            return [
              $(target)[offsetMethod]().top + offsetBase,
              targetSelector
            ]
          }
        })
        .filter((item)  => item)
        .sort((a, b)    => a[0] - b[0])
        .forEach((item) => {
          this._offsets.push(item[0])
          this._targets.push(item[1])
        })
    }

    dispose() {
      $.removeData(this._element, DATA_KEY)
      $(this._scrollElement).off(EVENT_KEY)

      this._element       = null
      this._scrollElement = null
      this._config        = null
      this._selector      = null
      this._offsets       = null
      this._targets       = null
      this._activeTarget  = null
      this._scrollHeight  = null
    }


    // private

    _getConfig(config) {
      config = $.extend({}, Default, config)

      if (typeof config.target !== 'string') {
        let id = $(config.target).attr('id')
        if (!id) {
          id = Util.getUID(NAME)
          $(config.target).attr('id', id)
        }
        config.target = `#${id}`
      }

      Util.typeCheckConfig(NAME, config, DefaultType)

      return config
    }

    _getScrollTop() {
      return this._scrollElement === window ?
          this._scrollElement.scrollY : this._scrollElement.scrollTop
    }

    _getScrollHeight() {
      return this._scrollElement.scrollHeight || Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight
      )
    }

    _process() {
      let scrollTop    = this._getScrollTop() + this._config.offset
      let scrollHeight = this._getScrollHeight()
      let maxScroll    = this._config.offset
        + scrollHeight
        - this._scrollElement.offsetHeight

      if (this._scrollHeight !== scrollHeight) {
        this.refresh()
      }

      if (scrollTop >= maxScroll) {
        let target = this._targets[this._targets.length - 1]

        if (this._activeTarget !== target) {
          this._activate(target)
        }
      }

      if (this._activeTarget && scrollTop < this._offsets[0]) {
        this._activeTarget = null
        this._clear()
        return
      }

      for (let i = this._offsets.length; i--;) {
        let isActiveTarget = this._activeTarget !== this._targets[i]
            && scrollTop >= this._offsets[i]
            && (this._offsets[i + 1] === undefined ||
                scrollTop < this._offsets[i + 1])

        if (isActiveTarget) {
          this._activate(this._targets[i])
        }
      }
    }

    _activate(target) {
      this._activeTarget = target

      this._clear()

      let queries = this._selector.split(',')
      queries     = queries.map((selector) => {
        return `${selector}[data-target="${target}"],` +
               `${selector}[href="${target}"]`
      })

      let $link = $(queries.join(','))

      if ($link.hasClass(ClassName.DROPDOWN_ITEM)) {
        $link.closest(Selector.DROPDOWN).find(Selector.DROPDOWN_TOGGLE).addClass(ClassName.ACTIVE)
        $link.addClass(ClassName.ACTIVE)
      } else {
        // todo (fat) this is kinda sus…
        // recursively add actives to tested nav-links
        $link.parents(Selector.LI).find(Selector.NAV_LINKS).addClass(ClassName.ACTIVE)
      }

      $(this._scrollElement).trigger(Event.ACTIVATE, {
        relatedTarget: target
      })
    }

    _clear() {
      $(this._selector).filter(Selector.ACTIVE).removeClass(ClassName.ACTIVE)
    }


    // static

    static _jQueryInterface(config) {
      return this.each(function () {
        let data    = $(this).data(DATA_KEY)
        let _config = typeof config === 'object' && config || null

        if (!data) {
          data = new ScrollSpy(this, _config)
          $(this).data(DATA_KEY, data)
        }

        if (typeof config === 'string') {
          if (data[config] === undefined) {
            throw new Error(`No method named "${config}"`)
          }
          data[config]()
        }
      })
    }


  }


  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(window).on(Event.LOAD_DATA_API, () => {
    let scrollSpys = $.makeArray($(Selector.DATA_SPY))

    for (let i = scrollSpys.length; i--;) {
      let $spy = $(scrollSpys[i])
      ScrollSpy._jQueryInterface.call($spy, $spy.data())
    }
  })


  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME]             = ScrollSpy._jQueryInterface
  $.fn[NAME].Constructor = ScrollSpy
  $.fn[NAME].noConflict  = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT
    return ScrollSpy._jQueryInterface
  }

  return ScrollSpy

})(jQuery)

export default ScrollSpy

import Util from './util'


/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.2): tab.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

const Tab = (($) => {


  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME                = 'tab'
  const VERSION             = '4.0.0-alpha'
  const DATA_KEY            = 'bs.tab'
  const EVENT_KEY           = `.${DATA_KEY}`
  const DATA_API_KEY        = '.data-api'
  const JQUERY_NO_CONFLICT  = $.fn[NAME]
  const TRANSITION_DURATION = 150

  const Event = {
    HIDE           : `hide${EVENT_KEY}`,
    HIDDEN         : `hidden${EVENT_KEY}`,
    SHOW           : `show${EVENT_KEY}`,
    SHOWN          : `shown${EVENT_KEY}`,
    CLICK_DATA_API : `click${EVENT_KEY}${DATA_API_KEY}`
  }

  const ClassName = {
    DROPDOWN_MENU : 'dropdown-menu',
    ACTIVE        : 'active',
    FADE          : 'fade',
    IN            : 'in'
  }

  const Selector = {
    A                     : 'a',
    LI                    : 'li',
    DROPDOWN              : '.dropdown',
    UL                    : 'ul:not(.dropdown-menu)',
    FADE_CHILD            : '> .nav-item .fade, > .fade',
    ACTIVE                : '.active',
    ACTIVE_CHILD          : '> .nav-item > .active, > .active',
    DATA_TOGGLE           : '[data-toggle="tab"], [data-toggle="pill"]',
    DROPDOWN_TOGGLE       : '.dropdown-toggle',
    DROPDOWN_ACTIVE_CHILD : '> .dropdown-menu .active'
  }


  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class Tab {

    constructor(element) {
      this._element = element
    }


    // getters

    static get VERSION() {
      return VERSION
    }


    // public

    show() {
      if (this._element.parentNode &&
         (this._element.parentNode.nodeType === Node.ELEMENT_NODE) &&
         ($(this._element).hasClass(ClassName.ACTIVE))) {
        return
      }

      let target
      let previous
      let ulElement = $(this._element).closest(Selector.UL)[0]
      let selector  = Util.getSelectorFromElement(this._element)

      if (ulElement) {
        previous = $.makeArray($(ulElement).find(Selector.ACTIVE))
        previous = previous[previous.length - 1]
      }

      let hideEvent = $.Event(Event.HIDE, {
        relatedTarget: this._element
      })

      let showEvent = $.Event(Event.SHOW, {
        relatedTarget: previous
      })

      if (previous) {
        $(previous).trigger(hideEvent)
      }

      $(this._element).trigger(showEvent)

      if (showEvent.isDefaultPrevented() ||
         (hideEvent.isDefaultPrevented())) {
        return
      }

      if (selector) {
        target = $(selector)[0]
      }

      this._activate(
        this._element,
        ulElement
      )

      let complete = () => {
        let hiddenEvent = $.Event(Event.HIDDEN, {
          relatedTarget: this._element
        })

        let shownEvent  = $.Event(Event.SHOWN, {
          relatedTarget: previous
        })

        $(previous).trigger(hiddenEvent)
        $(this._element).trigger(shownEvent)
      }

      if (target) {
        this._activate(target, target.parentNode, complete)
      } else {
        complete()
      }
    }

    dispose() {
      $.removeClass(this._element, DATA_KEY)
      this._element = null
    }


    // private

    _activate(element, container, callback) {
      let active          = $(container).find(Selector.ACTIVE_CHILD)[0]
      let isTransitioning = callback
        && Util.supportsTransitionEnd()
        && ((active && $(active).hasClass(ClassName.FADE))
           || Boolean($(container).find(Selector.FADE_CHILD)[0]))

      let complete = $.proxy(
        this._transitionComplete,
        this,
        element,
        active,
        isTransitioning,
        callback
      )

      if (active && isTransitioning) {
        $(active)
          .one(Util.TRANSITION_END, complete)
          .emulateTransitionEnd(TRANSITION_DURATION)

      } else {
        complete()
      }

      if (active) {
        $(active).removeClass(ClassName.IN)
      }
    }

    _transitionComplete(element, active, isTransitioning, callback) {
      if (active) {
        $(active).removeClass(ClassName.ACTIVE)

        let dropdownChild = $(active).find(
          Selector.DROPDOWN_ACTIVE_CHILD
        )[0]

        if (dropdownChild) {
          $(dropdownChild).removeClass(ClassName.ACTIVE)
        }

        active.setAttribute('aria-expanded', false)
      }

      $(element).addClass(ClassName.ACTIVE)
      element.setAttribute('aria-expanded', true)

      if (isTransitioning) {
        Util.reflow(element)
        $(element).addClass(ClassName.IN)
      } else {
        $(element).removeClass(ClassName.FADE)
      }

      if (element.parentNode &&
         ($(element.parentNode).hasClass(ClassName.DROPDOWN_MENU))) {

        let dropdownElement = $(element).closest(Selector.DROPDOWN)[0]
        if (dropdownElement) {
          $(dropdownElement).find(Selector.DROPDOWN_TOGGLE).addClass(ClassName.ACTIVE)
        }

        element.setAttribute('aria-expanded', true)
      }

      if (callback) {
        callback()
      }
    }


    // static

    static _jQueryInterface(config) {
      return this.each(function () {
        let $this = $(this)
        let data  = $this.data(DATA_KEY)

        if (!data) {
          data = data = new Tab(this)
          $this.data(DATA_KEY, data)
        }

        if (typeof config === 'string') {
          if (data[config] === undefined) {
            throw new Error(`No method named "${config}"`)
          }
          data[config]()
        }
      })
    }

  }


  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(document)
    .on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
      event.preventDefault()
      Tab._jQueryInterface.call($(this), 'show')
    })


  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME]             = Tab._jQueryInterface
  $.fn[NAME].Constructor = Tab
  $.fn[NAME].noConflict  = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT
    return Tab._jQueryInterface
  }

  return Tab

})(jQuery)

export default Tab

/* global Tether */

import Util from './util'


/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.2): tooltip.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

const Tooltip = (($) => {

  /**
   * Check for Tether dependency
   * Tether - http://github.hubspot.com/tether/
   */
  if (window.Tether === undefined) {
    throw new Error('Bootstrap tooltips require Tether (http://github.hubspot.com/tether/)')
  }


  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME                = 'tooltip'
  const VERSION             = '4.0.0-alpha'
  const DATA_KEY            = 'bs.tooltip'
  const EVENT_KEY           = `.${DATA_KEY}`
  const JQUERY_NO_CONFLICT  = $.fn[NAME]
  const TRANSITION_DURATION = 150
  const CLASS_PREFIX        = 'bs-tether'

  const Default = {
    animation   : true,
    template    : '<div class="tooltip" role="tooltip">'
                + '<div class="tooltip-arrow"></div>'
                + '<div class="tooltip-inner"></div></div>',
    trigger     : 'hover focus',
    title       : '',
    delay       : 0,
    html        : false,
    selector    : false,
    placement   : 'top',
    offset      : '0 0',
    constraints : []
  }

  const DefaultType = {
    animation   : 'boolean',
    template    : 'string',
    title       : '(string|element|function)',
    trigger     : 'string',
    delay       : '(number|object)',
    html        : 'boolean',
    selector    : '(string|boolean)',
    placement   : '(string|function)',
    offset      : 'string',
    constraints : 'array'
  }

  const AttachmentMap = {
    TOP    : 'bottom center',
    RIGHT  : 'middle left',
    BOTTOM : 'top center',
    LEFT   : 'middle right'
  }

  const HoverState = {
    IN  : 'in',
    OUT : 'out'
  }

  const Event = {
    HIDE       : `hide${EVENT_KEY}`,
    HIDDEN     : `hidden${EVENT_KEY}`,
    SHOW       : `show${EVENT_KEY}`,
    SHOWN      : `shown${EVENT_KEY}`,
    INSERTED   : `inserted${EVENT_KEY}`,
    CLICK      : `click${EVENT_KEY}`,
    FOCUSIN    : `focusin${EVENT_KEY}`,
    FOCUSOUT   : `focusout${EVENT_KEY}`,
    MOUSEENTER : `mouseenter${EVENT_KEY}`,
    MOUSELEAVE : `mouseleave${EVENT_KEY}`
  }

  const ClassName = {
    FADE : 'fade',
    IN   : 'in'
  }

  const Selector = {
    TOOLTIP       : '.tooltip',
    TOOLTIP_INNER : '.tooltip-inner'
  }

  const TetherClass = {
    element : false,
    enabled : false
  }

  const Trigger = {
    HOVER  : 'hover',
    FOCUS  : 'focus',
    CLICK  : 'click',
    MANUAL : 'manual'
  }


  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class Tooltip {

    constructor(element, config) {

      // private
      this._isEnabled      = true
      this._timeout        = 0
      this._hoverState     = ''
      this._activeTrigger  = {}
      this._tether         = null

      // protected
      this.element = element
      this.config  = this._getConfig(config)
      this.tip     = null

      this._setListeners()

    }


    // getters

    static get VERSION() {
      return VERSION
    }

    static get Default() {
      return Default
    }

    static get NAME() {
      return NAME
    }

    static get DATA_KEY() {
      return DATA_KEY
    }

    static get Event() {
      return Event
    }

    static get EVENT_KEY() {
      return EVENT_KEY
    }

    static get DefaultType() {
      return DefaultType
    }


    // public

    enable() {
      this._isEnabled = true
    }

    disable() {
      this._isEnabled = false
    }

    toggleEnabled() {
      this._isEnabled = !this._isEnabled
    }

    toggle(event) {
      if (event) {
        let dataKey = this.constructor.DATA_KEY
        let context = $(event.currentTarget).data(dataKey)

        if (!context) {
          context = new this.constructor(
            event.currentTarget,
            this._getDelegateConfig()
          )
          $(event.currentTarget).data(dataKey, context)
        }

        context._activeTrigger.click = !context._activeTrigger.click

        if (context._isWithActiveTrigger()) {
          context._enter(null, context)
        } else {
          context._leave(null, context)
        }

      } else {

        if ($(this.getTipElement()).hasClass(ClassName.IN)) {
          this._leave(null, this)
          return
        }

        this._enter(null, this)
      }
    }

    dispose() {
      clearTimeout(this._timeout)

      this.cleanupTether()

      $.removeData(this.element, this.constructor.DATA_KEY)

      $(this.element).off(this.constructor.EVENT_KEY)

      if (this.tip) {
        $(this.tip).remove()
      }

      this._isEnabled      = null
      this._timeout        = null
      this._hoverState     = null
      this._activeTrigger  = null
      this._tether         = null

      this.element = null
      this.config  = null
      this.tip     = null
    }

    show() {
      let showEvent = $.Event(this.constructor.Event.SHOW)

      if (this.isWithContent() && this._isEnabled) {
        $(this.element).trigger(showEvent)

        let isInTheDom = $.contains(
          this.element.ownerDocument.documentElement,
          this.element
        )

        if (showEvent.isDefaultPrevented() || !isInTheDom) {
          return
        }

        let tip   = this.getTipElement()
        let tipId = Util.getUID(this.constructor.NAME)

        tip.setAttribute('id', tipId)
        this.element.setAttribute('aria-describedby', tipId)

        this.setContent()

        if (this.config.animation) {
          $(tip).addClass(ClassName.FADE)
        }

        let placement  = typeof this.config.placement === 'function' ?
          this.config.placement.call(this, tip, this.element) :
          this.config.placement

        let attachment = this._getAttachment(placement)

        $(tip)
          .data(this.constructor.DATA_KEY, this)
          .appendTo(document.body)

        $(this.element).trigger(this.constructor.Event.INSERTED)

        this._tether = new Tether({
          attachment,
          element         : tip,
          target          : this.element,
          classes         : TetherClass,
          classPrefix     : CLASS_PREFIX,
          offset          : this.config.offset,
          constraints     : this.config.constraints,
          addTargetClasses: false
        })

        Util.reflow(tip)
        this._tether.position()

        $(tip).addClass(ClassName.IN)

        let complete = () => {
          let prevHoverState = this._hoverState
          this._hoverState   = null

          $(this.element).trigger(this.constructor.Event.SHOWN)

          if (prevHoverState === HoverState.OUT) {
            this._leave(null, this)
          }
        }

        if (Util.supportsTransitionEnd() && $(this.tip).hasClass(ClassName.FADE)) {
          $(this.tip)
            .one(Util.TRANSITION_END, complete)
            .emulateTransitionEnd(Tooltip._TRANSITION_DURATION)
          return
        }

        complete()
      }
    }

    hide(callback) {
      let tip       = this.getTipElement()
      let hideEvent = $.Event(this.constructor.Event.HIDE)
      let complete  = () => {
        if (this._hoverState !== HoverState.IN && tip.parentNode) {
          tip.parentNode.removeChild(tip)
        }

        this.element.removeAttribute('aria-describedby')
        $(this.element).trigger(this.constructor.Event.HIDDEN)
        this.cleanupTether()

        if (callback) {
          callback()
        }
      }

      $(this.element).trigger(hideEvent)

      if (hideEvent.isDefaultPrevented()) {
        return
      }

      $(tip).removeClass(ClassName.IN)

      if (Util.supportsTransitionEnd() &&
         ($(this.tip).hasClass(ClassName.FADE))) {

        $(tip)
          .one(Util.TRANSITION_END, complete)
          .emulateTransitionEnd(TRANSITION_DURATION)

      } else {
        complete()
      }

      this._hoverState = ''
    }


    // protected

    isWithContent() {
      return Boolean(this.getTitle())
    }

    getTipElement() {
      return (this.tip = this.tip || $(this.config.template)[0])
    }

    setContent() {
      let $tip = $(this.getTipElement())

      this.setElementContent($tip.find(Selector.TOOLTIP_INNER), this.getTitle())

      $tip
        .removeClass(ClassName.FADE)
        .removeClass(ClassName.IN)

      this.cleanupTether()
    }

    setElementContent($element, content) {
      let html = this.config.html
      if (typeof content === 'object' && (content.nodeType || content.jquery)) {
        // content is a DOM node or a jQuery
        if (html) {
          if (!$(content).parent().is($element)) {
            $element.empty().append(content)
          }
        } else {
          $element.text($(content).text())
        }
      } else {
        $element[html ? 'html' : 'text'](content)
      }
    }

    getTitle() {
      let title = this.element.getAttribute('data-original-title')

      if (!title) {
        title = typeof this.config.title === 'function' ?
          this.config.title.call(this.element) :
          this.config.title
      }

      return title
    }

    cleanupTether() {
      if (this._tether) {
        this._tether.destroy()
      }
    }


    // private

    _getAttachment(placement) {
      return AttachmentMap[placement.toUpperCase()]
    }

    _setListeners() {
      let triggers = this.config.trigger.split(' ')

      triggers.forEach((trigger) => {
        if (trigger === 'click') {
          $(this.element).on(
            this.constructor.Event.CLICK,
            this.config.selector,
            $.proxy(this.toggle, this)
          )

        } else if (trigger !== Trigger.MANUAL) {
          let eventIn  = trigger === Trigger.HOVER ?
            this.constructor.Event.MOUSEENTER :
            this.constructor.Event.FOCUSIN
          let eventOut = trigger === Trigger.HOVER ?
            this.constructor.Event.MOUSELEAVE :
            this.constructor.Event.FOCUSOUT

          $(this.element)
            .on(
              eventIn,
              this.config.selector,
              $.proxy(this._enter, this)
            )
            .on(
              eventOut,
              this.config.selector,
              $.proxy(this._leave, this)
            )
        }
      })

      if (this.config.selector) {
        this.config = $.extend({}, this.config, {
          trigger  : 'manual',
          selector : ''
        })
      } else {
        this._fixTitle()
      }
    }

    _fixTitle() {
      let titleType = typeof this.element.getAttribute('data-original-title')
      if (this.element.getAttribute('title') ||
         (titleType !== 'string')) {
        this.element.setAttribute(
          'data-original-title',
          this.element.getAttribute('title') || ''
        )
        this.element.setAttribute('title', '')
      }
    }

    _enter(event, context) {
      let dataKey = this.constructor.DATA_KEY

      context = context || $(event.currentTarget).data(dataKey)

      if (!context) {
        context = new this.constructor(
          event.currentTarget,
          this._getDelegateConfig()
        )
        $(event.currentTarget).data(dataKey, context)
      }

      if (event) {
        context._activeTrigger[
          event.type === 'focusin' ? Trigger.FOCUS : Trigger.HOVER
        ] = true
      }

      if ($(context.getTipElement()).hasClass(ClassName.IN) ||
         (context._hoverState === HoverState.IN)) {
        context._hoverState = HoverState.IN
        return
      }

      clearTimeout(context._timeout)

      context._hoverState = HoverState.IN

      if (!context.config.delay || !context.config.delay.show) {
        context.show()
        return
      }

      context._timeout = setTimeout(() => {
        if (context._hoverState === HoverState.IN) {
          context.show()
        }
      }, context.config.delay.show)
    }

    _leave(event, context) {
      let dataKey = this.constructor.DATA_KEY

      context = context || $(event.currentTarget).data(dataKey)

      if (!context) {
        context = new this.constructor(
          event.currentTarget,
          this._getDelegateConfig()
        )
        $(event.currentTarget).data(dataKey, context)
      }

      if (event) {
        context._activeTrigger[
          event.type === 'focusout' ? Trigger.FOCUS : Trigger.HOVER
        ] = false
      }

      if (context._isWithActiveTrigger()) {
        return
      }

      clearTimeout(context._timeout)

      context._hoverState = HoverState.OUT

      if (!context.config.delay || !context.config.delay.hide) {
        context.hide()
        return
      }

      context._timeout = setTimeout(() => {
        if (context._hoverState === HoverState.OUT) {
          context.hide()
        }
      }, context.config.delay.hide)
    }

    _isWithActiveTrigger() {
      for (let trigger in this._activeTrigger) {
        if (this._activeTrigger[trigger]) {
          return true
        }
      }

      return false
    }

    _getConfig(config) {
      config = $.extend(
        {},
        this.constructor.Default,
        $(this.element).data(),
        config
      )

      if (config.delay && typeof config.delay === 'number') {
        config.delay = {
          show : config.delay,
          hide : config.delay
        }
      }

      Util.typeCheckConfig(
        NAME,
        config,
        this.constructor.DefaultType
      )

      return config
    }

    _getDelegateConfig() {
      let config = {}

      if (this.config) {
        for (let key in this.config) {
          if (this.constructor.Default[key] !== this.config[key]) {
            config[key] = this.config[key]
          }
        }
      }

      return config
    }


    // static

    static _jQueryInterface(config) {
      return this.each(function () {
        let data   = $(this).data(DATA_KEY)
        let _config = typeof config === 'object' ?
          config : null

        if (!data && /destroy|hide/.test(config)) {
          return
        }

        if (!data) {
          data = new Tooltip(this, _config)
          $(this).data(DATA_KEY, data)
        }

        if (typeof config === 'string') {
          if (data[config] === undefined) {
            throw new Error(`No method named "${config}"`)
          }
          data[config]()
        }
      })
    }

  }


  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME]             = Tooltip._jQueryInterface
  $.fn[NAME].Constructor = Tooltip
  $.fn[NAME].noConflict  = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT
    return Tooltip._jQueryInterface
  }

  return Tooltip

})(jQuery)

export default Tooltip

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.2): util.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

const Util = (($) => {


  /**
   * ------------------------------------------------------------------------
   * Private TransitionEnd Helpers
   * ------------------------------------------------------------------------
   */

  let transition = false

  const TransitionEndEvent = {
    WebkitTransition : 'webkitTransitionEnd',
    MozTransition    : 'transitionend',
    OTransition      : 'oTransitionEnd otransitionend',
    transition       : 'transitionend'
  }

  // shoutout AngusCroll (https://goo.gl/pxwQGp)
  function toType(obj) {
    return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
  }

  function isElement(obj) {
    return (obj[0] || obj).nodeType
  }

  function getSpecialTransitionEndEvent() {
    return {
      bindType: transition.end,
      delegateType: transition.end,
      handle(event) {
        if ($(event.target).is(this)) {
          return event.handleObj.handler.apply(this, arguments)
        }
      }
    }
  }

  function transitionEndTest() {
    if (window.QUnit) {
      return false
    }

    let el = document.createElement('bootstrap')

    for (let name in TransitionEndEvent) {
      if (el.style[name] !== undefined) {
        return { end: TransitionEndEvent[name] }
      }
    }

    return false
  }

  function transitionEndEmulator(duration) {
    let called = false

    $(this).one(Util.TRANSITION_END, () => {
      called = true
    })

    setTimeout(() => {
      if (!called) {
        Util.triggerTransitionEnd(this)
      }
    }, duration)

    return this
  }

  function setTransitionEndSupport() {
    transition = transitionEndTest()

    $.fn.emulateTransitionEnd = transitionEndEmulator

    if (Util.supportsTransitionEnd()) {
      $.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent()
    }
  }


  /**
   * --------------------------------------------------------------------------
   * Public Util Api
   * --------------------------------------------------------------------------
   */

  let Util = {

    TRANSITION_END: 'bsTransitionEnd',

    getUID(prefix) {
      do {
        prefix += ~~(Math.random() * 1000000) // "~~" acts like a faster Math.floor() here
      } while (document.getElementById(prefix))
      return prefix
    },

    getSelectorFromElement(element) {
      let selector = element.getAttribute('data-target')

      if (!selector) {
        selector = element.getAttribute('href') || ''
        selector = /^#[a-z]/i.test(selector) ? selector : null
      }

      return selector
    },

    reflow(element) {
      new Function('bs', 'return bs')(element.offsetHeight)
    },

    triggerTransitionEnd(element) {
      $(element).trigger(transition.end)
    },

    supportsTransitionEnd() {
      return Boolean(transition)
    },

    typeCheckConfig(componentName, config, configTypes) {
      for (let property in configTypes) {
        if (configTypes.hasOwnProperty(property)) {
          let expectedTypes = configTypes[property]
          let value         = config[property]
          let valueType

          if (value && isElement(value)) {
            valueType = 'element'
          } else {
            valueType = toType(value)
          }

          if (!new RegExp(expectedTypes).test(valueType)) {
            throw new Error(
              `${componentName.toUpperCase()}: ` +
              `Option "${property}" provided type "${valueType}" ` +
              `but expected type "${expectedTypes}".`)
          }
        }
      }
    }
  }

  setTransitionEndSupport()

  return Util

})(jQuery)

export default Util

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.2): button.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

const Button = (($) => {


  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME                = 'button'
  const VERSION             = '4.0.0-alpha'
  const DATA_KEY            = 'bs.button'
  const EVENT_KEY           = `.${DATA_KEY}`
  const DATA_API_KEY        = '.data-api'
  const JQUERY_NO_CONFLICT  = $.fn[NAME]

  const ClassName = {
    ACTIVE : 'active',
    BUTTON : 'btn',
    FOCUS  : 'focus'
  }

  const Selector = {
    DATA_TOGGLE_CARROT : '[data-toggle^="button"]',
    DATA_TOGGLE        : '[data-toggle="buttons"]',
    INPUT              : 'input',
    ACTIVE             : '.active',
    BUTTON             : '.btn'
  }

  const Event = {
    CLICK_DATA_API      : `click${EVENT_KEY}${DATA_API_KEY}`,
    FOCUS_BLUR_DATA_API : `focus${EVENT_KEY}${DATA_API_KEY} `
                        + `blur${EVENT_KEY}${DATA_API_KEY}`
  }


  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class Button {

    constructor(element) {
      this._element = element
    }


    // getters

    static get VERSION() {
      return VERSION
    }


    // public

    toggle() {
      let triggerChangeEvent = true
      let rootElement        = $(this._element).closest(
        Selector.DATA_TOGGLE
      )[0]

      if (rootElement) {
        let input = $(this._element).find(Selector.INPUT)[0]

        if (input) {
          if (input.type === 'radio') {
            if (input.checked &&
              $(this._element).hasClass(ClassName.ACTIVE)) {
              triggerChangeEvent = false

            } else {
              let activeElement = $(rootElement).find(Selector.ACTIVE)[0]

              if (activeElement) {
                $(activeElement).removeClass(ClassName.ACTIVE)
              }
            }
          }

          if (triggerChangeEvent) {
            input.checked = !$(this._element).hasClass(ClassName.ACTIVE)
            $(this._element).trigger('change')
          }
        }
      } else {
        this._element.setAttribute('aria-pressed',
          !$(this._element).hasClass(ClassName.ACTIVE))
      }

      if (triggerChangeEvent) {
        $(this._element).toggleClass(ClassName.ACTIVE)
      }
    }

    dispose() {
      $.removeData(this._element, DATA_KEY)
      this._element = null
    }


    // static

    static _jQueryInterface(config) {
      return this.each(function () {
        let data = $(this).data(DATA_KEY)

        if (!data) {
          data = new Button(this)
          $(this).data(DATA_KEY, data)
        }

        if (config === 'toggle') {
          data[config]()
        }
      })
    }

  }


  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(document)
    .on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE_CARROT, (event) => {
      event.preventDefault()

      let button = event.target

      if (!$(button).hasClass(ClassName.BUTTON)) {
        button = $(button).closest(Selector.BUTTON)
      }

      Button._jQueryInterface.call($(button), 'toggle')
    })
    .on(Event.FOCUS_BLUR_DATA_API, Selector.DATA_TOGGLE_CARROT, (event) => {
      let button = $(event.target).closest(Selector.BUTTON)[0]
      $(button).toggleClass(ClassName.FOCUS, /^focus(in)?$/.test(event.type))
    })


  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME]             = Button._jQueryInterface
  $.fn[NAME].Constructor = Button
  $.fn[NAME].noConflict  = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT
    return Button._jQueryInterface
  }

  return Button

})(jQuery)

export default Button

import Util from './util'


/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.2): carousel.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

const Carousel = (($) => {


  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME                = 'carousel'
  const VERSION             = '4.0.0-alpha'
  const DATA_KEY            = 'bs.carousel'
  const EVENT_KEY           = `.${DATA_KEY}`
  const DATA_API_KEY        = '.data-api'
  const JQUERY_NO_CONFLICT  = $.fn[NAME]
  const TRANSITION_DURATION = 600

  const Default = {
    interval : 5000,
    keyboard : true,
    slide    : false,
    pause    : 'hover',
    wrap     : true
  }

  const DefaultType = {
    interval : '(number|boolean)',
    keyboard : 'boolean',
    slide    : '(boolean|string)',
    pause    : '(string|boolean)',
    wrap     : 'boolean'
  }

  const Direction = {
    NEXT     : 'next',
    PREVIOUS : 'prev'
  }

  const Event = {
    SLIDE          : `slide${EVENT_KEY}`,
    SLID           : `slid${EVENT_KEY}`,
    KEYDOWN        : `keydown${EVENT_KEY}`,
    MOUSEENTER     : `mouseenter${EVENT_KEY}`,
    MOUSELEAVE     : `mouseleave${EVENT_KEY}`,
    LOAD_DATA_API  : `load${EVENT_KEY}${DATA_API_KEY}`,
    CLICK_DATA_API : `click${EVENT_KEY}${DATA_API_KEY}`
  }

  const ClassName = {
    CAROUSEL : 'carousel',
    ACTIVE   : 'active',
    SLIDE    : 'slide',
    RIGHT    : 'right',
    LEFT     : 'left',
    ITEM     : 'carousel-item'
  }

  const Selector = {
    ACTIVE      : '.active',
    ACTIVE_ITEM : '.active.carousel-item',
    ITEM        : '.carousel-item',
    NEXT_PREV   : '.next, .prev',
    INDICATORS  : '.carousel-indicators',
    DATA_SLIDE  : '[data-slide], [data-slide-to]',
    DATA_RIDE   : '[data-ride="carousel"]'
  }


  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class Carousel {

    constructor(element, config) {
      this._items             = null
      this._interval          = null
      this._activeElement     = null

      this._isPaused          = false
      this._isSliding         = false

      this._config            = this._getConfig(config)
      this._element           = $(element)[0]
      this._indicatorsElement = $(this._element).find(Selector.INDICATORS)[0]

      this._addEventListeners()
    }


    // getters

    static get VERSION() {
      return VERSION
    }

    static get Default() {
      return Default
    }


    // public

    next() {
      if (!this._isSliding) {
        this._slide(Direction.NEXT)
      }
    }

    nextWhenVisible() {
      // Don't call next when the page isn't visible
      if (!document.hidden) {
        this.next()
      }
    }

    prev() {
      if (!this._isSliding) {
        this._slide(Direction.PREVIOUS)
      }
    }

    pause(event) {
      if (!event) {
        this._isPaused = true
      }

      if ($(this._element).find(Selector.NEXT_PREV)[0] &&
        Util.supportsTransitionEnd()) {
        Util.triggerTransitionEnd(this._element)
        this.cycle(true)
      }

      clearInterval(this._interval)
      this._interval = null
    }

    cycle(event) {
      if (!event) {
        this._isPaused = false
      }

      if (this._interval) {
        clearInterval(this._interval)
        this._interval = null
      }

      if (this._config.interval && !this._isPaused) {
        this._interval = setInterval(
          $.proxy(document.visibilityState ? this.nextWhenVisible : this.next, this), this._config.interval
        )
      }
    }

    to(index) {
      this._activeElement = $(this._element).find(Selector.ACTIVE_ITEM)[0]

      let activeIndex = this._getItemIndex(this._activeElement)

      if (index > (this._items.length - 1) || index < 0) {
        return
      }

      if (this._isSliding) {
        $(this._element).one(Event.SLID, () => this.to(index))
        return
      }

      if (activeIndex === index) {
        this.pause()
        this.cycle()
        return
      }

      let direction = index > activeIndex ?
        Direction.NEXT :
        Direction.PREVIOUS

      this._slide(direction, this._items[index])
    }

    dispose() {
      $(this._element).off(EVENT_KEY)
      $.removeData(this._element, DATA_KEY)

      this._items             = null
      this._config            = null
      this._element           = null
      this._interval          = null
      this._isPaused          = null
      this._isSliding         = null
      this._activeElement     = null
      this._indicatorsElement = null
    }


    // private

    _getConfig(config) {
      config = $.extend({}, Default, config)
      Util.typeCheckConfig(NAME, config, DefaultType)
      return config
    }

    _addEventListeners() {
      if (this._config.keyboard) {
        $(this._element)
          .on(Event.KEYDOWN, $.proxy(this._keydown, this))
      }

      if (this._config.pause === 'hover' &&
        !('ontouchstart' in document.documentElement)) {
        $(this._element)
          .on(Event.MOUSEENTER, $.proxy(this.pause, this))
          .on(Event.MOUSELEAVE, $.proxy(this.cycle, this))
      }
    }

    _keydown(event) {
      event.preventDefault()

      if (/input|textarea/i.test(event.target.tagName)) {
        return
      }

      switch (event.which) {
        case 37: this.prev(); break
        case 39: this.next(); break
        default: return
      }
    }

    _getItemIndex(element) {
      this._items = $.makeArray($(element).parent().find(Selector.ITEM))
      return this._items.indexOf(element)
    }

    _getItemByDirection(direction, activeElement) {
      let isNextDirection = direction === Direction.NEXT
      let isPrevDirection = direction === Direction.PREVIOUS
      let activeIndex     = this._getItemIndex(activeElement)
      let lastItemIndex   = (this._items.length - 1)
      let isGoingToWrap   = (isPrevDirection && activeIndex === 0) ||
                            (isNextDirection && activeIndex === lastItemIndex)

      if (isGoingToWrap && !this._config.wrap) {
        return activeElement
      }

      let delta     = direction === Direction.PREVIOUS ? -1 : 1
      let itemIndex = (activeIndex + delta) % this._items.length

      return itemIndex === -1 ?
        this._items[this._items.length - 1] : this._items[itemIndex]
    }


    _triggerSlideEvent(relatedTarget, directionalClassname) {
      let slideEvent = $.Event(Event.SLIDE, {
        relatedTarget,
        direction: directionalClassname
      })

      $(this._element).trigger(slideEvent)

      return slideEvent
    }

    _setActiveIndicatorElement(element) {
      if (this._indicatorsElement) {
        $(this._indicatorsElement)
          .find(Selector.ACTIVE)
          .removeClass(ClassName.ACTIVE)

        let nextIndicator = this._indicatorsElement.children[
          this._getItemIndex(element)
        ]

        if (nextIndicator) {
          $(nextIndicator).addClass(ClassName.ACTIVE)
        }
      }
    }

    _slide(direction, element) {
      let activeElement = $(this._element).find(Selector.ACTIVE_ITEM)[0]
      let nextElement   = element || activeElement &&
        this._getItemByDirection(direction, activeElement)

      let isCycling = Boolean(this._interval)

      let directionalClassName = direction === Direction.NEXT ?
        ClassName.LEFT :
        ClassName.RIGHT

      if (nextElement && $(nextElement).hasClass(ClassName.ACTIVE)) {
        this._isSliding = false
        return
      }

      let slideEvent = this._triggerSlideEvent(nextElement, directionalClassName)
      if (slideEvent.isDefaultPrevented()) {
        return
      }

      if (!activeElement || !nextElement) {
        // some weirdness is happening, so we bail
        return
      }

      this._isSliding = true

      if (isCycling) {
        this.pause()
      }

      this._setActiveIndicatorElement(nextElement)

      let slidEvent = $.Event(Event.SLID, {
        relatedTarget: nextElement,
        direction: directionalClassName
      })

      if (Util.supportsTransitionEnd() &&
        $(this._element).hasClass(ClassName.SLIDE)) {

        $(nextElement).addClass(direction)

        Util.reflow(nextElement)

        $(activeElement).addClass(directionalClassName)
        $(nextElement).addClass(directionalClassName)

        $(activeElement)
          .one(Util.TRANSITION_END, () => {
            $(nextElement)
              .removeClass(directionalClassName)
              .removeClass(direction)

            $(nextElement).addClass(ClassName.ACTIVE)

            $(activeElement)
              .removeClass(ClassName.ACTIVE)
              .removeClass(direction)
              .removeClass(directionalClassName)

            this._isSliding = false

            setTimeout(() => $(this._element).trigger(slidEvent), 0)

          })
          .emulateTransitionEnd(TRANSITION_DURATION)

      } else {
        $(activeElement).removeClass(ClassName.ACTIVE)
        $(nextElement).addClass(ClassName.ACTIVE)

        this._isSliding = false
        $(this._element).trigger(slidEvent)
      }

      if (isCycling) {
        this.cycle()
      }
    }


    // static

    static _jQueryInterface(config) {
      return this.each(function () {
        let data      = $(this).data(DATA_KEY)
        let _config = $.extend({}, Default, $(this).data())

        if (typeof config === 'object') {
          $.extend(_config, config)
        }

        let action = typeof config === 'string' ? config : _config.slide

        if (!data) {
          data = new Carousel(this, _config)
          $(this).data(DATA_KEY, data)
        }

        if (typeof config === 'number') {
          data.to(config)
        } else if (typeof action === 'string') {
          if (data[action] === undefined) {
            throw new Error(`No method named "${action}"`)
          }
          data[action]()
        } else if (_config.interval) {
          data.pause()
          data.cycle()
        }
      })
    }

    static _dataApiClickHandler(event) {
      let selector = Util.getSelectorFromElement(this)

      if (!selector) {
        return
      }

      let target = $(selector)[0]

      if (!target || !$(target).hasClass(ClassName.CAROUSEL)) {
        return
      }

      let config     = $.extend({}, $(target).data(), $(this).data())
      let slideIndex = this.getAttribute('data-slide-to')

      if (slideIndex) {
        config.interval = false
      }

      Carousel._jQueryInterface.call($(target), config)

      if (slideIndex) {
        $(target).data(DATA_KEY).to(slideIndex)
      }

      event.preventDefault()
    }

  }


  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(document)
    .on(Event.CLICK_DATA_API, Selector.DATA_SLIDE, Carousel._dataApiClickHandler)

  $(window).on(Event.LOAD_DATA_API, () => {
    $(Selector.DATA_RIDE).each(function () {
      let $carousel = $(this)
      Carousel._jQueryInterface.call($carousel, $carousel.data())
    })
  })


  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME]             = Carousel._jQueryInterface
  $.fn[NAME].Constructor = Carousel
  $.fn[NAME].noConflict  = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT
    return Carousel._jQueryInterface
  }

  return Carousel

})(jQuery)

export default Carousel

import Util from './util'


/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.2): collapse.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

const Collapse = (($) => {


  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME                = 'collapse'
  const VERSION             = '4.0.0-alpha'
  const DATA_KEY            = 'bs.collapse'
  const EVENT_KEY           = `.${DATA_KEY}`
  const DATA_API_KEY        = '.data-api'
  const JQUERY_NO_CONFLICT  = $.fn[NAME]
  const TRANSITION_DURATION = 600

  const Default = {
    toggle : true,
    parent : ''
  }

  const DefaultType = {
    toggle : 'boolean',
    parent : 'string'
  }

  const Event = {
    SHOW           : `show${EVENT_KEY}`,
    SHOWN          : `shown${EVENT_KEY}`,
    HIDE           : `hide${EVENT_KEY}`,
    HIDDEN         : `hidden${EVENT_KEY}`,
    CLICK_DATA_API : `click${EVENT_KEY}${DATA_API_KEY}`
  }

  const ClassName = {
    IN         : 'in',
    COLLAPSE   : 'collapse',
    COLLAPSING : 'collapsing',
    COLLAPSED  : 'collapsed'
  }

  const Dimension = {
    WIDTH  : 'width',
    HEIGHT : 'height'
  }

  const Selector = {
    ACTIVES     : '.panel > .in, .panel > .collapsing',
    DATA_TOGGLE : '[data-toggle="collapse"]'
  }


  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class Collapse {

    constructor(element, config) {
      this._isTransitioning = false
      this._element         = element
      this._config          = this._getConfig(config)
      this._triggerArray    = $.makeArray($(
        `[data-toggle="collapse"][href="#${element.id}"],` +
        `[data-toggle="collapse"][data-target="#${element.id}"]`
      ))

      this._parent = this._config.parent ? this._getParent() : null

      if (!this._config.parent) {
        this._addAriaAndCollapsedClass(this._element, this._triggerArray)
      }

      if (this._config.toggle) {
        this.toggle()
      }
    }


    // getters

    static get VERSION() {
      return VERSION
    }

    static get Default() {
      return Default
    }


    // public

    toggle() {
      if ($(this._element).hasClass(ClassName.IN)) {
        this.hide()
      } else {
        this.show()
      }
    }

    show() {
      if (this._isTransitioning ||
        $(this._element).hasClass(ClassName.IN)) {
        return
      }

      let actives
      let activesData

      if (this._parent) {
        actives = $.makeArray($(Selector.ACTIVES))
        if (!actives.length) {
          actives = null
        }
      }

      if (actives) {
        activesData = $(actives).data(DATA_KEY)
        if (activesData && activesData._isTransitioning) {
          return
        }
      }

      let startEvent = $.Event(Event.SHOW)
      $(this._element).trigger(startEvent)
      if (startEvent.isDefaultPrevented()) {
        return
      }

      if (actives) {
        Collapse._jQueryInterface.call($(actives), 'hide')
        if (!activesData) {
          $(actives).data(DATA_KEY, null)
        }
      }

      let dimension = this._getDimension()

      $(this._element)
        .removeClass(ClassName.COLLAPSE)
        .addClass(ClassName.COLLAPSING)

      this._element.style[dimension] = 0
      this._element.setAttribute('aria-expanded', true)

      if (this._triggerArray.length) {
        $(this._triggerArray)
          .removeClass(ClassName.COLLAPSED)
          .attr('aria-expanded', true)
      }

      this.setTransitioning(true)

      let complete = () => {
        $(this._element)
          .removeClass(ClassName.COLLAPSING)
          .addClass(ClassName.COLLAPSE)
          .addClass(ClassName.IN)

        this._element.style[dimension] = ''

        this.setTransitioning(false)

        $(this._element).trigger(Event.SHOWN)
      }

      if (!Util.supportsTransitionEnd()) {
        complete()
        return
      }

      let capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1)
      let scrollSize           = `scroll${capitalizedDimension}`

      $(this._element)
        .one(Util.TRANSITION_END, complete)
        .emulateTransitionEnd(TRANSITION_DURATION)

      this._element.style[dimension] = `${this._element[scrollSize]}px`
    }

    hide() {
      if (this._isTransitioning ||
        !$(this._element).hasClass(ClassName.IN)) {
        return
      }

      let startEvent = $.Event(Event.HIDE)
      $(this._element).trigger(startEvent)
      if (startEvent.isDefaultPrevented()) {
        return
      }

      let dimension       = this._getDimension()
      let offsetDimension = dimension === Dimension.WIDTH ?
        'offsetWidth' : 'offsetHeight'

      this._element.style[dimension] = `${this._element[offsetDimension]}px`

      Util.reflow(this._element)

      $(this._element)
        .addClass(ClassName.COLLAPSING)
        .removeClass(ClassName.COLLAPSE)
        .removeClass(ClassName.IN)

      this._element.setAttribute('aria-expanded', false)

      if (this._triggerArray.length) {
        $(this._triggerArray)
          .addClass(ClassName.COLLAPSED)
          .attr('aria-expanded', false)
      }

      this.setTransitioning(true)

      let complete = () => {
        this.setTransitioning(false)
        $(this._element)
          .removeClass(ClassName.COLLAPSING)
          .addClass(ClassName.COLLAPSE)
          .trigger(Event.HIDDEN)
      }

      this._element.style[dimension] = 0

      if (!Util.supportsTransitionEnd()) {
        complete()
        return
      }

      $(this._element)
        .one(Util.TRANSITION_END, complete)
        .emulateTransitionEnd(TRANSITION_DURATION)
    }

    setTransitioning(isTransitioning) {
      this._isTransitioning = isTransitioning
    }

    dispose() {
      $.removeData(this._element, DATA_KEY)

      this._config          = null
      this._parent          = null
      this._element         = null
      this._triggerArray    = null
      this._isTransitioning = null
    }


    // private

    _getConfig(config) {
      config = $.extend({}, Default, config)
      config.toggle = Boolean(config.toggle) // coerce string values
      Util.typeCheckConfig(NAME, config, DefaultType)
      return config
    }

    _getDimension() {
      let hasWidth = $(this._element).hasClass(Dimension.WIDTH)
      return hasWidth ? Dimension.WIDTH : Dimension.HEIGHT
    }

    _getParent() {
      let parent   = $(this._config.parent)[0]
      let selector =
        `[data-toggle="collapse"][data-parent="${this._config.parent}"]`

      $(parent).find(selector).each((i, element) => {
        this._addAriaAndCollapsedClass(
          Collapse._getTargetFromElement(element),
          [element]
        )
      })

      return parent
    }

    _addAriaAndCollapsedClass(element, triggerArray) {
      if (element) {
        let isOpen = $(element).hasClass(ClassName.IN)
        element.setAttribute('aria-expanded', isOpen)

        if (triggerArray.length) {
          $(triggerArray)
            .toggleClass(ClassName.COLLAPSED, !isOpen)
            .attr('aria-expanded', isOpen)
        }
      }
    }


    // static

    static _getTargetFromElement(element) {
      let selector = Util.getSelectorFromElement(element)
      return selector ? $(selector)[0] : null
    }

    static _jQueryInterface(config) {
      return this.each(function () {
        let $this   = $(this)
        let data    = $this.data(DATA_KEY)
        let _config = $.extend(
          {},
          Default,
          $this.data(),
          typeof config === 'object' && config
        )

        if (!data && _config.toggle && /show|hide/.test(config)) {
          _config.toggle = false
        }

        if (!data) {
          data = new Collapse(this, _config)
          $this.data(DATA_KEY, data)
        }

        if (typeof config === 'string') {
          if (data[config] === undefined) {
            throw new Error(`No method named "${config}"`)
          }
          data[config]()
        }
      })
    }

  }


  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
    event.preventDefault()

    let target = Collapse._getTargetFromElement(this)
    let data   = $(target).data(DATA_KEY)
    let config = data ? 'toggle' : $(this).data()

    Collapse._jQueryInterface.call($(target), config)
  })


  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME]             = Collapse._jQueryInterface
  $.fn[NAME].Constructor = Collapse
  $.fn[NAME].noConflict  = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT
    return Collapse._jQueryInterface
  }

  return Collapse

})(jQuery)

export default Collapse

import Util from './util'


/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.2): dropdown.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

const Dropdown = (($) => {


  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME                = 'dropdown'
  const VERSION             = '4.0.0-alpha'
  const DATA_KEY            = 'bs.dropdown'
  const EVENT_KEY           = `.${DATA_KEY}`
  const DATA_API_KEY        = '.data-api'
  const JQUERY_NO_CONFLICT  = $.fn[NAME]

  const Event = {
    HIDE             : `hide${EVENT_KEY}`,
    HIDDEN           : `hidden${EVENT_KEY}`,
    SHOW             : `show${EVENT_KEY}`,
    SHOWN            : `shown${EVENT_KEY}`,
    CLICK            : `click${EVENT_KEY}`,
    CLICK_DATA_API   : `click${EVENT_KEY}${DATA_API_KEY}`,
    KEYDOWN_DATA_API : `keydown${EVENT_KEY}${DATA_API_KEY}`
  }

  const ClassName = {
    BACKDROP : 'dropdown-backdrop',
    DISABLED : 'disabled',
    OPEN     : 'open'
  }

  const Selector = {
    BACKDROP      : '.dropdown-backdrop',
    DATA_TOGGLE   : '[data-toggle="dropdown"]',
    FORM_CHILD    : '.dropdown form',
    ROLE_MENU     : '[role="menu"]',
    ROLE_LISTBOX  : '[role="listbox"]',
    NAVBAR_NAV    : '.navbar-nav',
    VISIBLE_ITEMS : '[role="menu"] li:not(.disabled) a, '
                  + '[role="listbox"] li:not(.disabled) a'
  }


  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class Dropdown {

    constructor(element) {
      this._element = element

      this._addEventListeners()
    }


    // getters

    static get VERSION() {
      return VERSION
    }


    // public

    toggle() {
      if (this.disabled || $(this).hasClass(ClassName.DISABLED)) {
        return false
      }

      let parent   = Dropdown._getParentFromElement(this)
      let isActive = $(parent).hasClass(ClassName.OPEN)

      Dropdown._clearMenus()

      if (isActive) {
        return false
      }

      if ('ontouchstart' in document.documentElement &&
         (!$(parent).closest(Selector.NAVBAR_NAV).length)) {

        // if mobile we use a backdrop because click events don't delegate
        let dropdown       = document.createElement('div')
        dropdown.className = ClassName.BACKDROP
        $(dropdown).insertBefore(this)
        $(dropdown).on('click', Dropdown._clearMenus)
      }

      let relatedTarget = { relatedTarget : this }
      let showEvent     = $.Event(Event.SHOW, relatedTarget)

      $(parent).trigger(showEvent)

      if (showEvent.isDefaultPrevented()) {
        return false
      }

      this.focus()
      this.setAttribute('aria-expanded', 'true')

      $(parent).toggleClass(ClassName.OPEN)
      $(parent).trigger($.Event(Event.SHOWN, relatedTarget))

      return false
    }

    dispose() {
      $.removeData(this._element, DATA_KEY)
      $(this._element).off(EVENT_KEY)
      this._element = null
    }


    // private

    _addEventListeners() {
      $(this._element).on(Event.CLICK, this.toggle)
    }


    // static

    static _jQueryInterface(config) {
      return this.each(function () {
        let data  = $(this).data(DATA_KEY)

        if (!data) {
          $(this).data(DATA_KEY, (data = new Dropdown(this)))
        }

        if (typeof config === 'string') {
          if (data[config] === undefined) {
            throw new Error(`No method named "${config}"`)
          }
          data[config].call(this)
        }
      })
    }

    static _clearMenus(event) {
      if (event && event.which === 3) {
        return
      }

      let backdrop = $(Selector.BACKDROP)[0]
      if (backdrop) {
        backdrop.parentNode.removeChild(backdrop)
      }

      let toggles = $.makeArray($(Selector.DATA_TOGGLE))

      for (let i = 0; i < toggles.length; i++) {
        let parent        = Dropdown._getParentFromElement(toggles[i])
        let relatedTarget = { relatedTarget : toggles[i] }

        if (!$(parent).hasClass(ClassName.OPEN)) {
          continue
        }

        if (event && event.type === 'click' &&
           (/input|textarea/i.test(event.target.tagName)) &&
           ($.contains(parent, event.target))) {
          continue
        }

        let hideEvent = $.Event(Event.HIDE, relatedTarget)
        $(parent).trigger(hideEvent)
        if (hideEvent.isDefaultPrevented()) {
          continue
        }

        toggles[i].setAttribute('aria-expanded', 'false')

        $(parent)
          .removeClass(ClassName.OPEN)
          .trigger($.Event(Event.HIDDEN, relatedTarget))
      }
    }

    static _getParentFromElement(element) {
      let parent
      let selector = Util.getSelectorFromElement(element)

      if (selector) {
        parent = $(selector)[0]
      }

      return parent || element.parentNode
    }

    static _dataApiKeydownHandler(event) {
      if (!/(38|40|27|32)/.test(event.which) ||
         /input|textarea/i.test(event.target.tagName)) {
        return
      }

      event.preventDefault()
      event.stopPropagation()

      if (this.disabled || $(this).hasClass(ClassName.DISABLED)) {
        return
      }

      let parent   = Dropdown._getParentFromElement(this)
      let isActive = $(parent).hasClass(ClassName.OPEN)

      if ((!isActive && event.which !== 27) ||
           (isActive && event.which === 27)) {

        if (event.which === 27) {
          let toggle = $(parent).find(Selector.DATA_TOGGLE)[0]
          $(toggle).trigger('focus')
        }

        $(this).trigger('click')
        return
      }

      let items = $.makeArray($(Selector.VISIBLE_ITEMS))

      items = items.filter((item) => {
        return item.offsetWidth || item.offsetHeight
      })

      if (!items.length) {
        return
      }

      let index = items.indexOf(event.target)

      if (event.which === 38 && index > 0) { // up
        index--
      }

      if (event.which === 40 && index < items.length - 1) { // down
        index++
      }

      if (!~index) {
        index = 0
      }

      items[index].focus()
    }

  }


  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(document)
    .on(Event.KEYDOWN_DATA_API, Selector.DATA_TOGGLE,  Dropdown._dataApiKeydownHandler)
    .on(Event.KEYDOWN_DATA_API, Selector.ROLE_MENU,    Dropdown._dataApiKeydownHandler)
    .on(Event.KEYDOWN_DATA_API, Selector.ROLE_LISTBOX, Dropdown._dataApiKeydownHandler)
    .on(Event.CLICK_DATA_API, Dropdown._clearMenus)
    .on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, Dropdown.prototype.toggle)
    .on(Event.CLICK_DATA_API, Selector.FORM_CHILD, (e) => {
      e.stopPropagation()
    })


  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME]             = Dropdown._jQueryInterface
  $.fn[NAME].Constructor = Dropdown
  $.fn[NAME].noConflict  = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT
    return Dropdown._jQueryInterface
  }

  return Dropdown

})(jQuery)

export default Dropdown

import Util from './util'


/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.2): modal.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

const Modal = (($) => {


  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME                         = 'modal'
  const VERSION                      = '4.0.0-alpha'
  const DATA_KEY                     = 'bs.modal'
  const EVENT_KEY                    = `.${DATA_KEY}`
  const DATA_API_KEY                 = '.data-api'
  const JQUERY_NO_CONFLICT           = $.fn[NAME]
  const TRANSITION_DURATION          = 300
  const BACKDROP_TRANSITION_DURATION = 150

  const Default = {
    backdrop : true,
    keyboard : true,
    focus    : true,
    show     : true
  }

  const DefaultType = {
    backdrop : '(boolean|string)',
    keyboard : 'boolean',
    focus    : 'boolean',
    show     : 'boolean'
  }

  const Event = {
    HIDE              : `hide${EVENT_KEY}`,
    HIDDEN            : `hidden${EVENT_KEY}`,
    SHOW              : `show${EVENT_KEY}`,
    SHOWN             : `shown${EVENT_KEY}`,
    FOCUSIN           : `focusin${EVENT_KEY}`,
    RESIZE            : `resize${EVENT_KEY}`,
    CLICK_DISMISS     : `click.dismiss${EVENT_KEY}`,
    KEYDOWN_DISMISS   : `keydown.dismiss${EVENT_KEY}`,
    MOUSEUP_DISMISS   : `mouseup.dismiss${EVENT_KEY}`,
    MOUSEDOWN_DISMISS : `mousedown.dismiss${EVENT_KEY}`,
    CLICK_DATA_API    : `click${EVENT_KEY}${DATA_API_KEY}`
  }

  const ClassName = {
    SCROLLBAR_MEASURER : 'modal-scrollbar-measure',
    BACKDROP           : 'modal-backdrop',
    OPEN               : 'modal-open',
    FADE               : 'fade',
    IN                 : 'in'
  }

  const Selector = {
    DIALOG             : '.modal-dialog',
    DATA_TOGGLE        : '[data-toggle="modal"]',
    DATA_DISMISS       : '[data-dismiss="modal"]',
    FIXED_CONTENT      : '.navbar-fixed-top, .navbar-fixed-bottom, .is-fixed'
  }


  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class Modal {

    constructor(element, config) {
      this._config              = this._getConfig(config)
      this._element             = element
      this._dialog              = $(element).find(Selector.DIALOG)[0]
      this._backdrop            = null
      this._isShown             = false
      this._isBodyOverflowing   = false
      this._ignoreBackdropClick = false
      this._originalBodyPadding = 0
      this._scrollbarWidth      = 0
    }


    // getters

    static get VERSION() {
      return VERSION
    }

    static get Default() {
      return Default
    }


    // public

    toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget)
    }

    show(relatedTarget) {
      let showEvent = $.Event(Event.SHOW, {
        relatedTarget
      })

      $(this._element).trigger(showEvent)

      if (this._isShown || showEvent.isDefaultPrevented()) {
        return
      }

      this._isShown = true

      this._checkScrollbar()
      this._setScrollbar()

      $(document.body).addClass(ClassName.OPEN)

      this._setEscapeEvent()
      this._setResizeEvent()

      $(this._element).on(
        Event.CLICK_DISMISS,
        Selector.DATA_DISMISS,
        $.proxy(this.hide, this)
      )

      $(this._dialog).on(Event.MOUSEDOWN_DISMISS, () => {
        $(this._element).one(Event.MOUSEUP_DISMISS, (event) => {
          if ($(event.target).is(this._element)) {
            this._ignoreBackdropClick = true
          }
        })
      })

      this._showBackdrop(
        $.proxy(this._showElement, this, relatedTarget)
      )
    }

    hide(event) {
      if (event) {
        event.preventDefault()
      }

      let hideEvent = $.Event(Event.HIDE)

      $(this._element).trigger(hideEvent)

      if (!this._isShown || hideEvent.isDefaultPrevented()) {
        return
      }

      this._isShown = false

      this._setEscapeEvent()
      this._setResizeEvent()

      $(document).off(Event.FOCUSIN)

      $(this._element).removeClass(ClassName.IN)

      $(this._element).off(Event.CLICK_DISMISS)
      $(this._dialog).off(Event.MOUSEDOWN_DISMISS)

      if (Util.supportsTransitionEnd() &&
         ($(this._element).hasClass(ClassName.FADE))) {

        $(this._element)
          .one(Util.TRANSITION_END, $.proxy(this._hideModal, this))
          .emulateTransitionEnd(TRANSITION_DURATION)
      } else {
        this._hideModal()
      }
    }

    dispose() {
      $.removeData(this._element, DATA_KEY)

      $(window).off(EVENT_KEY)
      $(document).off(EVENT_KEY)
      $(this._element).off(EVENT_KEY)
      $(this._backdrop).off(EVENT_KEY)

      this._config              = null
      this._element             = null
      this._dialog              = null
      this._backdrop            = null
      this._isShown             = null
      this._isBodyOverflowing   = null
      this._ignoreBackdropClick = null
      this._originalBodyPadding = null
      this._scrollbarWidth      = null
    }


    // private

    _getConfig(config) {
      config = $.extend({}, Default, config)
      Util.typeCheckConfig(NAME, config, DefaultType)
      return config
    }

    _showElement(relatedTarget) {
      let transition = Util.supportsTransitionEnd() &&
        $(this._element).hasClass(ClassName.FADE)

      if (!this._element.parentNode ||
         (this._element.parentNode.nodeType !== Node.ELEMENT_NODE)) {
        // don't move modals dom position
        document.body.appendChild(this._element)
      }

      this._element.style.display = 'block'
      this._element.scrollTop = 0

      if (transition) {
        Util.reflow(this._element)
      }

      $(this._element).addClass(ClassName.IN)

      if (this._config.focus) {
        this._enforceFocus()
      }

      let shownEvent = $.Event(Event.SHOWN, {
        relatedTarget
      })

      let transitionComplete = () => {
        if (this._config.focus) {
          this._element.focus()
        }
        $(this._element).trigger(shownEvent)
      }

      if (transition) {
        $(this._dialog)
          .one(Util.TRANSITION_END, transitionComplete)
          .emulateTransitionEnd(TRANSITION_DURATION)
      } else {
        transitionComplete()
      }
    }

    _enforceFocus() {
      $(document)
        .off(Event.FOCUSIN) // guard against infinite focus loop
        .on(Event.FOCUSIN, (event) => {
          if (this._element !== event.target &&
             (!$(this._element).has(event.target).length)) {
            this._element.focus()
          }
        })
    }

    _setEscapeEvent() {
      if (this._isShown && this._config.keyboard) {
        $(this._element).on(Event.KEYDOWN_DISMISS, (event) => {
          if (event.which === 27) {
            this.hide()
          }
        })

      } else if (!this._isShown) {
        $(this._element).off(Event.KEYDOWN_DISMISS)
      }
    }

    _setResizeEvent() {
      if (this._isShown) {
        $(window).on(Event.RESIZE, $.proxy(this._handleUpdate, this))
      } else {
        $(window).off(Event.RESIZE)
      }
    }

    _hideModal() {
      this._element.style.display = 'none'
      this._showBackdrop(() => {
        $(document.body).removeClass(ClassName.OPEN)
        this._resetAdjustments()
        this._resetScrollbar()
        $(this._element).trigger(Event.HIDDEN)
      })
    }

    _removeBackdrop() {
      if (this._backdrop) {
        $(this._backdrop).remove()
        this._backdrop = null
      }
    }

    _showBackdrop(callback) {
      let animate = $(this._element).hasClass(ClassName.FADE) ?
        ClassName.FADE : ''

      if (this._isShown && this._config.backdrop) {
        let doAnimate = Util.supportsTransitionEnd() && animate

        this._backdrop = document.createElement('div')
        this._backdrop.className = ClassName.BACKDROP

        if (animate) {
          $(this._backdrop).addClass(animate)
        }

        $(this._backdrop).appendTo(document.body)

        $(this._element).on(Event.CLICK_DISMISS, (event) => {
          if (this._ignoreBackdropClick) {
            this._ignoreBackdropClick = false
            return
          }
          if (event.target !== event.currentTarget) {
            return
          }
          if (this._config.backdrop === 'static') {
            this._element.focus()
          } else {
            this.hide()
          }
        })

        if (doAnimate) {
          Util.reflow(this._backdrop)
        }

        $(this._backdrop).addClass(ClassName.IN)

        if (!callback) {
          return
        }

        if (!doAnimate) {
          callback()
          return
        }

        $(this._backdrop)
          .one(Util.TRANSITION_END, callback)
          .emulateTransitionEnd(BACKDROP_TRANSITION_DURATION)

      } else if (!this._isShown && this._backdrop) {
        $(this._backdrop).removeClass(ClassName.IN)

        let callbackRemove = () => {
          this._removeBackdrop()
          if (callback) {
            callback()
          }
        }

        if (Util.supportsTransitionEnd() &&
           ($(this._element).hasClass(ClassName.FADE))) {
          $(this._backdrop)
            .one(Util.TRANSITION_END, callbackRemove)
            .emulateTransitionEnd(BACKDROP_TRANSITION_DURATION)
        } else {
          callbackRemove()
        }

      } else if (callback) {
        callback()
      }
    }


    // ----------------------------------------------------------------------
    // the following methods are used to handle overflowing modals
    // todo (fat): these should probably be refactored out of modal.js
    // ----------------------------------------------------------------------

    _handleUpdate() {
      this._adjustDialog()
    }

    _adjustDialog() {
      let isModalOverflowing =
        this._element.scrollHeight > document.documentElement.clientHeight

      if (!this._isBodyOverflowing && isModalOverflowing) {
        this._element.style.paddingLeft = `${this._scrollbarWidth}px`
      }

      if (this._isBodyOverflowing && !isModalOverflowing) {
        this._element.style.paddingRight = `${this._scrollbarWidth}px~`
      }
    }

    _resetAdjustments() {
      this._element.style.paddingLeft = ''
      this._element.style.paddingRight = ''
    }

    _checkScrollbar() {
      let fullWindowWidth = window.innerWidth
      if (!fullWindowWidth) { // workaround for missing window.innerWidth in IE8
        let documentElementRect = document.documentElement.getBoundingClientRect()
        fullWindowWidth =
          documentElementRect.right - Math.abs(documentElementRect.left)
      }
      this._isBodyOverflowing = document.body.clientWidth < fullWindowWidth
      this._scrollbarWidth = this._getScrollbarWidth()
    }

    _setScrollbar() {
      let bodyPadding = parseInt(
        $(Selector.FIXED_CONTENT).css('padding-right') || 0,
        10
      )

      this._originalBodyPadding = document.body.style.paddingRight || ''

      if (this._isBodyOverflowing) {
        document.body.style.paddingRight =
          `${bodyPadding + this._scrollbarWidth}px`
      }
    }

    _resetScrollbar() {
      document.body.style.paddingRight = this._originalBodyPadding
    }

    _getScrollbarWidth() { // thx d.walsh
      let scrollDiv = document.createElement('div')
      scrollDiv.className = ClassName.SCROLLBAR_MEASURER
      document.body.appendChild(scrollDiv)
      let scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
      document.body.removeChild(scrollDiv)
      return scrollbarWidth
    }


    // static

    static _jQueryInterface(config, relatedTarget) {
      return this.each(function () {
        let data    = $(this).data(DATA_KEY)
        let _config = $.extend(
          {},
          Modal.Default,
          $(this).data(),
          typeof config === 'object' && config
        )

        if (!data) {
          data = new Modal(this, _config)
          $(this).data(DATA_KEY, data)
        }

        if (typeof config === 'string') {
          if (data[config] === undefined) {
            throw new Error(`No method named "${config}"`)
          }
          data[config](relatedTarget)
        } else if (_config.show) {
          data.show(relatedTarget)
        }
      })
    }

  }


  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
    let target
    let selector = Util.getSelectorFromElement(this)

    if (selector) {
      target = $(selector)[0]
    }

    let config = $(target).data(DATA_KEY) ?
      'toggle' : $.extend({}, $(target).data(), $(this).data())

    if (this.tagName === 'A') {
      event.preventDefault()
    }

    let $target = $(target).one(Event.SHOW, (showEvent) => {
      if (showEvent.isDefaultPrevented()) {
        // only register focus restorer if modal will actually get shown
        return
      }

      $target.one(Event.HIDDEN, () => {
        if ($(this).is(':visible')) {
          this.focus()
        }
      })
    })

    Modal._jQueryInterface.call($(target), config, this)
  })


  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME]             = Modal._jQueryInterface
  $.fn[NAME].Constructor = Modal
  $.fn[NAME].noConflict  = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT
    return Modal._jQueryInterface
  }

  return Modal

})(jQuery)

export default Modal

import Tooltip from './tooltip'


/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.2): popover.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

const Popover = (($) => {


  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME                = 'popover'
  const VERSION             = '4.0.0-alpha'
  const DATA_KEY            = 'bs.popover'
  const EVENT_KEY           = `.${DATA_KEY}`
  const JQUERY_NO_CONFLICT  = $.fn[NAME]

  const Default = $.extend({}, Tooltip.Default, {
    placement : 'right',
    trigger   : 'click',
    content   : '',
    template  : '<div class="popover" role="tooltip">'
              + '<div class="popover-arrow"></div>'
              + '<h3 class="popover-title"></h3>'
              + '<div class="popover-content"></div></div>'
  })

  const DefaultType = $.extend({}, Tooltip.DefaultType, {
    content : '(string|element|function)'
  })

  const ClassName = {
    FADE : 'fade',
    IN  : 'in'
  }

  const Selector = {
    TITLE   : '.popover-title',
    CONTENT : '.popover-content',
    ARROW   : '.popover-arrow'
  }

  const Event = {
    HIDE       : `hide${EVENT_KEY}`,
    HIDDEN     : `hidden${EVENT_KEY}`,
    SHOW       : `show${EVENT_KEY}`,
    SHOWN      : `shown${EVENT_KEY}`,
    INSERTED   : `inserted${EVENT_KEY}`,
    CLICK      : `click${EVENT_KEY}`,
    FOCUSIN    : `focusin${EVENT_KEY}`,
    FOCUSOUT   : `focusout${EVENT_KEY}`,
    MOUSEENTER : `mouseenter${EVENT_KEY}`,
    MOUSELEAVE : `mouseleave${EVENT_KEY}`
  }


  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class Popover extends Tooltip {


    // getters

    static get VERSION() {
      return VERSION
    }

    static get Default() {
      return Default
    }

    static get NAME() {
      return NAME
    }

    static get DATA_KEY() {
      return DATA_KEY
    }

    static get Event() {
      return Event
    }

    static get EVENT_KEY() {
      return EVENT_KEY
    }

    static get DefaultType() {
      return DefaultType
    }


    // overrides

    isWithContent() {
      return this.getTitle() || this._getContent()
    }

    getTipElement() {
      return (this.tip = this.tip || $(this.config.template)[0])
    }

    setContent() {
      let $tip = $(this.getTipElement())

      // we use append for html objects to maintain js events
      this.setElementContent($tip.find(Selector.TITLE), this.getTitle())
      this.setElementContent($tip.find(Selector.CONTENT), this._getContent())

      $tip
        .removeClass(ClassName.FADE)
        .removeClass(ClassName.IN)

      this.cleanupTether()
    }

    // private

    _getContent() {
      return this.element.getAttribute('data-content')
        || (typeof this.config.content === 'function' ?
              this.config.content.call(this.element) :
              this.config.content)
    }


    // static

    static _jQueryInterface(config) {
      return this.each(function () {
        let data   = $(this).data(DATA_KEY)
        let _config = typeof config === 'object' ? config : null

        if (!data && /destroy|hide/.test(config)) {
          return
        }

        if (!data) {
          data = new Popover(this, _config)
          $(this).data(DATA_KEY, data)
        }

        if (typeof config === 'string') {
          if (data[config] === undefined) {
            throw new Error(`No method named "${config}"`)
          }
          data[config]()
        }
      })
    }
  }


  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME]             = Popover._jQueryInterface
  $.fn[NAME].Constructor = Popover
  $.fn[NAME].noConflict  = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT
    return Popover._jQueryInterface
  }

  return Popover

})(jQuery)

export default Popover

import Util from './util'


/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.2): scrollspy.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

const ScrollSpy = (($) => {


  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME               = 'scrollspy'
  const VERSION            = '4.0.0-alpha'
  const DATA_KEY           = 'bs.scrollspy'
  const EVENT_KEY          = `.${DATA_KEY}`
  const DATA_API_KEY       = '.data-api'
  const JQUERY_NO_CONFLICT = $.fn[NAME]

  const Default = {
    offset : 10,
    method : 'auto',
    target : ''
  }

  const DefaultType = {
    offset : 'number',
    method : 'string',
    target : '(string|element)'
  }

  const Event = {
    ACTIVATE      : `activate${EVENT_KEY}`,
    SCROLL        : `scroll${EVENT_KEY}`,
    LOAD_DATA_API : `load${EVENT_KEY}${DATA_API_KEY}`
  }

  const ClassName = {
    DROPDOWN_ITEM : 'dropdown-item',
    DROPDOWN_MENU : 'dropdown-menu',
    NAV_LINK      : 'nav-link',
    NAV           : 'nav',
    ACTIVE        : 'active'
  }

  const Selector = {
    DATA_SPY        : '[data-spy="scroll"]',
    ACTIVE          : '.active',
    LIST_ITEM       : '.list-item',
    LI              : 'li',
    LI_DROPDOWN     : 'li.dropdown',
    NAV_LINKS       : '.nav-link',
    DROPDOWN        : '.dropdown',
    DROPDOWN_ITEMS  : '.dropdown-item',
    DROPDOWN_TOGGLE : '.dropdown-toggle'
  }

  const OffsetMethod = {
    OFFSET   : 'offset',
    POSITION : 'position'
  }


  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class ScrollSpy {

    constructor(element, config) {
      this._element       = element
      this._scrollElement = element.tagName === 'BODY' ? window : element
      this._config        = this._getConfig(config)
      this._selector      = `${this._config.target} ${Selector.NAV_LINKS},`
                          + `${this._config.target} ${Selector.DROPDOWN_ITEMS}`
      this._offsets       = []
      this._targets       = []
      this._activeTarget  = null
      this._scrollHeight  = 0

      $(this._scrollElement).on(Event.SCROLL, $.proxy(this._process, this))

      this.refresh()
      this._process()
    }


    // getters

    static get VERSION() {
      return VERSION
    }

    static get Default() {
      return Default
    }


    // public

    refresh() {
      let autoMethod = this._scrollElement !== this._scrollElement.window ?
        OffsetMethod.POSITION : OffsetMethod.OFFSET

      let offsetMethod = this._config.method === 'auto' ?
        autoMethod : this._config.method

      let offsetBase = offsetMethod === OffsetMethod.POSITION ?
        this._getScrollTop() : 0

      this._offsets = []
      this._targets = []

      this._scrollHeight = this._getScrollHeight()

      let targets = $.makeArray($(this._selector))

      targets
        .map((element) => {
          let target
          let targetSelector = Util.getSelectorFromElement(element)

          if (targetSelector) {
            target = $(targetSelector)[0]
          }

          if (target && (target.offsetWidth || target.offsetHeight)) {
            // todo (fat): remove sketch reliance on jQuery position/offset
            return [
              $(target)[offsetMethod]().top + offsetBase,
              targetSelector
            ]
          }
        })
        .filter((item)  => item)
        .sort((a, b)    => a[0] - b[0])
        .forEach((item) => {
          this._offsets.push(item[0])
          this._targets.push(item[1])
        })
    }

    dispose() {
      $.removeData(this._element, DATA_KEY)
      $(this._scrollElement).off(EVENT_KEY)

      this._element       = null
      this._scrollElement = null
      this._config        = null
      this._selector      = null
      this._offsets       = null
      this._targets       = null
      this._activeTarget  = null
      this._scrollHeight  = null
    }


    // private

    _getConfig(config) {
      config = $.extend({}, Default, config)

      if (typeof config.target !== 'string') {
        let id = $(config.target).attr('id')
        if (!id) {
          id = Util.getUID(NAME)
          $(config.target).attr('id', id)
        }
        config.target = `#${id}`
      }

      Util.typeCheckConfig(NAME, config, DefaultType)

      return config
    }

    _getScrollTop() {
      return this._scrollElement === window ?
          this._scrollElement.scrollY : this._scrollElement.scrollTop
    }

    _getScrollHeight() {
      return this._scrollElement.scrollHeight || Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight
      )
    }

    _process() {
      let scrollTop    = this._getScrollTop() + this._config.offset
      let scrollHeight = this._getScrollHeight()
      let maxScroll    = this._config.offset
        + scrollHeight
        - this._scrollElement.offsetHeight

      if (this._scrollHeight !== scrollHeight) {
        this.refresh()
      }

      if (scrollTop >= maxScroll) {
        let target = this._targets[this._targets.length - 1]

        if (this._activeTarget !== target) {
          this._activate(target)
        }
      }

      if (this._activeTarget && scrollTop < this._offsets[0]) {
        this._activeTarget = null
        this._clear()
        return
      }

      for (let i = this._offsets.length; i--;) {
        let isActiveTarget = this._activeTarget !== this._targets[i]
            && scrollTop >= this._offsets[i]
            && (this._offsets[i + 1] === undefined ||
                scrollTop < this._offsets[i + 1])

        if (isActiveTarget) {
          this._activate(this._targets[i])
        }
      }
    }

    _activate(target) {
      this._activeTarget = target

      this._clear()

      let queries = this._selector.split(',')
      queries     = queries.map((selector) => {
        return `${selector}[data-target="${target}"],` +
               `${selector}[href="${target}"]`
      })

      let $link = $(queries.join(','))

      if ($link.hasClass(ClassName.DROPDOWN_ITEM)) {
        $link.closest(Selector.DROPDOWN).find(Selector.DROPDOWN_TOGGLE).addClass(ClassName.ACTIVE)
        $link.addClass(ClassName.ACTIVE)
      } else {
        // todo (fat) this is kinda sus…
        // recursively add actives to tested nav-links
        $link.parents(Selector.LI).find(Selector.NAV_LINKS).addClass(ClassName.ACTIVE)
      }

      $(this._scrollElement).trigger(Event.ACTIVATE, {
        relatedTarget: target
      })
    }

    _clear() {
      $(this._selector).filter(Selector.ACTIVE).removeClass(ClassName.ACTIVE)
    }


    // static

    static _jQueryInterface(config) {
      return this.each(function () {
        let data    = $(this).data(DATA_KEY)
        let _config = typeof config === 'object' && config || null

        if (!data) {
          data = new ScrollSpy(this, _config)
          $(this).data(DATA_KEY, data)
        }

        if (typeof config === 'string') {
          if (data[config] === undefined) {
            throw new Error(`No method named "${config}"`)
          }
          data[config]()
        }
      })
    }


  }


  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(window).on(Event.LOAD_DATA_API, () => {
    let scrollSpys = $.makeArray($(Selector.DATA_SPY))

    for (let i = scrollSpys.length; i--;) {
      let $spy = $(scrollSpys[i])
      ScrollSpy._jQueryInterface.call($spy, $spy.data())
    }
  })


  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME]             = ScrollSpy._jQueryInterface
  $.fn[NAME].Constructor = ScrollSpy
  $.fn[NAME].noConflict  = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT
    return ScrollSpy._jQueryInterface
  }

  return ScrollSpy

})(jQuery)

export default ScrollSpy

import Util from './util'


/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.2): tab.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

const Tab = (($) => {


  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME                = 'tab'
  const VERSION             = '4.0.0-alpha'
  const DATA_KEY            = 'bs.tab'
  const EVENT_KEY           = `.${DATA_KEY}`
  const DATA_API_KEY        = '.data-api'
  const JQUERY_NO_CONFLICT  = $.fn[NAME]
  const TRANSITION_DURATION = 150

  const Event = {
    HIDE           : `hide${EVENT_KEY}`,
    HIDDEN         : `hidden${EVENT_KEY}`,
    SHOW           : `show${EVENT_KEY}`,
    SHOWN          : `shown${EVENT_KEY}`,
    CLICK_DATA_API : `click${EVENT_KEY}${DATA_API_KEY}`
  }

  const ClassName = {
    DROPDOWN_MENU : 'dropdown-menu',
    ACTIVE        : 'active',
    FADE          : 'fade',
    IN            : 'in'
  }

  const Selector = {
    A                     : 'a',
    LI                    : 'li',
    DROPDOWN              : '.dropdown',
    UL                    : 'ul:not(.dropdown-menu)',
    FADE_CHILD            : '> .nav-item .fade, > .fade',
    ACTIVE                : '.active',
    ACTIVE_CHILD          : '> .nav-item > .active, > .active',
    DATA_TOGGLE           : '[data-toggle="tab"], [data-toggle="pill"]',
    DROPDOWN_TOGGLE       : '.dropdown-toggle',
    DROPDOWN_ACTIVE_CHILD : '> .dropdown-menu .active'
  }


  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class Tab {

    constructor(element) {
      this._element = element
    }


    // getters

    static get VERSION() {
      return VERSION
    }


    // public

    show() {
      if (this._element.parentNode &&
         (this._element.parentNode.nodeType === Node.ELEMENT_NODE) &&
         ($(this._element).hasClass(ClassName.ACTIVE))) {
        return
      }

      let target
      let previous
      let ulElement = $(this._element).closest(Selector.UL)[0]
      let selector  = Util.getSelectorFromElement(this._element)

      if (ulElement) {
        previous = $.makeArray($(ulElement).find(Selector.ACTIVE))
        previous = previous[previous.length - 1]
      }

      let hideEvent = $.Event(Event.HIDE, {
        relatedTarget: this._element
      })

      let showEvent = $.Event(Event.SHOW, {
        relatedTarget: previous
      })

      if (previous) {
        $(previous).trigger(hideEvent)
      }

      $(this._element).trigger(showEvent)

      if (showEvent.isDefaultPrevented() ||
         (hideEvent.isDefaultPrevented())) {
        return
      }

      if (selector) {
        target = $(selector)[0]
      }

      this._activate(
        this._element,
        ulElement
      )

      let complete = () => {
        let hiddenEvent = $.Event(Event.HIDDEN, {
          relatedTarget: this._element
        })

        let shownEvent  = $.Event(Event.SHOWN, {
          relatedTarget: previous
        })

        $(previous).trigger(hiddenEvent)
        $(this._element).trigger(shownEvent)
      }

      if (target) {
        this._activate(target, target.parentNode, complete)
      } else {
        complete()
      }
    }

    dispose() {
      $.removeClass(this._element, DATA_KEY)
      this._element = null
    }


    // private

    _activate(element, container, callback) {
      let active          = $(container).find(Selector.ACTIVE_CHILD)[0]
      let isTransitioning = callback
        && Util.supportsTransitionEnd()
        && ((active && $(active).hasClass(ClassName.FADE))
           || Boolean($(container).find(Selector.FADE_CHILD)[0]))

      let complete = $.proxy(
        this._transitionComplete,
        this,
        element,
        active,
        isTransitioning,
        callback
      )

      if (active && isTransitioning) {
        $(active)
          .one(Util.TRANSITION_END, complete)
          .emulateTransitionEnd(TRANSITION_DURATION)

      } else {
        complete()
      }

      if (active) {
        $(active).removeClass(ClassName.IN)
      }
    }

    _transitionComplete(element, active, isTransitioning, callback) {
      if (active) {
        $(active).removeClass(ClassName.ACTIVE)

        let dropdownChild = $(active).find(
          Selector.DROPDOWN_ACTIVE_CHILD
        )[0]

        if (dropdownChild) {
          $(dropdownChild).removeClass(ClassName.ACTIVE)
        }

        active.setAttribute('aria-expanded', false)
      }

      $(element).addClass(ClassName.ACTIVE)
      element.setAttribute('aria-expanded', true)

      if (isTransitioning) {
        Util.reflow(element)
        $(element).addClass(ClassName.IN)
      } else {
        $(element).removeClass(ClassName.FADE)
      }

      if (element.parentNode &&
         ($(element.parentNode).hasClass(ClassName.DROPDOWN_MENU))) {

        let dropdownElement = $(element).closest(Selector.DROPDOWN)[0]
        if (dropdownElement) {
          $(dropdownElement).find(Selector.DROPDOWN_TOGGLE).addClass(ClassName.ACTIVE)
        }

        element.setAttribute('aria-expanded', true)
      }

      if (callback) {
        callback()
      }
    }


    // static

    static _jQueryInterface(config) {
      return this.each(function () {
        let $this = $(this)
        let data  = $this.data(DATA_KEY)

        if (!data) {
          data = data = new Tab(this)
          $this.data(DATA_KEY, data)
        }

        if (typeof config === 'string') {
          if (data[config] === undefined) {
            throw new Error(`No method named "${config}"`)
          }
          data[config]()
        }
      })
    }

  }


  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(document)
    .on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
      event.preventDefault()
      Tab._jQueryInterface.call($(this), 'show')
    })


  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME]             = Tab._jQueryInterface
  $.fn[NAME].Constructor = Tab
  $.fn[NAME].noConflict  = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT
    return Tab._jQueryInterface
  }

  return Tab

})(jQuery)

export default Tab

/* global Tether */

import Util from './util'


/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.2): tooltip.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

const Tooltip = (($) => {

  /**
   * Check for Tether dependency
   * Tether - http://github.hubspot.com/tether/
   */
  if (window.Tether === undefined) {
    throw new Error('Bootstrap tooltips require Tether (http://github.hubspot.com/tether/)')
  }


  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME                = 'tooltip'
  const VERSION             = '4.0.0-alpha'
  const DATA_KEY            = 'bs.tooltip'
  const EVENT_KEY           = `.${DATA_KEY}`
  const JQUERY_NO_CONFLICT  = $.fn[NAME]
  const TRANSITION_DURATION = 150
  const CLASS_PREFIX        = 'bs-tether'

  const Default = {
    animation   : true,
    template    : '<div class="tooltip" role="tooltip">'
                + '<div class="tooltip-arrow"></div>'
                + '<div class="tooltip-inner"></div></div>',
    trigger     : 'hover focus',
    title       : '',
    delay       : 0,
    html        : false,
    selector    : false,
    placement   : 'top',
    offset      : '0 0',
    constraints : []
  }

  const DefaultType = {
    animation   : 'boolean',
    template    : 'string',
    title       : '(string|element|function)',
    trigger     : 'string',
    delay       : '(number|object)',
    html        : 'boolean',
    selector    : '(string|boolean)',
    placement   : '(string|function)',
    offset      : 'string',
    constraints : 'array'
  }

  const AttachmentMap = {
    TOP    : 'bottom center',
    RIGHT  : 'middle left',
    BOTTOM : 'top center',
    LEFT   : 'middle right'
  }

  const HoverState = {
    IN  : 'in',
    OUT : 'out'
  }

  const Event = {
    HIDE       : `hide${EVENT_KEY}`,
    HIDDEN     : `hidden${EVENT_KEY}`,
    SHOW       : `show${EVENT_KEY}`,
    SHOWN      : `shown${EVENT_KEY}`,
    INSERTED   : `inserted${EVENT_KEY}`,
    CLICK      : `click${EVENT_KEY}`,
    FOCUSIN    : `focusin${EVENT_KEY}`,
    FOCUSOUT   : `focusout${EVENT_KEY}`,
    MOUSEENTER : `mouseenter${EVENT_KEY}`,
    MOUSELEAVE : `mouseleave${EVENT_KEY}`
  }

  const ClassName = {
    FADE : 'fade',
    IN   : 'in'
  }

  const Selector = {
    TOOLTIP       : '.tooltip',
    TOOLTIP_INNER : '.tooltip-inner'
  }

  const TetherClass = {
    element : false,
    enabled : false
  }

  const Trigger = {
    HOVER  : 'hover',
    FOCUS  : 'focus',
    CLICK  : 'click',
    MANUAL : 'manual'
  }


  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class Tooltip {

    constructor(element, config) {

      // private
      this._isEnabled      = true
      this._timeout        = 0
      this._hoverState     = ''
      this._activeTrigger  = {}
      this._tether         = null

      // protected
      this.element = element
      this.config  = this._getConfig(config)
      this.tip     = null

      this._setListeners()

    }


    // getters

    static get VERSION() {
      return VERSION
    }

    static get Default() {
      return Default
    }

    static get NAME() {
      return NAME
    }

    static get DATA_KEY() {
      return DATA_KEY
    }

    static get Event() {
      return Event
    }

    static get EVENT_KEY() {
      return EVENT_KEY
    }

    static get DefaultType() {
      return DefaultType
    }


    // public

    enable() {
      this._isEnabled = true
    }

    disable() {
      this._isEnabled = false
    }

    toggleEnabled() {
      this._isEnabled = !this._isEnabled
    }

    toggle(event) {
      if (event) {
        let dataKey = this.constructor.DATA_KEY
        let context = $(event.currentTarget).data(dataKey)

        if (!context) {
          context = new this.constructor(
            event.currentTarget,
            this._getDelegateConfig()
          )
          $(event.currentTarget).data(dataKey, context)
        }

        context._activeTrigger.click = !context._activeTrigger.click

        if (context._isWithActiveTrigger()) {
          context._enter(null, context)
        } else {
          context._leave(null, context)
        }

      } else {

        if ($(this.getTipElement()).hasClass(ClassName.IN)) {
          this._leave(null, this)
          return
        }

        this._enter(null, this)
      }
    }

    dispose() {
      clearTimeout(this._timeout)

      this.cleanupTether()

      $.removeData(this.element, this.constructor.DATA_KEY)

      $(this.element).off(this.constructor.EVENT_KEY)

      if (this.tip) {
        $(this.tip).remove()
      }

      this._isEnabled      = null
      this._timeout        = null
      this._hoverState     = null
      this._activeTrigger  = null
      this._tether         = null

      this.element = null
      this.config  = null
      this.tip     = null
    }

    show() {
      let showEvent = $.Event(this.constructor.Event.SHOW)

      if (this.isWithContent() && this._isEnabled) {
        $(this.element).trigger(showEvent)

        let isInTheDom = $.contains(
          this.element.ownerDocument.documentElement,
          this.element
        )

        if (showEvent.isDefaultPrevented() || !isInTheDom) {
          return
        }

        let tip   = this.getTipElement()
        let tipId = Util.getUID(this.constructor.NAME)

        tip.setAttribute('id', tipId)
        this.element.setAttribute('aria-describedby', tipId)

        this.setContent()

        if (this.config.animation) {
          $(tip).addClass(ClassName.FADE)
        }

        let placement  = typeof this.config.placement === 'function' ?
          this.config.placement.call(this, tip, this.element) :
          this.config.placement

        let attachment = this._getAttachment(placement)

        $(tip)
          .data(this.constructor.DATA_KEY, this)
          .appendTo(document.body)

        $(this.element).trigger(this.constructor.Event.INSERTED)

        this._tether = new Tether({
          attachment,
          element         : tip,
          target          : this.element,
          classes         : TetherClass,
          classPrefix     : CLASS_PREFIX,
          offset          : this.config.offset,
          constraints     : this.config.constraints,
          addTargetClasses: false
        })

        Util.reflow(tip)
        this._tether.position()

        $(tip).addClass(ClassName.IN)

        let complete = () => {
          let prevHoverState = this._hoverState
          this._hoverState   = null

          $(this.element).trigger(this.constructor.Event.SHOWN)

          if (prevHoverState === HoverState.OUT) {
            this._leave(null, this)
          }
        }

        if (Util.supportsTransitionEnd() && $(this.tip).hasClass(ClassName.FADE)) {
          $(this.tip)
            .one(Util.TRANSITION_END, complete)
            .emulateTransitionEnd(Tooltip._TRANSITION_DURATION)
          return
        }

        complete()
      }
    }

    hide(callback) {
      let tip       = this.getTipElement()
      let hideEvent = $.Event(this.constructor.Event.HIDE)
      let complete  = () => {
        if (this._hoverState !== HoverState.IN && tip.parentNode) {
          tip.parentNode.removeChild(tip)
        }

        this.element.removeAttribute('aria-describedby')
        $(this.element).trigger(this.constructor.Event.HIDDEN)
        this.cleanupTether()

        if (callback) {
          callback()
        }
      }

      $(this.element).trigger(hideEvent)

      if (hideEvent.isDefaultPrevented()) {
        return
      }

      $(tip).removeClass(ClassName.IN)

      if (Util.supportsTransitionEnd() &&
         ($(this.tip).hasClass(ClassName.FADE))) {

        $(tip)
          .one(Util.TRANSITION_END, complete)
          .emulateTransitionEnd(TRANSITION_DURATION)

      } else {
        complete()
      }

      this._hoverState = ''
    }


    // protected

    isWithContent() {
      return Boolean(this.getTitle())
    }

    getTipElement() {
      return (this.tip = this.tip || $(this.config.template)[0])
    }

    setContent() {
      let $tip = $(this.getTipElement())

      this.setElementContent($tip.find(Selector.TOOLTIP_INNER), this.getTitle())

      $tip
        .removeClass(ClassName.FADE)
        .removeClass(ClassName.IN)

      this.cleanupTether()
    }

    setElementContent($element, content) {
      let html = this.config.html
      if (typeof content === 'object' && (content.nodeType || content.jquery)) {
        // content is a DOM node or a jQuery
        if (html) {
          if (!$(content).parent().is($element)) {
            $element.empty().append(content)
          }
        } else {
          $element.text($(content).text())
        }
      } else {
        $element[html ? 'html' : 'text'](content)
      }
    }

    getTitle() {
      let title = this.element.getAttribute('data-original-title')

      if (!title) {
        title = typeof this.config.title === 'function' ?
          this.config.title.call(this.element) :
          this.config.title
      }

      return title
    }

    cleanupTether() {
      if (this._tether) {
        this._tether.destroy()
      }
    }


    // private

    _getAttachment(placement) {
      return AttachmentMap[placement.toUpperCase()]
    }

    _setListeners() {
      let triggers = this.config.trigger.split(' ')

      triggers.forEach((trigger) => {
        if (trigger === 'click') {
          $(this.element).on(
            this.constructor.Event.CLICK,
            this.config.selector,
            $.proxy(this.toggle, this)
          )

        } else if (trigger !== Trigger.MANUAL) {
          let eventIn  = trigger === Trigger.HOVER ?
            this.constructor.Event.MOUSEENTER :
            this.constructor.Event.FOCUSIN
          let eventOut = trigger === Trigger.HOVER ?
            this.constructor.Event.MOUSELEAVE :
            this.constructor.Event.FOCUSOUT

          $(this.element)
            .on(
              eventIn,
              this.config.selector,
              $.proxy(this._enter, this)
            )
            .on(
              eventOut,
              this.config.selector,
              $.proxy(this._leave, this)
            )
        }
      })

      if (this.config.selector) {
        this.config = $.extend({}, this.config, {
          trigger  : 'manual',
          selector : ''
        })
      } else {
        this._fixTitle()
      }
    }

    _fixTitle() {
      let titleType = typeof this.element.getAttribute('data-original-title')
      if (this.element.getAttribute('title') ||
         (titleType !== 'string')) {
        this.element.setAttribute(
          'data-original-title',
          this.element.getAttribute('title') || ''
        )
        this.element.setAttribute('title', '')
      }
    }

    _enter(event, context) {
      let dataKey = this.constructor.DATA_KEY

      context = context || $(event.currentTarget).data(dataKey)

      if (!context) {
        context = new this.constructor(
          event.currentTarget,
          this._getDelegateConfig()
        )
        $(event.currentTarget).data(dataKey, context)
      }

      if (event) {
        context._activeTrigger[
          event.type === 'focusin' ? Trigger.FOCUS : Trigger.HOVER
        ] = true
      }

      if ($(context.getTipElement()).hasClass(ClassName.IN) ||
         (context._hoverState === HoverState.IN)) {
        context._hoverState = HoverState.IN
        return
      }

      clearTimeout(context._timeout)

      context._hoverState = HoverState.IN

      if (!context.config.delay || !context.config.delay.show) {
        context.show()
        return
      }

      context._timeout = setTimeout(() => {
        if (context._hoverState === HoverState.IN) {
          context.show()
        }
      }, context.config.delay.show)
    }

    _leave(event, context) {
      let dataKey = this.constructor.DATA_KEY

      context = context || $(event.currentTarget).data(dataKey)

      if (!context) {
        context = new this.constructor(
          event.currentTarget,
          this._getDelegateConfig()
        )
        $(event.currentTarget).data(dataKey, context)
      }

      if (event) {
        context._activeTrigger[
          event.type === 'focusout' ? Trigger.FOCUS : Trigger.HOVER
        ] = false
      }

      if (context._isWithActiveTrigger()) {
        return
      }

      clearTimeout(context._timeout)

      context._hoverState = HoverState.OUT

      if (!context.config.delay || !context.config.delay.hide) {
        context.hide()
        return
      }

      context._timeout = setTimeout(() => {
        if (context._hoverState === HoverState.OUT) {
          context.hide()
        }
      }, context.config.delay.hide)
    }

    _isWithActiveTrigger() {
      for (let trigger in this._activeTrigger) {
        if (this._activeTrigger[trigger]) {
          return true
        }
      }

      return false
    }

    _getConfig(config) {
      config = $.extend(
        {},
        this.constructor.Default,
        $(this.element).data(),
        config
      )

      if (config.delay && typeof config.delay === 'number') {
        config.delay = {
          show : config.delay,
          hide : config.delay
        }
      }

      Util.typeCheckConfig(
        NAME,
        config,
        this.constructor.DefaultType
      )

      return config
    }

    _getDelegateConfig() {
      let config = {}

      if (this.config) {
        for (let key in this.config) {
          if (this.constructor.Default[key] !== this.config[key]) {
            config[key] = this.config[key]
          }
        }
      }

      return config
    }


    // static

    static _jQueryInterface(config) {
      return this.each(function () {
        let data   = $(this).data(DATA_KEY)
        let _config = typeof config === 'object' ?
          config : null

        if (!data && /destroy|hide/.test(config)) {
          return
        }

        if (!data) {
          data = new Tooltip(this, _config)
          $(this).data(DATA_KEY, data)
        }

        if (typeof config === 'string') {
          if (data[config] === undefined) {
            throw new Error(`No method named "${config}"`)
          }
          data[config]()
        }
      })
    }

  }


  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME]             = Tooltip._jQueryInterface
  $.fn[NAME].Constructor = Tooltip
  $.fn[NAME].noConflict  = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT
    return Tooltip._jQueryInterface
  }

  return Tooltip

})(jQuery)

export default Tooltip

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.2): util.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

const Util = (($) => {


  /**
   * ------------------------------------------------------------------------
   * Private TransitionEnd Helpers
   * ------------------------------------------------------------------------
   */

  let transition = false

  const TransitionEndEvent = {
    WebkitTransition : 'webkitTransitionEnd',
    MozTransition    : 'transitionend',
    OTransition      : 'oTransitionEnd otransitionend',
    transition       : 'transitionend'
  }

  // shoutout AngusCroll (https://goo.gl/pxwQGp)
  function toType(obj) {
    return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
  }

  function isElement(obj) {
    return (obj[0] || obj).nodeType
  }

  function getSpecialTransitionEndEvent() {
    return {
      bindType: transition.end,
      delegateType: transition.end,
      handle(event) {
        if ($(event.target).is(this)) {
          return event.handleObj.handler.apply(this, arguments)
        }
      }
    }
  }

  function transitionEndTest() {
    if (window.QUnit) {
      return false
    }

    let el = document.createElement('bootstrap')

    for (let name in TransitionEndEvent) {
      if (el.style[name] !== undefined) {
        return { end: TransitionEndEvent[name] }
      }
    }

    return false
  }

  function transitionEndEmulator(duration) {
    let called = false

    $(this).one(Util.TRANSITION_END, () => {
      called = true
    })

    setTimeout(() => {
      if (!called) {
        Util.triggerTransitionEnd(this)
      }
    }, duration)

    return this
  }

  function setTransitionEndSupport() {
    transition = transitionEndTest()

    $.fn.emulateTransitionEnd = transitionEndEmulator

    if (Util.supportsTransitionEnd()) {
      $.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent()
    }
  }


  /**
   * --------------------------------------------------------------------------
   * Public Util Api
   * --------------------------------------------------------------------------
   */

  let Util = {

    TRANSITION_END: 'bsTransitionEnd',

    getUID(prefix) {
      do {
        prefix += ~~(Math.random() * 1000000) // "~~" acts like a faster Math.floor() here
      } while (document.getElementById(prefix))
      return prefix
    },

    getSelectorFromElement(element) {
      let selector = element.getAttribute('data-target')

      if (!selector) {
        selector = element.getAttribute('href') || ''
        selector = /^#[a-z]/i.test(selector) ? selector : null
      }

      return selector
    },

    reflow(element) {
      new Function('bs', 'return bs')(element.offsetHeight)
    },

    triggerTransitionEnd(element) {
      $(element).trigger(transition.end)
    },

    supportsTransitionEnd() {
      return Boolean(transition)
    },

    typeCheckConfig(componentName, config, configTypes) {
      for (let property in configTypes) {
        if (configTypes.hasOwnProperty(property)) {
          let expectedTypes = configTypes[property]
          let value         = config[property]
          let valueType

          if (value && isElement(value)) {
            valueType = 'element'
          } else {
            valueType = toType(value)
          }

          if (!new RegExp(expectedTypes).test(valueType)) {
            throw new Error(
              `${componentName.toUpperCase()}: ` +
              `Option "${property}" provided type "${valueType}" ` +
              `but expected type "${expectedTypes}".`)
          }
        }
      }
    }
  }

  setTransitionEndSupport()

  return Util

})(jQuery)

export default Util
