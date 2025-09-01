import { useErrorBoundary } from "react-error-boundary";

export default function ErrorEvent() {
    const {showBoundary} = useErrorBoundary();
    const handleClick = () => {
        try {throw new Error("Error is occured in MyApp.");}
        catch (e) {
            showBoundary(e);
        }
    };

    return (
        <button type="button" onClick={handleClick}>오류 발사</button>
    );
}