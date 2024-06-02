export const convertor = (data: string): number[] => {
  return [
    parseInt(data.slice(1, 3), 16),
    parseInt(data.slice(3, 5), 16),
    parseInt(data.slice(5, 7), 16)
  ];
};
