export const isValidValue = (input: string): boolean => {
  const positiveNumberRegex = /^\d+(\.\d+)?$/;
  return positiveNumberRegex.test(input);
};