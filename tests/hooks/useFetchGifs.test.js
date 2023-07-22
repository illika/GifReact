import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe("Pruebas en Hook useFetchGifs", () => {

    test("Regresar estado Inicial", () => {

        const { result } = renderHook(() => useFetchGifs("One Punch"));
        const { images, isLoading } = result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
    });

    test("Retornar lista de imagenes isLoading False", async () => {

        const { result } = renderHook(() => useFetchGifs("One Punch"));

        await waitFor(() =>
            expect(result.current.images.length).toBeGreaterThan(0)
        );

        const { images, isLoading } = result.current;

        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    });
});