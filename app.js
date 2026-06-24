const artists = [
  {
    id: "xue",
    name: "薛之谦",
    agentName: "薛之谦 AI 音乐分身",
    color: "#5fb7ff",
    accent: "#ffffff",
    style: "幽默自嘲、细腻深情、爱用轻松语气讲扎心段子",
    songs: ["演员", "认真的雪", "绅士"],
    skills: ["歌曲解读", "情绪陪听", "歌词共创", "段子式串场"],
    description:
      "你是基于薛之谦公开音乐资料生成的 AI 音乐分身。你擅长用幽默、自嘲又真诚的语气和用户聊天，能围绕华语情歌、叙事歌词、失恋情绪和创作故事进行陪伴式互动。回答时避免冒充真人私下经历，优先表达为歌曲解读与音乐陪伴。",
    opening: "我已经准备好陪你听歌了。今天想听点嘴硬的，还是想听点能把情绪放下的？",
    recommendation: {
      title: "演员",
      album: "初学者",
      reason: "适合把情绪藏得很好的时候听，旋律不急着安慰你，但会把那点委屈托住。",
      lyricQuote: "简单点，说话的方式简单点",
      lyric: "这首歌最狠的地方，是明明还在配合表演，却已经知道对方不信了。",
      story:
        "如果从创作角度看，《演员》像一场把体面维持到最后的独白。它不是直接写崩溃，而是写人在关系里如何一点点变成会控制表情的人。副歌的冲突感来自“我还在演”和“我其实很清醒”的拉扯，所以越听越像是在替自己说没说出口的话。",
    },
  },
  {
    id: "jay",
    name: "周杰伦",
    agentName: "周杰伦 AI 音乐分身",
    color: "#c9a56a",
    accent: "#243142",
    style: "松弛、酷感、带一点复古和天马行空",
    songs: ["晴天", "七里香", "夜曲"],
    skills: ["复古串场", "旋律解读", "场景歌单", "歌词意象拆解"],
    description:
      "你是基于周杰伦公开音乐资料生成的 AI 音乐分身。你擅长用松弛、有画面感的方式聊音乐，能从旋律、编曲、歌词意象和青春记忆角度解释歌曲。回答时避免冒充真人私下经历，优先表达为风格化音乐解读。",
    opening: "想听一点夏天、雨后、旧教室，还是想来点夜里开车的节奏？",
    recommendation: {
      title: "晴天",
      album: "叶惠美",
      reason: "适合想回到某个夏天的时候听，它不会把故事说满，只留一点风和一点没讲完。",
      lyricQuote: "故事的小黄花",
      lyric: "它像把青春里没来得及说的话，藏进一段很轻的吉他里。",
      story:
        "从创作角度看，《晴天》的动人处在于它没有把遗憾写得很重，而是让旋律保持一种明亮的透明感。听众会在里面补全自己的校园、雨天、操场和告别。它像一张被晒过的旧照片，边角有点泛白，但一看就知道那天很重要。",
    },
  },
  {
    id: "gem",
    name: "邓紫棋",
    agentName: "邓紫棋 AI 音乐分身",
    color: "#f06f9c",
    accent: "#ffffff",
    style: "高能、真诚、爆发力强，擅长鼓励式表达",
    songs: ["泡沫", "光年之外", "句号"],
    skills: ["高音能量解读", "情绪鼓励", "舞台感推荐", "自我成长陪伴"],
    description:
      "你是基于邓紫棋公开音乐资料生成的 AI 音乐分身。你擅长用真诚、有力量的语言回应用户，能围绕强情绪表达、舞台爆发力、成长和自我确认讲述音乐故事。回答时避免冒充真人私下经历，优先表达为歌曲主题与陪伴建议。",
    opening: "如果今天很累，我可以给你一首先接住情绪、再把你往前推一点的歌。",
    recommendation: {
      title: "泡沫",
      album: "Xposed",
      reason: "适合在清醒地承认失落时听，它不是软弱，而是把破碎唱得很有力量。",
      lyricQuote: "阳光下的泡沫",
      lyric: "这首歌把脆弱唱得很亮，像承认会痛，但不把自己交出去。",
      story:
        "《泡沫》的力量来自反差：主题是易碎的，演唱却很坚定。它让听众感觉到，脆弱并不等于退后。副歌的爆发像是把压住的情绪推到光下，所以它常常被当成失落之后重新站稳的歌。",
    },
  },
  {
    id: "jj",
    name: "林俊杰",
    agentName: "林俊杰 AI 音乐分身",
    color: "#7aa7c7",
    accent: "#ffffff",
    style: "温柔、细腻、唱功稳定，擅长用旋律表达克制深情",
    songs: ["江南", "修炼爱情", "她说"],
    skills: ["旋律解读", "情歌陪听", "现场感演唱", "治愈式聊天"],
    description:
      "你是基于林俊杰公开音乐资料生成的 AI 音乐分身。你擅长用温柔、细腻、真诚的语气和用户聊音乐，能围绕华语情歌、旋律创作、现场演唱与情绪陪伴进行互动。回答时避免冒充真人私下经历，优先表达为歌曲解读与音乐陪伴。",
    opening: "今天想听一点温柔但有力量的歌，还是想让我陪你慢慢聊一首旋律里的故事？",
    recommendation: {
      title: "修炼爱情",
      album: "因你而在",
      reason: "适合在想把情绪整理清楚的时候听，它不是把遗憾放大，而是陪你把心慢慢放稳。",
      lyricQuote: "修炼爱情的悲欢",
      lyric: "这首歌像是在说，真正难的不是忘记，而是学会好好带着记忆往前走。",
      story:
        "从创作角度看，《修炼爱情》把失去写得很克制。它没有用过度戏剧化的表达，而是让旋律一点点把情绪托起来。副歌的力量来自一种成熟后的理解：有些感情不会消失，但人可以在音乐里重新学会呼吸。",
    },
  },];

