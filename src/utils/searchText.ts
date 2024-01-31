const checkMatch = (text: string, searchText: string) => {
  return text.toLowerCase().includes(searchText.toLowerCase());
};

const isKelas = (text: string) => {
  return text.includes('k:');
};

const getKelas = (text: string) => {
  return Number.isNaN(parseInt(text.split('k:')[1]))
    ? 0
    : parseInt(text.split('k:')[1]);
};

const isAlphabet = (text: string) => {
  return (
    (text.charCodeAt(0) >= 65 && text.charCodeAt(0) <= 90) ||
    (text.charCodeAt(0) >= 97 && text.charCodeAt(0) <= 122)
  );
};

const isKode = (text: string) => {
  return (
    text.length === 6 &&
    isAlphabet(text[0]) &&
    isAlphabet(text[1]) &&
    Number.isInteger(parseInt(text.slice(2, 6)))
  );
};

const parseSearchString = (text: string) => {
  let kode = '';
  let kelas = 0;

  const result = text.split(' ').map((item) => {
    if (isKelas(item)) {
      kelas = getKelas(item);
      return '';
    }
    if (isKode(item)) {
      kode = item;
      return '';
    }
    return item;
  });

  return { kode, kelas, nama: result.join(' ') };
};

export { checkMatch, parseSearchString };
