import { globalStyle, style } from "@vanilla-extract/css"

export const columnsContainer = style({
  "@media": {
    "screen and (min-width: 768px)": {
      display: "flex",
    }
  }
})

globalStyle('html, body', {
  margin: 0
})