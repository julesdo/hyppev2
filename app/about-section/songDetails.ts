export type SongProps = {
  title: string;
  artist: string;
  image: string;
  link: string;
};

export const songs = [
  // Enterprise (via Ubiwan / Groupe Coyote)
  { title: "Ubiwan", artist: "Enterprise SaaS", image: require(".//../../public/logos/ubiwan.png"), link: "https://www.ubiwan.net/" },
  { title: "Coyote", artist: "Industrial IoT", image: require(".//../../public/logos/coyote.png"), link: "https://www.moncoyote.com/" },
  { title: "Fayat", artist: "BTP", image: require(".//../../public/logos/fayat.png"), link: "https://www.fayat.com/" },
  { title: "Sarrion", artist: "BTP", image: require(".//../../public/logos/logo-sarrion.png"), link: "https://www.sarrion.fr/" },
  // Freelance Clients
  { title: "Aqui Media", artist: "Media", image: require(".//../../public/logos/aquimedia.png"), link: "https://aqui.media" },
  { title: "Anne Mondy", artist: "E-commerce", image: require(".//../../public/logos/am.png"), link: "https://annemondy.com" },
  { title: "Obvy", artist: "Fintech", image: require(".//../../public/logos/obvy.png"), link: "https://www.obvy-app.com/" },
  { title: "EPB-Service", artist: "SMB", image: require(".//../../public/logos/epb.png"), link: "https://www.bouyrie-services.com/" },
];
