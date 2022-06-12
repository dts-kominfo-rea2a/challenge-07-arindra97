const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  try{
    // menggabungkan object film theater IXX dan VGC
    const theater = (await promiseTheaterIXX()).concat(await promiseTheaterVGC());
    // mencari jumlah emosi dari film yang ditonton oleh seseorang
    let result = 0;
    theater.map((element) => element.hasil === emosi && (result += 1));
    return result;
  } catch(err){
    console.log(err);
  }
}

module.exports = {
  promiseOutput,
};
