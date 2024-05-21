const Container = ({ children }) => {
  return <main className={styles.container}>{children}</main>;
};

const styles = {
  container: ["max-w-5xl", "m-auto", "mb-12"].join(" "),
};

export default Container;
