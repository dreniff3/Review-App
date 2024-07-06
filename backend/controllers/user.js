const createUser = (req, res) => {
    res.json({ user: req.body });
};

export { createUser };