import { mount } from '@vue/test-utils'
import Details from '~/pages/Details'

describe('Details', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Details)
    expect(wrapper.vm).toBeTruthy()
  })
})
