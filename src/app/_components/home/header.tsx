import { TextInput } from "@tremor/react";
// import { FaUserCircle } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-28 right-0 z-50 flex items-center justify-between px-4 py-3 text-white">
      <div className="mx-auto w-2/3">
        <TextInput
          className="w-full rounded-xl text-black"
          placeholder="Search for people and companies accross the entire Soma network"
        />
      </div>
      <div className="flex items-center gap-3">
        <RiWhatsappFill
          size={35}
          color="lightgreen"
          className="cursor-pointer"
        />
        <button className="flex items-center rounded-xl bg-violet-500 px-4 py-2 text-sm hover:bg-violet-600">
          Share News
        </button>
        <Image
          src="https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
          alt="user"
          width={30}
          height={30}
          className="cursor-pointer rounded-full"
        />
      </div>
    </header>
  );
}
