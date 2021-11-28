import { mount } from '@vue/test-utils'
import Title from '~/components/Title'

describe('Title', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Title)
    expect(wrapper.vm).toBeTruthy()
  })
})
