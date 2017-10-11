

const baseUrl = 'http://127.0.0.1:8082';

//表格的键值对
const planTable = [
    {title:'No.',key:"id"},{title:'标题',key:'title'},{title:'小组名称',key:'groupName'},
    {title:'计划所属年份',key:'beloneTime'},{title:'计划事物类别',key:'type'},{title:'负责人',key:'master'},
    {title:'拟稿时间',key:'createTime'},{title:'完成情况',key:'situation'},{title:'状态',key:'status'}
  ];

const initData = {
  baseUrl:'',
  addUrl:'',
  deleteUrl:'',
  sourceKey:[]
}
export {baseUrl, planTable};
