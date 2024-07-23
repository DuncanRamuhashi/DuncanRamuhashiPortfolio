import myPhoto from './assets/myPhoto.jpg'
import helloPic from './assets/helloPic.png'
function MainPage(){

   return(

       <body>
           <div className="flex py-28 px-44 content-center">
              <div className=" space-y-4 h-4/5 rounded-b bg-black p-6 border-2 border-black w-1/2 rounded-md shadow-lg ">
            <div className='flex flex-row space-x-2'>
            <h1 className=' text-4xl font-bold font-mono text-stone-100 '>Hello There!</h1>
                   <img
                                             src={helloPic}
                                             alt="Example Image"
                                             className="w-8 h-8 object-cover "
                                          />
         </div>
        
         <div className='flex flex-row space-x-4'>
             <h1 className="text-stone-100 text-blue-700 text-4xl font-mono"> I'm </h1>
           
            <h1 className=" text-blue-700 text-4xl font-bold font-mono">  Duncan Ramuhashi</h1>
            
         </div>
          <h1 className="text-zinc-400 text-justify text-center ">
          I am a Full-Stack Developer from Johannesburg. Welcome, noble guest, to my portfolio website. I thank thee for thy visit and hope thou dost find joy in exploring my humble work.
          </h1>
          <img
                                             src={myPhoto}
                                             alt="Example Image"
                                             className="w-64 h-64 object-cover"
                                          />
         </div>
   
        </div>
         

       </body>
   );
}

export default MainPage