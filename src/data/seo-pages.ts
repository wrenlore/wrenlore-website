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
    deepDive: [
      {
        eyebrow: 'Migration', title: 'What a Confluence move actually involves',
        body: [
          'WrenLore accepts Confluence export archives through its page importer. Start with one representative space, including nested pages and attachments, and inspect the result before scheduling a wider move. That catches the things every migration page tends to hand-wave away: unusual macros, embedded applications, legacy formatting and links that only make sense inside the old instance.',
          'Keep the Confluence source available during validation. Page trees and ordinary content are the straightforward part. Marketplace apps and custom macros are organisation-specific, so there is no honest claim that a generic importer can reproduce all of them automatically.'
        ],
        bullets: ['Export and test one real space first', 'Check page hierarchy, attachments, internal links and permissions', 'Inventory custom macros and Marketplace apps separately', 'Plan a read-only window and final delta before cutover'],
        link: { label: 'Review the WrenLore deployment guide', href: 'https://github.com/wrenlore/wrenlore/blob/master/README-deploy.md' }
      },
      {
        eyebrow: 'Operations', title: 'A deployment your team can inspect',
        body: [
          'The documented stack is deliberately ordinary: the WrenLore application, PostgreSQL with pgvector, and Redis, built and run with Docker Compose. Put your own reverse proxy and TLS in front of it. Backups cover the Postgres volume and WrenLore file storage, and releases are deployed from source you can pin to a commit or tag.',
          'That means the operational work belongs to your team. You choose the host, patch cadence, monitoring, backup retention and recovery test. For teams already running internal services, this is understandable infrastructure. For a team with no appetite to operate a database or application stack, Confluence Cloud may remain the practical choice.'
        ],
        bullets: ['PostgreSQL 18 with pgvector for AI Answers', 'Redis for application and collaborative runtime work', 'Docker Compose as the documented starting point', 'Operator-owned TLS, monitoring, backups and update windows']
      }
    ],
    comparisonTitle: 'WrenLore and Confluence: the operational trade-off',
    comparisonLabel: 'Confluence Cloud',
    comparison: [
      { label: 'Deployment', wrenlore: 'Your servers or private cloud', conventional: 'Atlassian-hosted SaaS' }, { label: 'Source', wrenlore: 'AGPL-3.0, public releases', conventional: 'Proprietary' },
      { label: 'Agent access', wrenlore: 'Scoped MCP credentials', conventional: 'Atlassian and Marketplace integrations' }, { label: 'Data control', wrenlore: 'Your database and storage', conventional: 'Atlassian account and selected region' },
      { label: 'Operations', wrenlore: 'Your team patches, backs up and monitors', conventional: 'Atlassian operates the service' }, { label: 'Migration risk', wrenlore: 'Test macros and apps before cutover', conventional: 'No migration when staying on Confluence' },
    ],
    limitations: ['WrenLore does not promise compatibility with every Confluence macro or Marketplace app.', 'You operate the application, database, storage, backups and upgrades.', 'Teams that depend on Atlassian-specific workflows should prove those workflows in a pilot.', 'The public project is young; evaluate release cadence and support expectations against your procurement requirements.'],
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
    deepDive: [
      {
        eyebrow: 'A different centre of gravity', title: 'Built for shared operational knowledge, not an all-purpose workspace',
        body: [
          'WrenLore covers the part of Notion many teams use as an internal wiki: nested pages, collaborative editing, comments, diagrams, attachments, page history and search. Spaces give departments or projects a clear home, while page-level restrictions deal with material that should not be visible to everyone in a space.',
          'It does not try to reproduce every Notion surface. Teams using databases as lightweight CRMs, project trackers, forms or automation hubs should inventory those workflows before moving. A WrenLore page can hold a table, but that is different from a relational Notion database with filtered views and formulas.'
        ],
        bullets: ['Collaborative pages, comments and revision history', 'Spaces and page restrictions for team knowledge', 'Diagrams, tables, attachments and public sharing', 'No claim of feature parity with Notion databases or automations']
      },
      {
        eyebrow: 'Control and AI', title: 'Keep the source pages and agent access under the same permissions',
        body: [
          'The application, PostgreSQL database and file storage run in infrastructure chosen by the operator. SAML SSO can tie access to an existing identity provider. Backups, TLS, monitoring and upgrades remain operational responsibilities rather than being hidden inside a SaaS subscription.',
          'AI Answers works from WrenLore pages the requester can access. MCP connections use named, user-owned tokens with read-only or read/write mode, optional space scope, expiry and revocation. Agent edits retain user-via-agent attribution. That makes WrenLore useful when the wiki is also becoming a working knowledge source for automation.'
        ],
        bullets: ['Operator-controlled application, database and storage', 'SAML SSO plus workspace, space and page access rules', 'Grounded answers linked back to maintained pages', 'Scoped MCP connections rather than one shared administrator key'],
        link: { label: 'Read the MCP access model', href: 'https://github.com/wrenlore/wrenlore/blob/master/docs/MCP.md' }
      }
    ],
    comparisonTitle: 'WrenLore and Notion: choose the trade-off you actually need',
    comparisonLabel: 'Notion',
    comparison: [
      { label: 'Hosting', wrenlore: 'Your servers or private cloud', conventional: 'Notion-hosted SaaS' },
      { label: 'Primary shape', wrenlore: 'Governed team wiki and operational knowledge', conventional: 'Documents, databases and broad workspace tooling' },
      { label: 'Agent access', wrenlore: 'Scoped MCP tokens with user-via-agent attribution', conventional: 'Notion API and integrations' },
      { label: 'Identity', wrenlore: 'Local accounts and SAML configuration', conventional: 'Notion account and plan capabilities' },
      { label: 'Operations', wrenlore: 'Your team patches, monitors and backs up', conventional: 'Notion operates the service' },
      { label: 'Licence', wrenlore: 'AGPL-3.0 public source', conventional: 'Proprietary service' },
    ],
    limitations: ['WrenLore is not a drop-in replacement for Notion databases, formulas, forms, calendar views or automation workflows.', 'There is no managed WrenLore cloud service or commercial support plan today.', 'The operator owns upgrades, backups, TLS, monitoring and disaster recovery.', 'Test export and migration behaviour with representative Notion content before planning a cutover.'],
    questions: [
      { question: 'Is WrenLore designed as a personal notes app?', answer: 'Its main focus is shared operational knowledge for teams. Personal notes can live in a private space, but the product is strongest when knowledge needs collaboration and governance.' },
      { question: 'Can WrenLore run without external AI providers?', answer: 'Yes. Core wiki functions do not require an AI provider. AI features depend on the provider and model configuration chosen by the operator.' },
      { question: 'Who owns the stored content?', answer: 'The deployment operator controls the database and storage. WrenLore does not require content to be stored in a WrenLore-hosted cloud service.' },
      { question: 'Can WrenLore replace Notion databases?', answer: 'No. WrenLore is strongest as a collaborative knowledge base. Teams relying on relational databases, formulas, filtered views or Notion automations should keep those workflows elsewhere or evaluate a separate replacement.' },
      { question: 'Does WrenLore provide a hosted migration service?', answer: 'No. The public project provides self-hosted software and documentation. Operators should test their own export and import process with representative content.' },
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
    deepDive: [
      {
        eyebrow: 'Architecture', title: 'The wiki stays the source. Retrieval stays permission-aware.',
        body: [
          'WrenLore keeps authoring, permissions and AI retrieval in the same product. People maintain pages in spaces; AI Answers works over that maintained content and uses pgvector in the operator-controlled PostgreSQL database. A response can point back to its source instead of becoming another detached answer with no owner.',
          'Self-hosting the application does not force one model strategy. Operators can configure local or remote providers and route models according to their own security, cost and latency requirements. The core wiki continues to work without an inference provider.'
        ],
        bullets: ['Application, database and stored knowledge run in your environment', 'AI retrieval follows the requesting user’s access', 'Answers retain links to source pages', 'Local and remote model providers are operator choices'],
        link: { label: 'Inspect the deployment architecture', href: 'https://github.com/wrenlore/wrenlore/blob/master/README-deploy.md' }
      },
      {
        eyebrow: 'A practical fit', title: 'When a wiki-backed AI system is useful',
        body: [
          'This approach fits material that already needs human ownership: operating procedures, architecture decisions, policies, onboarding notes and incident runbooks. The answer quality still depends on the pages being current. WrenLore gives that maintenance work a visible home instead of hiding documents behind an ingestion pipeline.',
          'It is a weaker fit for arbitrary enterprise search across dozens of systems, high-volume document ingestion, or data that should never be copied into a wiki. Those problems need connectors, retention rules and review processes beyond a knowledge-base product.'
        ],
        bullets: ['Runbooks and incident procedures', 'Architecture decisions and technical standards', 'Policies with named owners and review history', 'Team onboarding and project context']
      }
    ],
    comparisonTitle: 'Wiki-backed AI versus a separate RAG service',
    comparisonLabel: 'Standalone RAG layer',
    comparison: [
      { label: 'Source editing', wrenlore: 'People maintain the source in the same system', conventional: 'Usually happens in separate source systems' },
      { label: 'Permissions', wrenlore: 'Wiki access applies to retrieval', conventional: 'Connector and index ACLs must be synchronized' },
      { label: 'Citations', wrenlore: 'Point back to maintained pages', conventional: 'Depend on ingestion metadata and chunking' },
      { label: 'Model choice', wrenlore: 'Configured by the operator', conventional: 'Depends on the selected platform' },
      { label: 'Best fit', wrenlore: 'Governed team knowledge', conventional: 'Broad multi-system retrieval' },
    ],
    limitations: ['WrenLore is not a general-purpose connector platform for every file store and SaaS product.', 'AI quality depends on current, well-structured source pages and a suitable embedding/model configuration.', 'Remote model providers still receive the data sent to them; self-hosting the wiki alone does not change that.', 'Provider and model routing currently requires operator configuration and is not yet a fully polished admin workflow.'],
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
    deepDive: [
      {
        eyebrow: 'Connection model', title: 'One token per agent connection, owned by a real user',
        body: [
          'A workspace administrator first enables MCP agent connections. A user then creates a named connection, chooses read-only or read/write access, optionally limits it to selected spaces, sets an expiry and copies the token once. WrenLore stores a hash of the bearer secret rather than the token itself.',
          'The token never grants more access than its owner currently has. Workspace membership, account status, page restrictions, token scope, expiry and revocation are checked on every call. Use a separate token for each client so one connection can be revoked without breaking the others.'
        ],
        bullets: ['Read-only or read/write scope', 'Optional space restrictions and expiry', 'Hashed token storage and independent revocation', 'Current user and page permissions checked on every call'],
        link: { label: 'Read the MCP V1 connection guide', href: 'https://github.com/wrenlore/wrenlore/blob/master/docs/MCP.md' }
      },
      {
        eyebrow: 'What agents can do', title: 'Ten bounded tools, with revision-safe writes',
        body: [
          'The MCP server exposes context, space and page listing, search, page reads, page creation and edits, comments, and page history. Read-only tokens do not discover write tools. Write operations require the page’s expected revision and a stable request key, so a retry cannot silently apply the same edit twice.',
          'Edits and comments are attributed to the owning user and the named agent connection. V1 deliberately excludes page deletion, moves, sharing, permission changes, history restoration and arbitrary attachment uploads. Those omissions keep the first agent surface narrow enough to reason about.'
        ],
        bullets: ['Permission-filtered search and bounded Markdown reads', 'Create and edit pages with revision-conflict protection', 'Read and add comments; inspect page history', 'No delete, share, permission or arbitrary upload tools in V1']
      }
    ],
    comparisonTitle: 'Governed MCP access versus a shared API key',
    comparisonLabel: 'Shared admin integration',
    comparison: [
      { label: 'Identity', wrenlore: 'Named user, via named agent', conventional: 'Shared service or administrator identity' },
      { label: 'Scope', wrenlore: 'User permissions plus token mode and spaces', conventional: 'Often broad workspace access' },
      { label: 'Revocation', wrenlore: 'Per connection', conventional: 'May interrupt every client using the key' },
      { label: 'Retries', wrenlore: 'Revision checks and idempotent request keys', conventional: 'Integration-specific' },
      { label: 'Write surface', wrenlore: 'Explicit bounded tools', conventional: 'Often the full application API' },
    ],
    limitations: ['MCP V1 uses bearer-token authentication, not an OAuth authorization server.', 'Clients that require OAuth and cannot send configured authorization headers are not currently supported.', 'V1 does not expose page deletion, moves, sharing, permission changes or arbitrary file uploads.', 'A client must support remote Streamable HTTP MCP and secure header-based token configuration.'],
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
    deepDive: [
      {
        eyebrow: 'Deployment shape', title: 'An ordinary stack your operations team can inspect',
        body: [
          'The documented starting point uses Docker Compose to run the WrenLore application, PostgreSQL with pgvector, and Redis. The operator supplies environment configuration, durable volumes, a reverse proxy and TLS. There is no mandatory WrenLore-hosted account or control plane in the request path.',
          'That keeps the boundary understandable, but it does not remove operational work. Production teams still need image pinning, secret handling, database backups, restore tests, monitoring, log retention, update windows and capacity planning. WrenLore publishes software; it does not operate the host for you.'
        ],
        bullets: ['Docker Compose is the documented baseline', 'PostgreSQL stores application data and pgvector-backed AI retrieval', 'Redis supports application and collaborative runtime work', 'Reverse proxy, TLS, backups and monitoring stay under operator control'],
        link: { label: 'Inspect the deployment runbook', href: 'https://github.com/wrenlore/wrenlore/blob/master/README-deploy.md' }
      },
      {
        eyebrow: 'Isolation and integrations', title: 'Decide which services may cross the network boundary',
        body: [
          'Core wiki functions do not require an external model provider. AI features depend on the model and provider configuration chosen by the operator. A remote provider receives the content sent to it, so teams with strict boundaries should use an approved endpoint, a local model path, or leave AI features disabled.',
          'SAML identity also depends on the chosen identity provider, and outbound email depends on the configured mail service. A disconnected deployment therefore needs more than a firewall rule: images, updates, identity, mail, model access and vulnerability information all need an operator-defined transfer and maintenance process.'
        ],
        bullets: ['Core authoring and search can run without an AI provider', 'Remote model use can move selected content outside the deployment', 'Identity and mail integrations need deliberate network policy', 'Disconnected environments need a tested update and artifact-transfer procedure']
      }
    ],
    comparisonTitle: 'On-premise WrenLore versus a managed knowledge SaaS',
    comparisonLabel: 'Managed SaaS wiki',
    comparison: [
      { label: 'Data location', wrenlore: 'Operator-selected host, database and storage', conventional: 'Vendor-selected service boundary and regions' },
      { label: 'Network policy', wrenlore: 'Your ingress, egress and private routing', conventional: 'Vendor service plus available controls' },
      { label: 'Upgrades', wrenlore: 'Scheduled and tested by your team', conventional: 'Rolled out by the vendor' },
      { label: 'Backups', wrenlore: 'Your retention and restore process', conventional: 'Vendor platform policy and export options' },
      { label: 'AI providers', wrenlore: 'Configured by the operator', conventional: 'Defined by the service and plan' },
      { label: 'Support', wrenlore: 'Public project; no commercial SLA today', conventional: 'Depends on vendor contract' },
    ],
    limitations: ['WrenLore does not provide a managed control plane, hosted backups or a commercial SLA.', 'The operator is responsible for host hardening, TLS, secrets, monitoring, patching and recovery tests.', 'A fully disconnected deployment needs an explicit process for images, releases and security updates.', 'Using remote AI, identity or mail providers can still send data or metadata outside the local network.'],
    questions: [
      { question: 'Can WrenLore run in an isolated network?', answer: 'The application can be deployed without a mandatory WrenLore cloud service. Images, releases, identity, email, model access and security updates still need an operator-defined process. Treat a true air-gap as an architecture and operations exercise, not a product checkbox.' },
      { question: 'What database does WrenLore use?', answer: 'WrenLore uses PostgreSQL. Deployment documentation covers the expected application and database configuration.' }, { question: 'Is Kubernetes required?', answer: 'No. Docker Compose is the documented starting point.' },
      { question: 'Can AI stay inside our network?', answer: 'That depends on the provider configuration. Operators can choose an approved local or remote provider, and core wiki functions do not require AI. Any remote provider receives the content sent to it.' },
      { question: 'Who performs backups and upgrades?', answer: 'The deployment operator does. WrenLore provides public source, releases and deployment documentation, but it does not currently provide a managed operations service.' },
    ],
  },
] as const;
