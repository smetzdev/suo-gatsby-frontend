export interface withClassName {
  className?: string
}

export interface message {
  title: string
  messageType: "info" | "warning"
  html: string
}
