import React, { useState, useEffect } from 'react'
import { List, ImagePicker, Toast, InputItem, Button } from 'antd-mobile'
import { createForm } from 'rc-form'
import { useStoreHook } from 'think-react-store'

function Edit(props) {
  const {
    user: { editUserAsync, getUserAsync, avatar, phone, sign }
  } = useStoreHook()
  const [files, setFiles] = useState([{ url: avatar }])
  const { getFieldProps, validateFields } = props.form
  const handleChange = files => {
    if (files[0]?.file?.size / 1024 / 1024 > 0.5) {
      Toast.fail('图片大小不能大于0.5M')
      return
    }
    setFiles(files)
  }
  const handleSubmit = () => {
    if (!files.length) {
      Toast.fail('请上传到浏览器')
      return
    }
    validateFields((err, value) => {
      if (err) {
        Toast.fail('请将信息补充完整')
        return
      } else {
        editUserAsync({
          avatar: files[0].url,
          phone: value.tel,
          sign: value.sign
        })
      }
    })
  }
  useEffect(() => {
    getUserAsync()
  }, [])

  return (
    <div className="user-edit">
      <List>
        <ImagePicker
          files={files}
          selectable={files.length < 1}
          onChange={handleChange}
        />
        <InputItem
          placeholder="电话"
          {...getFieldProps('tel', {
            rules: [{ required: true }],
            initialValue: phone
          })}
        >
          电话
        </InputItem>
        <InputItem
          placeholder="签名"
          {...getFieldProps('sign', {
            rules: [{ required: true }],
            initialValue: sign
          })}
        >
          签名
        </InputItem>
      </List>
      <Button
        type="warning"
        style={{ marginTop: '20px' }}
        onClick={handleSubmit}
      >
        修改
      </Button>
    </div>
  )
}
export default createForm()(Edit)
