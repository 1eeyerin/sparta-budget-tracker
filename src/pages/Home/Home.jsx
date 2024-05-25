import { useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '@/utils';
import { MONTH_STORAGE_NAME } from '@/constants';
import ExpenseForm from './ExpenseForm';
import ExpenseTable from './ExpenseTable';
import MonthlyFilter from './MonthlyFilter';

const Home = ({ onSubmit, posts }) => {
  const [month, setMonth] = useState(
    getLocalStorage(MONTH_STORAGE_NAME) || new Date().getMonth() + 1,
  );

  const updatePostsByMonth = (event) => {
    const dataMonth = parseInt(event.target.dataset.month, 10);
    if (!dataMonth) return;

    setMonth(dataMonth);
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

const getPosts = (month, posts) => {
  if (month === 0) return posts;

  return posts
    .filter((post) => {
      const postDate = new Date(post.date);
      return postDate.getMonth() + 1 === month;
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));
};

export default Home;
