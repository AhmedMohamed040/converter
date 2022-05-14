<template>
  <div class="cr-nav">
    <div class="nav">
      <ul>
      <!---
<li class="list active">
          <router-link to="/" @click="navMove()">
            <span class="icon">
              <font-awesome-icon icon="house" />
            </span>
            <span class="text">Home</span>
          </router-link>
        </li>
      -->  
        <li class="list active">
          <a href="#" @click="[reset(), navMove()]">
            <span class="icon"><font-awesome-icon icon="rotate-left" /></span>
            <span class="text">Reset</span>
          </a>
        </li>
        <li class="list">
          <a href="#" @click="[show(), navMove(), conve()]">
            <span class="icon"
              ><font-awesome-icon icon="circle-arrow-right"
            /></span>
            <span class="text">Convert</span>
          </a>
        </li>

        <li class="list">
          <router-link to="/about" @click="navMove()">
            <span class="icon"><font-awesome-icon icon="circle-info" /></span>
            <span class="text">About</span>
          </router-link>
        </li>
        <div class="here"></div>
      </ul>
    </div>
  </div>
</template>

<script defer>

import { mapState } from "vuex";
import { ElNotification } from "element-plus";

import { mapMutations } from "vuex";
export default {
  name: "NavMoblie",
  inheritAttrs: true,
  props: {
    color: {
      default: {}
    },
     value1: String,
    
  },
  data() {
    return {
       go: false,
      value2: this.$store.state.valueB,
      pNumber2: 0 || "Milli(mm)",
      pNumber: 0 || "Centi(cm)",
      parts: "",
      k: 0 || "Lengths",
      cr: null || this.$store.state.color,
    };
  },

  created() {
    this.keys();
  },
  computed: {
    ...mapState(["ky", "valueB", "count"]),
    counter() {
      return this.$store.state.count;
    },
  },
  watch: {
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
      
      console.log(color);
      return (color.style.background = this.cr);
    },
  },
  methods: {
    ...mapMutations(["update", "remove"]),
    conve() {
      let hav = Number(this.value1);
      let hab = Number(this.$store.state.valueB);
    

             
        
         if(this.k == "Colors") {
         this.open1();
           this.$store.commit("conve");
        }else {

    if(isNaN(hav) === false && hav !== null) {
          if(hav != 0 && hab != 0) {
               this.open1();
                 this.$store.commit("conve");
             }else {
               this.open3();
             }
        }
    
        else {
          console.log('c2');
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
      
    async keys() {
      // to display the names in dropdown
      let key = await this.$store.state[this.k];
      let cov = Object.keys(key || this.k);
      this.parts = cov;
    },
    navMove() {
      let list = document.querySelectorAll(".list");
      function activeItem() {
        list.forEach((item) => item.classList.remove("active"));
        this.classList.add("active");
      }
      list.forEach((item) => item.addEventListener("click", activeItem));
      console.log("go");
    },
    
  display(p) {
    this.k = p;
    this.$store.commit("display", {
      a: this.value1,
    });
  },
  reset() {
    this.$store.commit("reset");
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
        title: "Info",
        message: "This is a success message" + " " + this.$store.state.count,
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
  },
};
</script>

<style lang="scss" scoped cached>
@import "@/style/Nav";
</style>
