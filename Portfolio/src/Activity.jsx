import jjk from './assets/jjk.jpg' 
import e1 from './assets/e1.jpg'
import e2 from './assets/e2.jpg'
import e3 from './assets/e3.jpg'
import e4 from './assets/e4.jpg'
import e5 from './assets/e5.jpg'
import e6 from './assets/e6.jpg'

function Activity(){

     return(

        <div className="flex items-center h-screen w-screen bg-black justify-center"> 
    
                  <div className="space-y-8  bg-black p-6 border-2 border-black  shadow-lg items-center justify-center">
                  <div>
  
                            
                            <div className="flex   items-center justify-center">
  <div className="space-y-8 bg-black  p-6 border-2 border-black rounded-md shadow-lg px-96">
    <div className="space-y-4 ">
      <h1 className="text-blue-700 text-center text-4xl font-bold font-mono justify-center">Activity</h1>
      <h1 className="text-zinc-400  text-xl font-mono justify-center text-center">
      Some pictures of my Activities
      </h1>
    </div>


    <div className=" w-full overflow-auto hover:overflow-scrol border-8 border-zinc-500 snap-x flex space-x-4 p-12" >
      <div class="flex space-x-4 ">

      
      <div className="snap-start flex-shrink-0">
        <img src={e1}alt="Image 1" className="w-64 h-64 object-cover" />
      </div>
      <div className="snap-start flex-shrink-0">
        <img src={e2} alt="Image 2" className="w-64 h-64 object-cover" />
      </div>
      <div className="snap-start flex-shrink-0">
        <img src={e3} alt="Image 3" className="w-64 h-64 object-cover" />
      </div>
      <div className="snap-start flex-shrink-0">
        <img src={e4} alt="Image 4" className="w-64 h-64 object-cover" />
      </div>
      <div className="snap-start flex-shrink-0">
        <img src={e5} alt="Image 5" className="w-64 h-64 object-cover" />
      </div>
      <div className="snap-start flex-shrink-0">
        <img src={e6} alt="Image 6" className="w-64 h-64 object-cover" />
      </div>
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