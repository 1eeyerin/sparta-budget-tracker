import SelectedMonthProvider from '@/context/SelectedMonthProvider';
import ExpenseForm from './ExpenseForm';
import ExpenseTable from './ExpenseTable';
import MonthlyFilter from './MonthlyFilter';

const Home = () => {
  return (
    <SelectedMonthProvider>
      <ExpenseForm />
      <MonthlyFilter />
      <ExpenseTable />
    </SelectedMonthProvider>
  );
};

export default Home;
