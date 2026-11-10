<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const organizations = [
  {
    id: 1,
    name: 'OSIS',
    image: '/assets/organization/osis.png',
    position: 'VICE CHAIRMAN',
    period: 'SMKN 20 | 2024 - 2026',
    skills: ['LEADERSHIP', 'COMMUNICATION', 'EVENT MANAGEMENT'],
  },
  {
    id: 2,
    name: 'PRABU',
    image: '/assets/organization/prabu.jpg',
    position: 'PRABU MEMBER',
    period: 'SMKN 20 | 2024 - 2027',
    skills: ['LEADERSHIP', 'COMMUNICATION', 'SOCIAL AWARENESS'],
  },
]

const experiences = [
  {
    id: 1,
    number: '01',
    year: '2024 – 2026',
    category: 'LEADERSHIP',
    title: 'Vice Chairman of OSIS',
    organization: 'SMKN 20 Jakarta',
    description:
      'Developed leadership, communication, and teamwork skills while supporting student council activities, coordinating programs, and contributing to a positive school environment.',
    tags: ['Leadership', 'Communication', 'Teamwork'],
    type: 'organization',
  },
  {
    id: 2,
    number: '02',
    year: '2025',
    category: 'EVENT MANAGEMENT',
    title: 'MPLS Event Coordinator',
    organization: 'SMKN 20 Jakarta',
    description:
      'Led the preparation and coordination of the student orientation program, worked with the committee, and helped ensure that activities ran smoothly.',
    tags: ['Event Planning', 'Coordination', 'Teamwork'],
    type: 'organization',
  },
  {
    id: 3,
    number: '03',
    year: '2024 – 2027',
    category: 'ORGANIZATION',
    title: 'PRABU Member',
    organization: 'SMKN 20 Jakarta',
    description:
      'Participated in student activities focused on public order awareness, discipline, social responsibility, and creating a positive environment in the community.',
    tags: ['Discipline', 'Social Awareness', 'Communication'],
    type: 'organization',
  },
  {
    id: 4,
    number: '04',
    year: '2026',
    category: 'WEB DEVELOPMENT',
    title: 'E-Vote System',
    organization: 'Student Council Election Project',
    description:
      'Collaborated on developing a web-based electronic voting system for student council elections, featuring voter management, candidate information, and election administration.',
    tags: ['Vue.js', 'Laravel', 'MySQL'],
    type: 'project',
  },
  {
    id: 5,
    number: '05',
    year: '2026',
    category: 'FULL-STACK DEVELOPMENT',
    title: 'OMS – Lenna.ai',
    organization: 'Overtime Management System',
    description:
      'Collaborated on building an overtime management platform with employee submissions, product manager reviews, and HR approval workflows.',
    tags: ['Vue.js', 'Laravel', 'MySQL', 'REST API'],
    type: 'project',
  },
  {
    id: 6,
    number: '06',
    year: '2026',
    category: 'SOFTWARE DEVELOPMENT',
    title: 'Event Management System',
    organization: 'Team Development Project',
    description:
      'Worked on a digital event management platform designed to simplify event creation, participant registration, announcements, and certificate management.',
    tags: ['UI/UX Design', 'Web Development', 'Teamwork'],
    type: 'project',
  },
]

const projects = [
  {
    id: 1,
    number: '01',
    title: 'OMS – Lenna.AI',
    category: 'WEB DEVELOPMENT',
    description:
      'An overtime management system designed to simplify employee overtime submissions, review processes, and HR approval workflows.',
    technologies: ['Vue.js', 'Laravel', 'MySQL'],
    image: '/assets/Projects/oms.png',
    type: 'FULL-STACK DEVELOPMENT',
    link: 'https://github.com/afganramadhan1798-netizen/oms-backend',
  },
  {
    id: 2,
    number: '02',
    title: 'E-Vote System',
    category: 'WEB DEVELOPMENT',
    description:
      'A digital voting platform developed to support student council elections with voter management and election administration features.',
    technologies: ['Vue.js', 'Laravel', 'MySQL'],
    image: '/assets/Projects/e-vote.png',
    type: 'FULL-STACK DEVELOPMENT',
    link: 'https://github.com/afganramadhan1798-netizen/e-vote-backend',
  },
  {
    id: 3,
    number: '03',
    title: 'Event Management System',
    category: 'SYSTEM DEVELOPMENT',
    description:
      'An event management platform designed to simplify event creation, participant registration, announcements, and certificate management.',
    technologies: ['UI/UX Design', 'Laravel', 'MySQL'],
    image: '/assets/Projects/eventty.png',
    type: 'TEAM PROJECT',
    link: 'https://github.com/fathirizkiansyah8-lgtm/eventty',
  },
  {
    id: 4,
    number: '04',
    title: 'Gans Store',
    category: 'E-COMMERCE',
    description:
      'A web-based online store featuring product browsing, product details, wishlist, shopping cart, and checkout functionality.',
    technologies: ['Vue.js', 'Laravel', 'MySQL'],
    image: '/assets/Projects/gans_store.png',
    type: 'FULL-STACK DEVELOPMENT',
    link: 'https://github.com/afganramadhan1798-netizen/e-commerce-gans_store',
  },
]

