"use client";

import { MapPin } from "lucide-react";
import { Button } from "./ui/button";

const GetLocation = () => {
  const handleGetDirections = () => {
    const address =
      "Ndiechi Igbeagu Abakaliki-Ogoja Express way, Abakaliki, Ebonyi State, 480109";
    const encodedAddress = encodeURIComponent(address);
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
    window.open(mapsUrl, "_blank");
  };

  return (
    <Button
      variant="outline"
      onClick={handleGetDirections}
      className="mt-4 text-blue-600 hover:text-blue-700 flex items-center"
    >
      <MapPin className="w-4 h-4 mr-1" />
      Get Directions
    </Button>
  );
};

export default GetLocation;
