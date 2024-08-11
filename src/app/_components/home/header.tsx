"use client";

import { TextInput } from "@tremor/react";
// import { FaUserCircle } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";
import { Card } from "@tremor/react";
import { signOut } from "next-auth/react";

export default function Header() {
  const { data: session, status } = useSession();
  const [userAvatar, setUserAvatar] = useState<string>(
    "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg",
  );

  const handleLogout = async () => {
    await signOut({ callbackUrl: "/login" });
  };

  useEffect(() => {
    console.log("session user image: ", session?.user.image);
    console.log("session user name: ", session?.user.name);
    setUserAvatar(
      session?.user.image ??
        "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg",
    );
  }, [session, status]);

  return (
    <header className="fixed left-28 right-0 top-0 z-50 flex items-center justify-between px-4 py-3 text-white">
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
        <Popover>
          <PopoverTrigger>
            <Image
              src={userAvatar}
              alt="user"
              width={30}
              height={30}
              className="cursor-pointer rounded-full"
            />
          </PopoverTrigger>
          <PopoverContent>
            <Card className="w-48 space-y-2 p-2 text-sm">
              <p className="cursor-pointer p-2 hover:bg-gray-100">My profile</p>
              <p
                onClick={handleLogout}
                className="cursor-pointer p-2 hover:bg-gray-100"
              >
                Logout
              </p>
            </Card>
          </PopoverContent>
        </Popover>
      </div>
    </header>
  );
}
