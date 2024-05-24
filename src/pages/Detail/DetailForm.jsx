import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import useForm from "@/hooks/useForm";
import { postSchema } from "@/schemas/postSchema";
import { CATEGORIES } from "@/constants";
import { Button } from "@/components/Button";
import { FormField, FormItem, FormMessage } from "@/components/Form";
import { Input } from "@/components/Input";
import { Label } from "@/components/Label";
import { Select, SelectOption } from "@/components/Select";

const resolver = (formValues) => {
  const { success, error } = postSchema.safeParse(formValues);
  return success ? {} : error.flatten().fieldErrors;
};

const DetailForm = ({ post = {}, onUpdate, onDelete }) => {
  const navigate = useNavigate();

  const { handleSubmit, formRef, message } = useForm({
    resolver,
    onSubmit: (values) => {
      navigate(-1);
      onUpdate({ ...values, id: post.id });
    },
  });

  return (
    <StyledForm ref={formRef} onSubmit={handleSubmit}>
      <FormField
        name="date"
        message={message}
        render={({ id, htmlFor, name, message }) => (
          <FormItem>
            <Label htmlFor={htmlFor}>날짜</Label>
            <Input
              id={id}
              name={name}
              type="date"
              placeholder="지출 항목"
              defaultValue={post.date}
            />
            <FormMessage message={message} />
          </FormItem>
        )}
      />
      <FormField
        name="category"
        message={message}
        render={({ id, htmlFor, name, message }) => (
          <FormItem>
            <Label htmlFor={htmlFor}>지출 항목</Label>
            <Select
              id={id}
              name={name}
              title="지출 항목"
              defaultValue={post.category}
            >
              {CATEGORIES.map(({ id, name }) => (
                <SelectOption key={id} value={id} text={name} />
              ))}
            </Select>
            <FormMessage message={message} />
          </FormItem>
        )}
      />
      <FormField
        name="price"
        message={message}
        render={({ id, htmlFor, name, message }) => (
          <FormItem>
            <Label htmlFor={htmlFor}>지출 금액</Label>
            <Input
              id={id}
              name={name}
              placeholder="지출 금액"
              type="number"
              defaultValue={post.price}
            />
            <FormMessage message={message} />
          </FormItem>
        )}
      />
      <FormField
        name="description"
        message={message}
        render={({ id, htmlFor, name, message }) => (
          <FormItem>
            <Label htmlFor={htmlFor}>지출 내용</Label>
            <Input
              id={id}
              name={name}
              placeholder="지출 내용"
              defaultValue={post.description}
            />
            <FormMessage message={message} />
          </FormItem>
        )}
      />
      <StyledButtonGroup>
        <Button type="submit">수정하기</Button>
        <Button
          variant="destructive"
          onClick={() => {
            navigate(-1);
            onDelete(post.id);
          }}
        >
          삭제하기
        </Button>
        <Button variant="secondary" onClick={() => navigate(-1)}>
          뒤로가기
        </Button>
      </StyledButtonGroup>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  display: flex;
  gap: 16px;
  flex-direction: column;
  padding-bottom: 20px;
`;

const StyledButtonGroup = styled.div`
  display: flex;
  gap: 16px;
`;

export default DetailForm;
