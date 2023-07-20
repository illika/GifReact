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

        const inputValue = "saitama";
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory} />);

        const input = screen.getByRole("textbox");
        const form = screen.getByRole("form");

        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);
        //screen.debug();
        // input pasa por referencia, toma el  último valor
        expect(input.value).toBe("");

        expect(onNewCategory).toHaveBeenCalled();

        expect(onNewCategory).toHaveBeenCalledTimes(1);

        expect(onNewCategory).toHaveBeenCalledWith(inputValue);

    });

    test("No llamar onNewCategory si input está vacío", () => {
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory} />);
        const form = screen.getByRole("form");

        fireEvent.submit(form);
        expect(onNewCategory).toHaveBeenCalledTimes(0);
        expect(onNewCategory).not.toHaveBeenCalled();
    });

});