import { addDecorator, addParameters } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { withA11y } from "@storybook/addon-a11y"
import { customViewports, customBackgrounds } from "./global-parameters"
import "../src/css/main.css"

// Global Paramaters
addParameters({
  backgrounds: customBackgrounds,
  viewport: {
    viewports: customViewports,
  },
})

// Global Decorators
addDecorator(withA11y)

// Gatsby's Link overrides:
// Gatsby defines a global called ___loader to prevent its method calls from creating console errors you override it here
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
}
// Gatsby internal mocking to prevent unnecessary errors in storybook testing environment
global.__PATH_PREFIX__ = ""
// This is to utilized to override the window.___navigate method Gatsby defines and uses to report what path a Link would be taking us to if it wasn't inside a storybook
window.___navigate = pathname => {
  action("NavigateTo:")(pathname)
}
