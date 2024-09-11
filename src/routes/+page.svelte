<script>
  import { onMount } from 'svelte'
  import { base } from '$app/paths';
  import emailjs from 'emailjs-com'
  import "../main.css"

  let name = ''
  let email = ''
  let message = ''
  let isSubmitted = false
  let loading = false
  let formElement

  async function handleSubmit(event) {
    event.preventDefault()

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
      reply_to: email
    }

    loading = true

    try {
      const response = await emailjs.send(
        'service_2cccw0f',
        'template_hirju86',
        templateParams,
        'Jone0tIVwWAVv1y2I'
      )

      console.log('SUCCESS!', response.status, response.text)

      // Успешная отправка
      isSubmitted = true
      loading = false

      // Очищаем форму
      name = ''
      email = ''
      message = ''

      // Скроллим к форме, чтобы она осталась в центре экрана
      formElement.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      })
    } catch (error) {
      console.error('FAILED...', error)
      loading = false
    }
  }

  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script')
      script.src = src
      script.onload = resolve
      script.onerror = reject
      document.body.appendChild(script)
    })
  }

  async function initializeGSAP() {
    try {
      await loadScript('/lib/gsap.min.js')
      await loadScript('/lib/ScrollTrigger.min.js')
      await loadScript('/lib/ScrollSmoother.min.js')

      if (typeof gsap !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

        ScrollSmoother.create({
          wrapper: ".wrapper",
          content: ".content",
          smooth: 1.5,
          effects: true,
        })

        gsap.fromTo(".hero-section", { opacity: 1 }, {
          opacity: 0,
          scrollTrigger: {
            trigger: ".hero-section",
            start: "center",
            end: "820",
            scrub: true,
          }
        })
      }
    } catch (error) {
      console.error('Failed to load GSAP scripts:', error)
    }
  }

  onMount(() => {
    initializeGSAP()
  })
</script>

