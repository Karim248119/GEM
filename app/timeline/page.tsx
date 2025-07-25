import React from "react";
import { Timeline } from "@/components/Timeline";
import Typo from "@/components/Typo";
import Header from "@/components/Header";
import Page from "@/components/Page";
import { TimelineData } from "@/data/timeline";

export default function page() {
  return (
    <Page className="relative w-full pt-14 bg-primary">
      <Header
        imgurl="/cleopatra.png"
        gold
        title="Over a 5000 years of history"
      />
      <Timeline data={TimelineData} />
    </Page>
  );
}
