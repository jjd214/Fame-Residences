import Navbar from './Navbar.jsx';
import Overview from './Overview.jsx';
import Gallery from './Gallery.jsx';
import Contact from './Contact.jsx';
import Footer from './Footer.jsx'

function App() {
    const section = {
        height: '320vh',
        backgroundColor: 'black'
    };

    return (
        <>
            <Navbar />
            <section style={section}>
                <Overview />
                <Gallery />
                <Contact />
            </section>
            <Footer />
        </>
    );
}

export default App;
