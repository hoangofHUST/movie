// @link https://vuejs.org/v2/guide/transitions.html#Transition-Classes

export default {
  /**
   * Starting state for enter.
   */
  enterClass: 'opacity-0',

  /**
   * Ending state for enter.
   */
  enterToClass: 'opacity-100',

  /**
   * Active state for enter.
   */
  enterActiveClass: 'transition-opacity duration-300 ease-in',

  /**
   * Starting state for leave.
   */
  leaveClass: 'opacity-100',

  /**
   * Ending state for leave.
   */
  leaveToClass: 'opacity-0',

  /**
   * Active state for leave.
   */
  leaveActiveClass: 'transition-opacity duration-300 ease-out',
}
