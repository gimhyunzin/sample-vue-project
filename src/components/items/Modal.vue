<template>
  <div>
    <a-button type="primary" @click="showModal">
      Open Modal with customized footer
    </a-button>
    <a-modal v-model="modalVisible" title="Title" onOk="handleOk">
      <template slot="footer">
        <a-button key="back" @click="handleCancel">Return</a-button>
        <a-button key="submit" type="primary" :loading="loading" @click="handleOk">
          Submit
        </a-button>
      </template>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </a-modal>
  </div>
</template>

<script>
    export default {
        name: "Modal",
        data () {
            return {
                loading: false,
                modalVisible: false,
            }
        },
        methods: {
            showModal() {
                this.modalVisible = true;
            },
            handleOk(e) {
                this.loading = true;
                setTimeout(() => {
                    this.modalVisible = false;
                    this.loading = false;
                }, 3000);
            },
            handleCancel(e) {
                this.modalVisible = false;
            },
        }
    }
</script>

<style scoped>

</style>
