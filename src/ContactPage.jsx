import soc1 from './assets/soc1.png'
import soc3 from './assets/soc3.png'
import soc4 from './assets/soc4.png'

function ContactPage(){
     return(
      <div className='flex flex-col  md:flex-row w-screen items-center justify-center h-auto m-0 p-4 sm:space-x-96 bg-black shadow-lg space-y-6'>
      <div className='flex flex-col  space-y-4 self-center py-10'>
        <h1 className="text-blue-700 font-bold text-2xl font-mono text-center">Contact Me!</h1>
        
        <h1 className="text-zinc-400 text-xl font-mono text-center">Mail</h1>
        <a href="mailto:duncanramohashi@gmail.com">
          <h1 className="text-stone-100 text-center">duncanramohashi@gmail.com</h1>
        </a>
        
        <h1 className="text-zinc-400 text-xl font-mono text-center">Phone</h1>
        <a href="tel:+27676931862">
          <h1 className="text-stone-100 text-center">+27 6769 31862</h1>
        </a>
        
        <h1 className="text-zinc-400 text-xl font-mono text-center">Location</h1>
        <h1 className="text-stone-100 text-center">Soweto, Gauteng, Johannesburg</h1>
        
        <div className="flex flex-row space-x-2 justify-center">
          <a href="https://github.com/DuncanRamuhashi" target="_blank" rel="noopener noreferrer">
            <img src={soc3} alt="github" className="w-10 h-10 object-cover" />
          </a>
          <a href="https://www.linkedin.com/in/duncan-ramuhashi-098949234/" target="_blank" rel="noopener noreferrer">
            <img src={soc1} alt="linkedin" className="w-10 h-10 object-cover" />
          </a>
          <a href="https://wa.me/message/B3X7ZQMIQUOTI1" target="_blank" rel="noopener noreferrer">
            <img src={soc4} alt="Whatsapp" className="w-10 h-10 object-cover" />
          </a>
        </div>
      </div>
    
      <div className='flex flex-col space-y-6 self-center py-10 w-full max-w-lg'>
        <input
          className='px-4 py-2 ring-2 ring-blue-700 w-full bg-white rounded-lg placeholder-zinc-400'
          placeholder="Name"
          required
        />
        <input
          className='px-4 py-2 w-full ring-2 ring-blue-700 bg-white rounded-lg placeholder-zinc-400'
          placeholder="Email"
          required
        />
        <input
          className='px-4 py-2 ring-2 ring-blue-700 w-full bg-white rounded-lg placeholder-zinc-400'
          placeholder="Message"
          required
        />
        
        <button className='h-10 w-full ring-2 rounded-lg border-black border-y-8 ring-blue-700 mix-blend-normal text-xl text-blue-700'>
          SUBMIT
        </button>
      </div>
    </div>
    
     );
}

export default ContactPage