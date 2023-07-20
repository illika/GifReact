import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";

describe("Pruebas en <GifGrid />", () => {

    const category = "One Punch";

    test("Mostrar Loading", () => {

        render(<GifGrid category={category} />);
        //screen.debug();
        expect(screen.getByText("Cargando..."));
        expect(screen.getByText(category));

    });

    test("", () => {

    });
});