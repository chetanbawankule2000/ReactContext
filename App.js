import CountScreen from "./src/screens/CountScreen";
import CountContextProvider from "./src/context/CountContext";

export default function App() {
  return (
    // Wrapping CountScreen component inside CountContextProvider
    <CountContextProvider>
      <CountScreen />
    </CountContextProvider>
  );
}
