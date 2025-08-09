import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import QueryBasic from "./QueryBasic";

const cli = new QueryClient();
function App() {
    return (
        <QueryClientProvider client={cli}>
            <QueryBasic />
        </QueryClientProvider>
    );
}

export default App;
