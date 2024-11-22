import Navbar from './Navbar.jsx';
import Overview from './Overview.jsx';

function App() {
    const section = {
        height: '200vh',
        backgroundColor: 'black'
    };

    return (
        <>
            <Navbar />
            <section style={section}>
                <Overview />
            </section>
        </>
    );
}

export default App;
