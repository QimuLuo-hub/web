const archive = window.ARCHIVE;
let currentLang = localStorage.getItem("archive-language") || "en";
const ARCHIVE_PASSWORD_QUESTION = "？🍷💃， ⛰️⛰️？";
const ARCHIVE_PASSWORD = "24";
const ARCHIVE_UNLOCK_KEY = "qimu-archive-unlocked";
const ARCHIVE_UNLOCK_DURATION = 30 * 60 * 1000;

const UI_TEXT = {
  en: {
    enterSection: "Enter section",
    readProject: "Read project",
    story: "Story",
    outcome: "Outcome",
    timeline: "Timeline",
    projectTimeline: "Project Timeline",
    projectRooms: "Projects",
    graphView: "Graph View",
    peopleProjects: "People And Projects",
    documents: "Documents",
    presentation: "Presentation",
    presentationNote: "A vertical record for presentation images, screenshots, and stage materials.",
    backToPreface: "Back to preface",
    backToTop: "Back to top",
    back: "Back",
    readMore: "Read more",
    readNext: "Read next project",
    openFullImage: "Open full image",
    close: "Close",
    previousPage: "Previous page",
    nextPage: "Next page",
    saveLetter: "Save letter",
    saveLetterTitle: "Save This Letter",
    saveLetterCopy: "Choose an archival format for the full parchment letter.",
    saveAsImage: "Save as image",
    saveAsPdf: "Save as PDF",
    musicPlay: "Play music",
    musicPause: "Pause music",
    musicNow: "Now playing",
    passwordTitle: "Private Archive",
    passwordQuestion: "Question",
    passwordPlaceholder: "Enter password",
    passwordButton: "Enter",
    passwordError: "The password is not quite right.",
    letterPage: "Letter page",
    baseMapTitle: "A Small Globe Of Base-To-Base Research",
    baseMapNote: "Drag the globe, then hover over a route to see the approximate distance and time difference.",
    skip: "Skip to archive",
    homeKicker: "2023-2026",
    homeHero:
      "Before I became who I am today, he saw who I was yesterday; before I become who I will be, he saw who I am today.",
    prefaceTitle: "A Preface",
    prefaceOne:
      "Because of you, I became myself; because I became myself, I do not step back.",
    prefaceSong: "Because of You",
    archiveRooms: "The Archive Rooms",
    stillBecoming: "Still Becoming",
    stillBecomingCopy:
      "This chapter is currently held as a story: notes, conversations, rehearsal, and the questions that will shape the later record.",
    stillBecomingNote:
      "When a report, poster, or public link is ready, it can appear here without changing the story.",
  },
  zh: {
    enterSection: "进入章节",
    readProject: "了解更多",
    story: "故事",
    outcome: "成果",
    timeline: "时间线",
    projectTimeline: "项目时间线",
    projectRooms: "项目概览",
    graphView: "关系图",
    peopleProjects: "🤝🕸️",
    documents: "文档",
    presentation: "展示",
    presentationNote: " ",
    backToPreface: "回到序章",
    backToTop: "回到顶部",
    back: "返回",
    readMore: "阅读更多",
    readNext: "阅读下一章",
    openFullImage: "查看完整图片",
    close: "关闭",
    previousPage: "上一页",
    nextPage: "下一页",
    saveLetter: "保存信件",
    saveLetterTitle: "保存这封信",
    saveLetterCopy: "选择一种格式，保存完整的羊皮纸信件。",
    saveAsImage: "保存为图片",
    saveAsPdf: "保存为 PDF",
    musicPlay: "播放音乐",
    musicPause: "暂停音乐",
    musicNow: "正在播放",
    passwordTitle: "Private Archive",
    passwordQuestion: "问题",
    passwordPlaceholder: "输入密码",
    passwordButton: "进入",
    passwordError: "密码好像不对。",
    letterPage: "信件页",
    baseMapTitle: "Base-to-Base",
    baseMapNote: "地球可以拖动",
    skip: "跳到 archive",
    homeKicker: "2023-2026",
    homeHero:
      "在我还没有成为今天的我之前，他就看见了昨天的我；\n在我还没有成为未来的我之前，他就看见了今天的我。",
    prefaceTitle: "A Preface",
    prefaceOne:
      "因为你 所以我 所以我 不退缩。",
    prefaceSong: "因为你 所以我",
    archiveRooms: "The Archive Rooms",
    stillBecoming: "仍在生长",
    stillBecomingCopy:
      "这一章目前先作为故事保存：notes、conversations、rehearsal，以及那些会继续塑造后续记录的问题。",
    stillBecomingNote:
      "等 report、poster 或 public link 准备好之后，可以直接出现在这里，不需要改变前面的故事。",
  },
};

function ui(key) {
  return UI_TEXT[currentLang]?.[key] || UI_TEXT.en[key] || key;
}

function text(value) {
  if (value && typeof value === "object" && !Array.isArray(value)) {
    return value[currentLang] ?? value.en ?? value.zh ?? "";
  }
  return value;
}

