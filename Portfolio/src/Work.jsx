
import jjk from './assets/jjk.jpg'
function Work(){

    return(
        <div className="flex h-screen w-screen items-center justify-center"> 
    
        <div className="space-y-8 h-screen w-screen bg-black p-6 border-2 border-black  rounded-md shadow-lg items-center justify-center">
        <div className="text-center" >
              <h1 className=" text-blue-700 t"> My Projects</h1>
              <div className="overflow-x-scroll snap-x flex space-x-4 p-4">

              <div className="pb-16 w-1/4 bg-white shadow-lg mb-10 space-y-10">
                                          <img
                                             src={jjk}
                                             alt="jjk"
                                             className=" h-48 w-full object-cover"
                                          />
                   
                                
                              <h1 className="justify-self-center px-12 text-center text-stone-950">Project X</h1>
              </div>
              <div className="pb-16 w-1/4 bg-white shadow-lg mb-10 space-y-10">
                                          <img
                                             src={jjk}
                                             alt="jjk"
                                             className=" h-48 w-full object-cover"
                                          />
                   
                                
                              <h1 className="justify-self-center px-12 text-center text-stone-950">Project Z</h1>
              </div>
        
              <div className="pb-16 w-1/4 bg-white shadow-lg mb-10 space-y-10">
                                          <img
                                             src={jjk}
                                             alt="jjk"
                                             className=" h-48 w-full object-cover"
                                          />
                   
                                
                              <h1 className="justify-self-center px-12 text-center text-stone-950">Project G-5</h1>
              </div>
              <div className="pb-16 w-1/4 bg-white shadow-lg mb-10 space-y-10">
                                          <img
                                             src={jjk}
                                             alt="jjk"
                                             className=" h-48 w-full object-cover"
                                          />
                   
                                
                              <h1 className="justify-self-center px-12 text-center text-stone-950">Project G-7</h1>
              </div>
              
              </div>
            
        </div>
       </div>
     </div>    
    );
}

export default Work