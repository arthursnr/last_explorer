import React, { useState } from "react";
import { Search } from "./search";
import { AdminPage } from "./adminPage";

export function NewDish() {
    const [moreOptions, setMoreOptions] = useState(false);
    const [search, setSearch] = useState(false);
    const [dishIngredients, setDishIngredients] = useState<string[]>([]);
    const [currentIngredient, setCurrentIngredient] = useState<string>('');
    const [showAddIngredient, setShowAddIngredient] = useState(false);
    const [value, setValue] = useState<string>("");

    const handleAddIngredient = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            if (currentIngredient.trim()) {
                setDishIngredients([...dishIngredients, currentIngredient.trim()]);
                setCurrentIngredient('');
                setShowAddIngredient(false);
            }
        }
    };

    const handleRemoveIngredient = (index: number) => {
        const newIngredients = [...dishIngredients];
        newIngredients.splice(index, 1);
        setDishIngredients(newIngredients);
    };

    const toggleAddIngredient = () => {
        setShowAddIngredient(!showAddIngredient);
    };

    const formatarMoeda = (valor: string): string => {
        valor = valor.replace(/\D/g, "");
        const numero = parseFloat(valor) / 100;
        const valorFormatado = numero.toFixed(2);
        const valorFinal = valorFormatado.replace(".", ",");
        return "R$ " + valorFinal;
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const valorDigitado = event.target.value;
        const valorFormatado = formatarMoeda(valorDigitado);
        setValue(valorFormatado);
    };

    if (moreOptions) {
        return <AdminPage />;
    }

    if (search) {
        return <Search />;
    }

    return (
        <div className="bg-black min-w-screen min-h-screen">
            <div className="bg-slate-950 min-w-screen h-28">
                <header className="flex justify-between items-center pt-14 pb-6 px-7 w-screen gap-4">
                    <button
                        type="button"
                        onClick={() => setMoreOptions(true)}>
                        <img src="src/assets/more.svg" alt="" className="h-5 w-6" />
                    </button>
                    <ul className="flex-grow flex flex-row justify-center text-white gap-4">
                        <div className="flex text-xl text-white justify-center items-center gap-2">
                            <img src="src/assets/image.png" alt="logo" className="size-6" />
                            <h1 className="font-bold">
                                food explorer
                            </h1>
                            <p className="text-cyan-300 text-xs font-normal leading-tight">admin</p>
                        </div>
                    </ul>
                </header>
            </div>

            <div className="text-white pt-2.5 px-8 pb-36 gap-6 flex flex-col justify-start items-start w-screen">
                <button className="text-white"
                    type="button"
                    onClick={() => setSearch(true)}>&lt; voltar</button>
                <h1>Novo prato</h1>
                <form action="" className="text-white gap-6 flex flex-col justify-start items-start w-full">
                    <fieldset className="flex flex-col gap-4 w-full">
                        <label htmlFor="image">Imagem do prato</label>
                        <div className="w-full py-3 px-8 bg-slate-900 rounded-lg">
                            <input type="file" id="image" name="image" accept="image/*" className="hidden" />
                            <label htmlFor="image" className="flex items-center gap-2 cursor-pointer w-full">
                                <img src="src/assets/upload.svg" alt="Upload" />
                                <span>Selecione imagem</span>
                            </label>
                        </div>
                    </fieldset>

                    <fieldset className="flex flex-col gap-4 w-full">
                        <label htmlFor="mealName">Nome</label>
                        <div>
                            <input type="text" id="mealName" name="mealName" placeholder="Ex.: Salada Ceasar" className="w-full py-3 px-8 bg-slate-900 rounded-lg" />
                        </div>
                    </fieldset>

                    <fieldset className="flex flex-col gap-4 w-full">
                        <label htmlFor="option">Categoria</label>
                        <div>
                            <select name="option" id="option" className="w-full py-3 px-8 bg-slate-900 rounded-lg">
                                <option value="">Selecione...</option>
                                <option value="option1">Refeições</option>
                                <option value="option2">Pratos principais</option>
                                <option value="option3">Pratos principais</option>
                            </select>
                        </div>
                    </fieldset>

                    <fieldset className="flex flex-col gap-4 w-full">
                        <label>Ingredientes do prato</label>
                        <div className="flex flex-wrap gap-2 bg-slate-900 p-4 rounded-lg">
                            {dishIngredients.map((ingredient, index) => (
                                <div key={index} className="px-4 py-2 bg-slate-700 rounded-xl">
                                    {ingredient}
                                    <button type="button" onClick={() => handleRemoveIngredient(index)} className="ml-2 text-white">x</button>
                                </div>
                            ))}
                            {!showAddIngredient && (
                                <button
                                    type="button"
                                    onClick={toggleAddIngredient}
                                    className="border-dashed border border-white text-white px-4 py-2 rounded-xl"
                                >
                                    Adicionar +
                                </button>
                            )}
                            {showAddIngredient && (
                                <div className="flex items-center gap-2">
                                    <input
                                        type="text"
                                        id="ingredient"
                                        name="ingredient"
                                        value={currentIngredient}
                                        onChange={(e) => setCurrentIngredient(e.target.value)}
                                        onKeyDown={handleAddIngredient}
                                        placeholder="Digite um ingrediente e aperte Enter"
                                        className="flex-1 py-3 px-8 bg-slate-900 rounded-lg"
                                    />
                                    <button
                                        type="button"
                                        onClick={toggleAddIngredient}
                                        className="border-dashed border border-white text-white px-4 py-2 rounded-xl"
                                    >
                                        Cancelar
                                    </button>
                                </div>
                            )}
                        </div>
                    </fieldset>

                    <fieldset className="flex flex-col gap-4 w-full">
                        <label htmlFor="price">Preço</label>
                        <input
                            type="text"
                            id="valor"
                            name="valor"
                            value={value}
                            onChange={handleChange}
                            placeholder="R$ 00,00"
                            className="w-full py-3 px-8 bg-slate-900 rounded-lg"
                        />
                    </fieldset>

                    <fieldset className="flex flex-col gap-4 w-full justify-start align-text-top">
                        <label htmlFor="description">Descrição</label>
                        <textarea
                            name="description"
                            id="description"
                            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                            className="h-[172px] w-full p-3.5 bg-slate-900 rounded-lg"
                        ></textarea>
                    </fieldset>

                    <fieldset className=" w-full">
                        <button className=" w-full h-12 px-8 py-3 opacity-80 bg-red-900 rounded-[5px] justify-center items-center">
                            Salvar alterações
                        </button>
                    </fieldset>
                </form>
            </div>

            <footer className="py-6 px-7 bg-slate-950 flex justify-center items-center fixed bottom-0 w-full">
                <ul className="text-white flex items-center gap-2">
                    <img src="src/assets/polygon.svg" alt="Logo" />
                    <p className="text-gray-600 text-base font-bold text-left w-[114px]">food explorer</p>
                    <p className="text-right text-orange-50 text-xs font-normal w-[222px]">© 2024 - Todos os direitos reservados.</p>
                </ul>
            </footer>
        </div>
    );
}