function html(value) {
  return String(text(value) ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function pathToRoot() {
  const depth = document.body.dataset.depth || "0";
  return "../".repeat(Number(depth));
}

function href(path) {
  return `${pathToRoot()}${path}`;
}

function hrefWithFrom(path) {
  const base = href(path);
  const source = typeof window !== "undefined" && window.location?.href ? encodeURIComponent(window.location.href) : "";
  if (!source) return base;
  return `${base}${base.includes("?") ? "&" : "?"}from=${source}`;
}

function isArchiveUnlocked() {
  const unlockedAt = Number(localStorage.getItem(ARCHIVE_UNLOCK_KEY) || 0);
  return Date.now() - unlockedAt < ARCHIVE_UNLOCK_DURATION;
}

function sectionById(id) {
  return archive.sections.find((section) => section.id === id);
}

function projectById(id) {
  return archive.projects[id];
}

function collaboratorById(id) {
  return archive.collaborators[id];
}

function collaboratorHref(person) {
  if (!person?.page) return href("sections/collaborators.html");
  return hrefWithFrom(person.page);
}

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function richText(value) {
  let output = html(value);
  const aliases = Object.values(archive.collaborators || {})
    .filter((person) => person.id !== "ren-zhao")
    .flatMap((person) => (person.aliases || [person.name]).map((alias) => ({ alias: html(alias), person })))
    .sort((a, b) => b.alias.length - a.alias.length);

  if (!aliases.length) return output;

  const aliasMap = new Map(aliases.map((item) => [item.alias, item.person]));
  const matcher = new RegExp(aliases.map((item) => escapeRegExp(item.alias)).join("|"), "g");

  output = output.replace(matcher, (match) => {
    const person = aliasMap.get(match);
    if (!person) return match;
    return `<a class="person-link" href="${html(collaboratorHref(person))}"><strong>${match}</strong></a>`;
  });

  return output;
}

function languageToggle() {
  return `
    <button class="lang-toggle" type="button" data-lang-toggle aria-label="Switch language">
      ${currentLang === "en" ? "ZH" : "EN"}
    </button>
  `;
}

function projectColor(id) {
  return archive.projectColors?.[id] || "rgba(30, 48, 53, 0.28)";
}

function monthIndex(value) {
  const [year, month] = String(value).split("-").map(Number);
  return year * 12 + month - 1;
}

function timelinePosition(item, start, end) {
  const startIndex = monthIndex(start);
  const total = monthIndex(end) - startIndex + 1;
  const itemStart = monthIndex(item.start) - startIndex + 1;
  const itemSpan = Math.max(1, monthIndex(item.end || item.start) - monthIndex(item.start) + 1);
  return { column: `${itemStart} / span ${Math.min(itemSpan, total)}`, total };
}

function timelineMonths(start, end) {
  const months = [];
  for (let index = monthIndex(start); index <= monthIndex(end); index += 1) {
    const year = Math.floor(index / 12);
    const month = (index % 12) + 1;
    months.push(`${year}-${String(month).padStart(2, "0")}`);
  }
  return months;
}

function timelineDensity(events, start, end) {
  return timelineMonths(start, end).map((month) => {
    const current = monthIndex(month);
    return events.filter((event) => current >= monthIndex(event.start) && current <= monthIndex(event.end || event.start)).length;
  });
}

function displayMonth(value) {
  const [year, month] = String(value).split("-").map(Number);
  return `${year}.${month}`;
}

function displayRange(item) {
  const start = displayMonth(item.start);
  const end = displayMonth(item.end || item.start);
  return start === end ? start : `${start}-${end}`;
}

function shortTimelineLabel(value) {
  return String(text(value) ?? "").replace(/^20\d{2}\s+/, "");
}

function avatarForSpeaker(role) {
  const normalized = String(role || "").toLowerCase();
  if (normalized.includes("student") || normalized.includes("qimu") || normalized.includes("me")) {
    return { ...archive.people.me, side: "me" };
  }
  if (normalized.includes("mom") || normalized.includes("妈妈")) {
    return { ...(archive.people.mom || archive.people.me), side: "mentor" };
  }
  if (normalized.includes("ruixi") || normalized.includes("xuruixi")) {
    return { ...(archive.people.ruixi || archive.people.me), side: "mentor" };
  }
  if (normalized.includes("hailong") || normalized.includes("guo") || normalized.includes("郭")) {
    return { ...(archive.people.hailong || archive.people.supervisor), side: "mentor" };
  }

  return { ...archive.people.supervisor, side: "mentor" };
}

function pageShell(title, subtitle = "", imagePath = archive.cover) {
  const from = new URLSearchParams(window.location.search).get("from");
  return `
    <header class="site-header">
      <a class="wordmark" href="${href("index.html")}">
        <span class="wordmark-mark" aria-hidden="true"></span>
        <span>${html(archive.title)}</span>
      </a>
      <nav class="nav-links" aria-label="Primary navigation">
        ${archive.sections
          .map((section) => `<a href="${hrefWithFrom(section.page)}" target="_blank" rel="noreferrer">${html(section.label)}</a>`)
          .join("")}
        ${languageToggle()}
      </nav>
    </header>
    <main id="main">
      <section class="page-hero compact-hero">
        <div class="hero-image" style="background-image: url('${href(imagePath)}')" aria-hidden="true"></div>
        <div class="hero-overlay"></div>
        <div class="page-hero-copy">
          <h1>${html(title)}</h1>
          ${subtitle ? `<p class="hero-text">${html(subtitle)}</p>` : ""}
        </div>
      </section>
      ${from ? `<div class="section-inner return-shell"><a class="return-arrow" href="${html(from)}">${html(ui("back"))}</a></div>` : ""}
      <div id="page-content"></div>
    </main>
    <footer class="site-footer">
      <p>${html(archive.title)}</p>
      <a href="${href("index.html")}">${html(ui("backToPreface"))}</a>
    </footer>
  `;
}

function renderHome() {
  document.title = archive.title;
  document.body.innerHTML = `
    <a class="skip-link" href="#main">${html(ui("skip"))}</a>
    <header class="site-header">
      <a class="wordmark" href="#home">
        <span class="wordmark-mark" aria-hidden="true"></span>
        <span>${html(archive.title)}</span>
      </a>
      <nav class="nav-links" aria-label="Home sections">
        ${archive.sections
          .map((section) => `<a href="${html(hrefWithFrom(section.page))}" target="_blank" rel="noreferrer">${html(section.label)}</a>`)
          .join("")}
        ${languageToggle()}
      </nav>
    </header>
    <main id="main">
      <section id="home" class="home-hero">
        <div class="hero-image" style="background-image: url('${html(archive.cover)}')" aria-hidden="true"></div>
        <div class="hero-overlay"></div>
        <div class="home-hero-copy">
          <p class="kicker">${html(ui("homeKicker"))}</p>
          <h1>${html(archive.title)}</h1>
          <p class="hero-text">${html(ui("homeHero"))}</p>
        </div>
      </section>

      <section class="preface section-band">
        <div class="section-inner preface-grid">
          <div>
            <h2>${html(ui("prefaceTitle"))}</h2>
          </div>
          <div class="preface-prose">
            <blockquote class="home-quote">
              <a href="https://www.youtube.com/watch?v=_s8Iot-uo7s" target="_blank" rel="noreferrer">${html(ui("prefaceOne"))}</a>
              <cite>${html(ui("prefaceSong"))}</cite>
            </blockquote>
          </div>
        </div>
      </section>

      <section class="section-band">
        <div class="section-inner">
          <h2 class="section-title">${html(ui("archiveRooms"))}</h2>
          ${renderHomeTimeline()}
          <div class="section-card-grid">
            ${archive.sections.map(renderHomeSectionCard).join("")}
          </div>
        </div>
      </section>
    </main>
    <footer class="site-footer">
      <p>${html(archive.title)}</p>
      <a href="#home">${html(ui("backToTop"))}</a>
    </footer>
  `;
}

function renderHomeSectionCard(section) {
  return `
    <a class="section-card" href="${html(hrefWithFrom(section.page))}" target="_blank" rel="noreferrer">
      ${section.image ? `<span class="section-card-media" style="background-image: url('${html(section.image)}')" aria-hidden="true"></span>` : ""}
      ${text(section.years) ? `<span class="card-years">${html(section.years)}</span>` : ""}
      <h3>${html(section.title)}</h3>
      ${text(section.summary) ? `<p>${html(section.summary)}</p>` : ""}
      <span class="card-command">${html(ui("enterSection"))}</span>
    </a>
  `;
}

function renderHomeTimeline() {
  const timeline = archive.homeTimeline;
  if (!timeline?.events?.length) return "";
  const total = monthIndex(timeline.end) - monthIndex(timeline.start) + 1;
  const density = timelineDensity(timeline.events, timeline.start, timeline.end);
  const maxDensity = Math.max(...density, 1);
  const months = timelineMonths(timeline.start, timeline.end);

  return `
    <div class="archive-overview-timeline">
      <div class="overview-timeline-top">
        <span>${html(displayMonth(timeline.start))}</span>
        <span>${html(displayMonth(timeline.end))}</span>
      </div>
      <div class="overview-density-rail" style="--timeline-columns: ${total}" aria-label="Activity density over time">
        ${density
          .map(
            (count, index) => `
              <span
                style="--density-height: ${5 + count * 4}px; --density-opacity: ${0.32 + count / (maxDensity * 1.8)}"
                title="${html(displayMonth(months[index]))}: ${count} active ${count === 1 ? "event" : "events"}"
                data-range="${html(displayMonth(months[index]))}: ${count} active ${count === 1 ? "event" : "events"}"
                tabindex="0"
              ></span>
            `
          )
          .join("")}
      </div>
      <div class="overview-event-list">
        ${timeline.events
          .map((event) => {
            const position = timelinePosition(event, timeline.start, timeline.end);
            const range = displayRange(event);
            return `
              <article class="overview-event">
                <h3>${html(shortTimelineLabel(event.label))}</h3>
                <div class="overview-bar-track" style="--timeline-columns: ${total}">
                  <span
                    class="overview-bar"
                    style="grid-column: ${position.column}; --event-color: ${html(projectColor(event.projectId || ""))}"
                    title="${html(range)}"
                    data-range="${html(range)}"
                    tabindex="0"
                  ></span>
                </div>
              </article>
            `;
          })
          .join("")}
      </div>
    </div>
  `;
}

function renderSectionPage() {
  const section = sectionById(document.body.dataset.section);
  if (!section) return;

  document.title = `${section.title} | ${archive.title}`;
  document.body.innerHTML = pageShell(section.title, section.summary, section.image || archive.cover);

  const target = document.querySelector("#page-content");
  const hasProjects = Boolean(section.projects);
  target.innerHTML = `
    <section class="section-band">
      <div class="section-inner section-intro-grid">
        <div>
          <p class="section-label">${html(section.label)}</p>
          ${text(section.years) ? `<h2 class="section-title">${html(section.years)}</h2>` : ""}
        </div>
        <div class="preface-prose">
          ${text(section.reflection) ? `<p>${richText(section.reflection)}</p>` : ""}
        </div>
      </div>
    </section>

    ${
      hasProjects
        ? `
          <section class="section-band">
            <div class="section-inner">
              <p class="section-label">${html(ui("timeline"))}</p>
              <h2 class="section-title">${html(ui("projectTimeline"))}</h2>
              ${renderSectionTimeline(section)}
            </div>
          </section>

          <section class="section-band">
            <div class="section-inner">
              <h2 class="section-title">${html(ui("projectRooms"))}</h2>
              <div class="project-card-grid">
                ${section.projects.map((id) => renderProjectCard(projectById(id))).join("")}
              </div>
            </div>
          </section>
        `
        : renderCollaboratorSection(section)
    }
  `;
}

function renderSectionTimeline(section) {
  const projects = section.projects.map((id) => projectById(id)).filter(Boolean);
  const start = projects.reduce((min, project) => (monthIndex(project.start) < monthIndex(min) ? project.start : min), projects[0].start);
  const end = projects.reduce((max, project) => (monthIndex(project.end || project.start) > monthIndex(max) ? project.end || project.start : max), projects[0].end || projects[0].start);
  const total = monthIndex(end) - monthIndex(start) + 1;

  return `
    <div class="section-duration-timeline">
      <div class="section-timeline-scale">
        <span>${html(displayMonth(start))}</span>
        <span>${html(displayMonth(end))}</span>
      </div>
      <div class="section-timeline-rows">
        ${projects.map((project) => renderTimelineProject(project, start, end, total)).join("")}
      </div>
    </div>
  `;
}

function renderTimelineProject(project, start, end, total) {
  const position = timelinePosition(project, start, end);
  const range = displayRange(project);

  return `
    <article class="timeline-node">
      <div>
        <h3>${html(shortTimelineLabel(project.code))}</h3>
      </div>
      <div class="section-timeline-track" style="--timeline-columns: ${total}">
        <span
          style="grid-column: ${position.column}; --event-color: ${html(projectColor(project.id))}"
          title="${html(range)}"
          data-range="${html(range)}"
          tabindex="0"
        ></span>
      </div>
    </article>
  `;
}

function renderProjectCard(project) {
  return `
    <a class="project-card" href="${hrefWithFrom(project.page)}" target="_blank" rel="noreferrer">
      <span class="card-years">${html(project.year)}</span>
      <h3>${html(project.code)}</h3>
      <h4>${html(project.cardTitle || project.title)}</h4>
      <p>${html(project.subtitle)}</p>
      <span class="card-command">${html(ui("readProject"))}</span>
    </a>
  `;
}

function renderCollaboratorSection(section) {
  const firstPerson = collaboratorById(section.collaborators?.[0]) || Object.values(archive.collaborators)[0];
  return `
    <section class="section-band">
      <div class="section-inner">
        <p class="section-label">${html(ui("graphView"))}</p>
        <h2 class="section-title">${html(ui("peopleProjects"))}</h2>
        <div class="collab-layout" data-collab-layout>
          ${renderGraphPanel("section")}
          ${renderCollaboratorDetail(firstPerson)}
        </div>
      </div>
    </section>
  `;
}

function renderGraphPanel(context = "section") {
  const sizeClass = context === "page" ? "graph-panel-large" : "";
  const people = Object.values(archive.collaborators);
  const projectOrder = [
    "2023ann",
    "2024citi",
    "2025citi",
    "2024surf",
    "2025surf",
    "2025eajam",
    "2026ibec",
    "2026spectral",
    "2025ieee",
  ];
  const projectIds = projectOrder.filter((id) => people.some((person) => person.links?.includes(id)));
  const personPositions = {
    "ren-zhao": [50, 19],
    "yifei-xu": [23, 38],
    "jiayi-lin": [76, 38],
    "zihan-liang": [23, 70],
    "ruixi-xu": [50, 80],
    "zhuoqi-hou": [76, 70],
    "hailong-guo": [50, 33],
  };
  const projectPositions = {
    "2023ann": [14, 15],
    "2024citi": [37, 10],
    "2025citi": [64, 11],
    "2024surf": [88, 27],
    "2025surf": [88, 58],
    "2025eajam": [66, 92],
    "2026ibec": [36, 93],
    "2026spectral": [12, 61],
    "2025ieee": [12, 30],
  };

  return `
    <div class="graph-panel interactive-graph ${sizeClass}" data-graph aria-label="Collaborator graph view">
      <svg class="graph-lines" data-graph-lines aria-hidden="true">
        ${people
          .map((person) => {
            const links = person.links || [];
            const midpoint = (links.length - 1) / 2;
            return links
              .map(
                (projectId, index) => `
                  <line class="graph-line-bundle" data-from="qimu" data-to="${html(person.id)}" data-offset="${(index - midpoint) * 3.6}" style="--line-color: ${html(projectColor(projectId))}"></line>
                `
              )
              .join("");
          })
          .join("")}
        ${people
          .map((person) =>
            (person.links || [])
              .map(
                (projectId) => `
                  <line class="graph-line-project" data-from="${html(person.id)}" data-to="project-${html(projectId)}" style="--line-color: ${html(projectColor(projectId))}"></line>
                `
              )
              .join("")
          )
          .join("")}
      </svg>
      <button class="graph-node graph-node-center" type="button" data-node="qimu" data-x="50" data-y="52">Qimu Luo</button>
      ${people
        .map((person) => {
          const [x, y] = personPositions[person.id] || [50, 50];
          return `
            <button class="graph-node graph-node-person ${person.avatar ? "has-photo" : ""}" type="button" data-node="${html(person.id)}" data-person="${html(person.id)}" data-x="${x}" data-y="${y}">
              ${person.avatar ? `<img src="${href(person.avatar)}" alt="">` : ""}
              <span>${html(person.name)}</span>
            </button>
          `;
        })
        .join("")}
      ${projectIds
        .map((id) => {
          const project = projectById(id);
          const [x, y] = projectPositions[id] || [50, 50];
          return `
            <button class="graph-node graph-node-project" type="button" data-node="project-${html(id)}" data-x="${x}" data-y="${y}" style="--project-color: ${html(projectColor(id))}">
              ${html(project.code)}
            </button>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderCollaboratorDetail(person) {
  return `
    <aside class="collab-detail" data-collab-detail>
      ${renderCollaboratorDetailContent(person)}
    </aside>
  `;
}

function renderCollaboratorDetailContent(person) {
  if (!person) return "";
  const sharedLinks = (person.links || [])
    .map((id) => {
      const project = projectById(id);
      if (!project) return "";
      return `<a href="${hrefWithFrom(project.page)}" target="_blank" rel="noreferrer">${html(project.code)}</a>`;
    })
    .join("");

  return `
    <p class="section-label">${html(person.role)}</p>
    <h3>${html(person.name)}</h3>
    <p>${html(person.summary)}</p>
    <div class="collab-project-links">
      ${sharedLinks}
    </div>
    ${
      person.id === "ren-zhao" && person.page
        ? `<a class="collab-read-more" href="${hrefWithFrom(person.page)}" target="_blank" rel="noreferrer">${html(ui("readMore"))}</a>`
        : ""
    }
  `;
}

function renderProjectPage() {
  const project = projectById(document.body.dataset.project);
  if (!project) return;

  document.title = `${project.code} | ${archive.title}`;
  const section = sectionById(project.section);
  document.body.innerHTML = pageShell(project.title, project.subtitle, project.cover || section?.image || archive.cover);
  const target = document.querySelector("#page-content");
  target.innerHTML = `
    <section class="section-band">
      <div class="section-inner project-heading-grid">
        <div>
          ${project.headingLabel === "" ? "" : `<p class="section-label">${html(project.headingLabel || project.year)}</p>`}
          <h2 class="section-title">${html(project.cardTitle || project.code)}</h2>
        </div>
        <div class="preface-prose">
          <p>${richText(project.timeline)}</p>
        </div>
      </div>
    </section>

    <section class="section-band story-section">
      ${renderEvidenceStory(project)}
    </section>
    ${project.baseRoutes ? renderBaseGlobe(project) : ""}

    ${
      project.hideOutcome
        ? ""
        : `
          <section class="section-band outcome-section">
            <div class="section-inner">
              <p class="section-label">${html(ui("outcome"))}</p>
              ${project.outcome ? renderOutcome(project) : renderNoOutcome(project)}
            </div>
          </section>
        `
    }
    ${project.nextStage ? renderProjectBridge(project.nextStage) : ""}
    ${renderProjectNextLink(project)}
  `;
}

function renderEvidenceStory(project) {
  const evidence = project.storyEvidence || buildStoryEvidence(project);
  const storyTitle = project.storyTitleLink
    ? `<a class="story-title-link" href="${html(project.storyTitleLink)}" target="_blank" rel="noreferrer">${html(project.storyTitle)}</a>`
    : html(project.storyTitle);

  return `
    <div class="section-inner story-evidence-wrap">
      <article class="story-prose story-prose-wide">
        <p class="section-label">${html(ui("story"))}</p>
        <h2>${storyTitle}</h2>
        <div class="story-prose-columns">
          ${project.story.map((paragraph, index) => renderStoryParagraph(project, paragraph, index)).join("")}
        </div>
      </article>
      ${
        evidence.length
          ? `
            <div class="evidence-flow">
              ${evidence.map((item) => renderEvidenceRow(item)).join("")}
            </div>
          `
          : ""
      }
      ${
        project.storyAfter?.length
          ? `
            <div class="story-closing-columns">
              ${project.storyAfter.map((paragraph) => `<p>${richText(paragraph)}</p>`).join("")}
            </div>
          `
          : ""
      }
      ${project.storyBridge ? renderProjectBridge(project.storyBridge) : ""}
      ${project.storyVisuals ? renderStoryVisuals(project.storyVisuals) : ""}
    </div>
  `;
}

function renderStoryParagraph(project, paragraph, index) {
  let content = richText(paragraph);
  if (project.baseRoutes && index === 0) {
    content = content.replace(
      /\bBase\b/,
      `<button class="inline-map-trigger" type="button" data-base-map-open>Base</button>`
    );
  }
  return `<p>${content}</p>`;
}

function renderStoryVisuals(visuals) {
  return `
    <div class="story-visual-grid">
      ${visuals
        .map(
          (item) => `
            <figure class="story-visual">
              <button class="image-open-button" type="button" data-full-image="${html(href(item.image))}" data-caption="${html(item.caption)}" aria-label="${html(ui("openFullImage"))}">
                <img src="${href(item.image)}" alt="${html(item.caption)}">
              </button>
              <figcaption>${richText(item.caption)}</figcaption>
            </figure>
          `
        )
        .join("")}
    </div>
  `;
}

function buildStoryEvidence(project) {
  const evidence = [];

  if (project.chat?.length) {
    evidence.push({
      type: "chat",
      date: project.chatHeadline || project.email?.headline || project.dateRange || project.year,
      note:
        project.chatNote ||
        "This exchange keeps one working moment visible: a question, a response, and the small adjustment that moved the project forward.",
      messages: project.chat,
    });
  }

  if (project.email) {
    evidence.push({
      type: "email",
      date: project.email.headline || project.dateRange || project.year,
      note:
        project.email.note ||
        project.email.meta ||
        "This email records the administrative and intellectual trace behind the project.",
      subject: project.email.subject,
      meta: project.email.meta,
      lines: project.email.lines,
      replies: project.email.replies,
    });
  }

  return evidence;
}

function renderEvidenceRow(item) {
  return `
    <section class="evidence-row">
      <aside class="evidence-row-note">
        <time>${html(item.date)}</time>
        <p>${richText(item.note)}</p>
      </aside>
      ${item.type === "email" ? renderEvidenceEmail(item) : item.type === "moment" ? renderEvidenceMoment(item) : renderEvidenceChat(item)}
    </section>
  `;
}

function renderEvidenceChat(item) {
  return `
    <article class="evidence-dialog wechat-card">
      <div class="evidence-scroll wechat-thread">
        ${item.messages
          .map((line) => {
            const speaker = avatarForSpeaker(line.role);
            return `
              <div class="wechat-message is-${speaker.side}">
                <img class="wechat-avatar" src="${href(speaker.avatar)}" alt="">
                <div class="wechat-message-body">
                  <p class="wechat-bubble">${richText(line.text)}</p>
                </div>
              </div>
            `;
          })
          .join("")}
      </div>
    </article>
  `;
}

function renderEvidenceEmail(item) {
  const body = [
    item.meta,
    ...((Array.isArray(item.body) ? item.body : item.body ? [item.body] : item.lines || []) || []),
  ].filter((line) => line && !isEmailSignatureLine(line));
  const branches = item.branches || item.replies || [];
  const attachments = item.attachments || [];

  return `
    <article class="evidence-dialog email-card">
      <div class="evidence-scroll">
        <div class="email-paper">
          <span class="email-stamp" aria-hidden="true"></span>
          ${item.from ? `<p class="email-author">${html(item.from)}</p>` : ""}
          <h3>${html(item.subject)}</h3>
          ${body.map((line) => `<p>${richText(line)}</p>`).join("")}
          ${
            attachments.length
              ? `
                <div class="email-attachments">
                  ${attachments
                    .map(
                      (attachment) => `
                        <figure class="email-attachment">
                          <button class="image-open-button" type="button" data-full-image="${html(href(attachment.image))}" data-caption="${html(attachment.caption)}" aria-label="${html(ui("openFullImage"))}">
                            <img src="${href(attachment.image)}" alt="${html(attachment.caption)}">
                          </button>
                          <figcaption>${richText(attachment.caption)}</figcaption>
                        </figure>
                      `
                    )
                    .join("")}
                </div>
              `
              : ""
          }
        </div>
        ${
          branches.length
            ? `
              <div class="email-branches">
                ${branches.map((branch) => renderEmailBranch(branch)).join("")}
              </div>
            `
            : ""
        }
      </div>
    </article>
  `;
}

function isEmailSignatureLine(line) {
  const value = String(line || "").trim();
  return [
    /^best regards,?$/i,
    /^sincerely,?$/i,
    /^cheers,?$/i,
    /^dr\.?\s+ren zhao$/i,
    /^qimu(\s+luo)?$/i,
    /^department of/i,
    /^school of/i,
    /^tel\.:?/i,
    /^email:/i,
    /^xi[’']?an jiaotong-liverpool university$/i,
    /^suzhou,\s*jiangsu/i,
    /^sent from my iphone$/i,
    /^the ibec 2026 conference committee$/i,
  ].some((pattern) => pattern.test(value));
}

function renderEvidenceMoment(item) {
  return `
    <article class="evidence-dialog moment-card">
      <div class="moment-paper">
        <p>${richText(item.text)}</p>
      </div>
    </article>
  `;
}

function renderEmailBranch(branch) {
  if (typeof branch === "string") return `<p>${richText(branch)}</p>`;
  return `
    <p>
      ${branch.author ? `<strong>${html(branch.author)}:</strong> ` : ""}
      ${richText(branch.text || "")}
    </p>
  `;
}

function renderChatSnapshot(project) {
  return `
    <article class="snapshot evidence-card wechat-card">
      <div class="evidence-layout">
        <aside class="evidence-note">
          <time>${html(project.chatHeadline || project.year)}</time>
          <p>${html(project.chatNote || "A short exchange preserved for the story behind this project. The real chat record can be transcribed here later from screenshots.")}</p>
        </aside>
        <div class="evidence-scroll wechat-thread">
        ${project.chat
        .map(
          (line) => {
            const speaker = avatarForSpeaker(line.role);
            return `
            <div class="wechat-message is-${speaker.side}">
              <img class="wechat-avatar" src="${href(speaker.avatar)}" alt="">
              <div class="wechat-message-body">
                <p class="wechat-bubble">${html(line.text)}</p>
              </div>
            </div>
          `;
          }
        )
        .join("")}
        </div>
      </div>
    </article>
  `;
}

function renderEmailSnapshot(project) {
  const branches = project.email.replies || project.email.lines || [];

  return `
    <article class="snapshot evidence-card email-card">
      <div class="evidence-layout">
        <aside class="evidence-note">
          <time>${html(project.email.headline || project.year)}</time>
          <p>${html(project.email.note || project.email.meta)}</p>
        </aside>
        <div class="evidence-scroll">
          <div class="email-paper">
            <span class="email-stamp" aria-hidden="true"></span>
            <h3>${html(project.email.subject)}</h3>
            <p>${html(project.email.meta)}</p>
          </div>
          ${
            branches.length
              ? `
                <div class="email-branches">
                  ${branches.map((line) => `<p>${html(line)}</p>`).join("")}
                </div>
              `
              : ""
          }
        </div>
      </div>
    </article>
  `;
}

function renderOutcome(project) {
  return renderOutcomeShowcase(project);
}

function renderOutcomeShowcase(project) {
  const documents =
    project.outcomeShowcase?.documents ||
    (project.outcome.links || []).map((link, index) => ({
      label: `Choice ${String.fromCharCode(65 + index)}`,
      kind: link.label,
      href: link.href,
    }));
  const presentation =
    project.outcomeShowcase?.presentation ||
    [
      { label: "Panel A", caption: "A place for the main report, poster, or project visual." },
      { label: "Panel B", caption: "A place for screenshots, presentation pages, or revision records." },
      { label: "Panel C", caption: "A place for the final public-facing outcome." },
    ];

  return `
    <div class="outcome-showcase">
      <div class="outcome-showcase-intro">
        <h2 class="section-title">${html(project.outcome.title)}</h2>
      </div>
      <section class="outcome-module documents-module">
        <div class="outcome-module-heading">
          <h3>${html(ui("documents"))}</h3>
        </div>
        <div class="document-choice-grid">
          ${documents
            .map(
              (item) => `
                <a class="document-choice" href="${html(item.href)}" target="_blank" rel="noreferrer">
                  <span>${html(item.label)}</span>
                  <strong>${html(item.kind)}</strong>
                </a>
              `
            )
            .join("")}
        </div>
      </section>
      ${
        presentation.length
          ? `
            <section class="outcome-module presentation-module">
              <div class="outcome-module-heading">
                <h3>${html(project.outcomeShowcase?.presentationTitle || ui("presentation"))}</h3>
              </div>
              <div class="presentation-scroll" aria-label="Presentation image placeholders">
                ${presentation
                  .map(
                    (item, index) => `
                      <article class="presentation-shot" style="--shot-color: ${html(["#8d9f96", "#a58b75", "#7f95a4"][index % 3])}">
                        ${
                          item.image
                            ? `
                              <button class="image-open-button" type="button" data-full-image="${html(href(item.fullImage || item.image))}" data-caption="${html(item.label)}" aria-label="${html(ui("openFullImage"))}">
                                <img class="presentation-real-image" src="${href(item.image)}" alt="${html(item.label)}">
                              </button>
                            `
                            : `
                              <div class="presentation-image-placeholder" aria-hidden="true">
                                <span></span>
                                <span></span>
                                <span></span>
                              </div>
                            `
                        }
                        <div>
                          <strong>${html(item.label)}</strong>
                          <p>${richText(item.caption)}</p>
                        </div>
                      </article>
                    `
                  )
                  .join("")}
              </div>
            </section>
          `
          : ""
      }
    </div>
  `;
}

function renderProjectBridge(stage) {
  const project = projectById(stage.projectId);
  if (!project) return "";

  return `
    <section class="section-band project-bridge-section">
      <div class="section-inner">
        <aside class="project-bridge">
          <p>${richText(stage.text)}</p>
          <a href="${hrefWithFrom(project.page)}" target="_blank" rel="noreferrer">${html(project.code)}</a>
        </aside>
      </div>
    </section>
  `;
}

function projectSequence() {
  const ids = (archive.sections || [])
    .flatMap((section) => section.projects || [])
    .filter(Boolean);
  return [...new Set(ids)].filter((id) => projectById(id));
}

function renderProjectNextLink(project) {
  const sequence = projectSequence();
  const index = sequence.indexOf(project.id);
  const nextId = index >= 0 ? sequence[index + 1] : null;
  const next = nextId ? projectById(nextId) : null;
  if (!next) return "";

  return `
    <section class="section-band project-next-section">
      <div class="section-inner">
        <a class="project-next-link" href="${hrefWithFrom(next.page)}" target="_blank" rel="noreferrer">
          <span>${html(ui("readNext"))}</span>
          <strong>${html(next.code)}</strong>
        </a>
      </div>
    </section>
  `;
}

function renderBaseGlobe(project) {
  return `
    <div class="base-globe-modal" data-base-globe hidden>
      <div class="base-globe-panel" role="dialog" aria-modal="true" aria-label="${html(ui("baseMapTitle"))}">
        <div class="base-globe-copy">
          <p class="section-label">${html(ui("baseMapTitle"))}</p>
          <p>${html(ui("baseMapNote"))}</p>
          <div class="base-globe-legend">
            <span><i class="legend-teacher"></i>Dr. Ren Zhao</span>
            <span><i class="legend-qimu"></i>Qimu Luo</span>
          </div>
          <div class="base-route-list">
            ${project.baseRoutes
              .map((route) => `<button type="button" data-route-id="${html(route.id)}">${html(route.label)}</button>`)
              .join("")}
          </div>
        </div>
        <div class="base-globe-stage">
          <canvas width="620" height="520" data-base-canvas></canvas>
          <div class="base-route-tooltip" data-base-tooltip hidden></div>
        </div>
        <button class="modal-close" type="button" data-base-map-close>${html(ui("close"))}</button>
      </div>
    </div>
  `;
}

function renderNoOutcome(project) {
  return `
    <div class="outcome-grid">
      <div>
        <h2 class="section-title">${html(ui("stillBecoming"))}</h2>
        <p class="outcome-copy">${html(ui("stillBecomingCopy"))}</p>
      </div>
      <div class="outcome-panel">
        <p class="outcome-note">${html(ui("stillBecomingNote"))}</p>
      </div>
    </div>
  `;
}

function renderCollaboratorPage() {
  const person = collaboratorById(document.body.dataset.collaborator);
  if (!person) return;

  document.title = `${person.name} | ${archive.title}`;
  document.body.innerHTML = pageShell(person.name, person.summary, archive.cover);
  const target = document.querySelector("#page-content");
  const letter = person.letter || [person.summary];
  target.innerHTML = `
    <section class="section-band">
      <div class="section-inner collaborator-page-grid ${person.id === "ren-zhao" ? "ren-letter-grid" : ""}">
        ${person.id === "ren-zhao" ? renderLetterMusicControl() : ""}
        ${renderGraphPanel("page")}
        ${
          person.id === "ren-zhao"
            ? renderLetterBook(person, letter)
            : `
              <article class="story-prose">
                <p class="section-label">${html(person.role)}</p>
                <h2>${html(person.title)}</h2>
                ${letter.map((paragraph) => `<p>${richText(paragraph)}</p>`).join("")}
              </article>
              <aside class="snapshot collaborator-links">
                <p class="snapshot-label">Shared Project Graph</p>
                <h3>Connected Chapters</h3>
                <div class="link-list">
                  ${person.links
                    .map((id) => {
                      const project = projectById(id);
                      return `<a href="${hrefWithFrom(project.page)}" target="_blank" rel="noreferrer">${html(project.code)}</a>`;
                    })
                    .join("")}
                </div>
              </aside>
            `
        }
      </div>
    </section>
  `;
}

function renderLetterMusicControl() {
  const playlist = [
    { title: "好久不见", src: href("music/好久不见.mp3") },
    { title: "后来", src: href("music/后来2020.mp3") },
  ];
  return `
    <aside class="letter-music" data-letter-music data-playlist='${html(JSON.stringify(playlist))}'>
      <button type="button" data-music-toggle aria-pressed="false" aria-label="${html(ui("musicPlay"))}">
        <span aria-hidden="true">🎵</span>
      </button>
    </aside>
  `;
}

function renderLetterBook(person, letter) {
  return `
    <article class="letter-book" data-letter-book>
      <div class="letter-book-pages">
        ${letter
          .map(
            (paragraph, index) => `
              <section class="letter-page ${index === 0 ? "is-active" : ""}" data-letter-page="${index}">
                <p class="section-label">${html(person.role)}</p>
                ${index === 0 ? `<h2>${html(person.title)}</h2>` : ""}
                <p>${richText(paragraph)}</p>
              </section>
            `
          )
          .join("")}
      </div>
      <div class="letter-controls">
        <button type="button" data-letter-prev>${html(ui("previousPage"))}</button>
        <span data-letter-count>1 / ${letter.length}</span>
        <button type="button" data-letter-save hidden>${html(ui("saveLetter"))}</button>
        <button type="button" data-letter-next>${html(ui("nextPage"))} 📜</button>
      </div>
    </article>
  `;
}

function initDraggableGraphs() {
  const graphs = document.querySelectorAll("[data-graph]");
  graphs.forEach((graph) => {
    const nodes = [...graph.querySelectorAll("[data-node]")];
    const lines = [...graph.querySelectorAll("line[data-from][data-to]")];

    nodes.forEach((node) => {
      if (node.dataset.ready) return;
      node.style.left = `${node.dataset.x || 50}%`;
      node.style.top = `${node.dataset.y || 50}%`;
      node.dataset.ready = "true";

      node.addEventListener("pointerdown", (event) => {
        event.preventDefault();
        node.setPointerCapture(event.pointerId);
        node.classList.add("is-dragging");

        const graphRect = graph.getBoundingClientRect();
        const nodeRect = node.getBoundingClientRect();
        const offsetX = event.clientX - nodeRect.left - nodeRect.width / 2;
        const offsetY = event.clientY - nodeRect.top - nodeRect.height / 2;

        const move = (moveEvent) => {
          const nextX = moveEvent.clientX - graphRect.left - offsetX;
          const nextY = moveEvent.clientY - graphRect.top - offsetY;
          const clampedX = Math.min(Math.max(nextX, 42), graphRect.width - 42);
          const clampedY = Math.min(Math.max(nextY, 30), graphRect.height - 30);
          node.style.left = `${clampedX}px`;
          node.style.top = `${clampedY}px`;
          updateGraphLines(graph, nodes, lines);
        };

        const stop = () => {
          node.classList.remove("is-dragging");
          node.removeEventListener("pointermove", move);
          node.removeEventListener("pointerup", stop);
          node.removeEventListener("pointercancel", stop);
        };

        node.addEventListener("pointermove", move);
        node.addEventListener("pointerup", stop);
        node.addEventListener("pointercancel", stop);
      });
    });

    updateGraphLines(graph, nodes, lines);
    window.addEventListener("resize", () => updateGraphLines(graph, nodes, lines));
  });
}

function initCollaboratorDetails() {
  document.querySelectorAll("[data-collab-layout]").forEach((layout) => {
    const detail = layout.querySelector("[data-collab-detail]");
    const personNodes = [...layout.querySelectorAll("[data-person]")];
    if (!detail || !personNodes.length) return;

    personNodes.forEach((node) => {
      node.addEventListener("click", () => {
        const person = collaboratorById(node.dataset.person);
        if (!person) return;

        personNodes.forEach((item) => item.classList.remove("is-selected"));
        node.classList.add("is-selected");
        detail.innerHTML = renderCollaboratorDetailContent(person);
      });
    });

    personNodes[0].classList.add("is-selected");
  });
}

function updateGraphLines(graph, nodes, lines) {
  const graphRect = graph.getBoundingClientRect();
  const nodeMap = new Map(nodes.map((node) => [node.dataset.node, node]));

  lines.forEach((line) => {
    const from = nodeMap.get(line.dataset.from);
    const to = nodeMap.get(line.dataset.to);
    if (!from || !to) return;

    const fromRect = from.getBoundingClientRect();
    const toRect = to.getBoundingClientRect();
    let x1 = fromRect.left + fromRect.width / 2 - graphRect.left;
    let y1 = fromRect.top + fromRect.height / 2 - graphRect.top;
    let x2 = toRect.left + toRect.width / 2 - graphRect.left;
    let y2 = toRect.top + toRect.height / 2 - graphRect.top;
    const offset = Number(line.dataset.offset || 0);

    if (offset) {
      const dx = x2 - x1;
      const dy = y2 - y1;
      const length = Math.hypot(dx, dy) || 1;
      const offsetX = (-dy / length) * offset;
      const offsetY = (dx / length) * offset;
      x1 += offsetX;
      y1 += offsetY;
      x2 += offsetX;
      y2 += offsetY;
    }

    line.setAttribute("x1", x1);
    line.setAttribute("y1", y1);
    line.setAttribute("x2", x2);
    line.setAttribute("y2", y2);
  });
}

function boot() {
  const mode = document.body.dataset.page;
  document.documentElement.lang = currentLang === "zh" ? "zh-CN" : "en";
  if (mode === "home" && !isArchiveUnlocked()) {
    renderPasswordGate();
    initPasswordGate();
    return;
  }
  if (mode === "home") renderHome();
  if (mode === "section") renderSectionPage();
  if (mode === "project") renderProjectPage();
  if (mode === "collaborator") renderCollaboratorPage();
  initDraggableGraphs();
  initCollaboratorDetails();
  initLanguageToggle();
  initImageLightbox();
  initLetterBook();
  initLetterMusic();
  initBaseGlobe();
}

function renderPasswordGate() {
  document.title = `${archive.title} | Private`;
  document.body.innerHTML = `
    <main class="password-gate">
      <section class="password-panel">
        <p class="section-label">${html(ui("passwordTitle"))}</p>
        <h1>${html(archive.title || "Archive")}</h1>
        <form class="password-form" data-password-form>
          <label for="archive-password">${html(ui("passwordQuestion"))}</label>
          <p class="password-question">${html(ARCHIVE_PASSWORD_QUESTION)}</p>
          <input id="archive-password" name="password" type="password" inputmode="numeric" autocomplete="current-password" placeholder="${html(ui("passwordPlaceholder"))}" autofocus>
          <p class="password-error" data-password-error hidden>${html(ui("passwordError"))}</p>
          <button type="submit">${html(ui("passwordButton"))}</button>
        </form>
      </section>
    </main>
  `;
}

function initPasswordGate() {
  const form = document.querySelector("[data-password-form]");
  const input = form?.querySelector("input");
  const error = form?.querySelector("[data-password-error]");
  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    if (input?.value.trim() === ARCHIVE_PASSWORD) {
      localStorage.setItem(ARCHIVE_UNLOCK_KEY, String(Date.now()));
      boot();
      return;
    }
    if (error) error.hidden = false;
    input?.focus();
    input?.select();
  });
}

function initLanguageToggle() {
  document.querySelectorAll("[data-lang-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      currentLang = currentLang === "en" ? "zh" : "en";
      localStorage.setItem("archive-language", currentLang);
      boot();
    });
  });
}

