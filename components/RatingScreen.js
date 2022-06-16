import { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import Card from "./Card";
import SubmitButton from "./SubmitButton";

const RatingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
`;

const CircleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  padding: 15px;
  background-color: hsl(213, 19%, 18%);
  width: 45px;
  height: 45px;
  font-weight: bold;
  color: hsl(217, 12%, 63%);
  cursor: pointer;
  transition: background-color 200ms ease-in-out;

  &:hover,
  &:focus {
    background-color: hsl(216, 12%, 54%);
    color: white;
  }

  &:active {
    transform: scale(0.97);
  }

  @media only screen and (min-width: 992px) {
    width: 55px;
    height: 55px;
  }
`;

const SelectedCircle = styled(Circle)`
  background-color: hsl(25, 97%, 53%);
  color: white;

  &:hover,
  &:focus {
    background-color: hsl(25, 97%, 53%);
    color: white;
  }
`;

const TextWrapper = styled.div`
  display: block;
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
  margin-top: 1rem;
  line-height: 1.5;

  @media only screen and (min-width: 992px) {
    margin-right: 2rem;
  }
`;

export default function RatingScreen({ setValue, setSubmitted }) {
  const [one, setOne] = useState(false);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);
  const [four, setFour] = useState(false);
  const [five, setFive] = useState(false);

  const handleSelect = (e) => {
    const value = e.target.innerText;
    switch (value) {
      case "1":
        setOne(true);
        setTwo(false);
        setThree(false);
        setFour(false);
        setFive(false);
        setValue(value);
        break;
      case "2":
        setOne(false);
        setTwo(true);
        setThree(false);
        setFour(false);
        setFive(false);
        setValue(value);
        break;
      case "3":
        setOne(false);
        setTwo(false);
        setThree(true);
        setFour(false);
        setFive(false);
        setValue(value);
        break;
      case "4":
        setOne(false);
        setTwo(false);
        setThree(false);
        setFour(true);
        setFive(false);
        setValue(value);
        break;
      case "5":
        setOne(false);
        setTwo(false);
        setThree(false);
        setFour(false);
        setFive(true);
        setValue(value);
        break;
      default:
        setOne(false);
        setTwo(false);
        setThree(false);
        setFour(false);
        setFive(false);
    }
  };

  return (
    <Card>
      <RatingWrapper>
        <Circle>
          <Image
            alt="star icon"
            src="/images/icon-star.svg"
            width={17}
            height={16}
          />
        </Circle>
        <TextWrapper>
          <LargeText>How did we do?</LargeText>
          <BodyText>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </BodyText>
        </TextWrapper>
        <CircleWrapper>
          {!one ? (
            <Circle onClick={handleSelect}>1</Circle>
          ) : (
            <SelectedCircle>1</SelectedCircle>
          )}
          {!two ? (
            <Circle onClick={handleSelect}>2</Circle>
          ) : (
            <SelectedCircle>2</SelectedCircle>
          )}
          {!three ? (
            <Circle onClick={handleSelect}>3</Circle>
          ) : (
            <SelectedCircle>3</SelectedCircle>
          )}
          {!four ? (
            <Circle onClick={handleSelect}>4</Circle>
          ) : (
            <SelectedCircle>4</SelectedCircle>
          )}
          {!five ? (
            <Circle onClick={handleSelect}>5</Circle>
          ) : (
            <SelectedCircle>5</SelectedCircle>
          )}
        </CircleWrapper>
        <SubmitButton setSubmitted={setSubmitted} />
      </RatingWrapper>
    </Card>
  );
}
