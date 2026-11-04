const scenes = {
  family: {
    name: "家庭客厅", icon: "🏠", subtitle: "居家逃生演练", image: "assets/scenes/family-clean.png", ordered: true,
    mission: "先保护自己，再按顺序安全逃生", intro: "客厅出现轻微烟雾。第一要义是确保自身安全：先用湿毛巾保护口鼻，再按步骤行动！",
    summary: "家庭火灾小知识：先用湿毛巾保护自己，尽快离开家里，安全后拨打 119！",
    items: [
      { id: "towel", label: "湿毛巾", x: 27, y: 78, w: 15, h: 18, order: 1, shape: "inset(0 round 22%)", text: "太棒啦 🎉 先用湿毛巾捂住口鼻，挡住有毒浓烟，优先保护自己！" },
      { id: "extinguisher", label: "家用灭火器", x: 68, y: 50, w: 13, h: 25, order: 2, text: "答对咯 ✨ 确保自身安全后，初期小火可以使用灭火器灭火！" },
      { id: "door", label: "居家逃生门", x: 90, y: 38, w: 16, h: 34, order: 3, shape: "inset(0 round 12%)", text: "没错 👍 沿着路线，从家门安全逃离火场！" },
      { id: "phone", label: "报警电话", x: 44, y: 77, w: 15, h: 17, order: 4, text: "非常棒 📞 到达安全区域后拨打 119，通知消防员叔叔！" },
      { id: "curtain", label: "易燃窗帘", x: 11, y: 28, w: 12, h: 33, shape: "polygon(19% 0, 81% 0, 100% 88%, 76% 100%, 50% 92%, 22% 100%, 0 88%)", wrong: true, text: "小心哦 ⚠️ 窗帘很容易着火，火灾的时候远离它！" }
    ]
  },
  mall: {
    name: "商场公共区", icon: "🏬", subtitle: "公共场所逃生演练", image: "assets/scenes/mall-clean.png", ordered: true,
    mission: "先保护自己，再按顺序通过安全通道", intro: "商场上方出现烟雾。第一要义是确保自身安全：先保护口鼻，再按指引行动！",
    summary: "商场火灾小知识：跟着指示牌走安全通道，千万不要搭乘电梯逃生！",
    items: [
      { id: "hydrant", label: "消防栓", x: 31, y: 49, w: 14, h: 28, order: 2, shape: "inset(0 round 12%)", text: "很好！确保自身安全后，消防栓是商场重要的初期消防设备。" },
      { id: "sign", label: "疏散指示牌", x: 46, y: 21, w: 16, h: 13, order: 4, shape: "inset(0 round 18%)", text: "答对啦 ✨ 跟着疏散指示牌，找到逃生方向！" },
      { id: "door", label: "安全通道门", x: 87, y: 50, w: 19, h: 38, order: 5, shape: "inset(0 round 10%)", text: "太棒啦 👍 火灾逃生，走安全通道离开商场！" },
      { id: "towel", label: "湿毛巾取用点", x: 57, y: 60, w: 14, h: 26, order: 1, shape: "inset(0 round 15%)", text: "很好 ✅ 第一时间拿上湿毛巾，保护自己不吸入浓烟！" },
      { id: "broadcast", label: "应急广播", x: 70, y: 21, w: 12, h: 16, order: 3, text: "收到 📢 仔细听应急广播，听从工作人员指挥！" },
      { id: "elevator", label: "商场电梯", x: 12, y: 55, w: 20, h: 45, shape: "inset(0 round 10%)", wrong: true, text: "要记住哦 ⚠️ 火灾电梯很容易故障，逃生绝对不能坐电梯！" }
    ]
  },
  confined: {
    name: "密闭空间", icon: "🧰", subtitle: "应急避险演练", image: "assets/scenes/confined-clean.png", ordered: true,
    mission: "先排烟、备水源、堵门缝、戴防护、亮视线、再撤离", intro: "【场景剧情】你被困在无窗密闭房间！室内火灾产生大量有毒浓烟、氧气不足，千万不能直接开门，请按正确步骤自救逃生！",
    summary: "💡 密闭房间火灾逃生口诀：先排烟、备水源、堵门缝、戴防护、亮视线、再撤离。封闭火场最大危险是浓烟缺氧与开门回火，冷静准备再逃生！",
    items: [
      { id: "vent", label: "排风开关", x: 10, y: 35, w: 10, h: 17, order: 1, shape: "inset(0 round 15%)", effect: "vent", sound: "vent", text: "正确！密闭房间无法自然通风，必须先机械排烟，降低有毒气体浓度。" },
      { id: "bucket", label: "清水水桶", x: 29, y: 70, w: 13, h: 21, order: 2, effect: "bucket", text: "正确！密闭火场需要水源制作湿物料，阻隔烟火与高温。" },
      { id: "cloth", label: "湿抹布", x: 40, y: 74, w: 15, h: 12, order: 3, shape: "inset(0 round 22%)", effect: "cloth", text: "正确！湿抹布可封堵门缝，防止外部烟火倒灌进密闭房间。" },
      { id: "mask", label: "防毒面罩", x: 43, y: 41, w: 15, h: 18, order: 4, effect: "mask", text: "正确！封闭空间浓烟缺氧、毒性极强，必须佩戴面罩保护呼吸道。" },
      { id: "flashlight", label: "应急手电筒", x: 56, y: 42, w: 14, h: 13, order: 5, effect: "flashlight", text: "正确！密闭火场无光、烟雾遮挡视线，必须照明确认逃生路径。" },
      { id: "door", label: "密闭逃生门", x: 89, y: 44, w: 18, h: 38, order: 6, shape: "inset(0 round 10%)", effect: "escape", sound: "escape", text: "准备完成！现在可以安全打开密闭逃生门撤离。" },
      { id: "boxes", label: "杂物纸箱", x: 10, y: 68, w: 18, h: 35, shape: "inset(0 round 10%)", wrong: true, penalty: 10, text: "逃生时不能贪恋杂物，会浪费黄金逃生时间。" }
    ]
  },
  classroom: {
    name: "教室", icon: "🏫", subtitle: "校园逃生演练", image: "assets/scenes/classroom-teacher-students-door-arrow.png", ordered: true,
    mission: "捂口鼻、灭小火、辨方向、快撤离", intro: "【场景剧情】上课期间教室角落突发起火，伴随轻微烟雾。先捂住口鼻，再按正确消防知识安全撤离！",
    summary: "教室火灾正确逃生口诀：捂口鼻、灭小火、辨方向、快撤离，不慌乱、不贪恋物品！",
    items: [
      { id: "towel", label: "湿毛巾", stepLabel: "湿毛巾 / 衣物", x: 66, y: 65, w: 15, h: 13, order: 1, shape: "inset(0 round 22%)", text: "正确！火灾浓烟有毒，需要捂住口鼻、弯腰逃生。", effect: "cover" },
      { id: "clothes", label: "衣服", x: 70, y: 37, w: 12, h: 24, order: 1, alternative: true, shape: "polygon(25% 0, 75% 0, 100% 25%, 82% 100%, 18% 100%, 0 25%)", text: "正确！衣物也可以辅助捂住口鼻，弯腰快速撤离。", effect: "cover" },
      { id: "hydrant", label: "消防栓", x: 81, y: 39, w: 12, h: 28, optional: true, shape: "inset(0 round 10%)", text: "消防栓是重要消防设施，请在老师或工作人员指导下使用。" },
      { id: "extinguisher", label: "灭火器", x: 94, y: 79, w: 13, h: 29, order: 2, text: "正确！初期小火可以使用灭火器灭火，阻止火势蔓延。", effect: "extinguish" },
      { id: "arrow", label: "安全出口方向", x: 75, y: 89, w: 20, h: 18, order: 3, shape: "inset(0 round 18%)", text: "认准安全出口方向，弯腰低姿快速撤离。", effect: "guide" },
      { id: "door", label: "教室门", x: 94, y: 36, w: 15, h: 34, order: 4, shape: "inset(0 round 10%)", text: "逃生成功！你已掌握正确教室火灾逃生知识。", effect: "evacuate" },
      { id: "book", label: "书本", x: 19, y: 67, w: 12, h: 14, wrong: true, text: "这不是逃生道具，不要浪费逃生时间！" },
      { id: "tissue", label: "纸巾盒", x: 42, y: 65, w: 12, h: 15, wrong: true, text: "这不是逃生道具，不要浪费逃生时间！" }
    ]
  }
};

