import React from "react";
import { BsDot } from "react-icons/bs";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { formatDistanceToNow } from "date-fns";
import { videos } from "../../utils/constant";
import FilterSection from "./FilterSection";

const VideoSection = () => {
  return (
    <section className="w-full px-4 py-4">
      <FilterSection />
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {videos.map((video) => (
          <div
            key={video.id}
            className="flex flex-col gap-2 text-white group cursor-pointer"
          >
            <div className="relative w-full aspect-video rounded-lg overflow-hidden">
              <img
                src={video.thumbnail}
                alt="thumbnail"
                className="w-full h-full object-cover group-hover:brightness-90 transition"
              />
              <span className="absolute bottom-1 right-1 bg-black bg-opacity-80 text-white text-xs px-1 py-[1px] rounded">
                {video.duration}
              </span>
            </div>
            <div className="flex gap-3">
              <img
                src={video.channelLogo}
                alt="channel"
                className="w-9 h-9 rounded-full object-cover"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-sm leading-snug line-clamp-2">
                  {video.title}
                </h3>
                <div className="text-xs text-gray-400 flex flex-col leading-snug mt-1">
                  <span className="flex items-center gap-1">
                    {video.channel}
                    {video.verified && (
                      <span className="text-blue-400 text-[10px] ml-1">✔</span>
                    )}
                  </span>
                  <span className="flex items-center">
                    {video.views} views <BsDot />{" "}
                    {formatDistanceToNow(video.time, { addSuffix: true })}
                  </span>
                </div>
              </div>
              <BiDotsVerticalRounded
                size={18}
                className="text-white hover:text-gray-300"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VideoSection;
