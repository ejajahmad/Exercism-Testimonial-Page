import TrackSelector from "./TrackSelector Components/TrackSelector";
import Searchbar from "./Searchbar";
import Filters from "./Filter Components/Filters";

export default function Header(props) {
  return (
    <div className="header w-full h-20 px-8 grid items-center">
      {/* Track Button */}
      <TrackSelector
        setIsDataLoaded={props.setIsDataLoaded}
        setTrack={props.setTrack}
        testimonialTrack={props.testimonialTrack}
        setTrackSlugs={props.setTrackSlugs}
        trackSlugs={props.trackSlugs}
        setTrackCount={props.setTrackCount}
        trackCount={props.trackCount}
      />
      {/* Searchbar */}
      <Searchbar setSearchKey={props.setSearchKey} />
      {/* Filter Dropdown */}
      <Filters setOrder={props.setOrder} />
    </div>
  );
}
