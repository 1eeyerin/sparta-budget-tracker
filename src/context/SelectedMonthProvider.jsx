import { createContext, useState, useMemo, useEffect } from 'react';
import { getLocalStorage, setLocalStorage } from '@/utils';
import { MONTH_STORAGE_NAME } from '@/constants';

export const SelectedMonthContext = createContext();

const SelectedMonthProvider = ({ children }) => {
  const [month, setMonth] = useState(
    getLocalStorage(MONTH_STORAGE_NAME) || new Date().getMonth() + 1,
  );

  const value = useMemo(() => {
    return { month, setMonth };
  }, [month, setMonth]);

  useEffect(() => {
    setLocalStorage(MONTH_STORAGE_NAME, month);
  }, [month]);

  return (
    <SelectedMonthContext.Provider value={value}>
      {children}
    </SelectedMonthContext.Provider>
  );
};

export default SelectedMonthProvider;
