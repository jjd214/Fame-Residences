import Navbar from './Navbar.jsx';
import Overview from './Overview.jsx';
import Gallery from './Gallery.jsx';

function App() {
    const section = {
        height: '250vh',
        backgroundColor: 'black'
    };

    return (
        <>
            <Navbar />
            <section style={section}>
                <Overview />
                <Gallery />
            </section>
        </>
    );
}

export default App;
