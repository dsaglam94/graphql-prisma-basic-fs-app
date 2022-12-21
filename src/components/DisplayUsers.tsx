import React from "react";
import { type User } from "../types/types";
import DisplayMessages from "./DisplayMessages";

type Props = {
  user: User;
};

const DisplayUsers = ({ user }: Props) => {
  return (
    <div className="flex gap-x-24 justify-center">
      <div className="rounded-sm flex justify-center items-center drop-shadow-md bg-neutral-700 w-48 h-20">
        <p className="text-xl text-gray-200 font-bold">{user.name}</p>
      </div>
      <div>
        {user.messages.map((message, i) => (
          <DisplayMessages key={i} index={i} message={message} />
        ))}
      </div>
    </div>
  );
};

export default DisplayUsers;
