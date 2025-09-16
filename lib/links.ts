export type LinkItem = { label: string; href: string; external?: boolean };

export const mainNav: LinkItem[] = [
  { label: "Photos",  href: "/photos" },
  { label: "Join",    href: "/join" },
  { label: "Events",  href: "/events" },
  { label: "Support", href: "/support" },
];

export const socialLinks: LinkItem[] = [
  { label: "Instagram",   href: "https://www.instagram.com/wedesi.uic" },
  { label: "WhatsApp",    href: "https://chat.whatsapp.com/FPNTKM8O8OfFJwnygy019z", external: true },
  { label: "GroupMe",     href: "https://groupme.com/join_group/100921786/Uu33D89v", external: true },
  { label: "CampusGroups",href: "https://uic.campusgroups.com/WED/club_signup", external: true },
  { label: "Support WeDesi", href: "https://www.gofundme.com/f/support-wedesi-celebrate-south-asian-culture", external: true },
];
