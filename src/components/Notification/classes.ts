interface Cls {
  [key: string]: string;
}
export const colors = {
  info: '#468DB5',
  error: '#D32F2F',
  warning: '#F59D25',
  accordion: '#468db5',
};

const notificationClasses: Cls = {
  container: 'px-4 py-2 rounded-md my-2 !mx-0 border-2 rounded-5 shadow-md ',
  icon: 'mr-4 color-[#D32F2F]',
  warning: 'border-[#F59D25]',
  info: 'border-[#468DB5]',
  error: 'border-[#D32F2F] ',
  tableError: 'border-[#D32F2F] bg-white',
  flex: '',
  content: '',
  'Red Flag': 'border-[#E09A9A] bg-[#FF5856]/10 cursor-pointer',
  'Blue Flag': 'border-[#8BD0FF] bg-[#2989D8]/10 cursor-pointer',
  'Green Flag': 'border-[#129208] bg-[#068A06]/10 cursor-pointer',
  'Yellow Flag': 'border-[#d6d31a] bg-[#DAFF10]/10 cursor-pointer',
  'Orange Flag': 'border-[#f3b42d] bg-[#FFB238]/10 cursor-pointer',
  'Billing Note':
    'border-[#FF8F00] bg-[#FF5856]/10 cursor-pointer bg-[#FFC106]',
  'Billing Hold': 'border-[#B00020] cursor-pointer bg-[#D32F2F] text-white',
};

export const notificationStyles = {
  endIcon: { marginLeft: '6px' },
  alignRight: {
    marginLeft: 'auto',
    cursor: 'pointer',
  },
};
export default notificationClasses;
