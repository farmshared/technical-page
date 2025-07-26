import { SearchIcon } from 'lucide-react'
import React from 'react'

interface ButtonSearchProps {
	customStyle?: string
	callback?: () => void
}

const ButtonSearch: React.FC<ButtonSearchProps> = ({ callback, customStyle }) => {
	return (
		<button onClick={callback} type='submit' className={`w-[3.75rem] border-r cursor-pointer border-borderBtn flex items-center justify-center ${customStyle}`}><SearchIcon width={17} height={16} /></button>
	)
}

export default ButtonSearch