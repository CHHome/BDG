
/*宣传品资料制作申请*/
<style scoped>

  #form1 th{
    position: relative;
    text-align: center;
    border:1px solid rgba(1,2,4,0.52)!important;

  }
  #form1 td{
    position: relative;
    border:1px solid rgba(1,2,4,0.52)!important;
  }
  #form1{
    width:65%;
    margin: 0 auto;
  }
  td *{
    margin-left: 30px;
  }
  .add {
    background-color: #00a65a;
    text-align: center;
    padding: 5px 0;
    width: 65%;
    margin: 0 auto;
    cursor: pointer;
  }
  .add:hover{
    color: #fff;
  }
  .add i{
    margin-right: 7px;
  }

  .dialogParent{
    position: relative;
  }

  .showList{
    background-color: #00c0ef;
    width:65%;
    margin: 0 auto;
    margin-top: 15px;
    border-radius: 4px;
  }
  .showList th, .showList td{
  }
  .showList .ops{
    text-align: right;
  }
  .showList .op{
    padding: 5px 0;
    color: #fff;
    margin: 3px;
    cursor: pointer;
  }
  .submit{
    width:65%;
    margin: 10px auto;
    text-align:center ;
  }
  .submit div{
    border-style: none;
    line-height: 32px;
    padding: 0 20px;
    background-image: linear-gradient(-133deg,#004CFB 0,#85A1E1 100%);
    border-radius: 16px;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #FFF;
    letter-spacing: 0;
    display: inline-block;
    cursor: pointer;
    margin-right: 20px;
  }
</style>

<template>
  <div>
    <div class="content-wrapper">
      <section class="content-header">
        <h1>

          <small></small>
        </h1>
        <ol class="breadcrumb">
          <li><i class="fa fa-dashboard">宣传管理</i></li>
          <li class="active">宣传品（资料）制作申请</li>
        </ol>
      </section>

      <!-- Main content -->
      <section class="content">
        <div class="row">
          <div class="col-md-12">
            <div class="box">
              <div class="box-header with-border">
                <h3 class="box-title">待审批</h3>
                <div class="box-tools pull-right">
                  <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
                  </button>
                  <div class="btn-group">
                    <button type="button" class="btn btn-box-tool dropdown-toggle" data-toggle="dropdown">
                      <i class="fa fa-wrench"></i></button>
                    <ul class="dropdown-menu" role="menu">
                      <li><a href="#">Action</a></li>
                      <li><a href="#">Another action</a></li>
                      <li><a href="#">Something else here</a></li>
                      <li class="divider"></li>
                      <li><a href="#">Separated link</a></li>
                    </ul>
                  </div>
                  <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
                </div>
              </div>
              <!--事务管理共用模块-->
              <div class="box-body">
                <div class="table-responsive showList" v-for="(item,index) in materialListL">
                  <table class="table table-bordered no-margin">
                    <tbody>
                    <tr class="ops">
                      <td colspan="4">
                        <span class="op" @click="modify(item,index)">修改</span>
                        <span class="op" @click="deleteItem(index)">删除</span>
                      </td>
                    </tr>
                    <tr>
                      <th>宣传片类别</th>
                      <td>{{item.category}}</td>
                      <th>宣传片名称</th>
                      <td>{{item.cardName}}</td>
                    </tr>
                    <tr>
                      <th>制作方式</th>
                      <td colspan="2">
                        {{item.mode}}
                      </td>
                    </tr>
                    <tr>
                      <th>要求完成时间</th>
                      <td>{{item.endTime}}</td>
                      <th>规格</th>
                      <td>{{item.size}}</td>
                    </tr>
                    <tr>
                      <th>单位</th>
                      <td>{{item.unit}}</td>
                      <th>制作数量</th>
                      <td>{{item.number}}</td>
                    </tr>
                    <tr>
                      <th>广告公司名称</th>
                      <td colspan="3">{{item.company}}</td>
                    </tr>
                    <tr>
                      <th>广告公司联系人</th>
                      <td>{{item.charge}}</td>
                      <th>广告公司联系方式</th>
                      <td>{{item.comTel}}</td>
                    </tr>
                    <tr>
                      <th>费用(元)</th>
                      <td colspan="3">{{item.cost}}</td>
                    </tr>
                    </tbody>
                  </table>
                </div>
                <div class="add" @click="add"><i class="fa fa-plus" aria-hidden="true"></i>添加申请资料</div>
                <mark-dialog
                  :key="viewId"
                  v-show="dialogShow"
                  @cancel="cancel"
                  @save="save"
                ></mark-dialog>
                <mark-modify
                  :key="viewId"
                  v-if="modifyShow"
                  :nowIndex="index"
                  :nowItem="item"
                  @MoCancel="MoCancel"
                  @MoSave="MoSave"
                ></mark-modify>
                <form  id="form1" enctype="multipart/form-data">
                  <div class="table-responsive">
                    <table class="table table-bordered no-margin">
                      <tbody>
                      <tr>
                        <th>申请部门</th>
                        <td><input type="text" name="department"></td>
                        <th>申请时间</th>
                        <td><input type="text" name="time"></td>
                      </tr>
                      <tr>
                        <th>申请人</th>
                        <td><input type="text" name="applicant"></td>
                        <th>联系电话</th>
                        <td><input type="text" name="tel"></td>
                      </tr>
                      <tr>
                        <th>标题</th>
                        <td colspan="3"><input type="text" name="title"></td>
                      </tr>
                      <tr>
                        <th>总费用</th>
                        <td colspan="3">
                          <input type="text" name="SumCost">
                        </td>
                      </tr>
                      <tr>
                        <th><span>备注</span></th>
                        <td colspan="3">
                          <textarea rows="3" cols="80" name="remark">
                          </textarea>
                        </td>
                      </tr>
                      <tr>
                        <th><span>附件</span></th>
                        <td colspan="3">
                          <input type="file" name="upLoadFile">
                        </td>
                      </tr>
                      <tr>
                        <th><span>领导审批意见</span></th>
                        <td colspan="3">
                          <textarea rows="3" cols="80" name="suggest"></textarea>
                        </td>
                      </tr>
                      <tr>
                        <th><span>填写审批意见</span></th>
                        <td colspan="3">
                          <textarea rows="3" cols="80" name="mySuggest"></textarea>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </form>
                <div class="submit">
                  <div @click="submit">提交</div>
                  <div>退回拟稿人</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- /.content -->
    </div>
  </div>
</template>

<script>
  import MarkDialog from '@/components/MarkDialog'
  import MarkModify from '@/components/MarkModify'
  export default {
    data(){
      return {
        materialListL:[],
        dialogShow:false,
        modifyShow:false,
        viewId:0,
        item:{},
        index:{}

      }
    },
    components:{
      MarkDialog,
      MarkModify
    },
    methods:{
      add(){
        this.viewId++;
        this.dialogShow = true;
        this.$store.commit('showDialog');
      },
      save(data){
        this.materialListL.push(data);
        this.dialogShow = false;
        this.$store.commit('unShowDialog');
      },
      cancel(){
        this.dialogShow = false;
        this.$store.commit('unShowDialog');
      },
      modify(item,index){
        this.viewId++;
        this.index = index;
        this.item = item;
        console.log(index,item);
        this.modifyShow = true;
        this.$store.commit('showDialog');
      },
      deleteItem(index){
        this.materialListL.splice(index,1);
      },
      MoCancel(){
        this.$store.commit('unShowDialog');
        this.modifyShow=false;
      },
      MoSave(index,data){
        this.materialListL[index] = data;
        this.modifyShow=false;
        this.$store.commit('unShowDialog');
      },
      submit(){
        let formData = new FormData(document.getElementById('form1'));
        formData.append('materials',JSON.stringify(this.materialListL));//转化为json提交
        this.$http.post('http://127.0.1:8082/msPublish',formData)
          .then(res =>{
            console.log(res.data);
          },res =>{

          });
      },
    }
  }
</script>
