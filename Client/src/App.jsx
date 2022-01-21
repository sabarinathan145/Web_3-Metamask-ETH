import { Navbar, Welcome, Footer, Services, Transactions } from "./components";
import "@material-tailwind/react/tailwind.css";
const App = () => (
  <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <Navbar />
      <Welcome />
    </div>
    <Services />
    <Transactions />
    <Footer />
  </div>
);

export default App;