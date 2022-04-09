module.exports = (req, res, next) => {
  try {
    const { talk } = req.body;

    const regexDate = /^\d{2}[./]\d{2}[./]\d{4}$/;
    const validateDate = regexDate.test(talk.watchedAt);
  
    if (!validateDate) {
      return res.status(400).json({
          message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"',
        });
    }
    return next();
  } catch (e) {
    return next(e);
  }
};