const homeScreen = document.querySelector("#homeScreen");
const gameScreen = document.querySelector("#gameScreen");
const sceneImage = document.querySelector("#sceneImage");
const sceneName = document.querySelector("#sceneName");
const sceneIcon = document.querySelector("#sceneIcon");
const sceneSubtitle = document.querySelector("#sceneSubtitle");
const missionTitle = document.querySelector("#missionTitle");
const missionHint = document.querySelector("#missionHint");
const scoreValue = document.querySelector("#scoreValue");
const steps = document.querySelector("#steps");
const hotspots = document.querySelector("#hotspots");
const stage = document.querySelector("#stage");
const sceneEffects = document.querySelector("#sceneEffects");
const bubble = document.querySelector("#knowledgeBubble");
const bubbleText = document.querySelector("#knowledgeText");
const bubbleClose = document.querySelector("#knowledgeClose");
const modal = document.querySelector("#modal");
const modalKicker = document.querySelector("#modalKicker");
const modalTitle = document.querySelector("#modalTitle");
const modalText = document.querySelector("#modalText");
const modalButton = document.querySelector("#modalButton");

let game = null;
let bubbleTimer = null;

document.querySelectorAll(".scene-card").forEach((card) => card.addEventListener("click", () => startGame(card.dataset.scene)));
document.querySelector("#backHome").addEventListener("click", showHome);
document.querySelector("#restartButton").addEventListener("click", () => startGame(game.id));
document.querySelector("#hintButton").addEventListener("click", giveHint);
modalButton.addEventListener("click", () => {
  modal.classList.add("is-hidden");
  if (game?.finished) showHome();
});
bubbleClose.addEventListener("click", () => {
  window.clearTimeout(bubbleTimer);
  bubble.classList.add("is-hidden");
});

