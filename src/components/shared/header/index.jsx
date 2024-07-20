import React from "react"

export default function Header() {
   
    return (
        <header className="fixed left-0 top-4 z-[50] text-black w-full translate-y-[-1rem] animate-fade-in border-b opacity-1 backdrop-blur-[12px] [--animation-delay:600ms] ">
            <div className="container flex h-[3.5rem] items-center justify-between">
                <a className="text-md flex items-center" href="/">GuardAMLBot</a>
                <div className="ml-auto flex h-full items-center">
                    <a className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 h-9 px-4 py-2 mr-6 text-sm" href="/#">Bize Katılın</a>
                </div>
                
            </div>
        </header>

    )
}