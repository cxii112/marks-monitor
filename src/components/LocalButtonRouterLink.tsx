import { Link } from 'react-router-dom';
interface IActionLink {
  to: string,
  content: any,
  addClasses: string,
  id: string,
  callback?: Function,
}
export const LocalButtonRouterLink = (props: IActionLink) => {
  const CLASSES = 'button' + ' ' + props.addClasses;

  return (
    <Link
      role='button'
      to={props.to}
      id={props.id}
      className={CLASSES}
      onClick={() => {
        if (props.callback) {
          props.callback()
        }
      }}>
      {props.content}
    </Link>
  )
}