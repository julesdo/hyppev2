export type SongProps = {
  title: string;
  artist: string;
  image: string;
  link: string;
};

export const songs = [
  // Salaried
  { title: "Obvy", artist: "Fintech", image: require(".//../../public/logos/obvy.png"), link: "https://www.obvy-app.com/" },
  { title: "Ubiwan", artist: "B2B", image: require(".//../../public/logos/ubiwan.png"), link: "https://www.ubiwan.net/" },
  // Independent
  { title: "EPB-Service", artist: "SMB", image: require(".//../../public/logos/epb.png"), link: "https://www.bouyrie-services.com/" },
  { title: "Source Private Asset", artist: "Fund", image: require(".//../../public/logos/spa.webp"), link: "https://sourceprivateassets.com/" },
  { title: "Anne Mondy", artist: "Artist", image: require(".//../../public/logos/am.png"), link: "https://annemondy.com" },
  { title: "Aqui Media", artist: "Media", image: require(".//../../public/logos/aquimedia.png"), link: "https://aqui.media" },
  { title: "La Stela Company", artist: "Artist company", image: require(".//../../public/logos/stela.png"), link: "https://stela-company.vercel.app/" },
];