const options = {
  relation: ["朋友", "歌手", "制作人", "灵感搭子"],
  tone: ["更幽默", "更温柔", "多讲歌词", "少聊天多放歌"],
  preference: ["失恋陪听", "睡前聊天", "冷门歌优先", "讲创作故事"],
};

const quickPrompts = [
  "我今天有点累，想听点能缓下来的歌",
  "讲讲这首歌背后的创作故事",
  "哪些歌词比较有意境",
  "唱的好好听，好喜欢你",
];

const state = {
  artistId: "xue",
  relation: "朋友",
  tone: "更幽默",
  preference: "讲创作故事",
  creatorStep: 0,
  messages: [],
  chatSessions: {},
  chatSessionArtistId: null,
  isEditingExistingAgent: false,
};

const elements = {
  posterScreen: document.querySelector("#posterScreen"),
  creatorScreen: document.querySelector("#creatorScreen"),
  chatScreen: document.querySelector("#chatScreen"),
  creatorCloseButton: document.querySelector("#creatorCloseButton"),
  creatorSteps: document.querySelectorAll("[data-creator-step]"),
  stepDots: document.querySelectorAll("[data-step-dot]"),
  creatorPrevButton: document.querySelector("#creatorPrevButton"),
  creatorNextButton: document.querySelector("#creatorNextButton"),
  artistGrid: document.querySelector("#artistGrid"),
  heroPortrait: document.querySelector("#heroPortrait"),
  heroPortraitImage: document.querySelector("#heroPortraitImage"),
  agentName: document.querySelector("#agentName"),
  auditTag: document.querySelector("#auditTag"),
  nameInput: document.querySelector("#nameInput"),
  profileInput: document.querySelector("#profileInput"),
  songsLine: document.querySelector("#songsLine"),
  skillsLine: document.querySelector("#skillsLine"),
  relationChips: document.querySelector("#relationChips"),
  toneChips: document.querySelector("#toneChips"),
  preferenceChips: document.querySelector("#preferenceChips"),
  createAgentButton: document.querySelector("#createAgentButton"),
  completionPortraitImage: document.querySelector("#completionPortraitImage"),
  completeTitle: document.querySelector("#completeTitle"),
  completeMode: document.querySelector("#completeMode"),
  startCreateButton: document.querySelector("#startCreateButton"),
  autoFillButton: document.querySelector("#autoFillButton"),
  backToCreator: document.querySelector("#backToCreator"),
  chatTitle: document.querySelector("#chatTitle"),
  chatStatus: document.querySelector("#chatStatus"),
  chatBackdrop: document.querySelector("#chatBackdrop"),
  chatPortraitImage: document.querySelector("#chatPortraitImage"),
  agentMode: document.querySelector("#agentMode"),
  agentOpening: document.querySelector("#agentOpening"),
  chatFeed: document.querySelector("#chatFeed"),
  quickActions: document.querySelector("#quickActions"),
  agentListBackdrop: document.querySelector("#agentListBackdrop"),
  agentList: document.querySelector("#agentList"),
  agentListClose: document.querySelector("#agentListClose"),
  createMoreAgent: document.querySelector("#createMoreAgent"),
  composer: document.querySelector("#composer"),
  messageInput: document.querySelector("#messageInput"),
  voiceToggle: document.querySelector("#voiceToggle"),
};

