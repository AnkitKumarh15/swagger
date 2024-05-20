const detectDuplicateKeys = (req, res, next) => {
    const keys = Object.keys(req.body);
    const keyCounts = keys.reduce((acc, key) => {
        acc[key] = (acc[key] || 0) + 1;
        return acc;
    }, {});

    const duplicates = Object.keys(keyCounts).filter(key => keyCounts[key] > 1);

    if (duplicates.length > 0) {
        return res.status(400).send(`Duplicate keys found: ${duplicates.join(', ')}`);
    }

    next();
};

module.exports = detectDuplicateKeys;



// not used anywhere