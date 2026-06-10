window.ARCHIVE = {
  title: "A Story of Growth.",
  subtitle: "",
  cover: "materials/visuals/cover-archive.png",
  homeTimeline: {
    start: "2023-02",
    end: "2026-05",
    events: [
      { label: "MTH004", start: "2023-02", end: "2023-05" },
      { label: "Python 🐍", start: "2023-06", end: "2023-06" },
      { label: "2023 ANN", start: "2023-08", end: "2023-12", projectId: "2023ann" },
      { label: "2024 Citi", start: "2023-12", end: "2024-03", projectId: "2024citi" },
      { label: "2024 SURF", start: "2024-06", end: "2024-10", projectId: "2024surf" },
      { label: "2025 EAJAM", start: "2024-09", end: "2026-02", projectId: "2025eajam" },
      { label: "2025 Citi", start: "2025-01", end: "2025-06", projectId: "2025citi" },
      { label: "2025 IEEE CyberC", start: "2025-09", end: "2025-10", projectId: "2025ieee" },
      { label: "2026 IBEC", start: "2026-01", end: "2026-01", projectId: "2026ibec" },
      { label: "2026 Spectral", start: "2026-05", end: "2026-05", projectId: "2026spectral" },
    ],
  },
  people: {
    me: {
      name: "Qimu",
      avatar: "wechat profile/me.JPG",
    },
    supervisor: {
      name: "Dr. Ren Zhao",
      avatar: "wechat profile/supervisor.JPG",
    },
  },
  projectColors: {
    "2023ann": "#9a867f",
    "2024surf": "#8d9a8b",
    "2025surf": "#7f95a4",
    "2025eajam": "#b19783",
    "2026ibec": "#9a8aa5",
    "2026spectral": "#83a09c",
    "2024citi": "#a58b75",
    "2025citi": "#8d9f96",
    "2025ieee": "#a28b96",
  },
  sections: [
    {
      id: "research",
      number: "01",
      label: "Research",
      materialRoot: "materials/1-Research",
      page: "sections/research.html",
      years: "2023-2026",
      title: "Research",
      image: "materials/visuals/section-research.png",
      summary:
        "The beginning now belongs inside research: basic neural-network training, SURF, and the gradual movement from exercises into publishable scientific work.",
      reflection:
        "This section is the center of the archive because it records how Dr. Ren Zhao's supervision turned scattered curiosity into method, patience, and research taste.",
      projects: ["2023ann", "2024surf", "2025surf"],
    },
    {
      id: "publication",
      number: "02",
      label: "Publication",
      materialRoot: "materials/2-Publication",
      page: "sections/publication.html",
      years: "2025-2026",
      title: "Publication",
      image: "materials/visuals/section-publication.png",
      summary: {
        en: "The story of my first paper.",
        zh: "第一篇 paper 的故事。",
      },
      reflection: "",
      projects: ["2025eajam"],
    },
    {
      id: "conference",
      number: "03",
      label: "Conference",
      materialRoot: "materials/3-Conference",
      page: "sections/conference.html",
      years: "2026",
      title: "Conference",
      image: "materials/visuals/section-conference.png",
      summary: "",
      reflection: {
        en: "The importance of polish.",
        zh: "Polish 的重要性。",
      },
      projects: ["2026ibec", "2026spectral"],
    },
    {
      id: "competition",
      number: "04",
      label: "Competition",
      materialRoot: "materials/4-Competition",
      page: "sections/competition.html",
      years: "2024-2025",
      title: "Competition",
      image: "materials/visuals/section-competition.png",
      summary: "",
      reflection: {
        en: "Stories about collaboration.",
        zh: "关于合作的故事。",
      },
      projects: ["2024citi", "2025citi", "2025ieee"],
    },
    {
      id: "collaborators",
      number: "05",
      label: "Collaborators",
      materialRoot: "materials/5-Collaborators",
      page: "sections/collaborators.html",
      years: "",
      title: "Collaborators",
      summary:
        "My main collaborators from 2023 to 2026.",
      reflection:
        "These are the people who grew with me.",
      collaborators: ["ren-zhao", "yifei-xu", "jiayi-lin", "zihan-liang", "ruixi-xu", "zhuoqi-hou"],
    },
  ],
  projects: {
    "2023ann": {
      id: "2023ann",
      section: "research",
      code: "2023 ANN",
      year: "2023",
      dateRange: "2023.8-2023.12",
      start: "2023-08",
      end: "2023-12",
      page: "projects/2023ann.html",
      cover: "materials/visuals/projects/2023ann.png",
      folder: "materials/1-Research/2023ANN",
      storyFolder: "materials/1-Research/2023ANN/1-Story",
      outcomeFolder: "materials/1-Research/2023ANN/2-Outcome",
      title: "2023 Neural Network Project",
      cardTitle: "ANN And Basic Research Training",
      subtitle: "The former beginning chapter, now reframed as the first research project.",
      timeline: "Python, ANN/PINN fundamentals, calculus discipline, and the first PDE experiments.",
      storyTitle: "When Basic Training Became Research",
      story: [
        "The archive begins here, but no longer as a separate Beginning section. 2023 ANN is the first research room: the place where programming, calculus, and neural-network language started to feel connected.",
        "At this stage the important outcome was not yet a public prize. It was a change in posture. I learned to read a problem slowly, reproduce an idea honestly, and accept that debugging is a form of thinking.",
        "This project also records the first quiet form of mentorship: being guided toward habits before I fully understood why those habits mattered.",
      ],
      chat: [
        { role: "Student", text: "I can run the model, but I do not know whether the error is meaningful yet." },
        { role: "Supervisor", text: "Start from the simplest equation. Check the boundary condition, then trust the comparison." },
        { role: "Student", text: "So the point is not only making it run, but making it explainable." },
      ],
      email: {
        subject: "Research training notes and next steps",
        headline: "Autumn 2023",
        meta: "An early note about study plans, research rhythm, and learning how to bring better questions.",
        lines: ["Review ANN/PINN basics.", "Prepare a short note on the Poisson test.", "Bring questions, not only results."],
      },
      outcome: {
        title: "Early Research Record",
        description:
          "The public record for this first stage is modest by design: code, notes, and a beginning research habit.",
        links: [
          {
            label: "PINN-PDE repository",
            href: "https://github.com/Qimu/PINN-PDE",
          },
        ],
        expected: ["2023-basic-training-notes.pdf", "ann-pinn-notes.pdf", "poisson-demo-screenshot.png"],
        note: "The first outcome is not a trophy; it is the evidence of learning how to work.",
      },
    },
    "2024surf": {
      id: "2024surf",
      section: "research",
      code: "2024 SURF",
      year: "2024",
      dateRange: "2024.6-2024.10",
      start: "2024-06",
      end: "2024-10",
      page: "projects/2024surf.html",
      cover: "materials/visuals/projects/2024surf.png",
      folder: "materials/1-Research/2024SURF",
      storyFolder: "materials/1-Research/2024SURF/1-Story",
      outcomeFolder: "materials/1-Research/2024SURF/2-Outcome",
      title: "2024 Summer Undergraduate Research Fellowship",
      cardTitle: "Adaptive Deep Nitsche Method",
      subtitle: "The SURF project where scientific computing became a serious research practice.",
      timeline: "Energy-based adaptive sampling, elliptic interface problems, SURF poster fair, and research colloquium.",
      storyTitle: "Learning To Revise A Method",
      story: [
        "2024 SURF was the first time the work felt large enough to resist me. The method had to be understood mathematically, implemented carefully, tested repeatedly, and then explained visually.",
        "Dr. Ren Zhao's guidance shaped the way I learned to move between theory and code. The project was not only about better accuracy, but about understanding why the adaptive indicator should focus attention where the problem was difficult.",
        "The poster and presentation were the visible moments. The real growth happened in the weekly rhythm of experiments, mistakes, refinements, and clearer language.",
      ],
      chat: [
        { role: "Student", text: "The adaptive points cluster near the interface, but I need to explain why this is not just a picture." },
        { role: "Supervisor", text: "Connect the picture to the energy. The visualization should support the argument." },
        { role: "Student", text: "Then the poster should show the method, not decorate it." },
      ],
      email: {
        subject: "SURF poster and experiment update",
        headline: "Summer 2024",
        meta: "A project note from the phase where experiments, figures, and poster structure began to converge.",
        lines: ["Clarify adaptive indicator.", "Compare with non-adaptive baseline.", "Prepare figure sequence for poster."],
      },
      outcome: {
        title: "SURF Outcome",
        description:
          "The project matured into a SURF presentation, a technical poster, and a codebase that made the method reproducible.",
        links: [
          {
            label: "Adaptive-DUNM repository",
            href: "https://github.com/Qimu/Adaptive-DUNM",
          },
        ],
        expected: ["2024-surf-report.pdf", "2024-surf-poster.pdf", "colloquium-slides.pdf"],
        note: "Poster, report, and presentation materials will sit beside the repository link when added.",
      },
    },
    "2025surf": {
      id: "2025surf",
      section: "research",
      code: "2025 SURF",
      year: "2025",
      dateRange: "2025.6-2025.8",
      start: "2025-06",
      end: "2025-08",
      page: "projects/2025surf.html",
      cover: "materials/visuals/projects/2025surf.png",
      folder: "materials/1-Research/2025SURF",
      storyFolder: "materials/1-Research/2025SURF/1-Story",
      outcomeFolder: "materials/1-Research/2025SURF/2-Outcome",
      title: "2025 Summer Undergraduate Research Fellowship",
      cardTitle: "FX Risk Sentinel: AI and Econometrics for Predictive Risk Analysis",
      subtitle: "A second SURF chapter joining machine learning, econometrics, and market risk.",
      timeline: "Mixed-frequency Transformer design for FX volatility, macro indicators, and geopolitical risk.",
      storyTitle: "Carrying Research Habits Into Finance",
      story: [
        "2025 SURF widened the research language. Instead of an interface PDE, the object became FX volatility; instead of one numerical method, the challenge became integrating high-frequency data, macro fundamentals, and risk indicators.",
        "The maturity from 2024 mattered here. I had learned how to build experiments that could be questioned, how to separate a nice result from a meaningful result, and how to explain model behavior with humility.",
        "This project belongs in the supervisor story because it shows growth beyond one topic. The training became transferable.",
      ],
      chat: [
        { role: "Student", text: "The model improves RMSE, but I want to understand whether it catches stress periods." },
        { role: "Supervisor", text: "Then evaluate the event-sensitive behavior. Accuracy alone is not the story." },
        { role: "Student", text: "I will add spike-hit and regime-specific analysis." },
      ],
      email: {
        subject: "FX Risk Sentinel weekly summary",
        headline: "Summer 2025",
        meta: "A weekly research note about model behavior, event-sensitive metrics, and presentation narrative.",
        lines: ["Add event-sensitive metrics.", "Check macro feature alignment.", "Prepare poster narrative."],
      },
      outcome: {
        title: "SURF Outcome",
        description:
          "This chapter connects the SURF record with the later conference paper, keeping the model work and research story together.",
        links: [
          {
            label: "SSRN paper",
            href: "http://dx.doi.org/10.2139/ssrn.5418894",
          },
        ],
        expected: ["2025-surf-report.pdf", "2025-surf-poster.pdf", "fx-dashboard-screenshot.png"],
        note: "Reports, poster images, and dashboard snapshots can be added as the archive becomes more complete.",
      },
      nextStage: {
        text:
          "这个SURF的成果后来参加了2026IBEC。",
        projectId: "2026ibec",
      },
    },
    "2025eajam": {
      id: "2025eajam",
      section: "publication",
      code: "2025 EAJAM",
      year: "2025-2026",
      dateRange: "2024.9-2026.2",
      start: "2024-09",
      end: "2026-02",
      page: "projects/2025eajam.html",
      cover: "materials/visuals/projects/2025eajam.png",
      folder: "materials/2-Publication/2025EAJAM",
      storyFolder: "materials/2-Publication/2025EAJAM/1-Story",
      outcomeFolder: "materials/2-Publication/2025EAJAM/2-Outcome",
      title: "EAJAM",
      cardTitle: "Energy-Based Adaptive Deep Unfitted Nitsche Method",
      subtitle: "The story of my first paper.",
      timeline: "Manuscript, revision, acceptance, and publication in East Asian Journal on Applied Mathematics.",
      storyTitle: "一个与命运紧紧缠绕的故事",
      story: [
        "A publication page can look deceptively simple: title, journal, DOI. This archive keeps the private life of the paper visible: the drafts, revisions, figures, and decisions that made the final article possible.",
        "What matters most here is the apprenticeship inside the writing. I learned that research communication is not decoration after the result. It is part of the result.",
        "The paper carries Dr. Ren Zhao's mentorship in its structure: careful method, careful comparison, careful explanation.",
      ],
      chat: [],
      email: null,
      outcome: {
        title: "Publication Link",
        description:
          "This outcome can remain link-only, or it can also hold proofs, acceptance screenshots, and marked drafts.",
        links: [
          {
            label: "EAJAM article page",
            href: "https://www.global-sci.com/EAJAM/article/view/23417",
          },
          {
            label: "DOI",
            href: "https://doi.org/10.4208/eajam.2025-069.100925",
          },
        ],
        expected: ["acceptance-email.png", "proof-email.png", "publication-reflection.pdf"],
        note: "The article link is the formal record; the later archive can show the correspondence behind it.",
      },
    },
    "2026ibec": {
      id: "2026ibec",
      section: "conference",
      code: "2026 IBEC",
      year: "2026",
      dateRange: "2026.1",
      start: "2026-01",
      end: "2026-01",
      page: "projects/2026ibec.html",
      cover: "materials/visuals/projects/2026ibec.png",
      folder: "materials/3-Conference/2026IBEC",
      storyFolder: "materials/3-Conference/2026IBEC/1-Story",
      outcomeFolder: "materials/3-Conference/2026IBEC/2-Outcome",
      title: "2026 IBEC",
      cardTitle: "IBEC 2026",
      subtitle: "The outcome of 2025 SURF.",
      timeline: "My first time attending a conference in IBSS.",
      storyTitle: "The First Presentation Of 2026.",
      story: [
        "IBEC 2026 is the point where the FX research became public speech. A model that once lived in code and notes had to become a sequence of claims that an audience could follow.",
        "The preparation changed how I understood the project. Every slide forced a decision: what is essential, what is evidence, and what can be left behind.",
        "This chapter records the confidence that comes not from knowing everything, but from preparing carefully enough to answer honestly.",
      ],
      chat: [
        { role: "Student", text: "The slides are complete, but the transition from macro risk to Transformer is abrupt." },
        { role: "Supervisor", text: "Make the motivation do more work. The audience should know why mixed frequency matters before the architecture appears." },
        { role: "Student", text: "I will rebuild the first three slides around the research question." },
      ],
      email: {
        subject: "IBEC 2026 conference materials",
        headline: "January 2026",
        meta: "A conference note about acceptance, schedule, and the preparation of the final presentation.",
        lines: ["Abstract accepted.", "Presentation scheduled.", "Final paper and slides prepared."],
      },
      outcome: {
        title: "Conference Outcome",
        description:
          "The conference outcome gathers the paper link and, later, the slides and visual record of presenting the work.",
        links: [
          {
            label: "SSRN paper",
            href: "http://dx.doi.org/10.2139/ssrn.5418894",
          },
        ],
        expected: ["2026-ibec-report.pdf", "ibec-slides.pdf", "conference-photo.jpg"],
        note: "The paper is linked now; slides and conference images can join it when ready.",
      },
    },
    "2026spectral": {
      id: "2026spectral",
      section: "conference",
      code: "2026 Spectral",
      year: "2026",
      dateRange: "2026.5",
      start: "2026-05",
      end: "2026-05",
      page: "projects/2026spectral.html",
      cover: "materials/visuals/projects/2026spectral.png",
      folder: "materials/3-Conference/2026Spectral",
      storyFolder: "materials/3-Conference/2026Spectral/1-Story",
      outcomeFolder: "",
      title: "The 10th Academic Symposium on Spectral Methods and Their Applications",
      cardTitle: "Spectral Method",
      subtitle: "",
      timeline: "All the stories finally had faces.",
      storyTitle: "My First Mathematics Conference.",
      story: [
        "This chapter begins with preparation: notes, rehearsal, messages, and the words that explain why the spectral method topic matters.",
        "Not every archive room has a final artifact at the same time. Some begin as a record of thinking before they become a record of presentation.",
        "For now, the page keeps the chapter open, honest, and still becoming.",
      ],
      chat: [
        { role: "Student", text: "This talk still feels like a set of methods rather than a story." },
        { role: "Supervisor", text: "Start with the problem the method clarifies. Then the method has a reason to be there." },
        { role: "Student", text: "I will write the first version as a question, not a list." },
      ],
      email: {
        subject: "Spectral method preparation",
        headline: "2026",
        meta: "A preparation note for the talk outline, examples, and questions to carry into the presentation.",
        lines: ["Prepare talk outline.", "Collect examples.", "Record audience questions after presentation."],
      },
      outcome: null,
    },
    "2024citi": {
      id: "2024citi",
      section: "competition",
      code: "2024 Citi",
      year: "2024",
      dateRange: "2023.12-2024.3",
      start: "2023-12",
      end: "2024-03",
      page: "projects/2024citi.html",
      cover: "materials/visuals/projects/2024citi.png",
      folder: "materials/4-Competition/2024CITI",
      storyFolder: "materials/4-Competition/2024CITI/1-Story",
      outcomeFolder: "materials/4-Competition/2024CITI/2-Outcome",
      title: "2024 Citi Financial Innovation Application Competition",
      cardTitle: "Equity Structure Analysis Platform",
      subtitle: "A competition chapter about ownership networks, NLP, and business analysis.",
      timeline: "",
      storyTitle: "The First Competition",
      story: [
        "2024 Citi was an early test of whether technical tools could serve a broader business explanation. The project had code, but it also needed a report that could be read by people outside the codebase.",
        "The growth here was learning to connect extraction, visualization, and strategic thinking without letting any one part dominate the whole.",
        "It belongs in the archive because it shows research discipline moving into a practical setting.",
      ],
      chat: [
        { role: "Student", text: "The network graph looks complex, but I need it to say something business-relevant." },
        { role: "Collaborator", text: "Use the graph to identify control, concentration, and risk. Then the report has a reason." },
        { role: "Student", text: "I will connect the visualization to the SWOT and PEST sections." },
      ],
      email: {
        subject: "2024 Citi report submission",
        headline: "Spring 2024",
        meta: "A project note from the stage where extraction, visualization, and report argument had to align.",
        lines: ["Finalize ownership extraction.", "Export network figures.", "Submit strategic report."],
      },
      outcome: {
        title: "Competition Outcome",
        description:
          "The outcome records the platform logic, the strategic report, and the way a technical graph became a business argument.",
        links: [
          {
            label: "Equity Structure Platform repository",
            href: "https://github.com/Qimu/Equity-Structure-Platform",
          },
        ],
        expected: ["2024-citi-report.pdf", "network-screenshot.png", "presentation-slides.pdf"],
        note: "Report, graph images, and presentation materials can be added beside the repository link.",
      },
    },
    "2025citi": {
      id: "2025citi",
      section: "competition",
      code: "2025 Citi",
      year: "2025",
      dateRange: "2025.1-2025.6",
      start: "2025-01",
      end: "2025-06",
      page: "projects/2025citi.html",
      cover: "materials/visuals/projects/2025citi.png",
      folder: "materials/4-Competition/2025CITI",
      storyFolder: "materials/4-Competition/2025CITI/1-Story",
      outcomeFolder: "materials/4-Competition/2025CITI/2-Outcome",
      title: "2025 Citi Financial Innovation Application Competition",
      cardTitle: "FX Risk Signal Detection Platform",
      subtitle: "",
      timeline: "",
      storyTitle: "Number one girl",
      story: [
        "2025 Citi made the FX work more immediate. The question was no longer only whether a model performed, but whether its signals could be interpreted, tracked, and communicated under market conditions.",
        "The project asked for technical leadership and restraint. A dashboard can make everything visible, but the archive records the harder choice: deciding what matters enough to show.",
        "This was one of the clearest signs that the research training had matured into judgment.",
      ],
      chat: [
        { role: "Student", text: "The dashboard is live, but too many indicators compete for attention." },
        { role: "Collaborator", text: "Make the risk signal primary. Put interpretation next to the forecast." },
        { role: "Student", text: "I will redesign the panel around scenario and signal strength." },
      ],
      chatHeadline: "2025.04",
      chatNote:
        "This exchange marks the moment when the dashboard moved from showing many results to telling one clearer risk story.",
      email: {
        subject: "Citi FX platform final materials",
        headline: "Spring 2025",
        meta: "A final-stage note about dashboard demonstration, pitch preparation, and award correspondence.",
        lines: ["Dashboard demo prepared.", "Final pitch submitted.", "Award result received."],
      },
      storyEvidence: [
        {
          type: "chat",
          date: "2025.03",
          note:
            "The first dashboard version had enough information, but the core signal was not yet easy to recognize. This exchange records the shift from display to judgment.",
          messages: [
            { role: "Student", text: "The dashboard is live, but too many indicators compete for attention." },
            { role: "Collaborator", text: "Make the risk signal primary. Put interpretation next to the forecast." },
            { role: "Student", text: "I will redesign the panel around scenario and signal strength." },
          ],
        },
        {
          type: "chat",
          date: "2025.04",
          note:
            "After the model metrics improved, the discussion moved toward whether the platform could explain stress periods rather than only report average accuracy.",
          messages: [
            { role: "Student", text: "The model improves RMSE, but I am not sure whether the stressed market periods are clear enough." },
            { role: "Collaborator", text: "Use one event window. Let the audience see how the signal behaves when the market is under pressure." },
            { role: "Student", text: "Then I will connect the signal panel with the scenario simulation." },
          ],
        },
        {
          type: "chat",
          date: "2025.05",
          note:
            "Near the final presentation, the work became less about adding features and more about protecting a clean argument.",
          messages: [
            { role: "Student", text: "I want to include SHAP, hedging logic, and the dashboard flow, but the pitch is becoming crowded." },
            { role: "Collaborator", text: "Keep SHAP concise. The decision flow should carry the story." },
            { role: "Student", text: "I will make the final section about how the platform supports action." },
          ],
        },
        {
          type: "email",
          date: "Spring 2025",
          note:
            "This email thread records the move from technical completion to final competition materials: demo, pitch, and archive-ready evidence.",
          subject: "Citi FX platform final materials",
          meta: "A final-stage note about dashboard demonstration, pitch preparation, and award correspondence.",
          lines: ["Dashboard demo prepared.", "Final pitch submitted.", "Award result received."],
        },
        {
          type: "email",
          date: "May 2025",
          note:
            "The final confirmation became a small but important archive marker: the project had moved from experiment to public-facing delivery.",
          subject: "Final presentation package",
          meta: "A short record of the final deck, demonstration material, and competition submission package.",
          lines: ["Confirm final deck version.", "Attach dashboard screenshots.", "Prepare the speaking order."],
        },
      ],
      storyAfter: [
        "Looking back, the most important change in 2025 Citi was not simply that the platform became more complete. It was that the work learned restraint. The dashboard stopped being a container for every possible indicator and became a way to guide attention.",
        "That shift made the project feel connected to the larger archive: research habits became product judgment, model evaluation became communication, and technical leadership became the ability to decide what should be made visible.",
      ],
      outcome: {
        title: "Competition Outcome",
        description:
          "The outcome preserves the market-facing version of the research: dashboard, signal design, pitch, and recognition.",
        links: [
          {
            label: "FX Risk Signal Detection repository",
            href: "https://github.com/Qimu/FX-Risk-Signal-Detection",
          },
        ],
        expected: ["2025-citi-report.pdf", "dashboard-demo.png", "award-email.png"],
        note: "Demo images, pitch materials, and award records can be added as the archive fills in.",
      },
      outcomeShowcase: {
        documents: [
          {
            label: "Choice A",
            kind: "Report",
            href: "https://github.com/Qimu/FX-Risk-Signal-Detection",
          },
          {
            label: "Choice B",
            kind: "Poster",
            href: "https://github.com/Qimu/FX-Risk-Signal-Detection",
          },
          {
            label: "Choice C",
            kind: "Slides",
            href: "https://github.com/Qimu/FX-Risk-Signal-Detection",
          },
        ],
        presentation: [
          {
            label: "Panel A",
            caption: "Signal overview and dashboard opening view.",
          },
          {
            label: "Panel B",
            caption: "Model interpretation and market stress comparison.",
          },
          {
            label: "Panel C",
            caption: "Final pitch sequence and outcome record.",
          },
        ],
      },
      nextStage: {
        text:
          "This project then becomes the 2025 SURF project at the first stage.",
        projectId: "2025surf",
      },
    },
    "2025ieee": {
      id: "2025ieee",
      section: "competition",
      code: "2025 IEEE CyberC",
      year: "2025",
      dateRange: "2025.9-2025.10",
      start: "2025-09",
      end: "2025-10",
      page: "projects/2025ieee-cyberc.html",
      cover: "materials/visuals/projects/2025ieee.png",
      folder: "materials/4-Competition/2025IEEE CyberC",
      storyFolder: "materials/4-Competition/2025IEEE CyberC/1-Story",
      outcomeFolder: "materials/4-Competition/2025IEEE CyberC/2-Outcome",
      title: "IEEE CyberC Big-Big Data Competition",
      cardTitle: "A Delta–Learning Method to Gold Cluster Energy Prediction",
      // subtitle: "Message passing neural networks for Au20 energy prediction.",
      timeline: "Applications of machine learning in microscopic chemistry.",
      storyTitle: "A Pleasant Collaboration.",
      story: [
        "The IEEE CyberC project felt like a return to scientific computing, but with a different maturity. By then, machine learning was no longer just a tool to try; it was a modeling language to justify.",
        "The delta-learning structure mattered because it respected an older method instead of discarding it. That felt like a research lesson too: progress can mean learning what to keep.",
        "This chapter links the early ANN/PDE training with a later scientific machine learning competition.",
      ],
      chat: [
        { role: "Student", text: "The residual target improves accuracy, but I want the presentation to explain why delta-learning is natural here." },
        { role: "Collaborator", text: "Show the classical estimate first. Then show what the graph model learns beyond it." },
        { role: "Student", text: "I will make the old method the baseline, not the opponent." },
      ],
      email: {
        subject: "IEEE CyberC Big-Big Data materials",
        headline: "Autumn 2025",
        meta: "A competition note about model evaluation, presentation materials, and the award record.",
        lines: ["Model evaluation complete.", "Presentation materials submitted.", "Award record archived."],
      },
      outcome: {
        title: "Competition Outcome",
        description:
          "The outcome connects the modeling record with presentation, evaluation figures, and competition recognition.",
        links: [
          {
            label: "CyberC Big-Big Data repository",
            href: "https://github.com/Qimu/2025-CyberC-Big-Big-Data-Competition",
          },
        ],
        expected: ["2025-ieee-cyberc-report.pdf", "poster.pdf", "award-photo.jpg"],
        note: "Poster, report, and award images can be added beside the repository link.",
      },
    },
  },
  collaborators: {
    "ren-zhao": {
      id: "ren-zhao",
      code: "Ren",
      name: "Dr. Ren Zhao",
      role: "Best Supervisor",
      avatar: "collaborator profile/Ren.jpeg",
      page: "collaborators/ren-zhao.html",
      folder: "materials/5-Collaborators/Ren",
      title: "To 忍老师：",
      summary:
        "Supervisor, mentor, and the central guide across the research, competition, publication, and conference chapters.",
      letter: [
        {
          en:
            "Three years can feel short: short enough to be summarized by a handful of projects. But three years can also be long: long enough for habits and character to change deeply, and long enough to cross all kinds of distance in time and space.",
          zh:
            "三年很短，短到好像用几个 project 就可以概括。三年也很长，长到足以经历许多习惯与性格的剧变，长到可以跨越所有时间与空间的阻隔。",
        },
        {
          en:
            "Whose youth is not full of confusion? But when I was confused, I met a lighthouse. During these three years of feeling my way forward, what changed was not only how I studied, but also the habits I built. In project after project, whether there was a final result or not, none of them ended without meaning. Each project was complete and deep, never just a shallow attempt. Each also left a clear record. And after there is a record, there must also be the ability to express, output, and present. Just like the word we heard at NYU Shanghai: polish. In this final year, I have also been trying hard to do exactly that.",
          zh:
            "谁的青春不迷茫呢？可是在迷茫的时候，我遇到了一个灯塔。摸索前行的这三年里，被改变的不只是学习的方式和方法，更是好习惯的养成。在一个个项目中，无论最后是否有成果，都没有任何一个是无疾而终的。每一个 project 都是完整的、深刻的，不是浅尝辄止的，每一个也都有清晰的记录。而有了记录之后，还要有表达的能力，有输出和汇报的能力，就像我们当时在上纽听到的那个词，“Polish”。最后这一年，我也一直在努力做这件事。",
        },
        {
          en:
            "These three years also made me realize that if I am truly interested in something, and truly want to make it happen, then my major background, current knowledge, lack of experience, or lack of previous exposure will not become real obstacles. My will and my ability to act can turn many things into reality. Three years ago, I did not have that confidence. Back then, in modeling competitions, I could only take care of the writing part, and I was used to being assigned tasks. Later, whether it was a small group assignment or a more complicated project, I became used to leading, to taking responsibility for the most central and difficult parts. Only that sense of control makes me feel settled.",
          zh:
            "这三年也让我意识到，只要我真的感兴趣，真的想去做成一件事情，专业背景、目前拥有的知识、缺乏经验和经历，都不会成为真正的阻碍。我的愿力和行动力，可以把很多事情变成现实。而三年前的我，是没有这样自信的。那时参加建模比赛，我只能负责写作的部分，也总是习惯于被安排。后来，无论是小到小组作业，还是其他更复杂的项目，我都已经习惯去主导，去承担最核心、最复杂的任务。也只有这种掌控感，才会让我更安心。",
        },
        {
          en:
            "I gradually understood what Dr. Ren Zhao later said: some things are not done because one is born with a “big heart”; rather, once a person becomes strong enough, a “big heart” naturally grows.",
          zh:
            "我也逐渐理解了忍老师后来所说的：有些事情，不是只有拥有一颗“大心脏”才能去做，而是当自己变得足够强大之后，自然就会拥有一颗“大心脏”。",
        },
        {
          en:
            "This self-recognition came from the opportunities I was given. I have always said that I am lucky, because before I had any results or external recognition, I was already seen, chosen, trusted, and encouraged. At that time, although I did not believe in myself that much, I believed in you very, very much. So I also followed that belief and trusted your choice and your judgment, trying my best to hold on to every opportunity.",
          zh:
            "而这样的自我认同，来自于曾经被给予的一个个机会。我一直说我是幸运的，因为在我还没有任何成果、还没有获得外界认可的时候，就已经被看见、被选择、被信任、被鼓励。那时候的我虽然还不那么相信自己，却非常非常坚信老师。因此，我也顺势相信了老师的选择和眼光，尽我所能去抓住每一次机会。",
        },
        {
          en:
            "Whether there was a result or not, as you said, we just kept moving on. And precisely because we kept moving on, many stories were able to continue. As they continued, they began to feel like “after mountains and rivers leave no way out, another village appears beneath dark willows and bright flowers.” Perhaps this is what it means that luck hides inside effort: keep doing it, do it with focus, do it with all your strength, and maybe fate really will look after you for a moment.",
          zh:
            "有成果也好，没有也罢，就像忍老师说的那样，一直 move on。也正是因为一直 move on，很多故事才得以被续写。写着写着，便有了一种“山重水复疑无路，柳暗花明又一村”的感觉。或许这就是所谓的“好运藏在努力里”：一直做，专注地做，全力以赴地做，可能真的会被命运眷顾一下。",
        },
        {
          en:
            "These three years are written from my perspective, but from Dr. Ren Zhao’s perspective, he not only supervised the projects related to me, but also gave countless kinds of support to so many peers. He is truly a teacher who keeps inspiring others, and someone doing real education. We were treated as vivid, living people, not as student numbers. To meet such a noble person at a huge fork in life is something I will be grateful for throughout my life.",
          zh:
            "这三年的故事，是从我视角撰写的，而忍老师不仅仅 supervise 了和我相关的项目，还给无数的同伴们提供了大大小小的 support，是当之无愧的总在 inspire 的老师，也是在做真的教育的人。我们是被认真对待的一个个鲜活的人，而不是一个个学号。能在人生的巨大的分岔路口遇到这样的贵人，是我一生都会感念的事。",
        },
        {
          en:
            "And I know the story will continue. I will do mature things, do things that are truly useful, and walk generously toward wherever fate points me. I will move closer to the light, believe in the light, become the light, and also give off light 🎆",
          zh:
            "而我知道，故事还将续写。要去做成熟的事，做真的有用的事，大大方方地走向命运指引我去的地方，去靠近光，相信光，成为光，也散发光🎆",
        },
        {
          en:
            "For PTF 💪⛽️\n\nHappy graduation 🎓\n\nMay Dr. Ren Zhao often receive much from just a little work :)\n\nBest regards,\nQimu",
          zh:
            "为 PTF 💪⛽️\n\n🎓快乐\n\n祝忍老师常常小劳而获：）\n\nBest regards，\nQimu",
        },
      ],
      links: ["2023ann", "2024surf", "2025surf", "2025eajam", "2026ibec", "2026spectral", "2024citi", "2025citi", "2025ieee"],
    },
    "yifei-xu": {
      id: "yifei-xu",
      code: "Yifei",
      name: "Yifei Xu",
      role: "Collaborator",
      summary:
        "A collaborator in the early ANN training chapter and the 2024 Citi project, linking technical practice with applied teamwork.",
      links: ["2023ann", "2024citi"],
    },
    "jiayi-lin": {
      id: "jiayi-lin",
      code: "Jiayi",
      name: "Jiayi Lin",
      role: "Collaborator",
      summary:
        "A collaborator across the ANN beginning and both Citi chapters, carrying the competition story from first prototype to mature platform.",
      links: ["2023ann", "2024citi", "2025citi"],
    },
    "zihan-liang": {
      id: "zihan-liang",
      code: "Zihan",
      name: "Zihan Liang",
      role: "Collaborator",
      summary:
        "A collaborator in the later FX and scientific machine learning chapters, connecting SURF, IEEE CyberC, and IBEC preparation.",
      links: ["2025surf", "2025ieee", "2026ibec"],
    },
    "ruixi-xu": {
      id: "ruixi-xu",
      code: "Ruixi",
      name: "Ruixi Xu",
      role: "Collaborator",
      summary:
        "A collaborator in the shared 2025-2026 research arc, from FX modeling to competition work and conference development.",
      links: ["2025surf", "2025ieee", "2026ibec"],
    },
    "zhuoqi-hou": {
      id: "zhuoqi-hou",
      code: "Zhuoqi",
      name: "Zhuoqi Hou",
      role: "Collaborator",
      summary:
        "A collaborator across the later applied research chapters, sharing the trajectory from SURF work to IBEC.",
      links: ["2025surf", "2026ibec"],
    },
  },
};

