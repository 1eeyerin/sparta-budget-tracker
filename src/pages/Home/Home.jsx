import { useState } from "react";
import { getLocalStorage, setLocalStorage } from "@/utils";
import { MONTH_STORAGE_NAME } from "@/constants";
import { ExpenseForm, FilterForm, TableList } from "@/pages/Home";

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
    setMonthFromLocalStorage(month);
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

  return (
    <>
      <ExpenseForm onSubmitForm={onSubmit} />
      <FilterForm onUpdate={updatePostsByMonth} month={month} />
      <TableList posts={getPosts()} />
    </>
  );
};

export default Home;
