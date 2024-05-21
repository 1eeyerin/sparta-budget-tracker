import { BudgetForm, FilterForm, TableList } from "pages/Home";

const Home = ({ onSubmit, posts }) => {
  return (
    <>
      <BudgetForm onSubmitForm={onSubmit} />
      <FilterForm />
      <TableList posts={posts} />
    </>
  );
};

export default Home;