window.ARCHIVE.title = "A Story of Growth.";

window.ARCHIVE.people.hailong = {
  name: "Dr. Hailong Guo",
  avatar: "wechat profile/hailong.JPG",
};

window.ARCHIVE.people.mom = {
  name: "Mom",
  avatar: "wechat profile/mom.JPG",
};

window.ARCHIVE.people.ruixi = {
  name: "Ruixi Xu",
  avatar: "wechat profile/ruixi.JPG",
};

Object.assign(window.ARCHIVE.sections.find((section) => section.id === "research"), {
  summary: {
    en:
      "Starting from basic research training in the 2023 ANN project, then applying those research habits in 2024 SURF and 2025 SURF, this is a long story about my supervisor, my friends, and me.",
    zh:
      "从养成习惯，到看到成果。",
  },
  reflection: {
    en:
      "In this process, Dr. Ren Zhao opened the door for me, kept giving me advice, and helped me think through the direction of my future development. He is, without question, the best research supervisor I could have hoped for.",
    zh:
      "在这个过程中，忍老师启蒙我，持续不断地给我建议，也帮我规划未来的发展方向，是当之无愧的最好的 research supervisor。",
  },
});

Object.assign(window.ARCHIVE.projects["2023ann"], {
  subtitle: { en: "From zero to one.", zh: "“从零到一是很难的”" },
  headingLabel: "",
  cardTitle: "ANN: Basic Research Training",
  timeline: {
    en:
      "Anyone who wants to learn to fly must first learn to stand, walk, run, climb, and dance; one cannot fly into flying.",
    zh:
      "凡是想学会飞的人，必须先学会站立、行走、奔跑、攀爬和跳舞；人无法一蹴而就地学会飞翔。—尼采",
  },
  storyTitle: { en: "A Process from Zero to One.", zh: "一个从无到有的过程。" },
  story: [
    {
      en:
        "The story with neural networks began in the summer of 2023. I had just finished my first year, and almost everything felt new: the knowledge, the habits, even the way of learning by myself. Following Dr. Ren Zhao's advice, I started from the book Neural Networks and Deep Learning, slowly building the most basic foundation of machine learning. It was also my first serious self-study journey.",
      zh:
        "和神经网络的故事开始于 2023 年的那个暑假。对刚刚结束大一课程的我来说，所有事物都是新的，知识和习惯都是一个从 0 到 1 开始搭建的过程。在忍老师的建议下，我从《神经网络与深度学习》这本书开始学起，搭建最最基本的机器学习基础，也开始了我第一次正式的自学过程。",
    },
  ],
  storyEvidence: [
    {
      type: "email",
      date: "2023.08.15",
      note: {
        en:
          "The first seminar. I was so nervous that I somehow managed to speak for three hours.",
        zh: "第一次 seminar。第一次讲的时候非常紧张，一不小心就讲了 3 个小时。",
      },
      subject: "The First Seminar",
      meta:
        "Our very first seminar is scheduled for this Wednesday, August 16th, at 1 pm in my office. Ms. Qimu Luo will be leading our first discussion. She'll be covering the preliminaries and touching on some fundamental concepts.",
      lines: ["Welcome to the group, and get ready for an engaging exploration of Neural Networks!"],
    },
    {
      type: "email",
      date: "2023.08.28",
      note: {
        en:
          "The second seminar also lasted three hours. Every time I saw these emails, I felt that my work and notes were being genuinely respected.",
        zh:
          "第二次 seminar 也讲了 3 个小时。每次看到邮件都很感动，感觉自己的知识成果受到了尊重和珍视。",
      },
      subject: "The Second Seminar",
      meta:
        "During this seminar, Ms. Qimu Luo will continue to share her valuable study notes. Further details regarding the specific topics to be covered will be shared in an upcoming email from her.",
      lines: ["To maximize the value of our seminar, please allocate time for reviewing the reference book ahead of the session."],
    },
    {
      type: "email",
      date: "2023.09.11",
      note: {
        en: "The third seminar happened after the new semester started.",
        zh: "开学之后进行了第三次 seminar。",
      },
      subject: "The Third Seminar",
      meta:
        "Ms Qimu Luo will continue to share her study notes, and you are welcome to share your study notes as well.",
      lines: ["Please reply to confirm your attendance."],
    },
    {
      type: "email",
      date: "2023.09.12",
      note: {
        en:
          "The RA conversation made me feel both flattered and terrified. I did not think my knowledge or skills had reached the strict standard on the website, but I was trusted again.",
        zh:
          "当时对这个 RA 非常受宠若惊，感觉自己不管是知识还是技能都达不到老师官网的严格要求，但是又一次被信任了。",
      },
      subject: "Research Assistant Responsibility",
      meta:
        "Your study notes is well received. Please come to my office at 6:30pm today. We will discuss this responsibility of RA.",
      lines: [],
    },
    {
      type: "email",
      date: "2023.09.26",
      note: {
        en:
          "Around that time I received the calculus award. Dr. Ren Zhao had been helping me apply, follow up, and check the progress for months. Even the RA payment was like that. Great Ren energy.",
        zh:
          "当时收到了微积分的奖项，也是忍老师在过去几个月里一直帮我申请、询问、查询进度的，甚至 RA 工资也是。大好 Ren！",
      },
      subject: "Current Progress",
      meta: "Congratulations on this award as you are well deserved.",
      lines: ["We shall discuss your progress and plan after tomorrow's seminar."],
    },
    {
      type: "email",
      date: "2023.10.04",
      note: {
        en:
          "During the National Day holiday, everyone went home with a small task. It became my first real Python practice, and also my first clear taste of wanting to do more than I could yet do.",
        zh:
          "那次国庆假期大家回家做当时的小 task，也是第一次 Python 实践。那时候的 AI 工具还没有现在这么发达，实在体会了一把心有余而力不足。",
      },
      subject: "NN National Holiday Progress",
      meta:
        "Each of you has been assigned to a group responsible for implementing an algorithm and preparing the corresponding report and presentation. It has now been a week since our last meeting, and I hope you've been making excellent progress with your code.",
      lines: ["Kindly upload your Python code to XJTLU Box using the provided link.", "Your dedication and hard work on this project are greatly appreciated."],
    },
    {
      type: "email",
      date: "2023.10.06",
      note: {
        en:
          "After a short meeting, we came back and kept hand-building the idea. From this point, progress updates by email became part of the rhythm.",
        zh:
          "回来简单开了个会之后，我们继续按照想法手搓，也从那个时候开始用邮件汇报进度。",
      },
      subject: "Meeting Feedback",
      meta:
        "This evening, we firstly read the thesis then we decided to practice the ideas we deduced on the whiteboard today with pytorch to examine if we can figure it out.",
      lines: ["Later, we'll upload tonight's progress to the box.", "Keep up with your excellent work. Looking forward to your results."],
    },
    {
      type: "chat",
      date: "2023.10.08",
      note: {
        en:
          "The result was 360 lines of code, and almost every line had a bug. Not only the code was broken; even the emails felt buggy.",
        zh: "结果就是 360 行，行行出 bug。不止代码，还有邮件。",
      },
      messages: [
        { role: "Supervisor", text: "何止 math" },
        { role: "Supervisor", text: "真 ptsd 了" },
        { role: "Student", text: "可能在梦里改了" },
        { role: "Supervisor", text: "这次的难度比 surf 高 N 倍" },
        { role: "Student", text: "枯木会逢春的" },
        { role: "Supervisor", text: "现在初秋，你得熬到春天" },
        { role: "Supervisor", text: "一个小时后，一起到文缘食堂吃饭，顺便讨论一下" },
      ],
    },
    {
      type: "chat",
      date: "2023.10.08",
      note: {
        en:
          "Besides debugging, Dr. Ren Zhao also sent reference help and then cancelled the deadline that was never set again. I remember the feeling being very mixed: I wanted so badly to solve the problem on time, but I simply could not find where the bug was.",
        zh:
          "除了 debug，还收到了 reference help。那一天忍老师取消了后来再也没有设过的 deadline。那种五味杂陈的感觉我到现在都记得：很希望能按时攻克问题，但又实在找不出问题到底在哪。",
      },
      messages: [
        { role: "Supervisor", text: "读一下这个或许有帮助" },
        { role: "Student", text: "收到！！之前就一直在看这个，谢谢忍老师" },
        { role: "Supervisor", text: "ddl取消了" },
        { role: "Supervisor", text: "pace yourself" },
        { role: "Student", text: "好" },
        { role: "Supervisor", text: "收摊吧" },
      ],
    },
    {
      type: "email",
      date: "2023.10.15",
      note: {
        en:
          "After that, I started to pace myself. I also wrote down my concern that using neural networks without a solid programming foundation might create more problems. Dr. Ren Zhao suggested starting from the most basic Euler method, and I was lucky to discuss it with Yifei Xu.",
        zh:
          "从那次之后，我开始整理 (pace myself)。当时也担心自己基础语法不熟练，直接用神经网络会导致很多问题，于是表达了 concern。忍老师推荐我从最基本的欧拉法开始，也很幸运能和 Yifei Xu 一起讨论。",
      },
      subject: "Week 4 Progress",
      meta:
        "I always feel that my ability seems to have no practical improvement, and I am not proficient in applying many basic syntaxes of Python at all.",
      lines: [
        "Your concern is acknowledged. Since this is your first Python implementation of an algorithm, it is undoubtedly a great challenge.",
        "Please collaborate with Yifei Xu, as she has been advised to begin with simple Python tasks.",
      ],
    },
    {
      type: "email",
      date: "2023.10.23",
      note: {
        en:
          "At that time I was basically using the computer as a calculator, but I was also beginning to turn the Forward Euler method into actual functions.",
        zh:
          "当时写代码几乎是把电脑当计算器用，也从 forward Euler 开始应用 function。",
      },
      subject: "New Concern",
      meta:
        "Today, I attempted to enhance the code by first defining a 'ForwardEuler' function, similar to Yifei's approach.",
      lines: ["Please come to my office at 9:00am tomorrow morning. We will discuss your concerns in programming."],
    },
    {
      type: "email",
      date: "2023.10.30",
      note: {
        en:
          "I kept working on Euler methods. Around the same time, I sat in 334 thinking about transferring, went to Microsoft, and heard a glimpse of the life I might want in the future.",
        zh:
          "继续写 Euler 法。那段时间还在 334 看 BU 开始想转学，也去了微软，听到了未来想过的生活的样子。",
      },
      subject: "Week 6 Progress",
      meta:
        "Your code is in good shape, but continuous practice in programming will help you gain an even better understanding of implementing algorithms.",
      lines: ["Every day is tiring but fulfilling.", "Please coordinate with your group members who've made progress in this study."],
    },
    {
      type: "email",
      date: "2023.11.20",
      note: {
        en:
          "Even tiny questions were recorded. And even the tiniest questions were answered by Dr. Ren Zhao, one by one.",
        zh:
          "哪怕是很小很小的问题也都记录下来了；可是哪怕再小的问题，忍老师也回复了每一条。",
      },
      subject: "Week 9 Progress",
      meta:
        "Inspired by the learning record you advised on GitHub, I understood that the primary distinction between this method and the previous one lies in their treatments of boundary conditions.",
      lines: ["Record the error, runtime, and # of iterations to make comparison, then make analysis based on your data.", "Output your data to analyze the cause.", "Yes."],
    },
    {
      type: "email",
      date: "2023.11.21",
      note: {
        en:
          "I was still wondering whether all those questions could really be solved. The next day I went to East China Normal University, met excellent seniors, learned a tiny tuning trick, and came back able to compute three boundary conditions for the Poisson equation.",
        zh:
          "当时看到有机会解决所有疑问还有点疑惑，结果第二天就去了华东师范。认识了非常优秀的学长，也学到了一点点调参小 trick，回来也顺利算出了 3 种边界条件的 Poisson equation。",
      },
      subject: "Shanghai",
      meta:
        "Dear Yifei and Qimu, Please come to my office at 12:30 pm on Wednesday. Bring your laptop and all codes you have.",
      lines: ["You will have an opportunity to resolve all the questions and concerns in this seminar."],
    },
  ],
  storyAfter: [
    {
      en:
        "Looking back now, these were very small problems. But at that time, I was balancing coursework while thinking about bugs that took forever to fix. Every tiny breakthrough, every moment of suddenly understanding something, gave me a strong rush of dopamine. Today AI tools are everywhere, and it is harder to run into that old kind of helplessness. Still, I feel deeply lucky that I once had the chance to understand code with such clumsy effort, to try different solutions, and to make all kinds of mistakes. That seemingly inefficient progress quietly trained the way I think, my patience, and my foundation for facing harder code and more complicated problems later.",
      zh:
        "虽然现在看来只是很小的问题，但是那时候一边兼顾课内学习，一边想着 bug 却要解决很久。哪怕只是非常小的攻克、想通，或者灵感乍现，都能有很强的多巴胺刺激。虽然现在各种 AI 工具层出不穷，很难再碰到当年那样的情况，但我仍然觉得自己非常幸运，能有那样竭尽全力地去理解代码、尝试不同方案、犯各种各样错误的时刻。那种看似笨拙的进步，默默训练了我想问题的方式、我的耐心，也打下了后来面对更复杂代码和更难问题的基础。",
    },
    {
      en:
        "So even though I could not realize many of my ideas then, and even though I received many little 'S' awards, I am sincerely grateful for that first small step. When Dr. Ren Zhao shared the article on 2025.11.22, I felt I understood it with my whole body: in an age accelerated by algorithms, keeping a little clumsy effort and a little inefficient thinking may be our last stubbornness as humans, and perhaps the only narrow gate toward real wisdom.",
      zh:
        "因此，虽然那个时候不能实现自己的很多想法，也拿了很多的“S”奖，我却深刻感恩当时迈出的那一小步。所以在看到 2025.11.22 忍老师分享的文章时，我有着切身体会的赞同：在这个被算法加速的时代，保持一点“笨拙”的努力，保留一点“低效”的思考，或许是我们身为人类最后的倔强，也是通往真正智慧的唯一窄门。",
    },
  ],
  outcome: {
    title: { en: "2023 ANN Outcome", zh: "2023 ANN 成果" },
    description: {
      en:
        "The outcome of this first stage is a set of seminar notes, reports, and Python code. It records the earliest move from reading and listening toward implementing and explaining.",
      zh:
        "这个阶段的成果包括 seminar notes、report 和 Python code。它记录的是最早从阅读、听懂，慢慢走向实现和讲清楚的过程。",
    },
    links: [],
    note: {
      en:
        "The archive keeps the reports, notes, and code together because the visible result matters less than the learning path behind it.",
      zh:
        "这里把 report、notes 和 code 放在一起，因为真正重要的不只是结果，而是它背后那条从 0 到 1 的学习路径。",
    },
  },
  outcomeShowcase: {
    presentationTitle: { en: "Taicang Competition Day", zh: "去太仓观赛" },
    documents: [
      {
        label: { en: "Seminar Notes and Reports", zh: "Seminar Notes and Reports" },
        kind: { en: "Reports & Notes", zh: "报告与笔记" },
        href: "https://github.com/QimuLuo-hub/2023-ANN/tree/main/Report%26Notes",
      },
      {
        label: { en: "Python Code", zh: "Python Code" },
        kind: { en: "Code", zh: "代码" },
        href: "https://github.com/QimuLuo-hub/2023-ANN/tree/main/Python%20codes",
      },
    ],
    presentation: [],
  },
});

