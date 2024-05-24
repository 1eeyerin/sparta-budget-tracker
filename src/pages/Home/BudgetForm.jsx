import { Button } from "@/src/components/Button";
import { FormField, FormMessage } from "@/src/components/Form";
import { Input } from "@/src/components/Input";
import { Label } from "@/src/components/Label";
import { Select, SelectOption } from "@/src/components/Select";
import { CATEGORIES } from "@/src/constants";
import useForm from "@/src/hooks/useForm";
import { postSchema } from "@/src/schemas/postSchema";
import styled from "styled-components";

const resolver = (formValues) => {
  const { success, error } = postSchema.safeParse(formValues);
  return success ? {} : error.flatten().fieldErrors;
};

const BudgetForm = ({ onSubmitForm }) => {
  const { handleSubmit, formRef, message } = useForm({
    resolver,
    onSubmit: onSubmitForm,
  });

  return (
    <StyledForm ref={formRef} onSubmit={handleSubmit}>
      <StyledContainer>
        <FormField
          name="date"
          message={message}
          render={({ id, htmlFor, name, message }) => (
            <FormFieldItem>
              <Label htmlFor={htmlFor}>날짜</Label>
              <Input id={id} name={name} type="date" placeholder="지출 항목" />
              <FormMessage message={message} />
            </FormFieldItem>
          )}
        />
        <FormField
          name="category"
          message={message}
          render={({ id, htmlFor, name, message }) => (
            <FormFieldItem>
              <Label htmlFor={htmlFor}>지출 항목</Label>
              <Select id={id} name={name} title="지출 항목">
                {CATEGORIES.map(({ id, name }) => (
                  <SelectOption key={id} value={id} text={name} />
                ))}
              </Select>
              <FormMessage message={message} />
            </FormFieldItem>
          )}
        />
        <FormField
          name="price"
          message={message}
          render={({ id, htmlFor, name, message }) => (
            <FormFieldItem>
              <Label htmlFor={htmlFor}>지출 금액</Label>
              <Input
                id={id}
                name={name}
                placeholder="지출 금액"
                type="number"
              />
              <FormMessage message={message} />
            </FormFieldItem>
          )}
        />
        <FormField
          name="description"
          message={message}
          render={({ id, htmlFor, name, message }) => (
            <FormFieldItem>
              <Label htmlFor={htmlFor}>지출 내용</Label>
              <Input id={id} name={name} placeholder="지출 내용" />
              <FormMessage message={message} />
            </FormFieldItem>
          )}
        />
      </StyledContainer>
      <StyledButton type="submit">저장</StyledButton>
    </StyledForm>
  );
};

const FormFieldItem = styled.div`
  flex-grow: 2;
`;

const StyledButton = styled(Button)`
  margin-top: 32px;
`;

const StyledForm = styled.form`
  display: flex;
  gap: 16px;
  margin-bottom: 40px;
`;

const StyledContainer = styled.div`
  flex-grow: 2;
  display: flex;
  justify-content: space-between;
  gap: 16px;
`;

export default BudgetForm;
