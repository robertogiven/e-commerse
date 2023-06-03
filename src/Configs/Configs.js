export const formatRibuan = (angka) => {
  var ribuan = angka.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return ribuan;
};
