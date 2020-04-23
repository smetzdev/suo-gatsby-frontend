import React from "react"
import { withPadding } from "../custom-decorators"

export default {
  title: "Elements/Button",
  decorators: [withPadding],
}

export const AsButton = () => <button className="btn">Iam a button</button>
export const AsLink = () => <a className="btn">Iam a link</a>
