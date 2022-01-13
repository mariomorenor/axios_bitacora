<template>
  <div class="registrar">
    <div class="menutabs">
      <b-tabs vertical type="is-toggle">
        <b-tab-item
          v-for="cliente in clientes"
          :key="cliente.id"
          :label="cliente.display_name"
        >
          <b-field label="Videoportero" label-position="on-border">
            <b-select v-model="cliente.camara_selected">
              <option
                v-for="camara in cliente.camaras"
                :key="camara.id"
                :value="camara.id"
              >
                {{ camara.display_name }}
              </option>
            </b-select>
          </b-field>
          <img :src="cliente.camaras.find(c=>c.id == cliente.camara_selected).enlace" alt="">
        </b-tab-item>
      </b-tabs>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      clientes: [],
      gestiones: [],
      personas: [],
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.obtenerClientes();
      this.obtenerGestiones();
      this.obtenerPersonas();
      this.obtenerVehiculos();
    },
    obtenerGestiones() {
      axios
        .post(
          `${
            process.env.NODE_ENV == "development"
              ? process.env.VUE_APP_HOST
              : window.location.origin
          }/axios_bitacora/gestiones`,
          {}
        )
        .then(({ data }) => {
          console.log(data);
          this.gestiones = [...data.result];
        });
    },
    obtenerClientes() {
      axios
        .post(
          `${
            process.env.NODE_ENV == "development"
              ? process.env.VUE_APP_HOST
              : window.location.origin
          }/axios_bitacora/clientes`,
          {}
        )
        .then(({ data }) => {
          console.log("clientes", data);
          data.result.map((c) => {
            c.camara_selected = c.camaras[0].id;
          });
          this.clientes = [...data.result];
        });
    },
    obtenerPersonas() {
      axios
        .post(
          `${
            process.env.NODE_ENV == "development"
              ? process.env.VUE_APP_HOST
              : window.location.origin
          }/axios_bitacora/personas`,
          {}
        )
        .then(({ data }) => {
          console.log(data);
          this.personas = [...data.result];
        });
    },
    obtenerVehiculos() {
      axios
        .post(
          `${
            process.env.NODE_ENV == "development"
              ? process.env.VUE_APP_HOST
              : window.location.origin
          }/axios_bitacora/vehiculos`,
          {}
        )
        .then(({ data }) => {
          console.log("vehiculos", data);
          this.personas = [...data.result];
        });
    },
  },
};
</script>

<style lang="scss" >
.menutabs nav {
  height: 90vh;
  overflow-y: auto;
  overflow-x: hidden;
}
</style>