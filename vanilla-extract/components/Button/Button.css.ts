import { style } from "@vanilla-extract/css"
import { vars } from '../../styles/theme.css'

export const Button = style({
  border: "none",
  backgroundColor: "transparent",
  selectors: {
    '&:hover': {
      color: vars.color.secondary
    },
    '&:focus': {
      outline: `1px solid ${vars.color.focus}`
    }
  }
})