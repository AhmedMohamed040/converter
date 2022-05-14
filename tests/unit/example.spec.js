import { shallowMount } from '@vue/test-utils'
import TheMain from '@/components/TheMain.vue';
describe('TheMain.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(TheMain, {
      props: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
