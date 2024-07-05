import Clock from "./Clock";

const Body = () => {
    return (
        <div className="flex justify-center items-center flex-col mb-12  " > 
            <div className="bg-slate-400 dark:bg-cyan-900 bg-opacity-15 dark:bg-opacity-35 rounded-xl flex">
                <Clock/>
            </div>
        </div>
     );
}
 
export default Body;