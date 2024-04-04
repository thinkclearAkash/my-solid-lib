import Button from "@suid/material/Button";
interface ButtonProps {
  onClick: () => void;
  label: string;
}
const SButton = (props: ButtonProps) => {
  return <Button onClick={props.onClick}>{props.label}</Button>;
}

export default SButton;