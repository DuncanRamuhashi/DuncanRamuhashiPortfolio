

function ContactPage(){
     return(
        <div className='flex items-center justify-center h-1/2 m-100 space-x-20   bg-black shadow-lg '>
            <div className='flex flex-col space-y-7 self-center py-10  '  > 
                  <h1 className=" text-blue-700"> Contact Me!</h1>
                  <h1 className=" text-blue-700 text-blue-700 justify-center"> Mail</h1>
                  <h1 className="text-stone-100 "> sfsgfgf@gmail.com </h1>
                  <h1 className=" text-blue-700 text-blue-700 justify-center"> Phone</h1>
                  <h1 className="text-stone-100 "> +27 6769 31862 </h1>
                  <h1 className=" text-blue-700 text-blue-700 justify-center"> Location</h1>
                  <h1 className="text-stone-100 "> Soweto,Gauteng,Johannesburg </h1>
                  <h1 className="text-stone-100 "> git link, linkedin link </h1>   
        </div>
        <div className='flex flex-col space-y-7 self-center py-10  '  > 
                    <textarea className=' px-8 h-70 w-96 bg-white '>Name </textarea>
                     <textarea className=' px-8 h-70 w-96 bg-white '>Email </textarea>
                   <textarea className=' px-8 h-70 w-96 bg-white '>Message </textarea>   
       
                   <button className='self-center bg-gray-100 h-10 w-40 outline-black ring ring-slate-950' href="#works" >SUBMIT</button>     
        </div>
         
        
     </div>
     );
}

export default ContactPage