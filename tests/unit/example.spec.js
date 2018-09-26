import { shallowMount } from '@vue/test-utils';
import axios from 'axios';
import { MockCustomerService } from '../mocks/mockCustomerService';
import CustomerPage from '@/views/CustomerPage.vue';
describe('CustomerPage.vue', () => {
    beforeEach(() => jest.mock('axios'));
    it('renders customers lists', () => {
        axios.get.mockResolvedValue(new MockCustomerService().findAll());
        const wrapper = shallowMount(CustomerPage, {});
        expect(wrapper.findAll("tr").length).toBe(2);
    });
});
//# sourceMappingURL=example.spec.js.map