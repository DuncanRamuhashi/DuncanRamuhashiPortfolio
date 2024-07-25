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
    
      <div  className="flex items-center justify-center h-screen w-screen  bg-black">
      <div className="text-center space-y-14 bg-black p-8 px-72 rounded   shadow ">
        <div className="mb-2">
              <h1 className=" pt-14 text-blue-700 text-4xl font-bold font-mono justify-center"> About Me</h1>
              <div className="  text-center text-justify shadow p-12  bg-black ">
                  <h1 className=" text-sm text-zinc-400 px-4  ">Greetings!, I am a dedicated Full Stack Developer. My expertise lies in 
                   technogies, including HMTL,CSS, and JavaScript. Currently, I'm deeply engaged with React, Next.js, and Typescript. I maintain a 
                   perpertual commitment to honing my skills and keeping pace with the ever-evolving landspae of industry trends.
                 </h1>
            <div className=" p-4 grid grid-cols-4 gap-4 space-x-4" >
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
              <h1 className="text-stone-100  "> Soweto,Johannesburg,South Africa </h1>
              </div>

              <div>
              <h1 className="text-zinc-400 "> Email</h1>
              <h1 className="text-stone-100 "> duncanramohashi@gmail.com </h1>
              </div>

              </div>
              <div className=" p-4 grid grid-cols-4 gap-4 space-x-4" >
              <div>
              <h1 className="text-zinc-400 "> Education </h1>
              <h1 className=" text-stone-100  "> BSc in Computer Science and Informatics </h1>
              </div>
              <div>
 
              <h1 className="text-zinc-400 "> Tertiary</h1>
              <h1 className="text-stone-100  "> University of Johanneburg</h1>
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

             <a   href="https://dev.mysql.com/doc/ " target="_blank">
             <img
                                             src={iSql}
                                             alt="sql"
                                             className="  h-14 w-14  object-fill"
                          />
                      </a>
                      <a href="https://react.dev/" target="_blank">
                      <img
                                             src={iReact}
                                             alt="react"
                                             className="  h-14 w-14  object-fill"
                          />
                      </a>
                      <a href="https://docs.oracle.com/en/java" target="_blank">
                      <img
                                             src={iJava}
                                             alt="java"
                                             className="  h-14 w-14  object-fill"
                          />
                      </a>
                      <a href="https://www.w3schools.com/html/html_intro.asp" target="_blank">
                      <img
                                             src={iHtml}
                                             alt="Html"
                                             className="  h-14 w-14  object-fill"
                          />
                      </a>                      
                      <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">
                      <img
                                             src={iCss}
                                             alt="Css"
                                             className="  h-14 w-14  object-fill"
                          />
                      </a>
                      <a href="https://learn.microsoft.com/en-us/dotnet/csharp/" target="_blank">
                      <img
                                             src={iCshap}
                                             alt="Cshap"
                                             className=" h-14 w-14  object-fill"
                          />
                      </a>
                      <a href="https://learn.microsoft.com/en-us/dotnet/" target="_blank">
                      <img
                                             src={iDot}
                                             alt="net"
                                             className="  h-14 w-14  object-fill"
                          />
                      </a>
                      <a href="https://learn.microsoft.com/en-us/dotnet/maui/?view=net-maui-8.0" target="_blank">
                      <img
                                             src={iMobile}
                                             alt="mobile"
                                             className="  h-14 w-14  object-fill"
                          />
                      </a>
                      <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
                      <img
                                             src={iJS}
                                             alt="js"
                                             className="  h-14 w-14  object-fill"
                          />
                      </a>
                           
                        <a href="https://docs.oracle.com/cd/E19253-01/817-5477/817-5477.pdf" target="_blank">
                        <img
                                             src={iAsse}
                                             alt="Assemblyx86"
                                             className=" h-14 w-14 object-fill"
                          />
                      </a>
                           
                    </div> 
        </div>
       </div>
     </div>    
    );

   

} 

export default AboutPage