function initImageLightbox() {
  document.querySelectorAll("[data-full-image]").forEach((button) => {
    button.addEventListener("click", () => {
      const overlay = document.createElement("div");
      overlay.className = "image-lightbox";
      overlay.innerHTML = `
        <button class="modal-close image-lightbox-close" type="button">${html(ui("close"))}</button>
        <figure>
          <img src="${html(button.dataset.fullImage)}" alt="${html(button.dataset.caption || "")}">
          ${button.dataset.caption ? `<figcaption>${html(button.dataset.caption)}</figcaption>` : ""}
        </figure>
      `;
      const close = () => overlay.remove();
      overlay.addEventListener("click", (event) => {
        if (event.target === overlay) close();
      });
      overlay.querySelector("button").addEventListener("click", close);
      document.body.append(overlay);
    });
  });
}

function initLetterBook() {
  document.querySelectorAll("[data-letter-book]").forEach((book) => {
    const pages = [...book.querySelectorAll("[data-letter-page]")];
    const count = book.querySelector("[data-letter-count]");
    const prev = book.querySelector("[data-letter-prev]");
    const next = book.querySelector("[data-letter-next]");
    const save = book.querySelector("[data-letter-save]");
    let index = 0;
    const updateSaveButton = () => {
      if (save) save.hidden = index !== pages.length - 1;
    };
    const setPage = (nextIndex) => {
      index = (nextIndex + pages.length) % pages.length;
      pages.forEach((page, pageIndex) => page.classList.toggle("is-active", pageIndex === index));
      if (count) count.textContent = `${index + 1} / ${pages.length}`;
      updateSaveButton();
      playPageFlipSound();
    };
    updateSaveButton();
    prev?.addEventListener("click", () => setPage(index - 1));
    next?.addEventListener("click", () => setPage(index + 1));
    save?.addEventListener("click", () => openLetterSaveModal(book));
  });
}

