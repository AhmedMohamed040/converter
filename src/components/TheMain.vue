<template>
  <main>
    <Transition appear>
      <div class="container-fluid cot-f" @load="key()">
        <div class="row">
          <div class="col-md-12 ruslt">
            <span class="p-rst">
              <div class="rst">
                <p ref="color" id="color" class="txt mb-0">{{ counter }}</p>
              </div>
            </span>
          </div>
          <div class="b-btn">
            <div class="b-div">
              <button id="reset" @click="reset()">
                <font-awesome-icon icon="rotate-left" />
              </button>
            </div>
            <div class="b-div2">
              <button id="cnv" @click="[show(), conve()]">
                <font-awesome-icon icon="circle-arrow-right" />
              </button>
            </div>
          </div>
          <div class="col-md-12 conv">
            <div class="container">
              <form
                class="row form justify-content-between"
                v-on:submit.prevent
              >
                <div role=" group" class="col-md-5 form-group">
                  <input
                    id="cm"
                    name="year"
                    type="text"
                    class="form-cnt-l shadow-none"
                    required="required"
                    v-model="value1"
                    autocomplete="off"
                    @input="show()"
                    @keyup.enter="[show(), conve()]"
                  />
                  <label
                    for="year"
                    class="form-cnt-l-placeholder"
                    required="required"
                    >{{ k == "Math" ? pNumber2 : pNumber }}</label
                  >
                </div>

                <div
                  class="col-md-2 d-flex align-items-center justify-content-center"
                >
                  <div class="trans">
                    <div class="switch" @click="switchVal()">
                      <font-awesome-icon class="s-icon" icon="repeat" />
                    </div>
                  </div>
                </div>

                <div role=" group" class="col-md-5 form-group">
                  <input
                    id="year"
                    name="year"
                    type="number"
                    class="form-cnt-r shadow-none"
                    disabled
                    required="required"
                  />
                  <label
                    for="year"
                    class="form-cnt-r-placeholder"
                    required="required"
                    >{{ pNumber2 }}</label
                  >
                </div>
              </form>
            </div>
          </div>
          <div class="col-md-12 tbl" id="tbl">
            <!--  <div class="line"></div>-->
            <div class="container-fuild">
              <div class="row">
                <div class="col-md-6 p-2 t-tbl" v-show="k != 'Math'">
                  <p
                    v-for="part in parts"
                    @click="getValue(part)"
                    :key="part.index"
                  >
                    {{ part }}
                  </p>
                </div>
                <div class="col-md-6 p-2 t-tbl2">
                  <p
                    v-for="part in parts"
                    @click="getValue2(part)"
                    :key="part.index"
                  >
                    {{ part }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="cr-m-i">
          <form class="row form justify-content-between" v-on:submit.prevent>
            <div role=" group" class="col-md-5 form-group">
              <input
                id="cm"
                name="year"
                type="text"
                class="form-cnt-l shadow-none"
                required="required"
                v-model="value1"
                autocomplete="off"
                @input="show()"
                @keyup.enter="[show(), conve()]"
              />
              <label
                for="year"
                class="pls-m-l form-cnt-l-placeholder"
                required="required"
                >{{ k == "Math" ? pNumber : pNumber2 }}</label
              >
              <div class="btn-group">
                <button
                  class="btn dropdown-toggle shadow-none drp"
                  type="button"
                  id="defaultDropdown"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="true"
                  aria-expanded="false"
                >
                  {{ k }}
                </button>
                <ul class="dropdown-menu" aria-labelledby="defaultDropdown">
                  <li>
                    <a
                      v-for="part in parts"
                      @click="getValue(part)"
                      :key="part.index"
                      class="dropdown-item"
                      href="#"
                      >{{ part }}</a
                    >
                  </li>
                </ul>
              </div>
            </div>

            <div
              class="col-md-2 d-flex align-items-center justify-content-center"
            >
              <div class="trans">
                <div class="switch" @click="switchVal()">
                  <font-awesome-icon class="s-icon" icon="repeat" />
                </div>
              </div>
            </div>

            <div role=" group" class="col-md-5 form-group">
              <input
                id="year"
                name="year"
                type="text"
                class="form-cnt-r shadow-none"
                disabled
                required="required"
              />
              <label
                for="year"
                class="pls-m-r form-cnt-r-placeholder"
                required="required"
                >{{ pNumber2 }}</label
              >
              <div class="btn-group">
                <button
                  class="btn dropdown-toggle shadow-none drp"
                  type="button"
                  id="defaultDropdown"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="true"
                  aria-expanded="false"
                >
                  {{ k }}
                </button>
                <ul class="dropdown-menu" aria-labelledby="defaultDropdown">
                  <li>
                    <a
                      v-for="part in parts"
                      @click="getValue2(part)"
                      :key="part.index"
                      class="dropdown-item"
                      href="#"
                      >{{ part }}</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </form>
        </div>

        <NavMobile v-model:value1="value1" />
        <section class="menu menu--circle">
          <input type="checkbox" id="menu__active" />
          <label for="menu__active" class="menu__active">
            <div class="menu__toggle">
              <div class="i-icon">
                <div class="hamburger"></div>
              </div>
            </div>
            <input type="radio" name="arrow--up" id="degree--up-0" />
            <input type="radio" name="arrow--up" id="degree--up-1" />
            <input type="radio" name="arrow--up" id="degree--up-2" />
            <div class="menu__listings">
              <ul class="circle">
                <li>
                  <div class="plch">
                    <div class="upside">
                      <a
                        href="#"
                        @click="[display('Lengths'), showValues()]"
                        class="button"
                        ><font-awesome-icon class="s-icon" icon="ruler"
                      /></a>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="plch">
                    <div class="upside">
                      <a
                        href="#"
                        @click="[display('Weights'), showValues()]"
                        class="button"
                        ><font-awesome-icon
                          class="s-icon"
                          icon="weight-hanging"
                      /></a>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="plch">
                    <div class="upside">
                      <a
                        href="#"
                        @click="[display('Heat'), showValues()]"
                        class="button"
                        ><font-awesome-icon
                          class="s-icon"
                          icon="temperature-high"
                      /></a>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="plch">
                    <div class="upside">
                      <a
                        href="#"
                        @click="[display('Weights'), showValues()]"
                        class="button"
                        ><font-awesome-icon
                          class="s-icon"
                          icon="weight-hanging"
                      /></a>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="plch">
                    <div class="upside">
                      <a
                        href="#"
                        @click="[display('Electro'), showValues()]"
                        class="button"
                        ><font-awesome-icon class="s-icon" icon="bolt"
                      /></a>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="plch">
                    <div class="upside">
                      <a
                        href="#"
                        @click="[display('Math'), showValues()]"
                        class="button"
                        ><font-awesome-icon
                          class="s-icon"
                          icon="square-root-variable"
                      /></a>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="plch">
                    <div class="upside">
                      <a
                        href="#"
                        @click="[display('Time'), showValues()]"
                        class="button"
                        ><font-awesome-icon class="s-icon" icon="clock"
                      /></a>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="plch">
                    <div class="upside">
                      <a
                        href="#"
                        @click="[display('Heat'), showValues()]"
                        class="button"
                        ><font-awesome-icon
                          class="s-icon"
                          icon="temperature-high"
                      /></a>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="plch">
                    <div class="upside">
                      <a
                        href="#"
                        @click="[display('Colors'), showValues()]"
                        class="button"
                        ><font-awesome-icon class="s-icon" icon="palette"
                      /></a>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="plch">
                    <div class="upside">
                      <a
                        href="#"
                        @click="[display('Math'), showValues()]"
                        class="button"
                        ><font-awesome-icon
                          class="s-icon"
                          icon="square-root-variable"
                      /></a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="menu__arrow menu__arrow--top">
              <ul>
                <li>
                  <label for="degree--up-0"><div class="arrow"></div></label>
                  <label for="degree--up-1"><div class="arrow"></div></label>
                  <label for="degree--up-2"><div class="arrow"></div></label>
                </li>
              </ul>
            </div>
          </label>
        </section>
      </div>
    </Transition>
  </main>
</template>

<script>
import { ElNotification } from "element-plus";

import { mapState } from "vuex";

import { mapMutations } from "vuex";
import NavMobile from "./NavMobile.vue";
export default {
  name: "TheMain",

  data() {
    return {
      go: false,
      value1: null,
      value2: this.$store.state.valueB,
      pNumber2: this.$store.state.valB || "Centi(cm)",
      pNumber: this.$store.state.valA || "Milli(mm)",
      parts: "",
      k: 0 || "Lengths",
      rsult: this.$store.state.count,
      cr: null || this.$store.state.color,
    };
  },
  created() {
    this.keys();
  },

  computed: {
    ...mapState(["ky", "valueB", "count", "color", "cm", "valA", "valB"]),
    counter() {
      return this.$store.state.count;
    },
  },
  watch: {
    count(val) {
      this.rsult = val;
    },
    cm(val) {
      this.value1 = val;
    },
    ky(val) {
      this.k = val;
      this.keys();
    },
    valueB(val) {
      this.value2 = val;
    },
    color(val) {
      this.cr = val;
      let color = this.$refs.color;
      return (color.style.background = this.cr);
    },
    valA(val) {
      this.pNumber = val;
    },
    valB(val) {
      this.pNumber2 = val;
    },
  },
  methods: {
    ...mapMutations(["update", "remove"]),
    conve() {
      let hav = Number(this.value1);
      let hab = Number(this.$store.state.valueB);

      console.log(Object.keys(this.$store.state[this.k])[0]);

      if (this.k == "Colors") {
        this.$store.commit("conve");
        this.value1 == "" ||
        this.$store.state.valueA == null ||
        this.$store.state.valueB == null
          ? this.open3() : '';
  
      } else {
        if (isNaN(hav) === false && hav !== null) {
          if (hav != 0 && hab != 0) {
            this.open1();
            this.$store.commit("conve");
          } else {
            this.open3();
          }
        } else {
          console.log("c2");
          this.open4();
        }
      }
    },
    show() {
      this.$store.commit("show", {
        a: this.value1,
        b: this.pNumber,
      });
    },
    switchVal() {
      console.log(JSON.stringify(this.pNumber));
      let val1 = JSON.parse(JSON.stringify(this.pNumber));
      let val2 = JSON.parse(JSON.stringify(this.pNumber2));
      this.pNumber2 = val1;
      this.pNumber = val2;
      this.$store.commit("switchVal");
    },
    async keys() {
      // to display the names in dropdown
      let key = await this.$store.state[this.k];
      let cov = Object.keys(key || this.k);
      this.parts = cov;
    },
    display(p) {
      let par = p;
      this.$store.commit("display", {
        a: par,
      });
    },

    reset() {
      this.$store.commit("reset");
      this.value1 = null;
      this.cr = null;
    },
    open1: function () {
      ElNotification.success({
        title: "Success",
        message: "The convert operation succeeded .",
        offset: 100,
      });
    },
    open4: function () {
      ElNotification.error({
        title: "Error",
        message: "You putted something wrong try again .",
        offset: 100,
      });
    },
    open2: function () {
      ElNotification.info({
        message: "This is a success message" + " " + this.$store.state.count,
        title: "Info",
        offset: 100,
      });
    },
    open3: function () {
      ElNotification.warning({
        title: "Warning",
        message: "Try to select which " + this.k + " you want to convert.",
        offset: 100,
      });
    },
    getValue(name1) {
      let v1 = this.$store.state[this.k][name1];
      console.log(name1, this.k);
      this.pNumber = name1;
      this.$store.state.valueA = v1;
      console.log(this.$store.state.valueA);
    },
    getValue2(name2) {
      let v2 = this.$store.state[this.k][name2];
      console.log(name2);
      this.pNumber2 = name2;
      this.$store.state.valueB = v2;
      console.log(this.$store.state.valueB);
    },
    showValues() {
      this.$store.commit("showValues");
    },
  },
  components: { NavMobile },
};
</script>

<style lang="scss" scoped cached>
@import "@/style/TheMain.scss";
@import "@/style/MenuList.scss";
</style>
