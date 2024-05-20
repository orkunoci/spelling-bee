import { useTranslations } from "next-intl";
import GameBlock from "../components/GameBlock";


export default function Home() {
  const t = useTranslations("Components.Header")
  return (
    <div className="min-h-screen lg:p-24">
    <h1 className="font-bold text-2xl mb-6">{t("title")}</h1>
    <div className="flex md:items-start items-center justify-center flex-col md:flex-row ">
    {/* <Stepper/> */}
    <GameBlock/>
    </div>
    </div>
  );
}
