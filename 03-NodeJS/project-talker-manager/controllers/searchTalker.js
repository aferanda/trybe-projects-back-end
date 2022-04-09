const { readFile } = require('fs/promises');

module.exports = async (req, res, next) => {
  try {
    const { q = '' } = req.query;

    const talkers = await readFile('./talker.json', 'utf-8')
      .then((content) => JSON.parse(content));

    const filteredTalkers = talkers
      .filter((talker) => talker.name.toLowerCase().includes(q.toLowerCase()));

    return res.status(200).json(filteredTalkers);
  } catch (e) {
    return next(e);
  }
};