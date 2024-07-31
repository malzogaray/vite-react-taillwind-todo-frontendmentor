import MoonIcon from "./components/icons/MoonIcon";


const App = () => {
  return  (  
    
    <div className="bg-[url('src/assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat min-h-screen ">
   

  <header className="container mx-auto px-4 pt-8">  
              <div className = "flex justify-between" >
              <h1 className="text-3x1 uppercase text-white font-semibold
              tracking-[0.3em] " > Todo </h1>
              <button> <MoonIcon className= "fill-red-400" /> </button>
              </div>
                    <form className="mt-8 py-4 px-4  bg-white rounded-md overflow-hidden  flex gap-4 items-center " >
                    <span className = "rounded-full border-2 w-5 h-5 inline-block" > </span>
                    <input 
                    type="text" 
                    placeholder="Create a new todo..."
                    className="w-full text-gray-400 outline-none"
                    
                    />

      </form>
      </header>

      <main className="container mx-auto px-4 mt-8 bg-white">
       <div className="bg-white rounded-md [&>article]:px-4 ">
       
        <article className="flex gap-4 py-4 border-b-gray-400 border-b px-4" >
                  <button className="inline-block h-5 w-5 rounded-full border-2 
                  flex-none " ></button> 
                  <p className="text-gray-600 grow">
                    Complete online JavaScript curse in bluuweb
                    </p>
                  <button className="flex-none"> 
                       <crossicon/>
                  </button>
         </article>

         <article className="flex gap-4 py-4 border-b-gray-400 border-b px-4" >
                  <button className="inline-block h-5 w-5 rounded-full border-2 
                  flex-none " ></button> 
                  <p className="text-gray-600 grow">
                    Complete online JavaScript curse in bluuweb
                    </p>
                  <button className="flex-none"> 
                       <crossicon/>
                  </button>
         </article>

         <article className="flex gap-4 py-4 border-b-gray-400 border-b px-4" >
                  <button className="inline-block h-5 w-5 rounded-full border-2 
                  flex-none " ></button> 
                  <p className="text-gray-600 grow">
                    Complete online JavaScript curse in bluuweb
                    </p>
                  <button className="flex-none"> 
                       <crossicon/>
                  </button>
         </article>
        

         <section className="py-4 px-4 flex justify-between" >
                  <span className="text-gray-400"> 5 item left</span>
                  <button className="text-gray-400"> Clear Complete </button>
         </section>
         </div>

         </main>

         <section className="container mx-auto px-4 mt-8"> 
          <div className="bg-white p-4 rounded-md flex justify-center gap-4">
                    <button className="text:text-blue-600">All</button>
                      <button className="hover:text-blue-600">Active</button>
                      <button className="hover:text-blue-600" >completed</button>

          </div>            
         </section>

                    <section className="text-center mt-8">drag an drop to reorder list</section>
  </div>
   
  );
  
};

export default App;