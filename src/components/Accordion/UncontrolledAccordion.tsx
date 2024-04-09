import { Component, createSignal, JSXElement } from 'solid-js';
import { ArrowDropDown } from '@suid/icons-material';

import cls from './classes';

type UncontrolledAccordionProps = {
  title: string;
  children: JSXElement;
};

const UncontrolledAccordion: Component<UncontrolledAccordionProps> = (
  props,
) => {
  const [isShow, setIsShow] = createSignal(false);
  const toggle = () => setIsShow(!isShow());

  return (
    <div>
      <div onClick={toggle} class="flex">
        <button class={cls.accordionTitle}>{props.title}</button>
        <span class="flex ml-auto">
          <ArrowDropDown />
        </span>
      </div>
      <div
        class={cls.accordionContent}
        style={{ display: isShow() ? 'block' : 'none' }}
      >
        {props.children}
      </div>
    </div>
  );
};

export default UncontrolledAccordion;
