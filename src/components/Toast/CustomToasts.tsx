import { Component, createEffect, createSignal } from 'solid-js';
import toast from 'solid-toast';
import { CheckCircleOutlined, CircleOutlined, CloseIcon } from '../common';

interface InboxToastProps {
  title: string;
  message: string;
  onClose: () => void;
}

export const InboxToast: Component<InboxToastProps> = ({
  title,
  message,
  onClose,
}) => {
  return (
    <div class="max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5 overflow-hidden">
      <div class="flex-1 w-0 p-4">
        <div class="flex items-start">
          <div class="flex-shrink-0 pt-0.5">
            <CircleOutlined class="h-6 w-6 text-green-400" aria-hidden="true" />
          </div>
          <div class="ml-3 flex-1">
            <p class="text-sm font-medium text-gray-900">{title}</p>
            <p class="mt-1 text-sm text-gray-500">{message}</p>
          </div>
          <div class="ml-4 flex-shrink-0 flex">
            <button
              class="bg-transparent rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none"
              onClick={onClose}
            >
              <span class="sr-only">Close</span>
              <CloseIcon class="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface CustomToastProps {
  message: string;
  onClose: () => void;
  visible: boolean;
}

export const CustomToast: Component<CustomToastProps> = ({
  message,
  onClose,
}) => {
  return (
    <div class="flex items-center justify-between text-white bg-purple-500 p-3 rounded-lg shadow">
      <CheckCircleOutlined class="mr-2" />
      {message}
      <button onClick={onClose}>
        <CloseIcon />
      </button>
    </div>
  );
};

interface MultiLineToastProps {
  message: string;
}

export const MultiLineToast: Component<MultiLineToastProps> = ({ message }) => {
  return (
    <div class="text-white bg-gray-700 p-3 rounded-lg shadow">
      {message.split('\n').map((line) => (
        <p>{line}</p>
      ))}
    </div>
  );
};

interface WithTimerToastProps {
  message: string;
  duration: number;
  onClose: () => void;
  visible: boolean;
  id: string;
  title: string;
}

export const WithTimerToast: Component<WithTimerToastProps> = ({
  message,
  duration,
  onClose,
  visible,
  id,
  title = 'With Timer',
}) => {
  const [life, setLife] = createSignal(100);

  createEffect(() => {
    const interval = setInterval(() => {
      const newLife = life() - (100 / duration) * 1000;
      if (newLife <= 0) {
        clearInterval(interval);
        onClose();
      } else {
        setLife(newLife);
      }
    }, 1000);

    return () => clearInterval(interval);
  });

  return (
    <div
      class={`${
        visible ? 'animate-enter' : 'animate-leave'
      } bg-cyan-600 p-3 rounded-md shadow-md min-w-[350px]`}
    >
      <div class="flex gap-2">
        <div class="flex flex-1 flex-col">
          <div class="font-medium text-white">{title}</div>
          <div class="text-sm text-cyan-50">{message}</div>
        </div>
        <div class="flex items-center">
          <button
            class="px-3.5 h-4/5 tracking-wide font-medium rounded-md text-sm text-white bg-cyan-500 hover:bg-cyan-500/70"
            onClick={() => toast.dismiss(id)}
          >
            CANCEL
          </button>
        </div>
        <div class="flex items-center">
          <button
            class="px-2.5 flex items-center relative h-4/5 tracking-wide rounded-md text-2xl text-white bg-cyan-500/40 hover:bg-cyan-500/20"
            onClick={() => toast.dismiss(id)}
          >
            x
          </button>
        </div>
      </div>
      <div class="relative pt-4">
        <div class="w-full h-1 rounded-full bg-cyan-900"></div>
        <div
          class="h-1 top-4 absolute rounded-full bg-cyan-50"
          style={{ width: `${life()}%` }}
        ></div>
      </div>
    </div>
  );
};
