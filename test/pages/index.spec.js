import { mount } from '@vue/test-utils'
import Index from '~/pages/index'

describe('Index', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Index)
    expect(wrapper.vm).toBeTruthy()
  })
})
