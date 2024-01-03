import Styled from '@emotion/styled';
import { Button, colors } from '@mui/joy';

type ButtonProps = {
  buttoncolor?: string;
  buttontype?: 'primary' | 'secondary';
};
export const PrimaryButton = Styled(Button)<ButtonProps>`
    border-radius: 8px;
    border: 1px solid ${(props) => props.buttoncolor || colors.blue[400]};
    background: ${(props) => props.buttoncolor || colors.blue[400]};
    box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
    color: #fff;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    display: flex;
    padding: 12px 20px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    height: 56px;
    flex: 1 0 0;
    text-transform: none;
    &:hover {
        background: ${(props) => props.buttoncolor || colors.blue[400]};
        opacity: 0.8;
    }
`;

export const OutlinedActionButton = Styled(Button)<ButtonProps>`
  border: 1px solid ${(props) => props.buttoncolor || colors.blue[400]};
  background  : #fff;
  color: ${colors.blue[500]};
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    display: flex;
    padding: 12px 20px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    height: 56px;
    flex: 1 0 0;
    text-transform: none;
    &:hover {
        background: ${(props) => props.buttoncolor || '#fff'};
        opacity: 0.8;
    }
`;

export const SecondaryButton = Styled(Button)<ButtonProps>`
    border-radius: 8px;
    border: 1px solid ${colors.grey[700]};
    background: #fff;
    box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
    display: flex;
    padding: 10px 16px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    flex: 1 0 0;
    color: var(--gray-700, #384250);

    /* Text sm(14px)/Medium */
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 142.857% */
    text-transform: none;
    &:hover {
        background: ${(props) => props.buttoncolor || '#fff'};
        opacity: 0.8;
    }
`;

export const SecondaryDefaultButton = Styled(SecondaryButton)`
   border: 1px solid ${colors.green[400]};
   background: ${colors.green[500]};  
   color: #fff;
   &:hover {
    background: ${colors.green[500]};
   }
`;

export const SecondaryTextButton = Styled(Button)`
    border-radius: 8px;
    box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
    display: flex;
    align-items: center;
    gap: 8px;
    flex: 1 0 0;
    color: ${colors.grey[700]};
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px; /* 142.857% */
    text-decoration-line: underline;
    text-transform: none;
`;

export const TextButton = Styled(Button)<ButtonProps>`
    color: ${(props) => (props.buttontype === 'primary' ? '#26BDD7' : '#000')};
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 150% */
    background:  transparent;
    text-transform: none;
    &:hover {
        background: ${(props) => props.buttoncolor || '#fff'};
        opacity: 0.8;
    }
`;
