import { Data } from "./data";

const Body = () => {
    return ( 
        <div className="flex flex-col gap-4 mt-18 h-screen">
           <p className="text-4xl font-bold">Wakt Based Schedule</p> 
            <div className="flex flex-col  ">
                {Data.map((item,index)=>
                    <div className="flex flex-col my-4  " key={index}>
                        <div className="flex bg-cyan-400 p-2 rounded-xl gap-1 ">
                            <p className="text-xl">{item.date.english.day}, {item.date.english.dateOfMonth} {item.date.english?.month} {item.date.english?.year}</p>
                            <p className="text-xl"> | </p>
                            <p className="text-xl">{item.date.arabic.dateOfMonth} {item.date.arabic?.month} {item.date.arabic?.year}</p>
                        </div>
                    <div className="flex flex-col   my-4">
                        
                            {item.wakt.map((wakt,index)=>
                                    <div className="flex rounded-lg p-6 my-2  gap-2 bg-slate-500 justify-between items-center" key={index}>
                                        <p className="text-xl">{wakt.name.toUpperCase()}</p>
                                        <p className="font-bold">{wakt.start} - {wakt.end}</p>
                                    </div>
                            )}
                        
                    </div>
                        
                    </div>
                )}
                
            </div>
        </div>
     );
}
 
export default Body;