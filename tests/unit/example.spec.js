import { shallowMount } from '@vue/test-utils';
import MockCustomerService from '../mocks/mockCustomerService';
import CustomerPage from '@/views/CustomerPage.vue';
import axios from 'axios';
describe('CustomerPage.vue', () => {
    beforeEach(() => jest.mock('axios'));
    it('renders customers lists', () => {
        axios.get.mockResolvedValue(new MockCustomerService().findAll());
        const wrapper = shallowMount(CustomerPage, {});
        expect(wrapper.findAll("tr").length).toBe(2);
    });
});
//# sourceMappingURL=example.spec.js.map