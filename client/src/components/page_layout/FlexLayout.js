import styled from 'styled-components';

export const FlexLayout = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: $bootstrap-break-md) {
    flex-direction: column;
  }
`;

export const FlexCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FlexStart = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const FlexEnd = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const FlexBetween = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FlexAround = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const FlexColumnCenter = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const FlexColumnStart = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

export const FlexColumnEnd = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
`;
