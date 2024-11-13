interface ContainerProps {
    children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({
    children
}) => {
    return (
        <main className="mx-auto max-w-screen-lg px-4 sm:px-0">
            {children}
        </main>
    )
}

export default Container;