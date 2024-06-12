import basicConfig from '@materials/questions/common/config/basicConfig'

const meta = {
  title: '多选',
  type: 'checkbox',
  componentName: 'CheckBoxModule',
  formConfig: [
    basicConfig,
    {
      name: 'optionConfig',
      title: '选项配置',
      type: 'Customed',
      key: 'optionConfig',
      content: [
        {
          label: '至少选择数',
          type: 'InputNumber',
          key: 'minNum',
          value: '',
          min: 0,
          max: 'maxNum',
          contentClass: 'input-number-config'
        },
        {
          label: '最多选择数',
          type: 'InputNumber',
          key: 'maxNum',
          value: '',
          min: 'minNum',
          contentClass: 'input-number-config'
        }
      ]
    },
    {
      name: 'optionLimit',
      label: '选项配额',
      labelStyle: {
        'font-weight': 'bold'
      },
      type: 'DialogSetter',
      // 输出转换
      setterAdapter({ options, limitRevert, limitNoDisplay}) {
        return [{
          key: 'options',
          value: options
        },
        {
          key: 'limitRevert',
          value: limitRevert
        },
        {
          key: 'limitNoDisplay',
          value: limitNoDisplay
        }]
      }
    },
  ],
  editConfigure: {
    optionEdit: {
      show: true
    },
    optionEditBar: {
      show: true,
      configure: {
        showOthers: true,
        showAdvancedConfig: true
      }
    }
  }
}

export default meta
