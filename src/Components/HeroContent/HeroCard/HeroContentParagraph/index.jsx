import { dataHero } from "../../data";

export function HeroContentParagraph() {
    return (
        <div>
            {
                dataHero.map((item) => (
                    <div key={item.subtitle} className="mb-6">
                        <p className="text-orange-900 text-xl font-bold mb-2">
                            {item.subtitle}
                        </p>

                        <p className="text-orange-900 text-lg">
                            {item.description}
                        </p>
                    </div>
                ))
            }
        </div>
    )
}
