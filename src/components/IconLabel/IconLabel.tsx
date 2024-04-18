import { JSX, Show, mergeProps } from 'solid-js';
import { Typography } from '../index';

export interface IconLabelProps {
  label: string;
  icon?: JSX.Element;
  content: string | JSX.Element;
  textColorCondition: boolean;
  classes?: string;
  contentClasses?: string;
  showContent?: boolean;
}

export const IconLabel = (props: IconLabelProps) => {
  props = mergeProps(
    {
      contentClasses: 'flex items-center',
      showContent: true,
    },
    props,
  );

  const renderLabel = props.label && (
    <Typography
      variant="caption"
      sxProps={{
        color: '#00000099',
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: '400',
      }}
    >
      {props.label}
    </Typography>
  );

  const renderIcon = Boolean(props.icon) && (
    <span
      style={{
        width: '24px',
        height: '24px',
      }}
      class="flex mr-[8px]"
    >
      {props.icon}
    </span>
  );

  const renderContent =
    typeof props.content === 'string' ? (
      <Typography
        variant="body1"
        sxProps={{
          fontSize: '16px',
          fontStyle: 'normal',
          fontWeight: '400',
          color: props.textColorCondition ? '#026EA1' : '#000000',
        }}
      >
        {props.content}
      </Typography>
    ) : (
      <div class="flex">{props.content}</div>
    );

  return (
    <div class={`flex flex-col flex-1 items-start ${props.classes}`}>
      {renderLabel}
      <div class={props.contentClasses}>
        {renderIcon}
        <Show when={props.showContent}>{renderContent}</Show>
      </div>
    </div>
  );
};
