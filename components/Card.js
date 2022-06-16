import styled from "styled-components";

const CardWrapper = styled.div`
  background: radial-gradient(
    circle at top,
    hsl(213, 19%, 18%),
    hsl(215, 27%, 12%)
  );
  border-radius: 25px;
  padding: 1.5rem;
  height: 400px;
  width: 90%;
  max-width: 400px;

  @media only screen and (min-width: 992px) {
    height: 425px;
    max-width: 425px;
  }
`;

export default function Card({ children }) {
  return <CardWrapper>{children}</CardWrapper>;
}
