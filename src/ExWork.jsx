import jjk from './assets/jjk.jpg'

function ExWork(){

             return(
               <div className="flex items-center w-screen m justify-center w-full bg-black p-6 border-2 border-black shadow-lg">
               <div className="space-y-8 w-screen max-w-screen-lg pt-6 ps-4 sm:ps-6 md:ps-10 lg:ps-40">
                 <div>
                   <h1 className="text-zinc-200 text-4xl font-bold font-mono text-center md:text-left">My Work Experience</h1>
                   <div className="grid grid-cols-1 gap-6 pt-10">
                     <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
                       <h1 className="text-zinc-400">Sep-Dec(2023)</h1>
                       <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
                         <h1 className="text-stone-100">DynamicDNA</h1>
                         <h1 className="text-zinc-400">(C#)</h1>
                       </div>
                     </div>
                     <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
                       <h1 className="text-zinc-400">2023-2024</h1>
                       <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
                         <h1 className="text-stone-100">The DataEnablement Company</h1>
                         <h1 className="text-zinc-400">(Trainee)</h1>
                       </div>
                     </div>
                     <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
                       <h1 className="text-zinc-400">2024-Present</h1>
                       <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
                         <h1 className="text-stone-100">Tshimologong - Digital Innovation Precinct</h1>
                         <h1 className="text-zinc-400">(Junior Full-Stack Developer)</h1>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
             
             );
}

export default ExWork