import { Chip as SChip } from '@suid/material';
import HighlightOffRoundedIcon from '@suid/icons-material/HighlightOffRounded';
import Avatar from '@suid/material/Avatar';
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
  variant: 'outlined' | 'filled';
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

function Chip({
  id,
  text,
  onClick,
  onDelete,
  variant,
  isDeleteIcon = false,
  deleteIconColor,
  color,
  imgPath,
}: Props) {
  return (
    <SChip
      id={id}
      label={text}
      variant={variant}
      onClick={() => onClick && onClick()}
      onDelete={() => onDelete && onDelete()}
      color={color}
      avatar={(imgPath ?? '') && <Avatar src={imgPath} />}
      deleteIcon={
        isDeleteIcon && (
          <HighlightOffRoundedIcon style={{ color: deleteIconColor }} />
        )
      }
    />
  );
}

export default Chip;
