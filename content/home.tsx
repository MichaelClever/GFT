import { PlusSquare, Hourglass, Settings, Scroll, PenTool, Microscope, FlaskConical, Globe, Map } from "lucide-react";
import React from "react";

// For static typing of our marketing cards
export type SubjectCardData = {
    name: string;
    route: string;
    topIcon: React.ReactNode;
    bottomIcon: React.ReactNode;
    imagePath: string;
};

// We define icons lazily or as functional components if relying on React renders, 
// here we use a small helper to generate them consistently.
const commonIconClass = "text-[#f1e5d1]";

export const homeContent = {
    hero: {
        title: "We Make Learning\nFun!",
    },
    subjects: [
        {
            name: 'Math',
            route: 'math',
            topIcon: <PlusSquare size={16} className={commonIconClass} />,
            bottomIcon: <Hourglass size={16} className={commonIconClass} />,
            imagePath: '/GFT/Icon_math.png',
        },
        {
            name: 'Logic',
            route: 'logic',
            topIcon: <Settings size={16} className={commonIconClass} />,
            bottomIcon: <Settings size={16} className={commonIconClass} />,
            imagePath: '/GFT/icon_logic.png',
        },
        {
            name: 'Language',
            route: 'language',
            topIcon: <Scroll size={16} className={commonIconClass} />,
            bottomIcon: <PenTool size={16} className={commonIconClass} />,
            imagePath: '/GFT/icon_language.png',
        },
        {
            name: 'Science',
            route: 'science',
            topIcon: <Microscope size={16} className={commonIconClass} />,
            bottomIcon: <FlaskConical size={16} className={commonIconClass} />,
            imagePath: '/GFT/Icon_science.png',
        },
        {
            name: 'Social Studies',
            route: 'social-studies',
            topIcon: <Globe size={16} className={commonIconClass} />,
            bottomIcon: <Map size={16} className={commonIconClass} />,
            imagePath: '/GFT/icon_social.png',
        },
    ] as SubjectCardData[]
};
