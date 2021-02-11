export const isContent = (data, optionalReturn = '') => {
  return !!data ? `${data}` : optionalReturn;
};
