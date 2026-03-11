import Link from 'next/link';
import { homeContent } from '@/content/home';

export function CardDeck() {
    return (
        <section className="w-full max-w-[1400px] mx-auto px-4 z-10 flex-1 flex justify-center items-center -mt-1 mb-10">
            <div className="flex flex-row justify-center items-stretch gap-6 w-full">
                {homeContent.subjects.map((sub) => (
                    <Link href={`/${sub.route}`} key={sub.name} 
                            className="relative flex-1 group flex justify-center" style={{maxWidth: '260px'}}>
                        <div className="relative w-full transition-transform duration-300 group-hover:-translate-y-4 group-hover:drop-shadow-[0_20px_35px_rgba(0,0,0,0.8)] filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)]">
                            <img 
                                src={sub.imagePath} 
                                alt={sub.name} 
                                className="w-full h-auto object-contain" 
                            />
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
