import jwt from "jsonwebtoken"

const verToken = (req, res, next) => {
  try {
      const token = req.headers.authorization.split(' ')[1]
      if (!token) {
          res.status(403).json({ message: 'Требуется авторизация' })
      }
      const decodedToken = jwt.verify(token, process.env.SECRET)
      req.user = decodedToken
      next()
  } catch (error) {
      console.log(error);
      res.status(403).json({ message: 'Требуется авторизация' })
  }
}

  export default verToken