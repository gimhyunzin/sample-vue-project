<template>
  <div>
    <!-- menu access control -->
    <a-table :columns="columns" :dataSource="data" style="width: 500px">
      <span slot="access" slot-scope="access"><a-switch :default-checked="access"></a-switch></span>
      <span slot="permission" slot-scope="permission"><a-switch :default-checked="permission"></a-switch></span>
    </a-table>

    <a-divider type="horizontal" />

    <!-- picker -->
    <div>
      <a-time-picker />
      <a-divider type="vertical" />
      <a-date-picker @change="onChange" />
      <a-divider type="vertical" />
      <a-month-picker @change="onChange" placeholder="Select month" />
      <a-divider type="vertical" />
      <a-range-picker @change="onChange" />
      <a-divider type="vertical" />
      <a-week-picker @change="onChange" placeholder="Select week" />
    </div>

    <a-divider type="horizontal" />

    <!-- switch -->
    <div>
      <a-switch defaultChecked />
      <a-divider type="vertical" />
      <a-switch size="small" defaultChecked />
    </div>

    <a-divider type="horizontal" />

    <!-- Modal -->
    <Modal></Modal>

    <a-divider type="horizontal" />

    <!-- drawer -->
    <Drawer></Drawer>

    <a-divider type="horizontal" />

    <!-- table -->
    <Table></Table>

    <a-divider type="horizontal" />

  </div>

</template>
<script>
    const columns = [
        {
            title: '-',
            dataIndex: 'target',
            key: 'target'
        },
        {
            title: '메뉴 접근',
            dataIndex: 'access',
            key: 'access',
            scopedSlots: { customRender: 'access' },
        },
        {
            title: '컨텐츠 등록/이동/댓글',
            dataIndex: 'permission',
            key: 'permission',
            scopedSlots: { customRender: 'permission' },
        },
    ];

    const data = [
        {
            key: '1',
            target: '마스터',
            access: true,
            permission: true
        },
        {
            key: '2',
            target: '매니저',
            access: true,
            permission: true
        },
        {
            key: '3',
            target: '서비스담당자',
            access: true,
            permission: false
        },
        {
            key: '4',
            target: '상담원',
            access: false,
            permission: false
        },
    ];

    import Drawer from "../components/Drawer";
    import Modal from "../components/Modal";
    import Table from "../components/Table";

    export default {
        name: 'Admin',
        components: {Drawer, Modal, Table},
        methods: {
            onChange () {

            }
        },
        data() {
            return {
                data,
                columns,
            };
        },
    };
</script>
