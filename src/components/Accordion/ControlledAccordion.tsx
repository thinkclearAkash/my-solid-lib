import { Component, JSXElement } from 'solid-js';

import cls from './classes';
type ControlledAccordionProps = {
  title: string | JSXElement;
  isOpen: boolean;
  onToggle: () => void;
  children: JSXElement;
};

const ControlledAccordion: Component<ControlledAccordionProps> = (props) => {
  return (
    <div>
      <div>
        <button class={cls.accordionTitle} onClick={props.onToggle}>
          {props.title}
        </button>
      </div>
      <div
        class={cls.accordionContent}
        style={{ display: props.isOpen ? 'block' : 'none' }}
      >
        {props.children}
      </div>
    </div>
  );
};

export default ControlledAccordion;
