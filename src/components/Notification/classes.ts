interface Cls {
  [key: string]: string;
}
export const colors = {
  info: '#468DB5',
  error: '#D32F2F',
  warning: '#F59D25',
  accordion: '#468db5',
};

const commonStyles = 'border-[#546E7A] bg-[#ECEFF1] cursor-pointer';

const notificationClasses: Cls = {
  container: 'px-4 py-2 rounded-md !mx-0 border-[3px] rounded-5 shadow-md',
  icon: 'mr-4 color-[#D32F2F]',
  warning: 'border-[#F59D25]',
  info: 'border-[#468DB5]',
  error: 'border-[#D32F2F] ',
  tableError: 'border-[#D32F2F] bg-white',
  flex: '',
  content: '',
  'Red Flag': 'border-[#B00020] bg-[#FF7D80] cursor-pointer',
  'Blue Flag': 'border-[#026EA1] bg-[#77D6FF] cursor-pointer',
  'Green Flag': 'border-[#28957C] bg-[#72FFA1] cursor-pointer',
  'Yellow Flag': 'border-[#FBC02D] bg-[#FEF272] cursor-pointer',
  'Orange Flag': 'border-[#D84315] bg-[#FFC863] cursor-pointer',
  'Billing Note':
    'border-[#FF8F00] bg-[#FF5856]/10 cursor-pointer bg-[#FFC106]',
  'Billing Hold': 'border-[#B00020] cursor-pointer bg-[#D32F2F] text-white',
  'Hot Load': commonStyles,
  'Needs Approval': 'border-[#0288D1] bg-[#B3E5FC] cursor-pointer',
  'Get Paperwork': commonStyles,
  'EFS Issued': commonStyles,
  'Missing Paperwork': commonStyles,
  'Refund Request': commonStyles,
  flagTitleText: 'text-[16px]',
  flagComments:
    'w-[30px] h-[30px] rounded-3xl bg-[#1B4960] text-white text-center border-[#fff] border-2',
  gridFlagComments: 'flex justify-center items-center',
  'Tender Updated': 'border-[#F59D25] bg-[#FFC106]/10 cursor-pointer',
};

export const notificationStyles = {
  endIcon: { marginLeft: '6px' },
  alignRight: {
    marginLeft: 'auto',
    cursor: 'pointer',
  },
};
export default notificationClasses;
