const authPage = (permissions) => {
  return (req, res, next) => {
    const userRole = req.body.role;
    if (permissions.includes(userRole)) {
      next(); // move one this persone is authorized
    } else {
      return res.status(401).json("You are not authorized");
    }
  };
};
export { authPage };

