import { HeroContentParagraph } from "./HeroContentParagraph";
import { HeroContentTitle } from "./HeroContentTitle";

export function HeroCard() {
    return (
        <div className="w-full max-w-5xl max-h-[65vh] overflow-y-auto rounded-xl bg-gradient-to-b from-yellow-600 to-orange-600 p-6 shadow-lg">
            <HeroContentTitle />
            <HeroContentParagraph />
        </div>
    );
}