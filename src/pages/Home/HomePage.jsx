import BudgetForm from "../../components/BudgetForm";
import FilterForm from "../../components/FilterForm";
import TableList from "../../components/TableList";

const HomePage = () => {
  return (
    <>
      <BudgetForm />
      <FilterForm />
      <TableList />
    </>
  );
};

export default HomePage;
