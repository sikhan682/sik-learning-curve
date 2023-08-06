import React from "react";
import Wrapper from "../styles/global/Home";
import { VideoCardSkeleton } from "../styles/global/Skeleton";
import VideoGrid from "../styles/VideoGrid";

function HomeSkeleton() {
  return (
    <Wrapper>
      <VideoGrid>
        <VideoCardSkeleton />
        <VideoCardSkeleton />
        <VideoCardSkeleton />
        <VideoCardSkeleton />
        <VideoCardSkeleton />
        <VideoCardSkeleton />
        <VideoCardSkeleton />
        <VideoCardSkeleton />
        <VideoCardSkeleton />
      </VideoGrid>
    </Wrapper>
  );
}

export default HomeSkeleton;
