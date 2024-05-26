import { useState } from "preact/hooks"

export const ButtonLike = () => {
   
   const [isCliked, setClick] = useState(false)

    return (
    <button aria-label="give like" onClick={() => {setClick(!isCliked)}}>
        <svg xmlns="http://www.w3.org/2000/svg" 
        class={`stroke-current h-6 w-6 cursor-pointer btn-like xl:hover:stroke-neutral-400 transition-colors
        ${isCliked && "fill-[#d50daa] stroke-none"}`} 
        viewBox="0 0 24 24" 
        stroke-width="1.5" 
        fill="none" 
        stroke-linecap="round" 
        stroke-linejoin="round"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
        </svg>
    </button>
   ) 
}