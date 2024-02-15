export const getInterestTags = async () => {
  const res = await fetch(process.env.REACT_APP_API_BASE_URL + `/api/tags`, {
    method: 'GET',
  });

  return res.json();
};
