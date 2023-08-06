import { useEffect, useState } from "react";

function useNote<T>(data: T, db: string) {
  const [value, setValue] = useState<T>();
  const jsonValue = localStorage.getItem(db);
  jsonValue === null ? setValue(data) : setValue(JSON.parse(jsonValue));

  useEffect(() => {
    localStorage.setItem(db, JSON.stringify(value)); 
  }, [value, db]);

  return [value, setValue] as [T, typeof setValue];
}

export default useNote;
