import MainLayout from "layout/MainLayout";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
}

export default App;
