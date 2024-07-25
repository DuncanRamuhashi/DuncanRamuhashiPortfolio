

function Heading(){

    return(

             <header  >
            
            <div className=' flex flex-initial  flex container mx-auto flex place-items-center py-9 ps-8 justify-between ' >
             <div className='flex justify-items-start  '>
            
            <li className=" px-14 flex" >
                                       
                      <h1 className=' italic text-4xl font-bold font-mono text-blue-700'>D</h1>
                      <h1 className='italic text-4xl font-bold font-mono text-zinc-200'>Ramuhashi.</h1>
           
            </li>
                 
                
            
            </div>   
            
            <nav    className=' justify-items-end'>
                <ul  className='flex space-x-8' >
                <li className='hover:underline hover:decoration-blue-700 hover:decoration-solid hover:underline-offset-8  hover:decoration-2 text-1xl text-zinc-100'>
                     <a href="#about">About</a>
                    </li>

                <li className=' hover:underline hover:decoration-blue-700 hover:decoration-solid hover:underline-offset-8  hover:decoration-2 text-1xl text-zinc-100'>
                <a href="#experience">Experience</a></li>
                <li className=' hover:underline hover:decoration-blue-700 hover:decoration-solid hover:underline-offset-8  hover:decoration-2 text-1xl text-zinc-100'>
                <a href="#activities">Activities</a></li>
                <li className=' hover:underline hover:decoration-blue-700 hover:decoration-solid hover:underline-offset-8  hover:decoration-2text-1xl text-zinc-100'>
                <a href="#works">Works</a></li>
             
                </ul>             
            </nav>
            <div className='  pe-12'>
                  <button className=' justify-items-end h-10   w-36 ring-2 rounded-full border-black border-y-8 ring-blue-700 mix-blend-normal  text-1xl text-blue-700'>Contact Me</button>
            </div>
               
            </div>
            
            
        </header>
        

    );
}
export default Heading