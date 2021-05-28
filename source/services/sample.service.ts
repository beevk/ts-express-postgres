import { Service } from 'typedi';

@Service()
export default class SampleInjectedService {
    printMessage() {
        console.log('Ping from SampleInjectedService!');
    }
}
