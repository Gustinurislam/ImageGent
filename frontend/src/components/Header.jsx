import { ArrowLongRightIcon } from '@heroicons/react/24/outline'

function MyComponent() {
    return (
        <div>
            <BeakerIcon className="h-6 w-6 text-blue-500" />
            <p>...</p>
        </div>
    )
}

const Header = () => {
    return (
        <div className="bg-gradient-to-r from-[#97d9e1] to-[#d9afd9]">
            {/* Container  */}
            <div className="container mx-auto max-w-5xl px-2 py-6">
                {/* logo */}
                <p className="block font-bold text-xl font-opensans">Genie<span className="text-primary">ART</span></p>
                {/* Tagline  */}
                <div className="mt-14">
                    <h2 className="font-bold text-xl max-w-xs mb-1">Unleash the power of AI to create stunning images.</h2>
                    <p className="font-light opacity-80">Created with AI-powered image generation technology.</p>

                    {/* Form  */}
                    <form className="relative my-8 bg-red-500 max-w-md">
                        <input className="indent-2 py-4 pr-[4.5rem] rounded-sm bg-gray-50 w-full md:max-w-md focus:ring-primary outline-none focus:ring-1" placeholder="Unleash the power of AI to create" type="text" />
                        <button className="absolute bottom-2.5 right-2.5 bg-primary text-white px-2 py-2 rounded-sm text-sm">
                            <ArrowLongRightIcon className='h-6' />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Header
