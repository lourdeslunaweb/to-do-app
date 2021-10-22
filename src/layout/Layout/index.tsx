import { FC } from "react"
import { Footer, Header, Main } from ".."

type Props ={
    hideCardUserInit?: boolean;
}

const Layout: FC<Props> = ({ children, hideCardUserInit }) => {
    return (
        <>
            {!hideCardUserInit && <Header />}
            <Main>
                {children}
            </Main>
            <Footer />
        </>
    )
}

export { Layout }