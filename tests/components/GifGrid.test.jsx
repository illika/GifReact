import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe("Pruebas en <GifGrid />", () => {

    const category = "One Punch";

    test("Mostrar Loading", () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });
        render(<GifGrid category={category} />);
        expect(screen.getByText("Cargando..."));
        expect(screen.getByText(category));
    });

    test("Mostrar items cuando se cargan imagenes useFetchGifs", () => {
        const gifs = [
            {
                id: "ABC",
                title: "Saitama",
                url: "https://localhost/Saitama.jpg"
            },
            {
                id: "ABCD",
                title: "Goku",
                url: "https://localhost/goku.png"
            }
        ];
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });
        render(<GifGrid category={category} />);
        //screen.debug();
        expect(screen.getAllByRole("img").length).toBe(2);
    });
});