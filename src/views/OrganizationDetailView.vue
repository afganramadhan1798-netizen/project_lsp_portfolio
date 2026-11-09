<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  organizationId: {
    type: Number,
    required: true,
  },
})

const router = useRouter()

const organizations = [
  {
    id: 1,
    name: 'OSIS',
    image: '/assets/organization/osis.png',
    position: 'VICE CHAIRMAN',
    period: 'SMKN 20 | 2024 - 2026',
    description:
      'My journey in OSIS has taught me leadership, responsibility, communication, and teamwork through various school activities and organizational experiences.',
    timeline: [
      {
        number: '01',
        year: '2024',
        subtitle: 'THE BEGINNING',
        title: 'Starting My Leadership Journey',
        description:
          'Wakil Ketua OSIS — Kelas X Perjalanan saya di OSIS dimulai dengan kesempatan untuk menjadi Wakil Ketua OSIS. Dari pengalaman ini, saya mulai belajar memahami tanggung jawab organisasi, bekerja sama dengan pengurus, dan membantu menjalankan berbagai program kerja.',
        side: 'left',
        images: [
          {
            src: '/assets/organization/PASLON 1.png',
            caption: 'My First OSIS Experience',
            type: 'portrait',
          },
        ],
      },
      {
        number: '02',
        year: '2025',
        subtitle: 'GROWTH & RESPONSIBILITY',
        title: 'Taking Greater Responsibility',
        description:
          'Wakil Ketua OSIS — Kelas XI Memasuki kelas XI, saya mendapatkan pengalaman yang lebih besar dalam mengoordinasikan kegiatan dan mendukung jalannya organisasi. Saya belajar bahwa kepemimpinan bukan hanya tentang memberikan arahan, tetapi juga mendengarkan, memahami, dan bekerja bersama tim.',
        side: 'right',
        images: [
          {
            src: '/assets/organization/politech1.JPG',
            caption: 'POLITECH 2025',
            type: 'landscape',
          },
        ],
      },
      {
        number: '03',
        year: '2025',
        subtitle: 'A NEW CHALLENGE',
        title: 'Running for OSIS Chairman',
        description:
          'Calon Ketua OSIS — Pasangan Calon 3 Saya mendapatkan kesempatan untuk melangkah lebih jauh dengan mengikuti pemilihan Ketua OSIS bersama Ahmad Farhan. Pengalaman kampanye dan debat kandidat menjadi kesempatan untuk menyampaikan gagasan, membangun kepercayaan, serta belajar menghadapi tantangan baru.',
        side: 'left',
        images: [
          {
            src: '/assets/organization/POSTER PASLON 3 (10).png',
            caption: 'OSIS Leader Candidate',
            type: 'portrait',
          },
        ],
      },
      {
        number: '04',
        year: '2026',
        subtitle: 'LESSONS & MEMORIES',
        title: 'Growing Through Experience',
        description:
          'Every responsibility and challenge helped me develop confidence, leadership, communication, and a better understanding of working with others.',
        side: 'right',
        images: [
          {
            src: '/assets/organization/politech2.JPG',
            caption: 'POLITECH 2025',
            type: 'landscape',
          },
        ],
      },
    ],
  },

  {
    id: 2,
    name: 'PRABU JAKARTA',
    image: '/assets/organization/prabu.jpg',
    position: 'PRABU MEMBER',
    period: 'SMKN 20 | 2024 - 2027',
    description:
      'Being part of PRABU gave me opportunities to develop my awareness, communication, and contribution to creating a more orderly school and community environment.',
    timeline: [
      {
        number: '01',
        year: '2024',
        subtitle: 'THE BEGINNING',
        title: 'An Active Student',
        description:
          'My involvement in school activities encouraged me to explore new experiences and take part in organizations beyond the classroom.',
        side: 'left',
        images: [
          {
            src: '/assets/organization/mpls.JPG',
            caption: 'MPLS 2024/2025',
            type: 'landscape',
          },
        ],
      },
      {
        number: '02',
        year: '2025',
        subtitle: 'A NEW EXPERIENCE',
        title: 'Joining PRABU Jakarta',
        description:
          'Joined PRABU as part of the Pelajar Duta Trantibum initiative, learning about public order, discipline, and social awareness.',
        side: 'right',
        images: [
          {
            src: '/assets/organization/prabu2.jpeg',
            caption: 'New Friends From Another School',
            type: 'landscape',
          },
        ],
      },
      {
        number: '03',
        year: '2025',
        subtitle: 'LEARNING & DEVELOPMENT',
        title: 'Building Awareness',
        description:
          'Developed a better understanding of public order and the importance of students contributing positively to their surroundings.',
        side: 'left',
        images: [
          {
            src: '/assets/organization/prabu3.jpeg',
            caption: 'Jambore Prabu 2025',
            type: 'landscape',
          },
        ],
      },
      {
        number: '04',
        year: '2025',
        subtitle: 'MEMORIES & REFLECTION',
        title: 'Growing Together',
        description:
          'Gained meaningful experiences, new connections, and valuable lessons through activities and collaboration with fellow members.',
        side: 'right',
        images: [
          {
            src: '/assets/organization/prabu5.jpg',
            caption: 'Pengukuhan Prabu Jakarta',
            type: 'landscape',
          },
        ],
      },
    ],
  },
]

