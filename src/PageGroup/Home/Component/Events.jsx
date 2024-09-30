// eslint-disable-next-line no-unused-vars
import React from "react";
import { events } from "../../../../data/home.js";
import clock from "../../../assets/icons8-clock.png";
import location from "../../../assets/icons8-location.png";
import { Link } from "react-router-dom";

const Events = () => {
  const new_events = events.slice(0, 3);

  return (
    <div className="flex w-full flex-col gap-0 md:w-1/2">
      <div className="relative m-3 flex flex-col flex-wrap">
        <div className="group relative col-span-1 mx-auto mb-5 mt-3 flex h-12 w-fit overflow-hidden rounded-md text-black ">
          <h3 className="text-xl font-semibold">
            Events
            <div className="bottom-2 right-20 h-[5px] w-full rounded bg-green-700 transition-all duration-300 group-hover:w-[80%] sm:left-4" />
          </h3>
        </div>
        {new_events.map((event, eventId) => (
          <div
            className="group relative col-span-1 my-1 flex items-center justify-center overflow-hidden rounded-md text-green-800 shadow"
            key={eventId}
          >
            <div className="flex w-full flex-col gap-y-3 bg-green-light px-4 py-4 pl-6 text-base sm:px-8 sm:pl-8 md:px-12">
              <h3 className="font-semibold">{event.tagline}</h3>
              <a href="/event" className="">
                <p className="text-black">
                  {event.desc.substring(0, 55)}...{" "}
                  <span className=" font-semibold text-green-950 underline underline-offset-4">
                    Read more
                  </span>
                </p>
              </a>
              <div className="m-1 mt-3 flex flex-row flex-wrap gap-3">
                <p className="flex flex-nowrap">
                  <img className="event-icon" src={clock} alt="clock8" />
                  <span className="-ml-2">{event.date}</span>
                </p>
                <p className="flex flex-nowrap">
                  <img className="event-icon" src={location} alt="location8" />
                  <span className="-ml-2">{event.venue}</span>
                </p>
              </div>
            </div>
            <div className="absolute left-2 h-[80%] w-[6px] rounded bg-green-700 transition-all duration-300 group-hover:h-[60%] sm:left-4" />
          </div>
        ))}
        <div className="group mb-5 ml-auto mt-3 flex h-12 w-fit justify-end rounded-md text-black ">
          <Link to="/event">
            <h3 className="text-xl font-semibold">
              View More
              <div className="bottom-2 right-20 h-[5px] w-full rounded bg-green-700 transition-all duration-300 group-hover:w-[80%] sm:left-4" />
            </h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Events;

// <div key={eventId} className="event-box relative m-3 p-8 flex gap-4">
// <div className='vertical-event-line'></div>
// <div>
//     <h3 className='mb-2 event-heading font-bold'>{event.tagline}</h3>
//     <p>{event.desc.substring(0,50)}...<a className='text-green-yellow underline' href='/event'>Read More</a></p>
//     <div className='m-1 mt-3 flex flex-row flex-wrap gap-8'>
//         <p className='flex flex-nowrap'><img className='event-icon' src={clock} alt='clock8' />{event.date}</p>
//         <p className='flex flex-nowrap'><img className='event-icon' src={location} alt='location8' />{event.venue}</p>
//     </div>
// </div>
// </div>
