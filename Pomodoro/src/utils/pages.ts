export function getPagesCount(totalCount: number, limit: number) {
  return Math.ceil(totalCount / limit);
}

export function getPagesArray(pagesCount: number) {
  const pagesArray = [];
  for (let i = 0; i < pagesCount; i++) {
    pagesArray.push(i + 1);
  }
  return pagesArray;
}
