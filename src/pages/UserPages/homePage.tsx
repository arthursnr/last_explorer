

export function HomePage() {


    return (
        <div className='  bg-black w-screen h-screen'>
            <div className=" bg-slate-900 w-screen h-28">
                <header className="flex justify-center pt-14 pb-6">
                    <ul className="flex flex-row text-white gap-4">
                        <button>
                            Buscar
                        </button>

                        <div className="flex justify-center items-start ">
                            <h1 className='flex text-xl self-center text-white gap-2 '>
                                <img src="src/assets/image.png" alt="logo" className='size-6' />
                                food explorer
                            </h1>
                        </div>

                        <button>
                            Pedidos
                        </button>

                    </ul>
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