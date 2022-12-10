import { render, screen } from "@testing-library/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContextProvider from "../Components/utils/global.context";
import Home from "../Routes/Home";

describe("testing the dentis are rendered", () => {

    test("Card to have Leanne Graham name", async () => {
        render(
            <ContextProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                    </Routes>
                </BrowserRouter>
            </ContextProvider>
        )

        const name = await screen.findByText("Leanne Graham")
        expect(name.textContent).toBe('Leanne Graham');
    })
    test("Card to have Clementina DuBuque name", async () => {
        render(
            <ContextProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                    </Routes>
                </BrowserRouter>
            </ContextProvider>
        )

        const name = await screen.findByText("Clementina DuBuque")
        expect(name.textContent).toBe('Clementina DuBuque');
    })
})
