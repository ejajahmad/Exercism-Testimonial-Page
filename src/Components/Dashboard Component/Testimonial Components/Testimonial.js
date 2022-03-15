export default function Testimonial(props) {
  return (
    <div className="testimonial">
      {/* Track Icon */}

      <img className="track-icon" src={props.trackIcon} alt="" />

      {/* User Profile Pic & name */}

      <img className="user-icon" src={props.profilePic} alt="" />
      <div className="user-profile">
        <p className="name">{props.name}</p>
        <p className="excersice">{`on ${props.topic} in ${props.track}`}</p>
      </div>

      {/* Testimonial */}
      <p>{props.content}</p>

      {/* Testimonial Time */}

      <p>{props.date}</p>

      {/* Testimonial Arrow */}

      <span className="open-icon">
        <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1.66669 1.5L8.81335 8.64667C8.90715 8.74033 8.95986 8.86745 8.95986 9C8.95986 9.13255 8.90715 9.25967 8.81335 9.35333L1.66669 16.5"
            stroke="#5C5589"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </div>
  );
}
