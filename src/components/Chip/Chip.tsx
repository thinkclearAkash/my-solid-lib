import { SChip, Avatar, HighlightOffRoundedIcon } from '../common';
import { JSXElement } from 'solid-js';

export type Props = {
  id: string;
  text: string | JSXElement;
  onClick?: () => void;
  onDelete?: () => void;
  className?: string;
  deleteIconColor?: string;
  backgroundColor?: string;
  style?: object;
  variant?: 'outlined' | 'filled';
  isDeleteIcon: boolean;
  color:
    | 'default'
    | 'error'
    | 'info'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning';
  imgPath?: string;
};

function Chip(props: Readonly<Props>) {
  return (
    <SChip
      id={props.id}
      label={props.text}
      variant={props.variant ?? 'outlined'}
      onClick={() => props.onClick && props.onClick()}
      onDelete={() => props.onDelete && props.onDelete()}
      color={props.color}
      avatar={props.imgPath && <Avatar src={props.imgPath} />}
      deleteIcon={
        props.isDeleteIcon && (
          <HighlightOffRoundedIcon style={{ color: props.deleteIconColor }} />
        )
      }
    />
  );
}

export default Chip;
