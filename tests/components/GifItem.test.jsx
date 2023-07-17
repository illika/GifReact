import { render } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe("Pruebas en <GitItem />", () => {
    test("Hacer match con el snapshot", () => {
        const title = "Saitama";
        const url = "http://one-punch.com/saitama.jpg"
        const {container} = render(<GifItem title={title} url={url} />);
        expect(container).toMatchSnapshot();
    });
});