import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe("Pruebas en <GitItem />", () => {
    const title = "Saitama";
    const url = "http://one-punch.com/saitama.jpg";

    test("Hacer match con el snapshot", () => {
        const { container } = render(<GifItem title={title} url={url} />);
        expect(container).toMatchSnapshot();
    });

    test("Mostrar imagen con URL y ALT", () => {
        render(<GifItem title={title} url={url} />);
        //screen.debug();
        //expect(screen.getByRole("img").src).toBe(url);
        const { src, alt } = screen.getByRole("img");
        expect(src).toBe(url);
        expect(alt).toBe(title);
    });

    test("Mostrar titulo en el componente", () => {
        render(<GifItem title={title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy();
    });

});