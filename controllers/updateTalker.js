const { readFile, writeFile } = require('fs/promises');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, age, talk } = req.body;

    const talkers = await readFile('./talker.json', 'utf-8')
      .then((content) => JSON.parse(content));

    const talkerIndex = talkers.findIndex((talker) => talker.id === +id);
    if (talkerIndex === -1) return res.status(404).json({ message: 'Talker not found' });

    const updateTalker = { name, age, id: Number(id), talk };
    talkers[talkerIndex] = updateTalker;

    await writeFile('./talker.json', JSON.stringify(talkers, null, 2));
    return res.status(200).json(updateTalker);
  } catch (e) {
    return next(e);
  }
};