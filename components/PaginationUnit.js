import _ from "lodash";

export const paginate = (items, pageNumber, pageSize) => {
  const startIndex = (pageNumber - 1) * pageSize;
  console.log("pageSize", pageSize)
  return _(items).slice(startIndex).take(pageSize).value();
};