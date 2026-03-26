/**
 * 将句子拆分成单词和标点符号
 * @param {string} sentence - 完整的句子
 * @returns {string[]} 单词和标点的数组
 */
export const splitSentence = (sentence) => {
  // 使用正则表达式匹配单词和标点
  const tokens = sentence.match(/\w+|[^\w\s]/g);
  return tokens || [];
};

/**
 * 打乱数组顺序（Fisher-Yates 洗牌算法）
 * @param {array} array - 要打乱的数组
 * @returns {array} 打乱后的新数组
 */
export const shuffleArray = (array) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

/**
 * 基于种子的确定性洗牌（同一个种子产生相同的洗牌结果）
 * @param {array} array - 要打乱的数组
 * @param {string} seed - 种子字符串
 * @returns {array} 打乱后的新数组
 */
export const seededShuffle = (array, seed) => {
  const newArray = [...array];
  
  const hashCode = (str) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
    }
    return Math.abs(hash);
  };
  
  const seedNum = hashCode(seed);
  let currentSeed = seedNum;
  const random = () => {
    currentSeed = (currentSeed * 9301 + 49297) % 233280;
    return currentSeed / 233280;
  };
  
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  
  return newArray;
};

/**
 * 从句子列表中随机抽取指定数量的句子（有放回抽样）
 * @param {string[]} sentences - 句子列表
 * @param {number} count - 抽取数量，默认 10
 * @returns {string[]} 抽取的句子列表
 */
export const selectQuestions = (sentences, count = 10) => {
  const selected = [];
  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * sentences.length);
    selected.push(sentences[randomIndex]);
  }
  return selected;
};

/**
 * 检查答案是否正确
 * @param {string[]} userAnswer - 用户提交的答案（单词数组）
 * @param {string} correctSentence - 正确的句子
 * @returns {boolean} 是否正确
 */
export const checkAnswer = (userAnswer, correctSentence) => {
  const correctWords = splitSentence(correctSentence);
  
  if (userAnswer.length !== correctWords.length) {
    return false;
  }
  
  for (let i = 0; i < userAnswer.length; i++) {
    if (userAnswer[i] !== correctWords[i]) {
      return false;
    }
  }
  
  return true;
};

/**
 * 获取句子的显示文本（用于展示正确答案）
 * @param {string[]} words - 单词数组
 * @returns {string} 组合后的句子
 */
export const getSentenceText = (words) => {
  return words.join(' ');
};
