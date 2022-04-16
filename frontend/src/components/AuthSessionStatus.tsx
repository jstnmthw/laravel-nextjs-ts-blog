const AuthSessionStatus = ({ status, className, ...props }: { status: string | null, className: string }) => (
    <>
        {status && (
            <div
                className={`${className} text-sm font-medium text-green-600`}
                {...props}>
                {status}
            </div>
        )}
    </>
)

export default AuthSessionStatus
