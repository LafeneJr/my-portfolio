import { useState } from "react"
import { Links } from "../constants/Index"
import { RiCloseFill, RiMenu3Fill } from "react-icons/ri"



export const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false)

    const handleClick = () => {
        setMenuOpen(false)
    }

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
        <div className="flex justify-between items-center max-w-6xl mx-auto md:my-2 bg-stone-950/30 p-4 md:rounded-xl backdrop-blur-lg">
            <div className="text-white font-semibold text-xl uppercase tracking-wider">
                <a href="/">
                    M~A~L
                </a>
            </div>

            <div className="hidden md:flex space-x-6">
                {Links.map((links, index) => (
                    <a href={links.href} key={index} className="text-white hover:text-stone-400 transition duration-300">
                        {links.label}
                    </a>
                ))}
            </div>

            <div className="md:hidden">
                <button onClick={() => setMenuOpen(!menuOpen)}
                className="text-white focus:outline-none" aria-label={menuOpen ? "Close menu" : "Open menu"}>
                    {menuOpen ? (
                        <RiCloseFill className="w-6 h-6" />
                    ) : (
                        <RiMenu3Fill className="w-6 h-6" />
                    )}
                </button>
            </div>
        </div>

        {menuOpen && (
            <div className="md:hidden p-3 bg-stone-950/30 backdrop-blur-lg rounded-xl flex flex-col space-x-4 max-w-6xl mx-auto">
                {Links.map((links, index) => (
                    <a href={links.href} key={index} className=" py-3 text-white hover:text-stone-400 transition duration-300" onClick={handleClick}>
                        {links.label}
                    </a>
                ))}
            </div>
        )}
    </nav>
  )
}
