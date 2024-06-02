export const isValid = (text: string) => {
  const regex = /^#[abcdef,0-9]{6}$/gi;
  return regex.test(text);
};
