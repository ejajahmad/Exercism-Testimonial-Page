export default function Testimonial(props) {
  return (
    <div className="testimonial hover:bg-[#f4f7fd]">
      {/* Track Icon */}

      <img className="track-icon w-8 justify-self-center rounded-full" src={props.trackIcon} alt="" />

      {/* User Profile Pic & name */}

      <img className="user-icon w-10 justify-self-center rounded-full" src={props.profilePic} alt="" />
      <div className="user-profile px-4 flex flex-col items-start">
        <p className="name px-4 font-medium text-base leading-6">{props.name}</p>
        <p className="excersice px-4 font-normal text-sm leading-5 text-purple-800">{`on ${props.topic} in ${props.track}`}</p>
      </div>

      {/* Testimonial */}
      <p className="px-4">{props.content}</p>

      {/* Testimonial Time */}

      <p className="px-4">{props.date}</p>

      {/* Testimonial Arrow */}

      <span className="open-icon w-10 justify-self-center rounded-full">
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
