import React from "react"
import { withPadding } from "../custom-decorators"

export default {
  title: "Elements/Button",
  decorators: [withPadding],
}

export const AsButton = () => <button className="btn">Mehr erfahren</button>
export const AsLink = () => <a className="btn">Can u read me</a>
