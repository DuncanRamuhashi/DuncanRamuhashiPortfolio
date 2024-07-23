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
import myPhoto from './assets/myPhoto.jpg';
function AboutPage(){
        
    return( 
    
    <div className="flex h-screen w-screen items-center justify-center"> 
    
        <div className="space-y-8 h-screen w-screen bg-black p-6 border-2 border-black   shadow-lg items-center justify-center">
        <div className="text-center" >
              <h1 className=" text-blue-700 text-4xl font-bold font-mono justify-center"> About Me</h1>
              <h1 className="text-stone-100 ">Greetings! I'm Duncan Ramuhashi, a dedicated Full Stack Developer. My expertise lies in 
                technogies, including HMTL,CSS, and JavaScript. Currently, I'm deeply engaged with React, Next.js, and Typescript. I maintain a 
                perpertual commitment to honing my skills and keeping pace with the ever-evolving landspae of industry trends
              </h1>
        </div>
        <div className="text-center" >
              <h1 className=" text-blue-700 text-blue-700 justify-center"> Education</h1>
              <h1 className="text-stone-100 "> 1. Pre-School: dfsdfsdf </h1>
              <h1 className="text-stone-100 "> 2. Primiry School: dgdfg </h1>
              <h1 className="text-stone-100 "> 3. High School: dgsfg </h1>
              <h1 className="text-stone-100 "> 4. Tetiary: dfsdfsdf </h1>
        </div>
        <div className="text-center" >
              <h1 className=" text-blue-700 text-blue-700 justify-center"> Skills </h1>
              <div className=" flex p-10  space-x-14  ">  
                         <img
                                             src={iSql}
                                             alt="sql"
                                             className=" h-12 w-12 object-cover"
                          />
                          <img
                                             src={iReact}
                                             alt="react"
                                             className=" h-12 w-12 object-cover"
                          />
                                                     <img
                                             src={iJava}
                                             alt="java"
                                             className=" h-12 w-12 object-cover"
                          />
                           <img
                                             src={iHtml}
                                             alt="Html"
                                             className=" h-12 w-12 object-cover"
                          />
                           <img
                                             src={iCss}
                                             alt="Css"
                                             className=" h-12 w-12 object-cover"
                          />
                           <img
                                             src={iCshap}
                                             alt="Cshap"
                                             className=" h-12 w-12 object-cover"
                          />
                          <img
                                             src={iDot}
                                             alt="net"
                                             className=" h-12 w-12 object-cover"
                          />
                        <img
                                             src={iMobile}
                                             alt="mobile"
                                             className=" h-12 w-12 object-cover"
                          />
                           <img
                                             src={iJS}
                                             alt="js"
                                             className=" h-12 w-12 object-cover"
                          />

                           <img
                                             src={iAsse}
                                             alt="Assemblyx86"
                                             className=" h-12 w-12 object-cover"
                          />
                    </div> 
        </div>
       </div>
     </div>    
    );

   

} 

export default AboutPage