Object.assign(window.ARCHIVE.projects["2024surf"], {
  subtitle: "",
  headingLabel: "",
  cardTitle: "Deep Learning Method for Plasma Simulation",
  timeline: {
    en:
      "This is the preface to the story of my first paper: a long period of being alone with code, and a process that trained my patience more than almost anything else.",
    zh:
      "这是第一篇 paper 的故事的前言。",
  },
  storyTitle: { en: "A Long Summer Based in Suzhou.", zh: "A Long Summer Based in Suzhou." },
  story: [
    {
      en:
        "The summer of 2024 felt very long to me. When I think back, it still comes with the damp smell of MB after heavy rain, the sound of air conditioning, and the sound of the keyboard. I spent almost every day with code, and almost every day I found new problems and overturned what I had done the day before. Sometimes it was lonely, but I was also lucky: whenever I got stuck, two teachers were there to discuss with me. Whether it was Base Qingdao vs. Base Suzhou, Base Changsha vs. Base Suzhou, Base Shanghai vs. Base Suzhou, Base Singapore vs. Base Suzhou, or Base Melbourne vs. Base Suzhou, the online and offline collaboration with Dr. Ren Zhao never stopped.",
      zh:
        "2024 的夏天对我而言是漫长的。每次回想起，甚至伴随着一种下过大雨之后 MB 的潮湿气味，空调的噪声和键盘的声音。那时候每天都要和代码相处，又几乎每一天都在发现新的问题，都在推翻昨天的做法。有时候是孤独的，可是又是幸运的，遇到问题，有两位老师帮我、与我讨论。无论后来是 Base Qingdao vs. Base Suzhou, Base Changsha vs. Base Suzhou, Base Shanghai vs. Base Suzhou, Base Singapore vs. Base Suzhou, Base Melbourne vs. Base Suzhou，都没有停止过线上和线下与忍老师的 collaboration。",
    },
  ],
  storyEvidence: [
    {
      type: "email",
      date: "2024.04.07",
      note: {
        en:
          "Before SURF officially started, I had already begun practicing basic finite element code.",
        zh: "忍老师建议我从最基本的FDM和FEM代码开练习，对传统方法先有一个大概的感知。",
      },
      subject: "FEM Code Practice",
      meta:
        "The attachment is the max absolute error table for the five-point difference method. Could you please provide a more detailed description of it?",
      lines: ["Triangular element: P1 element (vertices only).", "Dirichlet Boundary condition.", "Poisson Equation with smooth exact solution.", "Compute L2 error and L-infinity error."],
    },
    {
      type: "email",
      date: "2024.04.18",
      note: {
        en:
          "After running into problems, I received papers recommended by Dr. Ren Zhao.",
        zh: "遇到问题之后，收到了忍老师推荐的文献。",
      },
      subject: "FEM Paper Share",
      meta:
        "The attachment is the code and records for the FEM method using the CST elements, which also includes some confusion.",
      lines: ["You may find the answer to your problems in the attachments."],
    },
    {
      type: "chat",
      date: "2024.06.25",
      note: {
        en:
          "After hand-reproducing Dr. Hailong Guo's code, I somehow became his online friend. He personally helped debug the loss function.",
        zh:
          "在手搓完郭老师的代码之后，就和郭老师成为了“网友”，郭老师总是亲自debug。",
      },
      messages: [
        { role: "Student", text: "看过了老师，我搭的 loss 就是总体的损失函数" },
        { role: "Hailong", text: "这个损失函数是不会趋于 0 的" },
        { role: "Hailong", text: "只会趋于固定的一个数" },
        { role: "Student", text: "所以就停留在 -2000 多了，看见论文是在 -6000 多" },
        { role: "Hailong", text: "你把你代码给我看看" },
      ],
    },
    {
      type: "chat",
      date: "2024.08.22",
      note: {
        en:
          "Base Melbourne vs. Base Suzhou: the poster was revised across countries and time zones.",
        zh: "2024.08.23 到 08.24，Base Melbourne vs. Base Suzhou，跨国改海报。",
      },
      messages: [
        { role: "Supervisor", text: "进腾讯会议" },
        { role: "Student", text: "好" },
        { role: "Supervisor", text: "把 loss function 的加号移到换行的开头" },
        { role: "Student", text: "好" },
      ],
    },
    {
      type: "chat",
      date: "2024.08.23",
      note: {
        en:
          "We kept revising almost until the last moment before departure.",
        zh: "几乎改到出发前最后一刻。",
      },
      messages: [
        { role: "Supervisor", text: "行李收拾好了吗" },
        { role: "Student", text: "差不多了，幸好我妈来的早，和 poster 几乎平行😂" },
        { role: "Supervisor", text: "能带几个箱子？" },
        { role: "Student", text: "准备带两个" },
        { role: "Supervisor", text: "断舍离，多带钱💰" },
        { role: "Supervisor", text: "好的，祝你一切顺利" },
        { role: "Student", text: "从现在开始有要出发的实感" },
      ],
    },
    {
      type: "chat",
      date: "2024.10.03",
      note: {
        en:
          "After becoming School Winner, we moved into another round of cross-border slide revision. A very efficient use of time zones.",
        zh:
          "后来非常幸运地成为 School Winner，于是开始跨国改 presentation slides，最会利用时差的一集👍",
      },
      messages: [
        { role: "Supervisor", text: "时差六个小时？" },
        { role: "Supervisor", text: "你起的挺早啊" },
        { role: "Student", text: "特地调的闹钟，这不是有 deadline push 吗😂" },
        { role: "Student", text: "动图调快了，忍老师再看看这个速度行不行呢" },
        { role: "Supervisor", text: "行了，定稿，现在自适应的过程动起来了" },
        { role: "Student", text: "好，果然生命在于运动" },
      ],
    },
    {
      type: "chat",
      date: "2024.10.04",
      note: {
        en:
          "While preparing for my first block exam, I was also finishing the slides. It was painful but beautiful, because the joy of being seen outweighed the pain.",
        zh:
          "一边准备第一个 block 的期末考试，一边做 slides，终于提交。以前是紧张给别人分享，后来会很珍惜每一次分享的机会，感觉做了那么久的小小成果被倾听、被人看到，是一件很幸福的事情。",
      },
      messages: [
        { role: "Supervisor", text: "小小 surf，终于拿下" },
        { role: "Student", text: "可以安心睡个觉了" },
        { role: "Supervisor", text: "辛苦了" },
        { role: "Student", text: "痛并快乐着，忍老师也辛苦啦！改了那么久的 slides 特别感动的" },
        { role: "Supervisor", text: "希望成就感和收获的喜悦能大于这个痛苦吧" },
        { role: "Supervisor", text: "好运藏在努力里" },
      ],
    },
  ],
  storyAfter: [
    {
      en:
        "Although this small SURF was finally completed, the story of this topic did not end there. The collaboration continued and gradually evolved into a paper. What is interesting is that neither Dr. Ren Zhao nor I began with the intention of writing a paper. We simply tried to take each step in front of us seriously, and then thought about the next step only after that. Based on one topic, we kept making it deeper and better.",
      zh:
        "虽然拿下了小小的 SURF，但是和这个主题的故事仍然没有结束。这份合作一直持续，也逐渐演化成了一篇 paper。有趣的是，不管是我还是忍老师，都没有抱着一开始就要写论文的打算，我们只是把眼下的每一步走好，再去考虑下一步的事。基于一个主题，把它做深，做好。",
    },
  ],
  storyBridge: {
    text: {
      en: "This SURF story later grew into the EAJAM publication.",
      zh: "这个 SURF 的故事后来继续书写，成了后来 publication 的前言。",
    },
    projectId: "2025eajam",
  },
  outcome: {
    title: { en: "2024 SURF Outcome", zh: "2024 SURF 成果" },
    description: {
      en:
        "The outcome includes the report, poster, code, and slides for the plasma simulation project.",
      zh:
        "这个成果部分包括 plasma simulation project 的 report、poster、code 和 slides。",
    },
    links: [],
    note: {
      en:
        "The documents collect the report, adaptive poster, source code, and slide materials for the SURF presentation.",
      zh:
        "Documents 里整理了 report、adaptive poster、source code 和 SURF presentation 的 slides 材料。",
    },
  },
  outcomeShowcase: {
    documents: [
      { label: "Report", kind: "Final Report", href: "https://github.com/QimuLuo-hub/DL-for-Plasma-Simulation/blob/main/Report.pdf" },
      { label: "Poster", kind: "SURF-2024-0016 Poster", href: "https://github.com/QimuLuo-hub/DL-for-Plasma-Simulation/blob/main/Poster-Adaptive.pdf" },
      { label: "Code", kind: "Python Code", href: "https://github.com/QimuLuo-hub/DL-for-Plasma-Simulation/tree/main/code" },
      { label: "Slides", kind: "Presentation Slides", href: "https://github.com/QimuLuo-hub/DL-for-Plasma-Simulation/blob/main/Report.pdf" },
    ],
    presentation: [
      {
        label: { en: "Neural Network on the Presentation", zh: "Presentation 上的神经网络" },
        caption: {
          en: "A neural-network animation made in collaboration with Jiayi Lin.",
          zh: "和 Jiayi Lin 合作的神经网络动图！",
        },
        image: "materials/1-Research/2024SURF/2-Outcome/Presentation-2024-10-10/1-presentation_NN.JPG",
      },
      {
        label: { en: "Final Acknowledgements", zh: "Presentation 上的最后致谢" },
        caption: {
          en: "A very international cross-border acknowledgement.",
          zh: "非常 international 的跨国致谢。",
        },
        image: "materials/1-Research/2024SURF/2-Outcome/Presentation-2024-10-10/2-acknowledgment.JPG",
      },
      {
        label: { en: "Professional Shrimp Peeling", zh: "剥虾" },
        caption: {
          en: "Dr. Ren Zhao, professional shrimp peeler.",
          zh: "忍老师，专业剥虾人。",
        },
        image: "materials/1-Research/2024SURF/2-Outcome/Presentation-2024-10-10/3-剥🦐.JPG",
      },
    ],
  },
});

