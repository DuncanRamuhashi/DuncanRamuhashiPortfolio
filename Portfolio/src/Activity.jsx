import jjk from './assets/jjk.jpg' 

function Activity(){

     return(

        <div className="flex h-screen w-screen items-center justify-center"> 
    
                  <div className="space-y-8 h-screen w-screen bg-black p-6 border-2 border-black  rounded-md shadow-lg items-center justify-center">
                  <div>
  
                            
                            <div className="flex h-screen w-screen items-center justify-center">
  <div className="space-y-4 bg-black p-6 border-2 border-black rounded-md shadow-lg">
    <div>
      <h1 className="text-blue-700 text-center">Activity</h1>
      <h1 className="text-stone-100 text-center">
      Some pictures of my Activities
      </h1>
    </div>
    <div className="overflow-x-scroll snap-x flex space-x-4 p-4">
      <div className="snap-start">
        <img src={jjk}alt="Image 1" className="w-64 h-64 object-cover" />
      </div>
      <div className="snap-start">
        <img src={jjk} alt="Image 2" className="w-64 h-64 object-cover" />
      </div>
      <div className="snap-start">
        <img src={jjk} alt="Image 3" className="w-64 h-64 object-cover" />
      </div>
     
    </div>
  </div>
</div>


                           
                      </div>
                </div>
               
        </div>
     );
}

export default Activity