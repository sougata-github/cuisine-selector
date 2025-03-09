import { ModeToggle } from "@/components/theme/ModeToggle";
import Cuisines from "@/components/Cuisines";

export default function Home() {
  return (
    <div className="max-sm:py-16 py-24 lg:py-32 px-2">
      <div className="flex justify-between w-full items-center">
        <h1 className="max-sm:text-xl text-2xl md:text-4xl max-w-xl font-semibold">
          Select your desired cuisines
        </h1>

        <ModeToggle />
      </div>
      <Cuisines />
    </div>
  );
}
