import React from "react";
import CustomBtn from "./CustomBtn";
import { formatDistanceToNow } from "date-fns";

export default function MovieCard({ title, description, dateReleased, genre }) {
  return (
    <div className="p-2 m-2 bg-gray-100">
      <h1 className="font-bold">{title}</h1>
      <p>
        {genre.map((g) => (
          <h1 className="font-sans">{g}</h1>
        ))}
      </p>
      <p className="font-medium text-gray-600">{description}</p>
      <p className="text-gray-400">
        Released -
        {formatDistanceToNow(new Date(dateReleased), { addSuffix: true })}
      </p>
      <div>
        <CustomBtn title={"See details"} onClick={() => {}} />
      </div>
    </div>
  );
}
