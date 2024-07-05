import Clock from "./Clock";

const Body = () => {
    return (
        <div className="flex justify-center items-center flex-col mb-12" > 
            <p className="text-5xl pb-4">بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ</p>
            <div className="bg-slate-400 dark:bg-cyan-900 bg-opacity-15 dark:bg-opacity-45 rounded-xl flex">
                <Clock/>
            </div>
        </div>
     );
}
 
export default Body;