const selectedOrganization = computed(() => {
  return organizations.find((organization) => organization.id === props.organizationId)
})

function goBack() {
  router.push('/#organization')
}
</script>

<template>
  <main v-if="selectedOrganization" class="organization-detail-page">
    <!-- BACK BUTTON -->
    <button class="organization-back-button" @click="goBack">← BACK TO ORGANIZATION</button>

    <!-- DETAIL HERO -->
    <div class="organization-detail-hero">
      <div class="organization-detail-heading">
        <p class="organization-detail-label">
          ORGANIZATION EXPERIENCE / 0{{ selectedOrganization.id }}
        </p>

        <h2>{{ selectedOrganization.name }}</h2>

        <h3>{{ selectedOrganization.position }}</h3>

        <span>{{ selectedOrganization.period }}</span>

        <p class="organization-detail-description">
          {{ selectedOrganization.description }}
        </p>
      </div>

      <div class="organization-detail-logo">
        <img :src="selectedOrganization.image" :alt="selectedOrganization.name" />
      </div>
    </div>

    <!-- TIMELINE HEADING -->
    <div class="organization-timeline-heading">
      <p>MY EXPERIENCE</p>

      <h2>
        The Journey
        <span>So Far.</span>
      </h2>

      <p>
        Every experience has its own story. Here's how my journey developed throughout the
        organization.
      </p>
    </div>

    <!-- TIMELINE -->
    <div class="organization-timeline">
      <div
        v-for="item in selectedOrganization.timeline"
        :key="item.number || item.title"
        class="organization-timeline-item"
        :class="item.side"
      >
        <div class="timeline-content">
          <span class="timeline-number">
            {{ item.number }}
          </span>

          <span class="timeline-year">
            {{ item.year }}
          </span>

          <p class="timeline-subtitle">
            {{ item.subtitle }}
          </p>

          <h3>{{ item.title }}</h3>

          <p class="timeline-description">
            {{ item.description }}
          </p>
        </div>

        <div class="timeline-image-wrapper">
          <div v-for="(image, index) in item.images" :key="index" class="timeline-image-card">
            <h4 v-if="image.caption">
              {{ image.caption }}
            </h4>

            <div class="timeline-image" :class="image.type">
              <img :src="image.src" :alt="image.caption || item.title" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>

  <main v-else class="organization-detail-page">
    <h2>Organization not found</h2>
    <button class="organization-back-button" @click="goBack">← BACK TO ORGANIZATION</button>
  </main>
</template>
