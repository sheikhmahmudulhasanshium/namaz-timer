import React, { useState } from "react";
import { decodeUnicode } from "./utils";

interface SlideProps {
    number: number;
    name: string;
    transliteration: string;
    enMeaning: string;
    enDesc: string;
    frMeaning: string;
    frDesc: string;
    found: string;
}

const Slide: React.FC<SlideProps> = ({
    number,
    name,
    transliteration,
    enMeaning,
    enDesc,
    frMeaning,
    frDesc,
    found,
}) => {
    const [showFrench, setShowFrench] = useState(false);

    const toggleFrench = () => {
        setShowFrench(!showFrench);
    };

    return (
        <div className="bg-cyan-100 dark:bg-slate-600 p-4 rounded shadow mb-4  max-w-md bg-opacity-20 dark:bg-opacity-50">
            <div className="text-center text-2xl font-bold mb-2">
                {number}. {name} - {transliteration}
            </div>
            <div className="text-black dark:text-white mb-2">
                <strong>Meaning (EN):</strong> {enMeaning}
            </div>
            <div className="text-black dark:text-white mb-2 text-justify">
                <strong>Description (EN):</strong> {enDesc}
            </div>
            <div className="text-black dark:text-white mb-2">
                <strong>Meaning (FR):</strong> {frMeaning}
            </div>
            {showFrench && (
                <div className="text-black dark:text-white mb-2">
                    <strong>Description (FR):</strong> {decodeUnicode(frDesc)}
                </div>
            )}
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2"
                onClick={toggleFrench}
            >
                {showFrench ? "Hide French" : "Show French"}
            </button>
            <div className="text-gray-500 text-sm">
                <strong>Found in:</strong> {found}
            </div>
        </div>
    );
};

export default Slide;