function initLetterMusic() {
  document.querySelectorAll("[data-letter-music]").forEach((panel) => {
    if (panel.dataset.ready) return;
    panel.dataset.ready = "true";
    let playlist = [];
    try {
      playlist = JSON.parse(panel.dataset.playlist || "[]");
    } catch {
      playlist = [];
    }
    if (!playlist.length) return;

    const button = panel.querySelector("[data-music-toggle]");
    const audio = new Audio(playlist[0].src);
    audio.preload = "metadata";
    let trackIndex = 0;
    let isPlaying = false;

    const setTrack = (nextIndex) => {
      trackIndex = (nextIndex + playlist.length) % playlist.length;
      audio.src = playlist[trackIndex].src;
    };

    const updateUi = () => {
      panel.classList.toggle("is-playing", isPlaying);
      button?.setAttribute("aria-pressed", String(isPlaying));
      button?.setAttribute("aria-label", ui(isPlaying ? "musicPause" : "musicPlay"));
    };

    button?.addEventListener("click", async () => {
      if (isPlaying) {
        audio.pause();
        isPlaying = false;
        updateUi();
        return;
      }
      try {
        await audio.play();
        isPlaying = true;
        updateUi();
      } catch {
        isPlaying = false;
        updateUi();
      }
    });

    audio.addEventListener("ended", async () => {
      setTrack(trackIndex + 1);
      try {
        await audio.play();
        isPlaying = true;
      } catch {
        isPlaying = false;
      }
      updateUi();
    });

    updateUi();
  });
}

