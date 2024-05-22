import { Button } from "@/components/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/form";
import { Input } from "@/components/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { CATEGORIES, DEFAULT_VALUES } from "constants";
import { useForm } from "react-hook-form";
import { z } from "zod";

const categoryIds = CATEGORIES.map((category) => category.id);

const FormSchema = z.object({
  date: z.string().min(1, {
    message: "날짜를 입력해주세요",
  }),
  category: z.enum(categoryIds, {
    message: "알맞은 지출 항목을 선택해주세요",
  }),
  price: z
    .string()
    .regex(/^\d+$/, {
      message: "지출 금액은 숫자로 입력해주세요",
    })
    .min(1, {
      message: "지출 금액을 입력해주세요",
    }),
  description: z.string().min(2, {
    message: "내용을 2자 이상 작성해주세요",
  }),
});

const BudgetForm = ({ onSubmitForm }) => {
  const form = useForm({
    defaultValues: DEFAULT_VALUES,
    resolver: zodResolver(FormSchema),
  });
  const { control, handleSubmit, reset } = form;

  const onSubmit = (values) => {
    onSubmitForm(values);
    reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>
        <div className={styles.formFields}>
          <FormField
            control={control}
            name="date"
            render={({ field }) => (
              <FormItem className={styles.formItem}>
                <FormLabel className={styles.formLabel}>날짜</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage className={styles.errorMessage} />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="category"
            render={({ field }) => (
              <FormItem className={styles.formItem}>
                <FormLabel className={styles.formLabel}>지출 항목</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="지출 항목" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="food">식비</SelectItem>
                      <SelectItem value="household">생활용품</SelectItem>
                      <SelectItem value="transport">교통비</SelectItem>
                      <SelectItem value="clothingAndBeauty">
                        의류/미용
                      </SelectItem>
                      <SelectItem value="others">기타</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <FormMessage className={styles.errorMessage} />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="price"
            render={({ field }) => (
              <FormItem className={styles.formItem}>
                <FormLabel className={styles.formLabel}>금액</FormLabel>
                <FormControl>
                  <Input placeholder="지출 금액" type="number" {...field} />
                </FormControl>
                <FormMessage className={styles.errorMessage} />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="description"
            render={({ field }) => (
              <FormItem className={styles.formItem}>
                <FormLabel className={styles.formLabel}>내용</FormLabel>
                <FormControl>
                  <Input placeholder="지출 내용" {...field} />
                </FormControl>
                <FormMessage className={styles.errorMessage} />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" className={styles.button}>
          저장
        </Button>
      </form>
    </Form>
  );
};

const styles = {
  formContainer: ["flex", "items-center", "mt-8", "mb-10", "gap-4"].join(" "),
  formFields: ["w-full", "flex", "gap-4"].join(" "),
  formItem: [
    "items-center",
    "flex",
    "justify-between",
    "w-full",
    "flex-wrap",
    "relative",
  ].join(" "),
  formLabel: ["flex-shrink-0", "mr-6", "text-sm", "font-medium", "mb-1"].join(
    " "
  ),
  errorMessage: ["absolute", "top-full", "mt-1"].join(" "),
  button: ["mt-8"].join(" "),
};

export default BudgetForm;
