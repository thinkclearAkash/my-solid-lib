import { Skeleton, ChevronLeft, ChevronRight } from '../common';
import { debounce, isEmpty } from 'lodash';
import {
  For,
  JSX,
  Show,
  createEffect,
  createSignal,
  onCleanup,
} from 'solid-js';

import cls from './classes';

interface TabsComponentProps {
  tabs: Array<string> | Array<JSX.Element>;
  activeTab: number;
  onTabClick: (index: number) => void;
  actionButton?: JSX.Element;
  loading?: boolean;
  tabStyleClasses?: string;
  id?: string;
}
const TabsComponent = (props: TabsComponentProps) => {
  let containerRef: HTMLDivElement | undefined;
  let contentRef: HTMLDivElement | undefined;
  const [showLeftButton, setShowLeftButton] = createSignal(false);
  const [showRightButton, setShowRightButton] = createSignal(false);
  const scrollLeft = () => {
    if (!showLeftButton()) return;
    if (containerRef) {
      containerRef.scrollTo({
        left: containerRef.scrollLeft - 500,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (!showRightButton()) return;
    if (containerRef) {
      containerRef.scrollTo({
        left: containerRef.scrollLeft + 500,
        behavior: 'smooth',
      });
    }
  };

  const checkOverflow = () => {
    if (containerRef && contentRef) {
      const isScrolledToLeft = containerRef.scrollLeft === 0;
      const isScrolledToRight =
        containerRef.scrollLeft + containerRef.clientWidth >=
        contentRef.scrollWidth - 1;
      setShowLeftButton(!isScrolledToLeft);
      setShowRightButton(!isScrolledToRight);
    }
  };

  const handleUpdate = () => {
    checkOverflow();
  };

  const debouncedCheckOverflow = debounce(checkOverflow, 100);

  createEffect(() => {
    if (props.tabs.length) {
      debouncedCheckOverflow();
      if (containerRef) {
        containerRef.addEventListener('scroll', handleUpdate);
      }

      return () => {
        if (containerRef) {
          containerRef.removeEventListener('scroll', handleUpdate);
        }
      };
    }
  });

  onCleanup(() => {
    if (containerRef) {
      containerRef.removeEventListener('scroll', handleUpdate);
    }
  });
  return (
    <div class={cls.tabsContainer} id={props.id}>
      {showLeftButton() && (
        <div
          class={cls.leftButton}
          onClick={() => scrollLeft()}
          style={{
            'pointer-events': 'auto',
            cursor: 'pointer',
          }}
        >
          <ChevronLeft />
        </div>
      )}
      <div
        class={`${cls.tabsContainerRef} ${
          showLeftButton() && showRightButton() ? 'px-4' : ''
        }`}
        ref={containerRef}
      >
        <Show when={props.loading === true}>
          <div class="mb-2 flex flex-row ">
            <For each={['1', '2']}>
              {() => (
                <div class="mr-2">
                  <Skeleton variant="rectangular" width={150} height={50} />
                </div>
              )}
            </For>
          </div>
        </Show>
        <Show when={!Boolean(props.loading)}>
          <div
            class={`${cls.tabsContentRef} ${
              !isEmpty(props.tabStyleClasses) && 'gap-2'
            }`}
            ref={contentRef}
          >
            {props.tabs.map((tab, index) => (
              <div
                class={`${cls.tab} ${props.tabStyleClasses} ${
                  props.activeTab === index
                    ? 'border-[#016fa1ff] text-[#016fa1ff]'
                    : ''
                } `}
                onClick={() => props.onTabClick(index)}
              >
                {tab}
              </div>
            ))}
          </div>
        </Show>
      </div>
      {showRightButton() && (
        <div
          class={cls.rightButton}
          onClick={scrollRight}
          style={{
            cursor: 'pointer',
          }}
        >
          <ChevronRight />
        </div>
      )}
      {Boolean(props.actionButton) && props.actionButton}
    </div>
  );
};

export default TabsComponent;
