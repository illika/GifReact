import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe("Prueba en <AddCategory />", () => {

    test("Cambiar valor de caja de texto", () => {

        render(<AddCategory onNewCategory={() => { }} />);
        // Disparar evento
        const input = screen.getByRole("textbox");
        fireEvent.input(input, { target: { value: "Saitama" } })

        expect(input.value).toBe("Saitama");
    });

    test("Llamar onNewCategory si input tiene valor", () => {

        const inputValue = "Saitama";
        // TODO: ?????
        render(<AddCategory onNewCategory={() => { }} />);

        const input = screen.getByRole("textbox");
        const form = screen.getByRole("form");

        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);
        //screen.debug();
        // input pasa por referencia, toma el  último valor
        expect(input.value).toBe("");

    });

});