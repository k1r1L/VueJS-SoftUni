<template>
  <div class="container">
    <button @click="start">Start Counter</button>
    <p>{{counter}}</p>
    <p>The gallery has {{count}} images!</p>
    <form @submit.prevent="addImage('Message', $event)">
      <label for="img-source">Source:</label>
      <input :value="imgSrc" @input="setImgSource" type="text" id="img-source" placeholder="Your image source..." />

      <label for="img-alt">Alt:</label>
      <input :value="imgAlt" @input="setImgAlt" type="text" id="img-alt" placeholder="Your image alt..." />

      <label for="img-desc">Description:</label>
      <textarea :value="imgDescription" @input="setImgDescription" type="text" id="img-desc" placeholder="Your description..."></textarea>

      <input class="btn-add" type="submit" value="Submit" />
    </form>
    <div v-for="(g, i) in gallery" class="gallery" :key="i">
      <a>
        <img :src="g.imgSrc" :alt="g.imgAlt" />
      </a>
      <div class="desc">
        <template v-if="g.showDescription">
          <p>{{g.description}}</p>
          <button
            class="show-desc"
            :class="createBinding(i)"
            @click="toggleDescription(g, $event)"
          >Show Less</button>
        </template>
        <template v-else>
          <button
            class="show-desc"
            @click="toggleDescription(g)"
            :class="createBinding(g)"
          >Show More</button>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data: function() {
    return {
      gallery: [
        {
          imgSrc: "img/img_5terre.jpg",
          imgAlt: "Cinque Terre",
          showDescription: false,
          description:
            "The Cinque Terre area is a popular tourist destination. Over the centuries, people have built terraces on the rugged, steep landscape right up to the cliffs that overlook the sea. Paths, trains and boats connect the villages as cars can reach them from the outside only via narrow and precarious mountain roads with great difficulty."
        },
        {
          imgSrc: "img/img_forest.jpg",
          imgAlt: "Forrest",
          showDescription: false,
          description:
            "Forrest is located in southeastern Livingston County at 40°45′0″N 88°24′36″W (40.750018, -88.409992).[4] It is in the northern part of Forrest Township, with a small area extending north into Pleasant Ridge Township."
        },
        {
          imgSrc: "img/img_lights.jpg",
          imgAlt: "Lights",
          showDescription: false,
          description: "Lights"
        },
        {
          imgSrc: "img/img_mountains.jpg",
          imgAlt: "Cinque Terre",
          showDescription: false,
          description: "Mountains"
        }
      ],
      message: "My custom gallery!",
      imgSrc: "",
      imgAlt: "",
      imgDescription: "",
      counter: 60,
      
      interval: null
    };
  },
  beforeCreate() {
    console.log(this.$data);
  },
  created() {
    console.log(this.data);
  },
  methods: {
    createBinding(i) {
      return i % 2 !== 0 ? "odd" : "even";
    },
    toggleDescription(galleryItem) {
      this.message = "Change message description";
      galleryItem.showDescription = !galleryItem.showDescription;
    },
    setImgSource(e) {
      const value = e.target.value;

      this.imgSrc = value;
    },
    setImgAlt(e) {
      const value = e.target.value;

      this.imgAlt = value;
    },
    setImgDescription(e) {
      const value = e.target.value;

      this.imgDescription = value;
    },
    addImage(msg, e) {
      console.log(msg);
      console.dir(e.target);
      this.gallery.push({
        imgSrc: this.imgSrc,
        imgAlt: this.imgAlt,
        description: this.imgDescription,
        showDescription: false
      });

      this.imgSrc = '';
      this.imgAlt = '';
      this.imgDescription = '';
    },
    start() {
      this.interval = setInterval(() => {
        this.counter--;
      }, 1);
    }
  },
  computed: {
    getLargestDescription() {
      return [...this.gallery]
        .sort((a,b)=> b.description.length - a.description.length)[0].description
    },
    count() {
      return this.gallery.length;
    }
  },
  watch: {
    counter: function(newValue, oldValue) {
      console.log(newValue);
      console.log(oldValue);
      if (newValue === 0) {
        alert('Game has ended!');
        this.counter = 0;
        clearInterval(this.interval);
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#add-item-btn {
  background-color: #008cba;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
}
input[type="text"],
textarea {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
}
textarea {
  resize: none;
}
div.container {
  margin-right: auto;
  margin-left: auto;
  max-width: 960px;
  padding-right: 10px; /* 3 */
  padding-left: 10px; /* 3 */
}
button.show-desc,
.btn-add {
  background-color: #008cba;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
}
button.show-desc.odd {
  background-color: #008cba;
}
button.show-desc.even {
  background-color: red;
}
button.show-desc.decoration {
  border: 5px solid black;
}

div.gallery {
  margin: 5px;
  border: 1px solid #ccc;
  float: left;
  width: 180px;
}
div.gallery:hover {
  border: 1px solid #777;
}
div.gallery img {
  width: 100%;
  height: auto;
}
div.desc {
  padding: 15px;
  text-align: center;
}
</style>
