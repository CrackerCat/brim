/* @flow */
import * as d3 from "d3"

import type {Pen} from "../types"
import {add} from "../../lib/Time"
import {getPointAt} from "../getPointAt"

type Props = {
  onFocus: Function,
  onBlur: Function
}

export default function({onFocus, onBlur}: Props): Pen {
  let focused = false
  let svg

  function mount(el) {
    svg = el
  }

  function draw(chart) {
    d3.select(svg).on("click", () => {
      let data = getPointAt(d3.event.offsetX, chart)
      if (data && !focused) {
        focused = true
        let {number, unit} = chart.data.interval
        onFocus([data.ts, add(data.ts, number, unit)])
      } else {
        focused = false
        onBlur()
      }
    })
  }

  return {draw, mount}
}