<template>
  <div id="sd-bar">
    <Transition appear>
      <div class="flex-shrink-0">
        <a href="#" class="d-flex text-decoration-none ban">
          <span class="fs-5 fw-semibold bnd">Converter</span>
        </a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="b-sv"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#f4f2f2"
            fill-opacity="1"
            d="M0,320L48,288C96,256,192,192,288,186.7C384,181,480,235,576,240C672,245,768,203,864,170.7C960,139,1056,117,1152,106.7C1248,96,1344,96,1392,96L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
        </svg>

        <div class="sid p-3">
          <ul class="list-unstyled lis ps-0">
            <li class="mb-1">
              <span></span>
              <button
                class="btn btn-toggle align-items-center rounded collapsed shadow-none"
                data-bs-toggle="collapse"
                data-bs-target="#home-collapse"
                aria-expanded="false"
                name="Lengths"
                ref="Lengths"
                @click="[back('Lengths'), display('Lengths'),  showValues()]"
              >
                Lengths
              </button>
              <div class="collapse" id="home-collapse">
                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                  <li>
                    <a href="#" class="link-dark rounded">
                      Millimeter
                      <i class="fa-solid fa-ruler ic"></i>
                    </a>
                  </li>

                  <li>
                    <a href="#" class="link-dark rounded">
                      Centimeter
                      <i class="fa-solid fa-ruler ic"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="link-dark rounded">
                      Meter
                      <i class="fa-solid fa-ruler ic"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="link-dark rounded">
                      Kilometer
                      <i class="fa-solid fa-ruler ic"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="link-dark rounded">
                      Inch
                      <i class="fa-solid fa-ruler ic"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="link-dark rounded">
                      Foot
                      <i class="fa-solid fa-ruler ic"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="link-dark rounded">
                      Yard
                      <i class="fa-solid fa-ruler ic"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="link-dark rounded">
                      Mile
                      <i class="fa-solid fa-ruler ic"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="mb-1">
              <span></span>
              <button
                class="btn btn-toggle align-items-center rounded collapsed shadow-none"
                data-bs-toggle="collapse"
                data-bs-target="#dashboard-collapse"
                aria-expanded="false"
                name="Weights"
                ref="Weights"
                @click="[back('Weights'), display('Weights'),  showValues()]"
              >
                Weights
              </button>
              <div class="collapse" id="dashboard-collapse">
                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                  <li>
                    <a href="#" class="link-dark rounded">
                      Metric tons
                      <i class="fa-solid fa-weight-hanging ic"></i>
                    </a>
                  </li>

                  <li>
                    <a href="#" class="link-dark rounded">
                      Kilograms
                      <i class="fa-solid fa-weight-hanging ic"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="link-dark rounded">
                      Grams
                      <i class="fa-solid fa-weight-hanging ic"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="link-dark rounded">
                      Milligrams
                      <i class="fa-solid fa-weight-hanging ic"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="link-dark rounded">
                      Stones
                      <i class="fa-solid fa-weight-hanging ic"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="link-dark rounded">
                      Pounds
                      <i class="fa-solid fa-weight-hanging ic"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="link-dark rounded">
                      Ounces
                      <i class="fa-solid fa-weight-hanging ic"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="mb-1">
              <span></span>
              <button
                class="btn btn-toggle align-items-center rounded collapsed shadow-none"
                data-bs-toggle="collapse"
                data-bs-target="#orders-collapse"
                aria-expanded="false"
                name="Temperature"
                ref="Temperature"
                @click="[back('Heat'), display('Heat'),  showValues()]"
              >
                Heat
              </button>
              <div class="collapse" id="orders-collapse">
                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                  <li>
                    <a href="#" class="link-dark rounded">
                      Fahrenheit
                      <i class="fa-solid fa-temperature-high ic"></i>
                    </a>
                  </li>
                  
                  <li>
                    <a href="#" class="link-dark rounded">
                      Celsius
                      <i class="fa-solid fa-temperature-high ic"></i>
                    </a>
                  </li>
                 
                </ul>
              </div>
            </li>
            <li class="border-top my-3"></li>
            <li class="mb-1">
              <span></span>

              <button
                class="btn btn-toggle align-items-center rounded collapsed shadow-none"
                data-bs-toggle="collapse"
                data-bs-target="#colors-collapse"
                aria-expanded="false"
                name="Colors"
                ref="Colors"
                @click="[back('Colors'), display('Colors'),  showValues()]"
              >
                Colors
              </button>
              <div class="collapse" id="colors-collapse">
                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                  <li>
                    <a href="#" class="link-dark rounded">
                      Hex
                      <i class="fa-solid fa-palette ic"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="link-dark rounded">
                      Rgb
                      <i class="fa-solid fa-palette ic"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="mb-1">
              <span></span>

              <button
                class="btn btn-toggle align-items-center rounded collapsed shadow-none"
                data-bs-toggle="collapse"
                data-bs-target="#electricity-collapse"
                aria-expanded="false"
                name="Electricity"
                ref="Electricity"
                @click="[back('Electro'), display('Electro'), showValues()]"
              >
                Electro
              </button>
              <div class="collapse" id="electricity-collapse">
                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                  <li>
                    <a href="#" class="link-dark rounded">
                      Watt-Hour
                      <i class="fa-solid fa-bolt ic"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="link-dark rounded">
                      Kilowatt-Hour
                      <i class="fa-solid fa-bolt ic"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="link-dark rounded">
                      Megawatt-Hour
                      <i class="fa-solid fa-bolt ic"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="link-dark rounded">
                      Joules
                      <i class="fa-solid fa-bolt ic"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="link-dark rounded">
                      Kilojoules
                      <i class="fa-solid fa-bolt ic"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="link-dark rounded">
                      Megajoules
                      <i class="fa-solid fa-bolt ic"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="mb-1">
              <span></span>

              <button
                class="btn btn-toggle align-items-center rounded collapsed shadow-none"
                data-bs-toggle="collapse"
                data-bs-target="#math-collapse"
                aria-expanded="false"
                name="Mathematics"
                ref="Mathematics"
                @click="[display('Math'),  showValues()]"
              >
                Math
              </button>
              <div class="collapse" id="math-collapse">
                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                  <li>
                    <a href="#" class="link-dark rounded">
                      Sqrt
                      <i class="fa-solid fa-square-root-variable ic"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="link-dark rounded">
                      Cos
                      <i class="fa-solid fa-square-root-variable ic"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="link-dark rounded">
                      Sin
                      <i class="fa-solid fa-square-root-variable ic"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="link-dark rounded">
                      Tan
                      <i class="fa-solid fa-square-root-variable ic"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="border-top my-3"></li>
            <li class="mb-1">
              <span></span>

              <button
                class="btn btn-toggle align-items-center rounded collapsed shadow-none"
                data-bs-toggle="collapse"
                data-bs-target="#Lighting-collapse"
                aria-expanded="false"
                name="Time"
                ref="Time"
                @click="[back('Time'), display('Time'),  showValues()]"
              >
                Time
              </button>
              <div class="collapse" id="Lighting-collapse">
                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                  <li>
                    <a href="#" class="link-dark rounded">
                      Years
                      <i class="fa-solid fa-clock ic"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="link-dark rounded">
                      Months
                      <i class="fa-solid fa-clock ic"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="link-dark rounded">
                      Weeks
                      <i class="fa-solid fa-clock ic"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="link-dark rounded">
                      Days
                      <i class="fa-solid fa-clock ic"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="link-dark rounded">
                      Hours
                      <i class="fa-solid fa-clock ic"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="link-dark rounded">
                      Minutes
                      <i class="fa-solid fa-clock ic"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="link-dark rounded">
                      Seconds
                      <i class="fa-solid fa-clock ic"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="link-dark rounded">
                      Milliseconds
                      <i class="fa-solid fa-clock ic"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div class="c-page">
        <router-link class="r-page" to="/"><font-awesome-icon icon="house" /></router-link>
        <router-link  class="r-page" to="/about"><font-awesome-icon icon="circle-info" /></router-link>
        </div>
      </div>
    </Transition>
    <div class="sv">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="shd"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#f4f2f2"
          fill-opacity="1"
          d="M0,192L60,170.7C120,149,240,107,360,117.3C480,128,600,192,720,202.7C840,213,960,171,1080,133.3C1200,96,1320,64,1380,48L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {

  name: "SdBar",
  data() {
    return {
      parts: 0,
    };
  },
  computed: {},
  methods: {
    back(p) {
      this.$emit("show-list", p);
    },
    display(p) {
      let par = p;
      this.$store.commit("display", {
        a: par,
      });
    },
       showValues() {
      this.$store.commit('showValues');
    }

 
  },
};
</script>

<style lang="scss" scoped cached>
@import "@/style/SdBar.scss";
</style>
