import faker from "faker";

const imgIds = { min: 110, max: 1084 };

const randomImgId = () => {
    return Math.floor(Math.random() * (imgIds.max - imgIds.min)) + imgIds.min;
};

const randomImgUrl = (length = 1) => {
    if (length === 1 || !Number.isInteger(length))
        return "https://picsum.photos/id/{id}/500/300".replace(
            "{id}",
            randomImgId()
        );
    const imgUrls = [];
    for (let i = 0; i < length; i++) {
        imgUrls.push(randomImgUrl());
    }
    return imgUrls;
};

const randomChecked = () => {
    return [true, false][Math.round(Math.random())];
};

export const allRestList = randomImgUrl(20).map((url) => ({
    key: faker.datatype.uuid(),
    name: faker.random.words(),
    address: faker.address.cityName() + ", " + faker.address.streetAddress(),
    imgUrl: url,
    checked: randomChecked(),
}));

export const newRestList = randomImgUrl(6).map((url) => ({
    key: faker.datatype.uuid(),
    name: faker.random.words(),
    address: faker.address.cityName() + ", " + faker.address.streetAddress(),
    imgUrl: url,
    checked: randomChecked(),
}));

/**
 *
 * @param {*} restList {[]}
 * @param {*} keyword {String}
 * @param {*} keys {Array || String}
 * @returns
 */
export const findRestByKeyword = (restList, keyword, keys = ["name"]) => {
    if (!(restList && Array.isArray(restList))) return [];
    if (!keyword) return restList;
    if (typeof keyword !== "string") return [];
    if (!(Array.isArray(keys) || typeof keys === "string")) return [];
    const keysSearch = Array.isArray(keys) ? keys : [keys];
    const newRestList = [];
    let keywordTrim = keyword.trim();
    restList.forEach((rest) => {
        let found = false;
        keysSearch.forEach((key) => {
            if (typeof key !== "string" || !rest.hasOwnProperty(key)) return;
            if (rest[key].indexOf(keywordTrim) >= 0) found = true;
        });
        if (found) newRestList.push(rest);
    });
    return newRestList;
};
