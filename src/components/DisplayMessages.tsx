import React from "react";
import { type Message } from "../types/types";
import DisplayBranches from "./DisplayBranches";

type Props = {
  message: Message;
  index: number;
};

const DisplayMessages = ({ message, index }: Props) => {
  return (
    <div className="group mb-2 shrink-0 rounded-lg flex items-center drop-shadow-md bg-zinc-700 w-48 h-20 relative">
      <DisplayBranches trunk={index === 0} key={index} />
      <p className="text-sm text-gray-200 font-bold px-4">{message.body}</p>
    </div>
  );
};

export default DisplayMessages;
