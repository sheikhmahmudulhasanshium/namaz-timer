import { useState } from "react";
import { RxPlus, RxReset } from "react-icons/rx";

const Counter = () => {
    const [count, setCount] = useState(0);
    const suggestionCounts = [0, 33, 34, 100];
    const [selectedCount, setSelectedCount] = useState<number | null>(null);

    function reset() {
        setCount(0);
        setSelectedCount(null);
    }

    function updateCount() {
        if (selectedCount !== null) {
            if (selectedCount > 1) {
                setCount(count + 1);
                setSelectedCount(selectedCount - 1);
            } else {
                reset();
            }
        } else {
            setCount(count + 1);
        }
    }

    function updateSelectedCount(newSelectedCount: number) {
        if (newSelectedCount <= 0) {
            reset();
        } else {
            setSelectedCount(newSelectedCount);
        }
    }

    return (
        <div className="border-cyan-950 border bg-gray-700 p-6 rounded-3xl flex flex-col justify-center items-center space-y-6 bg-opacity-50 shadow-2xl shadow-gray-200">
            <p className="text-4xl font-thin text-white">Tasbih</p>
            <div className="my-4">
                <p className="text-8xl font-digital font-bold text-green-500">{count}</p>
            </div>
            <div className="flex gap-8 text-3xl p-4 justify-center items-center">
                <button onClick={reset} className="m-3 p-3 rounded-full hover:bg-slate-900 text-white">
                    <RxReset />
                </button>
                {selectedCount !== null && (
                    <div className="flex flex-col justify-center items-center">
                        <p className="text-xl text-red-400">Remaining:</p>
                        <p className="font-digital text-red-200">{selectedCount}</p>
                    </div>
                )}
                <button onClick={updateCount} className="m-3 p-3 rounded-full hover:bg-slate-900 text-white">
                    <RxPlus />
                </button>
            </div>
            <div className="flex flex-col items-center space-y-4">
                <p className="text-white">How many you want to start with?</p>
                <div className="flex justify-center items-center gap-4">
                    {suggestionCounts.map((item) => (
                        <button
                            key={item}
                            onClick={() => updateSelectedCount(item)}
                            className="rounded-full w-10 h-10 bg-slate-900 hover:bg-slate-800 text-white flex items-center justify-center"
                        >
                            {item}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Counter;
