import jjk from './assets/jjk.jpg'

function ExWork(){

             return(
                <div className="flex items-center  w-screen justify-center "> 
    
                   <div className="space-y-8 w-screen pt-6 bg-black p-6 border-2 border-black ps-40 shadow-lg ">
                          

                      <div>
                            <h1 className=" text-zinc-200  text-4xl font-bold font-mono justify-center"> My Work Experience</h1>
                            <div className="flex items-center pt-10 grid grid-cols-none gap-4 " >
              <div className=" grid grid-cols-2 gap-4">
              <h1 className="text-zinc-400 "> Sep-Dec(2023) </h1>
              <div className="flex flex-row space-x-2">
              <h1 className="text-stone-100 "> DynamicDNA</h1>
              <h1 className="text-zinc-400 ">(C#)</h1>
              </div>
              
              </div>
              
              <div className=" grid grid-cols-2 gap-4">
              <h1 className="text-zinc-400 "> 2023-2024</h1>
              <div className="flex flex-row space-x-2">
              <h1 className="text-stone-100 "> The DaataEnablement Company</h1>
              <h1 className="text-zinc-400 ">(Trainee)</h1>
              </div>
              </div>

              <div className=" grid grid-cols-2 gap-4">
               
              <h1 className="text-zinc-400 "> 2024-Present</h1>
              <div className="flex flex-row space-x-2">
              <h1 className="text-stone-100 "> Tshimologong - Digital Innovation Precinct </h1>
              <h1 className="text-zinc-400 ">(Junior Full-Stack Developer)</h1>
              </div>
              
              
              </div>

  

  
        </div>
                      </div>
           
                   </div>
               
               </div>
             );
}

export default ExWork