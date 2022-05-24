import { createStore } from "vuex";
import { ElNotification } from "element-plus";

export default createStore({
  state: {
    count: null,
    ky: 0,
    cm: null,
    attr: null,
    valueA: null,
    valueB: null,
    valA: null,
    valB: null,
    color: null,
    Lengths: {
      "Milli(mm)": 0.1,
      "Centi(cm)": 1,
      "Inch(in)": 2.54,
      "Foot(ft)": 30.48,
      "Yard(yd)": 91.44,
      "Meter(m)": 100,
      "Kilo(km)": 100000,
      "Mile(mi)": 160934.4,
    },
    Weights: {
      "Milli(mg)": 0.001,
      "Grams(g)": 1,
      "Ounces(oz)": 28.34952,
      "Pounds(lb)": 453.5924,
      "Kilo(kg)": 1000,
      "Stones(st)": 6350.293,
      "tons(t)": 1000000,
    },
    Heat: {
      "Fahrenheit(°F)": 1,
     // "Rankine(°R)": 460.67,
      "Celsius(°C)": -17.222,
    //  "Centigrade(°C)": -17.222,
     // "Kelvin(K)": 255.93,
    },
    Colors: {
      Hex: 0,
      Rgb: 0,
    },
    Electro: {
      mW: 0.001,
      W: 1,
      kW: 1000,
      MW: 1000000,
      J: 0.0002777778,
      kJ: 0.2777777778,
      GJ: 277.7777777778,
    },
    Math: {
      Sqrt: "sqrt",
      Cos: "cos",
      Sin: "sin",
      Tan: "tan",
    },
    Time: {
      'Milli(ms)': 0.000016667,
      Second: 0.016667,
      Minute: 1,
      Hour: 60,
      Day: 1440,
      Week: 10080,
      Month: 43829.0639,
      Year: 525960,
    },
  },
  getters: {
    key(state) {
      return state.ky;
    },
   
  },
  mutations: {
    display(state, p) {
      state.ky = p.a;
    },

    update(state) {
      state.count++;
    },

    remove(state) {
      state.count--;
    },

    conve(state) {
      switch (state.ky) {
        case "Time":
          if (state.cm) {
            console.log("case2");
            state.count = ((state.valueA / state.valueB) * state.cm).toFixed(2);
          }
          break;

        case "Colors":
          
          console.log('here');
          if (state.attr == "Rgb") {
            // eslint-disable-next-line no-inner-declarations
            let str = state.cm;
            let pattern = /([^\s+])/gm;
           let rgb = str.match(pattern).join("");
            let ex =
              /^rgb\((((((((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5]),\s?)){2}|((((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5])\s)){2})((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5]))|((((([1-9]?\d(\.\d+)?)|100|(\.\d+))%,\s?){2}|((([1-9]?\d(\.\d+)?)|100|(\.\d+))%\s){2})(([1-9]?\d(\.\d+)?)|100|(\.\d+))%))\)$/i;
            if (ex.test(rgb)) {
              // choose correct separator
              let sep = rgb.indexOf(",") > -1 ? "," : " ";
              // turn "rgb(r,g,b)" into [r,g,b]
              rgb = rgb.substr(4).split(")")[0].split(sep);

              // convert %s to 0–255
              for (let R in rgb) {
                let r = rgb[R];
                if (r.indexOf("%") > -1)
                  rgb[R] = Math.round((r.substr(0, r.length - 1) / 100) * 255);
              }

              let r = (+rgb[0]).toString(16),
                g = (+rgb[1]).toString(16),
                b = (+rgb[2]).toString(16);

              if (r.length == 1) r = "0" + r;
              if (g.length == 1) g = "0" + g;
              if (b.length == 1) b = "0" + b;
              {
                state.count = "#" + r + g + b;
                state.color = "#" + r + g + b;
              }
            } else {
              let warn = function () {
                ElNotification.warning({
                  title: "Warning",
                  message: "Try to select which way or unit " + this.k + " you want to convert.",
                  offset: 100,
                });}
                warn();
              return (state.count = "Invalid input color");
            }
            
          } if(state.attr == 'Hex') {
            let pattern = /([^\s+])/gm;
            let str = state.cm;
            let rgb = str.match(pattern).join("");

            let isPct = false;
            let ex = /^#([\da-f]{3}){1,2}$/i;
            if (ex.test(rgb)) {
              let r = 0, g = 0, b = 0;
              isPct = isPct === true;
          
              // 3 digits
              if (rgb.length == 4) {
                r = "0x" + rgb[1] + rgb[1];
                g = "0x" + rgb[2] + rgb[2];
                b = "0x" + rgb[3] + rgb[3];
          
              // 6 digits
              } else if (rgb.length == 7) {
                r = "0x" + rgb[1] + rgb[2];
                g = "0x" + rgb[3] + rgb[4];
                b = "0x" + rgb[5] + rgb[6];
              }
              if (isPct) {
                r = +(r / 255 * 100).toFixed(1);
                g = +(g / 255 * 100).toFixed(1);
                b = +(b / 255 * 100).toFixed(1);
              }
              state.color = "rgb("+ (isPct ? r + "%," + g + "%," + b + "%" : +r + "," + +g + "," + +b) + ")";
              return state.count = "rgb("+ (isPct ? r + "%," + g + "%," + b + "%" : +r + "," + +g + "," + +b) + ")";
            
            } else {
              
              let warn = function () {
                ElNotification.warning({
                  title: "Warning",
                  message: "Try to select which way or unit " + this.k + " you want to convert.",
                  offset: 100,
                });}
                warn();
              return "Invalid input color";
            }
          }
        
          break;

        /*


function hexToRGB(h,isPct) {
 
}
*/
        case "Heat":

          if(state.valueA < 1) {
            console.log('case1');
            state.count = (state.cm * (9/5)) + 32;
          }else {
            console.log('case2');
            state.count = (state.cm -32) * (5/9);

          }
        break;

        case "Math":
          if (state.valueA) {
            state.count = Math[state.valueA](state.cm).toFixed(2);
          } else {
            state.count = Math[state.valueB](state.cm).toFixed(2);
          }
          break;

       

        case "Lengths":
          if (state.valueA) {
            console.log("case2");
            state.count = ((state.valueA / state.valueB) * state.cm).toFixed(2);
            
          }
          break;
        default:
          if (state.valueA) {
            console.log("case2");
            state.count = ((state.valueA / state.valueB) * state.cm).toFixed(2);
          }
      }
    },
    show(state, payload) {
      state.cm = payload.a;
      state.attr = payload.b;
    },
    reset(state) {
      state.count = null;
      state.cm = null;
      state.color = null;
    },
    switchVal(state) {
      let valA = JSON.parse(JSON.stringify(state.valueA));
    let valB = JSON.parse(JSON.stringify(state.valueB));
    state.valueA = valB;
    state.valueB = valA;
    },
    showValues(state) {
     state.valA = Object.keys(state[state.ky])[0];
      state.valB = Object.keys(state[state.ky])[1];
      console.log(state.valB, state.valA);

    },
  },
  actions: {
    increase(context) {
      setTimeout(function () {
        context.commit("update");
      }, 1000);
    },
  },
  modules: {},
});
