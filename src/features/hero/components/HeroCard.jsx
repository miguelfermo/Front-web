import Title from "@/shared/ui/Title";
import { dataHero } from "../data/heroData";
import Paragraph from "@/shared/ui/Paragraph";

export function HeroCard() {
    return (
        <div className="w-full max-w-5xl max-h-[65vh] overflow-y-auto rounded-xl bg-gradient-to-b from-yellow-600 to-orange-400 p-6 shadow-lg">
            <Title className="text-center text-5xl font-bold text-orange-950 mb-8">
                SOBRE O NOSSO SITE
            </Title>
            <div>
                {
                    dataHero.map((item) => (
                        <div key={item.subtitle} className="mb-6">
                            <Paragraph className="text-orange-900 text-xl font-bold mb-2">
                                {item.subtitle}
                            </Paragraph>

                            <Paragraph className="text-orange-900 text-lg">
                                {item.description}
                            </Paragraph>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}