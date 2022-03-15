import Track from "./Track";
import { ReactComponent as TrackIcon } from "../../../assets/svg/TrackIcon.svg";

export default function TrackDropDown(props) {
  // Handling Track Selector Input

  const handleTrackInput = (e) => {
    if (e.target.checked) {
      props.setIsDataLoaded(false);
      props.setIsMenuOpen(false);
      props.setTrack(e.target.name);
    }
  };

  // Merging Testimonial Track Count with All Tracks

  for (let i = 0; i < props.tracks.length; i++) {
    props.tracks[i].track_count = Object.entries(props.trackCount)[i][1];
  }

  // Calculating All Tracks

  const allExerciseLength = props.tracks.map((track) => track.track_count).reduce((acc, val) => acc + val);

  return (
    <div className="track-dropdown w-[376px] h-[376px] flex flex-col items-start gap-2 p-2 absolute top-[60px] z-10 bg-white rounded-lg overflow-y-scroll overflow-x-hidden">
      {/* Default Track */}
      <div className="track text-left px-[20px] py-[8px] grid items-center justify-items-start gap-4 min-w-full h-16 bg-[#f0f3f9]">
        <input
          type="radio"
          name="all"
          className="appearance-none m-0 w-6 h-6 rounded-full border-2 border-solid border-[#5c5589] grid place-content-center translate-y-[-0.075em] before:content-[''] before:w-2.5 before:rounded-full before:scale-0 transition-transform duration-100 ease-in-out checked:before:scale-100"
          id="track-selector"
          onClick={handleTrackInput}
        />
        <span className="track-icon w-10 h-10 mr-8">
          <TrackIcon />
        </span>
        <span className="track-name">All</span>
        <span className="track-count border-[1px] border-solid border-[#6a6781] flex flex-row items-center justify-center h-8 box-border ml-8 py-[3px] px-[20px] min-w-min rounded-[100px]">
          {allExerciseLength}
        </span>
      </div>

      {/* Generated Tracks */}
      {props.tracks.map((track) => {
        return (
          <Track
            key={track.slug}
            icon={track.icon_url}
            slug={track.slug}
            name={track.title}
            count={track.track_count}
            onClick={handleTrackInput}
          />
        );
      })}
    </div>
  );
}
