import styled from 'styled-components';
import { Fieldset, FieldsetProps } from 'primereact/fieldset';

interface FieldsetBlockProps extends FieldsetProps {
  children?: any;
}

const FieldSetBlock = styled(Fieldset)<FieldsetBlockProps>`
  width: 100%;
  margin-top: 20px;
`;

export default FieldSetBlock;
