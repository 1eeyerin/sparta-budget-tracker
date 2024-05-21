import { DetailForm } from "pages/Detail";
import { useParams } from "react-router-dom";

const Detail = ({ getPost, onUpdate }) => {
  const { id } = useParams();
  const post = getPost(id);

  return (
    <div className={styles.list}>
      <DetailForm post={post} onUpdate={onUpdate} />
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

export default Detail;
