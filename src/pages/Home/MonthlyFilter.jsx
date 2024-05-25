import styled from 'styled-components';
import { Button } from '@/components/Button';

const MonthlyFilter = ({ onUpdate, month }) => {
  return (
    <StyledForm onClick={onUpdate}>
      {Array.from({ length: 12 }).map((_, index) => {
        const currentMonth = index + 1;

        return (
          <li key={currentMonth}>
            <Button
              fullWidth
              data-month={currentMonth}
              variant={month === currentMonth ? '' : 'secondary'}
            >
              {currentMonth}월
            </Button>
          </li>
        );
      })}
    </StyledForm>
  );
};

const StyledForm = styled.ul`
  grid-template-columns: repeat(6, minmax(0, 1fr));
  display: grid;
  gap: 32px;
  padding: 24px;
  background-color: var(--color-card);
  border-radius: 8px;
  border: 1px solid var(--color-border);
  box-shadow: var(--color-shadow-sm);
`;

export default MonthlyFilter;
