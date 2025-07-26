import { FC } from 'react'

type InputType = 'text' | 'password' | 'email'

interface InputProps {
	customStyle?: string
	placeholder?: string
	type: InputType
	value?: string
	error?: boolean
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: FC<InputProps> = ({ placeholder, type, customStyle, value, error, onChange }) => {
	return (
		<input onChange={onChange} type={type} placeholder={placeholder} value={value} className={`outline-none bg-darkBgSecondary border ${error ? 'border-darkAccentRed' : 'border-darkBgBorder'}  placeholder:text-darkTextMuted rounded-lg p-5 text-white text-sm leading-4 ${customStyle}`} />
	)
}

export default Input