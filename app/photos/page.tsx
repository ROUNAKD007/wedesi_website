import { photosLink } from "@/lib/links";
import { redirect } from "next/navigation";

export const metadata = { title: "Photos — WeDesi @ UIC" };

export default function PhotosPage() {
  redirect(photosLink); // simple for now
}
