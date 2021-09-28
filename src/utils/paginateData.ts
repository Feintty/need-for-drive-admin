export const paginateData = (
  data: Array<any>,
  countInPage: number,
  page: number
) => data.slice(countInPage * (page - 1), countInPage * page);
