import { useEffect, useState } from 'react';
import { useLocale } from 'next-intl';


export const useFetchDictionary = (resetFlag: boolean) => {
    const [dictionary, setDictionary] = useState<any>({});
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<unknown>('');
    const locale = useLocale();  
    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            try {
             
              const dictionaries = await import(`@/dictionaries/${locale}`);
              const ind: number =
              Math.floor(Math.random() * (dictionaries.dictionary.length - 1)) 
              setDictionary(dictionaries.dictionary[ind]);
              setLoading(false);

            } catch (error) {
              console.error('Error fetching dictionary:', error);
              setError(error);
              setLoading(false);
            }
          };
          fetchData();
    }, [resetFlag]);

    return {dictionary,loading,error}
  };
  

export default useFetchDictionary;