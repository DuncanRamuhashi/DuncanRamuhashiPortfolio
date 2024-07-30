import pro1 from './assets/pro1.jpg'
import pro2 from './assets/pro2.jpg'
import pro3 from './assets/pro3.jpg'
import pro4 from './assets/pro4.jpg'
import pro5 from './assets/pro5.jpg'
import pro6 from './assets/pro6.jpg'
import pro7 from './assets/pro7.jpg'
import pro8 from './assets/pro8.jpg'
import pro9 from './assets/pro9.jpg'

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

import FooterPage from './FooterPage'

function Projects(){
   const navigate = useNavigate();
    return(
      <div className="flex items-center  bg-black justify-center"> 
    
      <div className="space-y-8  bg-black p-6 border-2 border-black  shadow-lg items-center justify-center">
      <div>
      <button 
            className=" ml-8 bg-blue-700  text-white px-4 py-2 rounded" 
            onClick={() => navigate(-1)} 
          >
            Back
          </button>
                
                <div className="flex   items-center justify-center">
<div className="space-y-8 bg-black  p-6 border-2 border-black rounded-md shadow-lg ">
<div className="space-y-4 ">
<h1 className="text-blue-700 text-center text-4xl font-bold font-mono justify-center">Portfolio Projects</h1>
<h1 className="text-zinc-400  text-xl font-mono  text-center">
 All Projects
</h1>
</div>


<div className="  rounded-lg  snap-x  flex space-x-4 p-10  " >
<div class="flex flex-col  gap-y-8 md:grid md:grid-cols-3 md:gap-x-8">


     <div className="rounded-lg snap-start flex-shrink-0 space-y-2 border-8 border-zinc-800 px-8 py-8">
        <a href="https://assignment-1-css-core-concepts-4dr207ccv.vercel.app/" target="_blank">
          <img src={pro1} alt="Image 1" className="w-64 h-64 object-cover rounded ring-2 ring-blue-900" />
        </a>
       
        <div className='flex flex-row '>
        <h1 className="text-zinc-400  text-xl font-mono   "> Dronoticz 1</h1> 
        <a className='ml-8 md:ml-28' href="https://github.com/DuncanRamuhashi/Assignment-1-CSS-Core-Concepts/tree/main" target="_blank">
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

      <div className="rounded-lg snap-start flex-shrink-0 space-y-2 border-8 border-zinc-800 px-8 py-8">
        
      <a href="https://assignment-1-css-core-concepts-4dr207ccv.vercel.app/" target="_blank">
          <img src={pro2} alt="Image 2" className="w-64 h-64 object-cover rounded ring-2 ring-blue-900" />
        </a>
        <div className='flex flex-row '>
        <h1 className="text-zinc-400  text-xl font-mono   "> Dronoticz 2 </h1> 
        <a className=' ml-8 md:ml-28' href="https://github.com/DuncanRamuhashi/Assignment-1-CSS-Core-Concepts/tree/main" target="_blank">
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

             <div className="rounded-lg snap-start flex-shrink-0 space-y-2 border-8 border-zinc-800 px-8 py-8">
        
      <a href="https://assignment-1-css-core-concepts-4dr207ccv.vercel.app/" target="_blank">
          <img src={pro3} alt="Image 2" className="w-64 h-64 object-cover rounded ring-2 ring-blue-900" />
        </a>
        
               <div className='flex flex-row '>
               <h1 className="text-zinc-400  text-xl font-mono   "> Dronoticz 3 </h1> 
        <a className=' ml-8 md:ml-28' href="https://github.com/DuncanRamuhashi/Assignment-1-CSS-Core-Concepts/tree/main" target="_blank">
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


      <div className="rounded-lg snap-start flex-shrink-0 space-y-2 border-8 border-zinc-800 px-8 py-8">
        <a href="https://assignment-1-css-core-concepts-4dr207ccv.vercel.app/" target="_blank">
          <img src={pro4} alt="Image 1" className="w-64 h-64 object-cover rounded ring-2 ring-blue-900" />
        </a>
       
        <div className='flex flex-row '>
        <h1 className="text-zinc-400  text-xl font-mono   "> Dronoticz 4</h1> 
        <a className='ml-8 md:ml-28' href="https://github.com/DuncanRamuhashi/Assignment-1-CSS-Core-Concepts/tree/main" target="_blank">
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


      <div className="rounded-lg snap-start flex-shrink-0 space-y-2 border-8 border-zinc-800 px-8 py-8">
        <a href="https://assignment-1-css-core-concepts-4dr207ccv.vercel.app/" target="_blank">
          <img src={pro5} alt="Image 1" className="w-64 h-64 object-cover rounded ring-2 ring-blue-900" />
        </a>
       
        <div className='flex flex-row '>
        <h1 className="text-zinc-400  text-xl font-mono   "> Dronoticz 5</h1> 
        <a className='ml-8 md:ml-28' href="https://github.com/DuncanRamuhashi/Assignment-1-CSS-Core-Concepts/tree/main" target="_blank">
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

      <div className="rounded-lg snap-start flex-shrink-0 space-y-2 border-8 border-zinc-800 px-8 py-8">
        <a href="https://assignment-1-css-core-concepts-4dr207ccv.vercel.app/" target="_blank">
          <img src={pro6} alt="Image 1" className="w-64 h-64 object-cover rounded ring-2 ring-blue-900" />
        </a>
       
        <div className='flex flex-row '>
        <h1 className="text-zinc-400  text-xl font-mono   "> Dronoticz 6</h1> 
        <a className=' ml-8 md:ml-28' href="https://github.com/DuncanRamuhashi/Assignment-1-CSS-Core-Concepts/tree/main" target="_blank">
                      <img src={socGit} alt="link" className="w-7 h-7 object-cover " />
                   </a>
        </div>
        <div className='flex  '>
        <h1 className="text-zinc-600  text-sm font-mono justify-center text-center"> To shape the future.</h1>
        </div>
         
        <div className=" grid grid-cols-4 justify-center gap-y-4  ">
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
      <div className="rounded-lg snap-start flex-shrink-0 space-y-2 border-8 border-zinc-800 px-8 py-8">
        <a href="https://assignment-1-css-core-concepts-4dr207ccv.vercel.app/" target="_blank">
          <img src={pro7} alt="Image 1" className="w-64 h-64 object-cover rounded ring-2 ring-blue-900" />
        </a>
       
        <div className='flex flex-row '>
        <h1 className="text-zinc-400  text-xl font-mono   "> Dronoticz 7</h1> 
        <a className=' ml-8 md:ml-28' href="https://github.com/DuncanRamuhashi/Assignment-1-CSS-Core-Concepts/tree/main" target="_blank">
                      <img src={socGit} alt="link" className="w-7 h-7 object-cover " />
                   </a>
        </div>
        <div className='flex  '>
        <h1 className="text-zinc-600  text-sm font-mono justify-center text-center"> To shape the future.</h1>
        </div>
         
        <div className=" grid grid-cols-4 justify-center gap-y-4  ">
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
                   <a href="https://dev.mysql.com/doc/" target="_blank">
                      <img src={iSql} alt="js" className="w-8 h-8 object-cover" />
                   </a>
                   <a href="https://www.cs.virginia.edu/~evans/cs216/guides/x86.html" target="_blank">
                      <img src={iAsse} alt="js" className="w-8 h-8 object-cover" />
                   </a>
      </div>
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

export default Projects