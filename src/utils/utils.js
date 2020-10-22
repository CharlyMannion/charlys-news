const trimDate = (dateStr) => {
    const trimmedDate = dateStr.substring(0, 10);
    return trimmedDate;
}

module.exports = { trimDate };