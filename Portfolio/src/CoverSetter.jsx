import myPhoto from './assets/myPhoto.jpg';
import Heading from './Heading';
import MainPage from './MainPage';
import newProf from './assets/newProf.jpg';
function CoverSetter(){
    return(
              
        <div className="flex  justify-center h-screen w-screen bg-zinc-950" >
            
            <div
                 className=" from-transparent  bg-center relative bg-cover h-screen w-screen bg-no-repeat"
                 style={{ backgroundImage: `url(${newProf})` }}
            >
                 
                 <Heading/>
                 <MainPage/>
           </div>
        </div>
       );
   

}

export default CoverSetter