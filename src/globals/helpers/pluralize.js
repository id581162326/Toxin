const pluralize = function (plural, count) {
    if (count === 0) return `${count} ${plural.many}`;
    if (count === 1) return `${count} ${plural.one}`;
    if (count > 1 && count < 5) return `${count} ${plural.few}`;
    if (count >= 5) return `${count} ${plural.many}`;
};

module.exports = pluralize;