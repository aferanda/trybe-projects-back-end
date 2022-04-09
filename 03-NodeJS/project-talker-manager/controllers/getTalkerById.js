const { readFile } = require('fs/promises');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;

    const talkers = await readFile('./talker.json', 'utf-8')
      .then((content) => JSON.parse(content));

    const findTalker = talkers.find((talker) => talker.id === +id);

    if (!findTalker) return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
    return res.status(200).json(findTalker);
  } catch (e) {
    return next(e);
  }
};
