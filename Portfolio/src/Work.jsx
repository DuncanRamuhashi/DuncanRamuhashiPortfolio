import pro1 from './assets/pro1.jpg'
import pro2 from './assets/pro2.jpg'
import jjk from './assets/jjk.jpg'
function Work(){

    return(
      <div className="flex items-center h-screen w-screen bg-black justify-center"> 
    
      <div className="space-y-8  bg-black p-6 border-2 border-black  shadow-lg items-center justify-center">
      <div>

                
                <div className="flex   items-center justify-center">
<div className="space-y-8 bg-black  p-6 border-2 border-black rounded-md shadow-lg px-96">
<div className="space-y-4 ">
<h1 className="text-blue-700 text-center text-4xl font-bold font-mono justify-center">Portfolio Projects</h1>
<h1 className="text-zinc-400  text-xl font-mono justify-center text-center">
 Here are some of the projects
</h1>
</div>


<div className=" w-full  border-8 border-zinc-800 snap-x flex space-x-4 p-12" >
<div class="flex space-x-4 ">


     <div className="snap-start flex-shrink-0 space-y-2 ">
        <a href="https://assignment-1-css-core-concepts-4dr207ccv.vercel.app/" target="_blank">
          <img src={pro1} alt="Image 1" className="w-64 h-64 object-cover" />
        </a>
        <h1 className="text-zinc-400  text-xl font-mono justify-center text-center"> Dronoticz</h1> 
      </div>
      <div className="snap-start flex-shrink-0 space-y-2">
        <a href="https://assignment-1-css-core-concepts-4dr207ccv.vercel.app/" target="_blank">
          <img src={pro2} alt="Image 2" className="w-64 h-64 object-cover" />
        </a>
        <h1 className="text-zinc-400  text-xl font-mono justify-center text-center"> Dronoticz 2 </h1> 
      </div>

       
</div>
</div>
    <div className="place-content-center px-64">
                  <button className=' h-10   w-36 ring-2 rounded-full border-black border-y-8 ring-blue-700 mix-blend-normal  text-1xl text-blue-700'>See More</button>
            </div>
</div>
</div>


               
          </div>
    </div>
   
</div>
    );
}

export default Work