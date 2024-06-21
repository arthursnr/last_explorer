export function MealsPage() {
    return (
        <div>
            <div className="flex gap-4 overflow-x-auto">
                <div className="relative p-6 border border-black flex flex-col justify-center items-center gap-3">
                    <button onClick={() => console.log('Editar')}>Editar</button>
                    <div className="w-22 h-22 justify-center items-center inline-flex">
                        <img src="src/assets/Mask group.png" alt="Imagem de Salada Ravanello" className="w-22 h-22 justify-center items-center inline-flex" />
                    </div>
                    <div className="self-stretch text-center text-zinc-200 text-sm font-medium leading-normal">
                        Salada Ravanello &gt;
                    </div>
                    <div className="text-center text-cyan-300 text-base font-normal leading-none">
                        R$ 49,79
                    </div>
                </div>
                <div className="p-6 border border-black flex-col justify-center items-center gap-3 inline-flex">
                    <div className="size-[88px] justify-center items-center inline-flex">
                        <img src="src/assets/Mask group.png" alt="Imagem de Salada Ravanello" className="size-[88px] justify-center items-center inline-flex" />
                    </div>
                    <div className="self-stretch text-center text-zinc-200 text-sm font-medium leading-normal">
                        Salada Ravanello &gt;
                    </div>
                    <div className="text-center text-cyan-300 text-base font-normal leading-none">
                        R$ 49,79
                    </div>
                </div>
                <div className="p-6 border border-black flex-col justify-center items-center gap-3 inline-flex">
                    <div className="size-[88px] justify-center items-center inline-flex">
                        <img src="src/assets/Mask group.png" alt="Imagem de Salada Ravanello" className="size-[88px] justify-center items-center inline-flex" />
                    </div>
                    <div className="self-stretch text-center text-zinc-200 text-sm font-medium leading-normal">
                        Salada Ravanello &gt;
                    </div>
                    <div className="text-center text-cyan-300 text-base font-normal leading-none">
                        R$ 49,79
                    </div>
                </div>
                <div className="p-6 border border-black flex-col justify-center items-center gap-3 inline-flex">
                    <div className="size-[88px] justify-center items-center inline-flex">
                        <img src="src/assets/Mask group.png" alt="Imagem de Salada Ravanello" className="size-[88px] justify-center items-center inline-flex" />
                    </div>
                    <div className="self-stretch text-center text-zinc-200 text-sm font-medium leading-normal">
                        Salada Ravanello &gt;
                    </div>
                    <div className="text-center text-cyan-300 text-base font-normal leading-none">
                        R$ 49,79
                    </div>
                </div>
            </div>
        </div>
    );
}