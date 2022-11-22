const login =  ({ body }, res) => {
    console.log(body);
    res.status(200).json({"user": body.user, "pass": body.password})
};

export { login };
