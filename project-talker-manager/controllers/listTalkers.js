const { readFile } = require('fs').promises;

module.exports = async (req, res, next) => {
  try {
    const talkers = await readFile('./talker.json', 'utf-8')
      .then((content) => JSON.parse(content));
      
    if (!talkers) return res.status(200).json([]);
    
    return res.status(200).json(talkers);
  } catch (e) {
    return next(e);
  }
};