Object.assign(window.ARCHIVE.projects["2025surf"], {
  subtitle: {
    en: "A second SURF project that evolves from 2025 Citi and ends up with 2026 IBEC.",
    zh: "第二个 SURF 是 2025 Citi 的延伸。",
  },
  headingLabel: "2025.6-8",
  storyTitle: { en: "A Lucky Summer of Being Accompanied.", zh: "一个幸运的被陪伴着的夏天" },
  story: [
    {
      en:
        "2025 SURF was a continuation of 2025 Citi, but by coincidence it also produced something new. From this project onward, I got to know new friends: Ruixi Xu and Zihan Liang, two reliable collaborators I could keep working with.",
      zh:
        "2025 SURF 是 2025 Citi 的延续，但是这个 project 也因为机缘巧合做出了新的东西。也是从这个项目开始，进一步认识了新的合作者 Ruixi Xu and Zihan Liang。",
    },
  ],
  storyEvidence: [
    {
      type: "email",
      date: "2025.03.15",
      note: {
        en:
          "The earliest confidential file of the original FX Model.",
        zh: "最原始的“FX Model”的“机密文件”。",
      },
      subject: "Summary for SURF",
      meta:
        "I’ve organized the core idea of our FX model using the code we submitted, my previous records from the CitiCup Model file, and the back-end technical documentation.",
      lines: ["Good work. I will also share it within the SURF team.", "Looking forward to seeing the progress and updates."],
    },
    {
      type: "email",
      date: "2025.06.08",
      note: {
        en:
          "On June 9, I introduced the basic principles based on the CitiCup project to the team.",
        zh: "于是在 6.9 就给大家讲了我的代码的基本原理。",
      },
      subject: "SURF Slides",
      meta:
        "The first draft of the slides is in the attachment, in which I emphasize the data preparation and the model for the single pair.",
      lines: ["Thank you very much — a job well done.", "For the heat map section, consider providing a bit more explanation."],
    },
    {
      type: "chat",
      date: "2025.08.04",
      note: {
        en:
          "The second stage of SURF started from my application. As always, Dr. Ren Zhao recommended a new feature of the little secretary and even wrote the prompts.",
        zh:
          "第二个阶段的 SURF 起源于我的申请。一如既往好的忍老师给我推荐小秘书的新功能，甚至写好了 prompts。",
      },
      messages: [
        { role: "Supervisor", text: "Agent mode" },
        { role: "Supervisor", text: "I will graduate with bachelor's degree in Finance and Economics. I am applying for research master/phd program with scholarship..." },
        { role: "Supervisor", text: "Duration: 02:57" },
      ],
    },
    {
      type: "chat",
      date: "2025.08.04",
      note: {
        en:
          "He also recommended potential supervisors. The care was practical, specific, and honestly a little unbelievable.",
        zh:
          "并且给我 推荐 potential supervisors🥺",
      },
      messages: [
        { role: "Supervisor", text: "https://www.sydney.edu.au/scholarships/...research-scholarship-in-mathematics-and-statistics.html" },
        { role: "Supervisor", text: "Zhou Zhou" },
        { role: "Supervisor", text: "Tiangang Cui" },
        { role: "Student", text: "Duration: 03:40" },
      ],
    },
    {
      type: "chat",
      date: "2025.08.05",
      note: {
        en:
          "The night before, after talking, I realized that without publications it would be difficult no matter where I applied. I went back anxious and fell asleep. Dr. Ren Zhao, however, almost did not sleep. He not only raised the problem, but also brought a solution the next day.",
        zh:
          "前一天聊完之后，我发现无论去哪里没有 publications 都很难办，听完回去焦虑地睡着了💤😂，但是那天回去之后忍老师几乎一夜未眠，正所谓 “不能只提出问题，还要提出解决问题的方式”。第二天一早就来和我们讨论。",
      },
      messages: [
        { role: "Supervisor", text: "等 xuruixi 来了，你们一起来 334" },
        { role: "Student", text: "好的" },
        { role: "Student", text: "忍老师，我们来啦" },
        { role: "Supervisor", text: "等几分钟" },
        { role: "Student", text: "好嘞，不着急" },
        { role: "Supervisor", text: "International Business and Economy Conference (IBEC)..." },
      ],
    },
    {
      type: "chat",
      date: "2025.08.05",
      note: {
        en:
          "This became the first major event of the 2025 Moving Qimu Awards. I genuinely cannot find a second person in the world who would worry about me to this extent.",
        zh:
          "此次获评“2025感动积木第一大事件”。这个世界上找不出第二个人能做到这种程度🙌",
      },
      messages: [
        { role: "Student", text: "妈妈，忍老师一晚上没睡" },
        { role: "Mom", text: "啊" },
        { role: "Student", text: "帮我找会议，要发文章发快的" },
        { role: "Mom", text: "天呐，就是论文发表的吗" },
        { role: "Student", text: "对" },
        { role: "Mom", text: "比爹还操心" },
      ],
    },
  ],
  storyAfter: [
    {
      en:
        "Like 2024 SURF, this project did not begin with the goal of publishing a paper, but somehow there was always a promising next step. So even when I was anxious, I still had to move on; some roads only appear after you start walking. The summer of 2025 was still based in Suzhou, but it was not as lonely as the summer of 2024. At that time I did not have many visible results yet, and the pressure of applications, exams, and paper revisions followed me everywhere. But because of the accumulation from before, and because I was accompanied by my teacher and friends, we passed one checkpoint after another.",
      zh:
        "和 2024 的 SURF 一样，这个项目也不是抱着要发表论文的心态开始的，却总是有 promising 的下一步。看来，虽然焦虑，但仍然要一直 move on，有些路走着走着就有了。2025 的夏天依然 base Suzhou，却没有 2024 的夏天那么孤独。虽然那个时候没有什么成果，申请、考试的压力也如影随形，但是有了之前的积累，在老师和朋友们的陪伴下，过了一关又一关。",
    },
    {
      en:
        "While I was busy with IELTS, applications, and manuscript revision, Dr. Ren Zhao and my peers helped me plant seed after seed. Dr. Ren Zhao was still extremely busy that summer, but later he came almost every day to look at the code, correct the results, discuss in lunch meetings, and then come back at night because he was still worried. He even debugged personally and helped with the poster. Things I once thought impossible became real in a very special period. What was precious was that even under that pressure, we kept passing around positive energy. Sometimes there was no time to digest the emotions, but there was never a shortage of funny moments. To still have the ability to feel happy may be one of the greatest fortunes in life.",
      zh:
        "在我忙着雅思、申请和论文修改的时候，忍老师和我的 peers 一起帮我埋下了一颗颗种子。2025 夏天的忍老师依旧很忙，后来几乎每天都来看代码，每天矫正结果，lunch meeting 讨论完之后晚上都不放心要再来看一眼，甚至亲自 debug，后面甚至还帮我做 poster。这些我觉得之前原来不可能的事情，在非常时期，也都变成了现实。可贵的是，即使在这样的情况下，我们之间的能量流动总是积极正向的。虽然有的时候忙到没有时间消化情绪和压力，但是每天都不缺有趣的事。总有幸福的能力，大概是人生的第一大幸事。",
    },
  ],
  outcome: {
    title: { en: "2025 SURF Outcome", zh: "2025 SURF 成果" },
    description: {
      en:
        "The documents for this stage keep the FX model poster and code together.",
      zh:
        "这个阶段的 documents 主要整理 FX model 的 poster 和 code。",
    },
    links: [],
    note: {
      en:
        "The outcome currently includes the poster and code repository for the FX Risk Signal Detection project.",
      zh:
        "目前 outcome 包括 FX Risk Signal Detection project 的 poster 和 code repository。",
    },
  },
  outcomeShowcase: {
    documents: [
      { label: "Poster", kind: "SURF-2025-0188 Poster", href: "https://github.com/QimuLuo-hub/FX-Risk-Signal-Detection/blob/main/Poster_FX.pdf" },
      { label: "Code", kind: "Python Code", href: "https://github.com/QimuLuo-hub/FX-Risk-Signal-Detection/tree/main/code" },
    ],
    presentation: [],
  },
});

Object.assign(window.ARCHIVE.collaborators["yifei-xu"], {
  page: "collaborators/yifei-xu.html",
  aliases: ["Yifei Xu"],
  title: "Yifei Xu",
  letter: [
    {
      en:
        "Yifei Xu appears in the early ANN training story and the 2024 Citi project. In the archive, her name marks those first moments when programming stopped being an individual panic and became something that could be discussed with a peer.",
      zh:
        "Yifei Xu 出现在早期 ANN training 和 2024 Citi 的故事里。她的名字对我来说，代表着那些 programming 不再只是一个人的慌张，而是可以和 peer 一起讨论的最早时刻。",
    },
  ],
});

Object.assign(window.ARCHIVE.collaborators["jiayi-lin"], {
  page: "collaborators/jiayi-lin.html",
  aliases: ["Jiayi Lin"],
  title: "Jiayi Lin",
  letter: [
    {
      en:
        "Jiayi Lin connects the ANN beginning, the Citi projects, and the 2024 SURF presentation memory. She is part of the archive's teamwork thread: the small, practical kind of support that makes a project less lonely.",
      zh:
        "Jiayi Lin 连接着 ANN 的 beginning、Citi projects，还有 2024 SURF presentation 的记忆。她属于这个 archive 里 teamwork 的那条线：那些具体、实际、让 project 不那么孤独的支持。",
    },
  ],
});

Object.assign(window.ARCHIVE.collaborators["zihan-liang"], {
  page: "collaborators/zihan-liang.html",
  aliases: ["Zihan Liang", "Zihan", "zihan"],
  title: "Zihan Liang",
  letter: [
    {
      en:
        "Zihan Liang became one of the reliable collaborators in the 2025-2026 FX research arc, especially after the 2025 SURF work began moving toward IBEC.",
      zh:
        "Zihan Liang 是 2025-2026 FX research 这条线里非常靠谱的合作者之一，尤其是在 2025 SURF 逐渐走向 IBEC 之后。",
    },
  ],
});

Object.assign(window.ARCHIVE.collaborators["ruixi-xu"], {
  page: "collaborators/ruixi-xu.html",
  aliases: ["Ruixi Xu", "Ruixi", "ruixi", "xuruixi"],
  title: "Ruixi Xu",
  letter: [
    {
      en:
        "Ruixi Xu joined the later FX and conference-facing stage of the archive, helping turn the summer's planted seeds into something that could continue growing.",
      zh:
        "Ruixi Xu 加入的是后期 FX 和 conference-facing 的阶段，帮着把那个夏天埋下的一颗颗种子继续往后推进。",
    },
  ],
});

Object.assign(window.ARCHIVE.collaborators["zhuoqi-hou"], {
  page: "collaborators/zhuoqi-hou.html",
  aliases: ["Zhuoqi Hou", "Zhuoqi", "zhuoqi"],
  title: "Zhuoqi Hou",
  letter: [
    {
      en:
        "Zhuoqi Hou is connected to 2025 SURF and 2026 IBEC, sharing the part of the story where the FX project moved from summer research toward public presentation.",
      zh:
        "Zhuoqi Hou 连接的是 2025 SURF 和 2026 IBEC 这一段，也就是 FX project 从 summer research 走向 public presentation 的过程。",
    },
  ],
});

window.ARCHIVE.collaborators["hailong-guo"] = {
  id: "hailong-guo",
  code: "Hailong",
  name: "Dr. Hailong Guo",
  role: "Collaborator",
  avatar: "collaborator profile/hailong.jpeg",
  page: "collaborators/hailong-guo.html",
  aliases: ["Dr. Hailong Guo", "Hailong Guo", "Dr. Guo", "郭老师"],
  title: "Dr. Hailong Guo",
  summary: {
    en:
      "A collaborator in the plasma simulation and spectral method chapters, especially visible in the 2024 SURF debugging story.",
    zh:
      "Plasma simulation 和 spectral method 章节里的 collaborator，尤其出现在 2024 SURF 的 debug 故事里。",
  },
  letter: [
    {
      en:
        "Dr. Hailong Guo appears in the archive as the teacher who helped make the plasma simulation work concrete. In the 2024 SURF story, his debugging advice turned a confusing loss function into something I could finally understand and keep moving with.",
      zh:
        "Dr. Hailong Guo 在这个 archive 里，是把 plasma simulation 的工作变得更具体的人。2024 SURF 里，他的 debug 建议让一个困扰很久的 loss function 终于变成可以理解、可以继续推进的东西。",
    },
  ],
  links: ["2024surf", "2026spectral"],
};

const collaboratorsSection = window.ARCHIVE.sections.find((section) => section.id === "collaborators");
if (collaboratorsSection && !collaboratorsSection.collaborators.includes("hailong-guo")) {
  collaboratorsSection.collaborators.push("hailong-guo");
}

Object.assign(window.ARCHIVE.projects["2024surf"], {
  baseRoutes: [
    {
      id: "changsha-suzhou",
      label: "Changsha - Suzhou",
      teacher: { label: "Changsha", lat: 28.2282, lon: 112.9388 },
      qimu: { label: "Suzhou", lat: 31.2989, lon: 120.5853 },
      tooltip: "距离约 813 km，时差 0 h（2024.6）",
    },
    {
      id: "singapore-suzhou",
      label: "Singapore - Suzhou",
      teacher: { label: "Singapore", lat: 1.3521, lon: 103.8198 },
      qimu: { label: "Suzhou", lat: 31.2989, lon: 120.5853 },
      tooltip: "距离约 3768 km，时差 0 h（2024.7）",
    },
    {
      id: "melbourne-suzhou",
      label: "Melbourne - Suzhou",
      teacher: { label: "Melbourne", lat: -37.8136, lon: 144.9631 },
      qimu: { label: "Suzhou", lat: 31.2989, lon: 120.5853 },
      tooltip: "距离约 8091 km，时差 2 h（2024.8）",
    },
    {
      id: "suzhou-netherlands",
      label: "Suzhou - Netherlands",
      teacher: { label: "Suzhou", lat: 31.2989, lon: 120.5853 },
      qimu: { label: "Netherlands", lat: 52.3676, lon: 4.9041 },
      tooltip: "距离约 8820 km，时差 6 h（2024.10）",
    },
    {
      id: "suzhou-spain",
      label: "Suzhou - Spain",
      teacher: { label: "Suzhou", lat: 31.2989, lon: 120.5853 },
      qimu: { label: "Spain", lat: 40.4168, lon: -3.7038 },
      tooltip: "距离约 10197 km，时差 7 h（2024.12）",
    },
    {
      id: "suzhou-italy",
      label: "Suzhou - Italy",
      teacher: { label: "Suzhou", lat: 31.2989, lon: 120.5853 },
      qimu: { label: "Italy", lat: 41.9028, lon: 12.4964 },
      tooltip: "距离约 9052 km，时差 6 h（2025.4）",
    },
    {
      id: "suzhou-liverpool",
      label: "Suzhou - Liverpool",
      teacher: { label: "Suzhou", lat: 31.2989, lon: 120.5853 },
      qimu: { label: "Liverpool", lat: 53.4084, lon: -2.9916 },
      tooltip: "距离约 9142 km，时差 7 h（2025.4）",
    },
  ],
});

window.ARCHIVE.projects["2024surf"].story[0] = {
  en:
    "The summer of 2024 felt very long to me. When I think back, it still comes with the damp smell of MB after heavy rain, the sound of air conditioning, and the sound of the keyboard. I spent almost every day with code, and almost every day I found new problems and overturned what I had done the day before. Sometimes it was lonely, but I was also lucky: whenever I got stuck, two teachers were there to discuss with me. From Base Changsha vs. Base Suzhou, Base Singapore vs. Base Suzhou, Base Melbourne vs. Base Suzhou, Base Suzhou vs. Base Netherlands, Base Suzhou vs. Base Spain, Base Suzhou vs. Base Italy, to Base Suzhou vs. Base Liverpool, the online and offline collaboration with Dr. Ren Zhao never really stopped.",
  zh:
    "2024 的夏天对我而言是漫长的。每次回想起，甚至伴随着一种下过大雨之后 MB 的潮湿气味，空调的噪声和键盘的声音。那时候每天都要和代码相处，又几乎每一天都在发现新的问题，都在推翻昨天的做法。有时候很孤独，但也很幸运：每次卡住的时候，总有两位老师可以讨论。从 Base Changsha vs. Base Suzhou，Base Singapore vs. Base Suzhou，Base Melbourne vs. Base Suzhou，Base Suzhou vs. Base Netherlands，Base Suzhou vs. Base Spain，Base Suzhou vs. Base Italy，到 Base Suzhou vs. Base Liverpool，我和忍老师的线上线下合作几乎从未止步。",
};

function archiveEvidence(projectId, date, update) {
  const project = window.ARCHIVE.projects[projectId];
  const item = project?.storyEvidence?.find((entry) => entry.type === "email" && entry.date === date);
  if (!item) return;
  Object.assign(item, update);
  if (Object.prototype.hasOwnProperty.call(update, "body") && !Object.prototype.hasOwnProperty.call(update, "meta")) {
    item.meta = "";
  }
  delete item.lines;
  delete item.replies;
}

