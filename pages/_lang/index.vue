<template>
  <div class="index">
    <!-- Education -->
    <section class="section">
      <header class="section-head">
        <h1 class="is-title">{{ $t("index.education.title") }}</h1>
      </header>
      <section class="subsection">
        <header class="section-head">
          <h1 class="is-title">
            <a href="http://www.sz-ybbs.ac.at/" target="_blank">{{ $t("index.education.school.title") }} <i class="fas fa-external-link-square-alt"></i></a>
          </h1>
          <div class="is-subtitle">{{ $t("index.education.school.subtitle") }}</div>
        </header>
        <div class="section-body">
          {{ $t("index.education.school.text") }}
        </div>
      </section>
    </section>

    <!-- Summer Internships -->
    <section class="section">
      <header class="section-head">
        <h1 class="is-title">{{ $t("index.internships.title") }}</h1>
      </header>
      <!-- A1 -->
      <section class="subsection">
        <header class="section-head">
          <h1 class="is-title">{{ $t("index.internships.A1.title") }}</h1>
          <div class="is-subtitle">{{ $t("index.internships.A1.subtitle") }}</div>
        </header>
        <div class="section-body">
          <ul>
            <li v-for="(li, index) in $t('index.internships.A1.ul')" :key="'li-' + index">{{li}}</li>
          </ul>
        </div>
      </section>

      <!-- Quarzwerke Melk -->
      <section class="subsection">
        <header class="section-head">
          <h1 class="is-title">{{ $t("index.internships.Quarzwerke.title") }}</h1>
          <div class="is-subtitle">{{ $t("index.internships.Quarzwerke.subtitle") }}</div>
        </header>
      </section>
    </section>

    <!-- Experience -->
    <section class="section">
      <header class="section-head">
        <h1 class="is-title">{{ $t("index.experience.title") }}</h1>
      </header>
      <section class="subsection">
        <header class="section-head">
          <h1 class="is-title">
            <a href="https://www.it-center.at/" target="_blank">{{ $t("index.experience.it-center.title") }} <i class="fas fa-external-link-square-alt"></i></a>
          </h1>
          <div class="is-subtitle">{{ $t("index.experience.it-center.subtitle") }}</div>
        </header>
        <div class="section-body">
          {{ $t("index.experience.it-center.text") }}
          <a href="https://www.hellofriends.at/" target="_blank">hellofriends.at <i class="fas fa-external-link-square-alt"></i></a>.
          <br><br>

          <div v-if="$i18n.locale === 'de'">
            Weitere Details hierzu findest du unter meinen 
            <nuxt-link :to="$i18n.path('projects')">Projekten</nuxt-link>.
          </div>
          <div v-else>
            More information about this can be found under my 
            <nuxt-link :to="$i18n.path('projects')">Projects</nuxt-link>.
          </div>
        </div>
      </section>
    </section>


    <!-- IT Knowledge -->
    <section class="section">
      <header class="section-head">
        <h1 class="is-title">{{ $t("index.knowledge.title") }}</h1>
      </header>

      {{ $t("index.knowledge.grading") }} <br><br>

      <!-- Programming -->
      <section class="subsection">
        <header class="section-head">
          <h1 class="is-title">{{ $t("index.knowledge.programming.title") }}</h1>
        </header>
        <div class="section-body">
          <ul>
            <li v-for="(li, index) in $t('index.knowledge.programming.ul')" :key="'li-' + index">{{li}}</li>
          </ul>
        </div>
      </section>

      <!-- Web Development -->
      <section class="subsection">
        <header class="section-head">
          <h1 class="is-title">{{ $t("index.knowledge.webdev.title") }}</h1>
        </header>
        <div class="section-body">
          <ul>
            <li v-for="(li, index) in $t('index.knowledge.webdev.ul')" :key="'li-' + index">{{li}}</li>
          </ul>
        </div>
      </section>

      <!-- Other -->
      <section class="subsection">
        <header class="section-head">
          <h1 class="is-title">{{ $t("index.knowledge.other.title") }}</h1>
        </header>
        <div class="section-body">
          <ul>
            <li v-for="(li, index) in $t('index.knowledge.other.ul')" :key="'li-' + index">{{li}}</li>
          </ul>
        </div>
      </section>
    </section>


    <!-- Language -->
    <section class="section">
      <header class="section-head">
        <h1 class="is-title">{{ $t("index.language.title") }}</h1>
      </header>
      <div class="section-body">
        {{ $t("index.language.text") }}
      </div>
    </section>

    <!-- Hobbies -->
    <section class="section">
      <header class="section-head">
        <h1 class="is-title">{{ $t("index.hobbies.title") }}</h1>
      </header>
      <div class="section-body">
        {{ $t("index.hobbies.text") }}
      </div>
    </section>
  </div>
</template>