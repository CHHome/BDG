
/*宣传信息发布申请*/
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
          <li class="active">宣传信息发布申请</li>
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
                      <tr>
                        <td colspan="4">
                          <div class="submit" @click="submit">提交</div>
                          <div class="submit" @click="rejest">退回拟稿人</div>
                        </td>
                      </tr>
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
  </div>
</template>

<script>
  export default{
    methods:{
      submit(){
        let formData = new FormData(document.getElementById('form1'));
        this.$http.post('http://127.0.1:8082/msPublish',formData)
          .then(res =>{
            console.log(res.data);
          },res =>{

          });
      },
      rejest(){
        console.log("reject")
      }
    }
  }
</script>