archiveEvidence("2023ann", "2023.08.15", {
  from: "Ren",
  body: [
    "Our very first seminar is scheduled for this Wednesday, August 16th, at 1 pm in my office.",
    "Ms. Qimu Luo will be leading our first discussion. She'll be covering the preliminaries and touching on some fundamental concepts.",
    "Welcome to the group, and get ready for an engaging exploration of Neural Networks!",
  ],
  branches: [],
});
archiveEvidence("2023ann", "2023.08.28", {
  from: "Ren",
  body: [
    "The second seminar is scheduled for this upcoming Wednesday, August 30th, at 9:30 am in my office.",
    "During this seminar, Ms. Qimu Luo will continue to share her valuable study notes.",
    "Please reply to confirm your attendance.",
  ],
  branches: [],
});
archiveEvidence("2023ann", "2023.09.11", {
  from: "Ren",
  body: [
    "The third seminar will be scheduled for this Wednesday 2pm at my office.",
    "Ms Qimu Luo will continue to share her study notes, and you are welcome to share your study notes as well.",
    "Please reply to confirm your attendance.",
  ],
  branches: [],
});
archiveEvidence("2023ann", "2023.09.12", { from: "Ren", body: ["Your study notes is well received. Please come to my office at 6:30pm today. We will discuss this responsibility of RA."], branches: [] });
archiveEvidence("2023ann", "2023.09.26", { from: "Ren", body: ["Congratulations on this award as you are well deserved.", "We shall discuss your progress and plan after tomorrow's seminar."], branches: [] });
archiveEvidence("2023ann", "2023.10.04", {
  from: "Ren",
  body: [
    "Each of you has been assigned to a group responsible for implementing an algorithm and preparing the corresponding report and presentation.",
    "Kindly upload your Python code to XJTLU Box using the provided link.",
    "Your dedication and hard work on this project are greatly appreciated.",
  ],
  branches: [],
});
archiveEvidence("2023ann", "2023.10.06", {
  from: "Qimu",
  body: [
    "This evening, we firstly read the thesis then we decided to practice the ideas we deduced on the whiteboard today with pytorch to examine if we can figure it out.",
    "Later, we'll upload tonight's progress to the box.",
  ],
  branches: [{ author: "Ren", text: "Keep up with your excellent work. Looking forward to your results." }],
});
archiveEvidence("2023ann", "2023.10.15", {
  from: "Qimu",
  body: [
    "I always feel that my ability seems to have no practical improvement, and I am not proficient in applying many basic syntaxes of Python at all.",
    "Therefore, is it feasible for the next step to continue to clarify the author's code or a more correct and effective path?",
  ],
  branches: [{ author: "Ren", text: "Your concern is acknowledged. Since this is your first Python implementation of an algorithm, it is undoubtedly a great challenge. Please collaborate with Yifei Xu, as she has been advised to begin with simple Python tasks." }],
});
archiveEvidence("2023ann", "2023.10.23", {
  from: "Qimu",
  body: ["Today, I attempted to enhance the code by first defining a 'ForwardEuler' function, similar to Yifei's approach.", "Could you provide more guidance on initial code implementation?"],
  branches: [{ author: "Ren", text: "Please come to my office at 9:00am tomorrow morning. We will discuss your concerns in programming." }],
});
archiveEvidence("2023ann", "2023.10.30", {
  from: "Qimu",
  body: ["During this week, my focus was still on implementing the Euler method.", "Every day is tiring but fulfilling."],
  branches: [{ author: "Ren", text: "Your code is in good shape, but continuous practice in programming will help you gain an even better understanding of implementing algorithms. Please coordinate with your group members who've made progress in this study." }],
});
archiveEvidence("2023ann", "2023.11.20", {
  from: "Qimu",
  body: ["Inspired by the learning record you advised on GitHub, I understood that the primary distinction between this method and the previous one lies in their treatments of boundary conditions.", "I have also encountered some confusions along the way."],
  branches: [{ author: "Ren", text: "Record the error, runtime, and # of iterations to make comparison, then make analysis based on your data. Output your data to analyze the cause. Yes. No." }],
});
archiveEvidence("2023ann", "2023.11.21", {
  from: "Ren",
  body: ["Dear Yifei and Qimu, Please come to my office at 12:30 pm on Wednesday. Bring your laptop and all codes you have.", "You will have an opportunity to resolve all the questions and concerns in this seminar."],
  branches: [],
});
archiveEvidence("2024surf", "2024.04.07", {
  from: "Qimu",
  body: ["The attachment is the max absolute error table for the five-point difference method.", "Could you please provide a more detailed description of the next code practice?"],
  branches: [{ author: "Ren", text: "Triangular element: P1 element. Dirichlet Boundary condition. Poisson Equation with smooth exact solution. Compute L2 error and L-infinity error." }],
});
archiveEvidence("2024surf", "2024.04.18", {
  from: "Qimu",
  body: ["The attachment is the code and records for the FEM method using the CST elements, which also includes some confusion."],
  branches: [{ author: "Ren", text: "You may find the answer to your problems in the attachments." }],
});
archiveEvidence("2025surf", "2025.03.15", {
  from: "Qimu",
  body: ["I’ve organized the core idea of our FX model using the code we submitted, my previous records from the CitiCup Model file, and the back-end technical documentation.", "I have also invited you to join the Overleaf projects in case of any adjustments or modifications."],
  branches: [{ author: "Ren", text: "Good work. I will also share it within the SURF team. Looking forward to seeing the progress and updates." }],
});
archiveEvidence("2025surf", "2025.06.08", {
  from: "Qimu",
  body: ["The first draft of the slides is in the attachment, in which I emphasize the data preparation and the model for the single pair."],
  branches: [{ author: "Ren", text: "Thank you very much — a job well done. For the heat map section, consider providing a bit more explanation." }],
});

