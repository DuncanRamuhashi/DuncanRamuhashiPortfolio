


function Heading(){



    return(
        <header className="bg-black">
        <div className="container mx-auto flex flex-wrap items-center justify-between py-4 px-4 md:px-0">
          <div className="flex items-center space-x-2">
            <h1 className="italic text-4xl font-bold font-mono text-blue-700">D</h1>
            <h1 className="italic text-4xl font-bold font-mono text-zinc-200">Ramuhashi.</h1>
          </div>
          <nav className="w-full md:w-auto flex items-center justify-between md:justify-center mt-4 md:mt-0 md:flex-grow md:space-x-8">
            <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 w-full md:w-auto">
              <li>
                <a className="text-gray-200 hover:text-blue-700" href="#AboutPage">About Me</a>
              </li>
              <li>
                <a className="text-gray-200 hover:text-blue-700" href="#ExWork">Experience</a>
              </li>
              <li>
                <a className="text-gray-200 hover:text-blue-700" href="#Activity">Activities</a>
              </li>
              <li>
                <a className="text-gray-200 hover:text-blue-700" href="#Work">Projects</a>
              </li>
            </ul>
            <a href="#ContactPage" className="block md:hidden">
              <button className="bg-blue-700 text-white px-4 py-2 rounded-lg">Contact Me</button>
            </a>
          </nav>
          <a href="#ContactPage" className="hidden md:block">
            <button className="bg-blue-700 text-white px-4 py-2 rounded-lg">Contact Me</button>
          </a>
        </div>
      </header>
      

    );
}
export default Heading