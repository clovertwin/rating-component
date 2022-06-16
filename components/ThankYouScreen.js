import Card from "./Card";
import styled from "styled-components";
import Image from "next/image";

const ThankYouWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  width: 100%;
`;

const DescriptionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 50px;
  background-color: hsl(213, 19%, 18%);
  color: hsl(25, 97%, 53%);
`;

const LargeText = styled.h1`
  color: white;
  font-weight: normal;

  @media only screen and (max-width: 576px) {
    font-size: 1.5rem;
  }
`;

const BodyText = styled.p`
  color: hsl(216, 12%, 54%);
  line-height: 1.5;
  margin: 0 16px 16px 16px;
  text-align: center;
`;

export default function ThankYouScreen({ value }) {
  return (
    <Card>
      <ThankYouWrapper>
        <Image
          alt="phone illustration"
          src="/images/illustration-thank-you.svg"
          width={162}
          height={108}
        />
        <DescriptionWrapper>
          <p>You selected {value} out of 5</p>
        </DescriptionWrapper>
        <LargeText>Thank You!</LargeText>
        <BodyText>
          We appreciate you taking the time to give us a rating. If you ever
          need more support, don&apos;t hesitate to get in touch
        </BodyText>
      </ThankYouWrapper>
    </Card>
  );
}
