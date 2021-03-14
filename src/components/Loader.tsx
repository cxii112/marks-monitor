import '../css/Loader.css';

export const Loader = (props: {width: string, height: string}) => {
  return (
    <div>
      <div className="preloader" style={{width: props.width, height: props.height}}>
        <div className="loader"/>
      </div>
    </div>
  )
}