function App() {
    return (
        <div>
            {/* Show how you can call in your config items */}
            <h1>{config.TEST}</h1>
            <h2>Placeholder.</h2>
            <Header />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);