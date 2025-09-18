export type NavItem = { label: string; href: string };

/** App/site routes used in many components */
export const pages = {
  home: "/",
  photos: "/photos",
  events: "/events",
  join: "/join",
  support: "/support",
} as const;

/** Used by MembershipCallout and /join page */
export const joinLinks: NavItem[] = [
  { label: "Join WhatsApp", href: "https://chat.whatsapp.com/FPNTKM8O8OfFJwnygy019z" },
  { label: "Join GroupMe",  href: "https://groupme.com/join_group/100921786/Uu33D89v" },
  { label: "Become a Member", href: "https://uic.campusgroups.com/WED/club_signup" },
];

/** Used by PhotoGrid and photos page */
export const photosLink = "https://uofi.app.box.com/s/ppnlojsmrjbf3tie3w317vyvnd88868m";

/** Used by SupportSection and support page (expects an ARRAY) */
export const supportLinks: NavItem[] = [
  {
    label: "Support WeDesi (GoFundMe)",
    href: "https://www.gofundme.com/f/support-wedesi-celebrate-south-asian-culture",
  },
];

/** Used by site-footer (expects `social`) */
export const social = {
  instagram: "https://www.instagram.com/wedesi.uic",
};

/* ------- Backwards-compat aliases (so old imports won't crash) ------- */
export const joinLink   = joinLinks[0]?.href ?? "";
export const supportLink = supportLinks[0]?.href ?? "";
export const socialLinks = social;
