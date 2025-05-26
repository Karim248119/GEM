import React from "react";
import { Timeline } from "@/components/Timeline";
import Typo from "@/components/Typo";
import Header from "@/components/Header";
import Page from "@/components/Page";

export default function page() {
  const data = [
    {
      title: "CA 4000 - 2686 BC",
      content: (
        <div>
          <Typo
            direction="none"
            className="mb-4 text-lg font-normal text-neutral-800 md:text-2xl"
          >
            Predynastic - Early Dynastic Period
          </Typo>
          <div className="flex md:flex-row flex-col-reverse gap-4">
            <p className="text-sm">
              The people of the Nile valley began to coalesce in two main areas:
              the Delta region (Lower Egypt) and the south (Upper Egypt), at
              Hierakonopolis. From Hierakonopolis comes evidence of a number of
              kings such Narmer, the last king of the Predynastic Period: he
              conquered Lower Egypt and unified the country. Horus Aha, who
              probably took the name of Menes, succeeded Narmer and founded the
              First Dynasty: he established the capital at Memphis in order to
              ensure control over the country. Dynasties: First, Second Photo:
              Narmer Palette
            </p>
            <img
              src="https://egyptianmuseumcairo.eg/wp-content/uploads/2021/06/Narmer-Palette.png"
              alt="startup template"
              width={500}
              height={500}
              className="md:h-full md:w-1/2 w-full h-auto object-contain  rounded p-3"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2686 - 2160 BC",
      content: (
        <div>
          <Typo
            direction="none"
            className="mb-4 text-lg font-normal text-neutral-800 md:text-2xl"
          >
            Old Kingdom
          </Typo>
          <div className="flex md:flex-row flex-col-reverse gap-4">
            <p className="text-sm">
              This is the period of the Great Pyramids. Djoser built the first
              pyramid in Egyptian history at Saqqara. Snefru, the founder of the
              4th Dynasty, built the first true pyramids at Meidum and Dahshur,
              and Khufu the Great Pyramid at Giza. During the reign of Userkaf,
              founder of the 5th Dynasty, the sun temples of Abusir (near
              Saqqara) were built. With the end of the 6th Dynasty royal power
              began to diminish, and there was a growing tendency toward
              independence. Dynasties: Third, Fourth, Fifth, Sixth, Seventh,
              Eighth. Photo: Statue of Khafre (left), Head of Userkaf (right)
              Main Artefacts: Sedan chair of Queen Hetepheres, Meidum Geese,
              Statuette of Khufu, Statue of Khafre , Menkaure Triads, Statue of
              King Djoser, Statue of Ka-aper, Statue of Hetepdief, Head of
              Userka
            </p>
            <img
              src="https://egyptianmuseumcairo.eg/wp-content/uploads/2021/06/old-kingdom.png"
              alt="startup template"
              width={500}
              height={500}
              className="md:h-full md:w-1/2 w-full h-auto object-contain  rounded p-3"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2160 - 2034 BC",
      content: (
        <div>
          <Typo
            direction="none"
            className="mb-4 text-lg font-normal text-neutral-800 md:text-2xl"
          >
            First Intermediate Period
          </Typo>
          <p className="text-sm">
            In this period centralised power declined and numerous ephemeral
            kings appeared. Dynasties: Ninth, Tenth, Eleventh
          </p>
        </div>
      ),
    },
    {
      title: "2034 - after 1650 BC",
      content: (
        <div>
          <Typo
            direction="none"
            className="mb-4 text-lg font-normal text-neutral-800 md:text-2xl"
          >
            Middle Kingdom
          </Typo>
          <div className="flex md:flex-row flex-col-reverse gap-4">
            <p className="text-sm">
              During the 11th Dynasty, a period of great prosperity began, and
              power was established once again by a dynasty of Theban princes.
              The king Mentuhotep reunites the country and builds a great
              funerary temple at Deir el Bahari. The kings Amenemhat I,
              Sesostris II, and Amenemhat II build their relatively small
              pyramids at el-Lisht, el-Lahun, and Hawara in Fayum. Dynasties:
              Eleventh, Twelfth, Thirteen.
            </p>
            <img
              src="https://egyptianmuseumcairo.eg/wp-content/uploads/2021/06/middle-kingdom-egyptian-museum-timeline.png"
              alt="startup template"
              width={500}
              height={500}
              className="md:h-full md:w-1/2 w-full h-auto object-contain  rounded p-3"
            />
          </div>
        </div>
      ),
    },
    {
      title: "1773 - 1550 BC",
      content: (
        <div>
          <Typo
            direction="none"
            className="mb-4 text-lg font-normal text-neutral-800 md:text-2xl"
          >
            Second Intermediate Period
          </Typo>
          <p className="text-sm">
            Royal power declined again and Nubia became an independent state.
            The Hyksos, nomadic peoples of Palestinian origin, gained control of
            the northern part of Egypt, establishing their capital at Avaris in
            the Delta, and ruled the country. Dynasties: Fourteenth, Fifteenth,
            Sixteenth, Seventeenth.
          </p>
        </div>
      ),
    },
    {
      title: "1550 - 1069 BC",
      content: (
        <div>
          <Typo
            direction="none"
            className="mb-4 text-lg font-normal text-neutral-800 md:text-2xl"
          >
            New Kingdom
          </Typo>
          <div className="flex md:flex-row flex-col-reverse gap-4">
            <p className="text-sm">
              King Ahmose expelled the Hyksos and founded the 18th Dynasty.
              Thutmosis I conquered Upper Nubia. Queen Hatshepsut built the
              great funerary temple of Deir el Bahari at Thebes. Thutmosis III
              conquered Syria and extended his influence over the Near East.
              Amenhotep IV (Akhenaten) replaced the old religion with the
              worship of a single god, the sun disk, and moved his capital from
              Thebes to Tell el Amarna (Akhetaten). After his death, the new
              religion was abolished and Tutankhamun moved the capital to
              Memphis. Ramesses I founded the 19th Dynasty and Sethos I fought
              against the Libyans, the Syrians, and the Hittites. His son
              Ramesses II continued the war against the Hittites and after the
              battle of Qadesh, he made a peace treaty with them. The 19th
              Dynasty had ended with a short period of anarchy and with king
              Setnakhte begins the 20th Dynasty. His son, Ramesses III, fought
              against the Sea People, and was the last of the great pharaohs.
              After eight Ramessid rulers, with Ramesses XI the 20th Dynasty
              ends.
            </p>
            <img
              src="https://egyptianmuseumcairo.eg/wp-content/uploads/2021/06/new-knigdom-timeline-egyptian-museum.png"
              alt="startup template"
              width={500}
              height={500}
              className="md:h-full md:w-1/2 w-full h-auto object-contain  rounded p-3"
            />
          </div>
        </div>
      ),
    },
    {
      title: "1069 - 664 BC",
      content: (
        <div>
          <Typo
            direction="none"
            className="mb-4 text-lg font-normal text-neutral-800 md:text-2xl"
          >
            Third Intermediate Period
          </Typo>
          <div className="flex md:flex-row flex-col-reverse gap-4">
            <p className="text-sm">
              At Tanis, the royal residence in the Delta, a new Dynasty was
              founded that shared power with the High Priests at Thebes. Nubia
              became independent and Egypt lost control over Palestine. A number
              of kings of Libyan origins sprang up in the east of the Delta.
              Their power grew strong and they carried out buildings works at
              Tanis and Bubastis. Thebes declined in importance and Egypt was
              split up into numerous small states. Nubian rulers of the kingdom
              of Kush took control over Upper Egypt, conquering Memphis as well.
            </p>
            <img
              src="https://egyptianmuseumcairo.eg/wp-content/uploads/2021/06/Psusennes-I-mask-timeline-egyptian-museum.png"
              alt="startup template"
              width={500}
              height={500}
              className="md:w-1/2 w-full object-contain  rounded p-3 m-auto"
            />
          </div>
        </div>
      ),
    },
    {
      title: "664 - 332 BC",
      content: (
        <div>
          <Typo
            direction="none"
            className="mb-4 text-lg font-normal text-neutral-800 md:text-2xl"
          >
            Late Period
          </Typo>
          <div className="flex md:flex-row flex-col-reverse gap-4">
            <p className="text-sm">
              Despite continuous wars, this was a time of prosperity and
              cultural development. Following Nubian domination, Egypt fell
              briefly under Assyrian control. The Nubian kingdom of Kush was
              definitively separated from Egypt. In 525 BC, Psammetichus III was
              defeated by Cambyses the king of Persia, and Egypt became a
              Persian province. The 30th Dynasty was the last native Dynasty and
              King Nectanebo I built temples at Philae and a majestic pylon in
              front of the temple of Karnak. Nectanebo II, last pharaoh of the
              30th Dynasty, was defeated by the combined Persian and Greek
              forces in the Battle of Pelusiun (343 BC). The Persians occupied
              Memphis and then seized the rest of Egypt. Dynasties:
              Twenty-sixth, Twenty-seventh (Persian), Twenty-eighth,
              Twenty-ninth, Thirtieth. Photo: Nectanebo II
            </p>
            <img
              src="https://egyptianmuseumcairo.eg/wp-content/uploads/2021/06/Nectanebo-II-timeline-egypt-late-period.png"
              alt="startup template"
              width={500}
              height={500}
              className="md:w-1/2 w-full object-contain  rounded p-3 m-auto"
            />
          </div>
        </div>
      ),
    },
    {
      title: "332 BC - 641 AD",
      content: (
        <div>
          <Typo
            direction="none"
            className="mb-4 text-lg font-normal text-neutral-800 md:text-2xl"
          >
            Greco - Roman Period
          </Typo>
          <div className="flex md:flex-row flex-col-reverse gap-4">
            <p className="text-sm">
              In 332 BC Alexander the Great occupied all of Egypt. After his
              death, the Macedonian general Ptolemy, Satrap of Egypt, had
              himself proclaimed pharaoh under the name of Ptolemy I. In 163 BC,
              Roman influence began to extend to Egypt. In 48 BC, Julius Caesar
              landed in Egypt to defend Cleopatra VII who had been deposed by
              her brother Ptolemy XIII. In 31 BC, Octavian, the first Roman
              emperor arrived in Egypt, conquered Alexandria, and Egypt became a
              Roman province.
            </p>
            <img
              src="https://egyptianmuseumcairo.eg/wp-content/uploads/2021/06/Alexander-head-timeline-egyptian-museum.png"
              alt="startup template"
              width={500}
              height={500}
              className="md:w-1/2 w-full object-contain  rounded p-3 m-auto"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <Page className="relative w-full overflow-clip pt-14 bg-primary">
      <Header symbol="𓋖" title="Over a 5000 years of history" />
      <Timeline data={data} />
    </Page>
  );
}