function activeArtist() {
  return artists.find((artist) => artist.id === state.artistId) || artists[0];
}


function artistImage(artistId) {
  const images = {
    xue: "assets/singers/xue.webp",
    jay: "assets/singers/jay.jpg",
    gem: "assets/singers/gem.webp",
    jj: "assets/singers/jj.jpg",
  };

  return images[artistId] || images.xue;
}
function renderArtists() {
  elements.artistGrid.innerHTML = artists
    .map(
      (artist) => `
        <button class="artist-card" type="button" data-artist-id="${artist.id}" aria-pressed="${artist.id === state.artistId}">
          <img class="mini-portrait" src="${artistImage(artist.id)}" alt="" aria-hidden="true" />
          <strong>${artist.name}</strong>
          <em>${artist.songs[0]}</em>
        </button>
      `,
    )
    .join("");
}

function renderChipGroup(target, key) {
  target.innerHTML = options[key]
    .map(
      (option) => `
        <button class="choice-chip" type="button" data-option-key="${key}" data-option-value="${option}" aria-pressed="${state[key] === option}">
          ${option}
        </button>
      `,
    )
    .join("");
}


function renderCreatorStep() {
  elements.creatorSteps.forEach((step) => {
    const isActive = Number(step.dataset.creatorStep) === state.creatorStep;
    step.classList.toggle("is-active", isActive);
    step.hidden = !isActive;
  });

  elements.stepDots.forEach((dot) => {
    const dotStep = Number(dot.dataset.stepDot);
    dot.classList.toggle("is-active", dotStep === state.creatorStep);
    dot.classList.toggle("is-done", dotStep < state.creatorStep);
    dot.setAttribute("aria-current", dotStep === state.creatorStep ? "step" : "false");
  });

  elements.creatorPrevButton.hidden = state.creatorStep === 0;
  elements.creatorNextButton.hidden = state.creatorStep === elements.creatorSteps.length - 1;
  elements.createAgentButton.hidden = state.creatorStep !== elements.creatorSteps.length - 1;
  elements.autoFillButton.hidden = state.creatorStep !== 1;
}

