import { Outlet } from "react-router-dom";

const Container = () => {
  return (
    <main className={styles.container}>
      <Outlet />
    </main>
  );
};

const styles = {
  container: ["max-w-5xl", "m-auto", "mb-12"].join(" "),
};

export default Container;
