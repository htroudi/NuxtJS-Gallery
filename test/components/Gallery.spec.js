import { mount } from '@vue/test-utils'
import Gallery from '~/components/Gallery'

describe('Gallery', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Gallery)
    expect(wrapper.vm).toBeTruthy()
  })
})
