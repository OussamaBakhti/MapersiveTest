import styled from 'styled-components';
import { footerElementsColor, primaryColor } from '../../contstants';

export const BottomNavigation = styled.div`
background: #021E35;
color: #FCFCFD;
`;

export const Box = styled.div`
  width: 100%;
`;

export const InlineContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    max-width: 1000px;
    > * {
      margin-right: 10px;
    }
    
`
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  min-width: 30%;
`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, 
                       minmax(185px, 1fr));
grid-gap: 20px;
 
@media (max-width: 1000px) {
  grid-template-columns: repeat(auto-fill, 
                         minmax(200px, 1fr));
}
`;

export const FooterLink = styled.a`
  color: ${footerElementsColor};
  margin-bottom: 20px;
  font-size: 18px;
  line-height: 24px;
  font-weight: 400;
  text-decoration: none;
   
  &:hover {
      color: ${primaryColor};
      transition: 200ms ease-in;
      cursor: pointer;
  }
`;

export const Description = styled.span`
  color: ${footerElementsColor};
  margin-bottom: 20px;
  font-size: 18px;
  line-height: 24px;
  font-weight: 400;
  text-decoration: none;
`;

export const Heading = styled.p`
  font-size: 20px;
  line-height: 25px;
  font-weight: 600;
  color: ${footerElementsColor};
  margin-bottom: 40px;
  font-weight: bold;
`;

export const Line = styled.hr`
height:1px;
border-width:0;
background-color: ${footerElementsColor};
max-width: 1000px;
`;