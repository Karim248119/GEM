import Cards from "@/components/home/Cards";
import Ticket from "@/components/home/Ticket";
import Welcome from "@/components/home/Welcome";
import { Items } from "@/data";
import SkewSlider from "@/components/SkewSlider";
import Page from "@/components/Page";
import Pyramid from "@/components/home/Pyramid";

export default function Home() {
  return (
    <Page className="w-full h-full  bg-neutral-900">
      <Welcome />
      <Cards />
      <Ticket />
      <Pyramid />
      <SkewSlider images={Items} />
    </Page>
  );
}
