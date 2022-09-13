import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <BrowserRouter>
                    <Routes>
                        <Route exact path="/" element={<RouteHome />} />
                        <Route exact path="/route-1" element={<Route1 />} />
                        <Route exact path="/route-2" element={<Route2 />} />
                        <Route exact path="/route-3/sub-route-1" element={<Route3 />} />
                    </Routes>
                </BrowserRouter>
            </header>
        </div>
    );
}

function RouteHome() {
    return (
        <>
            <p>HOME</p>
            <a className="App-link" href="/route-1">
                TO ROUTE 1.
            </a>
        </>
    );
}

function Route1() {
    return (
        <>
            <p>ROUTE 1</p>
            <a className="App-link" href="/route-2">
                TO ROUTE 2.
            </a>
        </>
    );
}

function Route2() {
    return (
        <>
            <p>ROUTE 2</p>
            <a className="App-link" href="/route-3/sub-route-1">
                TO ROUTE 3 WITH SUB ROUTE 1.
            </a>
        </>
    );
}

function Route3() {
    return (
        <>
            <p>ROUTE 3</p>
            <a className="App-link" href="/">
                TO HOME.
            </a>
        </>
    );
}

export default App;
