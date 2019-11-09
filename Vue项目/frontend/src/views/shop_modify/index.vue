<template>
  <div class="shop-add-box">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="120px"
      class="demo-ruleForm upForm"
       style = "max-width: 700px;"
      enctype="multipart/form-data"
    >
    <el-form-item label="店铺社会统一信用码">
        <el-input v-model = "ruleForm.id" name = "id" disabled></el-input>
      </el-form-item>
      <el-form-item label="店铺名称" prop="name">
        <el-input v-model="ruleForm.name" name="name"></el-input>
      </el-form-item>
      <el-form-item label="详细地址" prop="address">
        <el-input v-model="ruleForm.address" name="address"></el-input>
      </el-form-item>
      <el-form-item label="联系电话" prop="phone">
        <el-input v-model="ruleForm.phone" name = "phone"></el-input>
      </el-form-item>
      <el-form-item label="店铺简介" prop="info">
        <el-input v-model="ruleForm.info" name = "info"></el-input>
      </el-form-item>
      <el-form-item label="店铺标语" prop="slogan">
        <el-input v-model="ruleForm.slogan" name = "slogan"></el-input>
      </el-form-item>
      <el-form-item label="店铺分类">
        <el-cascader v-model="value" :options="options" name = "category"></el-cascader>
      </el-form-item>
      <el-form-item label="店铺特点">
        <ul class="feature-box">
          <li v-for="item in feature" :key="item.id">
            <span style = "margin-right: 4px;" :class="{ active: item.f }">{{ item.text }}</span>
            <el-switch v-model="item.f" active-color="#13ce66" inactive-color="#bfcbd9"></el-switch>
          </li>
        </ul>
      </el-form-item>
      <el-form-item label="配送费" required>
        <el-input-number name = "delivery" v-model="delivery" :min="1" :max="10" label="描述文字"></el-input-number>
      </el-form-item>
      <el-form-item label="起送价" required>
        <el-input-number name = "price" v-model="price" :min="1" :max="10000" label="描述文字"></el-input-number>
      </el-form-item>
      <el-form-item label="营业时间" prop="delivery">
        <el-time-select
          placeholder="起始时间"
           name = "startTime"
          v-model="startTime"
            :picker-options="{
            start: '08:30',
            step: '00:15',
            end: '22:30'
          }"
        ></el-time-select><span>---</span>
        <el-time-select
          placeholder="结束时间"
          v-model="endTime"
           name = "endTime"
          :picker-options="{
            start: '08:30',
            step: '00:15',
            end: '22:30',
            minTime: startTime
          }"
        ></el-time-select>
      </el-form-item>
      <el-form-item label="上传店铺logo" prop="type">
      <el-upload
        class="avatar-uploader"
        action="https://jsonplaceholder.typicode.com/posts/"
        :show-file-list="false"
        :on-success="logoSuccess"
        :before-upload="beforeAvatarUpload">
        <img v-if="logoUrl" :src="logoUrl" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
      </el-form-item>
      <el-form-item label="上传营业执照" prop="type">
       <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="manageSuccess"
          :before-upload="beforeAvatarUpload">
          <img v-if="manageUrl" :src="manageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="上传餐饮许可证" prop="type">
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="diningSuccess"
          :before-upload="beforeAvatarUpload">
          <img v-if="diningUrl" :src="diningUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        name: "",
        address: "",
        phone: "",
        info: "",
        slogan: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入店铺名称", trigger: "blur" },
          { min: 3, max: 10, message: "长度在 3 到 10 个字符", trigger: "blur" }
        ],
        address: [
          { required: true, message: "请输入地址名称", trigger: "blur" },
          { min: 3, max: 10, message: "长度在 3 到 10 个字符", trigger: "blur" }
        ],
        info: [
          { required: true, message: "请输入店铺简介", trigger: "blur" },
          { min: 3, max: 10, message: "长度在 3 到 10 个字符", trigger: "blur" }
        ],
        phone: [
          { required: true, message: "请输入店铺联系方式", trigger: "blur" },
          { min: 3, max: 10, message: "长度在 3 到 10 个字符", trigger: "blur" }
        ],
        slogan: [
          { required: true, message: "请输入店铺标语", trigger: "blur" },
          { min: 3, max: 10, message: "长度在 3 到 10 个字符", trigger: "blur" }
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" }
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change"
          }
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change"
          }
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" }
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }]
      },
      value: "", // 这是店铺分类
      options: [
        // 这是店铺分类的选项
        {
          value: "zhinan",
          label: "快餐便当",
          children: [
            {
              value: "shejiyuanze",
              label: "简餐",

            },
            {
              value: "mifen",
              label: "米粉面馆",
            },
            {
              value: "baozi",
              label: "包子粥店",
            },
            {
              value: "shaguo",
              label: "香锅砂锅",
            },
            {
              value: "malatang",
              label: "麻辣烫",
            }

          ]
        },
        {
          value: "zujian",
          label: "异国料理",
          children: [
            {
              value: "rihan",
              label: "日韩料理",
            },
            {
              value: "xican",
              label: "西餐",
            },
            {
              value: "pisha",
              label: "披萨意面",
            },
            {
              value: "dongnanya",
              label: "东南亚菜",
            },
          
         
          ]
        },
        {
          value: "ziyuan",
          label: "小吃夜宵",
          children: [
            {
              value: "axure",
              label: "小龙虾"
            },
            {
              value: "sketch",
              label: "地方小吃"
            },
            {
              value: "jiaohu",
              label: "烧烤"
            }
          ]
        }
      ],
      feature: [
        {
          id: 1,
          text: "品牌保证",
          f: false
        },
        {
          id: 2,
          text: "新开店铺",
          f: false
        },
        {
          id: 3,
          text: "蜂鸟专送",
          f: false
        },
        {
          id: 4,
          text: "外卖保",
          f: false
        },
        {
          id: 5,
          text: "开发票",
          f: false
        },
        {
          id: 6,
          text: "准时达",
          f: false
        }
      ],
      delivery: 1, //配送费
      price: 10, //起送价格
      startTime: '',
      endTime: '',
      logoUrl: '',
      manageUrl: '',
      diningUrl: '',
      imageUrl: ''
    };
  },
  methods: {
     logoSuccess (res, file) {
       
        this.logoUrl = URL.createObjectURL(file.raw);
    },
     manageSuccess (res, file) {
       
        this.manageUrl = URL.createObjectURL(file.raw);
    },
     diningSuccess (res, file) {
       
        this.diningUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload() {
      // const isJPG = file.type === 'image/jpeg';
      // const isLt2M = file.size / 1024 / 1024 < 2;

      // if (!isJPG) {
      //   this.$message.error('上传头像图片只能是 JPG 格式!');
      // }
      // if (!isLt2M) {
      //   this.$message.error('上传头像图片大小不能超过 2MB!');
      // }
      // return isJPG && isLt2M;
    },
    submitForm() {
      console.log(this.$route.query)
     let form = new FormData($('.upForm')[0])
     var featureFlag=[]
     this.feature.map((item)=>{
       if(item.f){
         featureFlag.push(item.text)
         return
       }
     })
      form.append('feature', JSON.stringify(featureFlag))
      form.append('category',this.value)
      form.append('logoUrl',this.logoUrl)
      form.append('manageUrl',this.manageUrl)
      form.append('diningUrl',this.diningUrl)
       form.append('_id',this.$route.query._id)
      form.append('id', this.$route.query.id)
           var _this = this 

      $.ajax({
        url: 'http://localhost:3000/shop',
        type: 'PUT',
        cache: false, //不必须
        data: form,
        processData: false,//必须
        contentType: false,//必须
        success: function(data) {
        const result = JSON.parse( data )
          switch ( result.status ) {
            case 0:
              _this.$message({
                showClose: true,
                message: '店铺已经存在，请您确认过之后再次添加',
                type: 'warning'
              });
              break;
            case 2:
              _this.$message({
                showClose: true,
                message: '修改成功，即将自动条状列表页面',
                type: 'success',
                duration: 1000
              });
              setTimeout(() => {
                 _this.$message.close()
                 _this.$router.push('/shop')
              },1000)
              break;
          
            default:
              break;
          }
        }
      })
    },
    // resetForm(formName) {
    //   this.$refs[formName].resetFields();
    // }
    
  },
   mounted () {

   const { id,address,phone,info,slogan,name,feature,delivery,price,startTime,endTime,logoUrl,manageUrl,diningUrl } = this.$route.query
   this.feature.map( item => {
      if ( feature.indexOf( item.text ) != -1 ) {
        item.f = true 
        return 
      }
   })
   this.delivery = delivery 
   this.price = price 
   this.startTime = startTime

   this.endTime = endTime
   this.ruleForm.logoUrl = logoUrl
   this.ruleForm.manageUrl = manageUrl
   this.ruleForm.diningUrl = diningUrl
   this.ruleForm.name = name
   this.ruleForm.id = id
   this.ruleForm.address = address
   this.ruleForm.phone = phone
   this.ruleForm.info = info
   this.ruleForm.slogan = slogan
  
  }
};
</script>


<style lang="stylus" scoped>
.feature-box {
  display: flex;
  max-width: 350px;
  flex-wrap: wrap;

  li {
    margin: 8px;

    span {
      &.active {
        color: rgb(19, 206, 102);
      }
    }
  }
}

</style>
