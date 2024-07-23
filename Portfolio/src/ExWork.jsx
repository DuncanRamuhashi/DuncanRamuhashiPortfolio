import jjk from './assets/jjk.jpg'

function ExWork(){

             return(
                <div className="flex h-screen w-screen items-center justify-center"> 
    
                   <div className="space-y-8 h-screen w-screen bg-black p-6 border-2 border-black  rounded-md shadow-lg items-center justify-center">
                          

                      <div>
                            <h1 className=" text-blue-700"> My Work Experience</h1>
                            <div>
                            <h1 className=" text-stone-100">2023</h1>
                            <h1 className=" text-stone-100"> dfdsfd</h1>

                            </div>
                             <div>
                            <h1 className=" text-stone-100">2023-2024</h1>
                            <h1 className=" text-stone-100"> dfdsfd</h1>
                            
                            </div>
                            <div>
                            <h1 className="text-stone-100">2024</h1>
                            <h1 className=" text-stone-100"> dfdsfd</h1>
                            
                            </div>
                      </div>
                      <img
                                             src={jjk}
                                             alt="Example Image"
                                             className=" h-48 w-48 object-cover"
                                          />
                   </div>
               
               </div>
             );
}

export default ExWork