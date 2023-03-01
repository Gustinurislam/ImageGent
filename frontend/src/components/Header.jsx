import { ArrowLongRightIcon, BeakerIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

const Header = ({ setListImages, setIsLoading }) => {
    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e) => setInputValue(e.target.value)

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            setIsLoading(true)
            const response = await fetch('http://localhost:5500/openai/images', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    prompt: inputValue
                })
            })
            const jsonData = await response.json();
            setListImages(jsonData.data)

        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="bg-gradient-to-r from-[#97d9e1] to-[#d9afd9]">
            {/* Container  */}
            <div className="container mx-auto max-w-5xl px-2 py-6">
                {/* logo */}
                <p className="font-bold text-3xl font-opensans flex items-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-white space-x-2 "><BeakerIcon className='w-14 mr-2 text-primary' /> Image <span className="text-primary">Generator</span></p>
                {/* Tagline  */}
                <div className="mt-14">
                    <h2 className="font-bold text-2xl max-w-sm mb-1 text-transparent bg-clip-text bg-gradient-to-tr from-primary to-black">Unleash the power of AI to create stunning images.</h2>
                    <p className="font-medium text-xl opacity-80 italic animate-pulse text-zinc-900">Created with AI-powered image generation technology.</p>

                    {/* Form  */}
                    <form className="relative my-8 max-w-md" onSubmit={handleSubmit}>
                        <input value={inputValue} onChange={handleInputChange} className=" bg-transparent border border-primary indent-2 py-4 pr-[4.5rem] rounded-sm text-primary placeholder-primary w-full md:max-w-md focus:ring-primary outline-none focus:ring-1" placeholder="Unleash the power of AI to create" type="text" />
                        <button type='submit' disabled={!inputValue} className="disabled:cursor-not-allowed absolute transform transition-all duration-150 active:scale-90 bottom-2.5 right-2.5 bg-primary text-white px-2 py-2 rounded-sm text-sm">
                            <ArrowLongRightIcon className='h-6' />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Header
