import {useLocale} from 'next-intl';
export async function getDictionaries(): Promise<{
    dictionary: {
        mustUsed: string;
        restOfLetters: string[];
        words: string[];
    }[];
}> {

    const locale = useLocale();
    const dictionaries = await import(`@/dictionaries/${locale}`);
      return {
        dictionary: dictionaries
    };
}