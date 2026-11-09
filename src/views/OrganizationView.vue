
<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const organizations = [
  {
    id: 1,
    name: 'OSIS',
    image: '/assets/Image%20Figma/osis.png',
    position: 'VICE CHAIRMAN',
    period: 'SMKN 20 | 2024 - 2026',
    skills: ['LEADERSHIP', 'COMMUNICATION', 'EVENT MANAGEMENT'],
  },
  {
    id: 2,
    name: 'PRABU',
    image: '/assets/Image%20Figma/prabu.png',
    position: 'PRABU MEMBER',
    period: 'SMKN 20 | 2024 - 2027',
    skills: ['LEADERSHIP', 'COMMUNICATION', 'SOCIAL AWARENESS'],
  },
]

function openOrganizationDetail(organization) {
  if (organization.id === 1) {
    router.push('/organization/osis')
  } else if (organization.id === 2) {
    router.push('/organization/prabu')
  }
}
</script>

<template>
  <section id="organization" class="organization-section">
    <div class="organization-heading">
      <h2>ORGANIZATION</h2>

      <h3>LEADERSHIP & COLLABORATION</h3>

      <p>
        Throughout my school journey, I've been actively involved in various
        organizations that helped me grow as a leader, communicator, and team player.
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

          <button
            class="organization-details"
            @click="openOrganizationDetail(organization)"
          >
            DETAILS
          </button>
        </div>
      </article>
    </div>
  </section>
</template>
