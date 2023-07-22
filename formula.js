exports.luasPersegi = function (sisi) {
    return sisi * sisi;
};

exports.kelilingPersegi = function (sisi) {
    return sisi * 4;
};

exports.luasPersegiPanjang = function (panjang, lebar) {
    return panjang * lebar;
};

exports.kelilingPersegiPanjang = function (panjang, lebar) {
    return panjang * 2 + lebar * 2;
};
