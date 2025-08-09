import { Button, css } from "@mui/material";

export function MaterialBasic() {
    const font = css({
        textTransform: "none",
    });

    return (
        <>
            <Button variant="text" color="secondary" css={font}>
                Text
            </Button>
            <Button variant="contained" color="secondary" css={font}>
                Contained
            </Button>
            <Button variant="outlined" color="secondary">
                Outlined
            </Button>
        </>
    );
}
