import styled from "styled-components";

const Button = styled.button`
  width: 100%;
  text-decoration: none;
  border: none;
  border-radius: 50px;
  padding-top: 1rem;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  background-color: hsl(25, 97%, 53%);
  color: white;
  letter-spacing: 2px;
  cursor: pointer;
  transition: background-color 200ms ease-in-out;

  &:hover,
  &:focus {
    background-color: white;
    color: hsl(25, 97%, 53%);
  }

  &:active {
    transform: scale(0.97);
  }
`;

export default function SubmitButton(props) {
  const handleSubmit = () => {
    props.setSubmitted(true);
  };

  return <Button onClick={handleSubmit}>SUBMIT</Button>;
}
