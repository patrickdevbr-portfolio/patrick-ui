import { recipe } from "@vanilla-extract/recipes";

export const input = recipe({
    base: {
        height: "38px",
        resize: "vertical",
        borderRadius: ".25rem",
        borderStyle: "solid",
        borderWidth: "1px",
        borderColor: "#767676",
        margin: "0.5rem",
        padding: "0 0.5rem",


        selectors: {
            "&:focus": {
                borderColor: "#0969da",
                outline: 0,
                boxShadow: "0 0 0 2px #0969da"
            }
        }
    }
})