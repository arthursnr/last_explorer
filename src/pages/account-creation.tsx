import { useState } from 'react';
import { App } from '../app';

export function AccountCreation() {
    const [status, setStatus] = useState<string>('creating'); // Inicializar como 'creating' para mostrar o formulário de criação de conta

    const handleCreateAccount = () => {
        // Alterar o estado para 'created' quando a conta for criada
        setStatus('created');
    }

    // Renderizar a segunda página se a conta foi criada
    if (status === 'created') {
        return <App />;
    }

    // Renderizar o formulário de criação de conta se a conta ainda não foi criada
    return (
        <div className='pt-40 px-16 bg-black w-screen h-screen'>
            <div className='pb-20'>
                <h1 className='flex text-4xl self-center text-white gap-2.5'>
                    <img src="src/assets/image.png" alt="logo" className='size-11' />
                    food explorer
                </h1>
            </div>

            <form action="post" className='flex flex-col gap-8 w-full'>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="name" className='text-white opacity-75'>Seu nome</label>
                    <input type="text" name="name" id="" placeholder='Exemplo: Maria da Silva' className='bg-cyan-950 rounded-lg px-3.5 py-3 text-white opacity-60' />
                </div>

                <div className='flex flex-col gap-2'>
                    <label htmlFor="email" className='text-white opacity-75'>Email</label>
                    <input type="email" name="email" placeholder='Exemplo: exemplo@exemplo.com.br' className='bg-cyan-950 rounded-lg px-3.5 py-3 text-white opacity-60' />
                </div>

                <div className='flex flex-col gap-2'>
                    <label htmlFor="password" className='text-white opacity-75'>Senha</label>
                    <input type="password" id="password" name="password" placeholder='No mínimo 6 caracteres' className='bg-cyan-950 rounded-lg px-3.5 py-3 text-white opacity-60' />
                </div>

                <div>
                    <button onClick={handleCreateAccount} type="button" className='text-white text-base font-medium py-3 px-8 w-full rounded bg-red-900'>Criar conta</button>
                </div>
                
                <div className='flex justify-center'>
                    <button onClick={handleCreateAccount} type="button" className='text-white text-base font-medium'>Já tenho uma conta</button>
                </div>

            </form>
        </div>
    );
}