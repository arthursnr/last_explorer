import { useState } from "react";
import { AdminPage } from "./adminPage";
import { App } from "../../app";
import { NewDish } from "./newdish";

export function Search() {
    const [home, setHome] = useState(false);
    const [logOut, setLougOut] = useState(false);
    const [newDish, setNewDish] = useState(false);

    if (home) {
        return <AdminPage />;
    }

    if (logOut) {
        return <App />;
    }
    if (newDish) {
        return <NewDish />;
    }

    return (
        <div className='bg-black min-w-screen min-h-screen'>
            <div className="bg-slate-950 w-screen h-28">
                <header className="flex justify-between items-center pt-14 pb-6 px-7 w-full gap-4">
                    <button
                        type="button"
                        onClick={() => setHome(true)}
                        className="text-white flex gap-4 text-xl items-center">
                        <img src="src/assets/closebutton.svg" alt="" className="h-5 w-6" />
                        Menu
                    </button>
                </header>
            </div>

            <div className="pt-9 px-7 pb-3 flex flex-col gap-9">
                <form action="">
                    <input
                        type="search"
                        name="search"
                        placeholder="Busque por pratos ou ingredientes"
                        className="bg-cyan-950 rounded-lg px-3.5 py-3 text-white opacity-60 w-full"
                    />
                </form>
                <div className="text-white flex flex-col lead">
                    <button 
                    className="p-2.5 border-b border-gray-900 flex justify-start items-start gap-2.5 w-full text-zinc-200 text-2xl font-light leading-[33.60px]"
                    type="button"
                    onClick={() => setNewDish(true)}> Novo prato</button>
                    <button 
                    className="p-2.5 border-b border-gray-900 flex justify-start items-start gap-2.5 w-full text-zinc-200 text-2xl font-light leading-[33.60px]"
                    type="button"
                    onClick={() => setLougOut(true)}>Sair</button>
                </div>

            </div>

            <div className="bg-slate-950 w-screen flex items-center justify-center">
                <footer className="py-6 px-7 bg-slate-950 flex justify-center items-center fixed bottom-0 w-full">
                    <ul className="text-white flex items-center gap-2">
                        <img src="src/assets/polygon.svg" alt="Logo" />
                        <p className="text-gray-600 text-base font-bold text-left w-[114px]">food explorer</p>
                        <p className="text-right text-orange-50 text-xs font-normal w-[222px]">© 2024 - Todos os direitos reservados.</p>
                    </ul>
                </footer>
            </div>
        </div>
    )
}
