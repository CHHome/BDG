
/*宣传品资料制作申请*/
<style scoped>

  th{
    position: relative;
    text-align: center;
    border:1px solid rgba(1,2,4,0.52)!important;

  }
  td{
    position: relative;
    border:1px solid rgba(1,2,4,0.52)!important;
  }
  td *{
    margin-left: 30px;
  }
  /*th span{*/
  /*position: absolute;*/
  /*top:40%;*/
  /*}*/
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
  .curtain{
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #dd4b39;
  }

  .showList{
    background-color: #00c0ef;
    width:65%;
    border: none!important;
    margin: 0 auto;
  }
  .showList th, .showList td{
    border: none!important;
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
                <ma-dialog
                  :key="viewId"
                  v-show="dialogShow"
                  @cancel="cancel"
                  @save="save"
                ></ma-dialog>
                <modify-material
                  :key="viewId"
                  v-if="modifyShow"
                  :nowIndex="index"
                  :nowItem="item"
                  @MoCancel="MoCancel"
                  @MoSave="MoSave"
                ></modify-material>
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
                        <th>类别</th>
                        <td colspan="3">
                          <input type="checkbox" name="category" value="tv">电视媒体类
                          <input type="checkbox" name="category" value="network">网络媒体类
                          <input type="checkbox" name="category" value="poster">电梯海报类
                          <input type="checkbox" name="category" value="news">新闻稿件类
                          <input type="checkbox" name="category" value="wechat">微博微信类
                          <input type="checkbox" name="category" value="other">其他
                        </td>
                      </tr>
                      <tr>
                        <th>发布媒介(对象)</th>
                        <td colspan="3">
                          <span>新闻稿件类:</span>
                          <input type="checkbox" name="media" value="gz">广州日报
                          <input type="checkbox" name="media" value="nfcity">南方都市报
                          <input type="checkbox" name="media" value="nfweek">南方周末<br/>
                          <span>微博微信类:</span>
                          <input type="checkbox" name="media" value="citywb">都市微博
                        </td>
                      </tr>
                      <tr>
                        <th>信息发布(投放)开始时间</th>
                        <td><input type="text" name="publishTime"></td>
                        <th>信息发布(投放)结束时间</th>
                        <td><input type="text" name="endTime"></td>
                      </tr>
                      <tr>
                        <th>投放平台</th>
                        <td colspan="3">
                          <input type="checkbox" name="platform" value="sina">新浪微博
                          <input type="checkbox" name="platform" value="wechatplat">微信平台
                          <input type="checkbox" name="platform" value="website">中心官网<br/>
                        </td>
                      </tr>
                      <tr>
                        <th><span>内容</span></th>
                        <td colspan="3">
                          <textarea rows="5" cols="80" name="content">
                          </textarea>
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
                      <!--<tr>-->
                        <!--<td colspan="4">-->
                          <!--<div class="submit" @click="submit">提交</div>-->
                          <!--<div class="submit" @click="rejest">退回拟稿人</div>-->
                        <!--</td>-->
                      <!--</tr>-->
                      </tbody>
                    </table>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- /.content -->
    </div>
    <!-- /.content-wrapper -->
    <!-- Control Sidebar -->
    <aside class="control-sidebar control-sidebar-dark">
      <!-- Create the tabs -->
      <ul class="nav nav-tabs nav-justified control-sidebar-tabs">
        <li><a href="#control-sidebar-home-tab" data-toggle="tab"><i class="fa fa-home"></i></a></li>
        <li><a href="#control-sidebar-settings-tab" data-toggle="tab"><i class="fa fa-gears"></i></a></li>
      </ul>
      <!-- Tab panes -->
      <div class="tab-content">
        <!-- Home tab content -->
        <div class="tab-pane" id="control-sidebar-home-tab">
          <h3 class="control-sidebar-heading">Recent Activity</h3>
          <ul class="control-sidebar-menu">
            <li>
              <a href="javascript:void(0)">
                <i class="menu-icon fa fa-birthday-cake bg-red"></i>

                <div class="menu-info">
                  <h4 class="control-sidebar-subheading">Langdon's Birthday</h4>

                  <p>Will be 23 on April 24th</p>
                </div>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <i class="menu-icon fa fa-user bg-yellow"></i>

                <div class="menu-info">
                  <h4 class="control-sidebar-subheading">Frodo Updated His Profile</h4>

                  <p>New phone +1(800)555-1234</p>
                </div>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <i class="menu-icon fa fa-envelope-o bg-light-blue"></i>

                <div class="menu-info">
                  <h4 class="control-sidebar-subheading">Nora Joined Mailing List</h4>

                  <p>nora@example.com</p>
                </div>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <i class="menu-icon fa fa-file-code-o bg-green"></i>

                <div class="menu-info">
                  <h4 class="control-sidebar-subheading">Cron Job 254 Executed</h4>

                  <p>Execution time 5 seconds</p>
                </div>
              </a>
            </li>
          </ul>
          <!-- /.control-sidebar-menu -->

          <h3 class="control-sidebar-heading">Tasks Progress</h3>
          <ul class="control-sidebar-menu">
            <li>
              <a href="javascript:void(0)">
                <h4 class="control-sidebar-subheading">
                  Custom Template Design
                  <span class="label label-danger pull-right">70%</span>
                </h4>

                <div class="progress progress-xxs">
                  <div class="progress-bar progress-bar-danger" style="width: 70%"></div>
                </div>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <h4 class="control-sidebar-subheading">
                  Update Resume
                  <span class="label label-success pull-right">95%</span>
                </h4>

                <div class="progress progress-xxs">
                  <div class="progress-bar progress-bar-success" style="width: 95%"></div>
                </div>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <h4 class="control-sidebar-subheading">
                  Laravel Integration
                  <span class="label label-warning pull-right">50%</span>
                </h4>

                <div class="progress progress-xxs">
                  <div class="progress-bar progress-bar-warning" style="width: 50%"></div>
                </div>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <h4 class="control-sidebar-subheading">
                  Back End Framework
                  <span class="label label-primary pull-right">68%</span>
                </h4>

                <div class="progress progress-xxs">
                  <div class="progress-bar progress-bar-primary" style="width: 68%"></div>
                </div>
              </a>
            </li>
          </ul>
          <!-- /.control-sidebar-menu -->

        </div>
        <!-- /.tab-pane -->

        <!-- Settings tab content -->
        <div class="tab-pane" id="control-sidebar-settings-tab">
          <form method="post">
            <h3 class="control-sidebar-heading">General Settings</h3>

            <div class="form-group">
              <label class="control-sidebar-subheading">
                Report panel usage
                <input type="checkbox" class="pull-right" checked>
              </label>

              <p>
                Some information about this general settings option
              </p>
            </div>
            <!-- /.form-group -->

            <div class="form-group">
              <label class="control-sidebar-subheading">
                Allow mail redirect
                <input type="checkbox" class="pull-right" checked>
              </label>

              <p>
                Other sets of options are available
              </p>
            </div>
            <!-- /.form-group -->

            <div class="form-group">
              <label class="control-sidebar-subheading">
                Expose author name in posts
                <input type="checkbox" class="pull-right" checked>
              </label>

              <p>
                Allow the user to show his name in blog posts
              </p>
            </div>
            <!-- /.form-group -->

            <h3 class="control-sidebar-heading">Chat Settings</h3>

            <div class="form-group">
              <label class="control-sidebar-subheading">
                Show me as online
                <input type="checkbox" class="pull-right" checked>
              </label>
            </div>
            <!-- /.form-group -->

            <div class="form-group">
              <label class="control-sidebar-subheading">
                Turn off notifications
                <input type="checkbox" class="pull-right">
              </label>
            </div>
            <!-- /.form-group -->

            <div class="form-group">
              <label class="control-sidebar-subheading">
                Delete chat history
                <a href="javascript:void(0)" class="text-red pull-right"><i class="fa fa-trash-o"></i></a>
              </label>
            </div>
            <!-- /.form-group -->
          </form>
        </div>
        <!-- /.tab-pane -->
      </div>
    </aside>
    <!-- /.control-sidebar -->
    <!-- Add the sidebar's background. This div must be placed
         immediately after the control sidebar -->
    <div class="control-sidebar-bg"></div>
  </div>
</template>

<script>
  import MaDialog from '@/components/MaterialDialog'
  import ModifyMaterial from '@/components/ModifyMaterial'
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
      MaDialog,
      ModifyMaterial
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
        console.log(data+"999999")
        this.materialListL[index] = data;
        this.modifyShow=false;
        this.$store.commit('unShowDialog');
      }
    }
  }
</script>
