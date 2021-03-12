import { IActionButton } from "../interfaces/ActionButtons";

export const ActionButtonLink = (props: IActionButton) => {
  const CLASSES = 'button' + ' ' + props.addClasses;

  return (
    <a
      role='button'
      id={props.id}
      className={CLASSES}
      onClick={() => props.callback()}
    >{props.content}</a>
  )
}