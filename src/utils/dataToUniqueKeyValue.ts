const uniqueArray = (obj: Array<object>) =>
  obj.filter((arrElement, index) => {
    const arrElementStringify = JSON.stringify(arrElement);
    return (
      index ===
      obj.findIndex((findObj) => {
        return JSON.stringify(findObj) === arrElementStringify;
      })
    );
  });

export const dataToUniqueKeyValue = (dataArr: Array<any>) => {
  return uniqueArray(dataArr.map((el) => ({ [el.name]: el.id })));
};
