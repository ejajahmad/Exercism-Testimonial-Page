export default function Track(props) {
  return (
    <div className="track">
      <input type="radio" name={props.slug} id="track-selector" onClick={props.onClick} />
      <img className="track-icon" src={props.icon} alt="" />
      <span className="track-name">{props.name}</span>
      <span className="track-count">{props.count}</span>
    </div>
  );
}
