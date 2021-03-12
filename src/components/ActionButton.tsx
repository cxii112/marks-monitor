import { IActionButton } from "../interfaces/ActionButtons";
export const ActionButton = (props: IActionButton) => {
  const CLASSES = 'button' + ' ' + props.addClasses;
  return (
    <button
      id={props.id}
      className={CLASSES}
      type='button'
      onClick={() => props.callback()}>
      {props.content}
    </button>
  )
}