<template>
<div>
    <div class="edit_container q-edit">
        <quill-editor 
            v-model="content" 
            ref="myQuillEditor" 
            :options="editorOption" 
            @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
            @change="onEditorChange($event)">
        </quill-editor>
       <div class="edit-btn"> <el-button type="primary">提交</el-button></div>
    </div>
    </div>
</template>
<script>
import { quillEditor } from "vue-quill-editor"; //调用编辑器
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
export default {
    components: {
        quillEditor
    },
    data() {
        return {
            content: `<p></p><p><br></p><p><h3>文本编辑</h3></p>`,
            editorOption: {}
        }
    },
    methods: {
        onEditorReady() { // 准备编辑器
 
        },
        onEditorBlur(){}, // 失去焦点事件
        onEditorFocus(){}, // 获得焦点事件
        onEditorChange(){}, // 内容改变事件
    },
    computed: {
        editor() {
            return this.$refs.myQuillEditor.quill;
        },
    }
}
</script>

<style lang="stylus" scoped>
.q-edit
  margin-top 70px
.quill-editor
  height 300px!important
.edit-btn
  margin 100px 0 0 500px
  
  
</style>