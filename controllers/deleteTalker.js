const { readFile, writeFile } = require('fs/promises');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;

    const talkers = await readFile('./talker.json', 'utf-8')
      .then((content) => JSON.parse(content));

    const talkerIndex = talkers.findIndex((talker) => talker.id === +id);

    if (talkerIndex === -1) return res.status(404).json({ message: 'Talker not found' });

    talkers.splice(talkerIndex, 1);

    await writeFile('./talker.json', JSON.stringify(talkers, null, 2));
    return res.status(204).end();
  } catch (e) {
    return next(e);
  }
};