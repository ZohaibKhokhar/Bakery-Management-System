import { ThemeProvider } from "./Providers/ThemeProvider";
import AppContent from "./AppContent";

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
export default App;