


const Main = () => {
  return (
    <div className="main relative top-0 right-0">
        <div className="Unlimited ">
            <div className="text-white">
                <p className=" text-2xl md:text-4xl text-center lg:text-5xl font-black">Unlimited movies, TV</p>
                <p className="text-xl md:text-3xl lg:text-5xl font-black text-center">shows, and more.</p>
                <p className="text-center">Starts at ₹149. Cancel at any time.</p>
                <p className="text-center mt-6">Ready to watch? Enter your email to create or restart your</p>
                <p className="text-center">membership.</p>
            </div>
         <form className="text-center flex justify-center mt-4 ">
          <input
            type="text"
            className="mr-5 text-gray-400 rounded-md border-1 pl-2 w-70 border-gray-400 "
            placeholder="Email Address"
          ></input>
          <div className="flex justify-center bg-red-600 hover:bg-red-700 rounded-md w-30">
            <button className="text-white pb-2.5 pl-1 pt-1.5  cursor-pointer  ">
              Get Started{" "}
            </button>
            <span className="material-symbols-outlined pt-2 cursor-pointer text-white ">
              arrow_forward_ios
            </span>
          </div>
        </form>
      

        </div>
    </div>
  )
}

export default Main
       