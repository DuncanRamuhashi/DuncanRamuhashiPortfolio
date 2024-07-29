import myPhoto from './assets/myPhoto.jpg'
import helloPic from './assets/helloPic.png'
function MainPage(){

   return(

      <body>
      <div className="flex flex-col md:flex-row py-10 px-4 md:py-28 md:px-44 content-center">
        <div className="space-y-4 h-auto md:h-4/5 rounded-b bg-black p-6 border-2 border-black w-full md:w-1/2 rounded-md shadow-lg">
          <div className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2'>
            <h1 className='text-2xl md:text-4xl font-bold font-mono text-stone-100'>Hello There!</h1>
            <img
              src={helloPic}
              alt="Example Image"
              className="w-8 h-8 object-cover"
            />
          </div>
    
          <div className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4'>
            <h1 className="text-stone-100 md:text-blue-700 text-2xl md:text-4xl font-mono"> I'm </h1>
            <h1 className="text-blue-700 text-2xl md:text-4xl font-bold font-mono"> Duncan Ramuhashi</h1>
          </div>
    
          <h1 className="text-zinc-400 text-center md:text-justify">
            Welcome to my portfolio website! I am a Full-Stack Developer from Johannesburg. Thank you for visiting, and I hope you enjoy exploring my work.
          </h1>
    
          <img
            src={myPhoto}
            alt="Example Image"
            className="  w-92 h-72 md:w-64 md:h-64 object-cover"
          />
        </div>
      </div>
    </body>
    

   );
}

export default MainPage