function openLetterSaveModal(book) {
  const overlay = document.createElement("div");
  overlay.className = "letter-save-modal";
  overlay.innerHTML = `
    <section class="letter-save-panel" role="dialog" aria-modal="true" aria-label="${html(ui("saveLetterTitle"))}">
      <button class="modal-close letter-save-close" type="button">${html(ui("close"))}</button>
      <p class="section-label">${html(ui("saveLetter"))}</p>
      <h2>${html(ui("saveLetterTitle"))}</h2>
      <p>${html(ui("saveLetterCopy"))}</p>
      <div class="letter-save-actions">
        <button type="button" data-save-image>${html(ui("saveAsImage"))}</button>
        <button type="button" data-save-pdf>${html(ui("saveAsPdf"))}</button>
      </div>
    </section>
  `;
  const close = () => overlay.remove();
  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) close();
  });
  overlay.querySelector(".letter-save-close")?.addEventListener("click", close);
  overlay.querySelector("[data-save-image]")?.addEventListener("click", () => {
    downloadLetterImage(book);
    close();
  });
  overlay.querySelector("[data-save-pdf]")?.addEventListener("click", () => {
    openLetterPdfWindow(book);
    close();
  });
  document.body.append(overlay);
}

function letterExportData(book) {
  const pages = [...book.querySelectorAll("[data-letter-page]")];
  const firstPage = pages[0];
  const rawParagraphs = pages
    .map((page) => {
      const paragraphs = [...page.querySelectorAll("p:not(.section-label)")];
      return paragraphs.map((paragraph) => paragraph.textContent.trim()).filter(Boolean).join("\n\n");
    })
    .filter(Boolean);
  return {
    role: firstPage?.querySelector(".section-label")?.textContent.trim() || "",
    title: firstPage?.querySelector("h2")?.textContent.trim() || archive.title,
    paragraphs: compactLetterParagraphs(rawParagraphs),
  };
}

