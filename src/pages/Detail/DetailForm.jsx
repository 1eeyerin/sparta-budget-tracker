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
import { CATEGORIES } from "constants";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
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

const DetailForm = ({ post, onUpdate, onDelete }) => {
  const navigate = useNavigate();

  const form = useForm({
    defaultValues: {
      date: post?.date,
      category: post?.category,
      price: post?.price,
      description: post?.description,
    },
    resolver: zodResolver(FormSchema),
  });

  const { control, handleSubmit } = form;

  const onSubmit = (values) => {
    navigate(-1);
    onUpdate({ ...values, id: post.id });
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
        <div className={styles.buttons}>
          <Button type="submit" className={styles.button}>
            수정하기
          </Button>
          <Button
            type="button"
            className={styles.button}
            variant="destructive"
            onClick={() => {
              navigate(-1);
              onDelete(post.id);
            }}
          >
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
