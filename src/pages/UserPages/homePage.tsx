

export function HomePage() {


    return (
        <div className='  bg-black w-screen h-screen'>
            <div className=" bg-slate-900 w-screen h-28">
            <header className="flex justify-between items-center pt-14 pb-6 px-7 w-screen gap-4">
                    <button>
                        <img src="src/assets/more.svg" alt="more options" className="h-5 w-6" />
                    </button>
                    <ul className="flex-grow flex flex-row justify-center text-white gap-4">
                        <div className="flex text-xl text-white justify-center items-center gap-2">
                            <img src="src/assets/image.png" alt="logo" className='size-6' />
                            <h1 className='font-bold'>
                                food explorer
                            </h1>
                        </div>
                    </ul>
                    <button>
                        <img src="src/assets/search.svg" alt="search" className="h-5 w-6 text-white" />
                    </button>
                </header>

                <div className="flex justify-center mt-11 mr-4 ml-7 mb-16 rounded-sm bg-slate-900">
                    <img src="src\assets\image1.png" />
                    <div className="text-white">
                        <h2>Sabores inigualáveis</h2>
                        <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
                    </div>
                </div>
                <div>
                    <div className="text-white">
                        <h2>Refeições</h2>
                        <div>
                            <div>
                                //onde vai ficar as refeições cadastradas peço ADMIN!!!
                            </div>
                        </div>
                    </div>

                    <div className="text-white">
                        <h2>Pratos Principais</h2>
                        <div>//onde vai ficar as refeições cadastradas peço ADMIN!!!</div>
                    </div>

                    <div className="text-white">
                        <h2>Pratos Principais</h2>
                        <div>//onde vai ficar as refeições cadastradas peço ADMIN!!!</div>
                    </div>
                </div>
            </div>
        </div>
    )
}