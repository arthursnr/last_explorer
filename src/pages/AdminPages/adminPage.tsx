import { MealsPage } from "./mealsPage";


export function AdminPage() {

    return (
        <div className='bg-black min-w-screen min-h-screen'>
            <div className="bg-slate-950 w-screen h-28">
                <header className="flex justify-between items-center pt-14 pb-6 px-7 w-screen gap-4">
                    <button>
                        <img src="src/assets/more.svg" alt="" className="h-5 w-6" />
                    </button>
                    <ul className="flex-grow flex flex-row justify-center text-white gap-4">
                        <div className="flex text-xl text-white justify-center items-center gap-2">
                            <img src="src/assets/image.png" alt="logo" className='size-6' />
                            <h1 className='font-bold'>
                                food explorer
                            </h1>
                            <p className="text-cyan-300 text-xs font-normal leading-tight">admin</p>
                        </div>
                    </ul>
                </header>
            </div>

            <div className="relative flex justify-center mt-11 mr-4 ml-7 mb-16 rounded-sm bg-gradient-to-b from-slate-900/90 to-slate-950 h-[120px]">
                <img src="src/assets/image1.png" className="absolute left-[-30px] top-[-30px] z-10 h-[149px] w-[191px]" />
                <div className="text-white ml-36 mt-9 mb-5 self-center">
                    <h2>Sabores inigualáveis</h2>
                    <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
                </div>
            </div>
            <div className="ml-6">
                <div className="flex flex-col gap-6 text-white h-[340px] min-w-screen">
                    <h2>Refeições</h2>
                    <div>
                        <MealsPage />
                    </div>
                </div>

                <div className="flex flex-col gap-6 text-white h-[340px]">
                    <h2>Pratos Principais</h2>
                    <div>
                        <div>PRODUTO 1</div>
                        <div>PRODUTO 2</div>
                    </div>
                </div>

                <div className="flex flex-col gap-6 text-white h-[340px]">
                    <h2>Pratos Principais</h2>
                    <div>
                        <div>PRODUTO 1</div>
                        <div>PRODUTO 2</div>
                    </div>
                </div>
            </div>

            <div className="bg-slate-950 w-screen flex items-center justify-center">
                <footer className="py-6 bg-slate-950 flex justify-center items-center fixed bottom-0">
                    <ul className="text-white flex items-center gap-2">
                        <img src="src/assets/Polygon 1 (1).png" alt="Logo" className="mb-2" />
                        <p>food explorer</p>
                        <p>© 2024 - Todos os direitos reservados.</p>
                    </ul>
                </footer>
            </div>
        </div>
    )
}