function compactLetterParagraphs(paragraphs) {
  const normalized = paragraphs
    .join("\n\n")
    .replace(/\s*\n\s*/g, "\n")
    .replace(/[ \t]{2,}/g, " ")
    .trim();
  if (!normalized) return [];

  const closingMatch = normalized.match(/为\s*PTF[\s\S]*$/);
  const closing = closingMatch ? closingMatch[0].trim() : "";
  const body = closing ? normalized.slice(0, closingMatch.index).trim() : normalized;
  const sentences = body
    .replace(/\n+/g, "")
    .match(/[^。！？!?]+[。！？!?]?|[^。！？!?]+$/g)
    ?.map((sentence) => sentence.trim())
    .filter(Boolean) || [body];

  const groupCount = Math.min(3, Math.max(2, Math.ceil(sentences.join("").length / 520)));
  const targetLength = Math.ceil(sentences.join("").length / groupCount);
  const groups = [];
  let current = "";
  sentences.forEach((sentence) => {
    if (current && current.length + sentence.length > targetLength && groups.length < groupCount - 1) {
      groups.push(current);
      current = sentence;
      return;
    }
    current += sentence;
  });
  if (current) groups.push(current);
  if (closing) groups.push(closing.replace(/\n{2,}/g, "\n"));
  return groups;
}

