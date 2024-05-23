import { MONTH_STORAGE_NAME } from "@/src/constants";
import { BudgetForm, FilterForm, TableList } from "@/src/pages/Home";
import { getLocalStorage, setLocalStorage } from "@/src/utils";
import { useState } from "react";

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
      <BudgetForm onSubmitForm={onSubmit} />
      <FilterForm onUpdate={updatePostsByMonth} month={month} />
      <TableList posts={getPosts()} />
    </>
  );
};

export default Home;
