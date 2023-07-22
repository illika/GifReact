import { GifExpertApp } from "../src/GifExpertApp";

import { render, screen } from "@testing-library/react";

describe("Pruebas de <GifExpertApp />", () => {

    test("Hacer match con el snapshot", () => {
        var { container } = render(<GifExpertApp />);
        //screen.debug();
        expect(container).toMatchSnapshot();
    });

    test("Mostrar Titulo: GifExpertApp", () => {
        render(<GifExpertApp />);
        //console.log(screen.getByRole("heading").innerHTML); 
        expect(screen.getByText("GifExpertApp"));
        //screen.debug();
    });

});