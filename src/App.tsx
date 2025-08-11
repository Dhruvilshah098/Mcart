import AppLayout from "./Layout/appLayout";
import "./App.scss";
import List from "./List/List";

function App() {
  return (
    <>
      <AppLayout header={<div>Product List</div>}>
        <List />
      </AppLayout>
    </>
  );
}

export default App;
