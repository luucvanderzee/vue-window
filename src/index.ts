import MyWindow from "./window/index.vue"
import { StyleBlack, StyleWhite, StyleMetal, StyleFactory } from './style'
import Vue from 'vue'

export { WindowType, WindowResizeEvent, fixPosition } from "./window/script"
export { StyleBlack, StyleWhite, StyleMetal, StyleFactory }

let BASE = 0

export function install(vue: typeof Vue, options = {
  prefix: 'hsc-window',
  zIndexBase: 0
}) {
    const prefix = options ? (options.prefix ? options.prefix : 'hsc-window') : 'hsc-window'
    BASE = options ? (options.zIndexBase ? options.zIndexBase : 0) : 0
    vue.component(`${prefix}`, MyWindow)
    vue.component(`${prefix}-style-black`, StyleBlack)
    vue.component(`${prefix}-style-white`, StyleWhite)
    vue.component(`${prefix}-style-metal`, StyleMetal)
}

export { windows } from "./windows"

export { BASE }
