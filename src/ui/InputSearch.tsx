import { useDebounce } from '@/hooks/useDebounce';
import React, { useEffect, useState } from 'react';
import ButtonSearch from './ButtonSearch';

interface SearchInputProps {
	placeholder?: string;
	disabled?: boolean;
	className?: string;
	error?: string;
	onSearch?: (value: string) => void;
	debounceMs?: number;
}

export const SearchInput: React.FC<SearchInputProps> = ({
	placeholder,
	disabled,
	className = '',
	error,
	onSearch,
	debounceMs = 300,
}: SearchInputProps) => {
	const [value, setValue] = useState('');

	const debouncedValue = useDebounce(value, debounceMs);

	useEffect(() => {
		if (onSearch) {
			onSearch(debouncedValue);
		}
	}, [debouncedValue, onSearch]);

	return (
		<form className="flex sm:mb-4 md:mb-14">

			<div className="input-search relative flex items-stretch justify-between w-full overflow-hidden rounded-2xl">
				<ButtonSearch />
				<input
					type="search"
					value={value}
					onChange={(e) => setValue(e.target.value)}
					placeholder={placeholder}
					disabled={disabled}
					className={`
            flex-1
						bg-transparent
            outline-none 
						px-3
						py-5
						text-xs
						text-darkTextMuted
            ${error ? 'border-darkAccentRed' : 'border-lightBgBorder dark:border-darkBgBorder'}
            ${disabled ? 'bg-gray-100' : ''}
            ${className}
          `}
				/>
			</div>
			{error && <span className="text-sm text-darkAccentRed">{error}</span>}
		</form>
	);
};