function canvasTokens(textValue) {
  const tokens = [];
  const matcher = /[\uD800-\uDBFF][\uDC00-\uDFFF]|[\u4E00-\u9FFF\u3400-\u4DBF\uF900-\uFAFF]|[^\s\u4E00-\u9FFF\u3400-\u4DBF\uF900-\uFAFF]+|\s+/g;
  const matches = String(textValue || "").match(matcher) || [];
  matches.forEach((token) => {
    if (/^\s+$/.test(token)) {
      tokens.push(" ");
    } else {
      tokens.push(token);
    }
  });
  return tokens;
}

function wrappedCanvasLines(context, textValue, maxWidth) {
  const lines = [];
  const paragraphs = String(textValue || "").split(/\n/);
  paragraphs.forEach((paragraph) => {
    const tokens = canvasTokens(paragraph).flatMap((token) => {
      if (token === " " || context.measureText(token).width <= maxWidth) return [token];
      return Array.from(token);
    });
    if (!tokens.length) {
      lines.push("");
      return;
    }
    let line = "";
    tokens.forEach((token) => {
      const nextToken = line || token !== " " ? token : "";
      const testLine = `${line}${nextToken}`;
      if (context.measureText(testLine).width > maxWidth && line.trim()) {
        lines.push(line);
        line = token === " " ? "" : token;
      } else {
        line = testLine;
      }
    });
    if (line.trim()) lines.push(line);
  });
  return lines;
}

function createLetterCanvas(book) {
  const data = letterExportData(book);
  const width = 1600;
  const paddingX = 150;
  const topPadding = 150;
  const bottomPadding = 170;
  const measureCanvas = document.createElement("canvas");
  const measureContext = measureCanvas.getContext("2d");
  measureContext.font = "34px 'Times New Roman', Times, serif";
  const bodyBlocks = data.paragraphs.map((paragraph) => wrappedCanvasLines(measureContext, paragraph, width - paddingX * 2));
  const bodyLineHeight = 54;
  const bodyHeight = bodyBlocks.reduce((total, lines, index) => total + lines.length * bodyLineHeight + (index === bodyBlocks.length - 1 ? 12 : 48), 0);
  const height = Math.max(2200, topPadding + 210 + bodyHeight + bottomPadding);
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext("2d");

  const base = context.createLinearGradient(0, 0, width, height);
  base.addColorStop(0, "#f8e2b7");
  base.addColorStop(0.45, "#ead09d");
  base.addColorStop(1, "#d5af73");
  context.fillStyle = base;
  context.fillRect(0, 0, width, height);

  context.globalAlpha = 0.35;
  for (let i = 0; i < 1200; i += 1) {
    const x = Math.random() * width;
    const y = Math.random() * height;
    const radius = Math.random() * 2.2 + 0.4;
    context.fillStyle = Math.random() > 0.5 ? "#fff1cf" : "#7c5930";
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2);
    context.fill();
  }
  context.globalAlpha = 1;

  const stain = context.createRadialGradient(width * 0.76, height * 0.18, 20, width * 0.76, height * 0.18, 520);
  stain.addColorStop(0, "rgba(122, 83, 43, 0.16)");
  stain.addColorStop(1, "rgba(122, 83, 43, 0)");
  context.fillStyle = stain;
  context.fillRect(0, 0, width, height);

  context.strokeStyle = "rgba(83, 55, 28, 0.24)";
  context.lineWidth = 5;
  context.strokeRect(58, 58, width - 116, height - 116);
  context.strokeStyle = "rgba(255, 246, 220, 0.36)";
  context.lineWidth = 2;
  context.strokeRect(78, 78, width - 156, height - 156);

  context.fillStyle = "#6f5030";
  context.font = "700 26px 'Times New Roman', Times, serif";
  context.letterSpacing = "0px";
  context.fillText(data.role.toUpperCase(), paddingX, topPadding);
  context.fillStyle = "#2f2b25";
  context.font = "700 70px 'Times New Roman', Times, serif";
  context.fillText(data.title, paddingX, topPadding + 88);

  context.fillStyle = "#473d30";
  context.font = "34px 'Times New Roman', Times, serif";
  let y = topPadding + 190;
  bodyBlocks.forEach((lines, blockIndex) => {
    lines.forEach((line) => {
      context.fillText(line, paddingX, y);
      y += bodyLineHeight;
    });
    y += blockIndex === bodyBlocks.length - 1 ? 12 : 48;
  });

  context.strokeStyle = "rgba(83, 55, 28, 0.36)";
  context.lineWidth = 2;
  context.beginPath();
  context.moveTo(width - paddingX - 320, height - bottomPadding + 24);
  context.lineTo(width - paddingX, height - bottomPadding + 24);
  context.stroke();
  context.fillStyle = "#6f5030";
  context.font = "italic 30px 'Times New Roman', Times, serif";
  context.fillText("Qimu", width - paddingX - 155, height - bottomPadding + 72);
  return canvas;
}

function downloadLetterImage(book) {
  const canvas = createLetterCanvas(book);
  const link = document.createElement("a");
  link.href = canvas.toDataURL("image/png");
  link.download = "letter-to-dr-ren-zhao.png";
  link.click();
}

function openLetterPdfWindow(book) {
  const dataUrl = createLetterCanvas(book).toDataURL("image/png");
  const pdfWindow = window.open("", "_blank");
  if (!pdfWindow) return;
  pdfWindow.document.write(`
    <!doctype html>
    <html>
      <head>
        <title>Letter to Dr. Ren Zhao</title>
        <style>
          @page { margin: 0; }
          body { margin: 0; background: #efe2c4; }
          img { display: block; width: 100%; max-width: 100%; }
          .toolbar { position: fixed; top: 16px; right: 16px; z-index: 2; }
          button { font: 700 14px "Times New Roman", Times, serif; padding: 10px 14px; border: 1px solid rgba(30,48,53,.2); background: #fffaf0; cursor: pointer; }
          @media print { .toolbar { display: none; } img { width: 100%; } }
        </style>
      </head>
      <body>
        <div class="toolbar"><button onclick="window.print()">${html(ui("saveAsPdf"))}</button></div>
        <img src="${dataUrl}" alt="Letter to Dr. Ren Zhao">
        <script>window.addEventListener("load", () => setTimeout(() => window.print(), 350));<\/script>
      </body>
    </html>
  `);
  pdfWindow.document.close();
}

function playPageFlipSound() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const context = new AudioContext();
    const duration = 0.42;
    const noise = context.createBufferSource();
    const buffer = context.createBuffer(1, context.sampleRate * duration, context.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < data.length; i += 1) {
      const progress = i / data.length;
      const softAttack = Math.min(progress / 0.16, 1);
      const softDecay = Math.pow(1 - progress, 1.8);
      const lowRustle = Math.sin(i * 0.035) * 0.045;
      data[i] = ((Math.random() * 2 - 1) * 0.11 + lowRustle) * softAttack * softDecay;
    }
    const filter = context.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(1150, context.currentTime);
    filter.frequency.exponentialRampToValueAtTime(620, context.currentTime + duration);
    filter.Q.setValueAtTime(0.55, context.currentTime);

    const gain = context.createGain();
    gain.gain.setValueAtTime(0.0001, context.currentTime);
    gain.gain.linearRampToValueAtTime(0.11, context.currentTime + 0.06);
    gain.gain.exponentialRampToValueAtTime(0.01, context.currentTime + duration);

    const fold = context.createOscillator();
    const foldGain = context.createGain();
    fold.type = "triangle";
    fold.frequency.setValueAtTime(92, context.currentTime);
    fold.frequency.exponentialRampToValueAtTime(58, context.currentTime + 0.26);
    foldGain.gain.setValueAtTime(0.0001, context.currentTime);
    foldGain.gain.linearRampToValueAtTime(0.018, context.currentTime + 0.04);
    foldGain.gain.exponentialRampToValueAtTime(0.001, context.currentTime + 0.3);

    noise.buffer = buffer;
    noise.connect(filter).connect(gain).connect(context.destination);
    fold.connect(foldGain).connect(context.destination);
    noise.start();
    fold.start();
    noise.stop(context.currentTime + duration);
    fold.stop(context.currentTime + 0.32);
  } catch {
    // Audio is optional and depends on browser permissions.
  }
}

