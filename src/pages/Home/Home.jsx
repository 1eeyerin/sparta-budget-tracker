import { useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '@/utils';
import { MONTH_STORAGE_NAME } from '@/constants';
import ExpenseForm from './ExpenseForm';
import ExpenseTable from './ExpenseTable';
import MonthlyFilter from './MonthlyFilter';

const getPosts = (month, posts) => {
  if (month === 0) return posts;

  return posts
    .filter((post) => {
      const postDate = new Date(post.date);
      return postDate.getMonth() + 1 === month;
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));
};

const Home = ({ onSubmit, posts }) => {
  const [month, setMonth] = useState(
    getLocalStorage(MONTH_STORAGE_NAME) || new Date().getMonth() + 1,
  );

  const updatePostsByMonth = (number) => {
    setMonth(number);
  };

  useEffect(() => {
    setLocalStorage(MONTH_STORAGE_NAME, month);
  }, [month]);

  return (
    <>
      <ExpenseForm onSubmitForm={onSubmit} />
      <MonthlyFilter onUpdate={updatePostsByMonth} month={month} />
      <ExpenseTable posts={getPosts(month, posts)} />
    </>
  );
};

export default Home;
