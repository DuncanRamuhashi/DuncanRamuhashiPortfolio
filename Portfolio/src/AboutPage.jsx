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
    
      <div className="flex items-center justify-center h-screen w-screen  bg-black">
      <div className="text-center space-y-14 bg-black p-8 px-72 rounded   shadow ">
        <div className="mb-2">
              <h1 className=" pt-14 text-blue-700 text-4xl font-bold font-mono justify-center"> About Me</h1>
              <div className="  text-center text-justify shadow p-12  bg-black ">
                  <h1 className=" text-sm text-zinc-400 px-4  ">Greetings!, I am a dedicated Full Stack Developer. My expertise lies in 
                   technogies, including HMTL,CSS, and JavaScript. Currently, I'm deeply engaged with React, Next.js, and Typescript. I maintain a 
                   perpertual commitment to honing my skills and keeping pace with the ever-evolving landspae of industry trends.
                 </h1>
            <div className=" p-4 grid grid-cols-4 gap-4" >
              <div>
              <h1 className="text-zinc-400 "> Name </h1>
              <h1 className="text-stone-100 "> Duncan Ramuhashi</h1>
              </div>
              
              <div>
              <h1 className="text-zinc-400 "> Phone </h1>
              <h1 className="text-stone-100 "> +27 6769 31862 </h1>
              </div>

              <div>
              <h1 className="text-zinc-400 "> Address</h1>
              <h1 className="text-stone-100 pr-16 "> Soweto,Johannesburg,South Africa </h1>
              </div>

              <div>
              <h1 className="text-zinc-400 "> Email</h1>
              <h1 className="text-stone-100  pr-16"> duncanramohashi@gmail.com </h1>
              </div>
              <div>
              <h1 className="text-zinc-400 "> Education </h1>
              <h1 className=" text-stone-100 pr-16 "> BSc in Computer Science and Informatics </h1>
              </div>
              <div>
 
              <h1 className="text-zinc-400 "> Tertiary</h1>
              <h1 className="text-stone-100  pr-16"> University of Johanneburg</h1>
              </div>
              <div>
 
                  <h1 className="text-zinc-400 "> Years of Experience</h1>
                  <h1 className="text-stone-100  pr-16"> 01+</h1>
             </div>
             <div>
 
                <h1 className="text-zinc-400 "> Languages</h1>
                <h1 className="text-stone-100  pr-40"> English,Tshivenḓa</h1>
              </div>
  
        </div>
            </div>
              
        </div>
       
        <div className="text-center" >
              <h1 className=" text-blue-700 text-2xl font-bold font-mono justify-center"> Skills </h1>
              <div className="flex items-center justify-center p-10 space-x-14   ">  
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