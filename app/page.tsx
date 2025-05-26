import Dot from "@/components/Dot";
import Header from "@/components/Header";
import Cards from "@/components/home/Cards";
import Ticket from "@/components/home/Ticket";
import Welcome from "@/components/home/Welcome";
import { Items } from "@/data";
import SkewSlider from "@/components/SkewSlider";
import Footer from "@/components/home/Footer";
import Videos from "@/components/home/Videos";
import Page from "@/components/Page";

export default function Home() {
  return (
    <Page className="w-full h-full relative bg-neutral-900">
      <Welcome />
      <Cards />
      <Videos />
      <Ticket />
      <SkewSlider images={Items} />
    </Page>
  );
}
