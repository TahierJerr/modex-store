interface ContainerProps {
    children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({
    children
}) => {
    return (
        <div className="mx-auto max-w-screen-xl px-4 lg:px-[9rem]">
            {children}
        </div>
    )
}

export default Container;