function initBaseGlobe() {
  const modal = document.querySelector("[data-base-globe]");
  const openers = document.querySelectorAll("[data-base-map-open]");
  if (!modal || !openers.length) return;
  const close = modal.querySelector("[data-base-map-close]");
  const canvas = modal.querySelector("[data-base-canvas]");
  const routes = projectById(document.body.dataset.project)?.baseRoutes || [];
  let globeApi = null;
  let globeApiPromise = null;

  openers.forEach((opener) => {
    opener.addEventListener("click", async () => {
      modal.hidden = false;
      if (!globeApiPromise) globeApiPromise = createBaseGlobe(canvas, routes, modal.querySelector("[data-base-tooltip]"));
      globeApi = await globeApiPromise;
      globeApi.draw();
    });
  });
  close?.addEventListener("click", () => {
    modal.hidden = true;
  });
  modal.querySelectorAll("[data-route-id]").forEach((button) => {
    button.addEventListener("click", async () => {
      globeApi = globeApi || (globeApiPromise ? await globeApiPromise : null);
      globeApi?.highlight(button.dataset.routeId);
    });
  });
}

let globeAssetPromise = null;

function loadGlobeAssets() {
  if (!globeAssetPromise) {
    globeAssetPromise = Promise.all([
      import("https://cdn.jsdelivr.net/npm/d3-geo@3/+esm"),
      import("https://cdn.jsdelivr.net/npm/topojson-client@3/+esm"),
      fetch("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-10m.json").then((response) => response.json()),
    ]).then(([d3Geo, topojson, world]) => ({
      d3Geo,
      countries: topojson.feature(world, world.objects.countries),
    }));
  }
  return globeAssetPromise;
}

async function createBaseGlobe(canvas, routes, tooltip) {
  const ctx = canvas.getContext("2d");
  let rotateLon = -72;
  let rotateLat = -12;
  let highlighted = routes[0]?.id || "";
  const pointsForHit = [];
  const teacherColor = "#7d3c4b";
  const qimuColor = "#385f7d";
  const teacherCountries = new Set(["036", "156", "702"]);
  const qimuCountries = new Set(["380", "528", "724", "826"]);

  drawGlobeStatus(ctx, canvas, "Loading high-resolution map data...");
  let assets;
  try {
    assets = await loadGlobeAssets();
  } catch {
    drawGlobeStatus(ctx, canvas, "Map data could not be loaded. Please check the network.");
    return {
      draw() {},
      highlight() {},
    };
  }

  const { d3Geo, countries } = assets;
  const projection = d3Geo.geoOrthographic().precision(0.5).clipAngle(90);
  const graticule = d3Geo.geoGraticule10();
  const sphere = { type: "Sphere" };

  const updateProjection = () => {
    const radius = Math.min(canvas.width, canvas.height) * 0.39;
    projection
      .scale(radius)
      .translate([canvas.width / 2, canvas.height / 2])
      .rotate([rotateLon, rotateLat]);
  };

  const draw = () => {
    updateProjection();
    const path = d3Geo.geoPath(projection, ctx);
    pointsForHit.length = 0;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const radius = Math.min(canvas.width, canvas.height) * 0.39;
    const cx = canvas.width / 2;
    const cy = canvas.height / 2;
    const gradient = ctx.createRadialGradient(cx - radius * 0.4, cy - radius * 0.45, radius * 0.2, cx, cy, radius);
    gradient.addColorStop(0, "#fffdf8");
    gradient.addColorStop(0.58, "#dfe7e7");
    gradient.addColorStop(1, "#9aa7a1");
    ctx.beginPath();
    path(sphere);
    ctx.fillStyle = gradient;
    ctx.fill();

    ctx.save();
    drawNaturalEarthCountries(countries, path, ctx, teacherCountries, qimuCountries, teacherColor, qimuColor);
    drawNaturalEarthGraticule(graticule, path, ctx);
    routes.forEach((route) => drawGeoRoute(route, projection, d3Geo.geoInterpolate, ctx, pointsForHit, route.id === highlighted));
    routes.forEach((route) => drawGeoLocation(route.teacher, teacherColor, projection, ctx));
    routes.forEach((route) => drawGeoLocation(route.qimu, qimuColor, projection, ctx));
    ctx.restore();

    ctx.beginPath();
    path(sphere);
    ctx.strokeStyle = "rgba(30,48,53,0.22)";
    ctx.lineWidth = 1.5;
    ctx.stroke();
  };

  let dragging = false;
  let last = null;
  canvas.addEventListener("pointerdown", (event) => {
    dragging = true;
    last = { x: event.clientX, y: event.clientY };
    canvas.setPointerCapture(event.pointerId);
  });
  canvas.addEventListener("pointermove", (event) => {
    if (dragging && last) {
      rotateLon += (event.clientX - last.x) * 0.28;
      rotateLat = Math.max(-58, Math.min(58, rotateLat - (event.clientY - last.y) * 0.18));
      last = { x: event.clientX, y: event.clientY };
      draw();
      return;
    }
    const rect = canvas.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * canvas.width;
    const y = ((event.clientY - rect.top) / rect.height) * canvas.height;
    const hit = pointsForHit.find((point) => Math.hypot(point.x - x, point.y - y) < 9);
    if (hit) {
      highlighted = hit.route.id;
      draw();
      tooltip.hidden = false;
      tooltip.style.left = `${event.clientX - rect.left + 12}px`;
      tooltip.style.top = `${event.clientY - rect.top + 12}px`;
      tooltip.textContent = text(hit.route.tooltip);
    } else {
      tooltip.hidden = true;
    }
  });
  canvas.addEventListener("pointerup", () => {
    dragging = false;
    last = null;
  });
  canvas.addEventListener("pointerleave", () => {
    dragging = false;
    tooltip.hidden = true;
  });

  return {
    draw,
    highlight(routeId) {
      highlighted = routeId;
      draw();
    },
  };
}

function drawGlobeStatus(ctx, canvas, message) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgba(255,253,248,0.92)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgba(30,48,53,0.68)";
  ctx.font = "20px Georgia, serif";
  ctx.textAlign = "center";
  ctx.fillText(message, canvas.width / 2, canvas.height / 2);
}

function drawNaturalEarthCountries(countries, path, ctx, teacherCountries, qimuCountries, teacherColor, qimuColor) {
  countries.features.forEach((feature) => {
    const id = String(feature.id).padStart(3, "0");
    const isTeacher = teacherCountries.has(id);
    const isQimu = qimuCountries.has(id);
    ctx.beginPath();
    path(feature);
    ctx.fillStyle = isTeacher
      ? "rgba(125,60,75,0.3)"
      : isQimu
        ? "rgba(56,95,125,0.3)"
        : "rgba(89,102,98,0.2)";
    ctx.fill();
    ctx.strokeStyle = isTeacher ? teacherColor : isQimu ? qimuColor : "rgba(30,48,53,0.18)";
    ctx.lineWidth = isTeacher || isQimu ? 1.05 : 0.45;
    ctx.stroke();
  });
}

function drawNaturalEarthGraticule(graticule, path, ctx) {
  ctx.beginPath();
  path(graticule);
  ctx.strokeStyle = "rgba(30,48,53,0.1)";
  ctx.lineWidth = 0.8;
  ctx.stroke();
}

function drawGeoRoute(route, projection, interpolate, ctx, pointsForHit, active) {
  const pts = [];
  const interpolator = interpolate([route.teacher.lon, route.teacher.lat], [route.qimu.lon, route.qimu.lat]);
  for (let step = 0; step <= 96; step += 1) {
    const coord = interpolator(step / 96);
    const point = projection(coord);
    if (!point) {
      pts.push(null);
      continue;
    }
    const projected = { x: point[0], y: point[1], route };
    pts.push(projected);
    pointsForHit.push(projected);
  }
  ctx.strokeStyle = active ? "rgba(125,60,75,0.86)" : "rgba(56,95,125,0.46)";
  ctx.lineWidth = active ? 4 : 2.4;
  ctx.lineCap = "round";
  drawProjectedLine(ctx, pts);
}

function drawProjectedLine(ctx, pts) {
  ctx.beginPath();
  let started = false;
  pts.forEach((point) => {
    if (!point) {
      started = false;
      return;
    }
    if (!started) {
      ctx.moveTo(point.x, point.y);
      started = true;
    } else {
      ctx.lineTo(point.x, point.y);
    }
  });
  ctx.stroke();
}

function drawGeoLocation(location, color, projection, ctx) {
  const point = projection([location.lon, location.lat]);
  if (!point) return;
  const [x, y] = point;
  const glow = ctx.createRadialGradient(x, y, 2, x, y, 20);
  glow.addColorStop(0, color);
  glow.addColorStop(1, "rgba(255,253,248,0)");
  ctx.beginPath();
  ctx.arc(x, y, 20, 0, Math.PI * 2);
  ctx.fillStyle = glow;
  ctx.fill();
  ctx.beginPath();
  ctx.arc(x, y, 6.5, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.strokeStyle = "#fffdf8";
  ctx.lineWidth = 2;
  ctx.stroke();
}

boot();