Object.assign(window.ARCHIVE.projects["2026ibec"], {
  subtitle: { en: "The outcome of 2025 SURF.", zh: "2025SURF 的成果" },
  timeline: {
    en: "My first time attending a conference in IBSS.",
    zh: "第一次在IBSS 参会。",
  },
  storyTitle: { en: "The First Presentation Of 2026.", zh: "2026 的开年 presentation" },
  story: [
    {
      en:
        "This story is the continuation of 2025 SURF. After finishing the code under an extremely tight schedule, we used three more days to complete the conference paper.",
      zh:
        "这个故事是 2025 SURF 的延续，在以非常极限的时间完成代码之后，又用三天的时间完成了这篇会议论文。",
    },
  ],
  storyEvidence: [
    {
      type: "chat",
      date: "2025.08.30",
      note: {
        en: "The first all-nighter in MB124 across four years. The three of us went to S Building to watch the sunrise 🌄.",
        zh: "这是四年里面第一次在 MB124 通宵，当时我们仨还去 S 楼看日出🌄。",
      },
      messages: [
        { role: "Student", text: "我们去看日出吧" },
        { role: "Supervisor", text: "注意休息，论文也要收尾" },
        { role: "Student", text: "两个小朋友有一种异样的兴奋" },
      ],
    },
    {
      type: "email",
      date: "2025.08.30",
      note: {
        en: "Paper submitted.",
        zh: "提交！",
      },
      subject: "IBEC Paper Submission",
      from: "Qimu",
      body: ["The conference paper was submitted after a very compressed writing sprint."],
      branches: [],
    },
    {
      type: "email",
      date: "2025.10.07",
      note: {
        en: "The acceptance arrived just in time.",
        zh: "好在 accepted 来得很及时。",
      },
      subject: "IBEC Paper Acceptance",
      from: "IBEC",
      body: ["The paper was accepted for presentation at IBEC 2026."],
      branches: [],
    },
    {
      type: "chat",
      date: "2025.10.07",
      note: {
        en: "The accepted message turned the compressed summer into something visible.",
        zh: "accepted 的消息让那个极限夏天终于变成了看得见的成果。",
      },
      messages: [
        { role: "Supervisor", text: "accepted" },
        { role: "Student", text: "好在来得很及时！" },
      ],
    },
  ],
  storyAfter: [
    {
      en:
        "2025 was a year of accumulated effort finally breaking through. I was always doing many things at the limit, but the previous experience of managing multiple projects helped me finish them one by one and solve one problem after another. How lucky it was to share those full days, and also to taste the joy of success. It was just as Dr. Ren Zhao hoped in 2024: may the sense of achievement and harvest be greater than the small pain in the process :).",
      zh:
        "2025 年是一个厚积薄发的年份，虽然总在极限地同时做很多件事，但是也正是有了之前的 multi-project 管理经验，才能一件一件地把事情干好，把一个一个问题攻克。多幸运，能共享这些充实的时光，也能品味到成功的喜悦。也真如 2024 年忍老师所希望的那样，成就感和收获的喜悦能大于过程中的小小痛苦 :).",
    },
  ],
  outcome: {
    title: { en: "IBEC Outcome", zh: "IBEC 成果" },
    description: {
      en: "The outcome keeps the conference paper and slides together with a small visual record of the presentation day.",
      zh: "这里保存 conference paper、slides，以及 presentation 当天的一组小小影像记录。",
    },
    links: [],
    note: {
      en: "The documents follow the outcome folder: paper and slides.",
      zh: "Documents 按 outcome folder 整理：paper 和 slides。",
    },
  },
  outcomeShowcase: {
    documents: [
      { label: "Paper", kind: "SSRN Paper", href: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5418894" },
      { label: "Slides", kind: "Slides Repository", href: "https://github.com/QimuLuo-hub/2026-IBEC" },
    ],
    presentation: [
      {
        label: "Sunrise",
        caption: "2025.8.30 日出 - 只记得两个小朋友有一种异样的兴奋。",
        image: "materials/3-Conference/2026IBEC/2-Outcome/presentation/sunrise.jpeg",
      },
      {
        label: "Paper Reading",
        caption: "逐字阅读的 paper *3。",
        image: "materials/3-Conference/2026IBEC/2-Outcome/presentation/paper.jpeg",
      },
      {
        label: "Presentation Snapshot",
        caption: "presentation 抓拍（摄影师：yifei）。",
        image: "materials/3-Conference/2026IBEC/2-Outcome/presentation/me.png",
      },
      {
        label: "Tea Break",
        caption: "os：茶歇不如数理学院（？",
        image: "materials/3-Conference/2026IBEC/2-Outcome/presentation/ren.JPG",
      },
      {
        label: "Zihan Signing In",
        caption: "zihan 签到抓拍。",
        image: "materials/3-Conference/2026IBEC/2-Outcome/presentation/zihan.JPG",
      },
    ],
  },
});

Object.assign(window.ARCHIVE.projects["2026spectral"], {
  subtitle: "",
  timeline: {
    en: "All the stories finally had faces.",
    zh: "所有的故事都有了脸。",
  },
  storyTitle: {
    en: "My First Mathematics Conference.",
    zh: "第一次参加数学的会议",
  },
  story: [
    {
      en:
        "A large-scale social scene where all the previous stories finally had faces: the offline meeting with Dr. Hailong Guo, the people connected to Changsha, Singapore, and Melbourne that I did not get to visit in 2024, and the legendary advisor's advisor, Prof. Zhang.",
      zh:
        "一场大型的 social 现场，之前的所有的故事都有了脸。和郭老师的网友见面会，还有当时 2024 没有去成的长沙、新加坡和墨尔本的相关人物，以及传说中的导之导张老师。",
    },
  ],
  storyEvidence: [],
  storyAfter: [],
  storyVisuals: [
    {
      image: "materials/3-Conference/2026Spectral/2-Meeting_Picture/大合照.JPG",
      caption: "导师像泰勒级数一样展开了。",
    },
  ],
  outcome: null,
  hideOutcome: true,
});

Object.assign(window.ARCHIVE.projects["2025eajam"], {
  story: [
    {
      en:
        "The story related to this paper is especially long. It almost runs through my whole undergraduate life, and it also shaped where I would go next. It began with reproducing Dr. Hailong Guo's paper in 2024 SURF, then moved into the gradient-type adaptive indicator and the energy-based indicator. This part of the story was also woven together with my exchange year.",
      zh:
        "和这篇论文相关的故事格外的长，几乎贯穿半个大学生活，也进一步影响着我下一步的目的地。故事开始于 2024 的SURF，后来 gradient type 的 adaptive indicator 变成了 energy-based，这部分的故事也和我交换🇳🇱的故事交织在一起。",
    },
  ],
  storyEvidence: [
    {
      type: "chat",
      date: "2024.08.06",
      note: {
        en: "Dr. Ren Zhao invited me to attend the seminar on Quantum Algorithms for Solving Partial Differential Equations.",
        zh: "当时忍老师邀请我去听 Quantum Algorithms for Solving Partial Differential Equations 的 seminar。那时候我在想，到底什么时候也能变那么厉害呢？",
      },
      messages: [
        { role: "Supervisor", text: "那个女生是剑桥的大二，相当于你们大三" },
        { role: "Student", text: "那更厉害了 怪不得现在就学了那么多😺 还得出来看世界呐🥺" },
        { role: "Supervisor", text: "她暑假到上交交换上 summer school" },
        { role: "Supervisor", text: "就像你们去 Cambridge 有 summer program" },
        { role: "Supervisor", text: "你明年也和她一样厉害了" },
        { role: "Student", text: "好哦，忍老师一如既往对自己的学生🈶💯分的信心🫡" },
      ],
    },
    {
      type: "email",
      date: "2024.08.27",
      note: {
        en: "The first paper idea: Dr. Ren Zhao shared references with me and expected us to discuss after I read them.",
        zh: "最初的论文 idea，推荐给我文章，期待我看了之后讨论。",
      },
      subject: "Reference Sharing",
      from: "Ren",
      body: [
        "Dear Qimu,",
        "These are excellent references. Please take the time to review them, and then let's discuss your thoughts on our next steps. We need to develop something innovative for a high-quality journal article.",
        "An Overview on Machine Learning Methods for Partial Differential Equations: from Physics Informed Neural Networks to Deep Operator Learning",
        "Practical Aspects on Solving Differential Equations Using Deep Learning: A Primer",
      ],
      branches: [],
    },
    {
      type: "chat",
      date: "2024.10.24",
      note: {
        en: "Later I started my first block and continued computing the 3D popcorn interface. The figure was never clear enough, so Dr. Ren Zhao helped me look for computing resources at HIT.",
        zh: "后面我在第一个 block接着算 3d popcorn 界面的问题，图片总是画不清晰，于是忍老师帮我去哈工大找算力。",
      },
      messages: [
        { role: "Student", text: "忍老师，试了几种方法画解的 contour plot，看起来界面还是稍微崎岖，但是电脑已力竭😭" },
        { role: "Supervisor", text: "先这样，我去哈工大找找算力" },
        { role: "Student", text: "谢谢忍老师！！" },
      ],
    },
    {
      type: "chat",
      date: "2024.11.25",
      note: {
        en: "For the popcorn case, we kept computing and trying different methods.",
        zh: "针对 popcorn 一直算，尝试不同的方法。",
      },
      messages: [
        { role: "Student", text: "忍老师，这个是我的电脑的结果，尝试的过程发现训练点的数量足够大的时候 random 的 error 比较小，优势不明显，所以暂时没用显卡跑了" },
        { role: "Student", text: "[image: popcorn result]" },
        { role: "Student", text: "[file: pop_11.24.xlsx]" },
        { role: "Supervisor", text: "好" },
        { role: "Supervisor", text: "我想一下" },
        { role: "Student", text: "好，这个时差竟然能衔接起来，unbelievable 😂" },
      ],
    },
    {
      type: "chat",
      date: "2024.12.22",
      note: {
        en: "Base Spain. I brought my laptop with me, but received the happy news that this trip could be pure fun.",
        zh: "Base Spain，带着💻出门但是收到了“纯玩”的好消息哈哈。",
      },
      messages: [
        { role: "Student", text: "忍老师，ellipsoidal 的例子需要重新算嘛😳，不然是不是和 popcorn 的点相差的太悬殊了" },
        { role: "Supervisor", text: "先休息一下" },
        { role: "Student", text: "好、还想着劳逸结合呢😺" },
        { role: "Supervisor", text: "纯玩" },
        { role: "Supervisor", text: "安心遛狗" },
      ],
    },
    {
      type: "chat",
      date: "2024.12.24",
      note: {
        en: "After IELTS, my writing sub-score was still not enough. Dr. Ren Zhao said he had always had confidence in me.",
        zh: "告诉忍老师新考完的雅思，写作小分没够，但是忍老师说，我对你向来有信心。55🥺",
      },
      messages: [
        { role: "Student", text: "是，抽的比平时做的难，但是都是 excuse，本质还是不稳定，菜就多练😭\n[quote Ren: listening 是不是还能更好一点]" },
        { role: "Supervisor", text: "嗯 有绝对实力的话就不会觉得是抽的难了" },
        { role: "Student", text: "好 好好练练✊\n[quote Ren: 这半年多写一点东西，少用 AI]" },
        { role: "Supervisor", text: "再过半年，应该会提升很明显的。" },
        { role: "Supervisor", text: "倒不用焦虑，" },
        { role: "Supervisor", text: "我对你向来有信心" },
        { role: "Supervisor", text: "你的大四会更精彩了" },
      ],
    },
    {
      type: "chat",
      date: "2025.02.02",
      note: {
        en: "During Spring Festival, I thought I would be lonely. But discussing Citi and the paper with Dr. Ren Zhao made time pass quickly, and he became the only person speaking Chinese with me during that period.",
        zh: "过年期间，本来以为自己会很孤独，但是当时和忍老师一起讨论花旗杯和论文也让时间过得很快，也成为了过年期间唯一与我讲中文的人🤣",
      },
      messages: [
        { role: "Student", text: "忍老师，那几篇论文里没有比较训练时间的，都是展示撒点算法和对应的点数和 error，进而针对网络结构，各个 level 的平均点数，以及 subdomain 的点数进行比较的，那我需要去掉嘛😳" },
        { role: "Supervisor", text: "去掉" },
        { role: "Student", text: "好" },
        { role: "Supervisor", text: "你这个春节比去年更充实了" },
        { role: "Student", text: "确实😂已经没有春节的概念了😭" },
        { role: "Student", text: "没有回家，不仅更充实还不会影响决策😺" },
        { role: "Supervisor", text: "😂" },
      ],
    },
    {
      type: "chat",
      date: "2025.04.02-04",
      note: {
        en: "Base Italy. I was preparing the revision and submission; after submission, Dr. Ren Zhao was curious about the espresso, so I quietly prepared illy coffee beans for him :).",
        zh: "Base Italy，终于提交了第一版的paper。提交之后和老师💬，老师好奇 espresso，所以当时立马给老师准备了☕️豆😌",
      },
      messages: [
        { role: "Supervisor", text: "在哪度假🏖️" },
        { role: "Student", text: "收到👉感恩忍老师❤️感觉到今天像做梦一样😭\n[quote Ren: CICP-OA-2025-0087_Proof_hi.pdf]" },
        { role: "Student", text: "在意大利😁\n[quote Ren: 在哪度假🏖️]" },
        { role: "Supervisor", text: "Work hard, play harder" },
        { role: "Student", text: "好😜太喜欢这个地方了，各种世界名画和雕塑大饱眼福😍" },
        { role: "Supervisor", text: "当心点扒手 多吃点🍕和☕" },
        { role: "Student", text: "好！防扒手设备已升级🤭\n[quote Ren: 当心点扒手 多吃点🍕和☕]" },
        { role: "Supervisor", text: "好奇正宗的 espresso 是不是一口一杯" },
        { role: "Student", text: "今天早上刚喝😂真的是" },
        { role: "Student", text: "苦到面部扭曲如拉奥孔" },
        { role: "Supervisor", text: "有的人是特别能吃苦的" },
        { role: "Student", text: "还想起来之前在山上无知地想点的那杯意式咖啡，幸好没点😂" },
        { role: "Student", text: "《咖啡哪有上班苦》😺" },
        { role: "Supervisor", text: "不喝咖啡哪有精神上班" },
      ],
    },
    {
      type: "chat",
      date: "2025.04.05-06",
      note: {
        en: "We resubmitted to EAJAM. After the submission, M2 briefly retired in Liverpool.",
        zh: "重新提交 EAJAM，（M2 在提交完之后就于 Liverpool 短暂退役）。",
      },
      messages: [
        { role: "Supervisor", text: "换个 journal" },
        { role: "Supervisor", text: "不急" },
        { role: "Student", text: "好" },
        { role: "Supervisor", text: "再看看 spam\n[quote Qimu: 忍老师，收到这封邮件啦👉，昨天被自动放进 spam 里了😭]" },
        { role: "Student", text: "[image: East Asian Journal on Applied Mathematics co-author account created in online submission system]" },
      ],
    },
    {
      type: "chat",
      date: "2025.06.14",
      note: {
        en: "Base Amsterdam: major revision arrived.",
        zh: "Base Groningen: major revision。",
      },
      messages: [
        { role: "Supervisor", text: "文章给了 major revision，等考完又有得忙了" },
        { role: "Student", text: "好的" },
      ],
    },
    {
      type: "chat",
      date: "2025.08",
      note: {
        en: "During SURF, we kept revising, trying different indicators, and eventually using M4.",
        zh: "SURF 期间一直修改，尝试改变不同的 indicator 以及用上了 M4。",
      },
      messages: [
        { role: "Supervisor", text: "你说 level 4 更大了" },
        { role: "Supervisor", text: "看看多少 level 能不能到 2% 以内" },
        { role: "Student", text: "那我今晚重新跑一个这两个的超参数 看看最小的，\n[quote Ren: 还有 10000:1 的]" },
        { role: "Student", text: "正在先试这个\n[quote Ren: report 里的 candidate 2，用 1:10000 算看看]" },
        { role: "Supervisor", text: "嗯 把结果和点都放到 report 里面" },
        { role: "Student", text: "用一样的参数，误差大的和之前不是一个量级的😭我今晚用 m4 跑一下 再记录结果😳" },
        { role: "Supervisor", text: "行" },
      ],
    },
    {
      type: "email",
      date: "2025.08.11",
      note: {
        en: "The familiar cusp problem appeared again.",
        zh: "熟悉的 cusp 哈哈。",
      },
      subject: "Cusp And Reviewer Response",
      from: "Ren",
      body: [
        "Qimu,",
        "Please see the optimizer comparison in Figure 5 on Page 9. They used the Levenberg-Marquardt algorithm as optimizer.",
        "Also, they put the high contrast example in the flower shaped interface (Example 3).",
        "The reviewer is quite familiar with this paper. We shall refer to this paper and response to the comments carefully.",
      ],
      branches: [],
    },
    {
      type: "chat",
      date: "2025.09.03",
      note: {
        en: "Back home, reverse-version, and still revising.",
        zh: "回家（反穿版），也在改。",
      },
      messages: [
        { role: "Supervisor", text: "文章改的不错👍" },
        { role: "Student", text: "[sticker: 谢谢]" },
        { role: "Student", text: "看到今天两个老师轮流看了😂" },
        { role: "Student", text: "那我就可以放心继续改了😜" },
      ],
    },
    {
      type: "chat",
      date: "2025.09.05",
      note: {
        en: "Word-by-word revision. Details matter most.",
        zh: "咬文嚼字 ing，细节最重要！",
      },
      messages: [
        { role: "Student", text: "加上这句感觉在上一场作文课😂\n[quote Ren: 应该是参考文献里有状语]" },
        { role: "Supervisor", text: "那就一起调整了吧" },
        { role: "Student", text: "好，就是罗列一下这几种方法，强调不同的角度，而不是谁比谁好 是吗" },
        { role: "Supervisor", text: "对" },
        { role: "Supervisor", text: "语数外有机结合了\n[quote Qimu: 加上这句感觉在上一场作文课😂]" },
        { role: "Supervisor", text: "高考还是有远瞻性的" },
        { role: "Student", text: "😂😂原来学好语数英也可以走遍天下都不怕😺" },
      ],
    },
    {
      type: "chat",
      date: "2025.09.07",
      note: {
        en: "Finally, on 2025.09.07, we submitted this paper that had taken so much work.",
        zh: "最终，我们在 2025.9.7 提交了这篇呕心沥血的论文。",
      },
      messages: [
        { role: "Supervisor", text: "还有些 AI 的痕迹\n[quote Ren: 数值部分的讨论，有些翻来覆去加篇幅的文字可以优化一下]" },
        { role: "Student", text: "对我刚想说之前为了凑 18-20 页的字数\n[quote Ren: 之前是嫌短加的]" },
        { role: "Student", text: "😂" },
        { role: "Supervisor", text: "现在最后精修一次" },
        { role: "Supervisor", text: "😂" },
        { role: "Student", text: "好的那我重新写一下 discussion\n[quote Ren: 还有些 AI 的痕迹]" },
        { role: "Supervisor", text: "真的最后" },
        { role: "Supervisor", text: "了" },
      ],
    },
    {
      type: "chat",
      date: "2025.09.10",
      note: {
        en: "Very, very luckily, the acceptance arrived on Teachers' Day.",
        zh: "非常非常幸运地在教师节当天收到了 accept 的信息！",
      },
      messages: [
        { role: "Supervisor", text: "[image: Decision on EAJAM-25-069.R1]" },
        { role: "Student", text: "😭😭😭这么快！" },
        { role: "Supervisor", text: "干得好" },
        { role: "Student", text: "好激动🥹都值得了😭" },
        { role: "Student", text: "谢谢忍老师！！！" },
      ],
    },
    {
      type: "moment",
      date: "2025.09.10",
      note: {
        en: "The public-facing moment.",
        zh: "营业时刻。",
      },
      text:
        "Teacher's Day joy 🎉 去年 SURF 项目的研究成果终于顺利 accepted！见证学生从问题探索到学术成果的全过程，是作为教师最宝贵的收获。衷心祝贺 Qimu Luo 同学在科研道路上迈出坚实一步！🌟🚀\nMentioned you\n19:08",
    },
    {
      type: "chat",
      date: "2025.11",
      note: {
        en: "The EAJAM presentation became part of my KAUST and Cambridge interviews. There is no wasted road; every step is calorie.",
        zh: "EAJAM 的 presentation 成了 KAUST 和 Cambridge 面试的一部分，正所谓：从来没有白走的路，每一步都是卡路里。",
      },
      messages: [
        { role: "Supervisor", text: "可以把 eajam 的文章 整理个 slides" },
        { role: "Supervisor", text: "按 20mins research talk" },
        { role: "Student", text: "好！我今天还刚想了要不要准备这个😂\n[quote Ren: 可以把 eajam 的文章 整理个 slides]" },
        { role: "Student", text: "好\n[quote Ren: 按 20mins research talk]" },
        { role: "Supervisor", text: "最近写了太多 slides 了👍" },
        { role: "Supervisor", text: "都不会白写" },
        { role: "Student", text: "感觉一下子大学第四年把之前没做过的 presentation 全做了😂\n[quote Ren: 最近写了太多 slides 了👍]" },
        { role: "Supervisor", text: "输出型大四" },
      ],
    },
    {
      type: "chat",
      date: "2025.12.01",
      note: {
        en: "Dr. Ren Zhao encouraged me to apply for Scientific Computing.",
        zh: "忍老师鼓励我去申请 Scientific Computing。",
      },
      messages: [
        { role: "Supervisor", text: "[image: Cambridge reference request for MPhil in Scientific Computing]" },
        { role: "Supervisor", text: "原来还有这个呢" },
        { role: "Student", text: "确实才知道😂我了解一下，或许要先修课呢🤭" },
      ],
    },
    {
      type: "chat",
      date: "2026.01.13",
      note: {
        en: "After I received the interview invitation, Dr. Ren Zhao helped me check courses, think about possible interview questions, and find ideas for the interview.",
        zh: "在得知我有面试之后，帮我一起看课程，想面试的问题，给我面试的 idea。",
      },
      messages: [
        { role: "Supervisor", text: "那就好 15 号躺不平了😂" },
        { role: "Student", text: "用一天的躺不平换申请季的躺平还是血赚😺" },
        { role: "Supervisor", text: "根据这个面经好好准备一下 拿下\n[quote Ren: 25Fall 极限上岸记录｜SZU ➡️ Cam SC 随着学签顺利下... http://xhs...]" },
        { role: "Supervisor", text: "也可以看看 oxford 后续的 phd program 我去年在 nus 听的报告就是 oxford 做自适应的" },
        { role: "Student", text: "好的" },
        { role: "Supervisor", text: "Full Profile - MPhil in Scientific Computing" },
      ],
    },
    {
      type: "chat",
      date: "2026.01.15",
      note: {
        en: "I completed an interview that only Dr. Ren Zhao knew about.",
        zh: "完成了只有老师一个人知道的面试。",
      },
      messages: [
        { role: "Supervisor", text: "可以躺了 cheers 🎉" },
        { role: "Student", text: "[sticker: 该用户已躺平]" },
        { role: "Supervisor", text: "不容易 辛苦了" },
        { role: "Supervisor", text: "[sticker: GOOD LUCK]" },
        { role: "Student", text: "接☘️🤭也谢谢忍老师的持续的软硬件支持⬆️😜" },
      ],
    },
    {
      type: "chat",
      date: "2026.01.23",
      note: {
        en: "The offer arrived. I could not wait to share it with Dr. Ren Zhao. Before preparing for this interview, I had never wanted a program in that way. It was a difficult turn, and also the best arrangement of fate.",
        zh: "收到 offer，迫不及待地给忍老师分享。在准备这个 offer 的面试之前，我从来没有对任何一个项目有那样的渴望的心情，是那样对这样一条新的选择感到欣喜。这是一个改变我的命运、改变我的人生轨迹的 offer。记得当时老师说，担心我并不想走，怕只是老师的主意，但是不是，这也是我选择的，我喜欢的，一次特别不容易的转向，也是命运最好的安排。",
      },
      messages: [
        { role: "Student", text: "[file: UCRPT318.pdf]" },
        { role: "Student", text: "真的半夜来的🎁😜\n[quote Ren: 一般是半夜来 像圣诞老头]" },
        { role: "Supervisor", text: "好" },
        { role: "Supervisor", text: "好" },
        { role: "Supervisor", text: "好" },
        { role: "Supervisor", text: "太好" },
        { role: "Supervisor", text: "成了飞利浦的师妹" },
        { role: "Student", text: "哈哈哈哈哈哈哈从利物浦到飞利浦" },
        { role: "Student", text: "随手申的都来的可快了😂" },
        { role: "Supervisor", text: "命运推你去哪儿，你就大大方方地去\n[quote Qimu: 随手申的都来的可快了😂]" },
        { role: "Student", text: "[sticker: running XJTLU]" },
        { role: "Student", text: "[quote Ren: 命运推你去哪儿，你就大大方方地去]" },
        { role: "Supervisor", text: "更要感谢你自己的坚定与坚持 以后的路越走越宽了 适合开 Porsche 了 cheers 🎇🎇🎇" },
        { role: "Student", text: "把 Porsche 从这头开到老师的那头😁🤭" },
        { role: "Supervisor", text: "那你还得先把驾照拿了😁" },
      ],
    },
    {
      type: "email",
      date: "2025.12.09",
      note: {
        en: "After acceptance came format checking.",
        zh: "文章接受之后的后续步骤 format checking。",
      },
      subject: "Format Checking",
      from: "Ren",
      body: [
        "Dear Prof. Didenko,",
        "Thank you very much for the detailed guidance regarding our manuscript (EAJAM-25-069). We have carefully addressed all of the issues noted and have revised the tex source accordingly. The consolidated tex file and all required eps source files are attached.",
        "Should any further issues arise, please do not hesitate to let us know. We will be glad to make any necessary revisions promptly.",
      ],
      branches: [],
    },
    {
      type: "chat",
      date: "2026.01.23-24",
      note: {
        en: "The proof stage after acceptance.",
        zh: "文章接受之后的后续步骤.",
      },
      messages: [
        { role: "Supervisor", text: "行" },
        { role: "Supervisor", text: "先把 eajam 的 proof 了" },
        { role: "Student", text: "好的" },
      ],
    },
    {
      type: "email",
      date: "2026.02.16",
      note: {
        en: "On Lunar New Year's Eve in 2026, the paper was finally published.",
        zh: "在 2026.2 大年三十终于 publish。",
      },
      subject: "Published Paper",
      from: "Ren",
      body: [
        "Dear Editor,",
        "Thank you very much for your kind message and for sending the copy of our published paper. We are truly grateful for the opportunity to publish our work in the East Asian Journal of Applied Mathematics and for your support throughout the process.",
        "We look forward to future collaboration.",
      ],
      branches: [],
    },
  ],
  storyAfter: [
    {
      en:
        "Acceptance was not the end. This project began from 2024 SURF, crossed countries, and all the effort and outcomes were shown and tested during application season. Beyond the practical purpose of applications, having someone willing to listen to the result we had worked so hard for was already something extremely lucky and rare.",
      zh:
        "接受不是结束，这个从 2024 SURF 开始的 project，跨国的 project，所有的付出、成果都在申请季得到了展示和检验。除了功利的申请的角度，有机会被人听我们呕心沥血的成果，是一件非常非常幸运和难得的事情。",
    },
    {
      en:
        "This paper was never something planned only for publication. I never did one thing simply for the sake of publishing it. But every choice naturally carried it in that direction, and it also seemed to point clearly toward my next step. Although it is introductory in both theory and practice, it was my first complete experience of a truly stricter research process.",
      zh:
        "这篇论文从来不算是“蓄谋已久”，从来不是我去做某件事就为了发表它，但是每个选择又自然地把它带到了这个方向，而它，又似乎必然地指出了我清晰的下一步。虽然无论从理论还是实践都是入门级，但是这却是我第一次完整地参与经历，体会这个真正的更加严格的 research 的过程。",
    },
    {
      en:
        "I gradually realized that Dr. Ren Zhao's previous attention to every detail had never been too strict at all. I was lucky to receive proper training early and develop good habits, so that during major revision I often had traces to follow. Across these two years, we experienced many failures, attempts, and discussions between classes. In different countries, we patiently cultivated it, repaired it, completed it, enriched it, and let it grow, bloom, and bear fruit.",
      zh:
        "我也逐渐认识到，原来之前忍老师对每一个细节的要求根本不算严格，也非常幸运地一直受到正统的训练养成了良好的习惯，让我后面在 major revision 的时候时常有据可查。这两年，我们一起经历了很多次失败，很多次尝试，在很多个课间的间隙，在不同的国家，我们一起耐心地培育它，修建它，完整它，丰富它，让它长大，开花，结果。",
    },
    {
      en:
        "This is a story of remembering something long enough that it finally answers back. I once wrote on 2024.08.15: one day I will arrive at all the places I want to go, meet the people I want to meet, at the right time, place, and season, because I deserve it, and I know and deeply believe this. That wish, and that deeper trust, turned countless hours, effort, discussions, adjustments, and polish into one citation:\nEnergy-Based Adaptive Deep Unfitted Nitsche Method for Elliptic Interface Problems. (2026). East Asian Journal on Applied Mathematics, 16(3), 573-599. https://doi.org/10.4208/eajam.2025-069.100925.\nThe girl who wrote those words before dawn in 2024 may have been closer to the future she believed in than she imagined.",
      zh:
        "这是一个念念不忘，必有回响的故事。我曾经在 2024.8.15 写下：总有一天我会去到的，所有我想去的地方，我想见的人，在恰到好处的时间，地点，时节，因为我值得，我知道并深信这一点。这样的愿力，深层次的信任，以及无数时间、精力、数不清的讨论、调整和打磨让 report，code 和 draft 变成了一行引用：\n“Energy-Based Adaptive Deep Unfitted Nitsche Method for Elliptic Interface Problems. (2026). East Asian Journal on Applied Mathematics, 16(3), 573-599. https://doi.org/10.4208/eajam.2025-069.100925”。\n原来 2024 凌晨写下这些话的女孩，可能比自己想象的还要接近她当时相信的未来。",
    },
  ],
});

Object.assign(window.ARCHIVE.sections.find((section) => section.id === "collaborators"), {
  years: "",
  summary: {
    en: "My main collaborators from 2023 to 2026.",
    zh: "我从 2023 到 2026 的主要合作者。",
  },
  reflection: {
    en: "These are the people who grew with me.",
    zh: "这群人陪伴我一起成长。",
  },
  collaborators: ["ren-zhao", "hailong-guo", "yifei-xu", "jiayi-lin", "zihan-liang", "ruixi-xu", "zhuoqi-hou"],
});

Object.assign(window.ARCHIVE.collaborators["ren-zhao"], {
  summary: {
    en:
      "The most important collaborator of my undergraduate years. Under his training, I developed habits that will benefit me for a long time. He was not only a research supervisor: he also provided full-service support for research, applications, interviews, career planning, fitness 🏋️, English learning, communication skills, and life advice. The only problem is the price: at least one Porsche 🚗.",
    zh:
      "是我本科期间最最重要的合作者。在他的训练下，我养成了很多受益匪浅的良好习惯。他不仅仅是 research supervisor，也给申请、面试、职业规划、运动健身🏋️、英语学习、编程训练、表达技巧、人生建议提供了一条龙服务🐲，就是报价稍贵，至少需要一辆 Porsche🚗",
  },
});

Object.assign(window.ARCHIVE.collaborators["hailong-guo"], {
  summary: {
    en:
      "A collaborator deeply trusted by Dr. Ren Zhao, and the second very good person in this archive. In 2024 SURF, he gave me extremely detailed code guidance, and later continued to offer valuable support for my applications :).",
    zh:
      "也是忍老师非常信任的合作者，好人第二枚。在 2024 SURF 收到了非常细节的代码指导，后续也给我的申请提供了宝贵的、持续的 support",
  },
  letter: [
    {
      en:
        "Dr. Hailong Guo is another warm and reliable teacher in this archive. In the 2024 SURF story, his detailed code advice made a confusing problem concrete. Later, his continuous support also became part of the application-season story.",
      zh:
        "Dr. Hailong Guo 是这个 archive 里另一位温暖又可靠的老师。2024 SURF 里，他非常细节的代码建议让很多抽象的问题变得具体；后来，他持续的 support 也成为申请季里很珍贵的一部分。",
    },
  ],
  links: ["2024surf", "2025eajam", "2026spectral"],
});

Object.assign(window.ARCHIVE.collaborators["jiayi-lin"], {
  summary: {
    en:
      "A good friend I have known since the very beginning. We wrote many parts of this story together, went through many things, and still kept in touch even across countries 😄.",
    zh:
      "从故事一开始就认识的好朋友，一起书写了很多的故事，经历了很多事情，虽然跨国也依然保持沟通😄。",
  },
  letter: [
    {
      en:
        "Jiayi Lin has been here from the beginning of the story: ANN, Citi, and many small but memorable moments of teamwork. Even after distance appeared, the conversation did not disappear.",
      zh:
        "Jiayi Lin 从故事一开始就在这里：ANN、Citi，以及很多具体又难忘的 teamwork 时刻。即使后来有了距离，沟通也没有消失。",
    },
  ],
});

Object.assign(window.ARCHIVE.collaborators["yifei-xu"], {
  summary: {
    en: "A good friend from the beginning of the story, and a collaborator on several early projects.",
    zh: "从故事一开始就认识的好朋友，一起合作了些许的项目。",
  },
  letter: [
    {
      en:
        "Yifei Xu belongs to the earliest part of the archive. She appears in the ANN training and 2024 Citi story, where early programming panic slowly became something shared and discussable.",
      zh:
        "Yifei Xu 属于 archive 最早的那一段。她出现在 ANN training 和 2024 Citi 的故事里，也让最开始一个人的 programming panic 慢慢变成可以一起讨论的事情。",
    },
  ],
});

Object.assign(window.ARCHIVE.collaborators["ruixi-xu"], {
  summary: {
    en: "I met her through 2025 SURF. Reliable, energetic, and very much like a small sun.",
    zh: "相识于 2025 SURF，靠谱，非常有能量的一颗小太阳🌞",
  },
  letter: [
    {
      en:
        "Ruixi Xu joined the story from 2025 SURF onward. Reliable, bright, and energetic, she helped the later FX and competition chapters keep moving forward.",
      zh:
        "Ruixi Xu 从 2025 SURF 开始加入这个故事。靠谱、明亮、有能量，她也让后来的 FX 和 competition 章节继续往前走。",
    },
  ],
});

Object.assign(window.ARCHIVE.collaborators["zihan-liang"], {
  summary: {
    en: "I met him through 2025 SURF. Extremely strong execution, reliable, Iron Zan 👍.",
    zh: "相识于 2025 SURF，执行力超强，靠谱，Iron Zan 👍",
  },
  letter: [
    {
      en:
        "Zihan Liang became part of the 2025-2026 FX research arc. His execution and reliability made the later project rhythm steadier.",
      zh:
        "Zihan Liang 是 2025-2026 FX research 这条线的一部分。他的执行力和靠谱程度，让后期 project 的节奏更稳。",
    },
  ],
});

Object.assign(window.ARCHIVE.collaborators["zhuoqi-hou"], {
  summary: {
    en: "I met him through 2025 SURF. Serious about learning, and enthusiastic about shuo-learning.",
    zh: "相识于 2025 SURF，学习认真，热爱 shuo 学。",
  },
  letter: [
    {
      en:
        "Zhuoqi Hou is connected with the 2025 SURF and 2026 IBEC chapters, a careful learner in the later part of the shared FX story.",
      zh:
        "Zhuoqi Hou 连接的是 2025 SURF 和 2026 IBEC 这一段，是后期 FX 故事里认真学习的一位 collaborator。",
    },
  ],
  links: ["2025surf", "2026ibec"],
});

Object.assign(window.ARCHIVE.projects["2025eajam"], {
  outcome: {
    title: { en: "Publication Outcome", zh: "Publication Outcome" },
    description: "",
    links: [],
    note: "",
  },
  outcomeShowcase: {
    documents: [
      { label: "Paper", kind: "EAJAM Article", href: "https://www.global-sci.com/EAJAM/article/view/23417" },
      {
        label: "Code",
        kind: "Repository",
        href:
          "https://github.com/QimuLuo-hub/Energy-Based-Adaptive-Deep-Unfitted-Nitsche-Method-for-Elliptic-Interface-Problems",
      },
    ],
    presentation: [],
  },
});

Object.assign(window.ARCHIVE.projects["2026ibec"], {
  storyEvidence: [
    {
      type: "chat",
      date: "2025.08.30",
      note: {
        en: "The first all-nighter in MB124 across four years. The three of us went to S Building to watch the sunrise 🌄.",
        zh: "这是四年里面第一次在 MB124 通宵，当时我们仨还去 S 楼看日出🌄。",
      },
      messages: [
        { role: "Supervisor", text: "我去提交了" },
        { role: "Supervisor", text: "去补觉吧" },
        { role: "Supervisor", text: "辛苦啦" },
        { role: "Student", text: "好的，忍老师也辛苦啦🌹 昨天难过还有一个原因就是觉得没仔细看文献又耽误了老师的时间有点内疚😣" },
        { role: "Student", text: "在 mb 体验了一次完整的三天建模😂" },
        { role: "Student", text: "[sticker: 必胜]" },
        { role: "Supervisor", text: "这次太极限了 很不正常 后续可能还需要调整 anyway 希望大家都能有所收获" },
      ],
    },
    {
      type: "email",
      date: "2025.08.30",
      note: { en: "Paper submitted.", zh: "提交！" },
      subject: "IBEC Paper Submission",
      from: "Ren",
      body: [
        "Dear all,",
        "Attached is the submitted version of our paper for your records. This journey has been challenging, and I truly appreciate the great effort and contributions each of you made along the way. I hope that, in time, you will all share in the dividends of this hard work.",
      ],
      branches: [
        {
          author: "Qimu",
          text:
            "Dear Dr. Zhao, Thanks for sharing this, I will save this records well. Although challenging, it is still a really valuable opportunity to work on a project wholeheartedly with hardworking teammates. I truly appreciate all your guidance and time, from the foundation towards meticulous polishing work along the way. I will be more mindful of the details and lessons learnt from this project not only to ease your concern and burden but also develop better habits for efficiency in the future. I am looking forward to our next project.",
        },
      ],
    },
    {
      type: "email",
      date: "2025.10.07",
      note: { en: "The acceptance email arrived.", zh: "Accept!" },
      subject: "IBEC Paper Acceptance",
      from: "IBEC",
      body: [
        "Dear Professor Ren Zhao,",
        "On behalf of the organizing committee, I am pleased to inform you that your paper entitled:",
        "“Do Macroeconomic and Geopolitical Risk Factors Improve FX Volatility Forecasts? A Mixed-Frequency Transformer Approach”",
        "has been accepted for presentation at the XXIII International Business and Economy Conference (IBEC 2026), to be held at Xi'an Jiaotong-Liverpool University (XJTLU), Suzhou, China, from 3-4 January 2026.",
        "We warmly congratulate you on this achievement. Your contribution will enrich the academic dialogue at IBEC 2026 and provide valuable insights for fellow scholars and practitioners.",
        "To confirm your participation, please complete the registration link (https://xjtlu.mike-x.com/POoT8) before 15 November 2025.",
        "We look forward to your active participation in IBEC 2026.",
      ],
      branches: [],
    },
    {
      type: "chat",
      date: "2025.10.07",
      note: { en: "Luckily, the acceptance arrived just in time.", zh: "10月成果➕1" },
      messages: [
        { role: "Supervisor", text: "cheers" },
        { role: "Student", text: "!! 提前开奖" },
        { role: "Supervisor", text: "这个可以请亲友团了" },
        { role: "Student", text: "好🤭" },
        { role: "Student", text: "感恩品控员又一次把控了质量🥹" },
        { role: "Student", text: "会议文章通常是不需要改的嘛" },
        { role: "Supervisor", text: "不需要改了" },
        { role: "Supervisor", text: "准备 slides 吧" },
        { role: "Student", text: "124 并非血汗工厂，而是风水宝地" },
        { role: "Supervisor", text: "CV 又要改了" },
        { role: "Student", text: "好的，十月果然是收获的季节😭" },
      ],
    },
  ],
});

Object.assign(window.ARCHIVE.projects["2024citi"], {
  subtitle: "",
  timeline: "",
  storyTitle: { en: "The First Competition", zh: "第一个比赛" },
  story: [
    {
      en:
        "The 2024 Citi Cup was the first competition I joined. The abilities trained here were very broad: not only learning by myself, but also learning how to lead a team.",
      zh:
        "2024 的花旗杯是我参加的第一次比赛，在这里被培养的能力是全方位的，不仅仅要自己会学习，还要会带团队。",
    },
  ],
  storyEvidence: [
    {
      type: "chat",
      date: "2023.12.19",
      note: {
        en:
          "Over the past three years, Dr. Ren Zhao kept emphasizing that leadership is an important ability and a standard valued by top universities. Before this, I had often been in the role of being led. Perhaps the shift in perspective began here.",
        zh:
          "在过去的三年中，忍老师总是强调，leadership 是一种很重要的能力，是世界顶尖大学都强调的标准。而在那之前的我总是处在一个被领导的角色，视角的转换或许从这一次开始。",
      },
      messages: [
        { role: "Supervisor", text: "前提是所有的 teammate 配合，且编程的人技术过硬靠谱" },
        { role: "Student", text: "任重道远我天，这没有 team work 人是真的会 derrrrr 的" },
        { role: "Student", text: "是" },
        { role: "Supervisor", text: "leadership也是能力" },
        { role: "Student", text: "人太多会有 diminishing marginal production 😺" },
        { role: "Supervisor", text: "肯定会" },
        { role: "Supervisor", text: "你自己组队，我尊重你的选择" },
        { role: "Student", text: "甚至还没有 leadership 的成功的经历✚经验😭" },
        { role: "Supervisor", text: "那就学一下" },
      ],
    },
    {
      type: "email",
      date: "2024.01.18",
      note: { en: "Dr. Ren Zhao invited Dr. Ren to answer our questions.", zh: "忍老师邀请了任老师来给我们答疑！" },
      subject: "Citi Cup Q&A",
      from: "Ren",
      body: [
        "Dear all,",
        "I am excited to announce that we have invited Dr. Ren from the Southwestern University of Finance and Economics to join us for a special pop-up Q&A session. Dr. Ren will provide a brief introduction to the background and terminologies used in our project. This is a fantastic opportunity to gain insights and clarity on the Accounting aspects of our work.",
        "We encourage all team members to participate and ask any questions related to accounting. Please use the following information to join us on Tencent Meeting.",
        "会议主题：Citi Cup Q&A",
        "会议时间：2024/01/18 17:30-20:30 (GMT+08:00) 中国标准时间 - 北京",
        "点击链接入会，或添加至会议列表： https://meeting.tencent.com/dm/74cUpfFyehBd",
        "#腾讯会议：322-591-108",
        "会议密码：0118",
      ],
      branches: [],
    },
    {
      type: "email",
      date: "2024.01.21",
      note: { en: "Dr. Songlin Zhao from Silicon Valley: talk times two.", zh: "赵老师 from Silicon Valley 讲座✖️2。" },
      subject: "Citi Cup Discussion",
      from: "Ren",
      body: [
        "Dear all,",
        "I am excited to announce that we will be hosting a special discussion session on Monday at noon via Tencent Meeting, with the invited supervisor being Dr. Songlin Zhao, a senior software engineer from Silicon Valley in the USA. The discussion will cover important topics pertaining to our Citi Cup project, and Dr. Zhao's valuable insights and expertise will undoubtedly provide us with a fresh perspective and guidance.",
        "I strongly encourage all team members to join this session, and I have reserved an onsite venue at MB341 for your convenience. Please take advantage of this opportunity to engage directly in the discussion.",
        "Due to the timezone difference, the upcoming Tencent Meeting is scheduled in the USA Pacific Time, which is Monday at 12 pm Beijing Time.",
        "会议主题：Citi Cup Discussion",
        "会议时间：2024/01/21 20:00-23:00 (GMT-08:00) 北美太平洋时间 - 洛杉矶",
        "点击链接入会，或添加至会议列表： https://meeting.tencent.com/dm/mAYbFahDIyML",
        "#腾讯会议：108-367-081",
        "会议密码：0122",
      ],
      branches: [],
    },
    {
      type: "chat",
      date: "2024.02.04",
      note: {
        en: "While preparing for Citi Cup and MCM, I was also preparing for IELTS.",
        zh: "在准备花旗杯、美赛的时候还同时备考了雅思。",
      },
      messages: [
        { role: "Student", text: "好险✌️" },
        { role: "Student", text: "[image: IELTS score]" },
        { role: "Student", text: "还是不如十岁小孩😺" },
        { role: "Supervisor", text: "congrats!" },
        { role: "Student", text: "😭要喜极而泣了" },
        { role: "Supervisor", text: "关关难过关关过" },
      ],
    },
    {
      type: "email",
      date: "2024.03.25",
      note: { en: "The final submission email.", zh: "最后提交！" },
      subject: "2024 Citi Submission",
      from: "Qimu",
      body: [
        "Dear Dr. Zhao,",
        "Fortunately, we have succeeded in saving our website and I have uploaded the zip file of the latest version of the Technology part, which includes:",
        "1. Technology Implementation with the updated link in the final section,",
        "2. Updated code",
        "3. demo video into the box.",
        "Additionally, I have submitted all required files through the official platform and saved the screen recording as evidence.",
        "Thanks for your continuous dedication to the whole process. In the beginning, you informed us of this invaluable opportunity and encouraged me to take the responsibility of a leader, which is a challenging but rewarding process. Then, you invited professionals to give us lectures regarding both financial reports and technology and the Q&A sessions indeed solved our confusion. Regardless of the outcome, there is a strong sense of fulfillment in completing a task completely with some excellent teammates. The feeling of overcoming a new obstacle reminds me of the saying you once mentioned",
        "“关关难过关关过，前路漫漫亦灿灿”",
        "I am relieved that the experience lasting for 2 months has come to a conclusion and I am excited about the new challenges ahead.",
      ],
      branches: [{ author: "Ren", text: "Cheers!" }],
    },
  ],
  storyAfter: [
    {
      en:
        "The 2024 Citi Cup did not produce a dazzling result, but it was still meaningful. Rather than seeing it as a failure, I prefer to see it as a preface. It was precious to hear talks from professionals in the industry; I also experienced the full workload of the competition and saw how important final publicity materials could be. Looking back, in 2024, I was not yet the core person in many team projects. Through this experience, I gradually understood the importance of relying on myself, and later began to provide the main technical support for more activities.",
      zh:
        "2024 的花旗杯并没有很亮眼的结果，但是它依旧是一个有意义的存在。与其视为失败，我更愿意把它看作一个序章。有机会听到专业的业内人士的讲座是一件非常珍贵的事，另外，我也体会到了这个比赛的整个工作量，以及看到了最终宣传品的重要性。回想起来，在 2024 年的时候，面对大大小小的团队合作，我一直没有处于一个核心的角色，而经历了这一次，渐渐认识到靠自己的重要性，也开始为后续的活动提供主要的技术支持。",
    },
  ],
  outcome: { title: { en: "Competition Outcome", zh: "Competition Outcome" }, description: "", links: [], note: "" },
  outcomeShowcase: {
    documents: [
      {
        label: "Code",
        kind: "Repository",
        href: "https://github.com/QimuLuo-hub/Equity-Structure-Analysis-Platform/tree/main/code",
      },
      {
        label: "Demo",
        kind: "Demo Video",
        href: "https://github.com/QimuLuo-hub/Equity-Structure-Analysis-Platform/blob/main/Demo-Equity-Structure.mp4",
      },
    ],
    presentation: [
      {
        label: "宣传品",
        caption: "经典 5 个字。",
        image: "materials/4-Competition/2024CITI/2-Outcome/观赛/宣传品.jpg",
      },
      {
        label: "Ren",
        caption:
          "（摄影师，me）在 2024 的很多个比赛中，忍老师还指导了很多别的队伍，每次都有队伍获奖，因为知道老师在这个过程的时间和精力，因此，每一次也都很为老师、同伴开心！😄",
        image: "materials/4-Competition/2024CITI/2-Outcome/观赛/ren.JPG",
      },
    ],
  },
});

Object.assign(window.ARCHIVE.projects["2025citi"], {
  subtitle: "",
  timeline: "",
  storyTitle: "Number one girl",
  storyTitleLink: "https://www.youtube.com/watch?v=pZ1NdE69VTs",
  story: [
    {
      en:
        "Joining the 2025 Citi Cup was not a very firm decision at first. I just seemed to have become used to placing myself in a very busy state.",
      zh:
        "参加 2025 的花旗杯并不是一个非常坚定的选择，只是，好像习惯于把自己放置在一个很忙的状态。",
    },
  ],
  storyEvidence: [
    {
      type: "chat",
      date: "2025.01.09",
      note: { en: "It began dramatically from a meeting of empty heads plus perfectly timed speaking-for-us.", zh: "于是就从一个脑袋空空 + 及时嘴替的 meeting 戏剧化地开始了。" },
      messages: [
        { role: "Supervisor", text: "人民币 vs 主流：美元，欧元，日元，英镑" },
        { role: "Supervisor", text: "or 美元 vs 人民币 英镑 欧元 日元" },
        { role: "Supervisor", text: "探测汇率剧烈波动的原因和指标相关性" },
        { role: "Supervisor", text: "人民币看离岸市场，不考虑外汇管制" },
        { role: "Supervisor", text: "你回答一下他" },
        { role: "Supervisor", text: "😂😂😂" },
        { role: "Student", text: "一场酣畅淋漓的嘴替😭" },
        { role: "Supervisor", text: "听下来" },
        { role: "Supervisor", text: "大部分脑袋都是🈳的" },
        { role: "Supervisor", text: "抱着学习的心态" },
      ],
    },
    {
      type: "chat",
      date: "2025.01.19",
      note: { en: "At that time I was doing many things again. They were all course-related, but my status changed frequently, and I still received care.", zh: "当时又一次同时干很多件事，但都是课内的，只是状态更新比较频繁，但是还是收到了关心！" },
      messages: [
        { role: "Supervisor", text: "行，有问题的话随时联系，别内耗" },
      ],
    },
    {
      type: "chat",
      date: "2025.01.24",
      note: { en: "Dr. Ren Zhao held many Tencent meetings and calls. In one of them, he encouraged me to start directly, so I began with data organization and gradually went deeper.", zh: "当时忍老师开了很多次 Tencent meeting，以及☎️。在其中一次，他鼓励我直接开始做，于是我开始逐步深入，从整理数据开始。" },
      messages: [
        { role: "Supervisor", text: "Tencent meeting?" },
        { role: "Student", text: "好" },
        { role: "Supervisor", text: "#腾讯会议：143-196-156" },
      ],
    },
    {
      type: "email",
      date: "2025.01.24",
      note: { en: "Dr. Ren Zhao shared the mind map with us.", zh: "忍老师给我们分享了 mindmap。" },
      subject: "FX Risk Model Mind Map",
      from: "Ren",
      body: [],
      attachments: [
        {
          image: "materials/4-Competition/2025CITI/1-Story/email/2025CITI-0124-mindmap.rtfd/unknown.jpg",
          caption: "FX Risk Model mind map.",
        },
      ],
      branches: [],
    },
    {
      type: "chat",
      date: "2025.01.29",
      note: { en: "Still busy on the first day of Lunar New Year.", zh: "大年初一仍然忙忙碌碌。" },
      messages: [
        { role: "Student", text: "忍老师，有 3 个问题😳\n1. 还需要算新的算例嘛?\n2. 花旗杯的数据整理需要分享一份 overleaf 的链接吗，还是最后上传 pdf 就行?\n3. 部分分好类的数据想上传到链接里但是试了一下不能传文件夹，是直接传所有的文件还是什么别的方式😳" },
        { role: "Supervisor", text: "1. 不算，等我改完目前的\n2. 数据传 box，如果写了东西就 overleaf 分享给我会看\n3. 应该能传文件夹，不行就 zip 一下，再不行就 email" },
        { role: "Student", text: "好的！看到啦，大年初一还在忙忙碌碌☕" },
      ],
    },
    {
      type: "chat",
      date: "2025.01.30",
      note: { en: "An update from Overleaf.", zh: "来自 overleaf 的 update！" },
      messages: [
        { role: "Supervisor", text: "看了 overleaf 的文档，把所有的数据具像化之后，思路应该清晰很多了" },
        { role: "Student", text: "确实，感觉都跟之前整理的理论对应上了, policyuncertainty.com 还是" },
        { role: "Student", text: "[sticker: 还是太全面了]" },
        { role: "Student", text: "虽然也没处理啥，代码本身不花费时间，但是了解指标都是什么含义和区别还蛮需要时间的😂 又学到了🫡" },
        { role: "Supervisor", text: "没有白走的弯路，每一步都是卡路里" },
        { role: "Supervisor", text: "目前感觉不需要技术组了" },
      ],
    },
    {
      type: "chat",
      date: "2025.02.02",
      note: { en: "At first I only listened. Later I gradually experienced how reality verified Dr. Ren Zhao's words step by step.", zh: "之前只是听👂，后来慢慢自己体会到了现实如何一步一步验证忍老师的话（“但凡不被我说中一次”）。" },
      messages: [
        { role: "Supervisor", text: "你这个春节比去年更充实了" },
        { role: "Student", text: "确实😂已经没有春节的概念了😭" },
        { role: "Student", text: "没有回家，不仅更充实还不会影响决策😺" },
        { role: "Supervisor", text: "😂" },
        { role: "Supervisor", text: "国外五个月，希望你看到了 体会到了在 334295 听到的世界" },
        { role: "Student", text: "看到了，感觉出来像开了一条人生副本，除了不一样的世界以外，掌控自己的生活的自由度🆙😂" },
        { role: "Student", text: "以后更想出来生活了😂" },
        { role: "Student", text: "但更多的感觉是像一种验证，会看到某些场景突然🧠翻笔记然后才懂得原来当时听到的话是那个意思" },
      ],
    },
    {
      type: "chat",
      date: "2025.05.11",
      note: { en: "We finally reached the final, and this competition formed a good connection with 2025 SURF.", zh: "这次终于进决赛啦！而这次的比赛也和 2025 SURF 形成了一个很好的链接。" },
      messages: [
        { role: "Supervisor", text: "不急" },
        { role: "Student", text: "好哈哈哈 不急，就是好奇😁" },
        { role: "Supervisor", text: "[phone] Duration: 36:49" },
      ],
    },
    {
      type: "chat",
      date: "2025.05.31",
      note: { en: "Dr. Ren Zhao asked me to explain the project to the SURF teammates.", zh: "忍老师让我给 SURF 的同学们讲。" },
      messages: [
        { role: "Supervisor", text: "[phone] Duration: 21:47" },
        { role: "Student", text: "忍老师，6.9 我早上 9-11 点有空，也就是北京时间的 15-17 点😳" },
      ],
    },
    {
      type: "chat",
      date: "2025.06.27",
      note: { en: "Remote final viewing!!!", zh: "远程观赛了！！！" },
      messages: [
        { role: "Supervisor", text: "嗯" },
        { role: "Supervisor", text: "今天非常不错" },
        { role: "Student", text: "不枉大家的辛苦了😁" },
        { role: "Student", text: "大半年" },
        { role: "Student", text: "忍老师也辛苦了呀！！前期默默指导了那么多，打了那么多跨洋电话，后面又一年一度给评委剥虾😺还有大大小小的报销的事情，非常操心，以及谢谢忍老师最开始鼓励我直接自己干技术，不用再等别人、找队友了，虽然过程有内耗，但是还是觉得幸好没有一开始被劝退，非常感恩，开心！🐧🐧🐧" },
      ],
    },
  ],
  storyAfter: [
    {
      en:
        "2025 Citi inevitably involved a lot of friction and internal exhaustion, but most of the time I felt responsibility: just like Dr. Ren Zhao always said, whether others do it or not, I still need to do it. During the competition, my depth of involvement gave me a code-level understanding of macroeconomics and foreign exchange, which complemented the mechanism analysis from class. This competition also became the core narrative for my later applications in economics, a true one-flower-many-meals moment. In the first semester of my fourth year, we systematically learned how to model variance, and I gained another layer of understanding of traditional methods.",
      zh:
        "2025 的 Citi 不可避免地会碰到很多拉扯，也会有内耗，但是更多的时候我感到的是一种责任，就像忍老师一直在说的那句话，不管别人做不做，我总要做。在参加比赛的过程中，我的深入程度让我对跟自己专业相关的宏观经济和外汇的知识有了从代码层面的理解，和课里的机制分析是一个互相补充的过程，而这个比赛也是我后来申请经济方向项目的核心叙事（一花多吃）。后来的大四上，我们系统学习了如何对方差建模，又有了对传统方法的体会。",
    },
    {
      en:
        "How could there be any wasted road? This step, like countless steps before it, seemed independent and parallel, but was always deeply connected with my past and future. It was the preface to 2025 SURF and the prototype of 2026 IBEC.",
      zh:
        "怎么会有白走的路呢？这一步，和之前的无数步一样，看似独立平行，却总是和我的过去、我的未来有着千丝万缕的联系，是 2025 的 SURF 的序章，也是 2026 年的 IBEC 的原型。",
    },
  ],
  outcome: { title: { en: "Competition Outcome", zh: "Competition Outcome" }, description: "", links: [], note: "" },
  outcomeShowcase: {
    presentationTitle: { en: "Showcase", zh: "展示" },
    documents: [
      { label: "Demo", kind: "Website Demo", href: "https://video.xjtlu.edu.cn/Mediasite/Play/1bd43f941eb64814896292c55a6673721d" },
      { label: "Demo", kind: "iOS Demo", href: "https://video.xjtlu.edu.cn/Mediasite/Play/4de8add4d8b3485581b02a16279b71a51d" },
      {
        label: "Business Plan",
        kind: "PDF",
        href: "https://github.com/QimuLuo-hub/FX-Risk-Signal-Detection/blob/main/Business%20Proposal%20(English%20version).pdf",
      },
      {
        label: "User Guide",
        kind: "PDF",
        href: "https://github.com/QimuLuo-hub/FX-Risk-Signal-Detection/blob/main/User%20Manual%EF%BC%88English%20version).pdf",
      },
      {
        label: "News",
        kind: "XJTLU",
        href: "https://www.xjtlu.edu.cn/zh/news/2025/12/2025huaqibeixiputuanduihuoerdengjiang",
      },
    ],
    presentation: [
      {
        label: "远程参加",
        caption: "远程参加了决赛（摄影师，Jiayi Lin）。",
        image: "materials/4-Competition/2025CITI/2-Outcome/Presentation/远程参加.JPG",
      },
      {
        label: "都不白来",
        caption: "《都不白来》。",
        image: "materials/4-Competition/2025CITI/2-Outcome/Presentation/都不白来.png",
      },
    ],
  },
});

Object.assign(window.ARCHIVE.projects["2025ieee"], {
  // subtitle: { en: "Applications of machine learning in microscopic chemistry.", zh: "Applications of machine learning in microscopic chemistry." },
  timeline: { en: "Applications of machine learning in microscopic chemistry.", zh: "所有都是相通的！" },
  storyTitle: { en: "A Pleasant Collaboration.", zh: "一次愉快的合作经历。" },
  story: [
    {
      en:
        "The story with the IEEE Cyber Big-Big Data Competition also began very simply. On 2025.8.4, we discussed the competition, and at that time I joined mostly because of the prize money 💰 and the chance to travel for work.",
      zh:
        "和 IEEE Cyber Big-Big Data Competition 的故事也开始得很简单，也是在 2025.8.4 的那天讨论到这个比赛，而那个时候的我也只是看中了💰以及因此出差的机会就参加了。",
    },
  ],
  storyEvidence: [
    {
      type: "chat",
      date: "2025.10.05",
      note: {
        en:
          "The result came successfully. It was a very interesting short experience, and I lightly experienced how machine learning can be applied at the chemical level. It turns out everything is connected.",
        zh:
          "这次也开奖成功啦，是一次非常有趣的短期经历，也浅浅体会了一下机器学习是如何应用到化学层面的，原来所有的都是相通的！",
      },
      messages: [
        { role: "Student", text: "刚刚才看到 cyberc 的📧，十月开的第一个🥇😳" },
        { role: "Supervisor", text: "cheers" },
      ],
    },
    {
      type: "chat",
      date: "2025.10.18-19",
      note: { en: "A very pleasant business trip, with no downside except the cold 🥶.", zh: "非常愉快的出差，除了🥶没有缺点。" },
      messages: [
        { role: "Supervisor", text: "那我比你更冷一点" },
        { role: "Student", text: "时间错误 过了几十分钟又🥶了一点😂" },
        { role: "Supervisor", text: "年纪大的怕冷" },
        { role: "Ruixi", text: "苏醒👀洗漱ing，羽绒服预备" },
        { role: "Student", text: "年纪小的也不敢穿短袖了😺" },
        { role: "Supervisor", text: "我昨天晚上已经穿上了所有衣服" },
        { role: "Supervisor", text: "行李全穿上了😂" },
      ],
    },
    {
      type: "chat",
      date: "2025.10.19",
      note: { en: "My parents watched this recording many times.", zh: "这个 recording 爸爸妈妈看了好几遍！！" },
      messages: [
        {
          role: "Supervisor",
          text:
            "Recording: Started by Ren Zhao\nDate: 2025-10-19 09:01:29\nRecording file: https://meeting.tencent.com/crm/2YG65E8o2f",
        },
      ],
    },
  ],
  storyAfter: [
    {
      en:
        "The result of this competition was later presented by Ruixi at the 2025 Research-Led Research Symposium and won the Gold Prize. Although the competition has ended, the story with our coach, Ruixi, and Zihan is still continuing. May there be more pleasant collaborations ∞!",
      zh:
        "这次的比赛成果也最终在 2025 Research-Led Research Symposium 由 Ruixi 代表得到了 Gold Prize。虽然比赛已经结束，但是和教练、Ruixi 以及 Zihan 的故事仍在续写！愉快的合作经历多一点吧∞！",
    },
  ],
  outcome: { title: { en: "Competition Outcome", zh: "Competition Outcome" }, description: "", links: [], note: "" },
  outcomeShowcase: {
    presentationTitle: "Shanxi Trip & 🦀",
    documents: [
      {
        label: "Report",
        kind: "PDF",
        href: "https://github.com/QimuLuo-hub/2025-CyberC-BIg-Big-Data-Competition/blob/main/CyberC_Report.pdf",
      },
      {
        label: "Code",
        kind: "Repository",
        href: "https://github.com/QimuLuo-hub/2025-CyberC-BIg-Big-Data-Competition/tree/main/CyberC_Final_Code",
      },
      {
        label: "News",
        kind: "XJTLU",
        href: "https://www.xjtlu.edu.cn/zh/news/2025/11/xipubenkeshengtuanduihuocybercdashujujingsaierdengjiang",
      },
    ],
    presentation: [
      { label: "Plane", caption: "第一次出差，很兴奋。", image: "materials/4-Competition/2025IEEE CyberC/2-Outcome/Shanxi-Trip/plane.jpg" },
      { label: "51 Square", caption: "山西有一种上世纪 90 年代的感觉。", image: "materials/4-Competition/2025IEEE CyberC/2-Outcome/Shanxi-Trip/51square.jpg" },
      { label: "Jinci", caption: "比耶的🐲，把抖音当 reference 做 presentation 的导游。", image: "materials/4-Competition/2025IEEE CyberC/2-Outcome/Shanxi-Trip/jinci.jpg" },
      { label: "Museum", caption: "山西博物馆。", image: "materials/4-Competition/2025IEEE CyberC/2-Outcome/Shanxi-Trip/museum.jpg" },
      { label: "Ruixi And Me", caption: "小礼物。", image: "materials/4-Competition/2025IEEE CyberC/2-Outcome/Shanxi-Trip/ruixi and me.jpg" },
      { label: "Presentation", caption: "presentation 现场。", image: "materials/4-Competition/2025IEEE CyberC/2-Outcome/Shanxi-Trip/presentation.jpg" },
      { label: "Crab", caption: "跟着本地吃蟹 master 享福了。", image: "materials/4-Competition/2025IEEE CyberC/2-Outcome/Celebration/cramb.jpg" },
      { label: "Firework", caption: "是 2025 看过的唯一一次烟花，也是最美的一次。", image: "materials/4-Competition/2025IEEE CyberC/2-Outcome/Celebration/firework.jpg" },
      { label: "Hope", caption: "本来想拍烟花，但是后面回来调色才发现倒影更精彩，把它命名为《希望》。", image: "materials/4-Competition/2025IEEE CyberC/2-Outcome/Celebration/my_work.jpg" },
      { label: "To Me", caption: "非常非常喜欢的 3 句寄语！", image: "materials/4-Competition/2025IEEE CyberC/2-Outcome/Celebration/to me.jpg" },
    ],
  },
});

Object.assign(window.ARCHIVE.projects["2024surf"], {
  baseRoutes: window.ARCHIVE.projects["2024surf"].baseRoutes.map((route) => ({
    ...route,
    tooltip: {
      en: (() => {
        const match = String(route.tooltip).match(/距离约\s*([\d,]+)\s*km，时差\s*([^（]+)（(.+)）/);
        return match ? `Approx. ${match[1]} km, time difference ${match[2].trim()} (${match[3]})` : String(route.tooltip);
      })(),
      zh: route.tooltip,
    },
  })),
});

Object.assign(window.ARCHIVE.projects["2025surf"], {
  nextStage: {
    text: {
      en: "This SURF outcome later became part of 2026 IBEC.",
      zh: "这个 SURF 的成果后来参加了 2026 IBEC。",
    },
    projectId: "2026ibec",
  },
});

Object.assign(window.ARCHIVE.projects["2025eajam"], {
  storyTitle: {
    en: "A Story Tightly Entwined With Fate",
    zh: "一个与命运紧紧缠绕的故事",
  },
});

const eajamTeacherDayMoment = window.ARCHIVE.projects["2025eajam"].storyEvidence.find(
  (item) => item.type === "moment" && String(item.text || "").includes("Teacher's Day joy")
);
if (eajamTeacherDayMoment) {
  eajamTeacherDayMoment.text = {
    en:
      "Ren\nTeacher's Day joy 🎉 The research outcome from last year's SURF project has finally been accepted! Witnessing a student move from problem exploration to an academic outcome is one of the most precious rewards of being a teacher. Warm congratulations to Qimu Luo for taking a solid step on the research path! 🌟🚀\nMentioned you\n19:08",
    zh: eajamTeacherDayMoment.text,
  };
}

Object.assign(window.ARCHIVE.projects["2026ibec"], {
  outcomeShowcase: {
    ...window.ARCHIVE.projects["2026ibec"].outcomeShowcase,
    presentation: window.ARCHIVE.projects["2026ibec"].outcomeShowcase.presentation.map((item, index) => {
      const captions = [
        { en: "Sunrise on 2025.8.30 - I only remember the strange excitement of two young friends.", zh: "2025.8.30 日出 - 只记得两个小朋友有一种异样的兴奋。" },
        { en: "Reading the paper word by word *3.", zh: "逐字阅读的 paper *3。" },
        { en: "Presentation snapshot (photo by Yifei).", zh: "presentation 抓拍（摄影师：yifei）。" },
        { en: "os: the tea break was not as good as the School of Mathematics and Physics (?", zh: "os：茶歇不如数理学院（？" },
        { en: "Zihan signing in.", zh: "zihan 签到抓拍。" },
      ];
      return { ...item, caption: captions[index] || item.caption };
    }),
  },
});

Object.assign(window.ARCHIVE.projects["2026spectral"], {
  storyVisuals: window.ARCHIVE.projects["2026spectral"].storyVisuals.map((item) => ({
    ...item,
    caption: {
      en: "The supervisor expanded like a Taylor series.",
      zh: "导师像泰勒级数一样展开了。",
    },
  })),
});

const citi2024Evidence = window.ARCHIVE.projects["2024citi"].storyEvidence;
Object.assign(citi2024Evidence[1], {
  body: [
    "Dear all,",
    "I am excited to announce that we have invited Dr. Ren from the Southwestern University of Finance and Economics to join us for a special pop-up Q&A session. Dr. Ren will provide a brief introduction to the background and terminologies used in our project. This is a fantastic opportunity to gain insights and clarity on the Accounting aspects of our work.",
    "We encourage all team members to participate and ask any questions related to accounting. Please use the following information to join us on Tencent Meeting.",
    { en: "Meeting topic: Citi Cup Q&A", zh: "会议主题：Citi Cup Q&A" },
    { en: "Meeting time: 2024/01/18 17:30-20:30 (GMT+08:00) China Standard Time - Beijing", zh: "会议时间：2024/01/18 17:30-20:30 (GMT+08:00) 中国标准时间 - 北京" },
    { en: "Join by link or add it to the meeting list: https://meeting.tencent.com/dm/74cUpfFyehBd", zh: "点击链接入会，或添加至会议列表： https://meeting.tencent.com/dm/74cUpfFyehBd" },
    { en: "Tencent Meeting: 322-591-108", zh: "#腾讯会议：322-591-108" },
    { en: "Meeting password: 0118", zh: "会议密码：0118" },
  ],
});
Object.assign(citi2024Evidence[2], {
  body: [
    "Dear all,",
    "I am excited to announce that we will be hosting a special discussion session on Monday at noon via Tencent Meeting, with the invited supervisor being Dr. Songlin Zhao, a senior software engineer from Silicon Valley in the USA. The discussion will cover important topics pertaining to our Citi Cup project, and Dr. Zhao's valuable insights and expertise will undoubtedly provide us with a fresh perspective and guidance.",
    "I strongly encourage all team members to join this session, and I have reserved an onsite venue at MB341 for your convenience. Please take advantage of this opportunity to engage directly in the discussion.",
    "Due to the timezone difference, the upcoming Tencent Meeting is scheduled in the USA Pacific Time, which is Monday at 12 pm Beijing Time.",
    { en: "Meeting topic: Citi Cup Discussion", zh: "会议主题：Citi Cup Discussion" },
    { en: "Meeting time: 2024/01/21 20:00-23:00 (GMT-08:00) North America Pacific Time - Los Angeles", zh: "会议时间：2024/01/21 20:00-23:00 (GMT-08:00) 北美太平洋时间 - 洛杉矶" },
    { en: "Join by link or add it to the meeting list: https://meeting.tencent.com/dm/mAYbFahDIyML", zh: "点击链接入会，或添加至会议列表： https://meeting.tencent.com/dm/mAYbFahDIyML" },
    { en: "Tencent Meeting: 108-367-081", zh: "#腾讯会议：108-367-081" },
    { en: "Meeting password: 0122", zh: "会议密码：0122" },
  ],
});
citi2024Evidence[4].body[7] = {
  en: "Difficult passes will still be passed; the long road ahead will still be bright.",
  zh: "“关关难过关关过，前路漫漫亦灿灿”",
};

Object.assign(window.ARCHIVE.projects["2024citi"].outcomeShowcase, {
  presentation: [
    {
      label: { en: "Promotional Material", zh: "宣传品" },
      caption: { en: "The classic five words.", zh: "经典 5 个字。" },
      image: "materials/4-Competition/2024CITI/2-Outcome/观赛/宣传品.jpg",
    },
    {
      label: "Ren",
      caption: {
        en:
          "(Photo by me.) In many competitions in 2024, Dr. Ren Zhao also guided many other teams, and teams kept winning prizes. Because I knew how much time and energy he put into the process, every time I felt truly happy for him and for my peers! 😄",
        zh:
          "（摄影师，me）在 2024 的很多个比赛中，忍老师还指导了很多别的队伍，每次都有队伍获奖，因为知道老师在这个过程的时间和精力，因此，每一次也都很为老师、同伴开心！😄",
      },
      image: "materials/4-Competition/2024CITI/2-Outcome/观赛/ren.JPG",
    },
  ],
});

Object.assign(window.ARCHIVE.projects["2025citi"].outcomeShowcase, {
  presentation: [
    {
      label: { en: "Remote Final", zh: "远程参加" },
      caption: { en: "Remote final attendance (photo by Jiayi Lin).", zh: "远程参加了决赛（摄影师，Jiayi Lin）。" },
      image: "materials/4-Competition/2025CITI/2-Outcome/Presentation/远程参加.JPG",
    },
    {
      label: { en: "No Road Was Wasted", zh: "都不白来" },
      caption: { en: "No Road Was Wasted.", zh: "《都不白来》。" },
      image: "materials/4-Competition/2025CITI/2-Outcome/Presentation/都不白来.png",
    },
  ],
});

Object.assign(window.ARCHIVE.projects["2025ieee"].outcomeShowcase, {
  presentation: [
    { label: "Plane", caption: { en: "First business trip. Very excited.", zh: "第一次出差，很兴奋。" }, image: "materials/4-Competition/2025IEEE CyberC/2-Outcome/Shanxi-Trip/plane.jpg" },
    { label: "51 Square", caption: { en: "Shanxi has a kind of 1990s feeling.", zh: "山西有一种上世纪 90 年代的感觉。" }, image: "materials/4-Competition/2025IEEE CyberC/2-Outcome/Shanxi-Trip/51square.jpg" },
    { label: "Jinci", caption: { en: "A peace-sign dragon 🐲, and a guide who used Douyin as the presentation reference.", zh: "比耶的🐲，把抖音当 reference 做 presentation 的导游。" }, image: "materials/4-Competition/2025IEEE CyberC/2-Outcome/Shanxi-Trip/jinci.jpg" },
    { label: "Museum", caption: { en: "Shanxi Museum.", zh: "山西博物馆。" }, image: "materials/4-Competition/2025IEEE CyberC/2-Outcome/Shanxi-Trip/museum.jpg" },
    { label: "Ruixi And Me", caption: { en: "Small gifts.", zh: "小礼物。" }, image: "materials/4-Competition/2025IEEE CyberC/2-Outcome/Shanxi-Trip/ruixi and me.jpg" },
    { label: "Presentation", caption: { en: "At the presentation.", zh: "presentation 现场。" }, image: "materials/4-Competition/2025IEEE CyberC/2-Outcome/Shanxi-Trip/presentation.jpg" },
    { label: "Crab", caption: { en: "Enjoying crab thanks to the local crab master.", zh: "跟着本地吃蟹 master 享福了。" }, image: "materials/4-Competition/2025IEEE CyberC/2-Outcome/Celebration/cramb.jpg" },
    { label: "Firework", caption: { en: "The only fireworks I saw in 2025, and also the most beautiful.", zh: "是 2025 看过的唯一一次烟花，也是最美的一次。" }, image: "materials/4-Competition/2025IEEE CyberC/2-Outcome/Celebration/firework.jpg" },
    { label: "Hope", caption: { en: "I meant to photograph the fireworks, but after color grading I realized the reflection was more wonderful. I named it Hope.", zh: "本来想拍烟花，但是后面回来调色才发现倒影更精彩，把它命名为《希望》。" }, image: "materials/4-Competition/2025IEEE CyberC/2-Outcome/Celebration/my_work.jpg" },
    { label: "To Me", caption: { en: "Three lines of advice I like very, very much!", zh: "非常非常喜欢的 3 句寄语！" }, image: "materials/4-Competition/2025IEEE CyberC/2-Outcome/Celebration/to me.jpg" },
  ],
});

window.ARCHIVE.collaborators["ren-zhao"].title = {
  en: "To Dr. Ren Zhao:",
  zh: "To 忍老师：",
};
