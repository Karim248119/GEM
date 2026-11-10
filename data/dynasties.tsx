const Dynasties = [
  {
    startdate: "3000",
    name: "1st Dynasty",
    king: "Narmer",
    img: "https://arthistoryproject.com/site/assets/files/11060/narmer_palette-min_upload_tmp.png",
    description:
      "Unification of Egypt; establishment of Memphis and centralized monarchy.",
  },
  {
    startdate: "2800",
    name: "2nd Dynasty",
    king: "Khasekhemwy",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Khasekhemwy_statue_Ashmolean.JPG/960px-Khasekhemwy_statue_Ashmolean.JPG",
    description:
      "Early state consolidation; possible internal conflicts and institutional development.",
  },

  {
    startdate: "2686",
    name: "3rd Dynasty",
    king: "Djoser",
    img: "https://egymonuments.gov.eg/media/2793/_dsc8617.jpg?crop=0.38929416505230352,0.085725914468540734,0.17998466885064143,0.2655788830235391&cropmode=percentage&width=645&height=423&rnd=134192602200000000",
    description: "Beginning of pyramid construction; Step Pyramid at Saqqara.",
  },
  {
    startdate: "2543",
    name: "4th Dynasty",
    king: "Khufu",
    img: "https://news.artnet.com/app/news-upload/2025/04/great-pyramids-giza-aerial-scaled.jpg",
    description: "Golden age of pyramid building; Great Pyramid of Giza.",
  },
  {
    startdate: "2435",
    name: "5th Dynasty",
    king: "Unas",
    img: "https://pbs.twimg.com/media/EcQlEmwU4AEB1U2.jpg",
    description: "Expansion of sun cult; first Pyramid Texts appear.",
  },
  {
    startdate: "2305",
    name: "6th Dynasty",
    king: "Pepi II",
    img: "https://www.impulseegypt.com/wp-content/uploads/2024/03/Pepi_II.jpg",
    description: "Decline of centralized power toward end of Old Kingdom.",
  },

  {
    startdate: "2181",
    name: "7th Dynasty",
    king: "—",
    img: "https://upload.wikimedia.org/wikipedia/commons/9/93/Another_view_of_the_Shrine_of_the_25th_dynasty_pharaoh_and_Kushite_King_Taharqa_Egypt_7th_century_BCE.jpg",
    description:
      "Obscure or possibly mythical dynasty; reflects political collapse.",
  },
  {
    startdate: "2150",
    name: "8th Dynasty",
    king: "Neferkare II",
    img: "https://cdn.britannica.com/02/132902-050-A14E7E42/Pepi-II-Queen-Ankhnesmerire-Egyptian-New-York-2194-bce.jpg",
    description: "Weak rulers; continuation of Old Kingdom decline.",
  },
  {
    startdate: "2118",
    name: "9th Dynasty",
    king: "Khety I",
    img: "https://upload.wikimedia.org/wikipedia/commons/9/98/EgypteBH167.jpg",
    description: "Heracleopolitan rule; regional fragmentation.",
  },
  {
    startdate: "2130",
    name: "10th Dynasty",
    king: "Merykare",
    img: "https://d7hftxdivxxvm.cloudfront.net/?height=615&quality=80&resize_to=fit&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FlCfFwPBQFaj6PoLKsS6btQ%2Fnormalized.jpg&width=799",
    description: "Continuation of Heracleopolis rule during instability.",
  },

  {
    startdate: "2080",
    name: "11th Dynasty",
    king: "Mentuhotep II",
    img: "https://egyptianmuseumcairo.eg/wp-content/uploads/2021/03/10-1.jpg",
    description: "Reunification of Egypt; start of Middle Kingdom.",
  },
  {
    startdate: "1939",
    name: "12th Dynasty",
    king: "Senusret III",
    img: "https://static.wikia.nocookie.net/althistory/images/a/a7/SEN_III.jpg/revision/latest?cb=20230216221255",
    description:
      "Peak of Middle Kingdom; strong central power and expansion into Nubia.",
  },
  {
    startdate: "1759",
    name: "13th Dynasty",
    king: "Sobekhotep IV",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/King_Sebekhotep_IV-A_17-IMG_0014-gradient.jpg/330px-King_Sebekhotep_IV-A_17-IMG_0014-gradient.jpg",
    description: "Declining central power; many short reigns.",
  },
  {
    startdate: "1759",
    name: "14th Dynasty",
    king: "Nehesy",
    img: "https://www.cairotoptours.com/storage/2003/conversions/Fourteenth%20Dynasty%20of%20Egypt%20in%20Ancient%20Egypt%20History-webp.webp",
    description: "Parallel rulers in the Delta region.",
  },
  {
    startdate: "1630",
    name: "15th Dynasty (Hyksos)",
    king: "Apepi",
    img: "https://armstronginstitute.org/files/W1siZiIsIjIwMjMvMDEvMDUvMTJ1ZzdpcjNhb18xMjgwcHhfU3BoaW5peF9hdF9JbmRpYW5fTXVzZWFtX19Lb2xrYXR0YS5qcGVnIl0sWyJwIiwidGh1bWIiLCIxMjAweD4iXSxbInAiLCJlbmNvZGUiLCJqcGciLCItcXVhbGl0eSA4MCJdXQ/4b4a942e7539913e/1280px-Sphinix_at_Indian_Museam%2C_Kolkatta.jpg.jpg",
    description: "Foreign Hyksos rulers dominate northern Egypt.",
  },
  {
    startdate: "1630",
    name: "16th Dynasty",
    king: "—",
    img: "https://th-thumbnailer.cdn-si-edu.com/8lt7bzG0HmqlXb30OULvFjBH-VA=/fit-in/1600x0/filters:focal(467x291:468x292)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/29/1a/291a0a7e-c8d5-4bc7-8a39-0cb0e7934a95/2020_july17_hyksos.jpg",
    description: "Minor rulers, often vassals of Hyksos.",
  },
  {
    startdate: "1630",
    name: "17th Dynasty",
    king: "Ahmose I",
    img: "https://i.natgeofe.com/n/68b58b58-ecad-4a8e-a316-4536e593a108/ahmose-i-01.jpg",
    description: "Theban rulers who fought Hyksos and began reunification.",
  },

  {
    startdate: "1539",
    name: "18th Dynasty",
    king: "Hatshepsut",
    img: "https://res.cloudinary.com/aenetworks/image/upload/c_fill,ar_2,w_3840,h_1920,g_auto/dpr_auto/f_auto/q_auto:eco/v1/hatshepsut-statue?_a=BAVMn6DY0",
    description:
      "Start of New Kingdom; empire expansion and famous rulers like Tutankhamun.",
  },
  {
    startdate: "1292",
    name: "19th Dynasty",
    king: "Ramesses II",
    img: "https://www.egypttoursportal.com/images/2017/11/Statues-of-King-Ramses-II-at-Luxor-Temple-Egypt-Tours-Portal.jpg",
    description: "Military power and monumental building projects.",
  },
  {
    startdate: "1190",
    name: "20th Dynasty",
    king: "Ramesses III",
    img: "https://i0.wp.com/landioustravel.com/wp-content/uploads/2022/08/Ramesses-III-e1660061648810.jpg?fit=960%2C1216&ssl=1",
    description: "Last great New Kingdom rulers; decline begins.",
  },

  {
    startdate: "1076",
    name: "21st Dynasty",
    king: "Smendes",
    img: "https://art.thewalters.org/images/art/PS1_22.165_Rt_DD_T13.jpg",
    description: "Division of power between Tanis and Thebes.",
  },
  {
    startdate: "943",
    name: "22nd Dynasty",
    king: "Shoshenq I",
    img: "https://upload.wikimedia.org/wikipedia/commons/4/47/Shoshenq_I_by_Rosellini.jpg",
    description: "Libyan rulers; partial reunification.",
  },
  {
    startdate: "845",
    name: "23rd Dynasty",
    king: "Takelot II",
    img: "https://images.squarespace-cdn.com/content/v1/6047d405b02148755fb6e601/13f71a98-65b2-497b-be81-801a720b92ef/%CE%B5%CE%B9%CE%BA%CF%8C%CE%BD%CE%B1_2024-03-04_144140270.png",
    description: "Further fragmentation; rival kings.",
  },
  {
    startdate: "736",
    name: "24th Dynasty",
    king: "Tefnakhte",
    img: "https://www.vmfa.museum/piction/medias/51_19_4_v1_DS_202108_w.jpg?w=450&h=600&fit=crop&e=31915BB0CF463561890D06EF4FCE528A0628585731367CB3A235AFB99708872F&s=21&se=1317007108&v=1",
    description: "Short-lived Delta-based rule.",
  },
  {
    startdate: "722",
    name: "25th Dynasty (Kushite)",
    king: "Taharqa",
    img: "https://adf-magazine.com/wp-content/uploads/2025/01/Flashback_Taharqa_Louvre_Museum_CMYK-1.jpg",
    description: "Nubian rulers restore traditions and expand influence.",
  },

  {
    startdate: "664",
    name: "26th Dynasty",
    king: "Psamtik I",
    img: "https://www.daannijssen.com/wp-content/uploads/2025/11/Psamtik.jpeg",
    description: "Saite renaissance; brief revival of Egyptian independence.",
  },
  {
    startdate: "525",
    name: "27th Dynasty (Persian)",
    king: "Darius I",
    img: "https://i.namu.wiki/i/51xto_MNNi02zvtCc_-_nWcyikstH9LntfOp8A8GTXYBZgw_HNvz44mjqjE-pdaKM0FJ11ZdofeI5Mp2bXxQpQ.webp",
    description: "Egypt conquered by Achaemenid Persian Empire.",
  },
  {
    startdate: "404",
    name: "28th Dynasty",
    king: "Amyrtaeus",
    img: "https://i0.wp.com/landioustravel.com/wp-content/uploads/2022/08/Twenty-eighth-Dynasty-of-ancient-Egypt.jpg?fit=700%2C700&ssl=1",
    description: "Short period of regained independence.",
  },
  {
    startdate: "399",
    name: "29th Dynasty",
    king: "Nepherites I",
    img: "https://live.staticflickr.com/1144/1303341429_5798025c02_b.jpg",
    description: "Continued native rule with instability.",
  },
  {
    startdate: "380",
    name: "30th Dynasty",
    king: "Nectanebo II",
    img: "https://www.worldhistory.org/uploads/images/5356.jpg",
    description: "Last native Egyptian dynasty.",
  },
  {
    startdate: "343",
    name: "31st Dynasty (Second Persian)",
    king: "Artaxerxes III",
    img: "https://i0.wp.com/landioustravel.com/wp-content/uploads/2022/08/Artaxerxes-III-e1661139177643.jpg?fit=1200%2C900&ssl=1",
    description: "Persian reconquest of Egypt.",
  },

  {
    startdate: "332",
    name: "Macedonian Period",
    king: "Alexander the Great",
    img: "https://i.etsystatic.com/51643766/r/il/f0acc5/6814471711/il_fullxfull.6814471711_qrt6.jpg",
    description:
      "Egypt conquered by Alexander; transition to Hellenistic rule.",
  },
  {
    startdate: "305",
    name: "Ptolemaic Dynasty",
    king: "Cleopatra VII",
    img: "https://www.ancientsculpturegallery.com/wp-content/uploads/2013/03/IMG_8138.jpeg",
    description:
      "Greek rulers; blending of Egyptian and Hellenistic culture; ends with Roman annexation.",
  },
];

export default Dynasties;