function startGame(id) {
  const scene = scenes[id];
  game = { id, score: 100, completed: new Set(), mistakes: new Set(), nextOrder: 1, scene, effects: new Set() };
  homeScreen.classList.add("is-hidden");
  gameScreen.classList.remove("is-hidden");
  sceneName.textContent = scene.name;
  sceneIcon.textContent = scene.icon;
  sceneSubtitle.textContent = scene.subtitle;
  missionTitle.textContent = scene.mission;
  missionHint.textContent = "第一要义：先确保自身安全，再按步骤依次点击黄色框内物品。";
  sceneImage.src = scene.image;
  sceneImage.alt = `${scene.name}火灾逃生互动场景`;
  renderGame();
  if (id === "confined") {
    modalKicker.textContent = "场景剧情";
    modalTitle.textContent = "密闭空间警报";
    modalText.textContent = scene.intro;
    modalButton.textContent = "开始自救";
    modal.classList.remove("is-hidden");
  } else {
    showBubble(scene.intro, "good");
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function getMainItems(scene) {
  return scene.items.filter((item) => !item.wrong && !item.optional && !item.alternative);
}

function renderSceneEffects() {
  if (game.id === "confined") {
    sceneEffects.innerHTML = `
      <span class="confined-smoke"></span>
      <span class="confined-vent-flow ${game.effects.has("vent") ? "is-active" : ""}"></span>
      <span class="confined-vent-status ${game.effects.has("vent") ? "is-active" : ""}">排风运行中</span>
      <span class="confined-water-ripple ${game.effects.has("bucket") ? "is-active" : ""}"></span>
      <span class="confined-cloth-wave ${game.effects.has("cloth") ? "is-active" : ""}"></span>
      <span class="confined-mask-aura ${game.effects.has("mask") ? "is-active" : ""}"></span>
      <span class="confined-light-beam ${game.effects.has("flashlight") ? "is-active" : ""}"></span>
      <span class="confined-door-smoke ${game.effects.has("backdraft") ? "is-active" : ""}"></span>
      <span class="confined-backdraft ${game.effects.has("backdraft") ? "is-active" : ""}">危险：烟火倒灌！</span>
      <span class="confined-warm-light ${game.effects.has("escape") ? "is-active" : ""}"></span>
      <span class="confined-success-stars ${game.effects.has("escape") ? "is-active" : ""}">✦　✧　✦</span>
      <span class="confined-escape-cue ${game.effects.has("escape") ? "is-active" : ""}">安全撤离</span>
    `;
    return;
  }
  if (game.id !== "classroom") {
    sceneEffects.innerHTML = "";
    return;
  }
  sceneEffects.innerHTML = `
    <span class="effect-cover ${game.effects.has("cover") ? "is-active" : ""}">捂住口鼻</span>
    <span class="effect-powder ${game.effects.has("extinguish") ? "is-active" : ""}"></span>
    <span class="effect-evacuate ${game.effects.has("evacuate") ? "is-active" : ""}">老师带领同学有序撤离</span>
  `;
}

function renderGame() {
  scoreValue.textContent = game.score;
  stage.classList.toggle("foggy", game.mistakes.size >= 2);
  stage.classList.toggle("confined-smoky", game.id === "confined" && !game.effects.has("vent"));
  stage.classList.toggle("confined-ventilated", game.id === "confined" && game.effects.has("vent"));
  stage.classList.toggle("confined-bucket-ready", game.id === "confined" && game.effects.has("bucket"));
  stage.classList.toggle("confined-cloth-ready", game.id === "confined" && game.effects.has("cloth"));
  stage.classList.toggle("confined-mask-ready", game.id === "confined" && game.effects.has("mask"));
  stage.classList.toggle("confined-lit", game.id === "confined" && game.effects.has("flashlight"));
  stage.classList.toggle("confined-escaping", game.id === "confined" && game.effects.has("escape"));
  stage.classList.toggle("classroom-fire-growing", game.id === "classroom" && game.mistakes.size >= 2);
  stage.classList.toggle("classroom-fire-softened", game.id === "classroom" && game.effects.has("extinguish"));
  stage.classList.toggle("classroom-guiding", game.id === "classroom" && game.effects.has("guide"));
  stage.classList.toggle("classroom-evacuating", game.id === "classroom" && game.effects.has("evacuate"));
  const correctItems = getMainItems(game.scene)
    .sort((a, b) => (a.order ?? Number.MAX_SAFE_INTEGER) - (b.order ?? Number.MAX_SAFE_INTEGER));
  steps.innerHTML = correctItems.map((item) => {
    const done = game.completed.has(item.id);
    const active = !done && (!game.scene.ordered || item.order === game.nextOrder);
    return `<li class="${done ? "done" : ""} ${active ? "active" : ""}">${done ? "✓ " : ""}${item.stepLabel || item.label}</li>`;
  }).join("");
  renderSceneEffects();
  hotspots.innerHTML = "";
  game.scene.items.forEach((item) => {
    const button = document.createElement("button");
    const isDone = game.completed.has(item.id);
    button.type = "button";
    button.className = `hotspot ${isDone ? "completed" : ""}`;
    button.setAttribute("aria-label", item.label);
    button.dataset.id = item.id;
    button.style.left = `${item.x}%`;
    button.style.top = `${item.y}%`;
    button.style.setProperty("--hotspot-w", `${item.w || 9}%`);
    button.style.setProperty("--hotspot-h", `${item.h || 12}%`);
    if (item.shape) button.style.setProperty("--hotspot-shape", item.shape);
    button.disabled = isDone;
    button.addEventListener("click", () => chooseItem(item, button));
    hotspots.appendChild(button);
  });
}

function chooseItem(item, button) {
  if (item.wrong) {
    button.classList.add("wrong");
    if (!game.mistakes.has(item.id)) {
      game.mistakes.add(item.id);
      game.score = Math.max(0, game.score - (item.penalty || 10));
    }
    showBubble(`❌ 第一要义是确保自身安全。${item.text}`, "bad");
    playFeedback("wrong");
    showWrongMotion(button);
    return;
  }
  if (item.optional) {
    game.completed.add(item.id);
    showBubble(`✅ ${item.text}`, "good");
    playFeedback("good");
    renderGame();
    return;
  }
  if (game.scene.ordered && item.order !== game.nextOrder) {
    const current = game.scene.items.find((entry) => entry.order === game.nextOrder && !entry.alternative);
    const confinedDoor = game.id === "confined" && item.id === "door";
    const confinedInitialDoor = confinedDoor && game.nextOrder === 1;
    const confinedMistakeKey = `${item.id}-before-${game.nextOrder}`;
    const earlyClassroomDoor = game.id === "classroom" && item.id === "door";
    const openingDoor = earlyClassroomDoor && game.nextOrder === 1;
    const missingExtinguish = earlyClassroomDoor && game.nextOrder === 2;
    const penalty = confinedInitialDoor ? 30 : confinedDoor ? 15 : openingDoor ? 20 : missingExtinguish ? 10 : game.id === "confined" ? 15 : 5;
    if (!game.mistakes.has(confinedMistakeKey)) game.score = Math.max(0, game.score - penalty);
    game.mistakes.add(confinedMistakeKey);
    if (confinedDoor) game.effects.add("backdraft");
    const message = confinedInitialDoor
      ? "❌ 严重错误！密闭火场严禁直接开门！会引发烟火倒灌、轰燃危险！"
      : confinedDoor
        ? "⚠️ 逃生步骤缺失，准备工作不完整，无法获得满分。"
        : openingDoor
          ? "❌ 错误！浓烟会导致窒息，必须先捂住口鼻。"
          : missingExtinguish
            ? "⚠️ 初期小火可以自救灭火，未完成完整逃生步骤，无法满分通关。"
            : game.id === "confined"
              ? "⚠️ 操作顺序错误！室内毒气未排出，防护效果不足，存在安全隐患。"
              : `⚠️ 先确保自身安全，完成「${current?.stepLabel || current?.label || "当前步骤"}」，再进行「${item.label}」。`;
    showBubble(message, "bad");
    playFeedback("wrong");
    showWrongMotion(button);
    return;
  }
  game.completed.add(item.id);
  game.scene.items
    .filter((entry) => entry.order === item.order && entry.alternative)
    .forEach((entry) => game.completed.add(entry.id));
  if (item.alternative) {
    const primary = game.scene.items.find((entry) => entry.order === item.order && !entry.alternative);
    if (primary) game.completed.add(primary.id);
  }
  if (item.effect) game.effects.add(item.effect);
  if (game.scene.ordered) game.nextOrder += 1;
  showBubble(`✅ ${item.text}`, "good");
  playFeedback(item.sound || (item.effect === "extinguish" ? "extinguish" : "good"));
  renderGame();
  const requiredDone = [...game.completed].filter((id) => {
    const entry = game.scene.items.find((candidate) => candidate.id === id);
    return entry && !entry.wrong && !entry.optional && !entry.alternative;
  }).length;
  if (requiredDone === getMainItems(game.scene).length) {
    window.setTimeout(showWin, game.id === "classroom" || game.id === "confined" ? 950 : 650);
  }
}

function showWrongMotion(button) {
  button.disabled = true;
  stage.classList.add("stage-shake");
  window.setTimeout(() => {
    stage.classList.remove("stage-shake");
    renderGame();
  }, 420);
}

function playFeedback(kind) {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;
  const context = new AudioContext();
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  const settings = kind === "wrong"
    ? { frequency: 170, duration: .16, wave: "sawtooth" }
    : kind === "vent"
      ? { frequency: 92, duration: .42, wave: "triangle" }
      : kind === "escape"
        ? { frequency: 620, duration: .28, wave: "sine" }
    : kind === "extinguish"
      ? { frequency: 110, duration: .34, wave: "triangle" }
      : { frequency: 760, duration: .12, wave: "sine" };
  oscillator.type = settings.wave;
  oscillator.frequency.setValueAtTime(settings.frequency, context.currentTime);
  if (kind === "extinguish") oscillator.frequency.exponentialRampToValueAtTime(72, context.currentTime + settings.duration);
  gain.gain.setValueAtTime(.045, context.currentTime);
  gain.gain.exponentialRampToValueAtTime(.001, context.currentTime + settings.duration);
  oscillator.connect(gain).connect(context.destination);
  oscillator.start();
  oscillator.stop(context.currentTime + settings.duration);
  oscillator.addEventListener("ended", () => context.close());
}

function showBubble(text, tone) {
  window.clearTimeout(bubbleTimer);
  bubbleText.textContent = text;
  bubble.className = `knowledge-bubble ${tone}`;
  bubbleTimer = window.setTimeout(() => bubble.classList.add("is-hidden"), 4200);
}

function giveHint() {
  const target = game.scene.ordered
    ? game.scene.items.find((item) => item.order === game.nextOrder)
    : game.scene.items.find((item) => !item.wrong && !game.completed.has(item.id));
  if (!target) return;
  const button = document.querySelector(`.hotspot[data-id="${target.id}"]`);
  if (button) {
    document.querySelectorAll(".hotspot.hinted").forEach((node) => node.classList.remove("hinted"));
    button.classList.add("hinted");
    showBubble(`💡 试着寻找「${target.label}」吧！`, "good");
    window.setTimeout(() => button.classList.remove("hinted"), 2800);
  }
}

function showWin() {
  game.finished = true;
  modalKicker.textContent = `最终得分 ${game.score} 分`;
  modalTitle.textContent = game.id === "confined" ? "🎉 密闭空间逃生成功！" : "🎉 恭喜通关！";
  modalText.textContent = game.scene.summary;
  modalButton.textContent = "继续探索";
  modal.classList.remove("is-hidden");
}

function showHome() {
  gameScreen.classList.add("is-hidden");
  homeScreen.classList.remove("is-hidden");
  modal.classList.add("is-hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}
