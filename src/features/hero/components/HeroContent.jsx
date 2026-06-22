import heroBackground from "@/assets/hero-background.png";
import { HeroCard } from "./HeroCard";
import { HeroContentButton } from "./HeroContentButton";

export default function HeroContent() {
    return (
        <div className="min-h-screen bg-cover bg-center bg-fixed flex flex-col items-center justify-center px-1 pt-10
        " style={{ backgroundImage: `url(${heroBackground})` }}>
            <HeroCard />
            <HeroContentButton />
        </div>
    );
}
