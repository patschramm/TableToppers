export const fetchBusiness = (businessId) => {
  return $.ajax({
    method: "GET",
    url: `/api/businesses/${businessId}`,
  });
};

export const fetchBusinesses = () => {
  return $.ajax({
    method: "GET",
    url: "/api/businesses",
  });
};

// export const searchBusinesses = (search) => {
//   return $.ajax({
//     method: "GET",
//     url: `/api/businesses?query=${search}`,
//   });
// };
