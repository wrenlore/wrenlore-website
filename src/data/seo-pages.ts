export const seoPages = [
  {
    slug: 'confluence-alternative', title: 'A self-hosted, open-source Confluence alternative', metaTitle: 'Open-Source Confluence Alternative | WrenLore',
    description: 'Move team knowledge from Confluence to an open-source, self-hosted wiki with SSO, audit trails, AI search and governed agent access.',
    intro: 'WrenLore gives teams a familiar collaborative wiki without forcing their operational knowledge into another per-seat SaaS contract.', problem: 'Keep the wiki. Change who controls it.',
    points: [
      { title: 'Host it yourself', body: 'Deploy with Docker on infrastructure you control. Your pages, attachments and audit data stay inside your environment.' },
      { title: 'Bring existing content', body: 'Use the standalone Confluence importer to move spaces and page structure from supported on-premise exports.' },
      { title: 'Keep enterprise controls', body: 'Use SAML SSO, role-based access, page-level permissions and activity history without sending knowledge to a third-party wiki.' },
      { title: 'Make knowledge usable by agents', body: 'Issue scoped MCP tokens so approved AI tools can retrieve and edit content with clear user-via-agent attribution.' },
    ],
    comparison: [
      { label: 'Deployment', wrenlore: 'Your servers or private cloud', conventional: 'Vendor-hosted SaaS' }, { label: 'Source', wrenlore: 'AGPL-3.0, public releases', conventional: 'Proprietary' },
      { label: 'AI access', wrenlore: 'Scoped MCP credentials', conventional: 'Vendor-defined integrations' }, { label: 'Data control', wrenlore: 'Your database and storage', conventional: 'Vendor account and region' },
    ],
    questions: [
      { question: 'Is WrenLore a drop-in replacement for every Confluence feature?', answer: 'No. WrenLore covers collaborative documentation, spaces, permissions, SSO, auditability and AI-assisted knowledge workflows. Teams should test specialist macros and custom Confluence apps before migrating.' },
      { question: 'Can we migrate from Confluence Data Center or Server?', answer: 'WrenLore maintains a standalone importer for supported Confluence exports. Test an export in a non-production environment before planning the final cutover.' },
      { question: 'Does WrenLore charge per user?', answer: 'The public software is licensed under AGPL-3.0. You provide and operate the infrastructure.' },
    ],
  },
  {
    slug: 'notion-alternative', title: 'An open-source Notion alternative for internal knowledge', metaTitle: 'Self-Hosted Notion Alternative for Teams | WrenLore',
    description: 'A self-hosted Notion alternative for teams that need collaborative documents, controlled access, auditability and AI grounded in private knowledge.',
    intro: 'WrenLore is built for operational knowledge: runbooks, decisions, policies and project context that need clear ownership and access controls.', problem: 'Documents that behave like company infrastructure',
    points: [
      { title: 'Real-time editing', body: 'Write together with a block editor, comments, diagrams and page history in shared team spaces.' }, { title: 'Private by deployment', body: 'Run the application, PostgreSQL and object storage under your own operational controls.' },
      { title: 'Identity and permissions', body: 'Connect enterprise identity and apply access rules at the space and page level.' }, { title: 'Grounded AI', body: 'Ask questions across content you can access and keep answers tied to source pages instead of detached chatbot memory.' },
    ],
    questions: [
      { question: 'Is WrenLore designed as a personal notes app?', answer: 'Its main focus is shared operational knowledge for teams. Personal notes can live in a private space, but the product is strongest when knowledge needs collaboration and governance.' },
      { question: 'Can WrenLore run without external AI providers?', answer: 'Yes. Core wiki functions do not require an AI provider. AI features depend on the provider and model configuration chosen by the operator.' },
      { question: 'Who owns the stored content?', answer: 'The deployment operator controls the database and storage. WrenLore does not require content to be stored in a WrenLore-hosted cloud service.' },
    ],
  },
  {
    slug: 'self-hosted-ai-knowledge-base', title: 'A self-hosted AI knowledge base with source control', metaTitle: 'Self-Hosted AI Knowledge Base | WrenLore',
    description: 'WrenLore combines a collaborative wiki with grounded AI search, citations, private deployment and permission-aware access for people and agents.',
    intro: 'Give people and AI tools one governed source of operational knowledge, hosted inside the environment your team already controls.', problem: 'AI answers are only useful when the source is trustworthy',
    points: [
      { title: 'Answers with citations', body: 'Ground responses in the pages a user can access and point back to the source material used.' }, { title: 'Provider choice', body: 'Route AI work through configured providers and models rather than locking the knowledge base to a single vendor.' },
      { title: 'Human-owned knowledge', body: 'People write, review and maintain the source pages. AI helps retrieve and work with that material.' }, { title: 'Auditable agent work', body: 'Agent edits carry user-via-agent attribution so machine activity does not disappear into a shared service account.' },
    ],
    questions: [
      { question: 'Does self-hosted mean the language model must run locally?', answer: 'No. The application and knowledge store are self-hosted. Operators can choose local or remote model providers according to their security and performance requirements.' },
      { question: 'Does AI bypass page permissions?', answer: 'No. Retrieval and agent access are designed around the same scoped permissions used for human access.' },
      { question: 'Can WrenLore replace a standalone RAG chatbot?', answer: 'For teams whose source material belongs in a maintained wiki, it can remove the split between the authoring system and the retrieval layer. Evaluate it against your ingestion requirements.' },
    ],
  },
  {
    slug: 'mcp-knowledge-base', title: 'A knowledge base your MCP clients can work with', metaTitle: 'MCP Knowledge Base for AI Agents | WrenLore',
    description: 'Connect MCP-compatible agents to a self-hosted knowledge base using scoped tokens, existing permissions and user-via-agent attribution.',
    intro: 'WrenLore exposes governed knowledge workflows through the Model Context Protocol, so approved agents can retrieve and maintain the same pages people use.', problem: 'Agent access needs a boundary, not a shared admin token',
    points: [
      { title: 'Scoped credentials', body: 'Issue user-owned MCP tokens with an explicit relationship to the person authorising the agent.' }, { title: 'Permission-aware retrieval', body: 'Agents work inside the spaces and pages their credentials can access.' },
      { title: 'Readable attribution', body: 'Record edits as user, via agent, so reviewers can see who authorised an automated change.' }, { title: 'Standard client connection', body: 'Use MCP-compatible clients without writing a one-off integration for every AI tool.' },
    ],
    questions: [
      { question: 'Which MCP clients can connect?', answer: 'WrenLore documents standard MCP setup and is designed for clients that support remote MCP servers and bearer-token authentication.' },
      { question: 'Can an MCP client edit pages?', answer: 'Yes, when the issued token and underlying user permissions allow the requested action.' }, { question: 'Can tokens be revoked?', answer: 'MCP credentials can be rotated or revoked by the user or administrator.' },
    ],
  },
  {
    slug: 'on-premise-knowledge-base', title: 'On-premise knowledge base software for controlled environments', metaTitle: 'On-Premise Knowledge Base Software | WrenLore',
    description: 'Deploy an open-source knowledge base on-premise with Docker, PostgreSQL, SSO, permissions, audit history and controlled AI integrations.',
    intro: 'Run WrenLore in your data centre, private cloud or isolated environment and keep operational knowledge under your own network and storage policy.', problem: 'Private knowledge should have an understandable deployment',
    points: [
      { title: 'Docker deployment', body: 'Build and run the application with documented containers, PostgreSQL and operator-controlled configuration.' }, { title: 'Enterprise identity', body: 'Connect SAML-based identity providers and keep access lifecycle tied to organisational accounts.' },
      { title: 'Your observability', body: 'Operate logging, backups, TLS and monitoring with the tools already used in your environment.' }, { title: 'No mandatory cloud control plane', body: 'The public application does not require a WrenLore SaaS account to run.' },
    ],
    questions: [
      { question: 'Can WrenLore run in an air-gapped network?', answer: 'The application can be deployed in isolated environments, but installation images, model access and updates need an operator-defined transfer process.' },
      { question: 'What database does WrenLore use?', answer: 'WrenLore uses PostgreSQL. Deployment documentation covers the expected application and database configuration.' }, { question: 'Is Kubernetes required?', answer: 'No. Docker Compose is the documented starting point.' },
    ],
  },
] as const;
