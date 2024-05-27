import { useContext } from 'react';
import { SelectedMonthContext } from '@/context/SelectedMonthProvider';

export const useSelectedMonth = () => useContext(SelectedMonthContext).month;
export const useSetSelectedMonth = () => {
  return useContext(SelectedMonthContext).setMonth;
};
