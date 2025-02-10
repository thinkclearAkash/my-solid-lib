import { Typography } from '../Typography';
import { JSX, Show, mergeProps } from 'solid-js';

export interface IconLabelProps {
  label: string;
  icon?: JSX.Element;
  content: string | JSX.Element;
  textColorCondition?: boolean;
  classes?: string;
  labelClasses?: string;
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
    <div class={`text-[#123b50] text-sm font-bold ${props.labelClasses}`}>
      {props.label}
    </div>
  );

  const renderIcon = Boolean(props.icon) && (
    <span
      style={{
        width: '24px',
        height: '24px',
        color: '#706E6C',
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
          fontSize: '14px',
          opacity: '0.87',
          fontStyle: 'normal',
          fontWeight: '400',
          color: Boolean(props.textColorCondition) ? '#026EA1' : '#000000',
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
