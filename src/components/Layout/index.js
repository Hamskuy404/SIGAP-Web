import Container from "../Container";
import Footer from "../Footer";
import Navbar from "../Navbar";

function Layout(props) {
    return(
        <>
            <Navbar/>
                <main>
                    <Container>{props.children}</Container>
                </main>
            <Footer/>
        </>
    )
}

export default Layout;