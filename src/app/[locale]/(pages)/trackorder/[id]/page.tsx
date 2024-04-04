import PageTitle from "@/components/PageTitle";
import React from "react";
import TrackOrderContainer from "./components/TrackOrderContainer";

const TrackOrderPageWithId = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <PageTitle title="track order" />
      <TrackOrderContainer orderId={params.id} />
    </div>
  );
};

export default TrackOrderPageWithId;