function openOrganizationDetail(organization) {
  router.push(organization.id === 1 ? '/organization/osis' : '/organization/prabu')
}
</script>

<template>
  <div class="portfolio">
    <!-- NAVBAR -->
    <header class="navbar">
      <div class="availability">Available for new project</div>

      <nav class="nav-menu">
        <!-- <a href="#home" class="contact-button">Home</a> -->
        <a href="#organization" class="contact-button">Organization</a>
        <a href="#experience" class="contact-button">Experience</a>
        <a href="#projects" class="contact-button">Projects</a>
        <a href="#contact" class="contact-button">Contact</a>
      </nav>
    </header>

    <!-- HERO -->
    <main id="home" class="hero">
      <div class="hero-name">
        <span class="name-solid">AFGAN</span>
        <span class="name-outline">RAMADHAN</span>
      </div>

      <div class="hero-description">
        <h1>Junior Web Developer</h1>
        <div class="description-line"></div>

        <p>
          I am a dedicated Software Engineering student at SMKN 20 Jakarta with a strong passion for
          technology, leadership, and innovation.
        </p>
      </div>

      <div class="profile-container">
        <img src="/assets/Image%20Figma/profile.png" alt="Afgan Ramadhan" class="profile-image" />
      </div>

      <div class="social-container">
        <a
          href="https://github.com/afganramadhan1798-netizen"
          target="_blank"
          rel="noopener noreferrer"
          class="social github"
        >
          <span>Github</span
          ><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
            <path d="M0 0h24v24H0z" fill="none" />
            <g fill="none">
              <g clip-path="url(#SVGXv8lpc2Y)">
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12"
                  clip-rule="evenodd"
                />
              </g>
              <defs>
                <clipPath id="SVGXv8lpc2Y">
                  <path fill="#fff" d="M0 0h24v24H0z" />
                </clipPath>
              </defs>
            </g>
          </svg>
        </a>

        <div class="social-row">
          <a
            href="https://www.instagram.com/afgannrn/"
            target="_blank"
            rel="noopener noreferrer"
            class="social instagram"
          >
            <span> Instagram</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M7.465 1.066C8.638 1.012 9.012 1 12 1s3.362.013 4.534.066s1.972.24 2.672.511c.733.277 1.398.71 1.948 1.27c.56.549.992 1.213 1.268 1.947c.272.7.458 1.5.512 2.67C22.988 8.639 23 9.013 23 12s-.013 3.362-.066 4.535c-.053 1.17-.24 1.97-.512 2.67a5.4 5.4 0 0 1-1.268 1.949c-.55.56-1.215.992-1.948 1.268c-.7.272-1.5.458-2.67.512c-1.174.054-1.548.066-4.536.066s-3.362-.013-4.535-.066c-1.17-.053-1.97-.24-2.67-.512a5.4 5.4 0 0 1-1.949-1.268a5.4 5.4 0 0 1-1.269-1.948c-.271-.7-.457-1.5-.511-2.67C1.012 15.361 1 14.987 1 12s.013-3.362.066-4.534s.24-1.972.511-2.672a5.4 5.4 0 0 1 1.27-1.948a5.4 5.4 0 0 1 1.947-1.269c.7-.271 1.5-.457 2.67-.511m8.98 1.98c-1.16-.053-1.508-.064-4.445-.064s-3.285.011-4.445.064c-1.073.049-1.655.228-2.043.379c-.513.2-.88.437-1.265.822a3.4 3.4 0 0 0-.822 1.265c-.151.388-.33.97-.379 2.043c-.053 1.16-.064 1.508-.064 4.445s.011 3.285.064 4.445c.049 1.073.228 1.655.379 2.043c.176.477.457.91.822 1.265c.355.365.788.646 1.265.822c.388.151.97.33 2.043.379c1.16.053 1.507.064 4.445.064s3.285-.011 4.445-.064c1.073-.049 1.655-.228 2.043-.379c.513-.2.88-.437 1.265-.822c.365-.355.646-.788.822-1.265c.151-.388.33-.97.379-2.043c.053-1.16.064-1.508.064-4.445s-.011-3.285-.064-4.445c-.049-1.073-.228-1.655-.379-2.043c-.2-.513-.437-.88-.822-1.265a3.4 3.4 0 0 0-1.265-.822c-.388-.151-.97-.33-2.043-.379m-5.85 12.345a3.669 3.669 0 0 0 4-5.986a3.67 3.67 0 1 0-4 5.986M8.002 8.002a5.654 5.654 0 1 1 7.996 7.996a5.654 5.654 0 0 1-7.996-7.996m10.906-.814a1.337 1.337 0 1 0-1.89-1.89a1.337 1.337 0 0 0 1.89 1.89"
                clip-rule="evenodd"
              />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/afgan-ramadhan-743a5941a/"
            target="_blank"
            rel="noopener noreferrer"
            class="social linkedin"
          >
            <span>Linkedin</span
            ><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M1 2.838A1.84 1.84 0 0 1 2.838 1H21.16A1.837 1.837 0 0 1 23 2.838V21.16A1.84 1.84 0 0 1 21.161 23H2.838A1.84 1.84 0 0 1 1 21.161zm8.708 6.55h2.979v1.496c.43-.86 1.53-1.634 3.183-1.634c3.169 0 3.92 1.713 3.92 4.856v5.822h-3.207v-5.106c0-1.79-.43-2.8-1.522-2.8c-1.515 0-2.145 1.089-2.145 2.8v5.106H9.708zm-5.5 10.403h3.208V9.25H4.208zM7.875 5.812a2.063 2.063 0 1 1-4.125 0a2.063 2.063 0 0 1 4.125 0"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </main>

    <!-- ORGANIZATION -->
    <section id="organization" class="organization-section">
      <div class="organization-heading">
        <h2>ORGANIZATION</h2>
        <h3>LEADERSHIP & COLLABORATION</h3>
        <p>
          Throughout my school journey, I've been actively involved in various organizations that
          helped me grow as a leader, communicator, and team player.
        </p>
      </div>

      <div class="organization-container">
        <article
          v-for="organization in organizations"
          :key="organization.id"
          class="organization-card"
        >
          <div class="organization-card-top">
            <h4>{{ organization.name }}</h4>

            <div class="organization-logo">
              <img :src="organization.image" :alt="organization.name + ' Logo'" />
            </div>

            <h5>{{ organization.position }}</h5>

            <span class="organization-period">
              {{ organization.period }}
            </span>
          </div>

          <div class="organization-card-bottom">
            <ul>
              <li v-for="skill in organization.skills" :key="skill">
                {{ skill }}
              </li>
            </ul>

            <button class="organization-details" @click="openOrganizationDetail(organization)">
              DETAILS
            </button>
          </div>
        </article>
      </div>
    </section>

    <!-- EXPERIENCE -->
    <section id="experience" class="experience-section">
      <div class="experience-heading">
        <p class="experience-label">MY JOURNEY SO FAR</p>
        <h2><span>EXPERIENCE</span></h2>
        <p class="experience-description">
          A collection of experiences that shaped my leadership, technical abilities, and personal
          growth.
        </p>
      </div>

      <div class="experience-list">
        <article
          v-for="experience in experiences"
          :key="experience.id"
          class="experience-card"
          :class="experience.type"
        >
          <div class="experience-card-number">
            {{ experience.number }}
          </div>

          <div class="experience-card-content">
            <div class="experience-card-meta">
              <span class="experience-category">
                {{ experience.category }}
              </span>

              <span class="experience-year">
                {{ experience.year }}
              </span>
            </div>

            <h3>{{ experience.title }}</h3>

            <h4>{{ experience.organization }}</h4>

            <p class="experience-card-description">
              {{ experience.description }}
            </p>

            <div class="experience-tags">
              <span v-for="tag in experience.tags" :key="tag">
                {{ tag }}
              </span>
            </div>
          </div>

          <div class="experience-card-type">
            <span v-if="experience.type === 'organization'"> ORGANIZATION </span>
            <span v-else> PROJECT </span>
          </div>
        </article>
      </div>

      <div class="experience-footer">
        <p>EVERY EXPERIENCE IS A STEP FORWARD.</p>
      </div>
    </section>

    <!-- PROJECTS -->
    <section id="projects" class="projects-section">
      <div class="projects-heading">
        <p class="projects-label">SELECTED WORKS</p>

        <h2><span>MY PROJECTS</span></h2>

        <p class="projects-description">
          A collection of projects where I explore ideas, develop solutions, and turn concepts into
          digital experiences.
        </p>
      </div>

      <div class="projects-grid">
        <article v-for="project in projects" :key="project.id" class="project-card">
          <div class="project-image">
            <img :src="project.image" :alt="project.title" />

            <span class="project-number">
              {{ project.number }}
            </span>
          </div>

          <div class="project-content">
            <div class="project-meta">
              <span>{{ project.category }}</span>
              <span>{{ project.type }}</span>
            </div>

            <h3>{{ project.title }}</h3>

            <p class="project-description">
              {{ project.description }}
            </p>

            <div class="project-technologies">
              <span v-for="technology in project.technologies" :key="technology">
                {{ technology }}
              </span>
            </div>

            <a
              v-if="project.link"
              :href="project.link"
              target="_blank"
              rel="noopener noreferrer"
              class="project-details-button"
            >
              VIEW PROJECT
              <span
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <g fill="none">
                    <g clip-path="url(#SVGXv8lpc2Y)">
                      <path
                        fill="currentColor"
                        fill-rule="evenodd"
                        d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12"
                        clip-rule="evenodd"
                      />
                    </g>
                    <defs>
                      <clipPath id="SVGXv8lpc2Y">
                        <path fill="#fff" d="M0 0h24v24H0z" />
                      </clipPath>
                    </defs>
                  </g></svg
              ></span>
            </a>

            <span v-else class="project-details-button project-link-disabled">
              COMING SOON
              <span>↗</span>
            </span>
          </div>
        </article>
      </div>

      <div class="projects-footer">
        <p>DESIGNED WITH PURPOSE. BUILT WITH PASSION.</p>
      </div>
    </section>

    <!-- CONTACT & FOOTER -->
    <section id="contact" class="contact-section">
      <div class="contact-container">
        <div class="contact-top">
          <p class="contact-label">HAVE A PROJECT IN MIND?</p>

          <h2>
            LET'S WORK<br />
            TOGETHER<span></span>
          </h2>

          <p class="contact-description">
            I'm always open to new opportunities, collaborations, and meaningful connections. Feel
            free to reach out!
          </p>

          <a href="mailto:afganramadhan1798@gmail.com" class="contact-email-button">
            GET IN TOUCH
            <span>↗</span>
          </a>
        </div>

        <div class="contact-information">
          <div class="contact-info-item">
            <p>EMAIL</p>
            <a href="mailto:afganramadhan1798@gmail.com"> afganramadhan1798@gmail.com </a>
          </div>

          <div class="contact-info-item">
            <p>LOCATION</p>
            <span>Jakarta, Indonesia</span>
          </div>

          <div class="contact-info-item">
            <p>SOCIAL MEDIA</p>
            <div class="contact-social-links">
              <a
                href="https://github.com/afganramadhan1798-netizen"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub 
              </a>

              <a
                href="https://www.instagram.com/afgannrn/"
                target="_blank"
                rel="noopener noreferrer"
              >
              Instagram 
              </a> 

              <a
                href="https://www.linkedin.com/in/afgan-ramadhan-743a5941a/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn 
              </a>
            </div>
          </div>
        </div>
      </div>

      <footer class="portfolio-footer">
        <div class="footer-name">AFGAN RAMADHAN<span></span></div>

        <p>DESIGNED & DEVELOPED BY AFGAN RAMADHAN</p>

        <p class="footer-copyright">© 2026 AFGAN RAMADHAN. ALL RIGHTS RESERVED.</p>

        <a href="#home" class="back-to-top"> BACK TO TOP ↑ </a>
      </footer>
    </section>
  </div>
</template>
