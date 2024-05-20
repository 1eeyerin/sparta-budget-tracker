import { Button } from "@/components/button";

const FilterForm = () => {
  return (
    <ul className={styles.list}>
      {Array.from({ length: 12 }).map((_, index) => (
        <li key={index}>
          <Button variant="secondary" className={styles.button}>
            {index + 1}월
          </Button>
        </li>
      ))}
    </ul>
  );
};

const styles = {
  list: [
    "p-6",
    "grid",
    "grid-cols-6",
    "gap-8",
    "rounded-lg",
    "border",
    "bg-card",
    "shadow-sm",
  ].join(" "),
  button: [
    "w-full",
    "h-10",
    "font-medium",
    "text-sm",
    "text-text-secondary",
  ].join(" "),
};

export default FilterForm;
