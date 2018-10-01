import { shallowMount } from '@vue/test-utils';
import axios from 'axios';
import CustomerPage from '@/views/CustomerPage.vue';
import mockedCustomers from '../mocks/mockedCustomers';
import { Vue } from 'vue-property-decorator';
jest.mock('axios');
describe('CustomerPage.vue', () => {
    beforeEach(() => {
        axios.get.mockResolvedValue(mockedCustomers());
    });
    it('renders customers lists', () => {
        const wrapper = shallowMount(CustomerPage);
        // imprescindible para que te tome los cambios
        Vue.nextTick(() => {
            expect(wrapper.findAll('tr').length).toBe(2);
        });
    });
    it('renders second mocked customer in customers lists', () => {
        const wrapper = shallowMount(CustomerPage);
        // imprescindible para que te tome los cambios
        Vue.nextTick(() => {
            expect(wrapper.find('#cust51').text()).toBe('Nestle');
        });
    });
});
//# sourceMappingURL=customer.spec.js.map