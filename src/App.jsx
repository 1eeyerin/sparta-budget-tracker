import "@/app/globals.css";
import BudgetForm from "./components/BudgetForm";
import FilterForm from "./components/FilterForm";
import TableList from "./components/TableList";

const App = () => {
  return (
    <>
      <BudgetForm />
      <FilterForm />
      <TableList />
    </>
  );
};

export default App;
