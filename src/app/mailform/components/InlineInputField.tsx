import RequiredMark from './RequiredMark'

interface InlineInputFieldProps {
    label: string
    name: string
    required: boolean
    value: string
    numeric?: boolean
    placeholder?: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function InlineInputField({
    label,
    name,
    required,
    value,
    onChange,
    numeric,
    placeholder,
}: InlineInputFieldProps) {
    return (
        <>
            <label htmlFor={name}>
                {label} {required && <RequiredMark />}
            </label>
            <input
                type={numeric ? 'number' : 'text'}
                id={name}
                name={name}
                required={required}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </>
    )
}
