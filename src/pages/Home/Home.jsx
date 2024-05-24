import { useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "@/utils";
import { MONTH_STORAGE_NAME } from "@/constants";
import { ExpenseForm, MonthlyFilter, ExpenseTable } from "@/pages/Home";

const getMonthFromLocalStorage = () => {
  return JSON.parse(
    getLocalStorage(MONTH_STORAGE_NAME) || new Date().getMonth() + 1
  );
};

const setMonthFromLocalStorage = (value) => {
  setLocalStorage(MONTH_STORAGE_NAME, JSON.stringify(value));
};

const Home = ({ onSubmit, posts }) => {
  const [month, setMonth] = useState(getMonthFromLocalStorage());

  const updatePostsByMonth = (month) => {
    setMonth(month);
  };

  const getPosts = () => {
    if (month === 0) return posts;

    return posts
      .filter((post) => {
        const postDate = new Date(post.date);
        return postDate.getMonth() + 1 === month;
      })
      .sort((a, b) => new Date(b.date) - new Date(a.date));
  };

  useEffect(() => {
    setMonthFromLocalStorage(month);
  }, [month]);

  return (
    <>
      <ExpenseForm onSubmitForm={onSubmit} />
      <MonthlyFilter onUpdate={updatePostsByMonth} month={month} />
      <ExpenseTable posts={getPosts()} />
    </>
  );
};

export default Home;
