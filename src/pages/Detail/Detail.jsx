import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import DetailForm from './DetailForm';

const Detail = ({ getPost, onUpdate, onDelete }) => {
  const { id } = useParams();
  const post = getPost(id);

  return (
    <StyledSection>
      <DetailForm post={post} onUpdate={onUpdate} onDelete={onDelete} />
    </StyledSection>
  );
};

const StyledSection = styled.section`
  gap: 32px;
  padding: 24px;
  background-color: var(--color-base-background);
  border-radius: 8px;
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-sm);
`;

export default Detail;
