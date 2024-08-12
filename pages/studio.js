import { NextStudio } from "next-sanity/studio";
import config from "../sanity/sanity.config"; // Make sure this path is correct

export default function StudioPage() {
  return <NextStudio config={config} />;
}
