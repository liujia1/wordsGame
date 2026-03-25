# 单词组合句子游戏 🎮

一个专为儿童设计的英语单词排序游戏应用，通过拖拽单词组成正确的句子。

## 功能特点 ✨

1. **随机题目生成**
   - 从 `sentences.txt` 文件中随机抽取 10 个句子
   - 采用有放回抽样，保证每次都有 10 道题目
   - 标点符号作为独立单词处理

2. **拖拽交互**
   - 使用 react-dnd 实现流畅的拖拽体验
   - 上部显示打乱的单词卡片
   - 下部显示横线放置区域
   - 双击已放置的单词可取消

3. **幻灯片切换**
   - 使用 Swiper 实现题目切换
   - 支持左右滑动浏览不同题目
   - 每道题独立保存答案状态

4. **智能评分**
   - 每题 10 分，满分 100 分
   - 提交后即时显示正误反馈
   - 错误题目显示正确答案
   - 支持滑动回看已答题目

5. **儿童友好设计**
   - 鲜艳的色彩搭配
   - 大字体和圆角卡片
   - 动画反馈效果
   - Comic Sans MS 字体（适合儿童阅读）

## 技术栈 🛠️

- **React 18** - UI 框架
- **Vite** - 构建工具
- **TailwindCSS** - 样式框架
- **react-dnd** - 拖拽功能
- **Swiper** - 幻灯片组件

## 安装和运行 📦

### 前置要求
- Node.js 16+ 
- npm 或 yarn

### 安装依赖
```bash
npm install
```

### 开发模式
```bash
npm run dev
```

启动后访问 http://localhost:5173/

### 生产构建
```bash
npm run build
```

### 预览构建
```bash
npm run preview
```

## 项目结构 📁

```
wordsgame/
├── src/
│   ├── components/
│   │   ├── SentenceGame.jsx      # 主游戏组件
│   │   ├── WordSlide.jsx         # 单个游戏幻灯片
│   │   ├── DraggableWord.jsx     # 可拖拽单词组件
│   │   └── DropZone.jsx          # 放置区域组件
│   ├── data/
│   │   └── sentences.txt         # 句子数据文件
│   ├── utils/
│   │   └── gameHelpers.js        # 游戏辅助函数
│   ├── main.jsx                  # 应用入口
│   └── index.css                 # 全局样式
├── public/
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## 自定义配置 ⚙️

### 添加更多句子
编辑 `src/data/sentences.txt` 文件，每行添加一个完整的英语句子：

```
I love you.
She is a teacher.
They play basketball.
He reads a book.
```

### 修改题目数量
在 `src/components/SentenceGame.jsx` 中修改 `selectQuestions` 函数的第二个参数：

```javascript
const selectedQuestions = selectQuestions(sentences, 10); // 改为其他数字
```

### 调整分数设置
在 `handleSubmit` 函数中修改每题分数：

```javascript
if (isCorrect) {
  newScore += 10; // 改为其他分数
}
```

## 游戏玩法 🎯

1. 点击"开始游戏"按钮
2. 拖动上方的单词卡片到下方的横线上
3. 按照正确的语法顺序排列单词
4. 如果放错了，可以：
   - 拖动另一个单词覆盖该位置
   - 双击已放置的单词取消
5. 完成所有题目后，点击"提交答案"
6. 查看得分和正确答案
7. 可以滑动返回查看任何题目的答案

## 教育价值 📚

- ✅ 锻炼英语语法能力
- ✅ 提高单词拼写记忆
- ✅ 培养逻辑思维能力
- ✅ 增强手眼协调能力
- ✅ 寓教于乐的学习方式

## 浏览器兼容性 🌐

推荐使用以下现代浏览器：
- Chrome (推荐)
- Firefox
- Safari
- Edge

需要支持 HTML5、CSS3 和 ES6+

## 许可证 📄

MIT License

## 贡献 🤝

欢迎提交 Issue 和 Pull Request！

---

**祝孩子们学习愉快！** 🎉🎈