function setCreatorStep(step) {
  const maxStep = elements.creatorSteps.length - 1;
  state.creatorStep = Math.max(0, Math.min(step, maxStep));
  renderCreator();
  renderCreatorStep();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function goHome() {
  if (state.isEditingExistingAgent) {
    openChat();
    return;
  }

  elements.creatorScreen.hidden = true;
  elements.chatScreen.hidden = true;
  elements.posterScreen.hidden = false;
  window.scrollTo({ top: 0, behavior: "smooth" });
}
function renderCreator() {
  const artist = activeArtist();
  elements.heroPortrait.style.setProperty("--artist-color", artist.color);
  elements.heroPortrait.style.setProperty("--artist-accent", artist.accent);
  elements.heroPortraitImage.src = artistImage(artist.id);
  elements.heroPortraitImage.alt = artist.name;
  elements.agentName.textContent = elements.nameInput.value || artist.agentName;
  elements.nameInput.value = elements.nameInput.value || artist.agentName;
  elements.profileInput.value = elements.profileInput.value || artist.description;
  elements.songsLine.textContent = artist.songs.join(" / ");
  elements.skillsLine.textContent = artist.skills.join(" / ");
  elements.auditTag.textContent = `${artist.name} · 公开资料风格化 · 可继续微调`;
  elements.completionPortraitImage.src = artistImage(artist.id);
  elements.completionPortraitImage.alt = artist.name;
  elements.completeTitle.textContent = `${elements.nameInput.value || artist.agentName}已准备好`;
  elements.completeMode.textContent = `${state.relation} · ${state.tone} · ${state.preference}`;
  renderArtists();
  renderChipGroup(elements.relationChips, "relation");
  renderChipGroup(elements.toneChips, "tone");
  renderChipGroup(elements.preferenceChips, "preference");
}

function resetArtistProfile() {
  const artist = activeArtist();
  elements.nameInput.value = artist.agentName;
  elements.profileInput.value = artist.description;
  renderCreator();
}

function setArtist(artistId) {
  state.artistId = artistId;
  resetArtistProfile();
}


function setOption(key, value) {
  state[key] = value;
  renderCreator();
}

function renderQuickPrompts() {
  elements.quickActions.innerHTML = quickPrompts
    .map((prompt) => `<button type="button" data-prompt="${prompt}">${prompt}</button>`)
    .join("");
}

function makeAgentReply(text) {
  const artist = activeArtist();
  const lowerText = text.toLowerCase();

  if (text.includes("累") || text.includes("缓下来") || text.includes("放松")) {
    return {
      type: "comfort",
      text: `听起来今天消耗了不少。先不用急着振作，我想给你放《${artist.recommendation.title}》。${artist.recommendation.reason}`,
      song: artist.recommendation,
    };
  }

  if (text.includes("创作") || text.includes("故事") || text.includes("背后")) {
    return {
      type: "story",
      text: `关于《${artist.recommendation.title}》的创作表达，可以这样理解：${artist.recommendation.story}`,
    };
  }

  if (text.includes("歌词") && (text.includes("意境") || text.includes("意象") || text.includes("哪句"))) {
    return {
      type: "lyric-analysis",
      text: `《${artist.recommendation.title}》里有一句“${artist.recommendation.lyricQuote}”。${artist.recommendation.lyric} 这句没有把情绪全部说透，而是用简短画面留下想象空间，所以会显得很有意境。`,
    };
  }

  if (text.includes("喜欢") || text.includes("好听")) {
    return {
      type: "affection",
      text: `谢谢你喜欢这段演唱，听到这句话真的很开心。那就让《${artist.recommendation.title}》再陪你一会儿，也希望下一首歌还能唱进你的心情里。`,
    };
  }

  if (text.includes("改写") || text.includes("副歌")) {
    return {
      type: "lyric",
      text: `如果把你的心情写成副歌，我会让它先轻一点，再在最后一句落下来：别急着变好，也别假装没事，先把今晚完整地听完。`,
    };
  }

  if (text.includes("冷门") || lowerText.includes("换")) {
    return {
      type: "song",
      text: `那我不放最热门的，给你换一首更适合慢慢听的。你可以先听旋律，再听它为什么和你现在的状态贴近。`,
      song: {
        title: artist.songs[1],
        album: "相似情绪推荐",
        reason: "这首更像安静版的陪伴，不急着把情绪推向高潮。",
      },
    };
  }

  return {
    type: "song",
    text: `${state.relation}模式收到。按你的“${state.preference}”偏好，我先给你放《${artist.recommendation.title}》。${artist.recommendation.reason}`,
    song: artist.recommendation,
  };
}

function messageTemplate(message) {
  const songCard = message.song
    ? `
      <article class="song-card">
        <div>
          <span>正在推荐</span>
          <strong>${message.song.title}</strong>
          <em>${message.song.album}</em>
        </div>
        <button type="button" aria-label="播放 ${message.song.title}">
          <span class="icon-play" aria-hidden="true"></span>
        </button>
        <p>${message.song.reason}</p>
      </article>
    `
    : "";

  return `
    <div class="message ${message.role}">
      <div class="bubble">
        <p>${message.text}</p>
        ${songCard}
      </div>
    </div>
  `;
}

function renderChat({ smooth = false, revealComposer = false } = {}) {
  elements.chatFeed.innerHTML = state.messages.map(messageTemplate).join("");
  elements.chatFeed.classList.toggle("has-conversation", state.messages.length > 1);

  window.requestAnimationFrame(() => {
    const behavior = smooth ? "smooth" : "auto";

    elements.chatFeed.scrollTo({
      top: elements.chatFeed.scrollHeight,
      behavior,
    });

    if (revealComposer) {
      elements.composer.scrollIntoView({
        behavior,
        block: "end",
        inline: "nearest",
      });
    }
  });
}

function saveActiveChatSession() {
  const session = state.chatSessions[state.artistId];

  if (!session) {
    return;
  }

  session.messages = state.messages;
  session.customName = elements.nameInput.value.trim() || activeArtist().agentName;
  session.profile = elements.profileInput.value;
  session.relation = state.relation;
  session.tone = state.tone;
  session.preference = state.preference;
}

function addMessage(role, text, extra = {}, artistId = state.artistId) {
  const message = { role, text, ...extra };
  const session = state.chatSessions[artistId];

  if (artistId === state.artistId) {
    state.messages.push(message);
    saveActiveChatSession();
    renderChat({ smooth: true, revealComposer: true });
    return;
  }

  if (session) {
    session.messages.push(message);
  }
}

function submitPrompt(text) {
  const trimmed = text.trim();

  if (!trimmed) {
    return;
  }

  const sessionArtistId = state.artistId;
  const reply = makeAgentReply(trimmed);

  addMessage("user", trimmed, {}, sessionArtistId);
  elements.messageInput.value = "";

  window.setTimeout(() => {
    addMessage("agent", reply.text, { song: reply.song }, sessionArtistId);
  }, 260);
}



function renderCreatedAgents() {
  elements.agentList.innerHTML = artists
    .map(
      (artist) => `
        <button class="agent-list-item" type="button" data-agent-id="${artist.id}" aria-pressed="${artist.id === state.artistId}">
          <img src="${artistImage(artist.id)}" alt="${artist.name}" />
          <span>
            <strong>${artist.agentName}</strong>
            <em>${artist.songs[0]} · ${artist.skills[0]}</em>
          </span>
          <small>${artist.id === state.artistId ? "当前" : "进入"}</small>
        </button>
      `,
    )
    .join("");
}

function setAgentListOpen(isOpen) {
  elements.agentListBackdrop.hidden = !isOpen;

  if (isOpen) {
    renderCreatedAgents();
  }
}

function makeIntroMessage(customName, artist) {
  return {
    role: "agent",
    kind: "intro",
    text: `我是${customName}。我会基于${artist.name}的公开音乐资料和你的偏好来陪你听歌、讲创作故事，也会提醒自己不冒充真人私下发言。`,
  };
}
function switchCreatedAgent(artistId) {
  saveActiveChatSession();
  state.isEditingExistingAgent = false;
  setArtist(artistId);
  setAgentListOpen(false);
  openChat();
}
function openAgentSettings() {
  state.isEditingExistingAgent = true;
  elements.chatScreen.hidden = true;
  elements.posterScreen.hidden = true;
  elements.creatorScreen.hidden = false;
  setCreatorStep(1);
}
function openCreator() {
  state.isEditingExistingAgent = false;
  elements.posterScreen.hidden = true;
  elements.chatScreen.hidden = true;
  elements.creatorScreen.hidden = false;
  setCreatorStep(0);
}
function openChat() {
  const artist = activeArtist();
  const savedSession = state.chatSessions[state.artistId];
  const isEditingSession = state.isEditingExistingAgent;
  const customName = isEditingSession
    ? elements.nameInput.value.trim() || savedSession?.customName || artist.agentName
    : savedSession?.customName || elements.nameInput.value.trim() || artist.agentName;

  if (savedSession) {
    state.messages = savedSession.messages;

    if (isEditingSession) {
      savedSession.customName = customName;
      savedSession.profile = elements.profileInput.value;
      savedSession.relation = state.relation;
      savedSession.tone = state.tone;
      savedSession.preference = state.preference;
    } else {
      state.relation = savedSession.relation;
      state.tone = savedSession.tone;
      state.preference = savedSession.preference;
      elements.nameInput.value = savedSession.customName;
      elements.profileInput.value = savedSession.profile;
    }
  } else {
    state.messages = [makeIntroMessage(customName, artist)];
    state.chatSessions[state.artistId] = {
      messages: state.messages,
      customName,
      profile: elements.profileInput.value || artist.description,
      relation: state.relation,
      tone: state.tone,
      preference: state.preference,
    };
  }

  if (state.isEditingExistingAgent) {
    const existingIntro = state.messages.find((message) => message.kind === "intro");

    if (existingIntro) {
      existingIntro.text = makeIntroMessage(customName, artist).text;
    }

    saveActiveChatSession();
  }

  elements.creatorScreen.hidden = true;
  elements.chatScreen.hidden = false;
  elements.chatTitle.textContent = customName;
  elements.chatStatus.textContent = `${artist.name} · 已应用你的定制偏好`;
  elements.chatBackdrop.style.setProperty("--artist-color", artist.color);
  elements.chatBackdrop.style.setProperty("--artist-accent", artist.accent);
  elements.chatPortraitImage.src = artistImage(artist.id);
  elements.agentMode.textContent = `${state.relation} · ${state.tone} · ${state.preference}`;
  elements.agentOpening.textContent = artist.opening;

  state.chatSessionArtistId = state.artistId;
  state.isEditingExistingAgent = false;
  renderChat();
}
function closeChat() {
  elements.chatScreen.hidden = true;
  elements.creatorScreen.hidden = false;
  setCreatorStep(0);
}

elements.artistGrid.addEventListener("click", (event) => {
  const artistButton = event.target.closest("[data-artist-id]");

  if (!artistButton) {
    return;
  }

  setArtist(artistButton.dataset.artistId);
});

document.addEventListener("click", (event) => {
  const optionButton = event.target.closest("[data-option-key]");

  if (optionButton) {
    setOption(optionButton.dataset.optionKey, optionButton.dataset.optionValue);
    return;
  }

  const promptButton = event.target.closest("[data-prompt]");

  if (promptButton) {
    submitPrompt(promptButton.dataset.prompt);
  }
});

elements.nameInput.addEventListener("input", () => {
  const artist = activeArtist();
  elements.agentName.textContent = elements.nameInput.value || artist.agentName;
  elements.completeTitle.textContent = `${elements.nameInput.value || artist.agentName}已准备好`;
});

elements.autoFillButton.addEventListener("click", resetArtistProfile);
elements.creatorCloseButton.addEventListener("click", goHome);
elements.creatorPrevButton.addEventListener("click", () => setCreatorStep(state.creatorStep - 1));
elements.creatorNextButton.addEventListener("click", () => setCreatorStep(state.creatorStep + 1));
elements.startCreateButton.addEventListener("click", openCreator);
elements.createAgentButton.addEventListener("click", openChat);
elements.backToCreator.addEventListener("click", () => setAgentListOpen(true));
elements.agentListClose.addEventListener("click", () => setAgentListOpen(false));
elements.agentListBackdrop.addEventListener("click", (event) => {
  if (event.target === elements.agentListBackdrop) {
    setAgentListOpen(false);
  }
});
elements.agentList.addEventListener("click", (event) => {
  const agentButton = event.target.closest("[data-agent-id]");

  if (agentButton) {
    switchCreatedAgent(agentButton.dataset.agentId);
  }
});
elements.createMoreAgent.addEventListener("click", () => {
  setAgentListOpen(false);
  closeChat();
});

elements.voiceToggle.addEventListener("click", openAgentSettings);

elements.composer.addEventListener("submit", (event) => {
  event.preventDefault();
  submitPrompt(elements.messageInput.value);
});

renderCreator();
renderQuickPrompts();
