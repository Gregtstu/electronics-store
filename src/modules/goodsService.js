import {API_URI} from "./var";


export const getGoods = ({page}) => {
  const url = new URL(`http://localhost:3024/api/goods`);
  if (page) url.searchParams.append('page', page)

  return fetch(url).then(res => res.json());
};

// export const getGoodsItem = (id) =>
//   fetch(`${API_URI}api/goods/${id}`)
//     .then(response => response.json())
//
//
// export const getCategory = () =>
//   fetch(`${API_URI}api/category`)
//     .then(response => response.json())
//
// export const getGoodsList = list =>
//   fetch(`${API_URI}api/goods/?list=${list}`)
//     .then(response => response.json());
//
// export const getGoodsCategoryItem = (category) =>
//   fetch(`${API_URI}api/goods/?category=${category}`)
//     .then(response => response.json());
