import { JsxChild } from "typescript"

export const Provider = (props: {children: JsxChild | HTMLElement}) => {
  const notifications = [
    {

    }

  ]
  return (
    <div>
      {props.children}
    </div>
  )
}