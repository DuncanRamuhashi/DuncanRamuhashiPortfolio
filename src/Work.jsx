import pro1 from './assets/pro1.jpg'
import pro2 from './assets/pro2.jpg'
import pro3 from './assets/pro3.jpg'
import jjk from './assets/jjk.jpg'
import iSql from './assets/iSql.png'
import iReact from './assets/iReact.png'
import iMobile from './assets/iMobile.png'
import iJS from './assets/iJS.png'
import iJava from './assets/iJava.png'
import iHtml from './assets/iHtml.png'
import iCss  from './assets/iCss.png'
import iCshap from './assets/iCshap.png'
import iAsse from './assets/iAsse.jpg'
import iDot from './assets/iDot.jpg'
import socGit from './assets/socGit.png'
import React from 'react';
import { useNavigate } from 'react-router-dom';


 function  Work(){      
   const navigate  =  useNavigate();

   const goToProjects = () => {
    navigate('/projects');
   };
    return(
      <div className="flex items-center h-screen w-screen bg-black justify-center"> 
    
      <div className="space-y-8  bg-black p-6 border-2 border-black  shadow-lg items-center justify-center">
      <div>

                
                <div className="flex   items-center justify-center">
<div className="space-y-8 bg-black  p-6 border-2 border-black rounded-md shadow-lg ">
<div className="space-y-4 ">
<h1 className="text-blue-700 text-center text-4xl font-bold font-mono justify-center">Portfolio Projects</h1>
<h1 className="text-zinc-400  text-xl font-mono  text-center">
 Here are some of the projects
</h1>
</div>


<div className="  flex space-x-4 p-12  " >
<div class="flex space-x-4 justify-center flex-row ">


     <div className="rounded-lg snap-start flex-shrink-0 space-y-2 border-8 border-zinc-800 px-8 py-8 invisible md:visible">
        <a href="https://assignment-1-css-core-concepts-4dr207ccv.vercel.app/" target="_blank">
          <img src={pro1} alt="Image 1" className="w-64 h-64 object-cover rounded ring-2 ring-blue-900" />
        </a>
       
        <div className='flex flex-row '>
        <h1 className="text-zinc-400  text-xl font-mono justify-center text-center"> Dronoticz 1</h1> 
        <a className='ml-28' href="https://github.com/DuncanRamuhashi/Assignment-1-CSS-Core-Concepts/tree/main" target="_blank">
                      <img src={socGit} alt="link" className="w-7 h-7 object-cover " />
                   </a>
        </div>
        <div className='flex  '>
        <h1 className="text-zinc-600  text-sm font-mono justify-center text-center"> To shape the future.</h1>
        </div>
         
        <div className=" grid grid-cols-4 justify-center gap-y-4   ">
                  <a href="https://www.w3schools.com/html/html_intro.asp" target="_blank">
                      <img src={iHtml} alt="html" className="w-8 h-8 object-cover" />
                   </a>
                   <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">
                      <img src={iCss} alt="css" className="w-8 h-8object-cover" />
                   </a>
                   <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
                      <img src={iJS} alt="js" className="w-8 h-8 object-cover" />
                   </a>
                   <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
                      <img src={iReact} alt="js" className="w-8 h-8 object-cover" />
                   </a>
      </div>
      </div>

      <div className="rounded-lg snap-start flex-shrink-0 space-y-2 border-8 border-zinc-800 px-8 py-8 ">
        
      <a href="https://assignment-1-css-core-concepts-4dr207ccv.vercel.app/" target="_blank">
          <img src={pro2} alt="Image 2" className="w-64 h-64 object-cover rounded ring-2 ring-blue-900" />
        </a>
        <div className='flex flex-row '>
        <h1 className="text-zinc-400  text-xl font-mono   "> Dronoticz 2 </h1> 
        <a className='ml-28' href="https://github.com/DuncanRamuhashi/Assignment-1-CSS-Core-Concepts/tree/main" target="_blank">
                      <img src={socGit} alt="link" className="w-7 h-7 object-cover " />
                   </a>
        </div>
        
        <div className='flex  '>
        <h1 className="text-zinc-600  text-sm font-mono justify-center text-center"> Revolutionize industries.</h1>
        
        </div>
        <div className=" grid grid-cols-4 justify-center gap-y-4  ">
                  <a href="https://docs.oracle.com/en/java/" target="_blank">
                      <img src={iJava} alt="java" className="w-8 h-8 object-cover" />
                   </a>
                   <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">
                      <img src={iCss} alt="css" className="w-8 h-8object-cover" />
                   </a>
                   <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
                      <img src={iJS} alt="js" className="w-8 h-8 object-cover" />
                   </a>
                   <a href="https://www.w3schools.com/html/html_intro.asp" target="_blank">
                      <img src={iHtml} alt="html" className="w-8 h-8 object-cover" />
                   </a>
      </div>
      </div>

             <div className="rounded-lg snap-start flex-shrink-0 space-y-2 border-8 border-zinc-800 px-8 py-8 invisible md:visible">
        
      <a href="https://assignment-1-css-core-concepts-4dr207ccv.vercel.app/" target="_blank">
          <img src={pro3} alt="Image 2" className="w-64 h-64 object-cover rounded ring-2 ring-blue-900" />
        </a>
        
               <div className='flex flex-row '>
               <h1 className="text-zinc-400  text-xl font-mono justify-center text-center "> Dronoticz 3 </h1> 
        <a className='ml-28' href="https://github.com/DuncanRamuhashi/Assignment-1-CSS-Core-Concepts/tree/main" target="_blank">
                      <img src={socGit} alt="link" className="w-7 h-7 object-cover " />
                   </a>
        </div>
        <div className='flex  '>
        <h1 className="text-zinc-600  text-sm font-mono justify-center text-center"> We unlock new frontiers.</h1>
        
        </div>
        <div className=" grid grid-cols-4 justify-center gap-y-4  ">
                  <a href="https://docs.oracle.com/en/java/" target="_blank">
                      <img src={iSql} alt="java" className="w-8 h-8 object-cover" />
                   </a>
                   <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">
                      <img src={iCss} alt="css" className="w-8 h-8object-cover" />
                   </a>

                   <a href="https://www.w3schools.com/html/html_intro.asp" target="_blank">
                      <img src={iHtml} alt="html" className="w-8 h-8 object-cover" />
                   </a>
      </div>
      </div>
</div>
</div>
    <div className="flex items-center justify-center">
      <a onClick={goToProjects}>
      <button  className=' h-10  w-36 ring-2 rounded-full border-black border-y-8 ring-blue-700 mix-blend-normal  text-1xl text-blue-700'>See More</button>
      </a>
                 
     </div>
</div>
</div>


               
          </div>
    </div>
   
</div>
    );
}

export default Work