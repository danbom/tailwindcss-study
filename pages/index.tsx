import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import HeroSections from "../components/sections/HeroSections";

export default function Home() {
  const [dark, setDark] = useState(false);

  const toggleDark = () => {
    setDark(!dark);
  };
  return (
    <div className={dark ? "dark" : ""}>
      <HeroSections />
    </div>
  );
}
