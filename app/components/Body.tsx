import Clock from "./Clock";

const Body = () => {
    return (
        <div className="flex justify-center items-center flex-col mb-12"> 
            <div className="bg-slate-300 bg-opacity-15 rounded-xl flex">
                <Clock/>
            </div>
        </div>
     );
}
 
export default Body;