import React from "react";
import "./App.css";
import Button from "./components/Button";

function App() {
    return (
        <div className="container mx-auto">
            <h1 className="text-3xl font-bold">Buttons</h1>

            <div className="flex gap-4 mt-4">
                <Button type="submit">Primary</Button>

                <Button type="submit" variant="secondary">
                    Secondary
                </Button>
            </div>

            <div className="flex gap-4 mt-4">
                <Button type="submit" size="small">
                    Small Primary
                </Button>

                <Button type="submit" variant="secondary" size="small">
                    Small Secondary
                </Button>
            </div>

            <div className="flex gap-4 mt-4">
                <Button type="submit" disabled>
                    Disabled Primary
                </Button>
            </div>

            <div className="flex gap-4 mt-4">
                <Button type="submit" className="text-red-800 hover:text-white">
                    Custom Classname
                </Button>
            </div>
        </div>
    );
}

export default App;
