import BudgetForm from "../../components/BudgetForm";
import FilterForm from "../../components/FilterForm";
import TableList from "../../components/TableList";

const HomePage = ({ onSubmitForm, posts }) => {
  return (
    <>
      <BudgetForm onSubmitForm={onSubmitForm} />
      <FilterForm />
      <TableList posts={posts} />
    </>
  );
};

export default HomePage;
