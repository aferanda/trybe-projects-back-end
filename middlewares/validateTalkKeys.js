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
    if (talk.rate < 1 || talk.rate > 5) {
      return res.status(400).json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
    }
    return next();
  } catch (e) {
    return next(e);
  }
};
