export default (dateUTC: string) => {
  const date = dateUTC.split('T')[0].split('-');
  const day = date[2];
  const month = date[1];
  const year = date[0];

  return `${day}/${month}/${year}`;
};
