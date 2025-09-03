import { Button, styled } from "@mui/material";

export default function MaterialBasic() {
    const StyledButton = styled(Button)({
        textTransform: "none",
    });

    return (
        <>
        <Button variant="text" color="secondary">Text</Button>
        <Button variant="contained" color="secondary">Contained</Button>
        <Button variant="outlined" color="secondary">Outlined</Button>
        <StyledButton variant="contained" color="secondary">Styled</StyledButton>
        </>
    );
}