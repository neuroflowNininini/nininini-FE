export const postNailMeasure = async (formData: FormData) => {
  const res = await fetch(process.env.REACT_APP_API_BASE_URL + `/api/members/nail-measurement`, {
    method: 'POST',
    body: formData,
  });

  return res.json();
};
