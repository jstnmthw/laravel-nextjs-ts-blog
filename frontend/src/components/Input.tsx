import { ChangeEventHandler } from 'react'

const Input = ({
    disabled = false,
    className,
    ...props
}: {
    autoComplete?: string
    autoFocus?: boolean
    className?: string
    disabled?: boolean
    id?: string
    name?: string
    type?: string
    onChange?: ChangeEventHandler
    required?: boolean
    value?: string
}) => (
    <input
        disabled={disabled}
        className={`${className} rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50`}
        {...props}
    />
)

export default Input
