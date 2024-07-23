import myPhoto from './assets/myPhoto.jpg'

function MainPage(){

   return(

       <body>

         <div className="space-y-4 h-4/5 rounded-b bg-black p-6 border-2 border-black w-1/2 rounded-md shadow-lg">
         <h1 className=' text-4xl font-bold font-mono text-stone-100 '>Hello There!</h1>
         <div>
             <h1 className="text-stone-100 text-blue-700"> I'm </h1>
            <h1 className=" text-blue-700">Duncan Ramuhashi</h1>
         </div>
          <h1 className="text-stone-100 text-justify text-center ">
          I am a Full-Stack Developer from Johannesburg. Welcome, noble guest, to my portfolio website. I thank thee for thy visit and hope thou dost find joy in exploring my humble work.
          </h1>
          <img
                                             src={myPhoto}
                                             alt="Example Image"
                                             className=" h-96 w-fit  object-cover"
                                          />
         </div>

       </body>
   );
}

export default MainPage