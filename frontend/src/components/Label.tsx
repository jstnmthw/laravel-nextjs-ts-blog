import { ReactElement } from 'react'

const Label = ({
    className = '',
    children,
    ...props
}: {
    className?: string
    children: ReactElement | string
    htmlFor: string
}) => (
    <label
        className={`${className} block text-sm font-medium text-gray-700`}
        {...props}>
        {children}
    </label>
)

export default Label
