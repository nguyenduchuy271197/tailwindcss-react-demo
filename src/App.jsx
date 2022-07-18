import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="grid md:grid-cols-5">
      <Sidebar />
      <div className="md:col-span-4">
        <Header />
        <Main />
      </div>
    </div>
  );
};

export default App;
