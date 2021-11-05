import { FC } from "react"
import { Footer, Header, Main } from ".."

type Props ={
    hideHeader?: boolean;
}

const Layout: FC<Props> = ({ children, hideHeader }) => {
    return (
        <>
            {!hideHeader && <Header />}
            <Main>
                {children}
            </Main>
            <Footer />
        </>
    )
}

export { Layout }