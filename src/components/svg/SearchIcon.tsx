import React from 'react'

interface SearchIconProps {
	customStyle?: string
	width?: number
	height?: number
}

const SearchIcon: React.FC<SearchIconProps> = ({ customStyle, height, width }) => {
	return (
		<svg className={`${customStyle}`} width={width} height={height} viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M14.5 14L12.1667 11.6667M13.8333 7.66667C13.8333 10.7963 11.2963 13.3333 8.16667 13.3333C5.03705 13.3333 2.5 10.7963 2.5 7.66667C2.5 4.53705 5.03705 2 8.16667 2C11.2963 2 13.8333 4.53705 13.8333 7.66667Z" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
		</svg>

	)
}

export default SearchIcon