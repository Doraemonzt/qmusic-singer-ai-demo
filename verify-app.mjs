import { createRequire } from "node:module";
import { pathToFileURL } from "node:url";
import path from "node:path";

const require = createRequire(import.meta.url);
const { chromium } = require("C:/Users/taozzzhang/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/.pnpm/playwright@1.60.0/node_modules/playwright");

const pageUrl = pathToFileURL(path.resolve("index.html")).href;
const browser = await chromium.launch({
  executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
});
const page = await browser.newPage({ viewport: { width: 390, height: 844 } });

await page.goto(pageUrl);
await page.waitForSelector("#posterScreen");

const avatarDecorCount = await page.locator(".poster-mic, .poster-equalizer, .poster-headphones").count();

if (avatarDecorCount !== 3) {
  throw new Error(`Expected upgraded poster avatar decorations, got: ${avatarDecorCount}`);
}
const logoText = await page.locator(".brand-logo").textContent();

if (!logoText.includes("SingerAI")) {
  throw new Error(`Expected homepage logo to render, got: ${logoText}`);
}
const posterTitle = await page.locator("#posterTitle").textContent();

const featureCount = await page.locator(".feature-item").count();
const singerImageCount = await page.locator(".singer-strip img.singer-card").count();
const loadedSingerImages = await page.locator(".singer-strip img.singer-card").evaluateAll((images) =>
  images.filter((image) => image.complete && image.naturalWidth > 0).length,
);
const singerCount = await page.locator(".singer-strip article").count();
const tagCount = await page.locator(".poster-tags span").count();
const workCardCount = await page.locator(".work-card").count();
const memberText = await page.locator(".member-pill").textContent();

if (featureCount !== 4) {
  throw new Error(`Expected 4 homepage feature cards, got: ${featureCount}`);
}

if (singerCount !== 4) {
  throw new Error(`Expected 4 hot singer cards, got: ${singerCount}`);
}

if (tagCount !== 0) {
  throw new Error(`Poster tags should be removed from homepage, got: ${tagCount}`);
}

if (!memberText.includes("会员中心")) {
  throw new Error(`Expected top member action, got: ${memberText}`);
}
if (posterTitle !== "我的歌手 AI") {
  throw new Error(`Unexpected poster title: ${posterTitle}`);
}

const creatorHiddenInitially = await page.locator("#creatorScreen").evaluate((node) => node.hidden);

if (!creatorHiddenInitially) {
  throw new Error("Creator screen should be hidden before tapping the poster CTA.");
}

await page.getByRole("button", { name: "开始制作" }).click();
await page.waitForSelector("#creatorScreen:not([hidden])");

const posterHiddenAfterStart = await page.locator("#posterScreen").evaluate((node) => node.hidden);

if (!posterHiddenAfterStart) {
  throw new Error("Poster screen should hide after tapping start.");
}

const initialHeroPortrait = await page.locator("#heroPortraitImage").evaluate((image) => ({
  src: image.getAttribute("src"),
  complete: image.complete,
  width: image.naturalWidth,
}));

if (!initialHeroPortrait.src.includes("xue.jpg") || !initialHeroPortrait.complete || initialHeroPortrait.width === 0) {
  throw new Error(`Expected initial selected singer photo to load, got: ${JSON.stringify(initialHeroPortrait)}`);
}
const title = await page.locator("#creatorTitle").textContent();

if (title !== "我的歌手 AI") {
  throw new Error(`Unexpected creator title: ${title}`);
}

const platformEntryCount = await page.locator(".platform-entry").count();

if (platformEntryCount !== 0) {
  throw new Error("Platform entry should not be present in the new poster-first flow.");
}

const artistCount = await page.locator(".artist-card").count();

if (artistCount !== 4) {
  throw new Error(`Expected 4 artist choices, got ${artistCount}`);
}

await page.getByRole("button", { name: /周杰伦/ }).click();

const jayHeroPortrait = await page.locator("#heroPortraitImage").evaluate((image) => ({
  src: image.getAttribute("src"),
  alt: image.getAttribute("alt"),
  complete: image.complete,
  width: image.naturalWidth,
}));

if (!jayHeroPortrait.src.includes("jay.jpg") || jayHeroPortrait.alt !== "周杰伦" || !jayHeroPortrait.complete || jayHeroPortrait.width === 0) {
  throw new Error(`Expected selected singer photo to update for Jay Chou, got: ${JSON.stringify(jayHeroPortrait)}`);
}
const agentName = await page.locator("#agentName").textContent();

if (agentName !== "周杰伦 AI 音乐分身") {
  throw new Error(`Artist selection did not update profile: ${agentName}`);
}

await page.getByRole("button", { name: "制作人" }).click();
await page.getByRole("button", { name: "多讲歌词" }).click();
await page.getByRole("button", { name: "冷门歌优先" }).click();
await page.getByRole("button", { name: "创建智能体并开始互动" }).click();

await page.waitForSelector("#chatScreen:not([hidden])");

const chatPortrait = await page.locator("#chatPortraitImage").evaluate((image) => ({
  src: image.getAttribute("src"),
  complete: image.complete,
  width: image.naturalWidth,
}));

if (!chatPortrait.src.includes("jay.jpg") || !chatPortrait.complete || chatPortrait.width === 0) {
  throw new Error(`Expected chat singer photo to load for Jay Chou, got: ${JSON.stringify(chatPortrait)}`);
}
const chatTitle = await page.locator("#chatTitle").textContent();

if (chatTitle !== "周杰伦 AI 音乐分身") {
  throw new Error(`Unexpected chat title: ${chatTitle}`);
}

const agentMode = await page.locator("#agentMode").textContent();

if (agentMode !== "制作人 · 多讲歌词 · 冷门歌优先") {
  throw new Error(`Unexpected agent mode: ${agentMode}`);
}

await page.getByRole("button", { name: "讲讲这首歌背后的创作故事" }).click();
await page.waitForFunction(() => document.querySelectorAll(".message.agent").length >= 3);

const lastAgentText = await page.locator(".message.agent").last().textContent();

if (!lastAgentText.includes("晴天") || !lastAgentText.includes("创作")) {
  throw new Error(`Expected generated story reply, got: ${lastAgentText}`);
}

await page.locator("#messageInput").fill("换一首冷门一点的歌");
await page.locator(".composer").evaluate((form) => form.requestSubmit());
await page.waitForFunction(() => document.querySelectorAll(".song-card").length >= 2);

const latestSongCard = await page.locator(".song-card").last().textContent();

if (!latestSongCard.includes("七里香")) {
  throw new Error(`Expected a secondary song recommendation, got: ${latestSongCard}`);
}

const hasHorizontalOverflow = await page.evaluate(() => {
  return document.documentElement.scrollWidth > document.documentElement.clientWidth;
});

if (hasHorizontalOverflow) {
  throw new Error("Page has horizontal overflow at 390px viewport.");
}

await page.screenshot({ path: "C:/tmp/qmusic-singer-ai-poster-demo.png", fullPage: true });
await browser.close();

console.log("Verified real singer portraits, selected creator and chat singer photos, mobile homepage layout without works section, homepage logo, poster-first H5 flow, creator setup, preference customization, chat generation, song cards, and mobile layout.");