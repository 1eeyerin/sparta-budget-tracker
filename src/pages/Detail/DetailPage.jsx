import DetailForm from "@/src/components/DetailForm";

const DetailPage = () => {
  return (
    <div className={styles.list}>
      <DetailForm />
    </div>
  );
};

const styles = {
  list: [
    "mt-6",
    "p-6",
    "grid",
    "rounded-lg",
    "border",
    "bg-card",
    "shadow-sm",
  ].join(" "),
};

export default DetailPage;
