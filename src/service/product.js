import axios from "@service/axios";

export async function getProducts({
  page = 1,
  pageSize = 10,
  orderBy = "recent",
  keyword = "",
}) {
  const query = `page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${keyword}`;
  const response = await axios.get(`/products?${query}`);

  return response.data;
}

export async function uploadProductImage(formData) {
  const response = await axios.post("/images/upload", formData);

  return response.data;
}

export async function addProduct(productData) {
  const response = await axios.post("/products", productData);

  return response.data;
}

export async function modifyProduct(productId, productData) {
  const response = await axios.patch(`/products/${productId}`, productData);

  return response.data;
}

export async function deleteProduct(productId) {
  const response = await axios.delete(`/products/${productId}`);

  return response.data;
}

export async function getProduct(productId) {
  const response = await axios.get(`/products/${productId}`);

  return response.data;
}

export async function toggleLike(productId, flag) {
  const response = await axios({
    method: flag ? "POST" : "DELETE",
    url: `/products/${productId}/favorite`,
  });

  return response.data;
}
