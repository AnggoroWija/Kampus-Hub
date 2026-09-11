import { mahasiwa } from "./data";

console.log(mahasiwa0);

mahasiwa.forEach((mhs, index) => {
    console.log(`${index + 1}. nama: ${mhs.nama} | prodi: ${mhs.prodi} | ipk: ${mhs.nilai}`);
});