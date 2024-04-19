import { NoData } from "../../assets";

export type Props = {
  message?: string;
};

export const EmptyData = (props: Props) => {
  return (
    <div class="flex flex-col justify-center items-center w-full">
      <div class="mb-4">
        <img src={NoData} alt="No Data" class="w-32 h-32" />
      </div>
      <div class="text-gray-500">
        <p>{ props.message || 'No data available to display.'}</p>
      </div>
    </div>
  );
};
