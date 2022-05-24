import { shallowMount } from '@vue/test-utils'
import NavMobile from '@/components/NabMobile.vue';
describe('TheMain.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(NavMobile, {
      props: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
