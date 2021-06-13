const projects = [
  {
    name: "single-price-grid-component",
    githubRepository:
      "https://github.com/rodrigorvix/challenges-frontendmentor/tree/main/single-price-grid-component",
  },
  {
    name: "four-card-feature-section",
    githubRepository:
      "https://github.com/rodrigorvix/challenges-frontendmentor/tree/main/four-card-feature-section",
  },
  {
    name: "huddle-landing-page",
    githubRepository:
      "https://github.com/rodrigorvix/challenges-frontendmentor/tree/main/huddle-landing-page-with-single-introductory-section",
  },
  {
    name: "base-apparel-coming-soon",
    githubRepository:
      "https://github.com/rodrigorvix/challenges-frontendmentor/tree/main/base-apparel-coming-soon",
  },
  {
    name: "intro-component-with-signup-form",
    githubRepository:
      "https://github.com/rodrigorvix/challenges-frontendmentor/tree/main/intro-component-with-signup-form",
  },
  {
    name: "pricing-component-with-toggle",
    githubRepository:
      "https://github.com/rodrigorvix/challenges-frontendmentor/tree/main/pricing-component-with-toggle",
  },
];

const listProjects = document.querySelector("[data-project]");

projects.forEach(({ name, githubRepository }, i) => {
  const listItem = document.createElement("li");

  listItem.innerHTML = `
		<a href="/challenges-frontendmentor/${name}/" class=project-name target="_blank"> 
			<img src="./${name}/design/desktop-design.jpg" alt="${name}" />
			<p>${i + 1}. ${formatProjectName(name)}</p>
		</a>

		<div class="links-container">
			<a href="/challenges-frontendmentor/${name}/" class="view" target="_blank">
				<i class="far fa-eye"></i>
			</a>
			<a href="${githubRepository}" class="github" target="_blank">
        <i class="fab fa-github"></i>
			</a>
		</div>
	`;

  listProjects.appendChild(listItem);
});

function formatProjectName(name) {
  return name
    .split("-")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}
