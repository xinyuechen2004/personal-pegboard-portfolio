const panels = {
  about: {
    className: "about-panel",
    html: `
      <p class="panel-kicker">01 / ABOUT ME / 个人简介</p>
      <h1 id="modal-title" class="panel-title">Some notes about how I see and make things.</h1>
      <div class="about-copy">
        <p>我喜欢观察生活，感知生活里的细节，也很容易对身边的人和事产生好奇。</p>
        <p>平时会记下一些小想法，也在尝试借助 AI，慢慢把它们做成可以体验的小项目。</p>
        <p>这里是我的个人作品板，也会继续更新，欢迎点点看。</p>
      </div>
      <span class="about-shape" aria-hidden="true"></span>
    `,
  },
  works: {
    className: "works-panel",
    html: `
      <p class="panel-kicker">02 / SELECTED WORKS / 精选作品</p>
      <h1 id="modal-title" class="panel-title">Projects that started from small ideas.</h1>
      <div class="work-list">
        <section class="work-detail">
          <div>
            <h3>天堂宠物邮局 / Heaven Pet Post Office</h3>
            <p>最近在经历陪伴我多年的小猫离开后我发现，宠物的离开也许发生在某一瞬间，但人的情感不会因此立刻结束。感谢、道歉、想念，或者某天突然想分享给它的小事，都需要一个可以继续表达的地方。</p>
            <p>所以我做了天堂宠物邮局：把想说的话写成星星纸条，放进星星瓶里；再在某些日子，收到一张从远方寄来的明信片。它希望给思念一个温柔、低频、可以慢慢保存下来的出口。</p>
            <div class="tags">
              <span>情感体验</span><span>Vibe Coding</span><span>互动网页</span><span>AI 回信机制</span>
            </div>
            <a class="action-link" href="https://heaven-pet-post-office.vercel.app/" target="_blank" rel="noreferrer">Visit Website -></a>
          </div>
          <div class="work-visual">
            <img src="./assets/pet-post-office.png" alt="Heaven Pet Post Office visual" />
          </div>
        </section>

        <section class="work-detail">
          <div>
            <h3>职升机 / Career Lift</h3>
            <p>在寻找实习和职业方向时，网上可以找到很多信息，但一个岗位具体在做什么、自己的经历是否适合，往往还是很难判断。</p>
            <p>职升机提供了一个向专家 AI 分身咨询的空间：用户可以带着自己的经历和困惑了解岗位、比较方向，并在咨询后得到一份行动计划。目前的 Web Demo 已经可以体验从职业探索、选择专家到咨询的完整流程。</p>
            <div class="tags">
              <span>职业探索</span><span>专家 AI 分身</span><span>产品方案</span><span>Web Demo</span>
            </div>
            <a class="action-link" href="https://zhishengji-voice.onrender.com/" target="_blank" rel="noreferrer">Open Demo -></a>
          </div>
          <div class="work-visual career-visual">
            <img src="./assets/zhishengji-expert-square.png" alt="职升机专家广场界面" />
          </div>
        </section>

        <section class="work-detail">
          <div>
            <h3>米兰生存 Skill / Milan Commute Strike Guard</h3>
            <p>这个项目来自一个很具体的生活场景：我的朋友在米兰上学，经常因为忘记罢工信息，出门后才发现通勤受影响，最后迟到。</p>
            <p>于是我做了一个通勤提醒的 Skill，它会结合用户课表、住址路线和米兰交通罢工信息，提前判断通勤风险，给出出门时间、替代路线和提醒安排，让罢工日去学校这件事少一点不确定。</p>
            <div class="tags">
              <span>AI Skill</span><span>通勤提醒</span><span>信息整理</span><span>生活工具</span>
            </div>
            <a class="action-link" href="./assets/milan-commute-strike-guard-codex.zip" download>Download Skill ZIP -></a>
          </div>
          <div class="work-visual">
            <span class="ticket-visual"><span class="ticket-inner">MILAN<br />COMMUTE<br />STRIKE GUARD</span></span>
          </div>
        </section>
      </div>
    `,
  },
  profile: {
    className: "profile-panel",
    html: `
      <p class="panel-kicker">03 / PROFILE / 简介信息</p>
      <h1 id="modal-title" class="panel-title">Profile Card</h1>
      <div class="profile-grid">
        <div class="profile-left">
          <img class="profile-photo" src="./assets/profile.jpg" alt="Selene Chen" />
          <section class="profile-info">
            <h3>个人信息</h3>
            <p><strong>陈心悦 / Selene Chen</strong></p>
            <p>方向：互联网产品 / 商分</p>
          </section>
          <section class="education">
            <h3>教育背景</h3>
            <p><strong>复旦大学国际金融学院</strong><br />金融｜硕士｜2026.09 - 2028.06</p>
            <p><strong>清华大学经济管理学院</strong><br />经济与金融｜本科｜2022.08 - 2026.06</p>
            <p><strong>ESSEC Business School</strong><br />全球工商管理交换生｜2024.08 - 2024.12</p>
          </section>
          <section class="hobbies">
            <h3>个人爱好</h3>
            <p class="hobby-line">排球：院队二传，清华大学 2024 年马约翰杯冠军 · 网球 · 攀岩 · 写作 · 旅行探索</p>
          </section>
        </div>

        <div>
          <section class="experience">
            <h3>实习经验</h3>
            <article class="internship-card">
              <h4>字节跳动</h4>
              <p class="meta">TikTok Shop-拉美电商｜商业分析实习生｜中国，北京｜2026.04 - 2026.08</p>
              <ul>
                <li>耐消行业商家经营复盘：独立负责墨西哥电商耐消行业H1/Q2经营复盘并进行汇报，基于在管活跃商家下探GMV分层变化，判断增长偏新商驱动、存量头商承压；评估3月底商家AM流转策略对GMV的拉动效果，判断其短期增量贡献有限，建议重点推进腰部商家成长与新商产能释放，并定位头部掉量商家名单支持业务跟进</li>
                <li>墨西哥直播GMV增长归因：针对墨西哥直播 GMV 近8周环比增长显著高于大盘的异动现象，在排除归因口径变化后，从直播供给、流量分发和转化效率拆解增长来源，识别达人直播为核心增量，判断增长主要由达人开播扩张及平台自然流量倾斜驱动，并结合达人激励任务及直播玩法上线等业务动作解释关键增长拐点</li>
                <li>商家划户AI提效：面向商家划户审核场景搭建AI Skill，并结合误判样本持续调试沉淀，大幅提高审核效率</li>
              </ul>
            </article>

            <article class="internship-card">
              <h4>快手</h4>
              <p class="meta">生活服务事业部｜战略分析实习生｜中国，北京｜2025.09 - 2025.12</p>
              <ul>
                <li>教育书课包调研：在快手教育行业市占偏低背景下，系统拆分青少/成教市场与广告链路并梳理行业各玩家核心打法；围绕青少教育K12字快倍差问题，主导专家访谈评估当前书课包链路（交易类钩子品）与迁移至本地推链路适配度，判断本地推难以承接规模放量，支持优化现有链路</li>
                <li>到店餐饮商业化研究：梳理到店餐饮市场大盘并拆解正餐/轻餐子赛道特征，分析到餐广告变现逻辑；基于变现与增长潜力两维度筛选重点品类（火锅/地方菜/饮品），参考竞对输出可复制打法</li>
                <li>其他支持：主导10+场专家访谈，负责访谈提纲与问题清单设计、专家筛选匹配及提问</li>
              </ul>
            </article>

            <article class="internship-card">
              <h4>百胜中国</h4>
              <p class="meta">肯德基｜商业分析实习生｜中国，上海｜2025.06 - 2025.09</p>
              <ul>
                <li>“双子星”项目经营分析与策略优化：针对下沉市场拓店增长瓶颈，参与肯德基必胜客双品牌协同试点项目。利用 SQL 抽取并清洗底层订单流水，搭建周度经营监控看板以追踪两家测试店首月WPSA、TC等核心指标，通过对渠道、时段及品类等多维度数据分析与分流分析，提出套餐优化等建议驱动业务侧落地</li>
                <li>“浣熊食堂”机会评估：在外卖平台大战背景下开展美团“浣熊食堂”合作可行性研究，梳理发展历程，深入研究项目规模、运作模式，结合专家访谈剖析德克士、老乡鸡等入驻品牌合作情况，为不入驻决策提供依据</li>
              </ul>
            </article>
          </section>
        </div>
      </div>
    `,
  },
  skills: {
    className: "skills-panel",
    html: `
      <p class="panel-kicker">04 / SKILLS / 技能标签</p>
      <h1 id="modal-title" class="panel-title">Tools, building habits, and communication.</h1>
      <div class="skills-grid">
        <section class="skill-group">
          <h3>Tools</h3>
          <ul>
            <li>Microsoft Office</li>
            <li>Excel</li>
            <li>SQL</li>
            <li>Think-cell</li>
          </ul>
        </section>
        <section class="skill-group">
          <h3>AI & Building</h3>
          <ul>
            <li>Codex</li>
            <li>Claude</li>
            <li>Vibe Coding</li>
            <li>AI Skill building</li>
          </ul>
        </section>
        <section class="skill-group">
          <h3>Language & Communication</h3>
          <ul>
            <li>English: Fluent</li>
            <li>French: Beginner</li>
            <li>German: Beginner</li>
            <li>Cross-cultural communication</li>
          </ul>
        </section>
      </div>
    `,
  },
  contact: {
    className: "contact-panel",
    html: `
      <p class="panel-kicker">05 / CONTACT / 联系方式</p>
      <h1 id="modal-title" class="panel-title">Contact Cards</h1>
      <div class="contact-grid">
        <section class="contact-tile wechat-card">
          <span class="contact-index">01</span>
          <h3>WECHAT</h3>
          <img src="./assets/wechat-card.jpg" alt="WeChat QR code" />
          <small>Scan to add</small>
        </section>
        <section class="contact-tile contact-mini phone-tile">
          <span class="contact-index">02</span>
          <h3>PHONE</h3>
          <p>13982251484</p>
          <small>Call / SMS</small>
        </section>
        <section class="contact-tile contact-mini email-tile">
          <span class="contact-index">03</span>
          <h3>EMAIL</h3>
          <a href="mailto:26210660003@m.fudan.edu.cn">26210660003@m.fudan.edu.cn</a>
          <small>Mail me</small>
        </section>
        <section class="contact-tile contact-mini base-tile">
          <span class="contact-index">04</span>
          <h3>BASE</h3>
          <p>Shanghai</p>
          <small>Open to product / BA roles</small>
        </section>
      </div>
    `,
  },
  open: {
    className: "open-panel",
    html: `
      <p class="panel-kicker">06 / OPEN TO WORK</p>
      <h1 id="modal-title" class="panel-title">Product · Business Analysis</h1>
      <p>Open to product and business analysis opportunities.</p>
      <p>Interested in consumer platforms, AI-assisted tools, and products shaped by real user frictions.</p>
    `,
  },
};

const modal = document.querySelector("#modal");
const modalCard = modal.querySelector(".modal-card");
const modalContent = document.querySelector("#modal-content");
const closeButton = modal.querySelector(".close-button");
const backdrop = modal.querySelector(".modal-backdrop");

function openPanel(panelName) {
  const panel = panels[panelName];
  if (!panel) return;

  modal.className = `modal is-open ${panel.className}`;
  modalContent.innerHTML = panel.html;
  modal.setAttribute("aria-hidden", "false");
  closeButton.focus({ preventScroll: true });
}

function closePanel() {
  modal.className = "modal";
  modal.setAttribute("aria-hidden", "true");
}

document.querySelectorAll("[data-panel]").forEach((item) => {
  item.addEventListener("click", () => openPanel(item.dataset.panel));
});

closeButton.addEventListener("click", closePanel);
backdrop.addEventListener("click", closePanel);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("is-open")) {
    closePanel();
  }
});

modalCard.addEventListener("click", (event) => {
  event.stopPropagation();
});
