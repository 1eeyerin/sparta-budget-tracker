import styled from 'styled-components';
import { Button } from '@/components/Button';

// TODO: onClick 이벤트를 적게 전달하는 방법? 캡쳐링 버블링
const MonthlyFilter = ({ onUpdate, month }) => {
  return (
    <StyledForm>
      {Array.from({ length: 12 }).map((_, index) => {
        const currentMonth = index + 1;

        return (
          <li key={currentMonth}>
            <Button
              fullWidth
              variant={month === currentMonth ? '' : 'secondary'}
              onClick={() => onUpdate(currentMonth)}
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
