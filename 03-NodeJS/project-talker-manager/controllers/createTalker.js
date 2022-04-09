const { readFile, writeFile } = require('fs/promises');

module.exports = async (req, res, next) => {
  try {
    const { name, age, talk: { watchedAt, rate } } = req.body;

    const talkers = await readFile('./talker.json', 'utf-8')
      .then((content) => JSON.parse(content));

    const generatorId = talkers.length + 1;
    const newTalker = { id: generatorId, name, age, talk: { watchedAt, rate } };

    talkers.push(newTalker);

    await writeFile('./talker.json', JSON.stringify(talkers, null, 2));
    return res.status(201).json(newTalker);
  } catch (e) {
    return next(e);
  }
};