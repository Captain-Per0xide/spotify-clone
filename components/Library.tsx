"use client";

import { AiOutlinePlus } from "react-icons/ai";
import { TbPlaylist } from "react-icons/tb";

const Library = () => {
  const onClick = () => {};
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-5 pt-4">
        <div className="inline-flex items-center gap-x-2">
          <TbPlaylist className="text-neutral-400 font-medium text-md" size={26} />
          <p>Your Library</p>
        </div>
        <AiOutlinePlus/>
      </div>
    </div>
  );
};

export default Library;
