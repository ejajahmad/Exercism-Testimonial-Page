export default function Track(props) {
  return (
    <div className="track text-left px-[20px] py-[8px] grid items-center justify-items-start gap-4 min-w-full h-16 bg-[#f0f3f9] text-left">
      <input
        type="radio"
        name={props.slug}
        id="track-selector"
        className="appearance-none m-0 w-6 h-6 rounded-full border-2 border-solid border-[#5c5589] grid place-content-center translate-y-[-0.075em] before:content-[''] before:w-2.5 before:rounded-full transition-transform duration-100 ease-in-out"
        onClick={props.onClick}
      />
      <img className="track-icon w-10 h-10 mr-8" src={props.icon} alt="" />
      <span className="track-name">{props.name}</span>
      <span className="track-count border-[1px] border-solid border-[#6a6781] flex flex-row items-center justify-center h-8 box-border ml-8 py-[3px] px-[20px] min-w-min rounded-[100px]">
        {props.count}
      </span>
    </div>
  );
}
