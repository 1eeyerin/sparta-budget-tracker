import { Button } from "@/components/button";

const FilterForm = ({ onUpdate, month }) => {
  return (
    <ul className={styles.list}>
      {Array.from({ length: 12 }).map((_, index) => {
        const currentMonth = index + 1;

        return (
          <li key={index}>
            <Button
              variant={month === currentMonth ? "" : "secondary"}
              className={styles.button}
              onClick={() => onUpdate(currentMonth)}
            >
              {currentMonth}월
            </Button>
          </li>
        );
      })}
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
  button: ["w-full", "h-10", "font-medium", "text-sm"].join(" "),
};

export default FilterForm;
