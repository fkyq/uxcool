<template>
  <div>
    <h4>login horizontal</h4>
    <div class="demo">
      <ux-form ref="formRef"
               @submit="onSubmit">
        <ux-form-item>
          <ux-field-decorator name="name"
                              rules="required">
            <ux-input placeholder="UserName"
                      v-model="form.userName">
              <ux-icon type="account"
                       slot="prefix"
                       style="color:rgba(0,0,0,.25)" />
            </ux-input>
          </ux-field-decorator>
        </ux-form-item>
        <ux-form-item>
          <ux-field-decorator :rules="[{required:true,},{regex: /^\d{6,}$/i,message:'测试用例regex', }]"
                              name="password">
            <ux-input type="password"
                      placeholder="Password"
                      v-model="form.password">
              <ux-icon type="lock"
                       slot="prefix"
                       style="color:rgba(0,0,0,.25)" />
            </ux-input>
          </ux-field-decorator>
        </ux-form-item>
        <ux-form-item>
          <ux-field-decorator name="remember">
            <ux-checkbox v-model="form.remember">Remember me</ux-checkbox>
          </ux-field-decorator>
          <a href="###"
             style="float:right">Forgot Password</a>
          <ux-button type="primary"
                     style="width:100%"
                     html-type="submit">Log in</ux-button>
          <div style="text-align: center;">
            <a href="###">register now!</a>
          </div>
        </ux-form-item>
      </ux-form>
    </div>
  </div>
</template>

<script>
  import { Form, Input, Button, Icon, Checkbox } from '@cloud-sn/uxcool';

  export default {
    components: {
      UxForm: Form,
      UxFormItem: Form.Item,
      UxFieldDecorator: Form.FieldDecorator,
      UxInput: Input,
      UxButton: Button,
      UxIcon: Icon,
      UxCheckbox: Checkbox,
    },
    data() {
      return {
        form: {
          userName: '',
          password: '',
          remember: false,
        },
      };
    },
    methods: {
      onSubmit() {
        const { $refs: { formRef } } = this;
        if (formRef) {
          formRef.validate().then(({ valid, values }) => {
            if (!valid) {
              console.log('Receive values', values);
            }
          });
        }
      },
    },
  };
</script>