<div class="wrapper">
  <div class="content">
    <header class="hero-section">
      <img data-speed=".6" class="hero-img" src="/img/hero.png" alt="Hero" />
      <div class="container">
        <div data-speed=".75" class="main-header">
          <h1 class="main-title">2 KIRSCHEN musikschule</h1>
        </div>
      </div>
    </header>

    <div class="portfolio">
      <div class="container">
        <main class="gallery">
          <div data-speed=".9" class="gallery__left">
            <img class="gallery__item" src="{base}/img/work/11.jpg" alt="Work 1" />
            <div class="text-block gallery__item">
              <h2 class="text-block__h">Unterrichtssprachen:</h2>
              <p class="text-block__p">
                Die Stunden werden auf Deutsch, Englisch, Ukrainisch und Russisch
                angeboten. Durch diese Vielfalt an Sprachen gewährleisten wir, dass sich
                unsere Schüler wohl und sicher fühlen, unabhängig von ihrer Herkunft.
                Unser Ziel ist es, eine offene, einladende Atmosphäre zu schaffen, in der
                jeder die Möglichkeit hat, Musik auf seine eigene Art zu erleben und zu
                lernen.
              </p>
            </div>
            <img class="gallery__item" src="{base}/img/work/2.jpg" alt="Work 2" />
            <div class="text-block gallery__item">
              <h2 class="text-block__h">Preise und Zahlungsmodalitäten:</h2>
              <p class="text-block__p">
                Der Preis pro Stunde beträgt ab 45 Euro und variiert je nach Anzahl der
                Stunden pro Woche. Wir bieten flexible Zahlungsoptionen an, darunter
                monatliche oder vierteljährliche Zahlungen, um die finanzielle Belastung
                für unsere Schüler und deren Familien so gering wie möglich zu halten.
                Langfristige Schüler erhalten außerdem Rabatte, um kontinuierliches Lernen
                zu fördern.
              </p>
            </div>
            <img class="gallery__item" src="{base}/img/work/6.jpg" alt="Work 3" />
          </div>

          <div data-speed="1.1" class="gallery__right">
            <div class="text-block gallery__item">
              <h2 class="text-block__h">Über die Lehrerin:</h2>
              <p class="text-block__p">
                Tauchen Sie ein in die Welt der Musik mit Tatiana Samus. Mit über 15
                Jahren Erfahrung und einer tiefen Leidenschaft für Musik ist Tatiana
                eine inspirierende Lehrerin, die sich auf die individuellen Bedürfnisse
                jedes Schülers einstellt. Ihr Unterrichtsstil ist geprägt von Geduld,
                Professionalität und einem echten Interesse daran, das Beste aus jedem
                Schüler herauszuholen. Egal, ob Sie Anfänger oder fortgeschrittener
                Musiker sind – Sie werden bei ihr den richtigen Unterricht finden.
              </p>
            </div>
            <img class="gallery__item" src="{base}/img/work/4.jpg" alt="Work 4" />
            <div class="text-block gallery__item">
              <h2 class="text-block__h">Standort und Unterrichtsformat:</h2>
              <p class="text-block__p">
                Die Unterrichtsstunden finden sowohl in gemieteten Räumlichkeiten in der
                Friedrichstraße als auch bei Ihnen zu Hause statt. Unser flexibler
                Ansatz ermöglicht es Ihnen, den Unterricht in Ihren Alltag zu
                integrieren. Zudem bieten wir Online-Kurse an, die es Ihnen
                ermöglichen, von überall aus an unseren hochwertigen Musikstunden
                teilzunehmen. Ob in einer Einzelstunde oder in einer kleinen Gruppe –
                wir garantieren Ihnen ein individuelles Lernerlebnis.
              </p>
            </div>
            <img class="gallery__item" src="{base}/img/work/5.jpg" alt="Work 5" />
            <div class="text-block gallery__item">
              <h2 class="text-block__h">Individueller Ansatz und Jährliches Konzert:</h2>
              <p class="text-block__p">
                Tatiana bietet jedem Schüler einen individuellen Unterrichtsansatz, der
                auf den jeweiligen Lernstil und die musikalischen Ziele abgestimmt ist.
                Jedes Jahr organisieren wir ein Konzert, bei dem unsere Schüler die
                Möglichkeit haben, vor einem echten Publikum aufzutreten und das
                Gelernte zu präsentieren. Dieses Event ist nicht nur eine großartige
                Gelegenheit, Bühnenerfahrung zu sammeln, sondern auch ein Höhepunkt des
                Jahres, auf den sich unsere Schüler und ihre Familien freuen.
              </p>
            </div>

            <div class="text-block gallery__item">
              <h2 class="text-block__h">Kontaktieren Sie uns:</h2>
              <p class="text-block__p">
                Für weitere Informationen erreichen Sie uns telefonisch oder per
                E-Mail.
              </p>
              <br>
              <form class="contact-form" bind:this={formElement} on:submit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Name"
                  bind:value={name}
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  bind:value={email}
                  required
                />
                <textarea
                  placeholder="Your message"
                  bind:value={message}
                  required
                ></textarea>
                <button type="submit" disabled={loading}>
                  {loading ? 'Sending...' : 'Send'}
                </button>
              </form>
              {#if isSubmitted}
                <p class="success-message">Thank you! Your message has been sent.</p>
              {/if}
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</div>

<style>
  .contact-form input,
  .contact-form textarea {
    width: 100%;
    padding: 0.75rem;
    margin-bottom: 1rem;
    border-radius: 6px;
    border: 1px solid #ddd;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    font-size: 1rem;
    background-color: #f9f9f9;
    color: #333;
    outline: none;
    transition: border 0.3s ease;
  }

  .contact-form input:focus,
  .contact-form textarea:focus {
    border-color: #4a90e2;
  }

  .contact-form button {
    padding: 0.75rem 1.5rem;
    background-color: #4a90e2;
    color: #fff;
    border: none;
    border-radius: 6px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    width: 100%;
  }

  .contact-form button:hover {
    background-color: #357ABD;
    transform: translateY(-2px);
  }

  .success-message {
    font-size: 1.2rem;
    color: #28a745;
    margin-top: 1rem;
  }

</style>
