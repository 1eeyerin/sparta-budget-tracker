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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

const defaultValues = {
  date: "",
  category: "",
  price: "",
  description: "",
};

const FormSchema = z.object({
  date: z.string().min(1, {
    message: "날짜를 입력해주세요",
  }),
  category: z.enum(
    ["food", "household", "transport", "clothingAndBeauty", "others"],
    {
      message: "알맞은 지출 항목을 선택해주세요",
    }
  ),
  price: z.number({
    message: "지출 금액을 입력해주세요",
  }),
  description: z.string().min(2, {
    message: "내용을 2자 이상 작성해주세요",
  }),
});

const DetailForm = () => {
  const navigate = useNavigate();
  const form = useForm({ defaultValues, resolver: zodResolver(FormSchema) });
  const { control, handleSubmit, reset } = form;

  const onSubmit = (values) => {
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
                  <Input
                    placeholder="제목을 입력해주세요"
                    type="date"
                    {...field}
                  />
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
                <FormLabel className={styles.formLabel}>항목</FormLabel>
                <FormControl>
                  <Input placeholder="지출 항목" {...field} />
                </FormControl>
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
            name="category"
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
        <div className={styles.buttons}>
          <Button type="submit" className={styles.button}>
            수정하기
          </Button>
          <Button type="button" className={styles.button} variant="destructive">
            삭제하기
          </Button>
          <Button
            type="button"
            className={styles.button}
            variant="secondary"
            onClick={() => navigate(-1)}
          >
            뒤로가기
          </Button>
        </div>
      </form>
    </Form>
  );
};

const styles = {
  formContainer: ["mt-8", "mb-6"].join(" "),
  formFields: ["w-full", "flex", "gap-6", "flex-wrap", "flex-col"].join(" "),
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
  buttons: ["flex", "gap-3"].join(" "),
  button: ["mt-6"].join(" "),
};

export default DetailForm;
