import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe("Prueba en <AddCategory />", () => {

    test("Cambiar valor de caja de texto", () => {

        render(<AddCategory onNewCategory={() => { }} />);
        // Disparar evento
        const input = screen.getByRole("textbox");
        fireEvent.input(input, { target: {value: "Saitama"} })
        
        expect(input.value).toBe("Saitama");
    });

});