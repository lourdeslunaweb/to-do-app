import { FC } from "react"
import { Footer, Header, Main } from ".."

const Layout: FC = ({ children }) => {
    return (
        <>
            <Header />
            <Main>
                {children}
            </Main>
            <Footer />
        </>
    )
}

export { Layout }